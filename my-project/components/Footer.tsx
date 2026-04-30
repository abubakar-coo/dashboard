export default function Footer() {
  return (
    <div className="w-full bg-white border-t border-gray-200 mt-[60px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-[48px] py-3 lg:py-0 gap-3 lg:gap-0" style={{ minHeight: "48px" }}>
        {/* Left — copyright */}
        <p className="text-xs text-gray-400">Copyright © 2025 OSIGN® a brand of OTOKO GmbH – All rights reserved.</p>

        {/* Right — badges */}
        <div className="flex flex-wrap items-center gap-2 lg:gap-4">
          <div className="flex items-center gap-1">
            <img src="/stroke end 180°.png" alt="Germany Logo" width={32} height={20} />
            <span className="text-xs font-medium text-gray-700">100% Made In Germany</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/vector 5.png" alt="eIDAS Icon" width={32} height={32} />
            <span className="text-xs font-semibold" style={{ color: '#0717C9' }}>eIDAS</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/vector 6.png" alt="eSigning Icon" width={32} height={32} />
            <span className="text-xs font-semibold" style={{ color: '#0717C9' }}>eSigning</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/vector 7.png" alt="ISO Icon" width={32} height={32} />
            <span className="text-xs font-semibold" style={{ color: '#0717C9' }}>ISO</span>
            <span className="text-xs font-semibold" style={{ color: '#0717C9' }}>9001</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/vector 8.png" alt="OSIVO/GDPR Icon" width={32} height={32} />
            <span className="text-xs font-semibold" style={{ color: '#0717C9' }}>OSIVO/GDPR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
