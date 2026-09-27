"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Respuesta = "si" | "duda" | "no" | null;

const TOTAL_PANTALLAS = 5;

export default function Home() {
  const [pantalla, setPantalla] = useState(0);

  const siguiente = () => {
    setPantalla((actual) =>
      actual < TOTAL_PANTALLAS - 1 ? actual + 1 : actual
    );
  };

  const anterior = () => {
    setPantalla((actual) => (actual > 0 ? actual - 1 : actual));
  };

  useEffect(() => {
    const teclado = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setPantalla((actual) =>
          actual < TOTAL_PANTALLAS - 1 ? actual + 1 : actual
        );
      }

      if (event.key === "ArrowLeft") {
        setPantalla((actual) =>
          actual > 0 ? actual - 1 : actual
        );
      }
    };

    window.addEventListener("keydown", teclado);

    return () => window.removeEventListener("keydown", teclado);
  }, []);

  return (
    <main className="experiencia">
      <BackgroundMotifs />
      <AnimatePresence mode="wait">
        <motion.section
          key={pantalla}
          className="pantalla"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -70 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {pantalla === 0 && (
            <PantallaInicio siguiente={siguiente} />
          )}

          {pantalla === 1 && (
            <PantallaGuardaFecha siguiente={siguiente} />
          )}

          {pantalla === 2 && (
            <PantallaFecha siguiente={siguiente} />
          )}

          {pantalla === 3 && (
            <PantallaCivil siguiente={siguiente} />
          )}

          {pantalla === 4 && <PantallaRespuesta />}
        </motion.section>
      </AnimatePresence>

      <Indicador pantalla={pantalla} total={TOTAL_PANTALLAS} />

      {pantalla > 0 && pantalla < TOTAL_PANTALLAS - 1 && (
        <button
          className="volver"
          onClick={anterior}
          aria-label="Volver"
        >
          &#8249;
        </button>
      )}
    </main>
  );
}

function PantallaInicio({
  siguiente,
}: {
  siguiente: () => void;
}) {
  return (
    <div
      className="contenido portada"
      onClick={siguiente}
    >
      <motion.div
        className="texto-central portada-texto"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="nombres">
          <span>{"Hern\u00E1n"}</span>
          <span className="y">y</span>
          <span>Dana</span>
        </h1>

        <div className="linea-portada" />

        <p className="fecha-principal">
          4 de diciembre 2026
        </p>
      </motion.div>

      <Continuar />
    </div>
  );
}

function PantallaGuardaFecha({
  siguiente,
}: {
  siguiente: () => void;
}) {
  return (
    <div
      className="contenido"
      onClick={siguiente}
    >
      <motion.div
        className="frase-grande"
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
        <span>{"guard\u00E1"}</span>
        <strong>la fecha</strong>
      </motion.div>

      <Continuar />
    </div>
  );
}

function PantallaFecha({
  siguiente,
}: {
  siguiente: () => void;
}) {
  return (
    <div
      className="contenido"
      onClick={siguiente}
    >
      <motion.div
        className="fecha-gigante"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <p>04</p>

        <span>DICIEMBRE</span>

        <p>2026</p>
      </motion.div>

      <Continuar />
    </div>
  );
}

function PantallaCivil({
  siguiente,
}: {
  siguiente: () => void;
}) {
  return (
    <div
      className="contenido"
      onClick={siguiente}
    >
      <motion.div
        className="civil"
        initial={{
          opacity: 0,
          y: 25,
          rotate: -1,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h2>Civil</h2>

        <div className="datos">
          <p>4 / 12 / 2026</p>
          <strong>13 hs</strong>
        </div>
      </motion.div>

      <Continuar texto="una ultima cosa" />
    </div>
  );
}

function PantallaRespuesta() {
  const [nombre, setNombre] = useState("");
  const [respuesta, setRespuesta] =
    useState<Respuesta>(null);
  const [enviado, setEnviado] = useState(false);

  const enviarRespuesta = () => {
    if (!nombre.trim() || !respuesta) {
      return;
    }

    localStorage.setItem(
      "respuesta-casamiento",
      JSON.stringify({
        nombre: nombre.trim(),
        respuesta,
        fecha: new Date().toISOString(),
      })
    );

    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="contenido gracias">
        <motion.div
          className="gracias-card"
          initial={{
            opacity: 0,
            scale: 0.82,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <div className="corazon-css" />

          <h2>
            {"\u00A1Gracias!"}
          </h2>

          <p>
            Ya tenemos tu respuesta.
          </p>

          <div className="firma-final">
            {"Hern\u00E1n y Dana"}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="contenido respuesta nueva-respuesta">
      <motion.div
        className="respuesta-contenido"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <p className="pregunta-mini">
          UNA ULTIMA COSA...
        </p>

        <h2 className="venis">
          {"\u00BFVen\u00EDs?"}
        </h2>

        <p className="subtitulo-rsvp">
          Queremos saber si vas a acompa\u00F1arnos.
        </p>

        <div className="nombre-box">
          <span>Tu nombre</span>

          <input
            type="text"
            placeholder="Nombre y apellido"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
          />
        </div>

        <div className="eleccion-rsvp">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className={`respuesta-card si ${
              respuesta === "si" ? "activa" : ""
            }`}
            onClick={() => setRespuesta("si")}
          >
            <div className="respuesta-icono">
              SI
            </div>

            <div className="respuesta-texto">
              <strong>
                {"S\u00ED, voy"}
              </strong>

              <span>
                {"\u00A1Nos vemos ah\u00ED!"}
              </span>
            </div>

            <div className="check">
              {respuesta === "si" ? "OK" : ""}
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className={`respuesta-card duda ${
              respuesta === "duda" ? "activa" : ""
            }`}
            onClick={() => setRespuesta("duda")}
          >
            <div className="respuesta-icono">
              ?
            </div>

            <div className="respuesta-texto">
              <strong>
                {"Todav\u00EDa no s\u00E9"}
              </strong>

              <span>
                
                Te confirmo pronto
              </span>
            </div>

            <div className="check">
              {respuesta === "duda" ? "OK" : ""}
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className={`respuesta-card no ${
              respuesta === "no" ? "activa" : ""
            }`}
            onClick={() => setRespuesta("no")}
          >
            <div className="respuesta-icono">
              NO
            </div>

            <div className="respuesta-texto">
              <strong>
                No voy a poder
              </strong>

              <span>
                {"Pero los acompa\u00F1o de coraz\u00F3n"}
              </span>
            </div>

            <div className="check">
              {respuesta === "no" ? "OK" : ""}
            </div>
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          className="confirmar-rsvp"
          disabled={
            !nombre.trim() || !respuesta
          }
          onClick={enviarRespuesta}
        >
          <span>
            Confirmar mi respuesta
          </span>

          <span className="flecha-boton">
            &#8250;
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

function Continuar({
  texto = "toca para continuar",
}: {
  texto?: string;
}) {
  return (
    <div className="continuar">
      <span>{texto}</span>
      <i className="flecha-abajo" />
    </div>
  );
}

function Indicador({
  pantalla,
  total,
}: {
  pantalla: number;
  total: number;
}) {
  return (
    <div className="indicador">
      {Array.from({
        length: total,
      }).map((_, index) => (
        <span
          key={index}
          className={
            index === pantalla
              ? "activo"
              : ""
          }
        />
      ))}
    </div>
  );
}


function BackgroundMotifs() {
  return (
    <div className="bg-motifs" aria-hidden="true">
      <div className="motif motif-sun" />
      <div className="motif motif-step motif-step-1" />
      <div className="motif motif-step motif-step-2" />
      <div className="motif motif-diamond" />
      <div className="motif motif-flow motif-flow-1" />
      <div className="motif motif-flow motif-flow-2" />
      <div className="motif motif-band" />
    </div>
  );
}
