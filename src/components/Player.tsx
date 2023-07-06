import Confetti from "react-confetti";

type PlayerType = {
  active: boolean;
  score: number;
  hold: number;
  hasWonPlayer: boolean;
};

function Player({ active, score, hold, hasWonPlayer }: PlayerType) {
  const isActive = active ? "bg-emerald-600/80" : "bg-emerald-800/80";
  const isActive2 = active ? "bg-emerald-700" : "bg-emerald-900";
  const isActive3 = active ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`${isActive} relative flex flex-col items-center overflow-hidden rounded-md text-white shadow-lg max-[639px]:h-[300px] max-[639px]:w-[170px] max-[639px]:px-4 sm:h-[400px] sm:w-[300px]  md:h-[500px] md:w-[380px] lg:h-[600px] lg:w-[500px]`}
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
        className={` absolute  mt-4 flex items-center rounded-full p-4 sm:mt-3 sm:p-3 md:mt-3 md:p-4 lg:mt-4 lg:p-4 ${isActive3} max-[639px]:mb-4 max-[639px]:p-3`}
      ></span>
      <h2
        className={` mt-24 font-medium uppercase  max-[639px]:mt-12 sm:mt-12 sm:text-2xl md:mt-16 md:text-3xl lg:mt-24 lg:text-4xl`}
      >
        Player
      </h2>

      <span className="text-8xl max-[639px]:mt-8 max-[639px]:text-6xl sm:mt-16 sm:text-7xl md:mt-16 md:text-8xl  lg:mt-16 lg:text-8xl ">
        {hold}
      </span>

      <div
        className={`${isActive2} mt-32 flex flex-col items-center gap-2 rounded-md px-20 py-6 uppercase max-[639px]:mt-12  max-[639px]:px-3 max-[639px]:py-2 sm:mt-20 sm:px-10 sm:py-2 md:mt-28 md:px-12 md:py-3 lg:mt-36 lg:px-20`}
      >
        <p className="max-[639px]:text-xs">Current</p>
        <span className="text-6xl max-[639px]:text-2xl sm:text-3xl md:text-4xl">
          {score}
        </span>
      </div>
    </div>
  );
}

export default Player;
