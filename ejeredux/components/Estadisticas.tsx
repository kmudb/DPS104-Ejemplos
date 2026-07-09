"use client";

import { useAppSelector } from "@/redux/hooks";

export default function Estadisticas() {

  const estudiantes = useAppSelector(
    (state) => state.estudiantes.estudiantes
  );

  const totalEstudiantes = estudiantes.length;

  const aprobados = estudiantes.filter(
    (estudiante) => estudiante.aprobado
  ).length;

  const reprobados = totalEstudiantes - aprobados;

  const promedioGeneral =
    totalEstudiantes === 0
      ? 0
      : estudiantes.reduce(
          (acumulador, estudiante) =>
            acumulador + estudiante.promedio,
          0
        ) / totalEstudiantes;

  return (

    <div className="estadisticas">

      <h2>Estadísticas</h2>

      <div className="cards">

        <div className="card">
          <h3>Total de Estudiantes</h3>
          <p>{totalEstudiantes}</p>
        </div>

        <div className="card">
          <h3>Aprobados</h3>
          <p>{aprobados}</p>
        </div>

        <div className="card">
          <h3>Reprobados</h3>
          <p>{reprobados}</p>
        </div>

        <div className="card">
          <h3>Promedio General</h3>
          <p>{promedioGeneral.toFixed(2)}</p>
        </div>

      </div>

    </div>

  );

}