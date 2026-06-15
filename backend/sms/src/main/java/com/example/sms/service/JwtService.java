package com.example.sms.service;

import java.security.Signature;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    public String generateToken(String username){
        String token=
           Jwts.builder()
           .subject(username)
           .issuedAt(new Date())
           .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
           .claim("role" , "admin")
           .signWith(SignatureAlgorithm.HS256, secretKey.getBytes())
           .compact();
        return token;
    }
    
}
