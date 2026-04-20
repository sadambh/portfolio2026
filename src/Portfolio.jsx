import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Référence pour le formulaire
  const formRef = useRef();

  // ⭐ Fonction pour envoyer l'email (CORRIGÉE - une seule fois)
  console.log("Hello Sadam ! La console fonctionne ✅");


const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_0mkd92v', 'template_sz5tm38', formRef.current, '2ApmQKlx78QiWY24n')
  
  .then(() => {
    console.log("5. SUCCÈS: Email envoyé ! ✅");
    alert('✅ Message envoyé avec succès !');
    formRef.current.reset(); // Réinitialiser le formulaire après l'envoi
  })
  .catch((error) => {
    alert('❌ Erreur, veuillez réessayer...');
  });
};  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
    return () => window.removeEventListener('scroll', setIsScrolled);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Boutique en ligne complète avec panier d'achat, recherche en temps réel et paiement intégré.",
      tech: ["React.js", "React Router", "CSS3"],
      link: "/ecommerce",
      image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
      id: 2,
      title: "Portfolio Professionnel",
      description: "Portfolio moderne avec animations, design responsive et sections interactives.",
      tech: ["React.js", "CSS3", "Framer Motion"],
      link: "/portfolio",
      image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
    }
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Git", level: 85 }
  ];

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className={`navbar-portfolio ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="logo-text">Sadam.</span>
          <span className="logo-highlight">Web</span>
        </div>
        <div className="nav-links-portfolio">
          <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Accueil</button>
          <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Compétences</button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projets</button>
          <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>Contact</button>
        </div>
      </nav>

      {/* Section Accueil */}
      {activeTab === 'home' && (
        <section className="home-section">
          <div className="home-content">
            <div className="profile-wrapper">
              <div className="profile-circle">
                <div className="profile-inner">
                  <div className="profile-emoji">👨‍💻</div>
                </div>
              </div>
              <div className="floating-dots"></div>
            </div>
            
            <div className="home-text">
              <span className="greeting">👋 Bonjour, je suis</span>
              <h1 className="name">
                <span className="name-first">Sadam</span>
                <span className="name-last">Développeur Full Stack</span>
              </h1>
              <div className="typing-wrapper">
                <span className="typing-text">Je crée des expériences digitales modernes</span>
              </div>
              <p className="bio">
                Développeur web full stack basé en Algérie. Je transforme vos idées en applications web performantes, 
                élégantes et intuitives. Spécialisé en React.js, Vue.js et technologies modernes.
              </p>
              <div className="home-buttons">
                <Link to="/ecommerce" className="btn-primary">Voir mes projets</Link>
                <button className="btn-secondary" onClick={() => setActiveTab('contact')}>Me contacter</button>
              </div>
            </div>
          </div>
          
          <div className="home-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Années d'expérience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction client</span>
            </div>
          </div>
        </section>
      )}

      {/* Section Compétences */}
      {activeTab === 'skills' && (
        <section className="skills-section">
          <div className="section-header">
            <h2>Mes Compétences</h2>
            <p>Les technologies que j'utilise au quotidien</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Projets */}
      {activeTab === 'projects' && (
        <section className="projects-section">
          <div className="section-header">
            <h2>Mes Projets</h2>
            <p>Découvrez mes réalisations récentes</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <Link to={project.link} className="project-link">Voir le projet →</Link>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Contact */}
      {activeTab === 'contact' && (
        <section className="contact-section">
          <div className="section-header">
            <h2>Contactez-moi</h2>
            <p>Parlons de votre prochain projet</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h4>Email</h4>
                <p>sadam@example.com</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h4>Téléphone</h4>
                <p>+213 550 959 216</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h4>Localisation</h4>
                <p>Algérie</p>
              </div>
            </div>
            
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Votre nom" 
                required 
              />
              <input 
                type="email" 
                name="user_email" 
                placeholder="Votre email" 
                required 
              />
              <textarea 
                name="message" 
                placeholder="Votre message" 
                rows="5" 
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>&copy; 2025 Sadam - Développeur Web Full Stack. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Portfolio;