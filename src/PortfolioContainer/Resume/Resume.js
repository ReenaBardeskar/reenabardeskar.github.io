
import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume Highlights</h1>
      <h2>Technical Skills</h2>
      <ul>
        <li>Languages: Python, Java, C++, React, Spring Boot, SQL</li>
        <li>Tools: AWS, Azure, PowerBI, Terraform, Git</li>
        <li>Databases: MySQL, MongoDB, DynamoDB</li>
      </ul>
      <h2>Education</h2>
      <p>M.S. in Computer Science, University of Georgia, 2025 (GPA: 3.94)</p>
      <p>B.S. in Computer Science, University of Pune, 2022 (GPA: 3.84)</p>
      <h2>Certifications</h2>
      <ul>
        <li>AWS Certified Cloud Practitioner</li>
        <li>Microsoft Azure Fundamentals</li>
      </ul>
    </div>
  );
}
