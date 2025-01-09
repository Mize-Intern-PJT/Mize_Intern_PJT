package com.mize.iotcontroller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;
import java.util.logging.Level;
import java.util.logging.Logger;
import com.fasterxml.jackson.databind.ObjectMapper;

public class api {
    private static final Logger logger = Logger.getLogger(api.class.getName());
    private String region;
    private String appkey;
    private String apptoken;
    private String userid;
    private String userpassword;
    private String usertoken;
    private static final HttpClient httpClient = HttpClient.newHttpClient();
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public api(String region, String appkey, String apptoken, String userid, String userpassword) {
        this.region = region;
        this.appkey = appkey;
        this.apptoken = apptoken;
        this.userid = userid;
        this.userpassword = userpassword;
    }

    private String getApiUrl() {
        return "http://api.lifesmart.com"; // 실제 API URL로 변경
    }

    public CompletableFuture<Boolean> login() {
        String url = getApiUrl() + "/auth.do_auth";
        LoginData loginData = new LoginData(userid, userpassword, appkey);
        
        return sendAsyncRequest(url, loginData).thenApply(response -> {
            if (!response.getCode().equals("success")) {
                return false;
            }
            usertoken = response.getUsertoken();
            return true;
        }).exceptionally(ex -> {
            logger.log(Level.SEVERE, "Login request failed", ex);
            return false;
        });
    }

    public CompletableFuture<Response> turnOnLightSwitch(String idx, String agt, String me) {
        return sendEpSetAsync("0x81", 1, idx, agt, me);
    }

    public CompletableFuture<Response> turnOffLightSwitch(String idx, String agt, String me) {
        return sendEpSetAsync("0x80", 0, idx, agt, me);
    }

    private CompletableFuture<Response> sendEpSetAsync(String type, int val, String idx, String agt, String me) {
        String url = getApiUrl() + "/api.EpSet";
        long tick = System.currentTimeMillis() / 1000;
        String sdata = "method:EpSet,agt:" + agt + ",idx:" + idx;

        SendValues sendValues = new SendValues(1, "SendACKeys", new Params(agt, me, type, val));
        return sendAsyncRequest(url, sendValues);
    }

    private CompletableFuture<Response> sendAsyncRequest(String url, Object data) {
        try {
            String jsonData = objectMapper.writeValueAsString(data);
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonData))
                    .build();

            return httpClient.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                    .thenApply(HttpResponse::body)
                    .thenApply(responseBody -> {
                        try {
                            return objectMapper.readValue(responseBody, Response.class);
                        } catch (IOException e) {
                            logger.log(Level.SEVERE, "JSON deserialization failed", e);
                            throw new RuntimeException(e);
                        }
                    });
        } catch (IOException e) {
            logger.log(Level.SEVERE, "JSON serialization failed", e);
            throw new RuntimeException(e);
        }
    }

    // 내부 클래스들
    private static class LoginData {
        private String uid;
        private String pwd;
        private String appkey;

        public LoginData(String uid, String pwd, String appkey) {
            this.uid = uid;
            this.pwd = pwd;
            this.appkey = appkey;
        }
    }

    private static class SendValues {
        private int id;
        private String method;
        private Params params;

        public SendValues(int id, String method, Params params) {
            this.id = id;
            this.method = method;
            this.params = params;
        }
    }

    private static class Params {
        private String agt;
        private String me;
        private String type;
        private int val;

        public Params(String agt, String me, String type, int val) {
            this.agt = agt;
            this.me = me;
            this.type = type;
            this.val = val;
        }
    }

    private static class Response {
        private String code;
        private String usertoken;

        public String getCode() {
            return code;
        }

        public String getUsertoken() {
            return usertoken;
        }
    }
}

