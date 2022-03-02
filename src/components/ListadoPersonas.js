import Persona from "./Persona"

const ListadoPersonas = ({personas, setPersona, eliminarPersona}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

    {personas && personas.length ? (
        <>
            <h2 className="font-black text-3xl text-center">Listado Personas</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold ">datos</span>
            </p>

            { personas.map( persona => (
                <Persona 
                    key={persona.id}
                    persona={persona}
                    setPersona={setPersona}
                    eliminarPersona={eliminarPersona}
                />
            ))}
        </>

    ) : (
        <>
            <h2 className="font-black text-3xl text-center">No hay datos</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando datos {''}
                <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
            </p>
        </>
    )}
</div>
  )
}

export default ListadoPersonas