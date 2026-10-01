"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useState,
} from "react";

type Answer =
  | "yes"
  | "maybe"
  | "no"
  | null;

const TOTAL_SCREENS = 6;

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Calle+213+2370+Olavarria+Buenos+Aires";

export default function Home() {
  const [screen, setScreen] = useState(0);

  const next = () => {
    setScreen((current) =>
      current < TOTAL_SCREENS - 1
        ? current + 1
        : current
    );
  };

  const previous = () => {
    setScreen((current) =>
      current > 0
        ? current - 1
        : current
    );
  };

  return (
    <main className="wedding-app">
      <AnimatePresence mode="wait">
        <motion.section
          key={screen}
          className="wedding-screen"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -16,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <DoodleBackground screen={screen} />

          {screen === 0 && (
            <CoverScreen next={next} />
          )}

          {screen === 1 && (
            <AnnouncementScreen next={next} />
          )}

          {screen === 2 && (
            <DateScreen next={next} />
          )}

          {screen === 3 && (
            <CelebrationScreen next={next} />
          )}

          {screen === 4 && (
            <RsvpScreen next={next} />
          )}

          {screen === 5 && (
            <FinalScreen />
          )}

          {screen > 0 && screen < 5 && (
            <button
              type="button"
              className="back-button"
              onClick={previous}
              aria-label="Back"
            >
              {"<"}
            </button>
          )}
        </motion.section>
      </AnimatePresence>
    </main>
  );
}


/* ==========================================================
   SCREEN 1
   ========================================================== */

function CoverScreen({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="screen-content cover-screen">
      <motion.div
        className="cover-center"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        <p className="names">
          {"DANA & HERN\u00C1N"}
        </p>

        <motion.div
          className="hand-line"
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        />
      </motion.div>

      <motion.button
        type="button"
        className="enter-button"
        onClick={next}
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"Toc\u00E1 para entrar \u2192"}
      </motion.button>
    </div>
  );
}


/* ==========================================================
   SCREEN 2
   ========================================================== */

function AnnouncementScreen({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="screen-content announcement-screen">
      <motion.div
        className="announcement-card"
        initial={{
          opacity: 0,
          rotate: -1.5,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <h1>
          {"\u00A1Nos casamos! \u2764\uFE0F"}
        </h1>

        <p>
          {
            "Gu\u00E1rdate esta fechita y te esperamos para celebrar con nosotros"
          }
        </p>
      </motion.div>

      <NextButton next={next} />
    </div>
  );
}


/* ==========================================================
   SCREEN 3
   ========================================================== */

function DateScreen({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="screen-content date-screen">
      <motion.div
        className="big-date"
        initial={{
          opacity: 0,
          scale: 0.88,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.span
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          04
        </motion.span>

        <i />

        <motion.span
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
          }}
        >
          12
        </motion.span>

        <i />

        <motion.span
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          2026
        </motion.span>
      </motion.div>

      <NextButton next={next} />
    </div>
  );
}


/* ==========================================================
   SCREEN 4
   ========================================================== */

function CelebrationScreen({
  next,
}: {
  next: () => void;
}) {
  return (
    <div className="screen-content celebration-screen">
      <motion.div
        className="schedule"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <div className="schedule-block">
          <span className="schedule-time">
            13hs
          </span>

          <span className="schedule-label">
            Civil
          </span>
        </div>

        <div className="schedule-divider" />

        <div className="schedule-block">
          <span className="schedule-time">
            16hs
          </span>

          <span className="schedule-label">
            {
              "A partir de las 16hs celebramos en la quinta"
            }
          </span>
        </div>

        <a
          className="map-button"
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <PinIcon />

          <span>
            {
              "Calle 213 2370 \u00B7 Abrir ubicaci\u00F3n"
            }
          </span>

          <b>
            {"\u2192"}
          </b>
        </a>

        <div className="party-icons">
          <FloatingIcon delay={0}>
            <CakeIcon />
          </FloatingIcon>

          <FloatingIcon delay={0.2}>
            <MateIcon />
          </FloatingIcon>

          <FloatingIcon delay={0.4}>
            <SwimsuitIcon />
          </FloatingIcon>

          <FloatingIcon delay={0.6}>
            <MusicIcon />
          </FloatingIcon>

          <FloatingIcon delay={0.8}>
            <HeartIcon />
          </FloatingIcon>
        </div>
      </motion.div>

      <NextButton next={next} />
    </div>
  );
}


/* ==========================================================
   SCREEN 5
   ========================================================== */

function RsvpScreen({
  next,
}: {
  next: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [answer, setAnswer] =
    useState<Answer>(null);

  const confirm = () => {
    if (!name.trim() || !answer) {
      return;
    }

    localStorage.setItem(
      "wedding-rsvp",
      JSON.stringify({
        name: name.trim(),
        answer,
        date:
          new Date().toISOString(),
      })
    );

    next();
  };

  return (
    <div className="screen-content rsvp-screen">
      <motion.div
        className="rsvp-content"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <h1>
          {"\u00BFVEN\u00CDS?"}
        </h1>

        {!open && (
          <motion.button
            type="button"
            className="main-rsvp-button"
            onClick={() => setOpen(true)}
            whileTap={{
              scale: 0.97,
            }}
          >
            {
              "CONFIRMAR ASISTENCIA \u2192"
            }
          </motion.button>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              className="rsvp-form"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <label>
                Tu nombre

                <input
                  type="text"
                  placeholder="Nombre y apellido"
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                />
              </label>

              <div className="rsvp-options">
                <RsvpOption
                  active={
                    answer === "yes"
                  }
                  onClick={() =>
                    setAnswer("yes")
                  }
                >
                  {
                    "S\u00ED, VOY"
                  }
                </RsvpOption>

                <RsvpOption
                  active={
                    answer === "maybe"
                  }
                  onClick={() =>
                    setAnswer("maybe")
                  }
                >
                  {
                    "TODAV\u00CDA NO S\u00C9"
                  }
                </RsvpOption>

                <RsvpOption
                  active={
                    answer === "no"
                  }
                  onClick={() =>
                    setAnswer("no")
                  }
                >
                  NO VOY A PODER
                </RsvpOption>
              </div>

              <button
                type="button"
                className="send-rsvp"
                disabled={
                  !name.trim() ||
                  !answer
                }
                onClick={confirm}
              >
                {
                  "ENVIAR RESPUESTA \u2192"
                }
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


/* ==========================================================
   SCREEN 6
   ========================================================== */

function FinalScreen() {
  return (
    <div className="screen-content final-screen">
      <motion.div
        className="final-content"
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
        }}
      >
        <p className="names">
          {"DANA & HERN\u00C1N"}
        </p>

        <motion.div
          className="final-heart"
          animate={{
            scale: [
              1,
              1.08,
              1,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"\u2764\uFE0F"}
        </motion.div>

        <p className="final-message">
          {
            "Nos vemos el 4 de diciembre \u2764\uFE0F"
          }
        </p>
      </motion.div>
    </div>
  );
}


/* ==========================================================
   BUTTONS
   ========================================================== */

function NextButton({
  next,
}: {
  next: () => void;
}) {
  return (
    <motion.button
      type="button"
      className="next-button"
      onClick={next}
      animate={{
        x: [0, 4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {"\u2192"}
    </motion.button>
  );
}

function RsvpOption({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      className={
        active
          ? "rsvp-option active"
          : "rsvp-option"
      }
      onClick={onClick}
      whileTap={{
        scale: 0.97,
      }}
    >
      <span className="option-circle">
        {active ? "OK" : ""}
      </span>

      <span>
        {children}
      </span>
    </motion.button>
  );
}


/* ==========================================================
   DOODLE BACKGROUND
   ========================================================== */

function DoodleBackground({
  screen,
}: {
  screen: number;
}) {
  return (
    <div
      className={`doodle-background doodle-screen-${screen}`}
      aria-hidden="true"
    >
      <motion.div
        className="doodle doodle-one"
        animate={{
          y: [
            0,
            -10,
            0,
          ],
          rotate: [
            -7,
            -3,
            -7,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeartIcon />
      </motion.div>

      <motion.div
        className="doodle doodle-two"
        animate={{
          y: [
            0,
            8,
            0,
          ],
          rotate: [
            4,
            8,
            4,
          ],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MusicIcon />
      </motion.div>

      <motion.div
        className="doodle doodle-three"
        animate={{
          y: [
            0,
            -6,
            0,
          ],
          rotate: [
            7,
            2,
            7,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CakeIcon />
      </motion.div>

      <div className="ink-particles">
        {Array.from({
          length: 12,
        }).map((_, index) => (
          <motion.i
            key={index}
            style={{
              left:
                `${7 + ((index * 17) % 86)}%`,
              top:
                `${9 + ((index * 23) % 82)}%`,
            }}
            animate={{
              y: [
                0,
                -8,
                0,
              ],
              opacity: [
                0.08,
                0.22,
                0.08,
              ],
            }}
            transition={{
              duration:
                6 + (index % 5),
              delay:
                index * 0.17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}


/* ==========================================================
   ICON WRAPPER
   ========================================================== */

function FloatingIcon({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="party-icon"
      animate={{
        y: [
          0,
          -6,
          0,
        ],
        rotate: [
          0,
          2,
          0,
          -2,
          0,
        ],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}


/* ==========================================================
   LINE ICONS
   ========================================================== */

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="line-icon"
    >
      <path
        d="M32 52 C25 45 11 35 11 23 C11 15 17 11 23 11 C28 11 31 14 32 18 C34 14 37 11 42 11 C49 11 54 16 54 23 C54 35 40 45 32 52 Z"
      />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="line-icon"
    >
      <path
        d="M25 44 V15 L48 10 V38"
      />

      <path
        d="M25 24 L48 19"
      />

      <ellipse
        cx="18"
        cy="46"
        rx="7"
        ry="5"
      />

      <ellipse
        cx="41"
        cy="40"
        rx="7"
        ry="5"
      />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="line-icon"
    >
      <path
        d="M15 31 H49 V51 H15 Z"
      />

      <path
        d="M20 21 H44 V31 H20 Z"
      />

      <path
        d="M26 13 H38 V21 H26 Z"
      />

      <path
        d="M32 6 V13"
      />

      <path
        d="M29 8 Q32 3 35 8"
      />

      <path
        d="M15 38 Q20 43 25 38 Q30 43 35 38 Q40 43 49 38"
      />
    </svg>
  );
}

function MateIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="line-icon"
    >
      <path
        d="M16 26 Q32 19 48 26 L44 48 Q32 56 20 48 Z"
      />

      <path
        d="M40 25 L49 8"
      />

      <path
        d="M46 8 H52"
      />

      <path
        d="M22 31 Q32 27 42 31"
      />
    </svg>
  );
}

function SwimsuitIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="line-icon"
    >
      <path
        d="M20 11 Q26 21 26 28 L20 51 Q32 58 44 51 L38 28 Q38 21 44 11"
      />

      <path
        d="M20 11 Q25 16 32 16 Q39 16 44 11"
      />

      <path
        d="M26 28 Q32 32 38 28"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="pin-icon"
    >
      <path
        d="M32 55 C25 45 16 36 16 26 C16 17 23 10 32 10 C41 10 48 17 48 26 C48 36 39 45 32 55 Z"
      />

      <circle
        cx="32"
        cy="26"
        r="6"
      />
    </svg>
  );
}