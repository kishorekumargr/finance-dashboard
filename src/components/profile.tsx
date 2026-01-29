import { Building2, Repeat, Settings } from "lucide-react";

function Profile() {
  return (
    <aside className="col-span-3 bg-white rounded-xl p-4 shadow space-y-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-linear-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>
        <p className="font-semibold mt-2">Ace</p>
        <p className="text-sm text-gray-500">Total: $19,842.12</p>
      </div>

      <div className="space-y-2">
        <Action icon={Settings} label="Account Settings" />
        <Action icon={Repeat} label="Transfer History" />
        <Action icon={Building2} label="Open Company Account" />
      </div>
    </aside>
  );
}

function Action({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      <Icon size={18} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default Profile;
