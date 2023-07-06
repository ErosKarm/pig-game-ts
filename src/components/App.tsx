import { useContext } from "react";
import { GameContext } from "../context/gameContext";

import Button from "./Button";
import Player from "./Player";

function App() {
  const { state, dispatch } = useContext(GameContext);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-emerald-700">
        <h1 className="text-white text-6xl font-semibold">PIG GAME</h1>
        <span className="text-gray-100 w-1/2 text-center mb-4 ">
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

          <div className="h-[600px] absolute flex flex-col items-center">
            <Button
              icon={"🔃"}
              className={"mt-12 mb-24 hover:translate-y-1"}
              onClick={() => dispatch({ type: "HANDLE_RESET" })}
            >
              NEW GAME
            </Button>
            <img
              src={"/dice-" + String(state.dice) + ".png"}
              width={100}
              className="mb-36 z-10"
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
        <span className=" w-1/3 text-center mt-4 text-sm text-gray-400">
          Take turns to roll a single dice as many times as you wish, adding all
          roll results to a running total, but you lose your gained score for
          the turn if you roll a 1.
        </span>
      </div>
    </>
  );
}

export default App;
