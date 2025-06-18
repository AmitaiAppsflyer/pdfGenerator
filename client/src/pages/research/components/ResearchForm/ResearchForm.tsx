import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import { type ResearchFormProps } from './types';

const ResearchForm = ({ onSubmit, isLoading = false }: ResearchFormProps) => {
  const [prompt, setPrompt] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Basic validation
    if (prompt.trim()) {
      onSubmit?.(prompt.trim());
    }
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom
        sx={{ 
          textAlign: 'center',
          fontWeight: 600,
          mb: 2,
          color: 'white'
        }}
      >
        AI Research Assistant
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          textAlign: 'center',
          mb: 4,
          color: 'white'
        }}
      >
        Enter your research topic below and our AI will generate a comprehensive report for you.
      </Typography>

      <TextField
        fullWidth
        multiline
        maxRows={4}
        variant="outlined"
        placeholder="Enter your research topic or question here..."
        value={prompt}
        onChange={handlePromptChange}
        sx={{ 
          mb: 3,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: '10px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '10px',
            },
          }
        }}
        disabled={isLoading}
      />

      <PrimaryButton
        type="submit"
        fullWidth
        isLoading={isLoading}
        disabled={!prompt.trim() || isLoading}
        textColor="white"
      >
        Generate Report
      </PrimaryButton>
    </Box>
  );
};

export default ResearchForm; 