import React from 'react'
import { Link } from 'react-router-dom'
import '../style/HomePage.css'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const HomePage = () => {
  
  return (
    <div className="homepage">
{/* Hero Section */}
<section className="hero-section">
  <div className="hero-content">
    <div className="hero-text-box">
      <h1>Push Your Limits</h1>
      <p>Transform your body at GymPro</p>
      <Link to="/membership-plans" className="custom-btn">
        Join Now
      </Link>
    </div>
  </div>

  <div className="hero-angled-bg"> 
    {/* Word Slider */}
  <div className="word-slider">
    <div className="slider-track">
      <span>STRENGTH</span>
      <span>POWER</span>
      <span>ENDURANCE</span>
      <span>FITNESS</span>
      <span>STRENGTH</span>
      <span>POWER</span>
      <span>ENDURANCE</span>
      <span>FITNESS</span>
    </div>
  </div> 
  <div className="word-slider ws-2">
    <div className="slider-track st-2">
      <span>STRENGTH</span>
      <span>POWER</span>
      <span>ENDURANCE</span>
      <span>FITNESS</span>
      <span>STRENGTH</span>
      <span>POWER</span>
      <span>ENDURANCE</span>
      <span>FITNESS</span>
    </div>
  </div></div>
</section>



      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="features-heading --bs-dark-text-emphasis ">
            Our services
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box box1">
                <h3 className="text-effect">Membership Management</h3>
                <p>Manage all your memberships efficiently with our system.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box box2">
                <h3 className="text-effect">Class Scheduling</h3>
                <p>
                  Book your classes and stay on track with our easy-to-use
                  scheduler.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box box3">
                <h3 className="text-effect">Progress Tracking</h3>
                <p>Track your fitness goals and stay motivated!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonial-heading">What Our Members Say</h2>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                className="active "
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-item text-center">
                  <div className="testimonial-img rounded-circle user1" />
                  <div />
                  <blockquote>
                    <p>
                      "Joining GymPro has transformed my fitness routine! Highly
                      recommended."
                    </p>
                    <footer>- John Doe</footer>
                  </blockquote>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="testimonial-item text-center">
                  <div className="testimonial-img rounded-circle user2" />
                  <div />
                  <blockquote>
                    <p>
                      "The class schedules and progress tracking features are
                      fantastic!"
                    </p>
                    <footer>- Jane Smith</footer>
                  </blockquote>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-item text-center">
                  <div className="testimonial-img rounded-circle user3" />
                  <div />
                  <blockquote>
                    <p>
                      "Great community and support. I’ve achieved my fitness
                      goals!"
                    </p>
                    <footer>- Alice Johnson</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join us today and start your fitness journey!</p>
          <Link to="/signup" className=" custom-btn btn">
            Sign Up Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
