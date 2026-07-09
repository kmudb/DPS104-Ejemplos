"use client";

import { useAppSelector } from "@/redux/hooks";
import EstudianteFila from "./EstudianteFila";

export default function TablaEstudiantes() {

  const estudiantes = useAppSelector(
    (state) => state.estudiantes.estudiantes
  );

  return (

    <div className="tabla">

      <h2>Listado de Estudiantes</h2>

      <table>

        <thead>

          <tr>
            <th>Nombre</th>
            <th>P1</th>
            <th>P2</th>
            <th>Laboratorio</th>
            <th>Promedio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          {
            estudiantes.length === 0 ?

              (
                <tr>

                  <td colSpan={7}>
                    No existen estudiantes registrados.
                  </td>

                </tr>

              )

              :

              (

                estudiantes.map((estudiante) => (

                  <EstudianteFila
                    key={estudiante.id}
                    estudiante={estudiante}
                  />

                ))

              )

          }

        </tbody>

      </table>

    </div>

  );

}