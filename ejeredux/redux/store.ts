import { configureStore } from "@reduxjs/toolkit";
import estudiantesReducer from "./slices/estudiantesSlice";

export const store = configureStore({
  reducer: {
    estudiantes: estudiantesReducer,
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;