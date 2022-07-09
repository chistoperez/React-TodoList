import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";

export default function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>Task List</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}
