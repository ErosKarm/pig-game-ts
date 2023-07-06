import { useContext } from "react";
import { GameContext } from "../context/gameContext";

import Button from "./Button";
import Player from "./Player";

function App() {
  const { state, dispatch } = useContext(GameContext);

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-emerald-700">
        <h1 className="mb-2 font-['Press_Start_2P'] text-6xl font-semibold text-white max-[639px]:text-4xl">
          PIG GAME
        </h1>
        <span className="mb-4 w-1/2 text-center text-gray-100 ">
          First to reach score of <strong className="underline">100</strong>{" "}
          wins.
        </span>
        <div className="flex justify-center">
          <Player
            active={state.activePlayer === 1 ? true : false}
            score={state.activePlayer === 1 ? state.curScore : 0}
            hold={state.player1Score}
            hasWonPlayer={
              state.hasWon && state.activePlayer === 1 ? true : false
            }
          />

          <div className="absolute  flex flex-col items-center max-[639px]:h-[300px] md:h-[500px] lg:h-[600px]">
            <Button
              icon={"🔃"}
              className={
                "mb-24 mt-12 hover:translate-y-1 max-[639px]:mb-16  max-[639px]:mt-4 sm:mb-16 sm:mt-6 md:mt-6 lg:mb-24 lg:mt-12"
              }
              onClick={() => dispatch({ type: "HANDLE_RESET" })}
            >
              NEW GAME
            </Button>
            <img
              src={"/dice-" + String(state.dice) + ".png"}
              width={100}
              className="z-10 mb-36 max-[639px]:mb-14 max-[639px]:w-[60px] sm:mb-16 md:mb-28 lg:mb-36"
            />
            <Button
              icon={"🎲"}
              className={"mb-3"}
              onClick={() => dispatch({ type: "HANDLE_ROLL" })}
              disabled={state.hasWon}
            >
              ROLL DICE
            </Button>
            <Button
              icon={"📥"}
              className={"mb-3"}
              onClick={() => dispatch({ type: "HANDLE_HOLD" })}
              disabled={state.hasWon}
            >
              HOLD
            </Button>
          </div>

          <Player
            active={state.activePlayer === 2 ? true : false}
            score={state.activePlayer === 2 ? state.curScore : 0}
            hold={state.player2Score}
            hasWonPlayer={
              state.hasWon && state.activePlayer === 2 ? true : false
            }
          />
        </div>
        <span className=" mt-4 text-center text-sm text-gray-400 max-[639px]:w-2/3 sm:w-2/3 md:w-2/3 lg:w-1/3">
          Take turns to roll a single dice as many times as you wish, adding all
          roll results to a running total, but you lose your gained score for
          the turn if you roll a 1.
        </span>
      </div>
    </>
  );
}

export default App;
