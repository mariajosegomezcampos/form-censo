import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ personas, setPersonas, persona, setPersona }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [cedula, setCedula] = useState("");
  const [fecha, setFecha] = useState("");
  const [discapacidad, setDiscapacidad] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(persona).length > 0) {
      setNombre(persona.nombre);
      setApellido(persona.apellido);
      setEmail(persona.email);
      setCedula(persona.cedula);
      setFecha(persona.fecha);
      setDiscapacidad(persona.discapacidad);
    }
  }, [persona]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, apellido, email, cedula, fecha, discapacidad].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      setError(true);
      return;
    }

    setError(false);

    // Objeto de Persona
    const objetoPersona = {
      nombre,
      apellido,
      cedula,
      email,
      fecha,
      discapacidad,
    };

    if(persona.id) {
      // Editando el Registro
      objetoPersona.id = persona.id
      const personasActualizados = personas.map( personaState => personaState.id === persona.id ? objetoPersona : personaState )

      setPersonas(personasActualizados)
      setPersona({})

  } else {
      // Nuevo registro
      objetoPersona.id = generarId();
      setPersonas([...personas, objetoPersona]);
  }

    // Reiniciar el form
    setNombre("");
    setApellido("");
    setCedula("");
    setEmail("");
    setFecha("");
    setDiscapacidad("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Ingrese sus Datos</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade los Datos y {""} 
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Ingresa el Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="apellido"
            className="block text-gray-700 uppercase font-bold"
          >
            Apellido
          </label>
          <input
            id="apellido"
            type="text"
            placeholder="Ingresa el Apellido"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto "
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cedula"
            className="block text-gray-700 uppercase font-bold"
          >
            Cedula
          </label>
          <input
            id="cedula"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="Fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Nac
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discapacidad"
            className="block text-gray-700 uppercase font-bold"
          >
            Padece alguna discapacidad? Cual ?
          </label>
          <textarea
            id="discapacidad"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe la discapacidad"
            value={discapacidad}
            onChange={(e) => setDiscapacidad(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={persona.id ? "Editar Persona" : "Agregar Persona"}
        />
      </form>
    </div>
  );
};

export default Formulario;
