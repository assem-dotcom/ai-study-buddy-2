import React, { useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import axios from 'axios';

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const convertToSpeech = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM',
        {
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        },
        {
          headers: {
            'Accept': 'audio/mpeg',
            'xi-api-key': process.env.REACT_APP_ELEVENLABS_API_KEY || '',
            'Content-Type': 'application/json'
          },
          responseType: 'blob'
        }
      );

      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error('Error converting text to speech:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={convertToSpeech}
        disabled={isLoading}
        startIcon={isLoading ? <CircularProgress size={20} /> : <VolumeUpIcon />}
      >
        {isLoading ? 'Converting...' : 'Listen'}
      </Button>
      {audioUrl && (
        <audio controls src={audioUrl} style={{ maxWidth: '300px' }} />
      )}
    </Box>
  );
};

export default TextToSpeech; 