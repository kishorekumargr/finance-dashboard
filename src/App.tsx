import Cards from "./components/cards";
import Sidebar from "./components/sidebar";
import Transactions from "./components/transactions";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-linear-to-br from-sky-200 via-purple-200 to-pink-200 p-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl p-6 grid grid-cols-12 gap-6">
        <Sidebar />
        <div className="col-span-7 space-y-6">
          <h1 className="text-2xl font-bold">Hey there, Ace!</h1>
          <Cards />
          <Transactions />
        </div>
      </div>
    </main>
  );
}
