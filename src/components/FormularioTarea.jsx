import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

function FormularioTareas() {
  const [tarea, setTarea] = useState("");

  //  Leer tareas desde localStorage una vez
  const [tareas, setTareas] = useState(() => {
    const stored = localStorage.getItem("tareas");
    return stored ? JSON.parse(stored) : [];
  });

  //  Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = tarea.trim();
    if (nuevaTarea === "") return;

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

      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </>
  );
}

export default FormularioTareas;
