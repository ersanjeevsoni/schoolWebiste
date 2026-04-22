import React from 'react'
import './Services.css'

function Services() {
  return (
    <div className="services-page">

      {/* Header */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Providing quality education and facilities</p>
      </section>

      {/* Services Cards */}
      <section className="services-container">

        <div className="service-card">
          <h3>📘 Academic Excellence</h3>
          <p>
            We provide high-quality education with a well-structured curriculum
            and experienced teachers.
          </p>
        </div>

        <div className="service-card">
          <h3>💻 Smart Classes</h3>
          <p>
            Digital classrooms with modern teaching tools to enhance student
            learning experience.
          </p>
        </div>

        <div className="service-card">
          <h3>🏃 Sports & Activities</h3>
          <p>
            We encourage physical fitness and teamwork through various sports
            and extracurricular activities.
          </p>
        </div>

        <div className="service-card">
          <h3>🚌 Transport Facility</h3>
          <p>
            Safe and reliable transportation services covering different areas
            of the city.
          </p>
        </div>

        <div className="service-card">
          <h3>📚 Library</h3>
          <p>
            A well-stocked library with a wide range of books and digital
            resources for students.
          </p>
        </div>

        <div className="service-card">
          <h3>🧪 Science Labs</h3>
          <p>
            Fully equipped laboratories for practical learning and experiments.
          </p>
        </div>

      </section>

    </div>
  )
}

export default Services;