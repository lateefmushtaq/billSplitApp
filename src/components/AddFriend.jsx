import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField, Stack } from "@mui/material";
import AuthContext from "../AppContext/ContextProvider";
import CustomizedButton from "./Button";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./ThemeProvider";

function AddFriend() {
  const { setFriend, friend, bill } = useContext(AuthContext);
  const schema = yup.object().shape({
    friendName: yup
      .string()
      .required("Friend's name is required")
      .min(3, "Name must be 3 char long"),
  });
  const onSubmit = (data) => {
    if (data) {
      let name = data.friendName;
      setFriend([...friend, { name, id: Date.now(), balance: 0 }]);
    }
    reset();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <ThemeProvider theme={customTheme(customTheme)}>
      <Box
        sx={{
          display: "flex",
          m: 2,
          justifyContent: "end",
        }}
        xs={12}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <TextField
              color="primary"
              style={{ padding: "2px" }}
              id="outlined-error"
              label="Friend Name"
              error={!!errors.friendName}
              variant="outlined"
              {...register("friendName")}
            />

            <CustomizedButton type="submit">Add Friend</CustomizedButton>
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default AddFriend;
