const data = [
  { name: "Restaurant food", amount: -32.91, time: "6:11 PM" },
  { name: "From Joe", amount: 100, time: "1:21 PM" },
  { name: "Shopping cashback", amount: 4.11, time: "11:21 AM" },
  { name: "For Tom’s gift", amount: -98, time: "8:32 PM" },
];

function Transactions() {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h3 className="font-semibold mb-3">Recent transactions</h3>
      <div className="space-y-3">
        {data.map((tx) => (
          <div key={tx.name} className="flex justify-between items-center">
            <span>{tx.name}</span>
            <div className="flex items-center gap-4">
              <span className={tx.amount > 0 ? "text-green-500" : "text-red-500"}>
                {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount)}
              </span>
              <span className="text-sm text-gray-400">{tx.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-3 py-2 text-sm border text-white rounded-lg">See all history</button>
        <button className="px-3 py-2 text-sm bg-purple-600 text-white rounded-lg">
          New transfer
        </button>
      </div>
    </div>
  );
}

export default Transactions;
