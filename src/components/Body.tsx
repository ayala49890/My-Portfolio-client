import React from 'react';
import Profile from '../features/profile/Profile';
import Experiences from '../features/experiences/Experiences';
import Projects from '../features/projects/Projects';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Body() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Experiences />
      <Projects />
      <Footer />
    </>);
}

