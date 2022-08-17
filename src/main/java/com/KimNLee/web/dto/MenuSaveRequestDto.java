package com.KimNLee.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MenuSaveRequestDto {

    private String name;

    private String keyword;

    @Builder
    public MenuSaveRequestDto(String name, String keyword) {
        this.name = name;
        this.keyword = keyword;
    }
}
