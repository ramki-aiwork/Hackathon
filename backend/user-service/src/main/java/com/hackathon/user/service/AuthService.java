package com.hackathon.user.service;

import com.hackathon.user.dto.AuthRequest;
import com.hackathon.user.dto.AuthResponse;
import com.hackathon.user.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse authenticate(AuthRequest request);
}
