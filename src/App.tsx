import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-sky-200 via-purple-200 to-pink-200 p-6">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl p-6 grid grid-cols-12 gap-6">
        <Sidebar />
      </div>
    </main>
  );
}
