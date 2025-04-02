// Crea un componente llamado `InputCreate.jsx` donde crearás un `input` y un `botón`
// - La funcionalidad será que al insertar la tarea en el input y darle al botón enviar se añadirá a nuestra BBDD y por tanto desde la ruta `"/"` podremos ver todos las tareas anteriores junto con las que añadamos desde React
// - Una vez creado el módulo lo importaremos a `App.jsx` y le añadiremos a la ruta `/create`

import { useState } from "react"
import styles from './InputCreate.module.css'

const InputCreate = () => {
    const [title, setTitle] = useState('')
    const payload = {title}
    const [createdTask, setCreatedTask] = useState('');

    const setTaskFunction = (e) => {
        setTitle(e.target.value
            
        )
     }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let urlApi = import.meta.env.VITE_URL_API + '/create'

        try {
            const response = await fetch(urlApi,
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
                })

                if(!response.ok) throw new Error (`The task couldn't be created`);

                const data =  await response.json();
                setCreatedTask(`Ok, the task has been created: '${payload.title}'`)
                setTitle('')
                console.log(createdTask)
        } catch (error) {
            console.error(error)
        }
            
    }
 
    return (
        <div>
            <form action="/create" className={styles.input} >
                <input 
                    type="text" 
                    placeholder="Escribe una tarea" 
                    name='task'
                    value={title}
                    onChange={setTaskFunction}
                />
                <button type="submit" onClick={handleSubmit}>Guardar</button>

            </form>
            {createdTask && <p>{createdTask}</p>}
           
        </div>
    )
}

export default InputCreate;