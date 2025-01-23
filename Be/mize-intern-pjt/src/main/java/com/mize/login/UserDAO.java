package com.mize.login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {

    private static final String dburl = "jdbc:oracle:thin:@localhost:1521:xe";  // DB URL
    private static final String userid = "cyy";  // 사용자명
    private static final String password = "1234";  // 비밀번호

    // 데이터베이스 연결 메소드
    private Connection connect() throws Exception {
        Class.forName("oracle.jdbc.driver.OracleDriver");
        return DriverManager.getConnection(dburl, userid, password);
    }

    public boolean authenticate(User user) {
        try (Connection connection = connect();
             PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE userid = ? AND password = ?")) {

            preparedStatement.setString(1, user.getUserId());
            preparedStatement.setString(2, user.getPassword());
            ResultSet resultSet = preparedStatement.executeQuery();

            return resultSet.next();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
