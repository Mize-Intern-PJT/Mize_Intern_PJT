package com.mize.login;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public String requestMethodName(@RequestParam String param) {
        // 여기서 param을 사용하여 작업을 수행합니다
        return "Received param: " + param;
    }
}
