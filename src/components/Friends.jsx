import React, { useContext } from "react";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import AuthContext from "../AppContext/ContextProvider";

function Friends() {
  const { friend, setFriend, setSelected, selected } = useContext(AuthContext);
  function handleDelete(id) {
    const updatedFriends = friend.filter((e) => e.id !== id);
    setFriend(updatedFriends);
  }
  function handleSelect(item) {
    setSelected(item);
    console.log(item.balance);
  }

  function createColor(selected) {
    return selected.balance <= 0 ? "green" : "red";
  }

  return (
    <Box
      my={4}
      display="flex"
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap={4}
      p={2}
      xs={12}
    >
      <Box
        width={"500px"}
        my={4}
        display="flex"
        flexDirection={"column"}
        flexWrap={"wrap"}
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
        xs={12}
      >
        <Typography gutterBottom variant="h6" component="div">
          My Friends
        </Typography>
        {friend.map((item) => (
          <List
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              boxShadow: "0px 6px 8px indigo",
            }}
            onClick={() => handleSelect(item)}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.balance}
                    </Typography>
                  </>
                }
              />

              <ListItemAvatar>
                <ClearIcon
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                />
              </ListItemAvatar>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </Box>

      {selected && (
        <Box
          width={"500px"}
          sx={{
            border: "2px solid grey",
            bgcolor: "background.paper",
            boxShadow: `0px 6px 8px ${createColor(selected)}`,
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {` Bill with ${selected.name}`}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography>
              {`${selected.name} owes you ${selected.balance}`}
              <TextField></TextField>
            </Typography>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default Friends;
