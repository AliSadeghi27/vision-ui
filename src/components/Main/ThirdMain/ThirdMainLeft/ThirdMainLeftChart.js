const ThirdMainLeftChart = () => {
  return (
      <div
        className="circle-progress-wrap mx-auto mt-4"
        style={{ width: "200px", height: "200px", position: "relative" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 100 200 200"
          style={{ transform: "rotate(-90deg)", overflow: "visible" }}
        >
          <linearGradient
            id="grd_qfajrfrfh858"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientTransform="rotate(90, .5, .5)"
          >
            <stop offset="0" stop-color="rgba(0, 117, 255, 0)"></stop>
            <stop offset="100" stop-color="#0075ff"></stop>
          </linearGradient>
          <circle
            cx="200"
            cy="200"
            r="92.5"
            stroke="#22234B"
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
            stroke-dashoffset="116.23892818282229"
            stroke-linecap="round"
            stroke="url(#grd_qfajrfrfh858)"
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
            <div className="MuiBox-root bg-sky-600 p-2 rounded-full mb-16 css-8oug5d">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#fff"
                height="30px"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 017.83-10.17h175.69a8 8 0 017.82 10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ThirdMainLeftChart;
