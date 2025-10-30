import { ListGroup, Button } from "react-bootstrap";

const ItemsTareas = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {tarea}
      <Button
        variant=""
        size="sm"
        onClick={() => borrarTarea(tarea)}
      >
        ❌
      </Button>
    </ListGroup.Item>
  );
};

export default ItemsTareas;
