package com.KimNLee.service.menu;

import com.KimNLee.domain.menu.MenuRepository;
import com.KimNLee.web.dto.MenuResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MenuService {

    private final MenuRepository menuRepository;

    @Transactional(readOnly = true)
    public List<MenuResponseDto> search(String searchWord) {
        return menuRepository.findBySearchWord(searchWord).stream()
                .map(MenuResponseDto::new)
                .collect(Collectors.toList());
    }

}
