//import * as React from "react";
import React, { useState } from "react";
//import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const useStyles = styled((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function App() {
  const [Forms, setForms] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const validateAndSubmitForm = (e) => {
    e.preventDefault();

    const errors = {};

    if (!isEmail(Forms.email)) {
      errors.email = "Wrong email";
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      alert(JSON.stringify(Forms, null, 2));
    }
  };

  const setEmail = (e) => {
    setForms((Forms) => ({ ...Forms, email: e.target.value }));
  };

  const handleChange = (e) => {
    setForms((Forms) => ({ ...Forms, [e.target.name]: e.target.value }));
    //setValues((Forms) => ({ ...Forms, email: e.target.value }));
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getValues = () => {
    const arr = [];

    for (const key in Forms) {
      arr.push({ key, value: Forms[key] });
    }

    return arr;
  };

  return (
    <form onSubmit={validateAndSubmitForm}>
      <React.Fragment>
        <Grid
          container
          spacing={3}
          align="start"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          {/* price */}
          <Grid item xs={12}>
            <Typography
              className="text-start"
              variant="h6"
              gutterBottom
              align="start"
            >
              How much do you want to invest?
            </Typography>
            <TextField
              required
              className="mt-8 mb-16"
              label="Tax Excluded Price"
              name="Price :"
              id="priceTaxExcl"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={handleChange}
              type="number"
              variant="outlined"
              autoFocus
              fullWidth
            />
          </Grid>

          {/* Money Invest */}
          <Grid item xs={12}>
            <Typography
              className="text-start"
              variant="h6"
              gutterBottom
              align="start"
            >
              How long can you keep your money invested?
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name=" money invested :"
              >
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year1"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="1"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio
                      onChange={handleChange}
                      id="yea2r"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="2"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio
                      onChange={handleChange}
                      id="yea3r"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="3"
                />
                <FormControlLabel
                  value="4"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year4"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="4"
                />
                <FormControlLabel
                  value="5"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year5"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="5"
                />
                <FormControlLabel
                  value="6"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year6"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="6"
                />
                <FormControlLabel
                  value="7"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year7"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="7"
                />
                <FormControlLabel
                  value="8"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year8"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="8"
                />
                <FormControlLabel
                  value="9"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year9"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="9"
                />
                <FormControlLabel
                  value="10"
                  //disabled
                  control={
                    <Radio
                      onChange={handleChange}
                      id="year10"
                      color="secondary"
                    />
                  }
                  color="secondary"
                  label="10"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/*  */}
          <Grid item xs={12}>
            {/* <TextField
          required
          id="iman1"
          name="iman2"
          label="iman"
          fullWidth
          value={Forms.iman2 || ""}
          onChange={handleChange}
          autoComplete="family-name"
          variant="standard"
        /> */}
          </Grid>

          {/* Looose Invest */}
          <Grid item xs={12}>
            <Typography
              className="text-start"
              variant="h6"
              gutterBottom
              align="start"
            >
              Are you prepared to lose some or all of your investment?
            </Typography>

            <FormControl>
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="lose investment :"
              >
                <FormControlLabel
                  value="I can tolerate loosing all or a big portion of my money, i want to maximize my chance of making more money"
                  control={<Radio onChange={handleChange} color="secondary" />}
                  label="I can tolerate loosing all or a big portion of my money, i want to maximize my chance of making more money"
                />
                <FormControlLabel
                  value="I can take some risk to make more money, but i can't lost more than a quater of my money"
                  control={<Radio onChange={handleChange} color="secondary" />}
                  label="I can take some risk to make more money, but i can't lost more than a quater of my money
"
                />
                <FormControlLabel
                  value="I will be very uncomfortable loosing more than 10% and axxept lower return"
                  control={<Radio onChange={handleChange} color="secondary" />}
                  label="I will be very uncomfortable loosing more than 10% and axxept lower return
              "
                />
                <FormControlLabel
                  value="I want the safest investment possible"
                  control={<Radio onChange={handleChange} color="secondary" />}
                  label="I want the safest investment possible"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <Typography
              className="text-start"
              variant="h6"
              gutterBottom
              align="start"
            >
              Email address
            </Typography>
            <TextField
              required
              // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              id="userEmail"
              name="email"
              label="name@example.com"
              type="email"
              fullWidth
              value={Forms.email || ""}
              onChange={setEmail}
              autoComplete="shipping address-line1"
              variant="outlined"
            />
          </Grid>

          {Object.entries(errors).map(([key, error]) => (
            <span
              key={`${key}: ${error}`}
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {key}: {error}
            </span>
          ))}
        </Grid>
        <br />
        <br />
        <br />

        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpen}
          className="mb-80"
          type="submit"
        >
          Show Modal
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="container">
                <List disablePadding>
                  <List disablePadding>
                    {getValues().map((item) => (
                      <ListItem key={item.key} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={item.key} />
                        <Typography variant="body2">{item.value}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </List>
              </div>
            </Box>
          </Fade>
        </Modal>
      </React.Fragment>
    </form>
  );
}
