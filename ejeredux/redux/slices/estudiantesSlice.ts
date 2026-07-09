import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Estudiante } from "@/types/estudiante";

interface EstudiantesState {
  estudiantes: Estudiante[];
}

const initialState: EstudiantesState = {
  estudiantes: [],
};

const estudiantesSlice = createSlice({
  name: "estudiantes",

  initialState,

  reducers: {
    agregarEstudiante: (state, action: PayloadAction<Estudiante>) => {
      state.estudiantes.push(action.payload);
    },

    eliminarEstudiante: (state, action: PayloadAction<number>) => {
      state.estudiantes = state.estudiantes.filter(
        (estudiante) => estudiante.id !== action.payload
      );
    },

    editarEstudiante: (state, action: PayloadAction<Estudiante>) => {
      const index = state.estudiantes.findIndex(
        (estudiante) => estudiante.id === action.payload.id
      );

      if (index !== -1) {
        state.estudiantes[index] = action.payload;
      }
    },

    limpiarEstudiantes: (state) => {
      state.estudiantes = [];
    },
  },
});

export const {
  agregarEstudiante,
  eliminarEstudiante,
  editarEstudiante,
  limpiarEstudiantes,
} = estudiantesSlice.actions;

export default estudiantesSlice.reducer;