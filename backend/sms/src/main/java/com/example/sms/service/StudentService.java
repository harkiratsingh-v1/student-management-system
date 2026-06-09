package com.example.sms.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;


@Service  
public class StudentService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public String getStudentInfo() {

        return "Student Service Working";

    }
    public Integer getStudentCount() {

        String sql = "SELECT COUNT(*) FROM students";

        return jdbcTemplate.queryForObject(sql,Integer.class);

    }

}
    
