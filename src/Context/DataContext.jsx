/* eslint-disable react/prop-types */
// src/contexts/DataContext.js
import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cargar los datos desde el archivo JSON
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error cargando los datos:", error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
