import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

function ExpenceItem(props) {
  return (
    <li>
      <Card className="expence-item">
        <ExpenceDate date={props.date} />
        <div className="expence-item__description">
          <h2>{props.title}</h2>
          <div className="expence-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenceItem;
