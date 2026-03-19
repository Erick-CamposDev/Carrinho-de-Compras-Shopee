export default function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    getSubtotal: () => price * quantity,
  };
}
