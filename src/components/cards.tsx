function Cards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div
        className="rounded-xl text-white p-5 bg-linear-to-br from-[#6EE7F9] to-[#A78BFA]
 shadow-lg"
      >
        <p className="text-sm opacity-80">Visa Standard</p>
        <p className="text-2xl font-bold">$7,983.02</p>
        <p className="mt-4 text-sm">4012 •••• 7892</p>
        <p className="text-xs">Exp 05/23</p>
      </div>

      <div className="rounded-xl text-white p-5 bg-linear-to-br from-[#FBCFE8] to-[#93C5FD] shadow-lg">
        <p className="text-sm opacity-80">Visa Premium</p>
        <p className="text-2xl font-bold">$8,172.72</p>
        <p className="mt-4 text-sm">3781 •••• 7882</p>
        <p className="text-xs">Exp 04/22</p>
      </div>
    </div>
  );
}

export default Cards;
