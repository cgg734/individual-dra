package com.meme.meme_app.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ScrapingService {

    public String scrapeWikipediaPage() {
        String url = "https://es.wikipedia.org/wiki/Meme_(internet)";
        try {
            Document document = Jsoup.connect(url).get();
            Element content = document.selectFirst("#mw-content-text .mw-parser-output");
            return content.html();
        } catch (IOException e) {
            e.printStackTrace();
            return "Error retrieving content";
        }
    }
}
