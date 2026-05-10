const ingredientFields = [
  {
    name: "name",
    label: "Ingredient Name",
    type: "text",
    placeholder: "Enter ingredient name",
    value: "Tomato",
  },
  {
    name: "quantity",
    label: "Quantity",
    type: "number",
    placeholder: "0",
    value: 0,
  },
  {
    name: "unit",
    label: "Unit",
    type: "select",
    options: ["Piece", "Kg", "Gram", "Liter"],
    value: "Piece",
  },
  {
    name: "minQuantity",
    label: "Minimum Quantity",
    type: "number",
    placeholder: "5",
    value: 5,
  },
];

export default ingredientFields;
