package main.java.com.mize.iotcontroller.controller;


import com.mize.model.Device;
import com.mize.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IoTController {
    @Autowired
    private DeviceService deviceService;

    @GetMapping("/device/{id}")
    public Device getDevice(@PathVariable String id) {
        return deviceService.getDevice(id);
    }
}
