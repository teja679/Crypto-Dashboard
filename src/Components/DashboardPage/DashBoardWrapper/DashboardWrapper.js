import * as React from "react";
import './styles.css'
import Tab from "@mui/material/Tab";
import {TabList} from "@mui/lab";
import {TabPanel} from "@mui/lab";
import {TabContext} from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "../Grid/Grid";
import List from "../List/List";
function DashboardWrapper({ data }) {
  const [value, setValue] = React.useState(0);
  console.log(data)
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <div className="tabs-wrapper">
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <TabList
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            textColor="primary"
          >
            <Tab label="Grid" sx={style} />
            <Tab label="List" sx={style} />
          </TabList>
          <TabPanel value={0}>
            <div className="grid-flex">
              {data.length === 0 ? (
                <p>No Crypto Currencies Found</p>
              ) : (
                data.map((coin, i) => (
                  <Grid coin={coin} key={i} delay={(i + 5) % 5} />
                ))
              )}
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <table className="list-table">
              {data.length == 0 ? (
                <p>No Crypto Currencies Found</p>
              ) : (
                data.map((coin, i) => (
                  <List coin={coin} key={i} delay={(i + 8) % 8} />
                ))
              )}
            </table>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default DashboardWrapper;