package com.meme.meme_app.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.meme.meme_app.entity.Meme;
import com.meme.meme_app.repository.MemeRepository;

@RestController
@RequestMapping("/memes")
public class MemeController {

    @Autowired
    private MemeRepository memeRepository;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllMemes() {
        List<Meme> memes = memeRepository.findAll();
        Map<String, Object> response = new HashMap<>();
        Map<String, List<Meme>> embedded = new HashMap<>();
        embedded.put("memes", memes);
        response.put("_embedded", embedded);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Meme> createMeme(@RequestBody Meme meme) {
        Meme savedMeme = memeRepository.save(meme);
        return ResponseEntity.ok(savedMeme);
    }
}