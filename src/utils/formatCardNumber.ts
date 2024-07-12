export const formatCreditCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .replace(/(\d{4})(?=\d)/g, '$1 ') // Adiciona um espaço após cada bloco de 4 dígitos
    .slice(0, 19); // Limita o comprimento total a 19 caracteres (16 dígitos + 3 espaços)
};