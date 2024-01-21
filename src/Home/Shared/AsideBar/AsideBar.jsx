import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const drawerWidth = 240;

const AsideBar = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <EditOutlinedIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Compose
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MailIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Inbox
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StarBorderIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Starred
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessTimeIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Snoozed
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SendIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          Send
        </span>
      </Box>
      <Box
        sx={{
          marginTop: "19px",
          marginLeft: "10px",
          width: "212px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <KeyboardArrowDownIcon style={{ width: "22px", marginLeft: "32px" }} />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "27px",
            fontWeight: "400",
            fontSize: "22px",
          }}
        >
          More
        </span>
      </Box>
    </div>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

AsideBar.propTypes = {
  window: PropTypes.func,
};

export default AsideBar;
