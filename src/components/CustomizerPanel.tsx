/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Settings, X, RefreshCw, Sparkles, TrendingUp, DollarSign } from "lucide-react";
import { ProductConfig } from "../types";

interface CustomizerPanelProps {
  config: ProductConfig;
  onChange: (updated: ProductConfig) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const DEFAULT_CONFIG: ProductConfig = {
  productName: "Kit Completo de Recursos Pedagógicos para TEA",
  headlineSubtitle: "+ De 1200 Atividades Pedagógicas Adaptadas Para Alunos Autistas",
  persuasiveText: "Centenas de atividades estruturadas e recursos em PDF prontos para imprimir.",
  originalPrice: 197.00,
  promoPrice: 27.90,
  countdownMinutes: 15,
  warrantyDays: 14,
  bonusTitle: "Acesso Completo + Atualizações Mensais",
  bonusDescription: "Acervo completo de atividades pedagógicas adaptadas para alunos com TEA.",
  videoTitle: "Veja como funciona a estrutura das atividades",
  checkoutUrlBasico: "https://pay.cakto.com.br/xg3raeq",
  checkoutUrlCompleto: "https://pay.cakto.com.br/b2no6id_1008575",
};

export default function CustomizerPanel({
  config,
  onChange,
  isOpen,
  onToggle,
}: CustomizerPanelProps) {
  const handleInputChange = (key: keyof ProductConfig, value: string | number) => {
    onChange({
      ...config,
      [key]: value,
    });
  };

  const handleReset = () => {
    onChange(DEFAULT_CONFIG);
  };

  return (
    <>
      {/* Control Panel Sidebar */}
      <div
        id="customizer-sidebar"
        className={`fixed inset-y-0 right-0 z-100 w-full max-w-sm bg-[#0f172a] border-l border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 bg-[#1e293b] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-[#2ecc71]" />
            <div>
              <h3 className="font-bold text-sm text-white uppercase tracking-wider">Painel do Produtor</h3>
              <p className="text-[10px] text-zinc-500">Configure sua oferta em tempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleReset()}
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-zinc-400 hover:text-white transition cursor-pointer"
              title="Resetar para os padrões"
            >
              <RefreshCw size={13} />
            </button>
            <button
              onClick={() => onToggle()}
              className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-zinc-400 hover:text-white transition cursor-pointer"
              title="Fechar painel"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Sidebar Fields Form */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs text-zinc-400">
          <div className="p-3 bg-stone-900/40 rounded-lg border border-stone-800/60 flex items-start gap-2">
            <Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[10px] leading-relaxed text-zinc-400">
              Altere qualquer um dos valores abaixo para ver instantaneamente a estrutura de conversão, títulos e preços se adaptarem na landing page.
            </p>
          </div>

          {/* Section: Product Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-b border-stone-800 pb-1.5">
              Identidade do Infoproduto
            </h4>

            {/* Product Name */}
            <div className="space-y-1">
              <label className="font-bold text-[10px] uppercase text-zinc-400 block">
                Nome do Infoproduto:
              </label>
              <input
                type="text"
                value={config.productName}
                onChange={(e) => handleInputChange("productName", e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                placeholder="Ex: Manual do Infoprodutor de Elite"
              />
            </div>

            {/* Headline Subtitle */}
            <div className="space-y-1">
              <label className="font-bold text-[10px] uppercase text-zinc-400 block flex items-center justify-between">
                <span>Headline Principal Editável:</span>
                <span className="text-[9px] text-[#2ecc71] font-normal lowercase">use {"{{NOME_DO_PRODUTO}}"}</span>
              </label>
              <textarea
                value={config.headlineSubtitle}
                onChange={(e) => handleInputChange("headlineSubtitle", e.target.value)}
                rows={3}
                className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71] resize-none"
                placeholder="Ex: Como criar fontes de renda rápidas e digitais..."
              />
              <span className="text-[9px] text-zinc-500 block">
                Insira a tag <strong className="text-zinc-300">{"{{NOME_DO_PRODUTO}}"}</strong> no texto para ser trocada dinamicamente pelo nome acima.
              </span>
            </div>

            {/* Persuasive copy paragraph */}
            <div className="space-y-1">
              <label className="font-bold text-[10px] uppercase text-zinc-400 block">
                Cópia de Apoio da Subheadline:
              </label>
              <textarea
                value={config.persuasiveText}
                onChange={(e) => handleInputChange("persuasiveText", e.target.value)}
                rows={3}
                className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71] resize-none"
                placeholder="O método prático..."
              />
            </div>
          </div>

          {/* Section: Pricing & Urgency */}
          <div className="space-y-4">
            <h4 className="font-bold text-[10px] text-zinc-500 uppercase tracking-widest border-b border-stone-800 pb-1.5">
              Valores & Urgência
            </h4>

            {/* Original Price */}
            <div className="space-y-1">
              <label className="font-bold text-[10px] uppercase text-zinc-400 block">
                Preço Original (R$ de):
              </label>
              <div className="relative">
                <span className="absolute left-2.5 top-2.5 text-zinc-600 font-bold text-[10px]">R$</span>
                <input
                  type="number"
                  step="0.01"
                  value={config.originalPrice}
                  onChange={(e) => handleInputChange("originalPrice", parseFloat(e.target.value) || 0)}
                  className="w-full bg-stone-900 border border-stone-800 rounded pl-7 pr-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                />
              </div>
            </div>

            {/* Promotion Price */}
            <div className="space-y-1">
              <label className="font-bold text-[10px] uppercase text-zinc-400 block">
                Preço Promocional (R$ por):
              </label>
              <div className="relative">
                <span className="absolute left-2.5 top-2.5 text-[#2ecc71] font-bold text-[10px]">R$</span>
                <input
                  type="number"
                  step="0.01"
                  value={config.promoPrice}
                  onChange={(e) => handleInputChange("promoPrice", parseFloat(e.target.value) || 0)}
                  className="w-full bg-stone-900 border border-stone-800 rounded pl-7 pr-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                />
              </div>
            </div>

            {/* Countdown Minutes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-[10px] uppercase text-zinc-400 block">
                  Urgência (Minutos):
                </label>
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={config.countdownMinutes}
                  onChange={(e) => handleInputChange("countdownMinutes", parseInt(e.target.value) || 15)}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[10px] uppercase text-zinc-400 block">
                  Garantia (Dias):
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={config.warrantyDays}
                  onChange={(e) => handleInputChange("warrantyDays", parseInt(e.target.value) || 7)}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                />
              </div>
            </div>

            {/* Checkout Links */}
            <div className="space-y-3 pt-2">
              <h5 className="font-bold text-[9px] text-zinc-500 uppercase tracking-widest">
                Links de Redirecionamento (Checkout Real)
              </h5>
              
              <div className="space-y-1">
                <label className="font-bold text-[9px] uppercase text-zinc-400 block">
                  Link Checkout (Infoproduto Completo R$ 27,90):
                </label>
                <input
                  type="text"
                  value={config.checkoutUrlBasico}
                  onChange={(e) => handleInputChange("checkoutUrlBasico", e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                  placeholder="Ex: https://pay.kiwify.com.br/completo-17"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[9px] uppercase text-zinc-400 block">
                  Link Checkout (Oferta Antiga R$ 27,90):
                </label>
                <input
                  type="text"
                  value={config.checkoutUrlCompleto}
                  onChange={(e) => handleInputChange("checkoutUrlCompleto", e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#2ecc71]"
                  placeholder="Ex: https://pay.kiwify.com.br/completo-27"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 bg-[#1a1410] border-t border-stone-800 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Página configurável ativa</span>
          <button
            onClick={() => onToggle()}
            className="px-3.5 py-1.5 bg-[#2ecc71] hover:bg-[#27ae60] text-stone-950 font-black rounded uppercase text-[10px] tracking-wider transition cursor-pointer"
          >
            Visualizar Página
          </button>
        </div>
      </div>
    </>
  );
}
