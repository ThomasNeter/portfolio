import { useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import birdImage from '@/assets/Mighty_Eagle.webp';
import birdSong from '@/assets/I\'M DA BIGGEST BIRD.mp3';

const BiggestBird: React.FC = () => {
    const [guess, setGuess] = useState<string>("");
    const [guessCount, setGuessCount] = useState<number>(0);
    const [birdModalOpen, setbirdModalOpen] = useState<boolean>(false);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(event.target.value);
    };
    
    const handleSubmit = () => {
        setGuessCount(guessCount+1);
    };

    useEffect(() => {
        if(guess === "bird"){
            console.log("WOWWWWW BIG BIRD");
            audioRef.current && audioRef.current.play();
            setbirdModalOpen(true);
        } else if(guessCount > 0 && guessCount % 5 === 0){
            console.log("do you give up?");
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guessCount]);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // const playAudio = () => {
    //     if (audioRef.current) {
    //     audioRef.current.play();
    //     }
    // };

    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-indigo-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Guess My Other Title" aria-label="Title guess" value={guess} onChange={handleInputChange}/>
                    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit} type="button">
                        Guess
                    </button>
                    <audio ref={audioRef}>
                        <source src={birdSong} type="audio/mp3" />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            </form>

            {/* <Dialog
                open={birdModalOpen}
                onClose={() => setbirdModalOpen(false)}
                className="fixed z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className="w-full pt-100 max-w-lg rounded bg-white">
                    <Dialog.Title>Complete your order</Dialog.Title>

                    </Dialog.Panel>
                </div>
            </Dialog> */}

            <Transition show={birdModalOpen} as={React.Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setbirdModalOpen(false)}>
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>

                    <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            I'm the Biggest Bird!
                        </Dialog.Title>

                        <div className="mt-2">
                        <img
                            src={birdImage} // Provide the path to your bird image
                            alt="Bird"
                            className="w-full"
                        />
                        </div>

                        <div className="mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-blue-900 bg-blue-200 rounded-md hover:bg-blue-300"
                            onClick={() => setbirdModalOpen(false)}
                        >
                            Close
                        </button>
                        </div>
                        <div>
                            {/* <button onClick={playAudio}>Play Audio</button> */}
                            
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
            
        </div>
    )
}

export default BiggestBird;