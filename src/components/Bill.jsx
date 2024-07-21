import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useContext } from "react";
import AuthContext from "../AppContext/ContextProvider";
import { useForm } from "react-hook-form";
import { Button, MenuItem, Select } from "@mui/material";

export default function Bill() {
  const { setBill, selected, setSelected } = useContext(AuthContext);
  const [expense, setExpense] = useState();
  const [friendExpense, setFriendExpense] = useState();

  const { register, handleSubmit, reset } = useForm();
  function onSubmit(data) {
    calculate(data);
    updateBalance(friendExpense);
  }

  function calculate(data) {
    if (data.friendExpense) {
      setExpense(data.bill - data.friendExpense);
      setFriendExpense(data.friendExpense);
    } else if (data.expense) {
      setFriendExpense(data.bill - data.expense);
      setExpense(data.expense);
    }
    if (data.paidBy === "me") {
      setBill(friendExpense);
    } else if (data.paidBy === "friend") {
      setBill(expense);
    }
  }

  const updateBalance = (friendExpense) => {
    setSelected((prevState) => ({
      ...prevState,
      balance: friendExpense,
    }));
  };
  function handleReset(data) {
    reset();
  }

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <p>
        {selected.name} owes you {friendExpense}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <Input
          placeholder="Bill amount"
          id="bill"
          type="number"
          {...register("bill")}
        />
        <Input
          placeholder="expense"
          id="expense"
          type="number"
          {...register("expense")}
        />
        <Select
          id="paidBy"
          label="Paid By"
          defaultValue=""
          {...register("paidBy", { required: "This field is required" })}
        >
          <MenuItem value={"me"}>Me</MenuItem>
          <MenuItem value={"friend"}>{selected.name}</MenuItem>
        </Select>
        <Button type="submit">click me</Button>
      </form>
      <Button onClick={handleReset}> Reset</Button>
      <p> My expense: {expense}</p>
      <p>
        {selected.name}: {friendExpense}
      </p>
    </Box>
  );
}
