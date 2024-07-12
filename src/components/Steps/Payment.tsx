'use client'
import { Data } from "@/app/page"
import { formatCurrency } from "@/utils/formatCurrency"
import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import { QRCodeWrapper } from "../styles"
import FileCopy from "@material-ui/icons/FileCopy"
import PaymentFooter from "../Footer"
import { useState } from "react"



const Payment: React.FC<{
  data: Data
  handleFinishStep(data: object): void
}> = ({
  data,
  handleFinishStep
}) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText('qr-code-copiado!')
      setCopied(true)
      if (data.method?.quantity !== 1) {
        setTimeout(() => handleFinishStep(data), 2000)
      }
    }

    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        px={2}
      >
        <Typography
          mb={2}
          fontWeight={800}
          fontSize={20}
          textAlign="center"
          mx='auto'
          maxWidth={350}
        >
          {data.method && data?.method.quantity != 1 && (
            `João, pague a entrada de ${formatCurrency(data?.method.value)} pelo Pix`
          )}
          {data.method && data?.method.quantity == 1 && (
            `João, realize o seu pagamento de ${formatCurrency(data.method.value)} pelo Pix`
          )}
        </Typography>

        <QRCodeWrapper  >
          <Image
            src='/qrcode.png'
            alt='qr-code'
            width={330}
            height={330}
          />
        </QRCodeWrapper>

        <Button
          endIcon={<FileCopy />}
          variant="contained"
          sx={{
            marginTop: '16px',
            textTransform: 'none',
            backgroundColor: copied ? 'green !important' : ''
          }}
          onClick={() => handleCopy()}
        >
          {copied ? 'QR CODE COPIADO!' : 'Clique aqui para copiar o QR CODE'}
        </Button>

        <Typography
          mt={3}
          variant='body2'
          textAlign="center"
          color="text.secondary"
          mx='auto'
        >
          Prazo de pagamento:
        </Typography>
        <Typography fontWeight={800}>25/07/2024</Typography>

        {data.method && <PaymentFooter data={data.method} />}


      </Box>
    )
  }

export default Payment