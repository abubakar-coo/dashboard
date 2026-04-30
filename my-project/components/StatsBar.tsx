import Image from "next/image";

const stats = [
  { label: "CO2 Savings", value: "0", icon: null, color: "", customImg: null },
  { label: "Closed", value: "1", icon: null, color: "", customImg: "/file-check.png" },
  { label: "Pending", value: "0", icon: null, color: "", customImg: "/clock-arrow-down.png" },
  { label: "Drafts", value: "2", icon: null, color: "", customImg: "/header-menu-item-left.png" },
];

export default function StatsBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="flex items-stretch divide-x divide-gray-200" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        {stats.map(({ label, value, icon: Icon, color, customImg }, index) => (
          <button
            key={label}
            className="flex flex-1 items-center hover:bg-gray-50 transition-colors min-w-0"
            style={{ height: "52px", paddingLeft: index === 0 ? "0px" : (Icon || customImg) ? "16px" : "8px", paddingRight: "8px", gap: (Icon || customImg) ? "6px" : "0" }}
          >
            {customImg && <Image src={customImg} alt={label} width={20} height={20} className="shrink-0" />}
            {Icon && <Icon size={20} className={`${color} shrink-0`} />}
            <span className="text-[14px] text-gray-500 truncate" style={{ fontFamily: "'PPTelegraf', sans-serif", fontWeight: 400 }}>{label}</span>
            <span className="text-[14px] font-semibold text-gray-900 ml-auto pl-1 shrink-0" style={{ fontFamily: "'PPTelegraf', sans-serif", fontWeight: 400 }}>{value}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

