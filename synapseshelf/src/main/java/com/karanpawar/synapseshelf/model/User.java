package com.karanpawar.synapseshelf.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;

    private String email;
    private String firstName;
    private String lastName;
    private String password;
}
