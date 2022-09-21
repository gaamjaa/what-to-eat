package com.KimNLee.domain.menu;

import com.KimNLee.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class Menu extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String category;

    private String keyword;

    private String image;

    private String description;

    @Builder
    public Menu(String name, String category, String keyword, String image, String description) {
        this.name = name;
        this.category = category;
        this.keyword = keyword;
        this.image = image;
        this.description = description;
    }
}
