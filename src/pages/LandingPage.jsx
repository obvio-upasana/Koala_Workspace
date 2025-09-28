// File: src/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(){
  const scrollToContact = (e)=>{
    e.preventDefault();
    const el = document.getElementById('contact');
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };

  const FACILITIES = [
    { key: 'desks', title: 'Hot Desks', short: 'Flexible desks', detail: 'Open-plan desks available by hour, day or month.' },
    { key: 'pods', title: 'Sound-proof Pods', short: 'Private pods', detail: 'Individual enclosed pods for focused work and calls.' },
    { key: 'rooms', title: 'Meeting Rooms', short: 'Bookable rooms', detail: 'Small to medium rooms with projector options.' },
    { key: 'board', title: 'Board Rooms', short: 'Executive rooms', detail: 'Large board rooms for presentations and events.' },
    { key: 'lounge', title: 'Lounge', short: 'Casual area', detail: 'Comfortable lounge for networking and breaks.' },
    { key: 'play', title: 'Play Room', short: 'Recreation', detail: 'Games and unwind area for creativity breaks.' },
    { key: 'nap', title: 'Nap Area', short: 'Resting pods', detail: 'Quiet sleeping/resting area for power naps.' },
    { key: 'cafe', title: 'Cafeteria', short: 'Open to all', detail: 'Casual cafeteria with snacks and beverages.' },
    { key: 'offices', title: 'Contract Offices', short: 'Private offices', detail: 'Dedicated offices leased to companies.' },
    { key: 'stationeries', title: 'Stationery Room', short: 'Temporary use', detail: 'If any stationery needed for temporary or office use.' },
    { key: 'xerox', title: 'Xerox Machine', short: 'B/W and Color', detail: 'Xerox machines for members along with Shredding machine.' },
    { key: 'alltimeopen', title: '24x7 open', short: 'Never stop working', detail: 'Workspace opened 24x7 for seamless anytime work.' },
  ];

  const PLANS = [
    { name: 'Day Pass', price: '₹499', perks: ['Hot desk','Wi‑Fi','Common cafeteria access'] },
    { name: 'Monthly', price: '₹7,999', perks: ['Dedicated desk','24x7 access','Locker'] },
    { name: 'Private Office', price: 'Custom', perks: ['Private office','Meeting room credits','Contract billing'] }
  ];

  const EXTRAS = ['High-speed WiFi','24×7 access','Stationary room','On‑table coffee service','Nap area','Xerox & Scanner','Projector','Temporary cables','Event area organisation'];

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">Koala Workspace</div>
          <div className="nav-links">
            <a href="#facilities">Facilities</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link to="/login" className="btn link-login">Login</Link>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="display">Koala Workspace — flexible spaces that work with you</h1>
            <p className="lead">Rent desks, private pods, meeting rooms and offices — hour, day or contract. Minimal, focused and professional environments for teams and individuals.</p>
            <div className="hero-ctas">
              <a href="#contact" onClick={scrollToContact} className="btn primary">Book / Contact Us</a>
              <a href="#facilities" className="btn secondary">See facilities</a>
            </div>
            <div className="trust">Trusted by small teams and startups • Flexible billing • Secure access</div>
          </div>

          <div className="hero-illus">
            <img src="/assets/illustrations/hero-workspace.svg" alt="workspace illustration" className="hero-image" />
          </div>
        </div>
      </header>

      <section className="section" id="facilities">
        <div className="container">
          <h2 className="section-title">Facilities</h2>
          <p className="muted">Hover any item to expand and read details.</p>
          <div className="grid">
            {FACILITIES.map(f => (
              <div key={f.key} className="grid-item" tabIndex={0} aria-label={f.title}>
                <div className="grid-item-inner">
                  <div className="grid-thumb">
                    <img src={`/assets/illustrations/${f.key}.svg`} alt="" className="thumb-img" onError={(e)=>{e.currentTarget.style.display='none'}} />
                  </div>
                  <h4 className="grid-title">{f.title}</h4>
                  <p className="grid-short">{f.short}</p>
                  <div className="grid-detail">{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Services & Plans</h2>
          <div className="plans">
            {PLANS.map(p=> (
              <div key={p.name} className="plan-card">
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
                <ul>
                  {p.perks.map((x,i)=>(<li key={i}>{x}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className="extras">
            <h4>Also includes</h4>
            <ul className="extras-list">
              {EXTRAS.map((e,i)=>(<li key={i}>{e}</li>))}
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section bg-light">
        <div className="container centered">
          <h2 className="section-title">About Koala Workspace</h2>
          <p className="about-text">Koala Workspace is a coworking venue offering flexible desks, private pods, meeting and board rooms, a communal cafeteria, and contract offices. Designed for productivity and balance.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container centered">
          <h2 className="section-title">Contact Us</h2>
          <p className="muted">Phone: +91 99999 99999 · Email: hello@koala.work</p>
          <p className="muted">Address: 123 Workspace Ave, Business District</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container centered muted">© {new Date().getFullYear()} Koala Workspace — All rights reserved</div>
      </footer>
    </div>
  );
}



