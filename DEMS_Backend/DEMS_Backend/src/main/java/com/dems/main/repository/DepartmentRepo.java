package com.dems.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dems.main.model.Department;
public interface DepartmentRepo extends JpaRepository<Department, Integer>{

}
