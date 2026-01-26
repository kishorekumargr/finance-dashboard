import { LayoutDashboard, Calendar, BarChart3, Scale, Inbox } from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Calendar, label: "Schedule" },
  { icon: BarChart3, label: "Insights" },
  { icon: Scale, label: "Legal" },
  { icon: Inbox, label: "Inbox" },
];

function Sidebar() {
  return (
    <aside className="col-span-2 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-purple-600">Finly</h2>
      <nav className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 text-gray-600 hover:text-purple-600 cursor-pointer"
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
