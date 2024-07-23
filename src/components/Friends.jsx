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
import { Calculate } from "@mui/icons-material";
import AuthContext from "../AppContext/ContextProvider";
import Bill from "./Bill";

const listStyle = {
  width: "100%",
  maxWidth: 360,
  backgroundColor: "background.paper",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
};

function Friends() {
  const { friends, setFriends } = useContext(AuthContext);

  function handleShow(id) {
    setFriends((prevFriends) => {
      return prevFriends.map((friend) => {
        return friend.id === id
          ? { ...friend, isOpen: !friend.isOpen }
          : { ...friend, isOpen: false };
      });
    });
  }

  function handleDelete(id) {
    const updatedFriends = friends.filter((e) => e.id !== id);
    setFriends(updatedFriends);
  }

  return (
    <Box
      my={4}
      display="flex"
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap={4}
      p={2}
      justifyContent={"center"}
    >
      <Box
        width={"500px"}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        gap={4}
        p={2}
        sx={{
          border: "2px solid grey",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          bgcolor: "background.paper",
        }}
      >
        <Typography gutterBottom variant="h6">
          My Friends
        </Typography>
        {friends.map((item) => (
          <List key={item.id} style={listStyle}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <Typography
                    sx={{
                      display: "inline",
                      color: item.balance < 0 ? "red" : "green",
                    }}
                    component="span"
                    variant="body2"
                  >
                    Balance: {isNaN(item.balance) ? "error" : item.balance}
                  </Typography>
                }
              />
              <ListItemAvatar>
                <Calculate
                  color="primary"
                  onClick={() => handleShow(item.id)}
                />
              </ListItemAvatar>
              <ListItemAvatar>
                <ClearIcon
                  sx={{ color: "red" }}
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
      {friends.map((friend) =>
        friend.isOpen ? <Bill key={friend.id} friend={friend} /> : null
      )}
    </Box>
  );
}

export default Friends;
