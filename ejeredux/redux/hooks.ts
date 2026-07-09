"use client";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Hook para enviar acciones al Store
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook para obtener información del Store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;