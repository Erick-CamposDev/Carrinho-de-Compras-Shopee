export function addItem(userCart, item) {
  userCart.push(item);
  console.log(`O produto ${item.name} foi adicionado ao carrinho! ✅`);
}

export function removeItem(userCart, item) {
  const foundItem = userCart.find((p) => item.name === p.name);

  if (!foundItem) {
    console.log("Item não encontrado!");
    return;
  }

  if (foundItem.quantity <= 1) {
    console.log(`O produto ${foundItem.name} foi removido do carrinho! ❌`);

    const index = userCart.indexOf(foundItem);
    userCart.splice(index, 1);
  } else {
    foundItem.quantity--;
  }
}

export function deleteItem(userCart, item) {
  const itemFound = userCart.find((p) => item.name === p.name);

  if (!itemFound) {
    console.log("Item não encontrado!");
    return;
  } else {
    const index = userCart.indexOf(itemFound);

    userCart.splice(index, 1);

    console.log(`O produto ${itemFound.name} foi deletado da lista! ✖`);
  }
}

export function displayCart(userCart) {
  if (userCart.length <= 0) {
    console.log("Não possui nada no carrinho!");
    return;
  }

  console.log("PRODUTOS ADICIONADOS NO CARRINHO!");
  userCart.forEach((p) => {
    console.log(
      `NOME DO PRODUTO: ${p.name}\nPREÇO: ${p.price.toFixed(2)}R$\nQUANTIDADE: ${p.quantity}\nSUBTOTAL: ${p.getSubtotal().toFixed(2)}R$`,
    );
    console.log("---------------------------");
  });
}

export function calcTotal(userCart) {
  const result = userCart.reduce((tot, p) => tot + p.getSubtotal(), 0);
  console.log(`TOTAL: ${result.toFixed(2)}R$`);
}
