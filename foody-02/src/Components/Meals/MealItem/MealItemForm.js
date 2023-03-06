import React, { useRef, useState } from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitEventHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitEventHandler}>
      <Input
        label="amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!AmountIsValid && <p>Please Enter Valid Amount [1-5].</p>}
    </form>
  );
};

export default MealItemForm;
