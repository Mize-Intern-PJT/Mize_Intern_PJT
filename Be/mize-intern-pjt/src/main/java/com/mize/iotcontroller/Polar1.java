package com.mize.iotcontroller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
public class Polar1 {

    @PostMapping("/set_light")
    public Map<String, String> setLight(@RequestBody Map<String, Object> request) {
        // JSON 데이터에서 필요한 부분을 추출
        Map<String, String> system = (Map<String, String>) request.get("system");
        Map<String, String> params = (Map<String, String>) request.get("params");
        
        String type = params.get("type");
        int val = Integer.parseInt(params.get("val"));

        // 여기서 전등 상태를 변경하는 로직을 추가할 수 있습니다.
        // 예를 들어, DB에 저장하거나 다른 처리를 수행할 수 있습니다.
        
        // 응답 메시지를 생성
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Light " + type + " set to " + val);

        return response;
    }

    public static void main(String[] args) {
        SpringApplication.run(Polar1.class, args);
    }
}
