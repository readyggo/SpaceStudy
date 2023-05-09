package com.project.spacestudy.config;


import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.net.ssl.HttpsURLConnection;
import java.io.*;
import java.net.URL;

@Log4j2
@Configuration
@PropertySource("classpath:application.properties")
public class RecaptchaConfig {

    private final static  String url = "https://www.google.com/recaptcha/api/siteverify";
    private final static String USER_AGENT = "Mozilla/5.0";

    @Value("${google.api.recaptcha.secretKey}")
    private  String secretKey;

    public boolean verify(String gRecaptchaResponse) throws IOException {

        log.info(" verify init - receive token : {}" , gRecaptchaResponse);

        // secretKey jasypt 설정으로 인해  " " 표시되어 " 제거
        secretKey = secretKey.replace("\"","");

        // 토큰이 없을 경우 false
        if (gRecaptchaResponse == null || "".equals(gRecaptchaResponse)) {
            return false;
        }
        try{
            // 요청을 보낼 url 객체 생성
            URL obj = new URL(url);

            // URL 객체에서 가져온 URL을 사용하여 HTTPS 프로토콜로 통신 연결
            HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

            // 요청 헤더 설정
            con.setRequestMethod("POST"); // http post 요청
            con.setRequestProperty("User-Agent", USER_AGENT);
            con.setRequestProperty("Accept-Language", "en-US,en;q=0.5");

            // 바디 정보 설정
            String postParams = "secret=" + secretKey + "&response="
                    + gRecaptchaResponse;

            con.setDoOutput(true); // true : 출력 가능

            // 데이터 전송하여 요청
            // con.getOutputSteam 즉 해당 url에 출력하기 위해 DataOutputStream을 사용
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.writeBytes(postParams); // recaptcha에 전달할 파라미터 포함
            wr.flush(); // 해당 URL에 출력 데이터가 전송
            wr.close();

            // 서버 응답 코드 확인
            int responseCode = con.getResponseCode();

            // 응답 데이터 읽기
            BufferedReader in = new BufferedReader(new InputStreamReader(
                    con.getInputStream())); // getInputStream() : 응답 데이터 받기
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // response이 json 형태이기 때문에 json으로 읽어와서 값 출력하기
            JsonReader jsonReader = Json.createReader(new StringReader(response.toString()));
            JsonObject jsonObject = jsonReader.readObject();
            jsonReader.close();

            // success - true : 인간
            // success - false : 검증 오류
            log.info( " verify method - result : {}" , jsonObject.toString());
            System.out.println(jsonObject.toString());
            return jsonObject.getBoolean("success");
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
