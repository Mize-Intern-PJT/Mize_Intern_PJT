package com.mize.login;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private UserDAO userDAO;

    public LoginController() {
        userDAO = new UserDAO();
    }

    @GetMapping("/login")
    public String login(@RequestParam String userId, @RequestParam String password) {
        User user = new User();
        user.setUserId(userId);
        user.setPassword(password);

        boolean isAuthenticated = userDAO.authenticate(user);

        if (isAuthenticated) {
            return "success";
        } else {
            return "failed";
        }
    }
}
