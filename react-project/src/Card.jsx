import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalForm from "./Modal";

function CardCheck(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={props.img} variant="top" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.info}</Card.Text>
        <ModalForm title={props.title} findNote={props.findNote} iterate={props.iterate}/>
      </Card.Body>
    </Card>
  );
}

export default CardCheck;
