CREATE TABLE `user` (
	`user_id` INT(11) NOT NULL AUTO_INCREMENT,
	`user_email` VARCHAR(100) NOT NULL DEFAULT '',
	`user_password` VARCHAR(1000) NULL DEFAULT '',
	`user_name` VARCHAR(50) NULL DEFAULT '',
	`user_image` VARCHAR(1000) NULL DEFAULT '',
	`user_provider` VARCHAR(50) NULL DEFAULT '',
	PRIMARY KEY (`user_id`),
	UNIQUE INDEX `user_email` (`user_email`)
)
COLLATE='utf8mb4_general_ci';


CREATE TABLE `course` (
	`course_id` INT NOT NULL AUTO_INCREMENT,
	`course_name` VARCHAR(100) NULL DEFAULT '' COMMENT '코스 이름',
	`course_ latitude` VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '코스 위도',
	`course_longitude` VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '코스 경도',
	`course_qr` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '코스 QR정보',
	PRIMARY KEY (`course_id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
;
