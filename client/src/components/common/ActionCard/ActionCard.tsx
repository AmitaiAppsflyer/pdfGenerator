import { Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { type ActionCardProps } from './types';

const ActionCard = ({ 
  children, 
  maxWidth = 600, 
  elevation = 3 
}: ActionCardProps) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        maxWidth,
        width: '100%',
        borderRadius: "25px",
        background: `rgba(${theme.palette.mode === 'dark' ? '255, 255, 255' : '139, 126, 194'}, 0.15)`,
        backdropFilter: 'blur(10px)',
      }}
      elevation={elevation}
    >
      <CardContent sx={{ padding: 3 }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default ActionCard; 