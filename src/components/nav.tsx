/* eslint-disable @next/next/no-img-element */
"use client";

import { navigation } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="FK IMMO" className="h-12" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={navigation.contact.href}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors text-sm font-medium"
            >
              {navigation.contact.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={navigation.contact.href}
                className="block px-3 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-full text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {navigation.contact.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
