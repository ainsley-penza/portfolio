import React, { useEffect, useState } from 'react';
import './style.css';

const nav = [['about','About'],['projects','Work'],['experience','Experience'],['skills','Skills'],['education','Education'],['contact','Contact']];
const skills = {
  'Back end': ['.NET 6/8 (C#)', '.NET Web API', '.NET Windows Services', 'Python', 'JWT', 'Azure AD B2C', 'Postman', 'Swagger'],
  'Front end': ['JavaScript', 'Angular', 'HTML5', 'CSS3'],
  'Mobile · basic': ['Android Studio (Kotlin/Java)', 'Ionic', 'Cordova', 'React Native'],
  'Cloud · basic': ['Microsoft Azure', 'Google Cloud'],
};
const jobs = [
  ['Nov 2022 - present','Software Developer','Mall Systems Limited','Full-time','CPORTAL · hospital and patient administration system'],
  ['Sep 2022','Software Developer Intern','xelab','Zaragoza, Spain · Erasmus project',''],
  ['Jun - Oct 2022','Trainee Software Developer','Dakar Software Systems','Full-time',''],
];
function Title({n,children,sub}:{n:string;children:React.ReactNode;sub:string}){return <header className="section-head"><span>{n}</span><div><h2>{children}</h2><p>{sub}</p></div></header>}
export function App(){
 const [active,setActive]=useState('about');
 useEffect(()=>{const io=new IntersectionObserver(es=>{const e=es.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(e)setActive(e.target.id)},{rootMargin:'-25% 0px -60%'});nav.forEach(([id])=>{const el=document.getElementById(id);if(el)io.observe(el)});return()=>io.disconnect()},[]);
 return <div className="shell">
  <aside className="rail"><a className="monogram" href="#about">AP</a><nav aria-label="Portfolio sections">{nav.map(([id,label])=><a key={id} href={'#'+id} className={active===id?'active':''}>{label}</a>)}</nav><p>Software developer<br/>United Kingdom</p></aside>
  <main>
   <section id="about" className="hero"><div className="hero-index">Portfolio / 2026</div><div className="hero-grid"><div><p className="kicker">Software developer</p><h1>Building dependable software across <em>back end, web and mobile.</em></h1></div><div className="hero-note"><p>I work primarily with .NET and C#, supported by experience across front-end, cloud and mobile technologies. I am continuing my studies in Management of Information Technology at the University of Sussex.</p><div><a href="#projects">View selected work ↓</a><a href="mailto:ainsleypenza@hotmail.com">Get in touch ↗</a></div></div></div><div className="focus-strip"><b>Core focus</b><span>C#</span><span>.NET</span><span>Web API</span><span>web · cloud · mobile</span></div></section>
   <section id="projects" className="section"><Title n="01" sub="Healthcare software, independent builds and an active product idea.">Selected work</Title><article className="case"><div className="case-art"><span>CP</span><small>Live system</small></div><div><p className="kicker">Mall Systems Limited</p><h3>CPORTAL</h3><p className="lead">At Mall Systems Limited, I built five named parts of CPORTAL across referral, queue, reception, GP and emergency workflows.</p><ul className="contributions"><li><b>Ticket of Referral</b><span>Electronic referral workflow</span></li><li><b>CQMS</b><span>Queue Management System</span></li><li><b>Reception module</b><span>Kiosk experience</span></li><li><b>GP screen</b><span>General-practice interface</span></li><li><b>CTRACK</b><span>Emergency module</span></li></ul><p className="evidence">CPAS describes the wider product as a healthcare ERP supporting hospital operations and resource management. Ainsley says these modules are used across Maltese public and private hospitals, including Mater Dei Hospital, Primary Health and St James Hospital; this deployment detail is her account and is not independently verified here.</p><a className="button" href="https://cportal.gov.mt">Visit CPORTAL ↗</a></div></article><div className="project-pair"><article><span>02 / Side project</span><h3>Invoicing System</h3><p>A side project built with .NET and SQL Server. Feature details and supporting material will be added as they are documented.</p><footer>.NET · SQL Server</footer></article><article><span>03 / Work in progress</span><h3>Famlocker</h3><p>A family management application in development, intended to bring financials, shared to-dos, children, pets, assets and location tracking into one place.</p><footer>Family management · In development</footer></article></div></section>
   <section id="experience" className="section"><Title n="02" sub="Development, training and an international internship.">Experience</Title><div className="jobs">{jobs.map((j,i)=><article key={j[1]}><span>{j[0]}</span><h3>{j[1]}</h3><b>{j[2]}</b><p>{j[3]}</p>{j[4]&&<a href="#projects">Selected work: {j[4]} ↓</a>}<i>0{i+1}</i></article>)}</div></section>
   <section id="skills" className="section"><Title n="03" sub="A practical toolkit centred on C# and .NET.">Technical skills</Title><div className="skills">{Object.entries(skills).map(([k,v])=><article key={k}><h3>{k}</h3><div>{v.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
   <section id="education" className="section"><Title n="04" sub="Software foundations, now extended through postgraduate IT management study.">Education</Title><div className="education"><article><span>Current study</span><h3>Management of Information Technology</h3><p>University of Sussex · Master's study</p></article><ul><li><div><b>Bachelor's Degree in ICT - Software Development</b><span>MCAST</span></div><em>Dec 2025</em></li><li><div><b>Advanced Diploma in ICT Software Development</b><span>MCAST</span></div></li><li><div><b>7 O-Levels (SEC Certificate)</b><span>University of Malta</span></div></li></ul></div></section>
   <section id="contact" className="contact"><p className="kicker">Contact</p><h2>Have a software or IT opportunity in mind?</h2><p>Let's connect and start a conversation.</p><div><a href="mailto:ainsleypenza@hotmail.com">Email me ↗</a><a href="https://www.linkedin.com/in/ainsley-penza">LinkedIn ↗</a><a href="https://github.com/ainsley-penza">GitHub ↗</a></div></section>
   <footer className="closing">Portfolio draft · September 2026. Content is based on Ainsley's CV, current university records and verified project information.</footer>
  </main>
 </div>
}
