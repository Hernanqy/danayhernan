"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

type Props = {
  screen: number;
};

const particles = [
  { x: "6%",  y: "14%", s: 2, d: 8,  delay: 0.2 },
  { x: "13%", y: "33%", s: 3, d: 10, delay: 1.1 },
  { x: "20%", y: "70%", s: 2, d: 9,  delay: 0.5 },
  { x: "31%", y: "18%", s: 2, d: 11, delay: 1.8 },
  { x: "39%", y: "52%", s: 3, d: 8,  delay: 0.7 },
  { x: "49%", y: "82%", s: 2, d: 12, delay: 0.3 },
  { x: "57%", y: "25%", s: 3, d: 9,  delay: 1.4 },
  { x: "66%", y: "64%", s: 2, d: 10, delay: 0.9 },
  { x: "74%", y: "16%", s: 2, d: 8,  delay: 0.1 },
  { x: "82%", y: "42%", s: 3, d: 11, delay: 1.7 },
  { x: "90%", y: "72%", s: 2, d: 9,  delay: 0.6 },
  { x: "76%", y: "88%", s: 3, d: 12, delay: 1.2 },
  { x: "27%", y: "89%", s: 2, d: 10, delay: 0.4 },
  { x: "94%", y: "25%", s: 2, d: 8,  delay: 1.6 },
];

const moods = [
  {
    sun: 0.20,
    diamond: 0.08,
    steps: 0.09,
    flow: 0.10,
    band: 0.07,
    particles: 0.20,
  },
  {
    sun: 0.07,
    diamond: 0.08,
    steps: 0.06,
    flow: 0.20,
    band: 0.06,
    particles: 0.25,
  },
  {
    sun: 0.05,
    diamond: 0.18,
    steps: 0.09,
    flow: 0.08,
    band: 0.07,
    particles: 0.18,
  },
  {
    sun: 0.09,
    diamond: 0.07,
    steps: 0.18,
    flow: 0.08,
    band: 0.15,
    particles: 0.16,
  },
  {
    sun: 0.04,
    diamond: 0.04,
    steps: 0.04,
    flow: 0.05,
    band: 0.04,
    particles: 0.08,
  },
];

export default function InvitationBackground({
  screen,
}: Props) {
  const mood = moods[screen] ?? moods[0];

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const normalizedX =
        event.clientX / window.innerWidth - 0.5;

      const normalizedY =
        event.clientY / window.innerHeight - 0.5;

      pointerX.set(normalizedX);
      pointerY.set(normalizedY);
    };

    window.addEventListener(
      "pointermove",
      handleMove
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handleMove
      );
    };
  }, [pointerX, pointerY]);

  const springX = useSpring(
    pointerX,
    {
      stiffness: 26,
      damping: 18,
      mass: 0.9,
    }
  );

  const springY = useSpring(
    pointerY,
    {
      stiffness: 26,
      damping: 18,
      mass: 0.9,
    }
  );

  const slowX = useTransform(
    springX,
    (value) => value * 12
  );

  const slowY = useTransform(
    springY,
    (value) => value * 12
  );

  const mediumX = useTransform(
    springX,
    (value) => value * 20
  );

  const mediumY = useTransform(
    springY,
    (value) => value * 20
  );

  const strongX = useTransform(
    springX,
    (value) => value * 28
  );

  const strongY = useTransform(
    springY,
    (value) => value * 28
  );

  return (
    <div
      className={`invitation-background screen-${screen}`}
      aria-hidden="true"
    >

      <motion.div
        className="invite-motif invite-sun"
        style={{
          x: slowX,
          y: slowY,
          opacity: mood.sun,
        }}
        animate={{
          rotate: [0, 4, 0, -3, 0],
          scale: [1, 1.025, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 260 260"
          className="invite-svg"
        >
          <g className="invite-ink">
            <motion.circle
              cx="130"
              cy="130"
              r="32"
              fill="none"
              strokeWidth="2.4"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
            />

            <motion.circle
              cx="130"
              cy="130"
              r="58"
              fill="none"
              strokeWidth="1.7"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 0.8,
              }}
              transition={{
                duration: 2.7,
                delay: 0.15,
              }}
            />

            {Array.from({ length: 16 }).map(
              (_, index) => {
                const angle =
                  (index * 22.5 * Math.PI) / 180;

                const x1 =
                  130 + Math.cos(angle) * 74;

                const y1 =
                  130 + Math.sin(angle) * 74;

                const x2 =
                  130 + Math.cos(angle) * 99;

                const y2 =
                  130 + Math.sin(angle) * 99;

                return (
                  <motion.line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 0.8,
                    }}
                    transition={{
                      duration: 1.1,
                      delay:
                        0.25 + index * 0.04,
                    }}
                  />
                );
              }
            )}

            <motion.path
              d="
                M130 100
                L144 114
                L144 130
                L160 130
                L160 144
                L144 144
                L144 160
                L130 160
                L130 144
                L114 144
                L114 130
                L130 130
                Z
              "
              fill="none"
              strokeWidth="2"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: [0.6, 1, 0.6],
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </motion.div>


      <motion.div
        className="invite-motif invite-diamond"
        style={{
          x: mediumX,
          y: mediumY,
          opacity: mood.diamond,
        }}
        animate={{
          y: [0, -7, 0, 5, 0],
          rotate: [
            45,
            46.5,
            45,
            44,
            45,
          ],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 220 220"
          className="invite-svg"
        >
          <g className="invite-ink">
            <motion.path
              d="M110 14 L206 110 L110 206 L14 110 Z"
              fill="none"
              strokeWidth="2"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2.4,
              }}
            />

            <motion.path
              d="M110 43 L177 110 L110 177 L43 110 Z"
              fill="none"
              strokeWidth="1.8"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2.4,
                delay: 0.2,
              }}
            />

            <motion.path
              d="M110 71 L149 110 L110 149 L71 110 Z"
              fill="none"
              strokeWidth="1.6"
              animate={{
                pathLength: [
                  0.65,
                  1,
                  0.65,
                ],
                opacity: [
                  0.55,
                  1,
                  0.55,
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="M110 89 L131 110 L110 131 L89 110 Z"
              fill="none"
              strokeWidth="1.5"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
                delay: 0.45,
              }}
            />
          </g>
        </svg>
      </motion.div>


      <motion.div
        className="invite-motif invite-steps"
        style={{
          x: strongX,
          y: slowY,
          opacity: mood.steps,
        }}
        animate={{
          y: [0, 7, 0, -5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 220 260"
          className="invite-svg"
        >
          <g className="invite-ink">
            <motion.path
              d="
                M18 28
                H62
                V50
                H84
                V72
                H106
                V94
                H128
                V116
                H150
                V138
                H172
                V160
                H202
              "
              fill="none"
              strokeWidth="5"
              strokeLinejoin="miter"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2.4,
              }}
            />

            <motion.path
              d="
                M18 82
                H62
                V104
                H84
                V126
                H106
                V148
                H128
                V170
                H150
                V192
                H172
                V214
                H202
              "
              fill="none"
              strokeWidth="5"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2.5,
                delay: 0.25,
              }}
            />
          </g>
        </svg>
      </motion.div>


      <motion.div
        className="invite-motif invite-flow"
        style={{
          x: slowX,
          y: strongY,
          opacity: mood.flow,
        }}
        animate={{
          rotate: [0, -1.5, 0, 1, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          viewBox="0 0 360 260"
          className="invite-svg"
        >
          <g className="invite-ink">
            <motion.path
              d="
                M20 145
                C62 82 122 205 178 122
                S275 70 338 110
              "
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 3,
              }}
            />

            <motion.path
              d="
                M16 186
                C77 125 139 227 197 153
                S285 120 345 149
              "
              fill="none"
              strokeWidth="1.7"
              strokeLinecap="round"
              animate={{
                pathLength: [
                  0.5,
                  1,
                  0.72,
                ],
                opacity: [
                  0.45,
                  0.95,
                  0.45,
                ],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="
                M61 42
                C86 18 126 25 135 54
                C144 84 117 109 89 102
                C66 96 56 77 62 61
              "
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2.5,
                delay: 0.4,
              }}
            />
          </g>
        </svg>
      </motion.div>


      <motion.div
        className="invite-band"
        style={{
          opacity: mood.band,
        }}
        animate={{
          backgroundPositionX: [
            "0px",
            "160px",
          ],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />


      <div className="invite-particles">
        {particles.map(
          (particle, index) => (
            <motion.span
              key={index}
              className="invite-particle"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.s,
                height: particle.s,
              }}
              animate={{
                x: [0, 3, -2, 0],
                y: [0, -11, -4, 0],
                opacity: [
                  mood.particles * 0.25,
                  mood.particles,
                  mood.particles * 0.35,
                ],
                scale: [
                  0.9,
                  1.2,
                  1,
                ],
              }}
              transition={{
                duration: particle.d,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        )}
      </div>

    </div>
  );
}