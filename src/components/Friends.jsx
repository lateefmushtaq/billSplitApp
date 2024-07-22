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
} from "@mui/material";
import AuthContext from "../AppContext/ContextProvider";
import Bill from "./Bill";

function Friends() {
  const { friends, setFriends, setSelected, selected } =
    useContext(AuthContext);
  function handleDelete(id) {
    const updatedFriends = friends.filter((e) => e.id !== id);
    setFriends(updatedFriends);
  }
  function handleSelect(item) {
    setSelected(item);
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
        {friends.map((item) => (
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
                      {isNaN(item.balance) ? "error" : item.balance}
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

      {selected && <Bill />}
    </Box>
  );
}

export default Friends;
