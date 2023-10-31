import { Button, useTheme } from "@mui/material";
import { useState } from "react";

interface ButtonProps {
  label?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ label }) => {
  const [hover, setHover] = useState<boolean>(false);
  const theme = useTheme();
  
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        height: '36px',
        fontSize: '16px',
        borderRadius: 0,
        fontWeight: 400,
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