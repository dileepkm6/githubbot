package com.stackroute.repository;

import com.stackroute.model.GitHubRepo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GitHubRepository extends MongoRepository<GitHubRepo,Integer> {
}
