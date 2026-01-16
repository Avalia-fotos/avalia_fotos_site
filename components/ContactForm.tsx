"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<{
    name: string;
    email: string;
    message: string;
    status?: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState((s) => ({ ...s, status: "Enviando..." }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setState({
          name: "",
          email: "",
          message: "",
          status: "Mensagem enviada com sucesso!",
        });
      } else {
        setState((s) => ({
          ...s,
          status: "Falha ao enviar. Tente novamente.",
        }));
      }
    } catch (error) {
      setState((s) => ({
        ...s,
        status: "Erro ao enviar. Tente novamente.",
      }));
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      aria-label="Formulário de contato"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-3 py-2 border"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-3 py-2 border"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-3 py-2 border"
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-brand-600 px-5 py-2 font-semibold text-white hover:bg-brand-700 transition-colors"
      >
        Enviar
      </button>

      {state.status && (
        <p role="status" className="text-sm text-gray-600">
          {state.status}
        </p>
      )}
    </form>
  );
}

