import { Box, Typography } from "@mui/material";

function TableHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        borderBottom: "2px solid black",
        paddingBottom: 1,
        mb: 2,
      }}
    >
      <Typography sx={{ flex: 2, textAlign: "right", fontWeight: "bold" }}>
        שם המנה
      </Typography>
      <Typography sx={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
        מחיר
      </Typography>
    </Box>
  );
}

export default TableHeader;
