import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/Mail";
import AppsIcon from "@mui/icons-material/Apps";
import AsideBar from "../AsideBar/AsideBar";
import { Grid } from "@mui/material";
import { HelpOutlineOutlined } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
const NavBar = () => {
  return (
    <Grid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          elevation={0}
          style={{ zIndex: "2", backgroundColor: "#F9F9F9" }}
        >
          <Toolbar>
            <AsideBar></AsideBar>

            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt=""
            />
            <Box
              sx={{
                marginLeft: "57px",
                display: "flex",
                alignItems: "center",
                borderRadius: "40px",
                backgroundColor: "#E4EFFA",
                width: "600px",
                height: "60px",
              }}
            >
              <SearchIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  alignItems: "center",
                  marginLeft: "15px",
                  color: "black",
                }}
              />
              <input
                placeholder="Search in mail"
                style={{
                  marginLeft: "30px",
                  height: "10px",
                  width: "200px",
                  backgroundColor: "#E4EFFA",
                  border: "none",
                  outline: "none",
                }}
              />
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="#000"
              >
                <TuneIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="#000"
              >
                <HelpOutlineOutlined />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="#000"
              >
                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="#000"
              >
                <AppsIcon />
              </IconButton>
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src="https://lh3.googleusercontent.com/a/ACg8ocJQX35Jc2way6NdgitcfxanuEytwQRgPd_X0pG53WnOtvU=s83-c-mo"
                alt=""
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default NavBar;
