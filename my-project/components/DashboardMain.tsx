"use client";
                <p className="text-sm text-center px-4" style={{ color: '#1A1A1D' }}>Drag and drop one or more files here or</p>
import { useRef, useState } from "react";

export default function DashboardMain() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="w-full">
      {/* Inner content — px-6 on mobile, px-12 on large screens */}
      <div className="mx-auto px-6 lg:px-[48px] 2xl:px-[64px]">

        {/* Welcome Bar */}
        <div style={{ backgroundColor: "#f2f2f4" }}
          className="h-[144px] flex items-center">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900" style={{ fontFamily: "'PPTelegraf', sans-serif" }}>Welcome, Edwin Müller</h1>
          <div className="ml-auto flex items-center gap-2 sm:gap-3 flex-wrap">
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

        {/* Sign section + Right cards — side by side */}
        <div className="flex flex-col lg:flex-row mt-0 w-full items-start gap-6 lg:gap-12">

        {/* Sign section — responsive */}
        <div className="flex-1 min-w-0 bg-white">
          <div className="flex flex-col pt-5">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 pl-6">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span className="text-sm font-medium text-gray-700">Sign or obtain a signature</span>
            </div>

            {/* Body */}
            <div className="flex flex-col lg:flex-row flex-1 gap-6 items-stretch">
              {/* Drop Zone */}
              <div
                className="flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors w-full lg:flex-1 lg:shrink-0"
                style={{ height: "clamp(240px, 34vw, 526px)", maxWidth: "clamp(563px, 52vw, 1100px)", backgroundColor: "#ced2fe" }}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="flex items-center justify-center">
                  <img src="/Vector.png" alt="Upload" width={80} height={80} />
                </div>
                <p className="text-sm text-gray-500 text-center px-4">Drag and drop one or more files here or</p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                  style={{ width: "133px", height: "48px" }}
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                >
                  Select file(s)
                </button>
                <input ref={fileInputRef} type="file" multiple className="hidden" />
              </div>

              {/* Need help */}
              <div className="flex flex-col items-start justify-center gap-2 px-4 lg:px-0 pb-4 lg:pb-0 w-full lg:w-[180px] lg:flex-shrink-0">
                <p className="text-sm font-semibold text-gray-800">Need help?</p>
                <p className="text-sm text-gray-500 leading-relaxed">Book a free session to get an introduction to OSIGN®.</p>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium w-fit">
                  Book a demo
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            {/* Footer + Use Cases Section */}
            <div style={{ backgroundColor: "#f2f2f4", marginTop: 0 }}>
              {/* Discover text */}
              <p className="text-sm text-gray-500 py-3">Discover common use cases</p>
              {/* 4 Cards — responsive, each 1/4 width */}
              <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
                {/* Card 1 — Dark */}
                <div className="flex flex-col p-4" style={{ backgroundColor: "#232327", minHeight: "clamp(152px, 10vw, 220px)" }}>
                  <div className="flex items-center justify-between gap-2" style={{ height: "60px" }}>
                    <div className="flex items-center gap-2">
                      <img src="/vector 1.png" alt="Vector 1" width={20} height={20} />
                      <span className="text-[14px] font-semibold text-white">Verify &amp; QES Onboarding</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="flex-shrink-0"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </div>
                  <p className="text-xs" style={{ color: '#B3B3BC' }}>Lorem ipsum</p>
                </div>
                {/* Card 2 — White */}
                <div className="flex flex-col p-4 border border-gray-200" style={{ backgroundColor: "#ffffff", minHeight: "clamp(152px, 10vw, 220px)" }}>
                  <div className="flex items-center justify-between gap-2" style={{ height: "60px" }}>
                    <div className="flex items-center gap-2">
                      <img src="/vector 2.png" alt="Vector 2" width={20} height={20} />
                      <span className="text-[14px] font-semibold text-gray-900">Sign PDFs in under 60 seconds</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#6b7280" className="flex-shrink-0"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </div>
                  <p className="text-xs" style={{ color: '#676772' }}>Upload documents, place fields and have them signed in accordance with the law.</p>
                </div>
                {/* Card 3 — White */}
                <div className="flex flex-col p-4 border border-gray-200" style={{ backgroundColor: "#ffffff", minHeight: "clamp(152px, 10vw, 220px)" }}>
                  <div className="flex items-center justify-between gap-2" style={{ height: "60px" }}>
                    <div className="flex items-center gap-2">
                      <img src="/vector 3.png" alt="Vector 3" width={20} height={20} />
                      <span className="text-[14px] font-semibold text-gray-900">Save time with smart templates</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#6b7280" className="flex-shrink-0"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </div>
                  <p className="text-xs" style={{ color: '#676772' }}>Automate the contract process and personalize it with just a few clicks.</p>
                </div>
                {/* Card 4 — White */}
                <div className="flex flex-col p-4 border border-gray-200" style={{ backgroundColor: "#ffffff", minHeight: "clamp(152px, 10vw, 220px)" }}>
                  <div className="flex items-center justify-between gap-2" style={{ height: "60px" }}>
                    <div className="flex items-center gap-2">
                      <img src="/vector 4.png" alt="Vector 4" width={20} height={20} />
                      <span className="text-[14px] font-semibold text-gray-900">TBD</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#6b7280" className="flex-shrink-0"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </div>
                  <p className="text-xs" style={{ color: '#676772' }}>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side cards section */}
        <div className="w-full lg:w-[clamp(321px,21vw,420px)] lg:flex-shrink-0 flex flex-col gap-4">
          {/* Top Card */}
          <div className="bg-white border border-gray-200 flex flex-col overflow-hidden w-full" style={{ minHeight: "324px" }}>
            {/* Image Area */}
            <div className="w-full flex-shrink-0" style={{ height: "160px" }}>
              <img src="/image 1.png" alt="Card 1" className="w-full h-full object-cover" />
            </div>
            {/* TBD Area */}
            <div className="w-full flex-shrink-0 flex items-center" style={{ height: "60px", paddingTop: "20px", paddingBottom: "20px" }}>
              <span className="text-sm font-medium text-gray-800 pl-4">TBD</span>
            </div>
            {/* Lorem ipsum */}
            <p className="text-sm text-gray-500 pl-4 pr-4">Lorem ipsum</p>
          </div>
          {/* Bottom Card */}
          <div className="bg-white border border-gray-200 flex flex-col overflow-hidden w-full" style={{ minHeight: "324px" }}>
            {/* Image Area */}
            <div className="w-full flex-shrink-0" style={{ height: "160px" }}>
              <img src="/image 2.png" alt="Card 2" className="w-full h-full object-cover" />
            </div>
            {/* TBD Area */}
            <div className="w-full flex-shrink-0 flex items-center" style={{ height: "60px", paddingTop: "20px", paddingBottom: "20px" }}>
              <span className="text-sm font-medium text-gray-800 pl-4">TBD</span>
            </div>
            {/* Lorem ipsum */}
            <p className="text-sm text-gray-500 pl-4 pr-4">Lorem ipsum</p>
          </div>
        </div>

        </div>{/* end flex row */}

      </div>
    </div>
  );
}
