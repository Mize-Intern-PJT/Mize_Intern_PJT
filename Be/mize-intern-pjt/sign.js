function getSign(method, time, appkey, apptoken, userid, usertoken) {
    // 初始签名字符串
    var signStr = "method:" + method;

    // 拼接系统参数
    signStr += ",time:" + time;
    if (userid) {
        signStr += ",userid:" + userid;
    } else {
        signStr += ",userid:10001";
    }
    if (usertoken) {
        signStr += ",usertoken:" + usertoken;
    } else {
        signStr += ",usertoken:10001";
    }
    signStr += ",appkey:" + appkey;
    signStr += ",apptoken:" + apptoken;

    // MD5
    return CryptoJS.MD5(signStr).toString();
}
// 예제 서명 문자열
var exampleSign = getSign("GetCategory", 1447641115, "APPKEY_XXXXXXXX", "APPTOKEN_XXXXXXXX", "10001", "10001");
console.log("Initial signature string is: " + exampleSign);
