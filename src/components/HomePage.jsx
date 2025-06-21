import React, { useState, useEffect } from 'react';
import bgVideo from '../assets/Web Video.mp4';
import SolutionsSlider from './SolutionsSlider';

function HomePage() {
  const [collapseCountdown, setCollapseCountdown] = useState('');
  const [netZeroCountdown, setNetZeroCountdown] = useState('');

  useEffect(() => {
    const collapseDeadline = new Date("2030-01-01T00:00:00Z").getTime();
    const netZeroDeadline = new Date("2050-01-01T00:00:00Z").getTime();

    const updateCountdowns = () => {
      const now = new Date().getTime();

      const getRemainingTime = (deadline) => {
        const distance = deadline - now;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${years}Y:${months}M:${days}D:${hours}H:${minutes}M:${seconds}S`;
      };

      setCollapseCountdown(getRemainingTime(collapseDeadline));
      setNetZeroCountdown(getRemainingTime(netZeroDeadline));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1><span className="green">Healing the past</span>, crafting new paths</h1>
            <p>On a mission towards a sustainable planet.</p>
            <button onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>
              Join the Journey
            </button>
          </div>
          <video autoPlay loop muted className="bg-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="climate-clock">
        <h2>Climate Countdown</h2>
        <p>2030 and 2050 goals to safeguard the planet.</p>
        <div className="clock-container">
          <div className="clock-left">
            <h2>Time left to prevent irreversible climate collapse.</h2>
            <p>A deadline known as the point of no return.</p>
            <div className="countdown">{collapseCountdown}</div>
          </div>

          <div className="clock-right">
            <h2>Our mission: Net Zero by 2050</h2>
            <p>Our journey towards a net-zero planet.</p>
            <div className="countdown">{netZeroCountdown}</div>
          </div>
        </div>
      </section>

      <SolutionsSlider />

      <section className="contact-section" id="contact-form">
        <div className="contact-left">
          <h2>Ready to build a regenerative world?</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <select>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="ngo">NGO</option>
              <option value="researcher">Researcher</option>
              <option value="funder">Funder</option>
              <option value="enthusiast">Enthusiast</option>
            </select>
            <textarea placeholder="Your message..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-right">
          <p>Email: contact@biozync.org</p>
          <p>Phone: +91 98765 43210</p>
          <div className="socials">
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
