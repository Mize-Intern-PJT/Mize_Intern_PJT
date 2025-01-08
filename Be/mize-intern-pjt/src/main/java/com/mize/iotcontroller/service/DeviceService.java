package main.java.com.mize.iotcontroller.service;

import com.mize.model.Device;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DeviceService {
    @Autowired
    private RestTemplate restTemplate;

    public Device getDevice(String id) {
        // 퀵 예제, 나중에 좀 더 복잡한 로직으로 대체 가능
        String url = "http://yourapi.com/device/" + id;
        Device device = restTemplate.getForObject(url, Device.class);
        return device;
    }
}
