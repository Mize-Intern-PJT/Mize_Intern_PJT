const mockData = [
  {
    roomId: 1,
    devices: [
      {
        deviceId: 101,
        deviceType: "plug",
        status: false,
        powerConsumption: 6,
      },
      {
        deviceId: 102,
        deviceType: "sensor",
        status: false,
        lastDetected: 35,
      },
    ],
  },
  {
    roomId: 2,
    devices: [
      {
        deviceId: 201,
        deviceType: "plug",
        status: true,
        powerConsumption: 56,
      },
      {
        deviceId: 202,
        deviceType: "light",
        status: false,
        switches: [
          { switchId: 1, name: "스위치1", status: true },
          { switchId: 2, name: "스위치2", status: false },
        ],
      },
      {
        deviceId: 203,
        deviceType: "remote",
        deviceName: "리모콘",
        status: "on",
        controls: [
          { controlId: 1, name: "TV", status: true },
          { controlId: 2, name: "에어컨", status: false },
        ],
      },
    ],
  },
  {
    roomId: 3,
    environment: {
      temperature: "23.7°C",
      humidity: "22%",
      lux: "206",
    },
    devices: [],
  },
];
