package com.url_shortner.controller;

import com.url_shortner.dto.LinkRequestDto;
import com.url_shortner.dto.LinkResponseDto;
import com.url_shortner.service.LinkService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LinkController {

    private final LinkService service;

    public LinkController(LinkService service) {
        this.service = service;
    }

    @PostMapping("/links")
    public ResponseEntity<?> create(@RequestBody LinkRequestDto request) {
        return ResponseEntity.status(201).body(service.createLink(request));
    }

    @GetMapping("/links")
    public ResponseEntity<List<LinkResponseDto>> getAllLinks() {
        return ResponseEntity.ok(service.getAllLinks());
    }

    @GetMapping("/links/{code}")
    public ResponseEntity<?> getLink(@PathVariable String code) {
        return ResponseEntity.ok(service.getLinkByCode(code));
    }

    @DeleteMapping("/links/{code}")
    public ResponseEntity<?> deleteLink(@PathVariable String code) {
        boolean deleted = service.deleteLink(code);
        if (deleted) return ResponseEntity.ok().body("Deleted successfully");
        return ResponseEntity.status(404).body("Link not found");
    }
}
