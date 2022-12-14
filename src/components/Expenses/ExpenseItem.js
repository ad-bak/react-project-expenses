import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseData from "./ExpenseData.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clicked = () => {
    setTitle("Updated");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
