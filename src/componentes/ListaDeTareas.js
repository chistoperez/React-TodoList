import { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css";

export default function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  //filtrar en base al criterio, si cumple esa condición va a incluirse en el arreglo, pero si el ID es igual al que estamos pidiendo, no lo vamos a incluir
  //es una copia nueva, no es alterar el arreglo, hasta setTareas se pasa el nuevo arreglo. y se pasa al onclick de la tacha de icono de Tarea.js como prop

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  //tenemos un condicional para ver si ha sido completada, y si ya estaba completada se desmarca. Si el Id de la tarea que estamos procesando es igual al id de la tarea que queremos marcar como compeltada entonces vamos a actualizar su estado. Las tareas son objetos y las estamos representando como objetos y tienen una propiedad completada que es verdadera o falsa, vamos a tomar esa propiedad y hacerle el inverso y retornar la tarea. Eso va a generar un nuevo arreglo de tareas que vamos a asignar a tareas actualizadas. Solo vamos a cambiar la tarea con el id que estamos buscando. y la retornamos porque map requiere un return. y luego actualizar la lista con setTareas. Estamos trabajando con el objeto de tarea, no con el componente ni con nada que tenga que ver con la parte visual, estamos trabajando con la representacion en el objeto de la tarea en ese arreglo. Pasar como prop a Tarea.js

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}
