import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPersonas from "./components/ListadoPersonas";
function App() {
  const [personas, setPersonas] = useState([]);
  const [persona, setPersona] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const personasLS = JSON.parse(localStorage.getItem('personas')) ?? [];
      setPersonas(personasLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('personas', JSON.stringify( personas ));
  }, [personas])

  const eliminarPersona = id => {
    const personasActualizados = personas.filter( persona => persona.id !== id);
    setPersonas(personasActualizados)
  }
  return (
    <div className="theme-ligh container mx-auto mt-20 font-serif">
    <Header />

    <div className="mt-12 md:flex">
        <Formulario
          personas={personas}
          setPersonas={setPersonas}
          persona={persona}
          setPersona={setPersona}
        />
        <ListadoPersonas
         personas={personas}
         setPersona={setPersona}
         eliminarPersona={eliminarPersona}
        />
    </div>
    </div>
  );
}

export default App;
