"use client"
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] });


export default function Home() {
  return (

    <div className={`${pressStart2P.className} h-screen w-screen flex`}>
      <div className="bg-green-500 absolute h-full w-full -z-50">
        <img className="h-full w-full" src="https://wallpapers.com/images/high/old-windows-1920-x-1080-background-ngg7bmgpkxrk69lm.webp" />
      </div>

      <main className="flex justify-center items-center h-full w-full">
        {/* Chat Box */}
        <div className="h-[70%] w-[50%] bg-white border-blue-700 border-[10px] rounded-lg">
          <div className="bg-blue-700 flex justify-end">
            <div className="w-10 h-10 bg-blue-500 border rounded-lg"></div>
            <div className="w-10 h-10 bg-blue-500 border rounded-lg"></div>
            <div className="w-10 h-10 bg-red-500 border rounded-lg flex items-center justify-center">
              <span className=" text-white text-3xl bg-blue-700 leading-none">X</span>
            </div>
          </div>

          <div className="text-black text-3xl text-center mt-2">Y2K: Survival Protocol</div>
          {/** Start button **/}
          <div className="text-blue-950 text-2xl text-center mt-20">Start</div>



        </div>
      </main>
    </div>
  );
}
