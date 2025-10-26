import { Box, Typography } from "@mui/material";
import type { MenuItemDetails } from "../pages/menuPage";
import MenuItem from "./common/menuItem";

type ItemListProps = {
  menuItems: MenuItemDetails[];
  deleteMenuItem: (itemName: string) => void;
};

function ItemList({ menuItems, deleteMenuItem }: ItemListProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {menuItems.length === 0 ? (
        <Typography sx={{ textAlign: "right" }}>
          אין פריטים בתפריט המנות
        </Typography>
      ) : (
        menuItems.map((item) => (
          <MenuItem
            name={item.name}
            price={item.price}
            deleteMenuItem={() => deleteMenuItem(item.name)}
          />
        ))
      )}
    </Box>
  );
}

export default ItemList;
