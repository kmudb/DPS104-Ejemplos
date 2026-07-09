"use client";

import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function Buscador() {

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const estudiantes = useAppSelector(
    (state) => state.estudiantes.estudiantes
  );

  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
    estudiante.nombre
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase())
  );

  return (
    <div className="buscador">

      <h2>Buscar Estudiante</h2>

      <input
        type="text"
        placeholder="Escriba un nombre..."
        value={textoBusqueda}
        onChange={(e) => setTextoBusqueda(e.target.value)}
      />

      <p>
        Resultados encontrados: {estudiantesFiltrados.length}
      </p>

      <ul>
        {estudiantesFiltrados.map((estudiante) => (
          <li key={estudiante.id}>
            {estudiante.nombre} - Promedio: {estudiante.promedio.toFixed(2)}
          </li>
        ))}
      </ul>

    </div>
  );
}