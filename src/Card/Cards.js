import React, { useState } from "react";
import { FormGroup, Form, Button } from "reactstrap";
import Card from "./Card";
import { Row, Col } from "reactstrap";
import { FaUser } from "react-icons/fa";

export default function AddNewCard(props) {
  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    const newCards = [card, ...cards];
    setCards(newCards);
  };

  const removeCard = (id) => {
    const removeCardArr = [...cards].filter((card) => card.id !== id);
    setCards(removeCardArr);
    console.log(...cards);
  };

  return (
    <div style={{ marginLeft: "5%", marginTop: "5%" }}>
      <Row>
        <Col sm="2">
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <FaUser style={{ color: "white", fontSize: "100px" }} />

            <p
              style={{
                fontSize: "40px",
                color: "white",
                textDecoration: "underline",
              }}
            >
              {props.userName}
            </p>
          </div>
        </Col>
        <Col sm="10">
          <Row>
            {cards.map((card, index) => (
              <Col xs={6}>
                <Card
                  key={index}
                  value={card}
                  cards={cards}
                  removeCard={removeCard}
                  onSubmit={addNewCard}
                />
              </Col>
            ))}
            <Col xs={6}>
              <Form
                style={{
                  marginBottom: "5%",
                  marginLeft: "5%",
                  width: "90%",

                  padding: "5%",
                  borderRadius: "20px",
                  boxShadow: "10px 10px pink",
                  float: "left",
                  textAlign: "center",

                  backgroundColor: "white",
                }}
              >
                <FormGroup
                  style={{
                    color: "red",
                    textAlign: "center",
                    tag: "h5",
                    fontWeight: "600",
                  }}
                >
                  New Project
                </FormGroup>
                <Button
                  className="btn-enter"
                  style={{ backgroundColor: "red" }}
                  onClick={addNewCard}
                  textAlign="center"
                  id="create"
                >
                  <span>Create</span>
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
