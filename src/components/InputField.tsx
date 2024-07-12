import { FC } from 'react';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { TextField } from './styles';

const InputField: FC<
  TextFieldProps & { register?: any }
> = (props) => {
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};

export default InputField;