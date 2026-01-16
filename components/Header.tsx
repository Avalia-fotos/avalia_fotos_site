"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Ir para a página inicial"
        >
          <img
            src="/logo.svg"
            alt="AvaliA"
            className="h-7 w-auto"
            width={112}
            height={28}
          />
          <span className="sr-only">AvaliA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#como-funciona"
            className="text-gray-700 hover:text-brand-600 transition-colors"
          >
            Como funciona
          </Link>
          <Link
            href="/#beneficios"
            className="text-gray-700 hover:text-brand-600 transition-colors"
          >
            Benefícios
          </Link>
          <Link
            href="/#planos"
            className="text-gray-700 hover:text-brand-600 transition-colors"
          >
            Planos
          </Link>
          <Link
            href="/suporte"
            className="text-gray-700 hover:text-brand-600 transition-colors"
          >
            Suporte
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label="Abrir menu"
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <nav className="px-4 py-3 flex flex-col gap-2">
            <Link
              href="/#como-funciona"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-600 transition-colors py-2"
            >
              Como funciona
            </Link>
            <Link
              href="/#beneficios"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-600 transition-colors py-2"
            >
              Benefícios
            </Link>
            <Link
              href="/#planos"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-600 transition-colors py-2"
            >
              Planos
            </Link>
            <Link
              href="/suporte"
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand-600 transition-colors py-2"
            >
              Suporte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

