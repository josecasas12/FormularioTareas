import { ListGroup } from "react-bootstrap";

const ItemsTareas = ({ tarea }) => {
  return (
    <ListGroup.Item>
      {tarea}
    </ListGroup.Item>
  );
};

export default ItemsTareas;
