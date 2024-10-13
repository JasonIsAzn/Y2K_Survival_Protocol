"use client"
import { useState } from 'react';
import axios from 'axios';
import { Press_Start_2P } from 'next/font/google';
import { debounce } from 'lodash';

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] });

export default function ChatTest() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Delay function to avoid too many requests in a short time
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Function to send message to ChatGPT
    const sendMessage = async () => {
        try {
            // Add a 1-second delay to prevent rate-limiting issues
            await delay(1000);
            const res = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }],
            }, {
                headers: {
                    'Authorization': ``,
                    'Content-Type': 'application/json'
                }
            });

            // Display the response
            setResponse(res.data.choices[0].message.content);
            setErrorMessage('');
        } catch (error: any) {
            // Handle 429 or 401 status errors properly
            if (error.response && error.response.status === 429) {
                console.error("Rate limit exceeded, please wait a moment before trying again.");
                setErrorMessage("Rate limit exceeded, please try again later.");
            } else if (error.response && error.response.status === 401) {
                console.error("Unauthorized: Invalid API Key.");
                setErrorMessage("Unauthorized: Invalid API Key.");
            } else {
                console.error("Error communicating with ChatGPT: ", error);
                setErrorMessage("An error occurred. Please try again.");
            }
        }
    };

    // Debounced version of sendMessage to prevent spamming
    const debouncedSendMessage = debounce(sendMessage, 1000); // 1 second debounce

    return (
        <div className={`${pressStart2P.className} h-screen w-screen flex flex-col items-center justify-center`}>
            <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
                <h1 className="text-3xl mb-4">Chat with GPT</h1>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border rounded-md mb-4"
                    placeholder="Type your message here"
                />

                <button
                    onClick={debouncedSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Send
                </button>

                {response && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Response:</h2>
                        <p>{response}</p>
                    </div>
                )}

                {errorMessage && (
                    <div className="mt-4 text-red-500">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
