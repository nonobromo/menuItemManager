import {
  Box,
  Button,
  Container,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { menu } from "../data/menu.json";

import MenuItemForm from "../components/menuItemForm";
import TableHeader from "../components/tableHeader";
import ItemList from "../components/itemList";

export type MenuItemDetails = {
  name: string;
  price: number;
};

function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItemDetails[]>(() => {
    const storedMenu = localStorage.getItem("menuItems");
    return storedMenu ? JSON.parse(storedMenu) : menu;
  });
  const [menuItemForm, openMenuItemForm] = useState(false);
  const [search, setSearch] = useState("");
  let displayedMenuItems = [];

  displayedMenuItems = search
    ? menuItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : menuItems;

  function openMenuForm() {
    openMenuItemForm((perv) => !perv);
  }

  function addMenuItem(item: MenuItemDetails) {
    setMenuItems((perv) => {
      return [...perv, item];
    });
  }

  function deleteMenuItem(itemName: string) {
    setMenuItems((prev) => prev.filter((item) => item.name !== itemName));
  }

  useEffect(() => {
    const storedMenu = localStorage.getItem("menuItems");

    if (storedMenu) {
      setMenuItems(JSON.parse(storedMenu));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
  }, [menuItems]);

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h1"
        component="h1"
        textAlign="center"
        mt={3}
        fontSize={{ xs: "2rem", md: "5rem" }}
      >
        ניהול רשימת מנות
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          marginTop: "40px",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={openMenuForm}
          sx={{
            justifyContent: "flex-end",
            width: { xs: "120px", md: "auto" },
          }}
        >
          הוספת פריט
        </Button>

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            border: "1px solid #ccc",
            direction: "rtl",
          }}
          placeholder="המבורגר"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon sx={{ marginRight: 1 }} />
            </InputAdornment>
          }
        />
      </Box>
      <Box mt={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            marginBottom: 5,
          }}
        >
          {menuItemForm && (
            <MenuItemForm
              addMenuItem={addMenuItem}
              openMenuForm={openMenuForm}
            />
          )}
        </Box>

        <TableHeader />
        <ItemList
          deleteMenuItem={deleteMenuItem}
          menuItems={displayedMenuItems}
        />
      </Box>
    </Container>
  );
}

export default MenuPage;
