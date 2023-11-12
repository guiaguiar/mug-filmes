"use client"
import { Button, useTheme } from "@mui/material";

interface ButtonProps {
  label?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: number;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, height, fontSize, fontWeight, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      sx={{
        height: height || '36px',
        fontSize: fontSize || '16px',
        borderRadius: 0,
        fontWeight: fontWeight || 400,
        display: 'flex',
        paddingRight: 3,
        paddingLeft: 3,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        ':hover': {
          backgroundColor: '#00277A',
          color: theme.palette.text.primary,
        }
      }}
    >
      {label}
    </Button>
  )
}

export default CustomButton;