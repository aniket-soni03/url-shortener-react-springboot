package com.url_shortner.repository;

import com.url_shortner.entity.Link;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LinkRepo extends JpaRepository<Link, Long> {
    Optional<Link> findByCode(String code);
    boolean existsByCode(String code);
}
