package com.url_shortner.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class LinkResponseDto {
    private String code;
    private String targetUrl;
    private Integer clickCount;
    private LocalDateTime lastClicked;
    private LocalDateTime createdAt;
}
