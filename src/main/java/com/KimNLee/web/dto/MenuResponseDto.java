package com.KimNLee.web.dto;

import com.KimNLee.domain.menu.Menu;
import lombok.Getter;

@Getter
public class MenuResponseDto {

    private Long id;

    private String name;

    private String keyword;

    private String image;

    private String description;

    public MenuResponseDto(Menu entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.keyword = entity.getKeyword();
        this.image = entity.getImage();
        this.description = entity.getDescription();
    }
}
