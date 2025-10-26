import { Box, Button } from "@mui/material";
import FormInput from "./common/formInput";
import type { FormEvent } from "react";
import type { MenuItemDetails } from "../pages/menuPage";

type MenuItemFormProps = {
  addMenuItem: (item: MenuItemDetails) => void;
  openMenuForm: () => void;
};

function MenuItemForm({ addMenuItem, openMenuForm }: MenuItemFormProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const itemPrice = formData.get("price") as string | null;

    if (!name || !itemPrice) {
      alert("בבקשה הוסף מידע לכלל השדות");
      return;
    }

    const price = Number(itemPrice);

    addMenuItem({ name, price });

    form.reset();
    openMenuForm();
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <FormInput label="שם המנה" type="text" name="name" />
      <FormInput label="מחיר" type="number" name="price" />
      <Button type="submit" variant="contained" color="success">
        הוסף פריט
      </Button>
    </Box>
  );
}

export default MenuItemForm;
