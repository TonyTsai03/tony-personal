"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { Krona_One,  Niconne} from "next/font/google";
import { animate } from "animejs";
import { useEffect, useState } from "react";


const kronaOne = Krona_One({ subsets: ['latin'], weight: '400' });
const nnicoOnne = Niconne({ subsets: ['latin'], weight:'400'})

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("main");

  const [loading, setLoadin] = useState<boolean>(true);
  const handleSetActive = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "about", "portfolio", "contact"];
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div id="main" className="h-screen w-full flex flex-col snap-start snap-always">
        <div className={`${kronaOne.className} text-[20px] w-full flex justify-end pt-[40px] pr-[60px]`}>
          <div className="mr-[60px] mt-[30px] flex flex-col items-center">
            <button 
              onClick={() => handleSetActive("main")}
              className="focus:outline-none"
            >
              MAIN
            </button>
            {activeSection === "main" && (
              <div className="h-[5px] w-[5px] bg-black rounded-full mt-2"></div>
            )}
          </div>
          <div className="mr-[60px] mt-[30px] flex flex-col items-center">
            <button 
              onClick={() => handleSetActive("about")}
              className="focus:outline-none"
            >
              ABOUT
            </button>
            {activeSection === "about" && (
              <div className="h-[5px] w-[5px] bg-black rounded-full mt-2"></div>
            )}
          </div>
          <div className="mr-[60px] mt-[30px] flex flex-col items-center">
            <button 
              onClick={() => handleSetActive("portfolio")}
              className="focus:outline-none"
            >
              PROTFILIO
            </button>
            {activeSection === "portfolio" && (
              <div className="h-[5px] w-[5px] bg-black rounded-full mt-2"></div>
            )}
          </div>
          <div className="mr-[60px] mt-[30px] flex flex-col items-center">
            <button 
              onClick={() => handleSetActive("contact")}
              className="focus:outline-none"
            >
              CONTACT
            </button>
            {activeSection === "contact" && (
              <div className="h-[5px] w-[5px] bg-black rounded-full mt-2"></div>
            )}
          </div>
        </div>
        <div className="flex-grow flex items-center">
          <div className={`${kronaOne.className} text-[40px] font-bold ml-[40px]`}>
            <div>
              HI, I'M TONY A CREATE DESIGNER
            </div>
            <div>
              & DEVELOPER.
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="h-screen w-full flex flex-col snap-start snap-always justify-center items-center">
        ABOUT
      </div>
      <div id="portfolio" className="h-screen w-full flex flex-col snap-start snap-always justify-center items-center">
        PORTFOLIO
      </div>
      <div id="contact" className="h-[200px] bg-black w-full flex flex-col snap-start text-white snap-always justify-center items-center">
        <div>
          github
        </div>
        <div>
          Phone
        </div>
        <div>
          email
        </div>
      </div>
    </div>
  );
}