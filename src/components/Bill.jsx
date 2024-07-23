import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useForm } from "react-hook-form";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import AuthContext from "../AppContext/ContextProvider";
import CustomizedButton from "./Button";

export default function Bill({ friend }) {
  const { setFriends } = useContext(AuthContext);
  const [expense, setExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const { register, handleSubmit, reset, watch } = useForm();
  const bill = watch("bill");

  function onSubmit(data) {
    const bill = parseFloat(data.bill);
    const exp = parseFloat(data.expense);
    if (!isNaN(bill) && !isNaN(exp)) {
      const newExpense = data.paidBy === "me" ? exp : -exp;
      const newFriendExpense = bill - exp;
      setExpense(newExpense);
      setFriendExpense(newFriendExpense);
      reset();

      setFriends((prevFriends) => {
        return prevFriends.map((f) => {
          if (f.id === friend.id) {
            return { ...f, balance: newExpense };
          }
          return f;
        });
      });
    }
  }

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        bgcolor: "background.paper",
        width: "50%",
        margin: "20px auto",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" gutterBottom>
        Bill for <strong style={{ color: "#8b0292" }}>{friend.name}</strong>
      </Typography>
      {expense < 0 ? (
        <Typography sx={{ color: "red" }}>
          You owe {friend.name} {Math.abs(expense)}
        </Typography>
      ) : (
        <Typography sx={{ color: "green" }}>
          {friend.name} owes you {expense}
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} my={2}>
          <Input
            placeholder="Bill amount"
            id="bill"
            type="number"
            {...register("bill")}
            fullWidth
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
            fullWidth
          />
          <Typography>
            {friend.name}'s Expense: {friendExpense}
          </Typography>
          <Select
            id="paidBy"
            label="Paid By"
            defaultValue=""
            {...register("paidBy", { required: "This field is required" })}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>
              Select who paid
            </MenuItem>
            <MenuItem value="me">Me</MenuItem>
            <MenuItem value="friend">{friend.name}</MenuItem>
          </Select>
        </Stack>
        <CustomizedButton type="submit">Submit</CustomizedButton>
      </form>
    </Box>
  );
}
