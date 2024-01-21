import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  IconButton,
} from "@mui/material";
import { StarBorder, StarRate } from "@mui/icons-material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

const MailBody = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Box sx={{ width: "80%", paddingTop: "80px", marginLeft: "200px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ marginLeft: "50px" }}
              label="Primary"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ marginLeft: "80px" }}
              label="Promotions"
              {...a11yProps(1)}
            />
            <Tab sx={{ marginLeft: "80px" }} label="Social" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Card sx={{ margin: 1 }}>
            <CardActions disableSpacing>
              <Checkbox {...label} />
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<StarBorder />}
                  checkedIcon={<StarRate sx={{ color: "yellow" }} />}
                />
              </IconButton>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Jon Smith
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur quos, quae eaque veniam temporibus facere...
                </Typography>
              </CardContent>
            </CardActions>
          </Card>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Card sx={{ margin: 1 }}>
            <CardActions disableSpacing>
              <Checkbox {...label} />
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<StarBorder />}
                  checkedIcon={<StarRate sx={{ color: "yellow" }} />}
                />
              </IconButton>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Jon Smith
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur quos, quae eaque veniam temporibus facere...
                </Typography>
              </CardContent>
            </CardActions>
          </Card>
          <Card sx={{ margin: 1 }}>
            <CardActions disableSpacing>
              <Checkbox {...label} />
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<StarBorder />}
                  checkedIcon={<StarRate sx={{ color: "yellow" }} />}
                />
              </IconButton>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Jon Smith
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur quos, quae eaque veniam temporibus facere...
                </Typography>
              </CardContent>
            </CardActions>
          </Card>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Card sx={{ margin: 1 }}>
            <CardActions disableSpacing>
              <Checkbox {...label} />
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<StarBorder />}
                  checkedIcon={<StarRate sx={{ color: "yellow" }} />}
                />
              </IconButton>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Jon Smith
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur quos, quae eaque veniam temporibus facere...
                </Typography>
              </CardContent>
            </CardActions>
          </Card>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default MailBody;
