package com.meme.meme_app.controller;

import com.meme.meme_app.service.ScrapingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/scraping")
public class ScrapingController {

    @Autowired
    private ScrapingService scrapingService;

    @GetMapping("/wikipedia")
    public String getWikipediaContent() {
        return scrapingService.scrapeWikipediaPage();
    }
}
