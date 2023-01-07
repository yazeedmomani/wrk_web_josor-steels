import styles from "./Logo.module.css";

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="841.865"
      height="402.38"
      className={`${styles[props.theme]} ${styles.logo}`}
      viewBox="0 0 841.865 402.38">
      <g
        id="Logo"
        transform="translate(0.005)">
        <g
          id="Group_45"
          data-name="Group 45">
          <g
            id="Group_43"
            data-name="Group 43">
            <text
              className={styles.grey}
              id="OSOR"
              transform="translate(188.86 178.46)"
              fill="#8c8c8c"
              fontSize="192"
              fontFamily="CopperplateGothic-Light, Copperplate Gothic"
              fontWeight="300"
              letterSpacing="0.02em">
              <tspan
                x="0"
                y="0">
                OSOR
              </tspan>
            </text>
            <text
              id="Steel_Fabricators"
              data-name="Steel Fabricators"
              transform="translate(22.06 385.38)"
              fill="#8c8c8c"
              className={styles.grey}
              fontSize="81.8"
              fontFamily="CopperplateGothic-Light, Copperplate Gothic"
              fontWeight="300"
              letterSpacing="-0.01em">
              <tspan
                x="0"
                y="0">
                S
              </tspan>
              <tspan
                y="0"
                letterSpacing="-0.02em">
                t
              </tspan>
              <tspan
                y="0"
                letterSpacing="-0.02em">
                eel{" "}
              </tspan>
              <tspan
                y="0"
                letterSpacing="-0.12em">
                F
              </tspan>
              <tspan
                y="0"
                letterSpacing="-0.02em">
                ab
              </tspan>
              <tspan y="0">r</tspan>
              <tspan
                y="0"
                letterSpacing="-0.02em">
                ica
              </tspan>
              <tspan
                y="0"
                letterSpacing="-0.03em">
                t
              </tspan>
              <tspan y="0">o</tspan>
              <tspan
                y="0"
                letterSpacing="-0.03em">
                r
              </tspan>
              <tspan
                y="0"
                letterSpacing="-0.02em">
                s
              </tspan>
            </text>
          </g>
          <g
            id="Group_44"
            data-name="Group 44">
            <path
              id="Path_218"
              data-name="Path 218"
              className={styles.primary}
              d="M151.52,178.87c-.8,23.53-13.66,43.82-32.29,54.25-.28.23-.58.45-.89.67a22.966,22.966,0,0,1-3.26,1.93,74.324,74.324,0,0,1-43.21,11.6,73.735,73.735,0,0,1-46.19-17.85.01.01,0,0,1-.01-.01,28.194,28.194,0,0,1-3.81-3.02,29.214,29.214,0,0,1-3.58-4.02,62.959,62.959,0,0,1-6.51-8c11.68,11.77,27.15,18.94,44.14,18.94,36.39,0,65.89-32.93,65.89-73.55q0-3.885-.35-7.67c.58.25,19.09,8.62,30.07,26.73Z"
              fill="#7a0000"
            />
            <path
              id="Path_219"
              data-name="Path 219"
              className={styles.primary}
              d="M125.26,71.66s26.21,7.57,36.17,16.77v-28s8.06,1.91,18.59,9.01l.39.27V44.33S163.31,13.28,122.46,0l2.81,71.66Z"
              fill="#7a0000"
            />
            <path
              id="Path_220"
              data-name="Path 220"
              className={styles.grey}
              d="M203.26,219.36c-1.88,27.02-10.08,50.96-21.71,67.54a115.922,115.922,0,0,0,8.54-44.41c0-16.22-3.39-32.71-9.25-46.07a89.55,89.55,0,0,0-19.96-33.48c-13.17-17.32-30.83-28.61-48.46-31.87a99.067,99.067,0,0,0-24.94-3.14c-40.96,0-74.6,24.32-78.26,55.38a45.958,45.958,0,0,0-.34,5.65c0,.33.01.74.02,1.17.01.78.05,1.57.12,2.34.02.27.03.43.03.43A89.387,89.387,0,0,0,9.06,204c.03.62.07,1.24.13,1.86.02.19.03.38.04.57l.09,1.05a80.828,80.828,0,0,1-9.13-43.2c3.36-48.14,49.09-84.16,102.15-80.46a101.721,101.721,0,0,1,61.68,25.92,91.341,91.341,0,0,1,14.43,16.76.179.179,0,0,0,.05.07A104.734,104.734,0,0,1,193.74,155c7.5,17.43,11.22,40.01,9.52,64.36Z"
              fill="#8c8c8c"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Logo;
