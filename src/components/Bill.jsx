import * as React from "react";
import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useForm } from "react-hook-form";
import { Button, MenuItem, Select } from "@mui/material";
import AuthContext from "../AppContext/ContextProvider";

export default function Bill() {
  const { selected, setFriends } = useContext(AuthContext);
  const [expense, setExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const bill = watch("bill");

  useEffect(() => {
    if (selected && selected.id) {
      setFriends((prevFriends) =>
        prevFriends.map((friend) =>
          friend.id === selected.id
            ? { ...friend, balance: friendExpense }
            : friend
        )
      );
    }
  }, [expense, friendExpense, selected, setFriends]);

  function onSubmit(data) {
    const bill = parseFloat(data.bill);
    const exp = parseFloat(data.expense);

    if (!isNaN(bill) && !isNaN(exp)) {
      const newExpense = data.paidBy === "me" ? exp : -exp;
      const newFriendExpense = bill - exp;
      setExpense(newExpense);
      setFriendExpense(newFriendExpense);
    }
  }

  function handleReset() {
    reset();
    setExpense(0);
    setFriendExpense(0);
  }

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {expense < 0 ? (
        <p>
          You owe {selected.name} {expense}
        </p>
      ) : (
        <p>
          {selected.name} owes you {expense}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Bill amount"
          id="bill"
          type="number"
          {...register("bill")}
        />
        <Input
          placeholder="My expense"
          id="expense"
          type="number"
          {...register("expense", {
            validate: (value) =>
              parseInt(value, 10) <= parseInt(bill, 10) ||
              "Expense cannot exceed the bill",
          })}
        />
        {errors.expense && <p>{errors.expense.message}</p>}

        <Select
          id="paidBy"
          label="Paid By"
          defaultValue=""
          {...register("paidBy", { required: "This field is required" })}
        >
          <MenuItem value="me">Me</MenuItem>
          <MenuItem value="friend">{selected.name}</MenuItem>
        </Select>
        <Button type="submit">Click Me</Button>
      </form>
      <Button onClick={handleReset}>Reset</Button>
      <p>My expense: {expense}</p>
      <p>
        {selected.name}: {friendExpense}
      </p>
    </Box>
  );
}
