import Image from "next/image";
import styles from "./page.module.css";
import { Krona_One } from "next/font/google";
import { animate } from "animejs";

const kronaOne = Krona_One({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="h-screen w-full flex flex-col snap-start snap-always">
        <div className={`${kronaOne.className} text-[20px] w-full flex justify-end pt-[40px] pr-[60px]`}>
          <div className="mr-[60px] mt-[30px]">
            <button>MAIN</button>
          </div>
          <div className="mr-[60px] mt-[30px]">
            <button>ABOUT</button>
          </div>
          <div className="mr-[60px] mt-[30px]">
            <button>PROTFILIO</button>
          </div>
          <div className="mr-[60px] mt-[30px]">
            <button>CONTACT</button>
          </div>
        </div>
        <div className="flex-grow flex items-center">
          <div className={`${kronaOne.className} text-[40px] font-bold ml-[40px]`}>
            <div>
              A CREATE DESIGNER
            </div>
            <div>
              & DEVELOPER.
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col snap-start snap-always">
        ABOUT
      </div>
      <div className="h-screen w-full flex flex-col snap-start snap-always">
        PORTFOLIO
      </div>
      <div className="h-screen w-full flex flex-col snap-start snap-always">
        CONTACT
      </div>
    </div>
  );
}