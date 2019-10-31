package com.stackroute.controller;

import com.stackroute.model.GitHubRepo;
import com.stackroute.services.GitHubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/")
public class RepoController
{
    @Autowired
    GitHubService gitHubService;
    @RequestMapping("save")
    public ResponseEntity<?> save(@RequestBody GitHubRepo gitHubRepo)
    {
        gitHubService.saveRepo(gitHubRepo);
        return new ResponseEntity<GitHubRepo>(gitHubRepo, HttpStatus.CREATED);
    }
    @RequestMapping("allRepo")
    public ResponseEntity<List<GitHubRepo>> getAllRepo()
    {
        return new ResponseEntity<List<GitHubRepo>>(gitHubService.getAllRepo(), HttpStatus.OK);
    }
    @DeleteMapping("delete/{repoId}")
    public ResponseEntity<?> deleteRepo(@PathVariable int repoId) {
        GitHubRepo gitHubRepo=gitHubService.getRepoById(repoId);
        gitHubService.deleteRepo(repoId);
        return new ResponseEntity<GitHubRepo>(gitHubRepo, HttpStatus.OK);
    }

}
