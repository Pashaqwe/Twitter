import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useState } from "react";

function PasswordInput({
  sx,
  variant,
  fullWidth,
  id,
  name,
  label,
  value,
  error,
  helperText,
  onChange,
  size,
}: TextFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = () => setIsVisible((prev) => !prev);

  return (
    <TextField
      type={isVisible ? "text" : "password"}
      sx={sx}
      variant={variant}
      fullWidth={fullWidth}
      id={id}
      name={name}
      label={label}
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
      size={size}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleVisibilityChange}
              edge="end"
            >
              {isVisible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordInput;
