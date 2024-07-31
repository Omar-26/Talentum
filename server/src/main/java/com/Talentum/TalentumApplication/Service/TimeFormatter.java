package com.Talentum.TalentumApplication.Service;

import java.sql.Timestamp;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;

public class TimeFormatter {

    public static String formatTimestamp(Timestamp timestamp) {
        LocalDateTime timestampDateTime = timestamp.toLocalDateTime();
        LocalDateTime now = LocalDateTime.now(ZoneId.systemDefault());
        Duration duration = Duration.between(timestampDateTime, now);

        long seconds = duration.getSeconds();
        long minutes = seconds / 60;
        long hours = minutes / 60;
        long days = hours / 24;

        if (seconds < 60) {
            return seconds + " seconds ago";
        } else if (minutes < 60) {
            return minutes + " minutes ago";
        } else if (hours < 24) {
            return hours + " hours ago";
        } else {
            return days + " days ago";
        }
    }
}