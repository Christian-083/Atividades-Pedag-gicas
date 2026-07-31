/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ShieldCheck, CheckSquare, Sparkles, Flame, Users, Calendar, HelpCircle, ArrowRight, BookOpen, Image, Lock, Download, Check, Home, ChevronsDown, Star, X, Folder } from "lucide-react";
import { ProductConfig } from "./types";
import UrgencyHeader from "./components/UrgencyHeader";
import MaterialSample from "./components/MaterialSample";
import FAQSection from "./components/FAQSection";

const imgMockup1200          = "/mockup_1200_atividades.png";
const imgMockup1200Fallback  = "/Mockup%201200%20atividades.png";
const imgAcessoImediato      = "/acesso_imediato.png";
const imgAcessoFallback      = "/__ACESSO_IMEDIATO__1_-removebg-preview.png";
const imgJogosEmocoes        = "/jogos_emocoes.png";
const imgJogosEmocoesFall    = "/Jogos%20das%20emo%C3%A7%C3%B5es.png";
const imgRotinaVisual        = "/rotina_visual.png";
const imgRotinaVisualFall    = "/Rotina%20Visual.png";
const imgJogosPedagogicos    = "/jogos_pedagogicos.png";
const imgJogosPedagogicosFall = "/Jogos%20Pedagogicos.png";

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

export default function App() {
  const [config] = useState<ProductConfig>(DEFAULT_CONFIG);

  const scrollToPricing = () => {
    const element = document.getElementById("pricing-plans-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirectToCheckout = (url: string) => {
    const targetUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const capitalizeFirstLetters = (str: string): string => {
    if (!str) return "";
    return str
      .split(/\s+/)
      .map(word => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  // Dynamic template substitution for {{NOME_DO_PRODUTO}}
  const rawHeadline = config.headlineSubtitle.replace(/\{\{NOME_DO_PRODUTO\}\}/g, config.productName);
  const renderedHeadline = capitalizeFirstLetters(rawHeadline);

  const renderStyledHeadline = (text: string) => {
    const parts = text.split(/(Autistas)/i);
    return parts.map((part, index) => {
      if (part.toLowerCase() === "autistas") {
        return (
          <span key={index} className="inline-block whitespace-nowrap">
            <span className="text-blue-600">Au</span>
            <span className="text-red-500">tis</span>
            <span className="text-amber-500">tas</span>
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div
      id="sales-funnel-root"
      className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-200 selection:text-slate-900"
    >
      {/* Hero Section Container */}
      <header id="hero-section" className="relative pt-12 pb-16 px-4 max-w-5xl mx-auto text-center overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Small Trust Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-blue-200 rounded-full text-[10px] md:text-xs font-bold text-slate-600 mb-6 uppercase tracking-wider shadow-sm">
          <Flame size={12} className="text-red-500 animate-pulse" />
          <span>Atualização todo mês</span>
        </div>

        {/* 2. HERO SECTION Headline (centralizada) */}
        <div className="space-y-4 max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-tight">
            <span>
              {renderStyledHeadline(renderedHeadline)}
            </span>
          </h1>

          {/* Subheadline persuasiva abaixo */}
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {config.persuasiveText}
          </p>
        </div>

        {/* 3. HERO IMAGES BLOCK - Showing the main Cover Book Mockup centered */}
        <div id="hero-image-block" className="mb-12 max-w-md mx-auto px-4">
          <div className="relative group">
            
            <div className="relative overflow-hidden transition-all duration-500 hover:scale-[1.03] max-w-[340px] mx-auto">
              <img
                src="/mockup_1200_atividades.png"
                alt="Capa Oficial - + de 1200 atividades"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain transform transition duration-700 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
              />
            </div>

          </div>
        </div>

        {/* 3. BLOCO DE PREÇO E URGÊNCIA (Como na imagem anexada) */}
        <div className="mt-8 flex flex-col items-center text-center space-y-6">
          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
            Tenha em mãos o kit definitivo de atividades estruturadas e recursos pedagógicos adaptados para potencializar a aprendizagem de seus alunos com autismo.
          </p>

          {/* Bullet points as requested in image */}
          <div className="w-full max-w-xl text-left space-y-3.5 py-2 mx-auto">
            <div className="flex items-start gap-3 text-xs md:text-sm text-slate-600">
              <Check className="text-blue-600 w-4.5 h-4.5 md:w-5 md:h-5 shrink-0 stroke-[3]" />
              <span className="font-bold">Mais de 1200 atividades pedagógicas adaptadas e prontas para imprimir em PDF</span>
            </div>
            <div className="flex items-start gap-3 text-xs md:text-sm text-slate-600">
              <Check className="text-blue-600 w-4.5 h-4.5 md:w-5 md:h-5 shrink-0 stroke-[3]" />
              <span className="font-bold">Organizadas didaticamente por habilidades e áreas do desenvolvimento infantil</span>
            </div>
            <div className="flex items-start gap-3 text-xs md:text-sm text-slate-600">
              <Check className="text-blue-600 w-4.5 h-4.5 md:w-5 md:h-5 shrink-0 stroke-[3]" />
              <span className="font-bold">Estruturadas para aplicação em sala de aula da Educação Infantil e AEE</span>
            </div>
            <div className="flex items-start gap-3 text-xs md:text-sm text-slate-600">
              <Check className="text-blue-600 w-4.5 h-4.5 md:w-5 md:h-5 shrink-0 stroke-[3]" />
              <span className="font-bold">Recursos práticos para estimular comunicação funcional e autonomia dos alunos</span>
            </div>
            <div className="flex items-start gap-3 text-xs md:text-sm text-slate-600">
              <Check className="text-blue-600 w-4.5 h-4.5 md:w-5 md:h-5 shrink-0 stroke-[3]" />
              <span className="font-bold">Acesso imediato e vitalício a todo o material digital em alta resolução</span>
            </div>
            <div className="flex items-start gap-3 text-xs md:text-sm text-red-500">
              <Sparkles className="text-red-500 w-4.5 h-4.5 md:w-5 md:h-5 shrink-0 stroke-[3] animate-pulse" />
              <span className="font-extrabold">Atualizações todo mês com novas atividades pedagógicas</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs md:text-sm font-extrabold tracking-wider text-red-600 uppercase">
              de R$ {config.originalPrice.toFixed(2)} por apenas:
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-blue-600 tracking-tight leading-none">
              R$ {config.promoPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h2>
          </div>

          <button
            id="vsl-cta-button-1"
            onClick={() => scrollToPricing()}
            className="w-full max-w-xl py-4.5 px-6 md:py-5 md:px-8 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm md:text-lg rounded-2xl transition-all duration-300 uppercase tracking-wider shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer select-none hover:scale-[1.02] active:scale-[0.98] border border-white/10"
          >
            <span>QUERO ADQUIRIR O KIT COMPLETO</span>
          </button>

          {/* 3 colunas de ícones de garantia minimalistas como na imagem anexada */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-md w-full pt-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="text-blue-600 w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              <span className="text-[10px] md:text-xs font-bold text-slate-900 tracking-tight leading-tight">
                Garantia de<br />{config.warrantyDays} Dias
              </span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Lock className="text-blue-600 w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              <span className="text-[10px] md:text-xs font-bold text-slate-900 tracking-tight leading-tight">
                Compra<br />Segura
              </span>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Download className="text-blue-600 w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />
              <span className="text-[10px] md:text-xs font-bold text-slate-900 tracking-tight leading-tight">
                Acesso<br />Imediato
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 6. SEÇÃO DE AMOSTRA DO MATERIAL */}
      <section id="material-sample-block" className="bg-[#f8fafc] border-t border-slate-100">
        <MaterialSample />
      </section>

      {/* 7. BENEFÍCIOS DO PRODUTO (Acervo Completo - 4 Cards Grid) */}
      <section id="benefits-section" className="py-16 px-4 max-w-5xl mx-auto text-center space-y-10">
        {/* Title */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Você receberá um acervo completo para transformar sua rotina!
          </h2>
        </div>

        {/* 4 Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white border border-blue-100/80 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold shrink-0">
              📚
            </div>
            <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
              +1200 Atividades Pedagógicas
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Mais de 1200 atividades estruturadas, prontas para imprimir e aplicar com alunos com Transtorno do Espectro Autista (TEA).
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-blue-100/80 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold shrink-0">
              ⚡
            </div>
            <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
              Prontas para Aplicação
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Basta escolher a atividade, imprimir e utilizar em sala de aula. Sem perder horas preparando materiais.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-blue-100/80 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-bold shrink-0">
              🧩
            </div>
            <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
              Organizadas por Habilidades
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Materiais separados por alfabetização, comunicação, atenção, coordenação motora, percepção visual, emoções e muito mais.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-blue-100/80 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-bold shrink-0">
              💻
            </div>
            <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
              Acesso Imediato e Vitalício
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Receba todos os arquivos em PDF logo após a compra e utilize quando quiser, quantas vezes precisar.
            </p>
          </div>
        </div>

        {/* Text below cards */}
        <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed max-w-2xl mx-auto pt-2">
          Tenha sempre à disposição atividades estruturadas para facilitar seu planejamento e oferecer um ensino mais inclusivo aos seus alunos com TEA.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <button
            onClick={scrollToPricing}
            className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO MEU KIT AGORA
          </button>
        </div>
      </section>

      {/* Seção "Ideal Para Você" */}
      <section id="ideal-for-you-section" className="py-16 px-4 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Este Kit Pedagógico é ideal para você que deseja:
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
                Economizar horas no planejamento das aulas
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Tenha atividades prontas para imprimir e aplicar, sem precisar criar materiais do zero.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
                Trabalhar o desenvolvimento de alunos com TEA de forma prática
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Recursos organizados para estimular alfabetização, comunicação, atenção, coordenação motora, percepção visual e habilidades socioemocionais.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
                Oferecer aulas mais inclusivas e envolventes
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Utilize atividades adaptadas que tornam o aprendizado mais acessível, organizado e significativo para seus alunos.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">
                Ter um acervo completo sempre à disposição
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Mais de 1.200 atividades pedagógicas organizadas em PDF para utilizar sempre que precisar, durante todo o ano letivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Urgência / Chamada Rápida */}
      <section id="urgency-callout-section" className="py-14 md:py-20 px-4 bg-white border-y border-slate-100 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Você está a um passo de transformar suas aulas.
          </h2>

          <div className="pt-2">
            <button
              onClick={scrollToPricing}
              className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              QUERO MEU KIT AGORA
            </button>
          </div>

          <p className="text-slate-500 text-xs md:text-sm font-semibold tracking-wide">
            Acesso imediato • Material em PDF • Compra 100% segura
          </p>
        </div>
      </section>

      {/* 7.8 VOCÊ VAI RECEBER AO ADQUIRIR SEU PRODUTO */}
      <section id="what-you-will-receive-section" className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        {/* Yellow Horizontal Badge Header */}
        <div className="flex justify-center">
          <div className="bg-blue-600 text-white px-6 py-2.5 md:py-3 text-center uppercase font-black text-xs sm:text-sm md:text-lg tracking-wider rounded-md shadow-lg max-w-2xl">
            VOCÊ VAI RECEBER AO ADQUIRIR SEU KIT PEDAGÓGICO
          </div>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Mockup Illustration */}
          <div className="flex justify-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-2xl blur-2xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/acesso_imediato.png"
              alt="Kit Principal - + de 1200 atividades com Acesso Imediato"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain relative z-10 transition-transform duration-500 hover:scale-102 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            />
          </div>

          {/* Right Column: White Elegant High-Converting Card */}
          <div className="bg-white text-stone-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-stone-100 flex flex-col space-y-5 max-w-md mx-auto w-full">

            {/* Card Main Title */}
            <div className="space-y-1.5 text-center">
              <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight leading-tight uppercase">
                Kit Completo de Recursos Pedagógicos para TEA
              </h3>
            </div>

            {/* Bullet List with individual materials */}
            <div className="space-y-2.5 text-xs md:text-sm text-stone-700 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
              {[
                "Apostila Alfabeto",
                "Apostila Atividades Para Autismo",
                "Apostila Cores, Números e Formas",
                "Apostila de Alfabetização",
                "Apostila de Coordenação Motora",
                "Apostila de Estimulação Cognitiva",
                "Apostila de Percepção Visual",
                "Apostila de Pré-Alfabetização",
                "Atividades específicas para alunos com TEA",
                "Atividades Matemáticas Iniciais TEA",
                "Atividades para Atenção e Concentração",
                "Atividades para Desenvolvimento Socioemocional",
                "Comunicação e Linguagem no Autismo",
                "Exercícios Terapêuticos Para Crianças Com TEA",
                "Materiais 100% em PDF de alta qualidade para impressão",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 pb-2 border-b border-stone-100 last:border-0">
                  <div className="p-0.5 bg-blue-50 rounded-full text-blue-600 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <span className="font-semibold text-stone-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7.9 SEÇÃO DE BÔNUS EXCLUSIVOS (3 BÔNUS PREMIUM) */}
      <section id="exclusive-bonuses-section" className="py-16 px-4 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-sm md:text-base font-extrabold text-red-600 tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-200/60 inline-block">
              E ainda tem mais...
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Você também recebe <span className="text-red-600">3 bônus exclusivos</span>, sem pagar nada a mais.
            </h2>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-red-100 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between space-y-4">
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200/80 text-red-700 text-xs font-black uppercase px-3 py-1 rounded-full w-fit">
                  🎁 BÔNUS 01
                </div>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <img
                    src="/jogos_emocoes.png"
                    alt="Bônus 01 - Jogos das Emoções"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg md:text-xl leading-snug">
                  Jogos das Emoções
                </h3>
              </div>
              <div className="pt-2 border-t border-slate-100 text-emerald-600 text-xs md:text-sm font-extrabold flex items-center justify-center gap-1.5 w-full">
                <span>✅ Incluso gratuitamente na sua compra.</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-red-100 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between space-y-4">
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200/80 text-red-700 text-xs font-black uppercase px-3 py-1 rounded-full w-fit">
                  🎁 BÔNUS 02
                </div>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <img
                    src="/rotina_visual.png"
                    alt="Bônus 02 - Caderno de Rotina Visual"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg md:text-xl leading-snug">
                  Caderno de Rotina Visual
                </h3>
              </div>
              <div className="pt-2 border-t border-slate-100 text-emerald-600 text-xs md:text-sm font-extrabold flex items-center justify-center gap-1.5 w-full">
                <span>✅ Incluso gratuitamente na sua compra.</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-red-100 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between space-y-4">
              <div className="space-y-4 w-full flex flex-col items-center">
                <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200/80 text-red-700 text-xs font-black uppercase px-3 py-1 rounded-full w-fit">
                  🎁 BÔNUS 03
                </div>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <img
                    src="/jogos_pedagogicos.png"
                    alt="Bônus 03 - Jogos Pedagógicos"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-black text-slate-900 text-lg md:text-xl leading-snug">
                  Jogos Pedagógicos
                </h3>
              </div>
              <div className="pt-2 border-t border-slate-100 text-emerald-600 text-xs md:text-sm font-extrabold flex items-center justify-center gap-1.5 w-full">
                <span>✅ Incluso gratuitamente na sua compra.</span>
              </div>
            </div>
          </div>

          {/* Text and Button below cards */}
          <div className="text-center space-y-6 max-w-3xl mx-auto pt-2">
            <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
              Todos os bônus são enviados junto com o Kit Principal, em formato digital (PDF), com acesso imediato após a confirmação do pagamento.
            </p>

            <div>
              <button
                onClick={scrollToPricing}
                className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                QUERO GARANTIR MEU KIT COMPLETO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7.9.5 PLANOS E VALORES SECTION (Comparação de Planos em Fundo Azul Royal) */}
      <section id="pricing-plans-section" className="bg-[#1a3bb5] py-16 px-4 w-full">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Título Centralizado */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Escolha a opção ideal para você:
            </h2>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto pt-2">
            {/* COLUNA ESQUERDA — Pacote Básico */}
            <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl relative text-slate-900 border border-slate-100">
              <div className="space-y-6">
                {/* Título: Pacote Básico em azul escuro */}
                <h3 className="text-2xl md:text-3xl font-black text-blue-950">
                  Pacote Básico:
                </h3>

                {/* Lista de itens inclusos/não inclusos */}
                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                    <span className="font-semibold text-slate-800 leading-tight">+1200 Atividades Pedagógicas Adaptadas para TEA</span>
                  </div>
                  <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                    <span className="font-semibold text-slate-800 leading-tight">Prontas para Imprimir e Aplicar em Sala de Aula</span>
                  </div>
                  <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                    <span className="font-semibold text-slate-800 leading-tight">Organizadas por Habilidades do Desenvolvimento</span>
                  </div>
                  <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                    <span className="font-semibold text-slate-800 leading-tight">Acesso Imediato e Vitalício em PDF</span>
                  </div>
                  <div className="flex items-start gap-2.5 pb-2 border-b border-slate-100 bg-red-50/50 p-2 rounded-xl">
                    <span className="text-red-600 font-bold shrink-0">❌</span>
                    <span className="font-bold text-red-600 leading-tight">Sem Acesso aos Bônus</span>
                  </div>
                </div>
              </div>

              {/* Preço e Botão CTA */}
              <div className="mt-8 pt-4 border-t border-slate-100 space-y-4">
                <div className="text-center space-y-1">
                  <div className="text-xs md:text-sm text-slate-400 font-medium line-through">
                    De R$47,90 por
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
                    R$ 17,90
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    (pagamento único)
                  </div>
                </div>

                {/* Botão CTA azul royal */}
                <button
                  onClick={() => redirectToCheckout(config.checkoutUrlBasico)}
                  className="w-full py-4 px-6 bg-[#1a3bb5] hover:bg-blue-800 text-white font-black text-sm md:text-base rounded-2xl transition-all duration-300 uppercase tracking-wider shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  QUERO O PACOTE BÁSICO
                </button>

                {/* Texto de atenção em amarelo/laranja e seta */}
                <div className="flex flex-col items-center pt-2">
                  <p className="text-[11px] md:text-xs font-black text-amber-500 uppercase tracking-wider text-center leading-snug">
                    ATENÇÃO: TEMOS UMA OFERTA AINDA MAIS VANTAJOSA PARA VOCÊ! VEJA LOGO ABAIXO
                  </p>
                  <div className="mt-2 text-amber-500 animate-bounce">
                    <ChevronsDown className="w-6 h-6 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA — Pacote Premium (Destaque Principal) */}
            <div className="bg-[#FFC107] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative text-blue-950 transform lg:scale-[1.03] lg:-translate-y-2 border-2 border-amber-300">
              {/* Badge "RECOMENDADO" no canto superior direito */}
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md z-10">
                RECOMENDADO
              </div>

              <div className="space-y-6">
                {/* Título: Pacote Premium em azul escuro */}
                <h3 className="text-2xl md:text-3xl font-black text-blue-950">
                  Pacote Premium:
                </h3>

                {/* Lista de itens com estrela (contorno) */}
                <div className="space-y-2.5 text-xs md:text-sm text-blue-950 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                  {[
                    "Kit Completo de Recursos Pedagógicos para TEA",
                    "🎁 Bônus #1: Jogos das Emoções",
                    "🎁 Bônus #2: Caderno de Rotina Visual",
                    "🎁 Bônus #3: Jogos Pedagógicos",
                    "Atualizações de novas atividades todo mês",
                    "Acesso Imediato e Vitalício em PDF",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 pb-2 border-b border-amber-500/20 last:border-0">
                      <Star className="w-4 h-4 text-blue-950 shrink-0 mt-0.5 fill-none stroke-[2.5]" />
                      <span className="font-extrabold text-blue-950 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preço e Botão CTA */}
              <div className="mt-8 pt-4 border-t border-amber-500/20 space-y-4">
                <div className="text-center space-y-1">
                  <div className="text-xs md:text-sm text-blue-950/70 font-semibold line-through">
                    De R$57,90 por
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
                    R$ 27,90
                  </div>
                  <div className="text-xs text-blue-950/80 font-bold">
                    (pagamento único)
                  </div>
                </div>

                {/* Botão CTA verde vibrante */}
                <button
                  onClick={() => redirectToCheckout(config.checkoutUrlCompleto)}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm md:text-lg rounded-2xl transition-all duration-300 uppercase tracking-wider shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  QUERO O PACOTE COMPLETO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO DE GARANTIA INCONDICIONAL DE 14 DIAS */}
      <section id="guarantee-section" className="py-12 md:py-16 px-4 bg-emerald-50/60 border-y border-emerald-100/80">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-emerald-100 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Selo / Ícone Visual */}
          <div className="shrink-0 flex flex-col items-center justify-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center p-4 text-center shadow-xl border-4 border-emerald-100 transform hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 mb-1 stroke-[2]" />
              <span className="font-black text-xs md:text-sm uppercase tracking-tight leading-none">Garantia</span>
              <span className="font-black text-2xl md:text-3xl leading-none my-0.5">{config.warrantyDays}</span>
              <span className="font-extrabold text-[10px] md:text-xs uppercase tracking-wider leading-none">Dias</span>
            </div>
          </div>

          {/* Texto de Explicação */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <span>RISCO ZERO PARA VOCÊ</span>
            </div>
            <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Garantia Incondicional de {config.warrantyDays} Dias
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Temos tanta certeza da qualidade do <strong className="text-slate-900">Kit Completo de Recursos Pedagógicos para TEA</strong> que oferecemos uma garantia cega de {config.warrantyDays} dias. Se dentro desse prazo você achar que as atividades não ajudaram a evoluir a rotina do seu aluno ou filho, devolveremos <strong className="text-emerald-700">100% do seu investimento</strong>. Sem perguntas, sem burocracia e com apenas um e-mail.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>Testagem de {config.warrantyDays} Dias</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>Devolução de 100% do Valor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>Reembolso Rápido e Sem Burocracia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq-section-block" className="bg-slate-50 border-y border-slate-100">
        <FAQSection />
      </section>



      {/* Footer */}
      <footer id="main-footer" className="bg-stone-900 border-t border-stone-800 py-10 px-4 text-center text-[10px] md:text-xs text-zinc-400 space-y-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-bold text-zinc-300 uppercase tracking-widest text-[9px]">
            {config.productName} • Todos os direitos reservados © 2026
          </p>
          <p className="leading-relaxed">
            Aviso Legal: Os resultados e desenvolvimento pedagógico podem variar de aluno para aluno. A aplicação diária dos recursos e atividades exige dedicação e constância pessoal. Este site não possui qualquer vínculo de afiliação com plataformas de terceiros ou redes sociais.
          </p>
        </div>
        <div className="flex justify-center gap-4 text-zinc-500 font-medium">
          <a href="#sales-funnel-root" className="hover:text-red-500 transition">Termos de Uso</a>
          <span>•</span>
          <a href="#sales-funnel-root" className="hover:text-red-500 transition">Políticas de Privacidade</a>
          <span>•</span>
          <a href="#sales-funnel-root" className="hover:text-red-500 transition">Contato Suporte</a>
        </div>
      </footer>
    </div>
  );
}

