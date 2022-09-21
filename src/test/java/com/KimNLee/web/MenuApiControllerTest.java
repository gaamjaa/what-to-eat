package com.KimNLee.web;

import com.KimNLee.domain.menu.Menu;
import com.KimNLee.domain.menu.MenuRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class MenuApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setup() {
        mvc = MockMvcBuilders
                .webAppContextSetup(context)
                .build();
    }

    @After
    public void tearDown() throws Exception {
        menuRepository.deleteAll();
    }

    @Test
    public void Menu_검색() throws Exception {

        String name1 = "치킨";
        String category1 = "튀김류";
        String keyword1 = "#닭고기 #튀김";

        menuRepository.save(Menu.builder()
                .name(name1)
                .category(category1)
                .keyword(keyword1)
                .build());

        String name2 = "탕수육";
        String category2 = "튀김류";
        String keyword2 = "#돼지고기 #튀김 #중식";

        menuRepository.save(Menu.builder()
                .name(name2)
                .category(category2)
                .keyword(keyword2)
                .build());

        String name3 = "삼계탕";
        String category3 = "국(탕)류";
        String keyword3 = "#닭고기 #탕";

        menuRepository.save(Menu.builder()
                .name(name3)
                .category(category3)
                .keyword(keyword3)
                .build());

        String url = "http://localhost:" + port + "/api/menu/search";

        // 메뉴명으로 검색
        mvc.perform(
                get(url)
                        .param("searchWord", "탕수육"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is(name2)))
                .andExpect(jsonPath("$[0].keyword", is(keyword2)));

        // 키워드로 검색
        mvc.perform(
                        get(url)
                                .param("searchWord", "닭고기"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is(name1)))
                .andExpect(jsonPath("$[0].keyword", is(keyword1)))
                .andExpect(jsonPath("$[1].name", is(name3)))
                .andExpect(jsonPath("$[1].keyword", is(keyword3)));
    }

    @Test
    public void Random_검색() throws Exception {

        String name = "치킨";
        String category = "튀김류";
        String keyword = "#닭고기 #튀김";

        menuRepository.save(Menu.builder()
                .name(name)
                .category(category)
                .keyword(keyword)
                .build());

        String url = "http://localhost:" + port + "/api/menu/random";

        // 메뉴명으로 검색
        mvc.perform(get(url))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is(name)))
                .andExpect(jsonPath("$[0].keyword", is(keyword)));

    }

    @Test
    public void Category_검색() throws Exception {

        String name1 = "치킨";
        String category1 = "튀김류";
        String keyword1 = "#닭고기 #튀김";

        menuRepository.save(Menu.builder()
                .name(name1)
                .category(category1)
                .keyword(keyword1)
                .build());

        String name2 = "탕수육";
        String category2 = "튀김류";
        String keyword2 = "#돼지고기 #튀김 #중식";

        menuRepository.save(Menu.builder()
                .name(name2)
                .category(category2)
                .keyword(keyword2)
                .build());

        String name3 = "삼계탕";
        String category3 = "국(탕)류";
        String keyword3 = "#닭고기 #탕";

        menuRepository.save(Menu.builder()
                .name(name3)
                .category(category3)
                .keyword(keyword3)
                .build());

        String url = "http://localhost:" + port + "/api/menu/category";

        // 메뉴명으로 검색
        mvc.perform(
                        get(url)
                                .param("categoryWord", "튀김류"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name", is(name1)))
                .andExpect(jsonPath("$[1].name", is(name2)));
    }
}
