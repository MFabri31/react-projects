import { useCallback, useEffect, useState } from "react";
import { birds } from "./data";
import Swal from "sweetalert2";

interface App {
  userWord: string;
  currentBird: {
    id: number;
    word: string;
    scrambled: string;
    hint: string;
    image: string;
  };
  randomNumber: number;
  showHint: boolean;
  score: number;
  attempts: number;
}

function App() {
  const [userWord, setUserWord] = useState<App["userWord"]>("");
  const [currentBird, setCurrentBird] = useState<App["currentBird"] | null>(
    null
  );
  const [randomNumber, setRandomNumber] = useState<App["randomNumber"]>(0);
  const [showHint, setShowHint] = useState<App["showHint"]>(false);
  const [score, setScore] = useState<App["score"]>(0);
  const [attempts, seAttempts] = useState<App["attempts"]>(5);

  const getRandomBird = useCallback(() => {
    setRandomNumber(Math.floor(Math.random() * birds.length));
    setCurrentBird(birds[randomNumber]);
  }, [randomNumber]);

  const handleShowHint = () => {
    setShowHint(!showHint);
  };

  useEffect(() => {
    getRandomBird();
    setShowHint(false);
  }, [getRandomBird]);

  const hintMessage = showHint ? "Ocultar ayuda" : "Ver ayuda";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userWord.trim() === "" || userWord.length < 5) {
      Swal.fire({
        title: "La palabra ingresada debe tener al menos 5 carácteres!",
        icon: "error",
        draggable: true,
      });
    }

    if (userWord.toUpperCase() === currentBird?.word) {
      Swal.fire({
        title: `Bien hecho! 👏 La palabra correcta es ${currentBird?.word}`,
        icon: "success",
        draggable: true,
      });

      setScore((prev) => prev + 10);
      seAttempts((prev) => prev + 1);
    } else {
      Swal.fire({
        title: `Palabra incorrecta`,
        icon: "error",
        draggable: true,
      });

      seAttempts((prev) => prev - 1);
    }
    e.currentTarget.reset();
  };

  if (attempts === 0) {
    seAttempts(5);
    getRandomBird();
  }

  const isHintVisible = showHint ? "visible" : "invisible";

  return (
    <main className="flex flex-col gap-16 justify-center items-center min-h-screen w-96 m-auto ">
      <header>
        <h1 className=" font-bold text-center ">Guess the word</h1>
      </header>

      <div className="p-4 border-0 rounded-md bg-indigo-600  bg-top bg-cover shadow-2xl w-full relative">
        <div className="text-4xl text-center py-5">
          {currentBird?.scrambled}
        </div>
        <div className="my-3 text-center text-xl">
          Puntaje {score} | Intentos {attempts}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-0 border-b-2 p-2 w-full mb-4 rounded-sm outline-0"
            placeholder="Ingresa un ave"
            value={userWord}
            onChange={(e) => setUserWord(e.target.value)}
          />

          <button
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
            disabled={attempts === 0}
          >
            Comprobar
          </button>
        </form>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-3"
          onClick={() => getRandomBird()}
        >
          Aleatorio
        </button>
        <button
          className=" my-3 w-full bg-yellow-600 "
          onClick={handleShowHint}
        >
          <span className="animate-pulse">
            💡 {"  "}
            {hintMessage}
          </span>
        </button>
      </div>

      <div
        className={`text-1xl text-left p-3 rounded-md italic bg-indigo-400 ${isHintVisible} `}
      >
        <span className="animate-pulse"></span>
        {currentBird?.hint}
      </div>
    </main>
  );
}

export default App;
