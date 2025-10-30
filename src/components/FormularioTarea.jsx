import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function BasicExample() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = tarea.trim();
    if (nuevaTarea === "") return;

    //  Comparar sin importar mayúsculas/minúsculas
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

      <ListaTareas tareas={tareas} />
    </>
  );
}

export default BasicExample;
