import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import backgroundVideo from '../assets/2.mp4';

export const Header = (props) => {
  const [showForm, setShowForm] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <header id="header">
      <Box className="video-container" sx={{ position: 'relative', overflow: 'hidden', height: '80vh' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box className="overlay" sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          color: 'white', textAlign: 'center', p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }} // Responsive font size
            >
              {props.data ? props.data.title : "Loading"}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} // Responsive font size
            >
              {props.data ? props.data.paragraph : "Loading"}
            </Typography>
            <Button
              variant="contained"
              onClick={handleFormToggle}
              sx={{
                mt: 3,
                backgroundColor: '#13192d',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, // Responsive font size
                padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' } // Responsive padding
              }}
            >
              Book a free consultation
            </Button>
          </motion.div>
        </Box>
      </Box>
      <ConsultationForm open={showForm} onClose={handleFormToggle} />
    </header>
  );
};

const ConsultationForm = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" width={"80%"}>
      <DialogTitle marginBottom={1}>Consultation Form</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth required />
          <TextField label="Email" type="email" variant="outlined" fullWidth required />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="Phone Number" type="tel" variant="outlined" fullWidth required />
            <TextField
              // label="Preferred Consultation Date/Time" 
              type="datetime-local" variant="outlined" fullWidth required />
          </Box>
          <TextField label="Additional Comments" multiline rows={4} variant="outlined" fullWidth />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
