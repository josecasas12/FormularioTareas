import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function FormularioTareas() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = tarea.trim();
    if (nuevaTarea === "") return;

    // Comparar sin importar mayúsculas/minúsculas
    const tareaExistente = tareas.find(
      (t) => t.toLowerCase() === nuevaTarea.toLowerCase()
    );
    if (tareaExistente) {
      alert("Esa tarea ya existe.");
      return;
    }

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  // ✅ Nueva función para borrar una tarea
  const borrarTarea = (tareaAEliminar) => {
    setTareas(tareas.filter((t) => t !== tareaAEliminar));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Form.Text className="text text-danger">
            {tarea.trim() === "" && "El campo no puede estar vacío"}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar tarea
        </Button>
      </Form>

      {/*  Pasamos la función borrarTarea como prop */}
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </>
  );
}

export default FormularioTareas;
