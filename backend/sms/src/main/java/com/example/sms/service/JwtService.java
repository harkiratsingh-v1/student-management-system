package com.example.sms.service;

import java.security.Signature;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secretKey;

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(secretKey.getBytes());
    }

    public String generateToken(String username){
        String token=
           Jwts.builder()
           .subject(username)
           .issuedAt(new Date())
           .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
           .claim("role" , "admin")
           .signWith(getSigningKey())
           .compact();
        return token;
    }
    public boolean isValid(String token) {
        try {
            Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    } 
     public String getUsername(String token) {
        return 
            Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}
