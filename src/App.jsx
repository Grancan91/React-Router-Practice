import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

/*

Queremos mostrar una Lista de Todos

- Los Datos:
  - Los vamos a obtener de JsonPlaceHolder -> API
    - Para ello usaremos AXIOS
    - Crearemos los Servicios.
      - getTodos
      - getOneTodo(id)

- Componentes: 
- Vista Detalle del Todo (DetailTodo) -> Páginas
- Lista de Todos (ListTodo) -> Componente - > Feo pero Tronquea
- Elemento Todo (CardTodo) -> Componente -> Feo pero va

//Queremos poder seleccionar Un Todo

//Una vez Seleccionado, Iremos a una nueva Página
//donde mostraremos el Todo en Detalle. */




function App() {

  return (
    <>
    <Header/>
    <Outlet/> {/* Va a introducir los Children*/}
    </>
  )
}

export default App
