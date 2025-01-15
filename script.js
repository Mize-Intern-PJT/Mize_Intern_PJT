function sendApiRequest()
{
    const requestBody={
        {
            "id" : "101",
            "method" : "EpGetAll",
            "system" : {
                "ver" : "1.0",
                "lang" : "en",
                "sign" : "{{sign}}",
                "userid" : "8390501",
                "appkey" : "CWNu6tF1jpZ1eD9s36IA6A",
                "time" : "{{time}}"
            },
            "params" : {
                "degree":"2"
            }
        };
    }
    
}

// API 요청을 보내는 함수
function fetchData() {
    fetch('https://api.us.ilifesmart.com/app/api.EpGetAll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ "param1": "value1", "param2": "value2" })  // 필요한 매개변수 포함
    })
    .then(response => response.json())  // 응답을 JSON 형식으로 변환
    .then(data => {
        console.log(data);  // 데이터 출력 (디버깅용)
        renderData(data);   // 데이터를 렌더링하는 함수 호출
    })
    .catch(error => console.error('Error:', error));  // 오류 처리
}
