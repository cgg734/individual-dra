package com.meme.meme_app.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.meme.meme_app.entity.Meme;
import com.meme.meme_app.repository.MemeRepository;

@Service
public class MemeService {

    @Autowired
    private MemeRepository memeRepository;

    public Meme saveMeme(Meme meme) {
        return memeRepository.save(meme);
    }

    public List<Meme> getAllMemes() {
        return (List<Meme>) memeRepository.findAll();
    }

    public Meme getMemeById(Long id) {
        return memeRepository.findById(id).orElse(null);
    }

    public void deleteMeme(Long id) {
        memeRepository.deleteById(id);
    }
}