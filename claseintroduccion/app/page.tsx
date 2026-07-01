"use client";

import { useState } from "react";

interface Persona {
  id: number;
  nombre: string;
  carrera: string;
  genero: string;
}

export default function Home() {
  // Arreglo donde se guardarán todas las personas
  const [personas, setPersonas] = useState<Persona[]>([]);

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [genero, setGenero] = useState("M");

  function agregarPersona() {
    if (nombre.trim() === "" || carrera === "") {
      alert("Complete todos los campos");
      return;
    }

    const nuevaPersona: Persona = {
      id: Date.now(),
      nombre,
      carrera,
      genero,
    };

    setPersonas([...personas, nuevaPersona]);

    // Limpiar formulario
    setNombre("");
    setCarrera("");
    setGenero("M");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        Registro de Personas
      </h1>

      {/* FORMULARIO */}

      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">

        <div className="mb-4">
          <label className="font-semibold">Nombre</label>

          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold">Carrera</label>

          <select
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            className="w-full border rounded p-2 mt-1"
          >
            <option value="">Seleccione...</option>
            <option>Ingeniería en Sistemas</option>
            <option>Ingeniería Industrial</option>
            <option>Licenciatura en Administración</option>
            <option>Licenciatura en Turismo</option>
            <option>Arquitectura</option>
            <option>Diseño Gráfico</option>
        </select>
        </div>

      <div className="mb-4">
        <label className="font-semibold block mb-2">Género</label>

        <div className="flex gap-6">

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="genero"
              value="M"
              checked={genero === "M"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Hombre
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="genero"
              value="F"
              checked={genero === "F"}
              onChange={(e) => setGenero(e.target.value)}
            />
            Mujer
          </label>

        </div>
      </div>

        <button
          onClick={agregarPersona}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded w-full"
        >
          Agregar Persona
        </button>

      </div>

      {/* TARJETAS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {personas.map((persona) => (

          <div
            key={persona.id}
            className="bg-white rounded-lg shadow-lg p-5 text-center"
          >

            <img
              src={
                persona.genero === "M"
                  ? "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  : "https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
              }
              className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
              alt="Avatar"
            />

            <h2 className="text-2xl font-bold mt-4">
              {persona.nombre}
            </h2>

            <p className="text-gray-600 mt-2">
              {persona.carrera}
            </p>

            <p className="mt-3">
              {persona.genero === "M"
                ? "👨 Hombre"
                : "👩 Mujer"}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}