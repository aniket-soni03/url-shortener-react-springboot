package com.url_shortner.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "links")
@Data
public class Link {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;

    @Column(nullable = false)
    private String targetUrl;

    @Column(nullable = false)
    private Integer clickCount = 0;

    private LocalDateTime lastClicked;

    private LocalDateTime createdAt = LocalDateTime.now();
}
