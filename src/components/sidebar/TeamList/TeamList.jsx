import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/AddBoxOutlined";
import { teams } from "./teamListData";

const TeamsList = () => {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);


  const handleClick = (index, link) => {
    setSelectedIndex(index); // Set the selected team index
    navigate(link); // Navigate to the link
  };

  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: "15px",
        width: "100%",
        maxWidth: 300,

        border: "1px solid", // Adds a solid border
        borderColor: "divider",
      }}
    >
      <CardContent>
        <List>
          {teams.map((team, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleClick(index, team.link)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 0.5,
                mb: 1,
                borderRadius: "8px",
                backgroundColor: selectedIndex === index ? '#f5f5f5' : 'transparent', 
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon sx={{ minWidth: "36px" }}>
                  {team.icon}
                </ListItemIcon>
                <ListItemText primary={team.name} />
              </Box>
              <Typography variant="body2" sx={{ color: "#888" }}>
                {team.shortcut}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          variant="text"
          startIcon={<AddIcon />}
          sx={{
            ml: 2,
            width: "100%",
            textTransform: "none",
            justifyContent: "flex-start",
            borderRadius: "8px",
            borderColor: "#fff",
            color: "black",
          }}
        >
          Create a team
        </Button>
      </CardActions>
    </Card>
  );
};

export default TeamsList;
