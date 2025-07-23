
import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-card">
        <h2>Sales Analytics with PowerBI and AWS Redshift</h2>
        <p>Built a sales dashboard using PowerBI, loading structured data into AWS Redshift and applying SQL-based transformations for real-time business insights.</p>
      </div>
      <div className="project-card">
        <h2>Recidivism Risk Prediction using COMPAS Dataset</h2>
        <p>Developed an XGBoost model with SHAP and LIME for explainability; applied Fairlearn to reduce bias in high-stakes prediction pipelines.</p>
      </div>
      <div className="project-card">
        <h2>Deep Learning Model Optimization for CNNs</h2>
        <p>Pruned CNN architectures using PyTorch and NumPy to reduce size by 80% with minimal loss in accuracy. Used YAML-based configs to manage deployment.</p>
      </div>
      <div className="project-card">
        <h2>ML-Driven Payout Monitoring</h2>
        <p>Forecasted payout anomalies using LightGBM and time-series features; visualized in PowerBI with automated data ingestion via Airflow.</p>
      </div>
    </div>
  );
}
