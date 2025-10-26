import { Box, Input, InputLabel } from "@mui/material";

type FormInputProps = {
  label: string;
  type: "text" | "number";
  name: string;
};

function FormInput({ label, type, name }: FormInputProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <InputLabel sx={{ textAlign: "right" }}>{label}</InputLabel>
      <Input
        name={name}
        type={type}
        sx={{ border: "1px solid #ccc", direction: "rtl" }}
      />
    </Box>
  );
}

export default FormInput;
