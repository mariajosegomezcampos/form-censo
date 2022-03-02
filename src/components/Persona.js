

const Persona = ({persona, setPersona, eliminarPersona}) => {
  const { nombre, apellido, email, cedula, fecha, discapacidad, id } = persona

  const handleEliminar = () => {
    const respuesta = window.confirm('Deseas eliminar esta persona?');

    if(respuesta) {
        eliminarPersona(id)
    }
}
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Apellido: {''}
        <span className="font-normal normal-case">{apellido}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">cedula: {''}
        <span className="font-normal normal-case">{cedula}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Nac: {''}
        <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Discapacidad: {''}
        <span className="font-normal normal-case">{discapacidad}</span>
    </p>

    <div className="flex justify-between mt-10">
        <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPersona(persona)}
        >Editar</button>

        <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
        >Eliminar</button>
    </div>
</div>
  )
}

export default Persona