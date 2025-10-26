import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type MenuItemProps = {
  name: string;
  price: number;
  deleteMenuItem: (itemName: string) => void;
};

function MenuItem({ name, price, deleteMenuItem }: MenuItemProps) {
  return (
    <Box
      key={name}
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        paddingY: 1,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Typography sx={{ flex: 2, textAlign: "right" }}>{name}</Typography>
      <Typography sx={{ flex: 1, textAlign: "right" }}>{price}₪</Typography>

      <DeleteIcon
        sx={{ color: "red", cursor: "pointer" }}
        onClick={() => deleteMenuItem(name)}
      />
    </Box>
  );
}

export default MenuItem;
