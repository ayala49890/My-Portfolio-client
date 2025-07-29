import React from 'react';
import Profile from '../features/Profile';
import Experiences from '../features/Experiences';
import Projects from '../features/Projects';
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

