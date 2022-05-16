const FourthMainRightChart = () => {
  return (
    <div
      id="apexchartsueskoonak"
      className="apexcharts-canvas apexchartsueskoonak apexcharts-theme-light bg-gradient rounded-xl"
      style={{ width: "596px", height: "220px" }}
    >
      <svg
        id="SvgjsSvg1759"
        width="596"
        height="220"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev"
        className="apexcharts-svg"
        xmlnsData="ApexChartsNS"
        transform="translate(0, 0)"
        style={{ background: "transparent" }}
      >
        <g
          id="SvgjsG1761"
          className="apexcharts-inner apexcharts-graphical"
          transform="translate(47.453125, 30)"
        >
          <defs id="SvgjsDefs1760">
            <linearGradient
              id="SvgjsLinearGradient1765"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                id="SvgjsStop1766"
                stop-opacity="0.4"
                stop-color="rgba(216,227,240,0.4)"
                offset="0"
              ></stop>
              <stop
                id="SvgjsStop1767"
                stop-opacity="0.5"
                stop-color="rgba(190,209,230,0.5)"
                offset="1"
              ></stop>
              <stop
                id="SvgjsStop1768"
                stop-opacity="0.5"
                stop-color="rgba(190,209,230,0.5)"
                offset="1"
              ></stop>
            </linearGradient>
            <clipPath id="gridRectMaskueskoonak">
              <rect
                id="SvgjsRect1770"
                width="542.546875"
                height="175"
                x="-2"
                y="0"
                rx="0"
                ry="0"
                opacity="1"
                stroke-width="0"
                stroke="none"
                stroke-dasharray="0"
                fill="#fff"
              ></rect>
            </clipPath>
            <clipPath id="forecastMaskueskoonak"></clipPath>
            <clipPath id="nonForecastMaskueskoonak"></clipPath>
            <clipPath id="gridRectMarkerMaskueskoonak">
              <rect
                id="SvgjsRect1771"
                width="542.546875"
                height="179"
                x="-2"
                y="-2"
                rx="0"
                ry="0"
                opacity="1"
                stroke-width="0"
                stroke="none"
                stroke-dasharray="0"
                fill="#fff"
              ></rect>
            </clipPath>
          </defs>
          <rect
            id="SvgjsRect1769"
            width="7.180625"
            height="175"
            x="86.98081380208335"
            y="0"
            rx="0"
            ry="0"
            opacity="1"
            stroke-width="0"
            stroke-dasharray="3"
            fill="url(#SvgjsLinearGradient1765)"
            className="apexcharts-xcrosshairs"
            y2="175"
            filter="none"
            fill-opacity="0.9"
            x1="86.98081380208335"
            x2="86.98081380208335"
          ></rect>
          <g
            id="SvgjsG1794"
            className="apexcharts-xaxis"
            transform="translate(0, 0)"
          >
            <g
              id="SvgjsG1795"
              className="apexcharts-xaxis-texts-g"
              transform="translate(0, -4)"
            ></g>
          </g>
          <g id="SvgjsG1819" className="apexcharts-grid">
            <g
              id="SvgjsG1820"
              className="apexcharts-gridlines-horizontal"
              style={{ display: "none" }}
            >
              <line
                id="SvgjsLine1822"
                x1="0"
                y1="0"
                x2="538.546875"
                y2="0"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                className="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1823"
                x1="0"
                y1="35"
                x2="538.546875"
                y2="35"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                className="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1824"
                x1="0"
                y1="70"
                x2="538.546875"
                y2="70"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                className="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1825"
                x1="0"
                y1="105"
                x2="538.546875"
                y2="105"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                className="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1826"
                x1="0"
                y1="140"
                x2="538.546875"
                y2="140"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                className="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1827"
                x1="0"
                y1="175"
                x2="538.546875"
                y2="175"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                className="apexcharts-gridline"
              ></line>
            </g>
            <g
              id="SvgjsG1821"
              className="apexcharts-gridlines-vertical"
              style={{ display: "none" }}
            ></g>
            <line
              id="SvgjsLine1829"
              x1="0"
              y1="175"
              x2="538.546875"
              y2="175"
              stroke="transparent"
              stroke-dasharray="0"
              stroke-linecap="butt"
            ></line>
            <line
              id="SvgjsLine1828"
              x1="0"
              y1="1"
              x2="0"
              y2="175"
              stroke="transparent"
              stroke-dasharray="0"
              stroke-linecap="butt"
            ></line>
          </g>
          <g
            id="SvgjsG1772"
            className="apexcharts-bar-series apexcharts-plot-series"
          >
            <g
              id="SvgjsG1773"
              className="apexcharts-series"
              rel="1"
              seriesName="Sales"
              dataRealIndex="0"
            >
              <path
                id="SvgjsPath1777"
                d="M 26.328958333333333 175L 26.328958333333333 67.5Q 26.328958333333333 59.5 34.32895833333333 59.5L 25.50958333333333 59.5Q 33.50958333333333 59.5 33.50958333333333 67.5L 33.50958333333333 67.5L 33.50958333333333 175L 33.50958333333333 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 26.328958333333333 175L 26.328958333333333 67.5Q 26.328958333333333 59.5 34.32895833333333 59.5L 25.50958333333333 59.5Q 33.50958333333333 59.5 33.50958333333333 67.5L 33.50958333333333 67.5L 33.50958333333333 175L 33.50958333333333 175z"
                pathFrom="M 26.328958333333333 175L 26.328958333333333 175L 33.50958333333333 175L 33.50958333333333 175L 33.50958333333333 175L 33.50958333333333 175L 33.50958333333333 175L 26.328958333333333 175"
                cy="59.5"
                cx="86.16749999999999"
                j="0"
                val="330"
                barHeight="115.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1779"
                d="M 86.16749999999999 175L 86.16749999999999 95.5Q 86.16749999999999 87.5 94.16749999999999 87.5L 85.348125 87.5Q 93.348125 87.5 93.348125 95.5L 93.348125 95.5L 93.348125 175L 93.348125 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 86.16749999999999 175L 86.16749999999999 95.5Q 86.16749999999999 87.5 94.16749999999999 87.5L 85.348125 87.5Q 93.348125 87.5 93.348125 95.5L 93.348125 95.5L 93.348125 175L 93.348125 175z"
                pathFrom="M 86.16749999999999 175L 86.16749999999999 175L 93.348125 175L 93.348125 175L 93.348125 175L 93.348125 175L 93.348125 175L 86.16749999999999 175"
                cy="87.5"
                cx="146.00604166666665"
                j="1"
                val="250"
                barHeight="87.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1781"
                d="M 146.00604166666665 175L 146.00604166666665 144.5Q 146.00604166666665 136.5 154.00604166666665 136.5L 145.18666666666664 136.5Q 153.18666666666664 136.5 153.18666666666664 144.5L 153.18666666666664 144.5L 153.18666666666664 175L 153.18666666666664 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 146.00604166666665 175L 146.00604166666665 144.5Q 146.00604166666665 136.5 154.00604166666665 136.5L 145.18666666666664 136.5Q 153.18666666666664 136.5 153.18666666666664 144.5L 153.18666666666664 144.5L 153.18666666666664 175L 153.18666666666664 175z"
                pathFrom="M 146.00604166666665 175L 146.00604166666665 175L 153.18666666666664 175L 153.18666666666664 175L 153.18666666666664 175L 153.18666666666664 175L 153.18666666666664 175L 146.00604166666665 175"
                cy="136.5"
                cx="205.8445833333333"
                j="2"
                val="110"
                barHeight="38.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1783"
                d="M 205.8445833333333 175L 205.8445833333333 78Q 205.8445833333333 70 213.8445833333333 70L 205.0252083333333 70Q 213.0252083333333 70 213.0252083333333 78L 213.0252083333333 78L 213.0252083333333 175L 213.0252083333333 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 205.8445833333333 175L 205.8445833333333 78Q 205.8445833333333 70 213.8445833333333 70L 205.0252083333333 70Q 213.0252083333333 70 213.0252083333333 78L 213.0252083333333 78L 213.0252083333333 175L 213.0252083333333 175z"
                pathFrom="M 205.8445833333333 175L 205.8445833333333 175L 213.0252083333333 175L 213.0252083333333 175L 213.0252083333333 175L 213.0252083333333 175L 213.0252083333333 175L 205.8445833333333 175"
                cy="70"
                cx="265.68312499999996"
                j="3"
                val="300"
                barHeight="105"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1785"
                d="M 265.68312499999996 175L 265.68312499999996 11.5Q 265.68312499999996 3.5 273.68312499999996 3.5L 264.86375 3.5Q 272.86375 3.5 272.86375 11.5L 272.86375 11.5L 272.86375 175L 272.86375 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 265.68312499999996 175L 265.68312499999996 11.5Q 265.68312499999996 3.5 273.68312499999996 3.5L 264.86375 3.5Q 272.86375 3.5 272.86375 11.5L 272.86375 11.5L 272.86375 175L 272.86375 175z"
                pathFrom="M 265.68312499999996 175L 265.68312499999996 175L 272.86375 175L 272.86375 175L 272.86375 175L 272.86375 175L 272.86375 175L 265.68312499999996 175"
                cy="3.5"
                cx="325.52166666666665"
                j="4"
                val="490"
                barHeight="171.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1787"
                d="M 325.52166666666665 175L 325.52166666666665 60.5Q 325.52166666666665 52.5 333.52166666666665 52.5L 324.70229166666667 52.5Q 332.70229166666667 52.5 332.70229166666667 60.5L 332.70229166666667 60.5L 332.70229166666667 175L 332.70229166666667 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 325.52166666666665 175L 325.52166666666665 60.5Q 325.52166666666665 52.5 333.52166666666665 52.5L 324.70229166666667 52.5Q 332.70229166666667 52.5 332.70229166666667 60.5L 332.70229166666667 60.5L 332.70229166666667 175L 332.70229166666667 175z"
                pathFrom="M 325.52166666666665 175L 325.52166666666665 175L 332.70229166666667 175L 332.70229166666667 175L 332.70229166666667 175L 332.70229166666667 175L 332.70229166666667 175L 325.52166666666665 175"
                cy="52.5"
                cx="385.36020833333333"
                j="5"
                val="350"
                barHeight="122.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1789"
                d="M 385.36020833333333 175L 385.36020833333333 88.5Q 385.36020833333333 80.5 393.36020833333333 80.5L 384.54083333333335 80.5Q 392.54083333333335 80.5 392.54083333333335 88.5L 392.54083333333335 88.5L 392.54083333333335 175L 392.54083333333335 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 385.36020833333333 175L 385.36020833333333 88.5Q 385.36020833333333 80.5 393.36020833333333 80.5L 384.54083333333335 80.5Q 392.54083333333335 80.5 392.54083333333335 88.5L 392.54083333333335 88.5L 392.54083333333335 175L 392.54083333333335 175z"
                pathFrom="M 385.36020833333333 175L 385.36020833333333 175L 392.54083333333335 175L 392.54083333333335 175L 392.54083333333335 175L 392.54083333333335 175L 392.54083333333335 175L 385.36020833333333 175"
                cy="80.5"
                cx="445.19875"
                j="6"
                val="270"
                barHeight="94.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1791"
                d="M 445.19875 175L 445.19875 137.5Q 445.19875 129.5 453.19875 129.5L 444.37937500000004 129.5Q 452.37937500000004 129.5 452.37937500000004 137.5L 452.37937500000004 137.5L 452.37937500000004 175L 452.37937500000004 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 445.19875 175L 445.19875 137.5Q 445.19875 129.5 453.19875 129.5L 444.37937500000004 129.5Q 452.37937500000004 129.5 452.37937500000004 137.5L 452.37937500000004 137.5L 452.37937500000004 175L 452.37937500000004 175z"
                pathFrom="M 445.19875 175L 445.19875 175L 452.37937500000004 175L 452.37937500000004 175L 452.37937500000004 175L 452.37937500000004 175L 452.37937500000004 175L 445.19875 175"
                cy="129.5"
                cx="505.0372916666667"
                j="7"
                val="130"
                barHeight="45.5"
                barWidth="7.180625"
              ></path>
              <path
                id="SvgjsPath1793"
                d="M 505.0372916666667 175L 505.0372916666667 34.25Q 505.0372916666667 26.25 513.0372916666668 26.25L 504.2179166666667 26.25Q 512.2179166666667 26.25 512.2179166666667 34.25L 512.2179166666667 34.25L 512.2179166666667 175L 512.2179166666667 175z"
                fill="rgba(255,255,255,0.85)"
                fill-opacity="1"
                stroke-opacity="1"
                stroke-linecap="round"
                stroke-width="0"
                stroke-dasharray="0"
                className="apexcharts-bar-area"
                index="0"
                clip-path="url(#gridRectMaskueskoonak)"
                pathTo="M 505.0372916666667 175L 505.0372916666667 34.25Q 505.0372916666667 26.25 513.0372916666668 26.25L 504.2179166666667 26.25Q 512.2179166666667 26.25 512.2179166666667 34.25L 512.2179166666667 34.25L 512.2179166666667 175L 512.2179166666667 175z"
                pathFrom="M 505.0372916666667 175L 505.0372916666667 175L 512.2179166666667 175L 512.2179166666667 175L 512.2179166666667 175L 512.2179166666667 175L 512.2179166666667 175L 505.0372916666667 175"
                cy="26.25"
                cx="564.8758333333334"
                j="8"
                val="425"
                barHeight="148.75"
                barWidth="7.180625"
              ></path>
              <g
                id="SvgjsG1775"
                className="apexcharts-bar-goals-markers"
                style={{ pointerEvents: "none" }}
              >
                <g
                  id="SvgjsG1776"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1778"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1780"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1782"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1784"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1786"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1788"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1790"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
                <g
                  id="SvgjsG1792"
                  classNameName="apexcharts-bar-goals-groups"
                ></g>
              </g>
            </g>
            <g
              id="SvgjsG1774"
              className="apexcharts-datalabels"
              dataRealIndex="0"
            ></g>
          </g>
          <line
            id="SvgjsLine1830"
            x1="0"
            y1="0"
            x2="538.546875"
            y2="0"
            stroke="#b6b6b6"
            stroke-dasharray="0"
            stroke-width="1"
            stroke-linecap="butt"
            className="apexcharts-ycrosshairs"
          ></line>
          <line
            id="SvgjsLine1831"
            x1="0"
            y1="0"
            x2="538.546875"
            y2="0"
            stroke-dasharray="0"
            stroke-width="0"
            stroke-linecap="butt"
            className="apexcharts-ycrosshairs-hidden"
          ></line>
          <g id="SvgjsG1832" className="apexcharts-yaxis-annotations"></g>
          <g id="SvgjsG1833" className="apexcharts-xaxis-annotations"></g>
          <g id="SvgjsG1834" className="apexcharts-point-annotations"></g>
        </g>
        <g
          id="SvgjsG1805"
          className="apexcharts-yaxis"
          rel="0"
          transform="translate(17.453125, 0)"
        >
          <g id="SvgjsG1806" className="apexcharts-yaxis-texts-g">
            <text
              id="SvgjsText1807"
              font-family="Plus Jakarta Display"
              x="20"
              y="31.5"
              text-anchor="end"
              dominant-baseline="auto"
              font-size="10px"
              font-weight="400"
              fill="#ffffff"
              className="apexcharts-text apexcharts-yaxis-label font-PlusJakartaDisplay"
            >
              <tspan id="SvgjsTspan1808">500</tspan>
              <title>500</title>
            </text>
            <text
              id="SvgjsText1809"
              font-family="Plus Jakarta Display"
              x="20"
              y="66.5"
              text-anchor="end"
              dominant-baseline="auto"
              font-size="10px"
              font-weight="400"
              fill="#ffffff"
              className="apexcharts-text apexcharts-yaxis-label font-PlusJakartaDisplay"
            >
              <tspan id="SvgjsTspan1810">400</tspan>
              <title>400</title>
            </text>
            <text
              id="SvgjsText1811"
              font-family="Plus Jakarta Display"
              x="20"
              y="101.5"
              text-anchor="end"
              dominant-baseline="auto"
              font-size="10px"
              font-weight="400"
              fill="#ffffff"
              className="apexcharts-text apexcharts-yaxis-label font-PlusJakartaDisplay"
            >
              <tspan id="SvgjsTspan1812">300</tspan>
              <title>300</title>
            </text>
            <text
              id="SvgjsText1813"
              font-family="Plus Jakarta Display"
              x="20"
              y="136.5"
              text-anchor="end"
              dominant-baseline="auto"
              font-size="10px"
              font-weight="400"
              fill="#ffffff"
              className="apexcharts-text apexcharts-yaxis-label font-PlusJakartaDisplay"
            >
              <tspan id="SvgjsTspan1814">200</tspan>
              <title>200</title>
            </text>
            <text
              id="SvgjsText1815"
              font-family="Plus Jakarta Display"
              x="20"
              y="171.5"
              text-anchor="end"
              dominant-baseline="auto"
              font-size="10px"
              font-weight="400"
              fill="#ffffff"
              className="apexcharts-text apexcharts-yaxis-label font-PlusJakartaDisplay"
            >
              <tspan id="SvgjsTspan1816">100</tspan>
              <title>100</title>
            </text>
            <text
              id="SvgjsText1817"
              font-family="Plus Jakarta Display"
              x="20"
              y="206.5"
              text-anchor="end"
              dominant-baseline="auto"
              font-size="10px"
              font-weight="400"
              fill="#ffffff"
              className="apexcharts-text apexcharts-yaxis-label font-PlusJakartaDisplay"
            >
              <tspan id="SvgjsTspan1818">0</tspan>
              <title>0</title>
            </text>
          </g>
        </g>
        <g id="SvgjsG1762" className="apexcharts-annotations"></g>
      </svg>
      <div className="apexcharts-legend" style={{ maxHeight: "110px" }}></div>
      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
        <div className="apexcharts-yaxistooltip-text"></div>
      </div>
    </div>
  );
};

export default FourthMainRightChart;
