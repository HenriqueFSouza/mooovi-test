
import { Box, Button } from "@mui/material"
import { Data } from "@/app/page"
import PaymentFooter from "../Footer"
import { Form, SelectFormControl } from "../styles"
import InputField from "../InputField"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { formatCurrency } from "@/utils/formatCurrency"
import { useForm, Controller, FieldValues } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { formatCPF } from "@/utils/formatCPF"
import { formatCreditCardNumber } from "@/utils/formatCardNumber"
import { formatExpirationDate } from "@/utils/formatExpiryDate"
import { formatCVV } from "@/utils/formatCVV"
import { useCallback } from "react"

const creditCardSchema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  cpf: z.string().min(14, "CPF inválido").max(14, "CPF inválido"),
  cardNumber: z.string().min(19, "Número do cartão inválido").max(19, "Número do cartão inválido"),
  expirationDate: z.string().min(5, "Data de vencimento inválida").max(5, "Data de vencimento inválida"),
  cvv: z.string().min(3, "CVV inválido").max(4, "CVV inválido"),
});

const CreditCard: React.FC<{
  data: Data
}> = ({
  data,
}) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(creditCardSchema)
    });

    const onSubmit = useCallback((data: FieldValues) => {
      console.log(data)
    }, [])

    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={2}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Nome completo"
                error={!!errors.fullName}
                helperText={errors.fullName ? String(errors.fullName?.message) : ''}
              />
            )}
          />
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="CPF"
                error={!!errors.cpf}
                helperText={errors.cpf ? String(errors.cpf?.message) : ''}
                onChange={(e) => field.onChange(formatCPF(e.target.value))}
              />
            )}
          />
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Número do cartão"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? String(errors.cardNumber?.message) : ''}
                onChange={(e) => field.onChange(formatCreditCardNumber(e.target.value))}
              />
            )}
          />
          <Box display="flex" gap={2}>
            <Controller
              name="expirationDate"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label="Vencimento"
                  error={!!errors.expirationDate}
                  helperText={errors.expirationDate ? String(errors.expirationDate.message) : ''}
                  onChange={(e) => field.onChange(formatExpirationDate(e.target.value))}
                />
              )}
            />
            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label="CVV"
                  error={!!errors.cvv}
                  helperText={errors.cvv ? String(errors.cvv.message) : ''}
                  onChange={(e) => field.onChange(formatCVV(e.target.value))}
                />
              )}
            />
          </Box>
          <SelectFormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Parcelas</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Parcelas"
            >
              {data.method && <MenuItem value={10}>1x de {formatCurrency(data.method.value)}</MenuItem>}
            </Select>
          </SelectFormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: '10px',
              textTransform: 'none',
            }}
          >
            Pagar
          </Button>
        </Form>
        {data.method && <PaymentFooter data={data.method} isCreditCard />}
      </Box>
    );
  }

export default CreditCard
