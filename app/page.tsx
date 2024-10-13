"use client"
import { Press_Start_2P } from 'next/font/google';
import { useState } from 'react';

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] });

const decisionTree = [
  {
    id: 1,
    prompt: "It's 12:01 AM on December 31st. Your T.V. is playing in the background but instead of noticing the terrible news, you focus is drawn to the flicker lights above you.The buzz of the fluorescent lights draws away as the first words you hear all night is spoken from the T.V.:SAVE YOURSELF! You realize you have only 24-hours left before the moment everyone has been dreading, the Year 2000. What do you decide to do first?",
    choices: [
      { label: "I need to find some resources.", nextNode: 2, timeCost: 3 },
      { label: "I can maybe get technology up and running.", nextNode: 3, timeCost: 3 },
      { label: "I should collect a team to help through this panic.", nextNode: 4, timeCost: 3 }
    ],
    points: 0
  },
  {
    id: 2,
    prompt: "The TV flashes a warning about Y2K. What do you do?",
    choices: [
      { label: "Ignore it", nextNode: 4, timeCost: 3 },
      { label: "Prepare for Y2K", nextNode: 5, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 3,
    prompt: "The lights go out, and you hear a strange noise outside. What do you do?",
    choices: [
      { label: "Check the circuit breaker", nextNode: 4, timeCost: 3 },
      { label: "Hide and wait", nextNode: 5, timeCost: 2 }
    ],
    points: 5
  },
  {
    id: 4,
    prompt: "You find a survival kit under the bed. Do you take it?",
    choices: [
      { label: "Yes, take the kit", nextNode: 5, timeCost: 2 },
      { label: "No, leave it", nextNode: 5, timeCost: 2 }
    ],
    points: 20
  },
  {
    id: 5,
    prompt: "You survive the first night of chaos. What's your next step?",
    choices: [
      { label: "Start fortifying your home", nextNode: 1, timeCost: 2 },
      { label: "Go out and explore", nextNode: 1, timeCost: 2 }
    ],
    points: 50
  }
];


export default function Home() {
  const [gameStart, setGameStart] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(24)
  const [prompt, setPrompt] = useState<string>("")
  const [currentNode, setCurrentNode] = useState(decisionTree[0]);
  const [points, setPoints] = useState(0);

  const handleChoice = (nextNodeId: number, timeCost: number) => {
    const nextNode = decisionTree.find(node => node.id === nextNodeId);
    if (nextNode) {
      setCurrentNode(nextNode);
      setPoints(points + nextNode.points);
      removeTime(timeCost);
    }
  };

  const removeTime = (time: number) => {
    setTimer((prevTimer) => Math.max(prevTimer - time, 0));
  };

  return (
    <div className={`${pressStart2P.className} h-screen w-screen flex`}>
      <div className="bg-green-500 absolute h-full w-full -z-50">
        <img className="h-full w-full" src="https://wallpapers.com/images/high/old-windows-1920-x-1080-background-ngg7bmgpkxrk69lm.webp" />
      </div>

      <main className="flex justify-center items-center h-full w-full">
        <div className="h-[75%] w-[50%] bg-[#ebe9d8] border-blue-700 border-[10px] rounded-lg">

          {/* Top Border */}
          <div className="bg-blue-700 flex justify-end pb-1">
            <div className="w-10 h-10 bg-blue-500 border rounded-lg">
              <div className="text-white text-2xl ml-2">_</div>
            </div>

            <div className="w-10 h-10 bg-blue-500 border rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-blue-500 border-white border-[2px]">
                <div className="w-4 h-1 bg-white"></div>
              </div>
            </div>

            <div className="w-10 h-10 bg-red-500 border rounded-lg flex items-center justify-center">
              <div className="text-white text-2xl ml-1">X</div>
            </div>
          </div>

          {/* Start Content */}
          {!gameStart && (
            <div className="flex flex-col items-center justify-center">
              <div className="h-32 flex items-center justify-center bg-white m-16 rounded-lg">
                <div className="text-black text-3xl text-center mt-2">Y2K:Survival Protocol</div>
              </div>

              <div
                className="h-24 w-56 flex items-center justify-center bg-white m-10 rounded-lg cursor-pointer"
                onClick={() => {
                  setGameStart(true)
                }}
              >
                <div className="text-blue-950 text-2xl text-center">
                  Start
                </div>
              </div>
            </div>
          )}

          {/* Game Content */}
          {gameStart && (
            <div>
              <div className="flex-row items-center flex justify-between p-2">
                <div className="text-black">Home</div>
                <div className="text-black">Points: {points}</div>
                <div className='text-black'>{timer}:00</div>
              </div>

              {/* Prompt */}
              <div className='h-60 bg-white text-black ml-7 mr-7 mt-2 p-3'>
                {currentNode.prompt}
              </div>

              {/* Choices */}
              <div className="h-52 bg-white text-black ml-14 mr-14 mt-12">
                {currentNode.choices.map((choice, index) => (
                  <div key={index} className="choice-btn" onClick={() => handleChoice(choice.nextNode, choice.timeCost)}>
                    {choice.label}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main >
    </div >
  );
}
