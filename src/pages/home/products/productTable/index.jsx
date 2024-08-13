import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Paper,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Checkbox,
  ListItemText,
} from "@mui/material";
import CommenTable from "../../../../components/customizedProductTable";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FilterListIcon from "@mui/icons-material/FilterList";
import LabelIcon from "@mui/icons-material/Label";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import AddIcon from "@mui/icons-material/AddBoxOutlined";
import pplogo from "../../../../assets/images/pp-logo.png";
import profilePic from "../../../../assets/images/profile-pic.jpg";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ProductTableFooter from "./productTableFooter/ProductTableFooter";
function ProductTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBrandCount, setSelectedBrandCount] = useState(0);
  const open = Boolean(anchorEl);
  const defaultHeaders = [
    { field: "brand", headerName: "Brand", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "members", headerName: "Members", width: 100 },
    { field: "categories", headerName: "Categories", width: 150 },
    { field: "tags", headerName: "Tags", width: 150 },
    { field: "nextMeeting", headerName: "Next Meeting", width: 100 },
    { field: "+", headerName: <AddIcon />, width: 20, fixed: true },
  ];

  const productsData = [
    {
      brand: "Wix",
      brandImage: pplogo,
      messageCount: 3,
      description: "Develop a personalized fit...",
      members: [profilePic, profilePic, profilePic],
      categories: ["Automation", "Mobile", , "B2B"],
      tags: ["#DigitalTransformation"],
      nextMeeting: "2024-08-13 15:00:00",
    },
    {
      brand: "Shopify",
      brandImage: pplogo,
      messageCount: 0,
      description: "Introduce a cloud-based p...",
      members: [profilePic, profilePic, profilePic],
      categories: ["E-commerce", "B2B", "Automation"],
      tags: ["#OnlineShopping", "#Digital"],
      nextMeeting: "2024-09-13 15:00:00",
    },
    {
      brand: "MailChimp",
      brandImage: pplogo,
      messageCount: 0,
      description: "Develop a mobile app aim...",
      members: [profilePic, profilePic, profilePic],
      categories: ["SAAS", "Mobile", "B2B"],
      tags: ["#TechInnovation", "#Cloud"],
      nextMeeting: null,
    },
    {
      brand: "PayPal",
      brandImage: pplogo,
      messageCount: 3,
      description: "This program could include...",
      members: [
        profilePic,
        profilePic,
        profilePic,
        profilePic,
        profilePic,
        profilePic,
        profilePic,
      ],
      categories: ["Marketplace"],
      tags: ["#BuySellOnline", "#Online"],
      nextMeeting: "2024-08-14 15:00:00",
    },
    // Add more products as necessary
  ];

  const categoryColors = {
    Automation: "#D1C4E9", // Light purple
    Mobile: "#FFAB91", // Light orange
    B2B: "#80DEEA", // Light cyan
    "E-commerce": "#FFCC80", // Light amber
    SAAS: "#C5E1A5", // Light green
    Marketplace: "#FF8A65", // Light red
    // Add more categories and their colors as needed
  };

  const categoryTextColors = {
    Automation: "#5E35B1", // Dark purple
    Mobile: "#E64A19", // Dark orange
    B2B: "#00796B", // Dark cyan
    "E-commerce": "#F57F17", // Dark amber
    SAAS: "#388E3C", // Dark green
    Marketplace: "#D32F2F", // Dark red
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBrandFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelectBrand = (event) => {
    const brand = event.target.value;
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const buttonColor = selectedBrands.length > 0 ? "#4CAF50" : "background.paper";
  const allBrands = [...new Set(productsData.map((p) => p.brand))];

  const filteredData = productsData.filter((product) =>
    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* First Row */}
      <Paper elevation={3} sx={{ padding: "16px", marginBottom: "1px" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Products</Typography>
          </Grid>

          <Grid item xs={12} sm={6} container justifyContent="flex-end">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  placeholder="Search for.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: <SearchIcon />,
                    sx: {
                      borderRadius: "20px", // Makes the search bar rounded
                      padding: "5px 10px", // Adjusts the padding for a smaller size
                      height: "35px", // Adjusts the height for a smaller size
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px", // Makes the entire field rounded
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} container justifyContent="space-evenly">
                <Paper elevation={2} sx={{ borderRadius: "20%" }}>
                  <IconButton>
                    <ForumOutlinedIcon />
                  </IconButton>
                </Paper>
                <Paper elevation={2} sx={{ borderRadius: "20%" }}>
                  <IconButton>
                    <SettingsIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Second Row */}
      <Paper elevation={3} sx={{ padding: "16px" }}>
        <Grid container spacing={2} alignItems="center">
          {/* Filter Buttons with Icons */}
          <Grid item xs={12} sm={8} container spacing={2} alignItems="center">
            <Grid item>
            <Button
                variant="contained"
                startIcon={<FilterListIcon />}
                onClick={handleClick}
                sx={{
                  backgroundColor: buttonColor, // Dynamic color
                  color: selectedBrands.length > 0 ? "white" : "black",
                  textTransform: "none", // Turn off capitalization
                  "&:hover": {
                    backgroundColor: selectedBrands.length > 0 ? "#388E3C" : "#f5f5f5", // Darker shade on hover
                  },
                }}
              >
                {selectedBrands.length > 0 ? "Selected Brands" : "All Brands"}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ maxHeight: 400 }}
              >
                {allBrands.map((brand) => (
                  <MenuItem key={brand}>
                    <Checkbox
                      checked={selectedBrands.includes(brand)}
                      value={brand}
                      onChange={handleSelectBrand}
                    />
                    <ListItemText primary={brand} />
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<FilterListIcon />}
                sx={{
                  backgroundColor: "background.paper",
                  color: "black",
                  textTransform: "none", // Turn off capitalization
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              
              >
                Desk
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<LabelIcon />}
                sx={{
                  backgroundColor: "background.paper",
                  color: "black",
                  textTransform: "none", // Turn off capitalization
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              
              >
                Tags
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled
                variant="contained"
                startIcon={<LabelIcon />}
                sx={{
                  backgroundColor: "background.paper",
                  color: "black",
                  textTransform: "none", // Turn off capitalization
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              
              >
                Sort
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled
                variant="contained"
                startIcon={<LabelIcon />}
                sx={{
                  backgroundColor: "background.paper",
                  color: "black",
                  textTransform: "none", // Turn off capitalization
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              
              >
                Filter
              </Button>
            </Grid>
          </Grid>

          {/* Icons for Meeting and Import/Export */}
          <Grid item xs={12} sm={4} container justifyContent="space-evenly">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "background.paper",
                color: "black",
                textTransform: "none", // Turn off capitalization
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            
            >
              Meeting
            </Button>

            <Button
              variant="contained"
              startIcon={<BrowserUpdatedOutlinedIcon />}
              sx={{
                backgroundColor: "background.paper",
                color: "black",
                textTransform: "none", // Turn off capitalization
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            
            >
              Import / Export
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <CommenTable
        headers={defaultHeaders}
        data={filteredData}
        categoryColors={categoryColors}
        categoryTextColors={categoryTextColors}
        name={"Product Table"}
        setSelectedBrandCount={setSelectedBrandCount}
      />
     {selectedBrandCount>0&&(<ProductTableFooter selectedBrands={selectedBrandCount}/>)} 
    </>
  );
}

export default ProductTable;
