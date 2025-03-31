// Crea un componente llamado `InputCreate.jsx` donde crearás un `input` y un `botón`
// - La funcionalidad será que al insertar la tarea en el input y darle al botón enviar se añadirá a nuestra BBDD y por tanto desde la ruta `"/"` podremos ver todos las tareas anteriores junto con las que añadamos desde React
// - Una vez creado el módulo lo importaremos a `App.jsx` y le añadiremos a la ruta `/create`

import { useState } from "react"
import styles from './InputCreate.module.css'

const InputCreate = () => {
    const [payload, setPayload] = useState({
        title: ''
    })

    const setTaskFunction = (e) => {
        setPayload({
         title: e.target.value})
     }

    const handleSubmit = () => {
        
        let urlApi = 'http://localhost:3000/create'
       fetch(urlApi,
            {
                method: 'POST', // Método HTTP
                headers: {
                    'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
            })
            
    }
 
    return (
        <form action="/create" className={styles.input} >
            <input type="text" placeholder="Escribe una tarea" name='task'onChange={setTaskFunction}/>
            <button type="submit" onClick={handleSubmit}>Guardar</button>
        </form>
    )
}

export default InputCreate;