package com.mize.login;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private UserDAO userDAO;

    public LoginController() {
        userDAO = new UserDAO();
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        boolean isAuthenticated = userDAO.authenticate(user);

        if (isAuthenticated) {
            return "success";
        } else {
            return "failed";
        }
    }
}
