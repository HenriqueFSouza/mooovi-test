export const formatExpirationDate = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .replace(/(\d{2})(\d)/, '$1/$2') // Adiciona uma barra após os primeiros dois dígitos
    .slice(0, 5); // Limita o comprimento total a 5 caracteres (MM/AA)
};