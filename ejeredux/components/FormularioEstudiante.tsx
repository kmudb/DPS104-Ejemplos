"use client";

import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { agregarEstudiante } from "@/redux/slices/estudiantesSlice";
import { Estudiante } from "@/types/estudiante";

export default function FormularioEstudiante() {

  const dispatch = useAppDispatch();

  const [nombre, setNombre] = useState("");
  const [parcial1, setParcial1] = useState(0);
  const [parcial2, setParcial2] = useState(0);
  const [laboratorio, setLaboratorio] = useState(0);

  const guardarEstudiante = () => {

    if (nombre.trim() === "") {
      alert("Ingrese el nombre del estudiante");
      return;
    }

    const promedio =
      (parcial1 + parcial2 + laboratorio) / 3;

    const nuevoEstudiante: Estudiante = {

      id: Date.now(),

      nombre,

      parcial1,

      parcial2,

      laboratorio,

      promedio,

      aprobado: promedio >= 6

    };

    dispatch(
      agregarEstudiante(nuevoEstudiante)
    );

    setNombre("");
    setParcial1(0);
    setParcial2(0);
    setLaboratorio(0);

  };

  return (

    <div className="formulario">

      <h2>Registro de Estudiantes</h2>

      <input
        type="text"
        placeholder="Nombre del estudiante"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Parcial 1"
        value={parcial1}
        onChange={(e) =>
          setParcial1(Number(e.target.value))
        }
      />

      <input
        type="number"
        placeholder="Parcial 2"
        value={parcial2}
        onChange={(e) =>
          setParcial2(Number(e.target.value))
        }
      />

      <input
        type="number"
        placeholder="Laboratorio"
        value={laboratorio}
        onChange={(e) =>
          setLaboratorio(Number(e.target.value))
        }
      />

      <button
        onClick={guardarEstudiante}
      >
        Agregar Estudiante
      </button>

    </div>

  );

}