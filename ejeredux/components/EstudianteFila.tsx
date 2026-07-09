"use client";

import { Estudiante } from "@/types/estudiante";
import { useAppDispatch } from "@/redux/hooks";
import { eliminarEstudiante } from "@/redux/slices/estudiantesSlice";

interface Props {
  estudiante: Estudiante;
}

export default function EstudianteFila({ estudiante }: Props) {

  const dispatch = useAppDispatch();

  const eliminar = () => {

    const respuesta = confirm(
      `¿Desea eliminar a ${estudiante.nombre}?`
    );

    if (respuesta) {
      dispatch(
        eliminarEstudiante(estudiante.id)
      );
    }

  };

  return (

    <tr>

      <td>{estudiante.nombre}</td>

      <td>{estudiante.parcial1}</td>

      <td>{estudiante.parcial2}</td>

      <td>{estudiante.laboratorio}</td>

      <td>{estudiante.promedio.toFixed(2)}</td>

      <td>

        {
          estudiante.aprobado ?

            <span className="aprobado">
              Aprobado
            </span>

            :

            <span className="reprobado">
              Reprobado
            </span>
        }

      </td>

      <td>

        <button
          className="btnEliminar"
          onClick={eliminar}
        >
          Eliminar
        </button>

      </td>

    </tr>

  );

}