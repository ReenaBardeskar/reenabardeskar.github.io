
import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Hi, I'm Reena Bardeskar</h1>
      <h2>Software Engineer | Cloud & Data Analyst</h2>
      <p>
        Passionate about building intelligent, scalable systems using cloud infrastructure,
        data pipelines, and machine learning.
      </p>
      <a href="/reenaResume.pdf" download className="download-resume-button">Download Resume</a>
    </div>
  );
}
