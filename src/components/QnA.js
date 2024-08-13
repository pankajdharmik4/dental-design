import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const qnaData = [
  { question: "What is the fee for Patient Examination?", answer: "The private fee starts from £53.00. It's included in both Denplan Care and Denplan Essentials." },
  { question: "How much does a Private Cosmetic Consultation cost?", answer: "A Private Cosmetic Consultation starts from £175.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "What's the cost for a Private Implant Consultation?", answer: "A Private Implant Consultation starts from £175.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "How much does a Private Endodontic Consultation cost?", answer: "A Private Endodontic Consultation starts from £175.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "What's the fee for CBCT Scanner & Scans?", answer: "CBCT Scanner & Scans start from £206.00. This is not included in Denplan Care or Denplan Essentials." },
  { question: "How much do Routine X-rays cost?", answer: "Routine X-rays start from £18.50. They are included in both Denplan Care and Denplan Essentials." },
  { question: "What's the cost for Non-Routine X-rays?", answer: "Non-Routine X-rays start from £18.50. They are included in Denplan Care but not in Denplan Essentials." },
  { question: "How much do Fillings cost?", answer: "Fillings start from £128.00. They are included in Denplan Care but not in Denplan Essentials." },
  { question: "What's the fee for Root Canal Fillings?", answer: "Root Canal Fillings start from £215.00. They are included in Denplan Care but not in Denplan Essentials." },
  { question: "How much do Crowns cost?", answer: "Crowns start from £574.00. For Denplan Care, only the lab fee is charged. They are not included in Denplan Essentials." },
  { question: "What's the cost for Dentures?", answer: "Dentures start from £668.00. For Denplan Care, only the lab fee is charged. They are not included in Denplan Essentials." },
  { question: "How much does a Hygienist consultation cost?", answer: "A Hygienist consultation (45 mins) costs £96.00. It's included in both Denplan Care and Denplan Essentials." },
  { question: "What's the cost for Invisalign treatment?", answer: "Invisalign treatment ranges from £3,638.00 to £4,995.00 for both arches. This is not applicable to Denplan Care or Denplan Essentials." }
];

export const QnA = () => {
  return (
    <Box id="qna" sx={{ backgroundColor: '#FFF', py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4"
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
              borderBottom: '4px solid #13192d' // Adjust thickness and color as needed
            }}
            gutterBottom>
            Frequently Asked Questions
          </Typography>
          {/* <Divider sx={{ width: '60px', height: '3px', backgroundColor: '#007bff', mx: 'auto', mb: 3 }} /> */}
        </Box>
        <Box>
          {qnaData.map((item, index) => (
            <Accordion key={index} sx={{ mb: 2, boxShadow: 3, borderRadius: '8px', borderColor:'transparent' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ backgroundColor: '#FFF', color: '#000', fontWeight: 'bold' }}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#ffffff', color: '#555' }}>
                <Typography variant="body1">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
