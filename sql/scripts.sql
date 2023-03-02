create database if not exists dems;

use dems;

create table department(dep_id INT(20) not null,
 dep_name varchar(100) not null,
 dep_description varchar(200) not null,
 dep_location varchar(100) not null, 
 dep_hod varchar(100) not null,
 dep_empcount int(200) not null,
primary key(dep_id),unique(dep_name));

create table employee(emp_id INT(20) not null,
 emp_name varchar(100) not null, 
 emp_position varchar(200) not null, 
 emp_salary int(100) not null,
 dep_id INT(20),
 emp_email varchar(100) not null,
 emp_phone int(13) not null,
 emp_address varchar(200) not null,
 emp_dobirth varchar(50) not null,
 emp_dohire varchar(50) not null,
 emp_jd varchar(200) not null,
 primary key(emp_id),
foreign key(dep_id) references department(dep_id),unique(emp_email,emp_phone));
