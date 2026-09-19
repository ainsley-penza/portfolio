import React, { useEffect, useState } from 'react';
import { Closing, FileCard, Group, Heading, Paragraph, Row, Rows, Text, TextLink } from '@instinct/files';
import './style.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const skills = {
  'Back end': ['.NET 6/8 (C#)', '.NET Web API', '.NET Windows Services', 'Python', 'JWT', 'Azure AD B2C', 'Postman', 'Swagger'],
  'Front end': ['JavaScript', 'Angular', 'HTML5', 'CSS3'],
  'Mobile · basic': ['Android Studio (Kotlin/Java)', 'Ionic', 'Cordova', 'React Native'],
  'Cloud · basic': ['Microsoft Azure', 'Google Cloud'],
};

const experience = [
  { role: 'Software Developer', company: 'Mall Systems Limited', detail: 'Full-time', date: 'Nov 2022 - present', project: 'CPORTAL · hospital and patient administration system' },
  { role: 'Software Developer Intern', company: 'xelab', detail: 'Zaragoza, Spain · Erasmus project', date: 'Sep 2022' },
  { role: 'Trainee Software Developer', company: 'Dakar Software Systems', detail: 'Full-time', date: 'Jun - Oct 2022' },
];

function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <div className="section-title">
    <span>{number}</span>
    <div><h2>{title}</h2><p>{subtitle}</p></div>
  </div>;
}

export function App() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-22% 0px -62%', threshold: [0.05, 0.25, 0.6] });
    navItems.forEach(item => { const node = document.getElementById(item.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return <FileCard>
    <nav className="site-nav" aria-label="Portfolio sections">
      <a className="brand" href="#about" aria-label="Ainsley Penza, back to top"><span>AP</span><b>Ainsley Penza</b></a>
      <div className="nav-links">
        {navItems.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'active' : ''}>{item.label}</a>)}
      </div>
    </nav>

    <main>
      <section className="hero" id="about">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Software developer</p>
          <h1>Building dependable software across <em>back end, web and mobile.</em></h1>
          <p className="intro">I work primarily with .NET and C#, supported by experience across front-end, cloud and mobile technologies. I am continuing my studies in Management of Information Technology at the University of Sussex.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">Explore selected work <span aria-hidden="true">↓</span></a>
            <a className="text-action" href="mailto:ainsleypenza@hotmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="stack-window" aria-label="Ainsley's technical focus">
          <div className="window-bar"><span /><span /><span /><b>focus.ts</b></div>
          <pre><code><i>const</i> developer = {'{'}{`\n`}  name: <strong>'Ainsley Penza'</strong>,{`\n`}  focus: [<strong>'C#'</strong>, <strong>'.NET'</strong>, <strong>'Web API'</strong>],{`\n`}  experience: <strong>'web · cloud · mobile'</strong>{`\n`}{'}'};</code></pre>
          <div className="status-line"><span /> Open to building what comes next</div>
        </div>
        <a className="scroll-cue" href="#projects" aria-label="Scroll to projects"><span>Scroll</span><i /></a>
      </section>

      <section className="portfolio-section projects-section" id="projects">
        <SectionTitle number="01" title="Selected work" subtitle="Healthcare software, independent builds and an active product idea." />
        <article className="project-card project-card-featured">
          <div className="project-visual cportal-visual" aria-label="CPORTAL case study">
            <span>CP</span>
            <div className="portal-lines" aria-hidden="true"><i /><i /><i /></div>
            <b>Live system</b>
          </div>
          <div className="project-copy">
            <p className="project-kicker">Selected work · Mall Systems Limited</p>
            <h3>CPORTAL</h3>
            <p className="project-summary">At Mall Systems Limited, I built five named parts of CPORTAL across referral, queue, reception, GP and emergency workflows.</p>
            <div className="contribution-block" aria-label="Ainsley's CPORTAL contributions">
              <p>My contribution</p>
              <ul>
                <li><strong>Ticket of Referral</strong><span>Electronic referral workflow</span></li>
                <li><strong>CQMS</strong><span>Queue Management System</span></li>
                <li><strong>Reception module</strong><span>Kiosk experience</span></li>
                <li><strong>GP screen</strong><span>General-practice interface</span></li>
                <li><strong>CTRACK</strong><span>Emergency module</span></li>
              </ul>
            </div>
            <p className="project-evidence">CPAS describes the wider product as a healthcare ERP supporting hospital operations and resource management. Ainsley says these modules are used across Maltese public and private hospitals, including Mater Dei Hospital, Primary Health and St James Hospital; this deployment detail is her account and is not independently verified here.</p>
            <a className="project-link" href="https://cportal.gov.mt">Visit CPORTAL <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-fields"><span>Hospital administration</span><span>Patient administration</span><span>Live product</span></div>
        </article>
        <div className="side-projects" aria-label="Additional projects">
          <article className="side-project-card">
            <div className="side-project-top"><span>02</span><b>Side project</b></div>
            <h3>Invoicing System</h3>
            <p>A side project built with .NET and SQL Server. Feature details and supporting material will be added as they are documented.</p>
            <div className="project-fields"><span>.NET</span><span>SQL Server</span></div>
          </article>
          <article className="side-project-card side-project-wip">
            <div className="side-project-top"><span>03</span><b>Work in progress</b></div>
            <h3>Famlocker</h3>
            <p>A family management application in development, intended to bring financials, shared to-dos, children, pets, assets and location tracking into one place.</p>
            <div className="project-fields"><span>Family management</span><span>In development</span></div>
          </article>
        </div>
      </section>

      <section className="portfolio-section experience-section" id="experience">
        <SectionTitle number="02" title="Experience" subtitle="A software career spanning development, training and an international internship." />
        <div className="timeline">
          {experience.map((item, index) => <article className="timeline-card" key={item.role + item.company}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="timeline-content">
              <p className="date">{item.date}</p>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p className="detail">{item.detail}</p>
              {'project' in item && item.project ? <a className="experience-project" href="#projects">Selected work: {item.project} <span aria-hidden="true">↓</span></a> : null}
            </div>
          </article>)}
        </div>
      </section>

      <section className="portfolio-section skills-section" id="skills">
        <SectionTitle number="03" title="Technical skills" subtitle="A practical toolkit centred on C# and .NET, with supporting web, mobile and cloud experience." />
        <div className="skills-grid">
          {Object.entries(skills).map(([title, items], index) => <article className="skill-card" key={title}>
            <div className="skill-card-top"><span>0{index + 1}</span><i aria-hidden="true">{index === 0 ? '{ }' : index === 1 ? '</>' : index === 2 ? '▣' : '☁'}</i></div>
            <h3>{title}</h3>
            <div className="tags">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section className="portfolio-section education-section" id="education">
        <SectionTitle number="04" title="Education" subtitle="Software development foundations, now extended through postgraduate IT management study." />
        <div className="education-panel">
          <div className="education-current">
            <p>Current study</p>
            <h3>Management of Information Technology</h3>
            <span>University of Sussex · Master's study</span>
          </div>
          <Rows>
            <Row name="Bachelor's Degree in ICT - Software Development" detail="MCAST" value="Dec 2025" valueKnown />
            <Row name="Advanced Diploma in ICT Software Development" detail="MCAST" />
            <Row name="7 O-Levels (SEC Certificate)" detail="University of Malta" />
          </Rows>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow light"><span /> Contact</p>
          <h2>Have a software or IT opportunity in mind?</h2>
          <p>Let's connect and start a conversation.</p>
        </div>
        <div className="contact-actions">
          <a href="mailto:ainsleypenza@hotmail.com">Email me <span>↗</span></a>
          <a href="https://www.linkedin.com/in/ainsley-penza">LinkedIn <span>↗</span></a>
          <a href="https://github.com/ainsley-penza">GitHub <span>↗</span></a>
        </div>
      </section>
    </main>

    <Closing>Portfolio draft · September 2026. Content is based on Ainsley's CV, current university records and verified project information.</Closing>
  </FileCard>;
}
