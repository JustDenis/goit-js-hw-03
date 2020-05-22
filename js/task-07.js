/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  transactionId: 0,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let transaction = {};
    return transaction = {
      amount,
      type,
      id: (this.transactionId += 1),
      };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, 'deposit'));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance){
      console.log(`Снятие суммы ${amount} невозможно. Недостаточно средств!`);
    } else{
      this.balance = this.balance - amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Ваш баланс ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transactionItem of this.transactions){
      if(id === transactionItem.id){
        return transactionItem;
      } 
    }
    return 'Транзакции с таким ID не существует!';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let transactionItem of this.transactions){
      if (type === transactionItem.type){
        total +=transactionItem.amount;
      }
    }
    return total;
  },
};

account.deposit(900);
account.deposit(400);
account.deposit(1000);
account.withdraw(900);
account.withdraw(700);
// console.log(account.transactions); // Массив транзакций
console.log(account.getBalance()); // Проверка баланса
console.log(account.getTransactionDetails(5)); // Проверка транзакции по ID
console.log('Колличество средств по данному типу транзакций: ', account.getTransactionTotal('withdraw')); // Общая сумма транзакций по типу

