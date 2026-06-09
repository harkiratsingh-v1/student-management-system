package com.example.sms.controller;

import com.example.sms.model.Student;
import com.example.sms.service.StudentService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")


public class StudentController{


    @Autowired
    private StudentService service;


    @GetMapping
    public ArrayList<Student> getStudents(){
        ArrayList<Student> students=new ArrayList<>();
        students.add(new Student(1, "Harkirat Singh", "Btech"));
        students.add(new Student(2, "Prabhjot", "Bca"));
        students.add(new Student(3, "Aman", "BTech"));
        return students;
    }
    @GetMapping("/bca")
    public List<Student>getBcaStudents(){
        return getStudents().stream()
             .filter(student -> "Bca".equals(student.getCourse()))
             .collect(Collectors.toList());
    }
    @GetMapping("/count")
    public int countStudents() {
        return service.getStudentCount();
    }

    @GetMapping("/message")
    public String getMessage() {
        return service.getStudentInfo();
    }
}
