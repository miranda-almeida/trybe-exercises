const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: { // order.order.pizza[0]
        amount: 1,
        price: 25,
      },
      pepperoni: { // order.order.pizza[1]
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero', // order.order.drinks[0]
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

console.log(Object.values(order.order.drinks.coke)[0]);

  // order.name = 'Luiz Silva';
  // console.log(order);

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// captura nome 'Rafael Andrade'
const cliente = Object.values(order)[0];
const pagamento = Object.values(order.payment);

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // captura nome 'Ana Silveira'
  const entregadore = Object.values(order.order.delivery)[0];
  // captura telefone
  const telefone = Object.values(order)[1];
  // captura rua
  const rua = Object.values(order.address)[0];
  // captura número
  const numero = Object.values(order.address)[1];
  // captura apto
  const apto = Object.values(order.address)[2];
  // mensagem de retorno de customerInfo();
  return `Olá ${entregadore}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${apto}.`;
};

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // modifica o nome da pessoa compradora.
  order.name = 'Luiz Silva';
  // modifica o valor total da compra para R$ 50,00
  order.payment = '50';
  const marguerita = Object.keys(order.order.pizza)[0];
  const pepperoni = Object.keys(order.order.pizza)[1];
  const coca = Object.values(order.order.drinks.coke)[0];
  return `Olá ${cliente}, o total do seu pedido de ${marguerita}, ${pepperoni} e ${coca}, é R$ ${pagamento},00.`;
}

console.log(orderModifier(order));

