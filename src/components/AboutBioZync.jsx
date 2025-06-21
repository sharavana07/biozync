import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Play, Pause, Award, Users, Globe, Zap, Leaf, Target, Handshake, ArrowRight, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import styles from './AboutBioZync.module.css';


function AboutBioZync() {
  const [activeTab, setActiveTab] = useState('mission');
  const [expandedCards, setExpandedCards] = useState({});
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleStats, setVisibleStats] = useState({});

  const useCounter = (end, duration) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!visibleStats.stats) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration, visibleStats.stats]);

    return count;
  };

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const stats = [
    { label: 'Projects Completed', value: useCounter(47, 2000), suffix: '+' },
    { label: 'Partner Companies', value: useCounter(23, 2000), suffix: '+' },
    { label: 'CO₂ Reduced (tons)', value: useCounter(1250, 2000), suffix: '+' },
    { label: 'Ecosystems Restored', value: useCounter(8, 2000), suffix: '' }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, EcoGenesis Labs",
      text: "BioZync's innovative approach to bio-engineering has transformed how we think about sustainable solutions.",
      image: ""
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, GreenByte AI",
      text: "Their AI-driven biotechnology platform has accelerated our green initiatives by 300%.",
      image: ""
    },
    {
      name: "Elena Vasquez",
      role: "Director, VerdeCorp",
      text: "The collaboration with BioZync has been pivotal in achieving our sustainability goals ahead of schedule.",
      image: ""
    }
  ];

  const milestones = [
    { year: '2022', title: 'BioZync Founded', description: 'Started with a vision to regenerate our planet' },
    { year: '2023', title: 'First Bio-System Deployed', description: 'Successfully launched our first regenerative micro-system' },
    { year: '2024', title: 'AI Integration', description: 'Integrated advanced AI for ecosystem monitoring' },
    { year: '2025', title: 'Global Expansion', description: 'Expanded operations to 3 continents' }
  ];

  const technologies = [
    { name: 'Bio-Intelligence', description: 'AI-powered biological systems', icon: '🧬' },
    { name: 'Carbon Capture', description: 'Advanced atmospheric CO₂ removal', icon: '🌨️' },
    { name: 'Ecosystem Modeling', description: 'Predictive environmental analytics', icon: '📊' },
    { name: 'Regenerative Design', description: 'Nature-inspired engineering', icon: '🌿' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleStats(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.sectionWrapper}>
      <section>
        <div>
          <div>
            <div>
              <div>
                <Leaf />
                Regenerating Our Planet
              </div>
              <h1>
                About <span>BioZync</span>
              </h1>
              <p>
                We're not just building for carbon neutrality—we're engineering bio-intelligent systems that actively regenerate ecosystems, powered by cutting-edge AI and biotechnology.
              </p>
              <div>
                <button onClick={() => window.open('/learn-more', '_blank')}>
                  Explore Our Work <ArrowRight />
                </button>
                <button onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
                  {isVideoPlaying ? <Pause /> : <Play />}
                  Watch Demo
                </button>
              </div>
            </div>
            <div>
              <div>
                <img 
                  src="" 
                  alt="BioZync Innovation" 
                />
                {isVideoPlaying && (
                  <div>
                    <div>
                      <Play />
                      <p>Demo Video Playing...</p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                2025
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" data-animate>
        <div>
          <div>
            {stats.map((stat, index) => (
              <div key={index}>
                <div>
                  <div>
                    {stat.value}{stat.suffix}
                  </div>
                  <div>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>Our Foundation</h2>
            <p>Explore what drives us forward</p>
          </div>

          <div>
            {[
              { id: 'mission', label: 'Mission', icon: Target },
              { id: 'vision', label: 'Vision', icon: Globe },
              { id: 'values', label: 'Values', icon: Award },
              { id: 'impact', label: 'Impact', icon: TrendingUp }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div>
            {activeTab === 'mission' && (
              <div>
                <h3>
                  <Target />
                  Our Mission
                </h3>
                <p>
                  To engineer bio-intelligent systems that repair ecosystems, reduce environmental stress, and empower circular economies. We bridge the gap between cutting-edge technology and nature's wisdom.
                </p>
                <div>
                  <div>
                    <h4>Ecosystem Restoration</h4>
                    <p>Deploying bio-systems that actively heal damaged environments</p>
                  </div>
                  <div>
                    <h4>Circular Innovation</h4>
                    <p>Creating closed-loop systems that eliminate waste</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div>
                <h3>
                  <Globe />
                  Our Vision
                </h3>
                <p>
                  A planet where every product and process gives more than it takes—aligned with nature, powered by innovation. We envision a world where technology and biology work in perfect harmony.
                </p>
                <div>
                  <h4>2030 Vision Goals</h4>
                  <div>
                    <div>
                      <div>100+</div>
                      <div>Regenerative Systems</div>
                    </div>
                    <div>
                      <div>50+</div>
                      <div>Global Partnerships</div>
                    </div>
                    <div>
                      <div>∞</div>
                      <div>Open Innovation</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h3>
                  <Award />
                  Our Values
                </h3>
                <div>
                  {[
                    { title: 'Regenerative First', desc: 'Every solution must give back more than it takes' },
                    { title: 'Scientific Rigor', desc: 'Data-driven decisions backed by peer-reviewed research' },
                    { title: 'Open Innovation', desc: 'Sharing knowledge to accelerate global change' },
                    { title: 'Nature-Inspired', desc: 'Learning from billions of years of natural evolution' }
                  ].map((value, index) => (
                    <div key={index}>
                      <h4>
                        <CheckCircle />
                        {value.title}
                      </h4>
                      <p>{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'impact' && (
              <div>
                <h3>
                  <TrendingUp />
                  Our Impact
                </h3>
                <div>
                  <div>
                    <h4>Environmental Impact</h4>
                    <div>
                      <div>
                        <span>Carbon Sequestered</span>
                        <span>1,250+ tons</span>
                      </div>
                      <div>
                        <span>Biodiversity Restored</span>
                        <span>8 ecosystems</span>
                      </div>
                      <div>
                        <span>Water Purified</span>
                        <span>50M+ liters</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>Social Impact</h4>
                    <div>
                      <div>
                        <span>Communities Served</span>
                        <span>23</span>
                      </div>
                      <div>
                        <span>Jobs Created</span>
                        <span>150+</span>
                      </div>
                      <div>
                        <span>Students Educated</span>
                        <span>2,000+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>Our Technologies</h2>
            <p>Cutting-edge solutions for planetary regeneration</p>
          </div>
          <div>
            {technologies.map((tech, index) => (
              <div key={index}>
                <div>{tech.icon}</div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>Our Journey</h2>
            <p>Key milestones in our mission</p>
          </div>
          <div>
            <div></div>
            {milestones.map((milestone, index) => (
              <div key={index}>
                <div>
                  <div>
                    <div>
                      <Calendar />
                      <span>{milestone.year}</span>
                    </div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>What Our Partners Say</h2>
          <div>
            <div>
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
              />
              <blockquote>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>{testimonials[currentTestimonial].name}</div>
              <div>{testimonials[currentTestimonial].role}</div>
            </div>
            <div>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>Ready to Regenerate the Future?</h2>
          <p>
            Join us in creating bio-intelligent solutions that heal our planet while driving innovation.
          </p>
          <div>
            <button onClick={() => window.open('/partner', '_blank')}>
              <Handshake />
              Partner With Us
            </button>
            <button onClick={() => window.open('/contact', '_blank')}>
              <Users />
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBioZync;