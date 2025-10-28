import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function BasicExample() {
  // Estado para manejar el texto y la lista
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") return;

    setTareas([...tareas, tarea]); // agrega la nueva tarea
    setTarea(""); // limpia el input
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

      {/* 👇 Pasamos la lista actual de tareas como props */}
      <ListaTareas tareas={tareas} />
    </>
  );
}

export default BasicExample;
