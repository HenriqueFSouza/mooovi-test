import { styled } from "@mui/material";
import txtField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const Wrapper = styled('div')`
  height: 100%;
  max-width:460px;
  width: 100%;

  @media(max-width: 500px){ 
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const InstallmentContainer = styled('div')`
  padding: 15px;
  width: 100%;
  height: auto;

  position: relative;
  margin-top: -2px;

  border: 2px solid #E5E5E5;
  border-radius: 10px;
  cursor: pointer;
  @media(max-width: 500px){ 
    padding: 10px;
  }
`
export const LabelContainer = styled('div')`
  padding-left: 15px;
  padding-right: 15px;
 
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: #E5E5E5;
  border-radius: 10px;

  position: absolute;
  top: -12px;

  font-weight: 800;
`
export const CashBackContainer = styled('div') <{ isSelected?: boolean }>`
  padding: 5px;
 
  background: #133A6F;
  border-radius: 5px;
  color: white;
  position: relative;
  ::after {
      content: '';
      position: absolute;
      top: 0px;
      right: -1px; 
      width: 0; 
      height: 0; 
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent; 
      border-right: 16px solid ${({ isSelected }) => isSelected ? '#F4FBF9' : '#fff'}; 
      border-radius: 5px;
    }
`
export const QRCodeWrapper = styled('div')`
  padding: 2px;
  
  width: min-content;

  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.palette.info.main};
  border-radius: 5px;
`
export const GreenBox = styled('div') <{ isGreen?: boolean }>`
  width: 16px;
  height: 16px;

  border: 1px solid ${({ isGreen }) => isGreen ? "#03D69D" : '#E5E5E5'} ;
  border-radius: 50%;
`
export const Line = styled('div')`
  width: 1px;
  height: 24px;

  background-color: #E5E5E5;
`
export const Form = styled('form')`
  width: 100%;
  
  display: flex;
  flex-direction: column;
`
export const TextField = styled(txtField)`
  margin: 8px 0;
  width: 100%;

  @media (max-width: 500px) {
    margin: 10px 0;
  }

  input {
    font-size: 1rem;
  }

  .MuiInputBase-root {
    fieldset {
      border: 2px solid white;
      border-color: #E5E5E5;
      border-radius: 8px;
    }
    fieldset:focus {
      border: 2px solid #E5E5E5;
    }
  }
`;
export const SelectFormControl = styled(FormControl)`
  margin: 1rem 0;
  text-align: left;

  .Mui-focused {
    color: ${({ theme }) => theme.palette.text.primary} !important;
    fieldset {
      border: 2px solid #E5E5E5;
      border-color: #E5E5E5;
    }
  }

  .MuiInputBase-root {
    fieldset {
      border: 2px solid white;
      border-color: #E5E5E5;
      border-radius: 8px;
    }
    fieldset:focus {
      border: 1px solid white;
    }
  }
  svg { 
    fill: #E5E5E5;
  }
`;