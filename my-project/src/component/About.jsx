import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-page">

      {/* Header Section */}
      <section className="about-hero">
        <h1>About Our School</h1>
        <p>Shaping young minds for a brighter future</p>
      </section>

      {/* School Info */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Bright Future School is a premier educational institution focused on
          academic excellence, character building, and overall student development.
          We provide a nurturing environment where students grow intellectually,
          socially, and emotionally.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="box">
          <h3>Our Mission</h3>
          <p>
            To provide quality education that empowers students to become
            responsible citizens and lifelong learners.
          </p>
        </div>

        <div className="box">
          <h3>Our Vision</h3>
          <p>
            To be a leading institution known for innovation, excellence,
            and holistic development.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Experienced & Qualified Teachers</li>
          <li>✔ Smart Classrooms & Digital Learning</li>
          <li>✔ Excellent Academic Results</li>
          <li>✔ Sports & Extracurricular Activities</li>
        </ul>
      </section>

    </div>
  )
}

export default About;