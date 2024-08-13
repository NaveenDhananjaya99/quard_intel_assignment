import React, { useState } from "react";
import {
  Grid,
  TextField,
  IconButton,
  Button,
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Avatar,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FilterListIcon from "@mui/icons-material/FilterList";
import LabelIcon from "@mui/icons-material/Label";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import AddIcon from "@mui/icons-material/AddBoxOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import moment from "moment";
const tagColor = "#B0BEC5";

function CommenTable({
  name,
  headers,
  data,
  categoryColors,
  categoryTextColors,
  setSelectedBrandCount,
}) {
  const [visibleColumns, setVisibleColumns] = useState(
    headers.reduce(
      (acc, header) => ({
        ...acc,
        [header.field]: header.field === "+" ? true : true,
      }),
      {}
    )
  );
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleColumnToggle = (field) => {
    setVisibleColumns((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prevState) => {
      const newSelectedBrands = prevState.includes(brand)
        ? prevState.filter((b) => b !== brand)
        : [...prevState, brand];
      setSelectedBrandCount(newSelectedBrands.length); // Update count here
      return newSelectedBrands;
    });
  };

  const meetingColors = {
    default: "lightgreen", // Default color for meetings today
    Tomorrow: "lightblue",
    "No contact": "lightcoral",
    "Next month": "lightgray",
    Done: "#D1C4E9",
  };
  const meetingTextColors = {
    default: "darkgreen", // Default text color for meetings today
    Tomorrow: "darkblue",
    "No contact": "darkred",
    "Next month": "darkgray",
    Done: "darkpurple",
  };

  const classifyMeeting = (nextMeeting) => {
    if (!nextMeeting) return "No contact";

    const now = moment();
    const meetingTime = moment(nextMeeting, "YYYY-MM-DD HH:mm:ss");
    if (meetingTime.isBefore(now)) {
      return "Done";
    }
    if (meetingTime.isSame(now, "day")) {
      const minutesLeft = meetingTime.diff(now, "minutes");

      return `in ${minutesLeft} minutes`;
    }
    if (meetingTime.isSame(now.add(1, "days"), "day")) {
      return "Tomorrow";
    }
    if (
      meetingTime.isAfter(now.startOf("month").add(1, "month")) &&
      meetingTime.isBefore(now.endOf("month").add(1, "month"))
    ) {
      return "Next month";
    }
    return "No contact";
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          PaperProps={{ sx: { width: 300 } }}
        >
          <Box sx={{ padding: "16px" }}>
            <FormGroup>
              {headers.map(
                (header) =>
                  header.field !== "+" && (
                    <FormControlLabel
                      key={header.field}
                      control={
                        <Checkbox
                          checked={visibleColumns[header.field]}
                          onChange={() => handleColumnToggle(header.field)}
                        />
                      }
                      label={header.headerName}
                    />
                  )
              )}
            </FormGroup>
          </Box>
        </Menu>

        <TableContainer component={Paper}>
          <Table>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell
                    key={header.field}
                    style={{
                      width: header.width,
                      fontSize: "16px", // Increase font size
                      border: "1px solid #ccc",
                    }}
                    align={header.field === "+" ? "right" : "left"}
                    onClick={header.field === "+" ? handleOpenMenu : undefined}
                  >
                    {header.field === "brand" ? (
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                      >
                        
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedBrands.length === data.length} // Assume the user wants to select all brands
                              onChange={(e) => {
                                
                                if (e.target.checked) {
                                  setSelectedBrands(
                                    data.map((row) => row.brand)
                                  );
                                  setSelectedBrandCount(data.length)
                                } else {
                                  setSelectedBrands([]);
                                  setSelectedBrandCount(0)
                                }
                              }}
                              sx={{
                                color: "black",
                                "&.Mui-checked": { color: "black" },
                              }}
                            />
                          }
                        />
                        {header.headerName}
                        <Box
                        sx={{ml:9}}
                      >
                        <IconButton>
                          <AddIcon />
                        </IconButton>{" "}
                        </Box>
                      </Box>
                    ) : (
                      header.headerName
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    borderBottom: "1px solid #ccc",
                    backgroundColor: selectedBrands.includes(row.brand)
                      ? "#f0f0f0"
                      : "transparent",
                    // Change row color for selected brands
                  }}
                >
                  {headers.map((header) => (
                    <TableCell
                      key={header.field}
                      sx={{
                        border: "1px solid #ccc",
                        overflow: "hidden",
                        maxWidth: header.width,
                      }}
                    >
                      {header.field === "brand" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* Checkbox on the left */}
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Checkbox
                              checked={selectedBrands.includes(row.brand)}
                              onChange={() => handleCheckboxChange(row.brand)}
                              sx={{
                                color: "black",
                                "&.Mui-checked": { color: "black" },
                              }}
                            />
                            {/* Logo and Name Centered */}
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                ml: 2,
                              }}
                            >
                              <Box
                                component="img"
                                src={row.brandImage}
                                alt={row.brand}
                                sx={{ width: 20, height: 20, mr: 1 }} // Adjust width and height as needed
                              />
                              {row.brand}
                            </Box>
                          </Box>
                          {row.messageCount > 0 && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <ForumOutlinedIcon
                                sx={{ width: 20, height: 20, mr: 1 }}
                              />
                              <Typography variant="body2">
                                {row.messageCount}
                              </Typography>{" "}
                              {/* Adjust message count as needed */}
                            </Box>
                          )}
                        </Box>
                      ) : header.field === "categories" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            display: "flex",
                            flexDirection: "row", // Stack tags vertically

                            maxHeight: 150, // Set max height for the tags section
                            overflowY: "auto",
                            flexDirection: "row", // Enable vertical scrolling
                            overflowX: "atuo",
                            flexWrap: "nowrap", // Enable vertical scrolling
                            scrollbarWidth: "none", // Firefox
                            msOverflowStyle: "none", // Internet Explorer and Edge
                            "&::-webkit-scrollbar": { display: "none" },
                          }}
                        >
                          {row.categories.map((category, idx) => (
                            <Chip
                              key={idx}
                              label={category}
                              sx={{
                                backgroundColor: categoryColors[category],
                                color: categoryTextColors[category],
                                borderRadius: "10px",
                              }} // Use appropriate background and text colors
                            />
                          ))}
                        </Box>
                      ) : header.field === "tags" ? (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column", // Stack tags vertically
                            gap: 0.5, // Adjust gap between chips
                            maxHeight: 150, // Set max height for the tags section
                            overflowY: "auto",
                            flexDirection: "row", // Enable vertical scrolling
                            overflowX: "scroll",
                            flexWrap: "nowrap", // Enable vertical scrolling
                            scrollbarWidth: "none", // Firefox
                            msOverflowStyle: "none", // Internet Explorer and Edge
                            "&::-webkit-scrollbar": { display: "none" },
                            // Hide overflow
                          }}
                        >
                          {row.tags.map((tag, idx) => (
                            <Chip
                              key={idx}
                              label={tag}
                              sx={{
                                backgroundColor: tagColor,
                                color: "#212121",
                                borderRadius: "10px",
                              }} // Gray color for tags
                            />
                          ))}
                        </Box>
                      ) : header.field === "nextMeeting" ? (
                        (() => {
                          const meetingStatus = classifyMeeting(
                            row.nextMeeting
                          );
                          return (
                            <Chip
                              label={meetingStatus}
                              sx={{
                                backgroundColor:
                                  meetingColors[meetingStatus] ||
                                  meetingColors.default,
                                color:
                                  meetingTextColors[meetingStatus] ||
                                  meetingTextColors.default,
                                borderRadius: "10px",
                              }}
                            />
                          );
                        })()
                      ) : header.field === "members" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: -0.5, // Adjust gap between avatars
                          }}
                        >
                          {row.members.map((member, idx) => (
                            <Avatar
                              key={idx}
                              src={member}
                              alt={`Member ${idx + 1}`}
                              sx={{ width: 24, height: 24 }} // Adjust width and height as needed
                            />
                          ))}
                        </Box>
                      ) : (
                        row[header.field]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default CommenTable;
