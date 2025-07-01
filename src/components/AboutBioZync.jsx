/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  Pause,
  Award,
  Users,
  Globe,
  Leaf,
  Target,
  Handshake,
  ArrowRight,
  Calendar,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import styles from "./AboutBioZync.module.css";

function AboutBioZync() {
  const navigate = useNavigate();

  /* --------------------------- local state ---------------------------- */
  const [activeTab, setActiveTab] = useState("mission");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleStats, setVisibleStats] = useState({});

  /* ---------------------- animated counter hook ----------------------- */
  const useCounter = (end, duration, key) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!visibleStats[key]) return;
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration, key]);

    return count.toLocaleString();
  };

  /* ---------------------------- data sets ----------------------------- */
  const stats = [
    { label: "Living Bio‑Systems Deployed", end: 1000, suffix: "+", key: "stats" },
    { label: "Global Partnerships", end: 50, suffix: "+", key: "stats" },
    { label: "Acres Regenerated", end: 1000000, suffix: "+", key: "stats" },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, EcoGenesis Labs",
      text:
        "BioZync's innovative approach to bio‑engineering has transformed how we think about sustainable solutions.",
      image: "", // add path later
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, GreenByte AI",
      text:
        "Their AI‑driven biotechnology platform accelerated our green initiatives by 300%.",
      image: "",
    },
    {
      name: "Elena Vasquez",
      role: "Director, VerdeCorp",
      text:
        "Collaboration with BioZync was pivotal in achieving our sustainability goals ahead of schedule.",
      image: "",
    },
  ];

  const milestones = [
    {
      date: "March 2025",
      title: "BioZync Was Born",
      description:
        "Planted the first seed of our mission — to reengineer trees and restore ecosystems through climate biotech.",
    },
    {
      date: "April 2025",
      title: "Core Team Formed",
      description:
        "Built a passionate founding team and proposed our first solution to address land degradation and CO₂ capture.",
    },
    {
      date: "May 2025",
      title: "Research & Validation",
      description:
        "Studied global research on tree genetics, climate restoration, and carbon markets to refine our approach.",
    },
    {
      date: "June 2025",
      title: "Business Model Defined",
      description:
        "Mapped our idea into a viable business model and began validating the market opportunity and impact potential.",
    },
    {
      date: "July 2025",
      title: "Expert Consultations",
      description:
        "Engaged with domain experts in biotechnology and sustainability to refine both our technical and business strategies.",
    },
  ];

  const values = [
    {
      title: "Regeneration at the Core",
      desc: "We design solutions that restore more than they consume — reviving land, life, and climate.",
    },
    {
      title: "Community at the Heart",
      desc: "We empower SHGs and create dignified green jobs — making climate action a force for local opportunity and pride.",
    },
    {
      title: "Transparent by Design",
      desc: "From geo‑tagged trees to verified carbon credits, we ensure full traceability and trust in every step.",
    },
    {
      title: "Nature‑Led Innovation",
      desc: "We blend the wisdom of nature with biotechnology to build solutions that evolve with the Earth.",
    },
  ];

  const technologies = [
    {
      name: "Genetically Enhanced Trees",
      description:
        "Engineered for rapid growth, resilience, and superior carbon absorption in degraded lands.",
      icon: "🌳",
    },
    {
      name: "Ground‑Based Monitoring",
      description:
        "Geo‑tagged, real‑time data from the field ensures full transparency, traceability, and trust in every project.",
      icon: "📡",
    },
    {
      name: "Soil & Microbiome Restoration",
      description:
        "Rejuvenating degraded land through improved root systems, microbial diversity, and regenerative planting methods.",
      icon: "🌱",
    },
    {
      name: "MRV & Carbon Credit Issuance",
      description:
        "Robust Monitoring, Reporting & Verification (MRV) systems generate credible, verifiable carbon credits for global markets.",
      icon: "📈",
    },
  ];

  const projects = [
    // Replace the placeholders with real data & images
    {
      name: "Mangrove Revival Project",
      description: "Restoring coastal mangrove ecosystems in Southeast Asia.",
      images: ["/imgs/mangrove1.jpg", "/imgs/mangrove2.jpg", "/imgs/mangrove3.jpg"],
    },
    {
      name: "Desert Greening Initiative",
      description: "Transforming arid land into thriving green corridors.",
      images: ["/imgs/desert1.jpg", "/imgs/desert2.jpg", "/imgs/desert3.jpg"],
    },
    {
      name: "Urban Carbon Sinks",
      description: "Deploying high‑efficiency trees in metropolitan areas.",
      images: ["/imgs/urban1.jpg", "/imgs/urban2.jpg", "/imgs/urban3.jpg"],
    },
  ];

  /* ---------------------------- effects ------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ------------------------- helper components ------------------------ */
  const Slideshow = ({ images }) => {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
      const int = setInterval(() => setIdx((i) => (i + 1) % images.length), 2500);
      return () => clearInterval(int);
    }, [images.length]);
    return (
      <img
        src={images[idx]}
        alt="project slide"
        className="w-full h-60 object-cover transition-opacity duration-500"
      />
    );
  };

  /* ---------------------------- render ------------------------------- */
  return (
    <div className={styles.sectionWrapper}>
      {/* --------------------------- HERO --------------------------- */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextBlock}>
            <div className={styles.heroEyebrow}>
              <Leaf className="inline mr-2" /> Regenerating Our Planet
            </div>
            <h1>
              About <span className="text-primary">BioZync</span>
            </h1>
            <p>
              BioZync is a climate biotech company pioneering a radical approach to
              environmental restoration. We're not just fighting climate change — we're
              solving it at the source by reimagining nature itself.
            </p>
            <div className={styles.heroButtons}>
              <button
                onClick={() => navigate("/products")}
                className={styles.primaryBtn}
              >
                Explore Our Work <ArrowRight className="ml-2" size={18} />
              </button>
              <button
                onClick={() => setIsVideoPlaying((v) => !v)}
                className={styles.secondaryBtn}
              >
                {isVideoPlaying ? <Pause size={18} /> : <Play size={18} />} Watch Demo
              </button>
            </div>
          </div>

          {/* placeholder media */}
          <div className={styles.heroMedia}>
            {isVideoPlaying ? (
              <div className={styles.videoPlaceholder}>Demo Video Playing…</div>
            ) : (
              <img
                src="/imgs/hero-biozync.jpg"
                alt="BioZync Innovation"
                className="rounded-xl shadow-lg"
              />
            )}
            <div className={styles.foundedBadge}>2025</div>
          </div>
        </div>
      </section>

      {/* -------------------------- STATS -------------------------- */}
      <section id="stats" data-animate className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statValue}>
                // eslint-disable-next-line react-hooks/rules-of-hooks
                {useCounter(stat.end, 2000, stat.key)}{stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- FOUNDATION TABS --------------------- */}
      <section className={styles.foundationSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Foundation</h2>
          <p>Explore what drives us forward</p>
        </div>

        <div className={styles.tabList}>
          {[
            { id: "mission", label: "Mission", icon: Target },
            { id: "vision", label: "Vision", icon: Globe },
            { id: "values", label: "Values", icon: Award },
            { id: "impact", label: "Impact", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={activeTab === tab.id ? styles.activeTab : styles.tab}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={20} className="mr-1" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* ------------ Tab Content ------------- */}
        <div className={styles.tabContent}>
          {activeTab === "mission" && (
            <div>
              <h3 className={styles.tabTitle}>
                <Target className="mr-1" /> Our Mission
              </h3>
              <p>
                To engineer bio‑intelligent systems that regenerate ecosystems, reduce
                environmental stress, and drive the transition to a circular,
                regenerative economy — blending cutting‑edge technology with the
                intelligence of nature.
              </p>
              <div className={styles.bulletGrid}>
                <div>
                  <h4>Degraded Land Restored</h4>
                  <p>
                    We create self‑sustaining bio‑systems that transform barren, degraded
                    landscapes into thriving, biodiverse ecosystems.
                  </p>
                </div>
                <div>
                  <h4>Carbon Sequestration</h4>
                  <p>
                    We develop high‑efficiency plant systems that capture and store
                    atmospheric CO₂ — turning degraded land into powerful carbon sinks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div>
              <h3 className={styles.tabTitle}>
                <Globe className="mr-1" /> Our Vision
              </h3>
              <p>
                To build a world where nature and technology evolve together —
                regenerating ecosystems, reversing climate collapse, and creating a
                planet where life can thrive for generations to come.
              </p>
              <div className={styles.goalGrid}>
                <div>
                  <div className={styles.goalValue}>100+</div>
                  <div className={styles.goalLabel}>Regenerative Systems</div>
                </div>
                <div>
                  <div className={styles.goalValue}>50+</div>
                  <div className={styles.goalLabel}>Global Partnerships</div>
                </div>
                <div>
                  <div className={styles.goalValue}>∞</div>
                  <div className={styles.goalLabel}>Open Innovation</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div>
              <h3 className={styles.tabTitle}>
                <Award className="mr-1" /> Our Values
              </h3>
              <div className={styles.valueGrid}>
                {values.map((v, i) => (
                  <div key={i} className={styles.valueCard}>
                    <h4>
                      <CheckCircle className="mr-1" /> {v.title}
                    </h4>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "impact" && (
            <div>
              <h3 className={styles.tabTitle}>
                <TrendingUp className="mr-1" /> Our Impact
              </h3>
              <div className={styles.impactGrid}>
                <div>
                  <h4>Environmental Impact</h4>
                  <ul>
                    <li>
                      <span>Carbon Sequestered</span>
                      <span>1,250+ tons</span>
                    </li>
                    <li>
                      <span>Biodiversity Restored</span>
                      <span>8 ecosystems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Social Impact</h4>
                  <ul>
                    <li>
                      <span>Communities Empowered</span>
                      <span>23</span>
                    </li>
                    <li>
                      <span>Green Jobs Created</span>
                      <span>150+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------- TECHNOLOGIES ---------------------- */}
      <section className={styles.techSection}>
        <div className={styles.sectionHeader}>
          <h2>Our Technologies</h2>
          <p>Biotech solutions built to restore ecosystems and capture carbon at scale</p>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((tech, i) => (
            <div key={i} className={styles.techCard}>
              <div className={styles.techIcon}>{tech.icon}</div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------- JOURNEY ------------------------- */}
      <section className={styles.journeySection}>
        <div className={styles.sectionHeader}>
          <h2>Our Journey</h2>
          <p>Key milestones in our mission</p>
        </div>
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <Calendar size={18} />
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineDate}>{m.date}</span>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------- PROJECTS & PARTNERS ------------------- */}
      <section className={styles.projectSection}>
        <div className={styles.sectionHeader}>
          <h2>Featured Projects & Partners</h2>
          <p>
            Hover over any card to see a quick 3‑image slideshow of our recent
            deployments.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((proj, i) => (
            <div key={i} className={styles.projectCard}>
              <div className="relative overflow-hidden group rounded-xl shadow-lg">
                <Slideshow images={proj.images} />
              </div>
              <div className={styles.projectContent}>
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- TESTIMONIALS ---------------------- */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeader}>
          <h2>What Our Partners Say</h2>
        </div>
        <div className={styles.testimonialCard}>
          <img
            src={testimonials[currentTestimonial].image || "/imgs/avatar-placeholder.png"}
            alt={testimonials[currentTestimonial].name}
            className={styles.testimonialAvatar}
          />
          <blockquote className={styles.testimonialText}>
            “{testimonials[currentTestimonial].text}”
          </blockquote>
          <div className={styles.testimonialName}>{testimonials[currentTestimonial].name}</div>
          <div className={styles.testimonialRole}>{testimonials[currentTestimonial].role}</div>
          <div className={styles.testimonialDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={currentTestimonial === i ? styles.activeDot : styles.dot}
                onClick={() => setCurrentTestimonial(i)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- CTA ------------------------- */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2>Ready to Regenerate the Future?</h2>
          <p>
            Join us in creating bio‑intelligent solutions that heal our planet while
            driving innovation.
          </p>
          <div className={styles.ctaButtons}>
            <button
              onClick={() => navigate("/partner")}
              className={styles.primaryBtn}
            >
              <Handshake size={18} className="mr-1" /> Partner With Us
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={styles.secondaryBtn}
            >
              <Users size={18} className="mr-1" /> Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBioZync;
