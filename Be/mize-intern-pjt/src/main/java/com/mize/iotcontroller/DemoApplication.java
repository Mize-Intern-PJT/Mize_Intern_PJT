package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/auth_callback")
    public String handleCallback(@RequestParam(value = "data", defaultValue = "default") String data) {
        if (data.equals("success")) {
            return "{\n" +
                   "    \"code\": \"success\",\n" +
                   "    \"userid\": \"YOUR_USERID\",\n" +
                   "    \"usertoken\": \"YOUR_TOKEN\",\n" +
                   "    \"expiredtime\": \"YOUR_EXPIRED_TIME\",\n" +
                   "    \"rgn\": \"USER_RGN\",\n" +
                   "    \"svrurl\": \"USER_SERVERURL\",\n" +
                   "    \"svrrgnid\": \"USER_SERVER_RGNID\"\n" +
                   "}";
        } else {
            return "{\n" +
                   "    \"code\": \"error\",\n" +
                   "    \"message\": \"ERR_MESSAGE\"\n" +
                   "}";
        }
    }
}
