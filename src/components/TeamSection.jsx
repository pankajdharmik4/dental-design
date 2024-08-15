import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const teamMembers = [
    {
        name: 'John Doe',
        experience: '5 years',
        introduction: 'John is a seasoned developer with expertise in frontend technologies.',
        image: 'https://img.freepik.com/free-photo/female-doctor-lab-coat-white-isolated-confident-smile_343596-6556.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    {
        name: 'Jane Smith',
        experience: '8 years',
        introduction: 'Jane is a project manager who ensures everything runs smoothly.',
        image: 'https://img.freepik.com/premium-photo/doctor-physician-person-concept_1194-605094.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
    },
    {
        name: 'John Doe',
        experience: '5 years',
        introduction: 'John is a seasoned developer with expertise in frontend technologies.',
        image: 'https://img.freepik.com/free-photo/portrait-friendly-smiling-male-doctor-man_171337-5064.jpg?size=626&ext=jpg&ga=GA1.1.839097493.1723665678&semt=ais_hybrid'
        // image: 'data:image/jpeg;base64,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'
    },
    // Add more team members as needed
];


export const TeamSection = () => {
    return (
        <Box id="team" sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block',
                            mb: 2,
                            borderBottom: '4px solid #13192d' // Adjust thickness and color as needed
                        }}
                        gutterBottom
                    >
                        Our Team
                    </Typography>
                    <Typography variant="body1">
                        Meet our dedicated team of professionals who work tirelessly to deliver the best results.
                    </Typography>
                </Box>
                <Grid container spacing={6}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                                border: '1px solid #e0e0e0' // Add a faint border
                            }}>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    image={member.image}
                                    alt={member.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Experience: {member.experience}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.introduction}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
