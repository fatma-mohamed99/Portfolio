import React, { useState } from 'react';
import { RefreshCw, Award } from 'lucide-react';

const NumberGuessingGame = () => {
    const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('Start guessing!');
    const [temperature, setTemperature] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [gameStatus, setGameStatus] = useState('playing');
    const [inputError, setInputError] = useState(false);
    const [previousGuesses, setPreviousGuesses] = useState([]);

    const calculateTemperature = (guessNum) => {
        const diff = Math.abs(targetNumber - guessNum);
        if (diff === 0) return 0;
        if (diff <= 5) return 100;
        if (diff <= 10) return 80;
        if (diff <= 20) return 60;
        if (diff <= 30) return 40;
        if (diff <= 50) return 20;
        return 0;
    };

    const getTemperatureMessage = (temp) => {
        switch (true) {
            case temp === 100: return "🔥 BURNING HOT! You're almost there!";
            case temp >= 80: return "🌋 Very Hot! Super Close!";
            case temp >= 60: return "🔥 Hot! Getting Closer!";
            case temp >= 40: return "🌞 Warm! Keep Trying!";
            case temp >= 20: return "❄️ Cool. A bit far.";
            default: return "🧊 Freezing Cold! Far Away!";
        }
    };

    const handleGuess = () => {
        if (!guess || isNaN(Number(guess)) || Number(guess) < 1 || Number(guess) > 100) {
            setInputError(true);
            setMessage('Please enter a valid number between 1 and 100');
            return;
        }
        setInputError(false);
        const numGuess = Number(guess);
        if (previousGuesses.includes(numGuess)) {
            setMessage(`⚠️ You already guessed ${numGuess} ! Try a different number.`);
            return;
        }

        setPreviousGuesses([...previousGuesses, numGuess]);
        setInputError(false);
        setAttempts(attempts + 1);

        if (numGuess === targetNumber) {
            setMessage('🎉🎉 Congratulations! You guessed it!');
            setGameStatus('won');
        } else {
            const temp = calculateTemperature(numGuess);
            setTemperature(temp);
            setMessage(getTemperatureMessage(temp));
        }
    };

    const resetGame = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setGuess('');
        setMessage('Start guessing!');
        setTemperature(0);
        setAttempts(0);
        setGameStatus('playing');
        setInputError(false);
        setPreviousGuesses([]);
    };

    return (
        <div className="min-h-[400px] flex p-1 sm:p-5 rounded-2xl shadow-2xl shadow-primary mt-4">
            <div className="bg-primary/5 p-5 rounded-xl text-center sm:min-w-fit md:min-w-lg w-full shadow-lg shadow-amber-100/20">
                <h2 className="text-lg md:text-2xl text-amber-100 mb-4 w-fit bg-primary/20 p-2 rounded-2xl mx-auto">Guess the Number</h2>

                <div className="bg-main/20 p-4 rounded-lg mb-6">
                    <p className={`font-semibold ${inputError ? 'text-red-500' : 'text-amber-100'}`}>
                        {message}
                    </p>
                    <div
                        className="h-2 w-full my-2  rounded-full bg-amber-100/30"
                        style={{
                            background: `linear-gradient(to right, rgba(255,255,255,0.7) ${temperature}%, transparent ${temperature}%)`,
                            transition: 'background 0.5s ease'
                        }}
                    />
                    <p className="text-amber-100/70 text-sm ">Attempts: {attempts}</p>
                </div>

                {gameStatus === 'playing' && (
                    <div className="flex gap-2 mb-4 flex-col md:flex-row md:mx-11 sm:mx-7 mx-0">
                        <input
                            type="text"
                            value={guess}
                            onChange={(e) => {
                                const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                setGuess(numericValue);
                                setInputError(false);
                            }}
                            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
                            className={`w-full p-3 bg-main/10 text-amber-100 border-2 ${inputError ? 'border-red-500' : 'border-amber-100/30'
                                } rounded-lg focus:outline-none focus:border-amber-100 transition-all`}
                            placeholder="Enter your guess (1-100)"
                            maxLength="3"
                        />
                        <button
                            onClick={handleGuess}
                            className="bg-primary/30 text-amber-100/80 p-3 rounded-lg hover:bg-primary cursor-pointer transition-opacity"
                        >
                            Guess
                        </button>
                    </div>
                )}

                {gameStatus === 'won' && (
                    <div className="flex items-center justify-center gap-2 text-amber-100">
                        <Award
                            size={32}
                            className="animate-pulse hover:animate-spin transition-all duration-500 ease-in-out transform hover:rotate-180"
                        />                        <span className="font-bold">You Won in {attempts} attempts!</span>
                    </div>
                )}

                <button
                    onClick={resetGame}
                    className="mt-4 cursor-pointer flex items-center justify-center gap-2 w-full bg-primary/20 text-amber-100 p-3 rounded-lg hover:bg-primary transition-colors"
                >
                    <RefreshCw size={20} />
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default NumberGuessingGame;