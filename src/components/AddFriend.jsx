import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField, Stack, Typography } from "@mui/material";
import AuthContext from "../AppContext/ContextProvider";
import CustomizedButton from "./Button";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./ThemeProvider";

function AddFriend() {
  const { setFriends, friends } = useContext(AuthContext);
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const schema = yup.object().shape({
    friendName: yup
      .string()
      .required("Friend's name is required")
      .min(3, "Name must be 3 char long"),
  });

  const onSubmit = (data) => {
    if (data) {
      let name = data.friendName;
      let id = Date.now();
      setImage("https://i.pravatar.cc/48");
      setFriends([
        ...friends,
        { name, id, image: `${image}?u=${id}`, balance: 0, isOpen: false },
      ]);
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
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 3,
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack> </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            sx={{ alignItems: "center" }}
          >
            <TextField
              width="100%"
              color="primary"
              label="Friend Name"
              error={!!errors.friendName}
              helperText={errors.friendName?.message}
              variant="outlined"
              {...register("friendName")}
              fullWidth
            />
            <CustomizedButton
              type="submit"
              sx={{ width: "100%", marginTop: "8px" }}
            >
              Add Friend
            </CustomizedButton>
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default AddFriend;
