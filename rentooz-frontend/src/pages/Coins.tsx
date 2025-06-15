
import { Coins as CoinsIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'earned',
    amount: 500,
    description: 'Donated summer collection',
    date: '2024-03-15'
  },
  {
    id: 2,
    type: 'spent',
    amount: 200,
    description: 'Discount on rental dress',
    date: '2024-03-10'
  }
];

export default function Coins() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CoinsIcon className="h-8 w-8 text-yellow-500 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">2,500</h2>
                <p className="text-sm text-gray-500">Available Coins</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Earn More Coins
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
          </div>
          <div className="divide-y">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  {transaction.type === 'earned' ? (
                    <ArrowUpRight className="h-5 w-5 text-green-500 mr-3" />
                  ) : (
                    <ArrowDownRight className="h-5 w-5 text-red-500 mr-3" />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <span className={`font-medium ${
                  transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'earned' ? '+' : '-'}{transaction.amount} coins
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}