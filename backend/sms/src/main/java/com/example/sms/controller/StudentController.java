package com.example.sms.controller;

import com.example.sms.model.Student;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")


public class StudentController{

    @GetMapping
    public ArrayList<Student> getStudents(){
        ArrayList<Student> students=new ArrayList<>();
        students.add(new Student(1, "Harkirat Singh", "Btech"));
        students.add(new Student(2, "Prabhjot", "MCA"));
        students.add(new Student(3, "Aman", "BTech"));
        return students;
    }

}