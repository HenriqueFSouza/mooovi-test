'use client'
import Box from "@mui/material/Box";
import React from "react";
import { CashBackContainer, InstallmentContainer, LabelContainer } from "./styles";
import { Checkbox, Typography, useTheme } from "@mui/material";
import { formatCurrency } from "@/utils/formatCurrency";
import CircleChecked from "./../../public/checked";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";


type Props = {
  label?: string;
  quantity: number;
  installmentValue: number;
  cashback?: number;
  borderRadius?: string;
  bestOption?: string;
  isSelected: boolean;
  onSelect: () => void;
}
export const InstallmentComponent = ({
  label,
  quantity,
  installmentValue,
  cashback,
  borderRadius,
  bestOption,
  isSelected,
  onSelect,
}: Props) => {
  const theme = useTheme()
  return (
    <InstallmentContainer
      sx={{
        borderRadius: borderRadius,
        borderColor: isSelected ? theme.palette.info.main : '',
        marginBottom: isSelected ? '2px' : '',
        background: isSelected ? '#F4FBF9' : ''
      }}
      onClick={onSelect}
    >
      <LabelContainer>
        <p>{label}</p>
      </LabelContainer>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box m={0}>
          <Typography color='text.primary' fontSize={24}>
            <strong>{quantity}x</strong>{' '}{formatCurrency(installmentValue)}
          </Typography>
          {quantity != 1 && (
            <Typography variant='body2' color='text.secondary'>
              Total: {formatCurrency(quantity * installmentValue)}
            </Typography>
          )}
        </Box>

        <Checkbox
          icon={<CircleUnchecked />}
          checkedIcon={<CircleChecked />}
          checked={isSelected}
        />
      </Box>

      {cashback && (
        <Box>
          <Typography color="info.main" fontWeight='bold'>
            Ganhe {cashback}% de Cashback
          </Typography>

          <CashBackContainer>
            🤑 <strong>{formatCurrency((quantity * installmentValue) / 100)}</strong> de volta no seu Pix na hora
          </CashBackContainer>
        </Box>
      )}
      {bestOption && (
        <CashBackContainer isSelected={isSelected}>
          <strong>{bestOption} de juros:</strong> Melhor opção de parcelamento
        </CashBackContainer>
      )}
    </InstallmentContainer>
  )
} 