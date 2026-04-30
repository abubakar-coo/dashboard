"use client";
import { useState } from "react";
import { Search, HelpCircle, Bell, User, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = ["Projects", "Templates", "Content Library", "Forms", "Extensions", "API"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full max-w-[1920px] mx-auto h-[48px] flex items-center justify-between gap-4" style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Logo */}
        <div className="flex items-center gap-8 shrink-0">
          <div className="flex items-start">
            <Image
              src="/Logo.png"
              alt="OTOKO Logo"
              width={148}
              height={48}
              priority
              className="object-contain"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-0.5">
          <button className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors hidden sm:flex">
            <Search size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors hidden sm:flex">
            <HelpCircle size={18} />
          </button>
          <button className="relative p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors">
            <User size={18} />
          </button>
          {/* Mobile hamburger */}
          <button
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

