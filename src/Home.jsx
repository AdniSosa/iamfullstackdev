import {Link} from 'react-router-dom'
import trashCan from './assets/trashCan.png'

const Home = ({data}) => {

 const deleteTask = async (id) => {
    const url = 'http://localhost:3000'
    const response = await fetch(`${url}/id/${id}`, {
      method: "DELETE",
    });
    location.reload() //Refresca la página para descargar cambios de la BBDD
  }

  return (
    <>
    <h2>Lista de datos</h2>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
          <button onClick={() => deleteTask(item._id)}><img src={trashCan} width={15}/></button>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
