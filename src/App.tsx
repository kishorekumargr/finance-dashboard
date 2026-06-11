import Cards from "./components/dashboard/cards";
import Profile from "./components/dashboard/profile";
import Sidebar from "./components/dashboard/sidebar";
import Transactions from "./components/dashboard/transactions";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-10 grid grid-cols-12 gap-6">
      <Sidebar />
      <div className="col-span-7 space-y-6">
        <Cards />
        <Transactions />
      </div>
      <Profile />
    </div>
  );
}
