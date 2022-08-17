package com.KimNLee.web;

import com.KimNLee.service.menu.MenuService;
import com.KimNLee.web.dto.MenuResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class MenuApiController {

    private final MenuService menuService;

    @GetMapping("/api/v1/menu")
    public List<MenuResponseDto> search(@RequestParam("searchWord") String searchWord) {
        return menuService.search(searchWord);
    }
}
