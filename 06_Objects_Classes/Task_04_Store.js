function solve(input = []) {
  const [currentStock, delivery] = input
  const store = {}
  for (let i = 0; i < currentStock.length; i += 2) {
    store[currentStock[i]] = Number(currentStock[i + 1])
  }
  for (let i = 0; i < delivery.length; i += 2) {

    if (store.hasOwnProperty(delivery[i])) {
      const currentStoreQty = store[delivery[i]]
      store[delivery[i]] = currentStoreQty + Number(delivery[i + 1])
    } else {
      store[delivery[i]] = Number(delivery[i + 1])
    }
  }
  console.log(store);
}
solve([
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
])