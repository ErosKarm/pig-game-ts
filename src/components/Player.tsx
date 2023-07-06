import Confetti from "react-confetti";

type PlayerType = {
  active: boolean;
  score: number;
  hold: number;
  hasWonPlayer: boolean;
};

function Player({ active, score, hold, hasWonPlayer }: PlayerType) {
  const isActive = active ? "bg-emerald-600" : "bg-emerald-800";
  const isActive2 = active ? "bg-emerald-700" : "bg-emerald-900";
  const isActive3 = active ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`${isActive} shadow-lg text-white h-[600px] w-[500px] flex items-center flex-col  rounded-md relative`}
    >
      {hasWonPlayer ? (
        <Confetti
          width={500}
          height={600}
          tweenDuration={1000}
          numberOfPieces={100}
          initialVelocityY={4}
        />
      ) : (
        ""
      )}
      <span
        className={`p-4 rounded-full  ml-4 mt-4 absolute ${isActive3}`}
      ></span>
      <h2 className={`text-4xl mt-24 uppercase `}>Player 1</h2>

      <span className="text-8xl mt-16">{hold}</span>

      <div
        className={`${isActive2} px-20 py-6 flex flex-col items-center gap-2 uppercase mt-32 rounded-md`}
      >
        <p>Current</p>
        <span className="text-6xl">{score}</span>
      </div>
    </div>
  );
}

export default Player;
