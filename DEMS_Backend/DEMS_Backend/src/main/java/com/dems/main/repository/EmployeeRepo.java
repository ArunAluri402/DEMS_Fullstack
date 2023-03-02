package com.dems.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dems.main.model.Employee;


public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
