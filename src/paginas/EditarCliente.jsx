import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Formulario from '../components/Formulario'

const EditarCliente = () => {

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
        console.log('editar', cliente);

      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCargando(false)
      }, 800);
    }

    obtenerClienteAPI()
  }, [])

  return (

    cliente.nombre ? (

      <>
        <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
        <p className="mt-1">Utilice este formulario para editar datos de un cliente</p>

        <Formulario cliente={cliente} cargando={cargando} />
      </>
    ) : <h3>Cliente no válido</h3>
  )
}

export default EditarCliente
