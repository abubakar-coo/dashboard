"use client";
import { useRef, useState } from "react";

export default function DashboardMain() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      {/* Inner content — px-6 on mobile, px-12 on large screens */}
      <div className="mx-auto px-6 lg:px-[48px]">

        {/* Welcome Bar */}
        <div style={{ backgroundColor: "#f2f2f4" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 py-4 sm:pb-3 sm:h-[96px]">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900" style={{ fontFamily: "'PPTelegraf', sans-serif" }}>Welcome, Edwin Müller</h1>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center border border-gray-300 overflow-hidden h-[40px] sm:h-[48px]">
              <span className="w-10 flex items-center justify-center text-sm font-medium text-gray-700 border-r border-gray-300 h-full">0</span>
              <span className="w-10 flex items-center justify-center text-sm font-medium text-gray-700 h-full">0</span>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">Days of trial left</span>
            <button className="bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 text-sm font-medium transition-colors whitespace-nowrap" style={{ width: "126px", height: "40px" }}>
              Extend now
            </button>
          </div>
        </div>

        {/* Sign section — responsive */}
        <div className="mt-0 w-full" style={{ maxWidth: "1150px" }}>
          <div className="bg-white border border-gray-200 flex flex-col pt-5 pr-5">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 pl-6">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span className="text-sm font-medium text-gray-700">Sign or obtain a signature</span>
            </div>

            {/* Body */}
            <div className="flex flex-col lg:flex-row flex-1 gap-6 items-stretch">
              {/* Drop Zone */}
              <div
                className={`flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors border w-full lg:shrink-0 ${isDragging ? "border-blue-400" : "border-gray-300"}`}
                style={{ height: "clamp(280px, 40vw, 458px)", maxWidth: "805px", backgroundColor: "#ced2fe" }}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-10 h-10 border-2 border-dashed border-gray-400 rounded flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
                </div>
                <p className="text-sm text-gray-500 text-center px-4">Drag and drop one or more files here or</p>
                <button
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                >
                  Select file(s)
                </button>
                <input ref={fileInputRef} type="file" multiple className="hidden" />
              </div>

              {/* Need help */}
              <div className="flex flex-col items-start justify-center gap-2 px-4 lg:px-0 pb-4 lg:pb-0" style={{ width: "180px" }}>
                <p className="text-sm font-semibold text-gray-800">Need help?</p>
                <p className="text-sm text-gray-500 leading-relaxed">Book a free session to get an introduction to OSIGN®.</p>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium w-fit">
                  Book a demo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-500">Discover common use cases</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
