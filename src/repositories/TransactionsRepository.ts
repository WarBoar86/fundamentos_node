import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO

    const types: Record<string, number> = this.transactions.reduce(
      (acc, obj) => {
        const { type } = obj;

        if (type === 'income') {
          acc.income += obj.value;
        } else {
          acc.outcome += obj.value;
        }
        return acc;
      },
      { income: 0, outcome: 0 },
    );
    const ballance: Balance = {
      income: types.income,
      outcome: types.outcome,
      total: types.income - types.outcome,
    };

    return ballance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO

    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
