package com.url_shortner.dao;

import com.url_shortner.entity.Link;
import com.url_shortner.repository.LinkRepo;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class LinkDao {

    private final LinkRepo repo;

    public LinkDao(LinkRepo repo) {
        this.repo = repo;
    }

    public Link save(Link link) {
        return repo.save(link);
    }

    public boolean exists(String code) {
        return repo.existsByCode(code);
    }

    public Optional<Link> findByCode(String code) {
        return repo.findByCode(code);
    }

    public List<Link> findAll() {
        return repo.findAll();
    }

    public void delete(Link link) {
        repo.delete(link);
    }
}
