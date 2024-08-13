import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Container, Typography, TextField, Button, Grid, Paper, Divider, SvgIcon } from "@mui/material";
import { Facebook, Twitter, YouTube, MusicNote } from "@mui/icons-material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WeekendIcon from '@mui/icons-material/Weekend';

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box id="contact" sx={{ backgroundColor: '#13192d', color: '#fff', py: 8 }}>
      <Box paddingX={3}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 4 }}>
            Please fill out the form below to send us an email, and we will get back to you as soon as possible.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: '#fff', color: '#000' }}>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      variant="outlined"
                      required
                      onChange={handleChange}
                      value={name}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      required
                      onChange={handleChange}
                      value={email}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      onChange={handleChange}
                      value={message}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      // color="primary"
                      // fullWidth
                      sx={{ py: 1.5, backgroundColor: "#13192d", color: 'white' }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ color: '#fff' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Address:</strong> {props.data ? props.data.address : "loading"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Phone:</strong> {props.data ? props.data.phone : "loading"}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>Email:</strong> {props.data ? props.data.email : "loading"}
              </Typography>
              <Divider sx={{ mb: 3, bgcolor: '#fff' }} />
              <Typography variant="h6" sx={{ mb: 2 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <a href={props.data ? props.data.facebook : "/"}><Facebook sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#608dfd' } }} /></a>
                <a href={props.data ? props.data.twitter : "/"}><Twitter sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#1DA1F2' } }} /></a>
                <a href={props.data ? props.data.youtube : "/"}><MusicNote sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#1DA1F2' } }} /></a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Oepning Hours
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center', ml: 3, mb: 1 }} >
                <AccessTimeIcon sx={{ mr: 1 }} /> Monday - Friday: 9am - 8pm
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', ml: 3, mb: 1 }}>
                <CalendarTodayIcon sx={{ mr: 1 }} /> Saturday: 10am - 6pm
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', ml: 3, mb: 1 }} >
                <WeekendIcon sx={{ mr: 1 }} /> Sunday: Closed
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }} >
              Subscribe to our Newsletter
            </Typography>
            <form noValidate autoComplete="off">
              <Box paddingY={'19px'}>
                <TextField
                  placeholder="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: 'white', fontFamily: '"FontAwesome', fontSize: '10px', border: "red" }}
                />
              </Box>
              <Button variant="outlined" color="inherit" type="submit">
                Subscribe
              </Button>
            </form>
          </Grid> */}
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: '#f6f6f6', py: 3, textAlign: 'center', mt: 6 }}>
        <Typography variant="body2" sx={{ color: '#888' }}>
          Copyright &copy; 2024 Invasign All rights reserved
        </Typography>
        <Box sx={{ mt: 2 }}>
          <a href="#about" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>About Us</a>
          <a href="#services" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Services</a>
          <a href="#blog" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Blog</a>
          <a href="#privacy-policy" style={{ color: '#13192d', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a>
        </Box>
      </Box>
    </Box>
  );
};
