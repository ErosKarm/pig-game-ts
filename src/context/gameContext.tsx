import { createContext, useReducer } from "react";

type stateType = {
  dice: number;
  activePlayer: number;
  curScore: number;
  player1Score: number;
  player2Score: number;
  hasWon: boolean;
  winScore: number;
};

type actionType = {
  type: "HANDLE_ROLL" | "HANDLE_HOLD" | "HANDLE_RESET" | "HANDLE_WIN";
  payload?: number | boolean;
};

const initialValue = {
  dice: 1,
  activePlayer: 1,
  curScore: 0,
  player1Score: 0,
  player2Score: 0,
  hasWon: false,
  winScore: 100,
};

function generateRolledDice(): number {
  return Math.floor(Math.random() * 6 + 1);
}

export const GameContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({
  state: initialValue,
  dispatch: () => {},
});

function reducer(state: stateType, action: actionType) {
  switch (action.type) {
    // Rolling a dice
    case "HANDLE_ROLL": {
      const rolledDice = generateRolledDice();

      if (rolledDice === 1 && state.activePlayer === 1) {
        return { ...state, activePlayer: 2, curScore: 0 };
      }

      if (rolledDice === 1 && state.activePlayer === 2) {
        return { ...state, activePlayer: 1, curScore: 0 };
      }

      return { ...state, curScore: state.curScore + rolledDice };
    }

    // Holing a score
    case "HANDLE_HOLD": {
      if (state.activePlayer === 1) {
        if (state.player1Score + state.curScore >= state.winScore) {
          return {
            ...state,
            player1Score: state.player1Score + state.curScore,
            activePlayer: 1,
            curScore: 0,
            hasWon: true,
          };
        } else {
          return {
            ...state,
            player1Score: state.player1Score + state.curScore,
            activePlayer: 2,
            curScore: 0,
          };
        }
      }

      if (state.activePlayer === 2) {
        if (state.player2Score + state.curScore >= state.winScore) {
          return {
            ...state,
            player2Score: state.player2Score + state.curScore,
            activePlayer: 2,
            curScore: 0,
            hasWon: true,
          };
        } else {
          return {
            ...state,
            player2Score: state.player2Score + state.curScore,
            activePlayer: 1,
            curScore: 0,
          };
        }
      }

      if (state.activePlayer === 2) {
        return {
          ...state,
          player2Score: state.player2Score + state.curScore,
          activePlayer: 1,
          curScore: 0,
        };
      }

      return { ...state };
    }

    // Resetting a game
    case "HANDLE_RESET": {
      return { ...initialValue };
    }

    default:
      return state;
  }
}

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
