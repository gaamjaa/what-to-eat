package com.KimNLee.domain.menu;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MenuRepositoryTest {

    @Autowired
    MenuRepository menuRepository;

    @After
    public void cleanup() {
        menuRepository.deleteAll();
    }

    @Test
    public void 검색어로_찾기() {
        //given
        String name1 = "치킨";
        String keyword1 = "#닭고기 #튀김";

        menuRepository.save(Menu.builder()
                .name(name1)
                .keyword(keyword1)
                .build());

        String name2 = "탕수육";
        String keyword2 = "#돼지고기 #튀김 #중식";

        menuRepository.save(Menu.builder()
                .name(name2)
                .keyword(keyword2)
                .build());

        String name3 = "삼계탕";
        String keyword3 = "#닭고기 #탕";

        menuRepository.save(Menu.builder()
                .name(name3)
                .keyword(keyword3)
                .build());

        //when
        List<Menu> menuList_name = menuRepository.findBySearchWord("치킨");
        List<Menu> menuList_keyword1 = menuRepository.findBySearchWord("닭고기");
        List<Menu> menuList_keyword2 = menuRepository.findBySearchWord("튀김");

        //then
        Menu menu_name = menuList_name.get(0);
        assertThat(menu_name.getName()).isEqualTo(name1);
        assertThat(menu_name.getKeyword()).isEqualTo(keyword1);

        assertThat(menuList_keyword1.get(0).getName()).isEqualTo(name1);
        assertThat(menuList_keyword1.get(1).getName()).isEqualTo(name3);

        assertThat(menuList_keyword2.get(0).getName()).isEqualTo(name1);
        assertThat(menuList_keyword2.get(1).getName()).isEqualTo(name2);
    }
}
