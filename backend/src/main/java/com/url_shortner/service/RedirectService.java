package com.url_shortner.service;

import com.url_shortner.dao.LinkDao;
import com.url_shortner.entity.Link;
import com.url_shortner.exception.LinkNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RedirectService {

    private final LinkDao dao;

    public RedirectService(LinkDao dao) {
        this.dao = dao;
    }

    public String redirect(String code) {
        Link link = dao.findByCode(code).orElseThrow(() -> new LinkNotFoundException("Link not found"));
        link.setClickCount(link.getClickCount() + 1);
        link.setLastClicked(LocalDateTime.now());
        dao.save(link);
        return link.getTargetUrl();
    }
}
