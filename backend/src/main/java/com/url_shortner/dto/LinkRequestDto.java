package com.url_shortner.dto;

import lombok.Data;

@Data
public class LinkRequestDto {
    private String targetUrl;
    private String code; // optional
}
