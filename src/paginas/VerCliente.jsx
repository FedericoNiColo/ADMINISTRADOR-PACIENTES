import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'

const VerCliente = () => {

    const { id } = useParams()

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const obtenerClienteAPI = async () => {

            try {

                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setCliente(resultado)
                console.log('adsdsad', cliente);

            } catch (error) {
                console.log(error);
            }

            setTimeout(() => {
                setCargando(false)
            }, 700);
        }

        obtenerClienteAPI()
    }, [])

    return (

        cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (

            <>
                <h1 className="font-black text-4xl text-blue-900">Ver Cliente: {cliente.nombre}</h1>
                <p className="mt-1">Información del cliente</p>

                <p className='text-3xl text-gray-500 mt-10'><span className=' text-gray-800 uppercase font-bold'>Nombre: </span>{cliente.nombre}</p>
                <p className='text-2xl text-gray-500 mt-4'><span className=' text-gray-800 uppercase font-bold'>Empresa: </span>{cliente.empresa}</p>
                <p className='text-2xl text-gray-500 mt-4'><span className=' text-gray-800 uppercase font-bold'>Email: </span>{cliente.email}</p>
                {cliente.telefono && (
                    <p className='text-2xl text-gray-500 mt-4'><span className=' text-gray-800 uppercase font-bold'>Telefono: </span>{cliente.telefono}</p>
                )}
                {cliente.notas && (
                    <p className='text-2xl text-gray-500 mt-4'><span className=' text-gray-800 uppercase font-bold'>Notas: </span>{cliente.notas}</p>
                )}

            </>
        )
    )
}

export default VerCliente
