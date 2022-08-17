package com.KimNLee.domain.menu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Long> {

    @Query("SELECT p FROM Menu p WHERE p.name LIKE %:searchWord% OR p.keyword LIKE %:searchWord%")
    List<Menu> findBySearchWord(@Param("searchWord") String searchWord);
}
