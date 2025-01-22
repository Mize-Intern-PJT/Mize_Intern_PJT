package com.mize.login;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {

    private Connection connect(){
        Connection connection = null;
        try{
            String url = "jdbc:oracle:thin:@localhost:1521:xe";
            String user = "cyy";
            String password = "1234";
            connection = DriverManager.getConnection(url, user, password);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return connection;
    }

    public boolean authenticate(User user){
        Connection connection = connect();
        boolean isAuthenticated = false;

        try{
            String query = "SELECT * FROM users WHERE userid = ? AND password = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, user.getUserId());
            preparedStatement.setString(2, user.getPassword());

            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                isAuthenticated = true;

            }

            resultSet.close();
            preparedStatement.close();
            connection.close();

        }
        catch(Exception e){
            e.printStackTrace();
        }
        return isAuthenticated;
    }
}

