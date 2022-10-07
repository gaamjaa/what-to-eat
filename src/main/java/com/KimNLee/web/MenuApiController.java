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

    @GetMapping("/api/menu/search")
    public List<MenuResponseDto> search(@RequestParam("searchWord") String searchWord) {
        return menuService.search(searchWord);
    }

    @GetMapping("/api/menu/searchName")
    public List<MenuResponseDto> searchName(@RequestParam("searchName") String searchName) {
        return menuService.search(searchName);
    }

    @GetMapping("/api/menu/random")
    public List<MenuResponseDto> random() {
        return menuService.random();
    }

    @GetMapping("/api/menu/category")
    public List<MenuResponseDto> category(@RequestParam("categoryWord") String categoryWord) {
        return menuService.category(categoryWord);
    }
}
