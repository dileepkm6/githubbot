package com.stackroute.services;

import com.stackroute.model.GitHubRepo;
import com.stackroute.repository.GitHubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GitHubService
{
    @Autowired
    private GitHubRepository gitHubRepository;
    public void saveRepo(GitHubRepo  gitHubRepo)
    {
        gitHubRepository.save(gitHubRepo);
    }
    public List<GitHubRepo> getAllRepo()
    {
        return gitHubRepository.findAll();
    }
    public void deleteRepo(int repoId)
    {
        gitHubRepository.deleteById(repoId);
    }
    public boolean find(int repoId)
    {
        if(gitHubRepository.existsById(repoId))
        {
            return true;
        }
        return false;
    }
    public GitHubRepo getRepoById(int repoId)
    {
        return gitHubRepository.findById(repoId).get();
    }
}
