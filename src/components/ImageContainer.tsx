import Box from "@mui/material/Box";
import React from "react";

export const ImageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box py={5}>
      {children}
    </Box>
  )
} 