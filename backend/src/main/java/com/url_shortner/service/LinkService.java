package com.url_shortner.service;

import com.url_shortner.dao.LinkDao;
import com.url_shortner.dto.LinkRequestDto;
import com.url_shortner.dto.LinkResponseDto;
import com.url_shortner.entity.Link;
import com.url_shortner.exception.CodeAlreadyExistsException;
import com.url_shortner.exception.InvalidUrlException;
import com.url_shortner.exception.LinkNotFoundException;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class LinkService {

    private final LinkDao dao;
    private final Random random = new Random();

    public LinkService(LinkDao dao) {
        this.dao = dao;
    }

    public LinkResponseDto createLink(LinkRequestDto request) {
        validateUrl(request.getTargetUrl());

        String code = request.getCode();
        if (code != null && !code.isEmpty()) {
            validateCustomCode(code);
            if (dao.exists(code)) throw new CodeAlreadyExistsException("Custom code already exists");
        } else {
            code = generateRandomCode();
        }

        Link link = new Link();
        link.setCode(code);
        link.setTargetUrl(request.getTargetUrl());
        link.setClickCount(0);
        link.setLastClicked(null);
        link.setCreatedAt(LocalDateTime.now());

        dao.save(link);

        return mapToDto(link);
    }

    public List<LinkResponseDto> getAllLinks() {
        return dao.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    public LinkResponseDto getLinkByCode(String code) {
        Link link = dao.findByCode(code).orElseThrow(() -> new LinkNotFoundException("Link not found"));
        return mapToDto(link);
    }

    public boolean deleteLink(String code) {
        return dao.findByCode(code).map(link -> {
            dao.delete(link);
            return true;
        }).orElse(false);
    }

    public String getTargetUrlAndIncrement(String code) {
        Link link = dao.findByCode(code).orElseThrow(() -> new LinkNotFoundException("Link not found"));
        link.setClickCount(link.getClickCount() + 1);
        link.setLastClicked(LocalDateTime.now());
        dao.save(link);
        return link.getTargetUrl();
    }

    private void validateUrl(String url) {
        try {
            new URL(url);
            if (!(url.startsWith("http://") || url.startsWith("https://"))) {
                throw new InvalidUrlException("URL must start with http:// or https://");
            }
        } catch (MalformedURLException e) {
            throw new InvalidUrlException("Invalid URL format");
        }
    }

    private void validateCustomCode(String code) {
        if (!code.matches("^[A-Za-z0-9]{6,8}$")) {
            throw new InvalidUrlException("Custom code must be 6-8 alphanumeric characters");
        }
    }

    private String generateRandomCode() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        String code;
        do {
            int length = 6 + random.nextInt(3); // 6-8 chars
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < length; i++) sb.append(chars.charAt(random.nextInt(chars.length())));
            code = sb.toString();
        } while (dao.exists(code));
        return code;
    }

    private LinkResponseDto mapToDto(Link link) {
        return new LinkResponseDto(
                link.getCode(),
                link.getTargetUrl(),
                link.getClickCount(),
                link.getLastClicked(),
                link.getCreatedAt()
        );
    }
}
