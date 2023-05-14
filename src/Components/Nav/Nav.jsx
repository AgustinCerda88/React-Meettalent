import React from 'react';
import './Nav.css';
import{BiHomeAlt}from 'react-icons/bi';
import{FiUsers}from 'react-icons/fi';
import{BsPlusSquare}from 'react-icons/bs';
import{RiNotification3Line}from 'react-icons/ri';
import{RiSuitcaseLine}from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#HomePage');

  useEffect(() => {
    const links = document.querySelectorAll('nav');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.hash === activeNav) {
        link.classList.add('active');
      }
    });
  }, [activeNav]);

  return (
    <nav>
      <Link to="/home" onClick={() => setActiveNav('#HomePage')} className={activeNav === '#HomePage' ? 'active' : ''}>
        <BiHomeAlt />
      </Link>
      <Link to="/candidates" onClick={() => setActiveNav('#CandidatesPage')} className={activeNav === '#CandidatesPage' ? 'active' : ''}>
        <FiUsers />
      </Link>
      <Link to="/create"  className={activeNav === '#CreatePage' ? 'active' : ''} onClick={() => setActiveNav('#CreatePage')}>
        <BsPlusSquare />
      </Link>
      <Link to="/notifications" onClick={() => setActiveNav('#NotificationsPage')} className={activeNav === '#NotificationsPage' ? 'active' : ''}>
        <RiNotification3Line />
      </Link>
      <Link to="/offers" onClick={() => setActiveNav('#OffersPage')} className={activeNav === '#OffersPage' ? 'active' : ''}>
        <RiSuitcaseLine />
      </Link>
    </nav>
  );
};

export default Nav;