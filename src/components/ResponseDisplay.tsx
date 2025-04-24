import React from 'react';
import { Paper, Typography, CircularProgress, Box } from '@mui/material';
import TextToSpeech from './TextToSpeech';

interface ResponseDisplayProps {
  response: string | null;
  isLoading: boolean;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, isLoading }) => {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (!response) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Generated Response
      </Typography>
      <Typography
        component="div"
        sx={{
          whiteSpace: 'pre-wrap',
          '& p': { mb: 2 },
          '& ul, & ol': { pl: 3, mb: 2 }
        }}
      >
        {response}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextToSpeech text={response} />
      </Box>
    </Paper>
  );
};

export default ResponseDisplay; 