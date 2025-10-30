import { ListGroup } from "react-bootstrap";
import ItemsTareas from "./ItemsTareas.jsx";

const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <ListGroup className="mt-4">
      {tareas.length === 0 ? (
        <ListGroup.Item className="text-secondary">
          No hay tareas aún
        </ListGroup.Item>
      ) : (
        tareas.map((t, index) => (
          <ItemsTareas key={index} tarea={t} borrarTarea={borrarTarea} />
        ))
      )}
    </ListGroup>
  );
};

export default ListaTareas;
