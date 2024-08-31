"use client";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import "../app/globals.css";
import NewArrival from "./NewArrival";
import OnSale from "./OnSale";
import Featured from "./Featured";
import {products} from "../app/data/product-data"
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="container">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="flex justify-center flex-1">
          <Tab label="New Arrival" {...a11yProps(0)} />
          <Tab label=" Featured" {...a11yProps(1)} />
          <Tab label="On Sale" {...a11yProps(2)} />
          <Tab label="Tending" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <NewArrival product={products} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Featured/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <OnSale product={products} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Tending
      </CustomTabPanel>
    </Box>
  );
}
