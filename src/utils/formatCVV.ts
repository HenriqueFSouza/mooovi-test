export const formatCVV = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove todos os caracteres não numéricos
    .slice(0, 3); // Limita o comprimento total a 3 caracteres
};
