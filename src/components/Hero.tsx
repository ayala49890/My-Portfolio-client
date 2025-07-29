import { useMemo } from 'react';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/1.jpg';
import bg3 from '../images/code.png';
import { profile } from "../data";
export default function Hero() {

  const backgroundImage = useMemo(() => {
    const images = [bg1, bg2, bg3];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section
      id="home"
      className="bg-[#0e1a20] text-white h-screen flex items-center justify-center px-4 relative"
    >
      <div className="relative w-full h-full max-w-5xl rounded-2xl overflow-hidden shadow-xl border border-[#1e2c33] flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm"
          style={backgroundStyle}
        />

        <div className="relative z-10 w-full flex flex-col justify-center items-center px-10 py-16 text-center">
          <div className="bg-[#0e1a20] rounded-2xl px-8 py-10 shadow-lg border border-[#1e2c33] inline-block animate-soft-pulse">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hey, I'm {profile.fullName}
            </h1>
            <div className="w-16 h-1 bg-[#e9d5c0] mx-auto mb-4" />
            <p className="text-xl text-[#e9d5c0] mt-4">{profile.title}</p>
          </div>

          <h2
            className="mt-6 font-extrabold text-white animate-bounce-inset"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Problem Solver. Code Optimizer. UI Improver.
          </h2>
        </div>
      </div>
    </section>
  );
}
