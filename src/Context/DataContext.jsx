/* eslint-disable react/prop-types */
// src/contexts/DataContext.js
import { createContext, useState, useEffect } from "react";
import dataJson from "../components/utils/resumeData.json";

// Crear el contexto
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cargar los datos desde el archivo JSON
    setData(dataJson);
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
