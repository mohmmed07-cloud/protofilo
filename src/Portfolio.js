import React, { useState } from 'react';
import './Portfolio.css'; // ملف التنسيقات الخارجي
import meImage from './ME.jpeg';
import CImage from './KASITIMG.jpeg';
import DECLUBImG from './JU_DEBATE_CLUB_SCREEN_SHOT.png';
import JournalImg from './Journal-img.png';
import LabImg from './NabilLab.png';
import ContactImg from './contact-image.webp';
import { Sparkles, Code } from 'lucide-react';
import { FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

export default function PortfolioHome() {
  // حالة القائمة (مفتوحة أو مغلقة)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="portfolio-container">
      {/* شريط التنقل العلوي (Navbar) */}
      <nav className="navbar">
        <div className="logo">MOHMMED ABBAS</div>
        
        {/* زر الهمبرغر (يظهر في الموبايل فقط) */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* الحاوية التي تتغير بناءً على حالة القائمة */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <li className="animation-slider"></li>
          </ul>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mohmmed-abbas-0aa385398/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/962779584928" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </nav>

      {/* قسم الواجهة الرئيسية (Hero Section) */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <span className="greeting">Hello, I’m Mohmmed,</span>
          
          {/* تم إضافة <br /> لكسر السطر بين الكلمتين */}
       <h1>
  <span className="typewriter-line1">WEB & System</span>
  <br />
  <span className="typewriter-line2">Designer</span>
</h1>
          
          <p>BASED IN AMMAN.</p>
        <a href={process.env.PUBLIC_URL + '/MyCV.pdf'} target="_blank" rel="noopener noreferrer" className="resume-btn">
  Resume
</a>
          
        </div>
        
        <div className="hero-image-container" style={{ position: 'relative', display: 'inline-block' }}>
  
  {/* 1. حاوية الصورة (نغلقها فوراً بعد الصورة) */}
  <div className="image-frame">
    <img src={meImage} alt="Mohmmed Abbas" />
  </div>

  {/* 2. الأيقونات نضعها في الخارج مع ضبط أماكنها بدقة */}
  <div className="decorative-lines" style={{ position: 'absolute', bottom: '-10px', left: '-30px', zIndex: 10 }}>
    <Code size={48} color="#303314" strokeWidth={1.5} />
  </div>

  <div className="decorative-plusses" style={{ position: 'absolute', top: '-10px', right: '-20px', zIndex: 10 }}>
    <Sparkles size={40} color="#303314" strokeWidth={1.5} />
  </div>

</div>
      </section>

      {/* قسم عني (About Section) */}
      <section id="about" className="about-section">
        <h2 className="section-title">about.</h2>
        
        {/* هذه الحاوية الجديدة ستجمع النص والصورة بجانب بعضهما */}
        <div className="about-content">
          <p className="about-desc">
            A web developer and a storyteller. I study Business Information Technology at the University of Jordan, and I specialize in transforming complex ideas into engaging digital interfaces using React and Firebase. I believe that programming is very much like writing a screenplay; both require building a solid, logical structure and paying attention to the smallest details to create an unforgettable experience. Whether I am writing lines of code or developing a plot for a new story, my goal is always to craft something that leaves a real impact.
          </p> 
          
          {/* تم إضافة كلاس about-image للصورة للتحكم بحجمها */}
          <a href="https://computer.ju.edu.jo/ar/arabic/home.aspx" target="_blank" rel="noopener noreferrer">
            <img src={CImage} alt="KASIT" className="about-image" />
          </a>
        </div>

        <div className="timeline">
          {/* كود الـ timeline الخاص بك يبقى كما هو هنا */}
        </div>
    
      </section>

      {/* قسم الأعمال (projects / Case Studies Section) */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects.</h2>
        <p className="projects-intro">
         A showcase of my recent web development projects. I specialize in building responsive, data-driven applications that solve real-world problems, leveraging modern technologies like React and Firebase to deliver seamless digital experiences.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            {/* أضفنا كلاس project-link للرابط */}
            <a href="https://github.com/mohmmed07-cloud/meraki-project" target="_blank" rel="noopener noreferrer" className="project-link">
              {/* غيرنا كلاس الصورة إلى project-img-brutalist */}
              <img src={DECLUBImG} alt="JU Debate Club" className="project-img-brutalist" />
            </a>
            
            <span className="project-date">August 2026</span>
            <h3>JU Debate Club Portal</h3>
            <p>A fully responsive web platform built for the University of Jordan Debate Club using React and Firebase. It features dynamic content, secure application forms with Google reCAPTCHA, and real-time database management.</p>
                {/* أزرار المشروع الأول (نادي المناظرات كمثال) */}
<div className="project-buttons">
  <a href="https://drive.google.com/file/d/1Dn1K-wbuL2nxGlj6fe5zm06NESjoWyZh/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-demo">
    Watch Demo
  </a>
  <a href="https://github.com/mohmmed07-cloud/meraki-project" target="_blank" rel="noopener noreferrer" className="btn-github">
    GitHub
  </a>
</div>          
          </div>
          

          {/* المشروع الثالث: نظام إدارة معلومات مختبر نبيل عباس */}
          
          <div className="project-card">
            {/* وسم الرابط <a> يحيط بالصورة */}
            <a href="https://github.com/mohmmed07-cloud/nabil" target="_blank" rel="noopener noreferrer" className="project-link">
              {/* تذكر استيراد صورة المشروع، مثلاً LabImg */}
              <img src={LabImg} alt="Nabil Abbas Lab Information System" className="project-img-brutalist" />
            </a>
            
            <span className="project-date">2026</span>
            <h3>Nabil Abbas Lab Information System</h3>
            <p>
              A comprehensive web application designed to digitize medical laboratory management. Built with React.js and Firebase, it features secure patient data archiving, real-time database updates, and advanced search capabilities. Key highlights include client-side image compression via HTML5 Canvas, integration with the ImgBB API for cloud medical report storage, and automated Excel export functionality for structured data management. 
            </p>
            
<div className="project-buttons">
  <a href="https://youtu.be/SwwsBtDsUFU" target="_blank" rel="noopener noreferrer" className="btn-demo">
    Watch Demo
  </a>
  <a href="https://github.com/mohmmed07-cloud/nabil" target="_blank" rel="noopener noreferrer" className="btn-github">
    GitHub
  </a>
</div>
          </div>
          
          <div className="project-card">
            {/* وضعنا الصورة مباشرة بدون رابط كما طلبت */}
            <img src={JournalImg} alt="Field Notes Journal" className="project-img-brutalist" />
            
            <span className="project-date">September 2026</span>
            <h3>Field Notes Diary</h3>
            <p>A beautifully designed digital scrapbook built with React. It features a unique vintage, paper-like aesthetic with polaroid-style photo displays, mood tracking, and daily reflections. The application utilizes LocalStorage for seamless, private data management and offers dynamic content filtering.</p>
            
<div className="project-buttons">
  <a href="https://youtu.be/nZVddsFz6gs" target="_blank" rel="noopener noreferrer" className="btn-demo">
    Watch Demo
  </a>
  <a href="https://github.com/mohmmed07-cloud/journal" target="_blank" rel="noopener noreferrer" className="btn-github">
    GitHub
  </a>
</div>          
          </div>

        </div>
      </section>

      {/* قسم التواصل (Contact Section) */}
     {/* قسم التواصل (Contact Section) */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact.</h2>
        
        <div className="contact-content">
          <div className="contact-image">
            {/* لا تنسَ استيراد صورة مناسبة، مثلاً صورة لمكتبك أو صورة شخصية أخرى */}
            <a href="https://wa.me/962779584928" target="_blank" rel="noopener noreferrer">
            <img src={ContactImg} alt="Contact Mohmmed" className="contact-img-brutalist" />
            </a>
            
          </div>
          
          <div className="contact-info">
            <h3>Let's build something great together!</h3>
            <p>Feel free to reach out for collaborations, freelance projects, or just a friendly hello.</p>
            
            <ul className="contact-links">
              <li>
                <strong>Email:</strong> <br/>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=scripted75@gmail.com" target="_blank" rel="noopener noreferrer">
  Scripted75@gmail.com
</a>
              </li>
              <li>
                <strong>Location:</strong> <br/>
                Amman, Jordan
              </li>
              <li>
                <strong>LinkedIn:</strong> <br/>
                <a href="https://www.linkedin.com/in/mohmmed-abbas-0aa385398/" target="_blank" rel="noopener noreferrer">Mohmmed Abbas</a>
              </li>
              <li>
                <strong>GitHub:</strong> <br/>
                <a href="https://github.com/mohmmed07-cloud" target="_blank" rel="noopener noreferrer">githubMohmmed07</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}