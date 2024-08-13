import React from "react";
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

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

function SidebarFooter() {
  return (
    <Box sx={{ mb: -5 }}>
      <List>
        <ListItem
          button
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mb: 1,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              {" "}
              <PersonAddAlt1Icon />
            </ListItemIcon>
            <ListItemText primary={"Invite teammates"} />
          </Box>
        </ListItem>

        <ListItem
          button
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mb: 1,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              {" "}
              <HelpOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Help and first setps"} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: 1,
              p: 1,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body2" sx={{ color: "#888" }}>
              0/6
            </Typography>
          </Box>
        </ListItem>

        <ListItem
          button
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mb: 1,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                borderRadius: 1,
                p: 1,
                mr: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="body2" sx={{ color: "#888" }}>
                7
              </Typography>
            </Box>
            <ListItemText primary={"Days left on trail"} />
          </Box>

          <Box ml={3}>
            <Button
          
              sx={{
                backgroundColor: "black",
                textTransform: "none",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgray", // Optional: Change color on hover
                },
              }}
            >
              Add billing
            </Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default SidebarFooter;
