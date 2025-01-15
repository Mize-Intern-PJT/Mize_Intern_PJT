package com.mize.iotcontroller;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class HttpClientExample {

    public static void main(String[] args) {
        String url = "http://localhost:8080/callback";
        String jsonData = "{\"data\":\"example data\"}";

        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpPost postRequest = new HttpPost(url);
            postRequest.setHeader("Content-Type", "application/json");
            postRequest.setEntity(new StringEntity(jsonData));

            try (CloseableHttpResponse response = httpClient.execute(postRequest)) {
                String responseBody = EntityUtils.toString(response.getEntity());
                System.out.println("Response: " + responseBody);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
