import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Container, Typography, TextField, Button, Grid, Paper, Divider } from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

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
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', mb: 4 }}>
            Please fill out the form below to send us an email, and we will get back to you as soon as possible.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
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
                      sx={{ py: 1.5, backgroundColor:"#13192d",color:'white' }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ color: '#fff' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Contact Info
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
                <a href={props.data ? props.data.youtube : "/"}><YouTube sx={{ fontSize: 30, color: '#fff', '&:hover': { color: '#FF0000' } }} /></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
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
