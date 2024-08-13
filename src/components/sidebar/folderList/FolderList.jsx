import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Card,
} from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/AddBoxOutlined";
import { sampleFolders } from "./sampleFolderList";

const FolderList = () => {
  const [openFolders, setOpenFolders] = useState({});
  const [folders, setFolders] = useState(sampleFolders);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFolderDialogOpen, setNewFolderDialogOpen] = useState(false);

  const toggleFolder = (index) => {
    setOpenFolders((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const addNewFolder = () => {
    if (newFolderName) {
      setFolders([...folders, { name: newFolderName, subfolders: [] }]);
      setNewFolderName("");
      setNewFolderDialogOpen(false);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 320, p: 1,mt:3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h6">FOLDERS</Typography>
        <IconButton onClick={() => setNewFolderDialogOpen(true)}>
          <AddIcon />
        </IconButton>
      </Box>
      <List component="nav">
        {folders.map((folder, index) => (
          <Box key={index}>
            <ListItem button onClick={() => toggleFolder(index)}>
              <ListItemIcon>
                <FolderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={folder.name} />
              {folder.subfolders.length > 0 &&
                (openFolders[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>
            {folder.subfolders.length > 0 && (
              <Collapse in={openFolders[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {folder.subfolders.map((subfolder, subIndex) => (
                    <ListItem key={subIndex} sx={{ pl: 10 }}>
                         <Box
                      sx={{
                        position: 'absolute',
                        left: 30,
                        top: 0,
                        height: '100%',
                        width: '2px',
                        backgroundColor: '#EEE',
                      }}
                    />
                      <ListItemText primary={subfolder} />
                    </ListItem>
                  ))}
                  <ListItem button sx={{ pl: 10 }}>
                    <ListItemIcon >
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: -1 }}primary="Add new sub" />
                  </ListItem>
                </List>
              </Collapse>
            )}
          </Box>
        ))}
  
      </List>

      <Dialog
        open={newFolderDialogOpen}
        onClose={() => setNewFolderDialogOpen(false)}
      >
        <DialogTitle>Add New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Folder Name"
            type="text"
            fullWidth
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewFolderDialogOpen(false)}>Cancel</Button>
          <Button onClick={addNewFolder}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FolderList;
