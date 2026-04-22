import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Bright Future School</h1>
        <p>Empowering students for a better tomorrow</p>
        <button className="btn">Explore More</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Our School</h2>
        <p>
          Bright Future School is committed to providing quality education
          with modern teaching techniques and excellent infrastructure.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="card">
          <h3>Qualified Teachers</h3>
          <p>Experienced and dedicated faculty members.</p>
        </div>

        <div className="card">
          <h3>Smart Classes</h3>
          <p>Digital classrooms for better learning.</p>
        </div>

        <div className="card">
          <h3>Sports Facilities</h3>
          <p>Encouraging physical growth and teamwork.</p>
        </div>
      </section>

    </div>
  )
}

export default Home;