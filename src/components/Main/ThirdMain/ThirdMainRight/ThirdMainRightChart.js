const ThirdMainRightChart = () => {
  return (
    <div
      className="circle-progress-wrap "
      style={{ width: "200px", height: "200px", position: "relative" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="100 100 200 200"
        style={{ transform: "rotate(-90deg)", overflow: "visible" }}
      >
        <linearGradient
          id="grd_tbdczf6yweli"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientTransform="rotate(90, .5, .5)"
        >
          <stop offset="0" stop-color="rgba(5, 205, 153, 0)"></stop>
          <stop offset="100" stop-color="#05CD99"></stop>
        </linearGradient>
        <circle
          cx="200"
          cy="200"
          r="92.5"
          stroke="transparent"
          stroke-width="15"
          fill="none"
        ></circle>
        <circle
          cx="200"
          cy="200"
          r="92.5"
          fill="none"
          stroke-width="15"
          stroke-dasharray="581.1946409141117"
          stroke-dashoffset="174.3583922742335"
          stroke-linecap="round"
          stroke="url(#grd_tbdczf6yweli)"
          style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
        ></circle>
      </svg>
      <div
        className="circle-progress-inner"
        style={{
          position: "absolute",
          inset: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-[15px] text-[#86848e] font-bold">
              Safety
            </span>
            <span className="font-bold text-white text-5xl my-2">
              9.3
            </span>
            <span className="text-[15px] text-[#86848e] font-bold">
              Total Score
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMainRightChart;
