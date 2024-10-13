"use client"
import { Press_Start_2P } from 'next/font/google';
import { useState } from 'react';

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] });

const decisionTree = [
  {
    id: 1,
    prompt: "It's 12:01 AM on December 31st. Your T.V. is playing in the background but instead of noticing the terrible news, you focus is drawn to the flicker lights above you.The buzz of the fluorescent lights draws away as the first words you hear all night is spoken from the T.V.:SAVE YOURSELF! You realize you have only 24-hours left before the moment everyone has been dreading, the Year 2000. What do you decide to do first?",
    choices: [
      { label: "I need to find some resources.", nextNode: 2, timeCost: 1 },
      { label: "I can maybe get technology up and running.", nextNode: 3, timeCost: 1 },
      { label: "I should gather a team to help me through this panic.", nextNode: 4, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 32,
    prompt: "You decide to not engage in this activity. Maybe this is a wise choice, but the clock is still ticking. What is your next step?",
    choices: [
      { label: "I need to find some resources.", nextNode: 2, timeCost: 1 },
      { label: "I can maybe get technology up and running.", nextNode: 3, timeCost: 1 },
      { label: "I should gather a team to help me through this panic.", nextNode: 4, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 33,
    prompt: "You have successfully completed a task. Your keen decision making has helped you prepare and make you feel a little more safer. What will you do next?",
    choices: [
      { label: "I need to find some resources.", nextNode: 2, timeCost: 1 },
      { label: "I can maybe get technology up and running.", nextNode: 3, timeCost: 1 },
      { label: "I should gather a team to help me through this panic.", nextNode: 4, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 34,
    prompt: "You have unfortunately failed a task, but keep your head up high, there are still other ways to survive.",
    choices: [
      { label: "I need to find some resources.", nextNode: 2, timeCost: 1 },
      { label: "I can maybe get technology up and running.", nextNode: 3, timeCost: 1 },
      { label: "I should gather a team to help me through this panic.", nextNode: 4, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 2,
    prompt: "You realize you will need food, water, and materials to survive this disaster. You either look to steal, savage, or barter for the needed resources. Which do you choose?",
    choices: [
      { label: "I will steal for a chance to live on.", nextNode: 5, timeCost: 1 },
      { label: "I will scavenge the near by buildings.", nextNode: 6, timeCost: 1 },
      { label: "I will try to build a connection and barter for my needs.", nextNode: 7, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 5,
    prompt: "You realize there is a corner store near your apartment with an elderly clerk. You can maybe steal what you need when the store seems empty, or you can walk away. ",
    choices: [
      { label: "Yes, I try to enter when the store looks empty.", randomNodes: [14, 15], timeCost: 3 },
      { label: "No, I rather not rob him.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 14,
    prompt: "The elderly man did not notice you and you were able to successfully take the necessary resources. You are well supplied for the impending doom that awaits you.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 15,
    prompt: "You enter the store when it looks empty and start to fill your bags with food. You hear a voice behind you say: 'HEY! You didn't pay for that'. The next moment you find yourself outside the store with a bad headache.",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 6,
    prompt: "You know there are multiple abandoned buildings near your apartment that may have important resources. You wish to scavenge, but you can't tell if anyone else had the same idea. Do you try to enter and scavage the abandoned buildings?",
    choices: [
      { label: "Yes, I look for a door to enter the building.", randomNodes: [16, 17], timeCost: 3 },
      { label: "No, I rather not risk entering a building that contains secrets.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 16,
    prompt: "You enter the building and fortunately there is no one else around. You locate the necessary resources for survival and you're prepared to face the horror that awaits you.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 17,
    prompt: "You find the door but you hear quick scattering once you step in. You feel uneasy but continue to look for the needed resources. As you leave with your pockets full, two strange figures run towards you from the exit. As you fall to the ground, you feel yourself get lighter, your resources have been stolen.",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 7,
    prompt: "You realize a group of people are gathering together at the neighborhood park. They seem friendly with lots of needed resources. You take what little you have and consider bartering. Do you try to barter with them?",
    choices: [
      { label: "Yes, I take what I have and try to barter for the most amount of resources I can carry.", randomNodes: [18, 19], timeCost: 3 },
      { label: "No, I think I will make due with what I have in my apartment.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 18,
    prompt: "You take what you have and put on your best charm face. Fortunately everyone falls for your charm and you're able to walk away with many more resources than you started with.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 19,
    prompt: "You take what you have and do your best to charm them. Unfortunately they see through your act and refuse to trade with you. You walk away with somehow less than you started with",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 3,
    prompt: "You realize all the technology will soon fail the world and you must prioritize the needed tech for survival. You will either need a stable power source, a reliable way of communication, or a strong vehicle to get you around. Which do you choose? ",
    choices: [
      { label: "I will prioritize locating a strong power source for the future.", nextNode: 8, timeCost: 1 },
      { label: "I need to be aware of others and the news so I will find a reliable way of communication.", nextNode: 9, timeCost: 1 },
      { label: "If I can travel anywhere, I know I will be safe so I will find a strong vehicle for I and others.", nextNode: 10, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 8,
    prompt: "You know there is a main breaker box deep in the basement of your apartment complex. If you can get down there, you try to repair it and keep it safe. Do you attempt to go down the basement and protect your only chance of power after the clock strikes 12:00 AM?",
    choices: [
      { label: "Yes, I realize this is the only shot I will have to have stable power and make my way down the basement.", randomNodes: [20, 21], timeCost: 3 },
      { label: "No, I don't think I can make it down there safely and repair something that may hurt me.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 20,
    prompt: "You make it to the basement safely and locate the breaker box. You thinker around with it and you're able to repair and sustain the power. ",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 21,
    prompt: "You try to make it down the basement but take a misstep on the stairs and tumble down. You head right into the breaker box, destroying it beyond repair, and getting up with a sore bum. ",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 9,
    prompt: "You understand that communication in these times is key and will increase survivability. There are a few radios located near your apartment in the local tech store. As you make it to the store, you realize each radio needs special batteries. Do you attempt to locate the batteries and get a radio working?",
    choices: [
      { label: "Yes, communication is really important and I must find a way to be connected to the world.", randomNodes: [22, 23], timeCost: 3 },
      { label: "No, I know that communication is important but there has to be a better way to communicate with the world.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 22,
    prompt: "You are able to successfully locate the needed batteries and get a radio working. You change through the stations and find a news outlet that gives you important updates.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 23,
    prompt: "You are able to find batteries but they don't seem to fit the radio. You are anxious to know what is going on in the world and shove the batteries in the radio. As you try to turn it on, the radio sparks and is no longer functional.",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 10,
    prompt: "Moving from point A to point B will be the most important key to this. The local car repair shop has some busted cars and maybe you can try to repair one with the tools there. Do you attempt to repair the truck you see in the shop?",
    choices: [
      { label: "Yes, this valuable repair may be the only vehicle left after midnight.", randomNodes: [24, 25], timeCost: 3 },
      { label: "No, I don't think this repair may be worth it.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 24,
    prompt: "After a few simple adjustments the truck is able to start successfully. You notice all it needs is a bit of gas for the future. You load up the truck and make you way to look for survivors and better location.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 25,
    prompt: "You complete a few adjustments and try to turn on the truck. As you start the truck, you hear a loud rattle coming from the engine. You forgot to tighten a screw after adjusting the engine. The truck fails to start and you are left walking back to your apartment thinking of a new plan.",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 4,
    prompt: "Two heads are better than one. You conclude that a major key to surviving this incoming disaster is teamwork. Through all this panic, you realize the rest of the tenants in your apartments have left. Without a team you are weak, how can you get others to join you on your journey of surviving? ",
    choices: [
      { label: "I can attract potential teammates by creating a small smoke signal and alert others near me.", nextNode: 11, timeCost: 1 },
      { label: "I can go to near by buildings and convince others to join me to increase our survivability.", nextNode: 12, timeCost: 1 }
    ],
    points: 0
  },
  {
    id: 11,
    prompt: "You decide to create a smoke signal so that others can find you and perhaps will be willing to join you. Before you light the match, you realize that you will not only be attracting potential teammates, but other who may not be so friendly. Do you ignite the match?",
    choices: [
      { label: "Yes, I light the match, the risk is worth the reward.", randomNodes: [26, 27], timeCost: 3 },
      { label: "No, this decision will leave a target behind my back. I rather be safe.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 26,
    prompt: "You ignite the match and smoke begins to fill the air. A truck approaches you and you explain to them your idea of working together for the best chances of survival. They agree and let you onboard. You feel safe and more confident of surviving this disaster.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 27,
    prompt: "You light the match and the smoke starts to rise. Before the smoke disappears, a group of people approach you and offer you a choice: give them the remaining of your supplies, or let today be your last day. Without another choice, you give them the rest of your supplies and they leave you alone.",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 12,
    prompt: "You make your way to the near by apartment complexes in hopes that there is anybody left to team with. You enter the apartment complex and hear noises upstairs; there are still people here. As you are about to knock on their door, you consider who is really behind the close door. Do you decide to knock?",
    choices: [
      { label: "Yes, teamwork is key and the chances of my survivability rises once I knock on the door.", randomNodes: [28, 29], timeCost: 3 },
      { label: "No, I decide it's not worth the risk of making a possible enemy.", nextNode: 32, timeCost: 2 }
    ],
    points: 0
  },
  {
    id: 28,
    prompt: "You knock on the door three times and wait for a response. There is a couple at the door and bring you in quickly to help being packing supplies into their car outside. After helping them, they are willing to help you out throughout this panic.",
    choices: [
      { label: "Continue", nextNode: 33, timeCost: 3 }
    ],
    points: 10
  },
  {
    id: 29,
    prompt: "You knock once on the door and it creaks open slowly. There is no sound so you take a step in, quickly regretting it once you trip over someone's leg sticking out. As you get up, they hustle you into giving up all the supplies you were carrying.",
    choices: [
      { label: "Continue", nextNode: 34, timeCost: 2 }
    ],
    points: 0
  },

];

export default function Home() {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(24);
  const [currentNode, setCurrentNode] = useState(decisionTree[0]);
  const [points, setPoints] = useState(0);
  const [decisionHistory, setDecisionHistory] = useState<Decision[]>([]);
  const [gameResult, setGameResult] = useState<string>("");

  const handleChoice = (choice: { nextNode?: number; randomNodes?: number[]; timeCost: number; label: string }) => {
    let nextNodeId: number | undefined;

    if (choice.randomNodes && choice.randomNodes.length > 0) {
      const randomIndex = Math.floor(Math.random() * choice.randomNodes.length);
      nextNodeId = choice.randomNodes[randomIndex];
    } else if (choice.nextNode) {
      nextNodeId = choice.nextNode;
    }

    if (nextNodeId && !isChoiceDisabled(nextNodeId)) {
      const nextNode = decisionTree.find((node) => node.id === nextNodeId);
      if (nextNode) {
        setCurrentNode(nextNode);
        setPoints(points + nextNode.points);
        removeTime(choice.timeCost);
        logDecision(currentNode.id, currentNode.prompt, choice.label);
      }
    }
  };

  const removeTime = (time: number) => {
    setTimer((prevTimer) => {
      const newTime = Math.max(prevTimer - time, 0);
      if (newTime === 0) {
        checkWinLose(points);
        setGameOver(true)
      }
      return newTime;
    });
  };

  const logDecision = (nodeId: number, prompt: string, choiceLabel: string) => {
    const decision = {
      nodeId,
      prompt,
      choiceLabel,
      timeRemaining: timer
    };
    setDecisionHistory((prevHistory) => [...prevHistory, decision]);
  };

  const isChoiceDisabled = (nextNodeId: number | undefined) => {
    return (
      nextNodeId &&
      nextNodeId !== 1 &&
      nextNodeId !== 2 &&
      nextNodeId !== 3 &&
      nextNodeId !== 4 &&
      nextNodeId !== 32 &&
      nextNodeId !== 33 &&
      nextNodeId !== 34 &&
      decisionHistory.some((decision) => decision.nodeId === nextNodeId)
    );
  };

  const checkWinLose = (updatedPoints: number) => {
    if (updatedPoints >= 20) {
      setGameResult('win');
    } else if (updatedPoints < 20) {
      setGameResult('lose');
    }
  };

  console.log(gameResult)

  return (
    <div className={`${pressStart2P.className} h-screen w-screen flex overflow-hidden`}>
      <div className="bg-green-500 absolute h-full w-full -z-50">
        <img className="h-full w-full" src="https://wallpapers.com/images/high/old-windows-1920-x-1080-background-ngg7bmgpkxrk69lm.webp" alt="Y2K background" />
      </div>

      <main className="flex justify-center mt-14 h-full w-full">
        <div className="h-[80%] w-[50%] bg-[#ebe9d8] border-blue-700 border-[10px] rounded-lg">

          {/* Top Border */}
          <div className="bg-blue-700 flex justify-end pb-1">
            <div className="w-10 h-10 bg-blue-500 border rounded-md mr-1">
              <div className="text-white text-2xl ml-2">_</div>
            </div>

            <div className="w-10 h-10 bg-blue-500 border rounded-md flex items-center justify-center mr-1">
              <div className="w-5 h-5 bg-blue-500 border-white border-[2px]">
                <div className="w-4 h-1 bg-white"></div>
              </div>
            </div>

            <div className="w-10 h-10 bg-red-500 border rounded-md flex items-center justify-center">
              <div className="text-white text-2xl ml-1">X</div>
            </div>
          </div>

          {/* Start Content */}
          {!gameStart && !gameOver && (
            <div className="flex flex-col items-center justify-center">
              <div className="h-32 flex items-center justify-center bg-white m-16 rounded-lg p-4">
                <div className="text-black text-3xl text-center mt-2">Y2K: Survival Protocol</div>
              </div>

              <div
                className="h-24 w-56 flex items-center justify-center bg-white m-10 rounded-lg cursor-pointer"
                onClick={() => {
                  setGameStart(true)
                }}
              >
                <div className="text-blue-950 text-2xl text-center hover:text-blue-400">
                  Start
                </div>
              </div>
            </div>
          )}

          {/* Game Content */}
          {gameStart && !gameOver && (
            <div>
              <div className="flex-row items-center flex justify-between p-2">
                <div className="text-black">Home</div>
                <div className="text-black">Points: {points}</div>
                <div className='text-black'>{timer}:00</div>
              </div>

              {/* Prompt */}
              <div className='bg-white text-black mx-7 mt-2 p-3'
                style={{ minHeight: 320 }}

              >
                {currentNode.prompt}
              </div>

              {/* Choices */}
              <div className="bg-white text-black mx-7 mt-12 p-4">
                {currentNode.choices.map((choice, index) => {
                  const isDisabled = isChoiceDisabled(choice.nextNode);
                  return (
                    <div
                      className={`cursor-pointer ${isDisabled ? 'text-gray-400' : 'hover:text-blue-400'}`}
                      key={index}
                      onClick={() => !isDisabled && handleChoice(choice)}
                    >
                      {choice.label}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Game End Screen */}
          {gameOver && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className={`text-4xl text-center ${gameResult === 'win' ? "text-green-600" : "text-red-600"}`}>
                {gameResult === 'win' ? 'You Win!' : 'you lose'}
              </div>

              {/* Show Results Button */}
              <div className="text-center mt-6">
                <button
                  className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 mr-4"
                  onClick={() => setShowResults(!showResults)}
                >
                  {showResults ? "Hide Results" : "Show Results"}
                </button>

                <button
                  className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700"
                  onClick={() => window.location.reload()}
                >
                  Restart Game
                </button>
              </div>

              {/* Display Results if showResults is true */}
              {showResults && (
                <div className="mt-6 text-xl text-black w-full">
                  <div className="text-center font-bold mb-4">Your Decisions:</div>
                  <ul className="text-black mt-4 p-4 bg-white rounded-lg overflow-auto max-h-60">
                    {decisionHistory.map((decision, index) => (
                      <li key={index} className="mt-2">
                        <strong>Step {index + 1}:</strong> {decision.prompt} <br />
                        <em>Choice:</em> {decision.choiceLabel} <br />
                        <em>Time Remaining:</em> {decision.timeRemaining}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

interface Decision {
  nodeId: number;
  prompt: string;
  choiceLabel: string;
  timeRemaining: number;
}
