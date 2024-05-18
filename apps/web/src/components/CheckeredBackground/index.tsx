const CheckeredBackground = () => {
  return (
    <div className="w-full h-full bg-[rgba(13,26,47,100%)] flex justify-center items-center">
      <div
        className="w-full h-[450px]  sm:h-[600px] overflow-hidden"
        style={{ perspective: "calc(600px * 0.95)" }}
      >
        <div
          className="w-full h-full absolute z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(13,26,47,0%) 0%, rgba(13,26,47,100%) 80%)",
          }}
        ></div>
        <div
          className="animation-grid-lines w-full h-[200%] bg-[length:45px_30px] bg-repeat origin-[100%_3%_0]"
          style={{
            animation: "checkered-animation 10s linear infinite",
            backgroundImage:
              "linear-gradient(to right, rgb(72, 16, 62) 8px, transparent 0),linear-gradient(to bottom, rgb(72, 16, 62) 8px, transparent 0)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CheckeredBackground;
