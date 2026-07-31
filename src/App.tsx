/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import {
  ShieldCheck, Sparkles, Flame, Lock, Download, Check,
  ChevronsDown, Star, ChevronDown, ChevronUp
} from "lucide-react";

const DEFAULT_CONFIG = {
  productName: "Kit Completo de Recursos Pedagógicos para TEA",
  headlineSubtitle: "+ De 1200 Atividades Pedagógicas Adaptadas Para Alunos Autistas",
  persuasiveText: "Centenas de atividades estruturadas e recursos em PDF prontos para imprimir.",
  originalPrice: 197.00,
  promoPrice: 27.90,
  warrantyDays: 14,
  checkoutUrlBasico: "https://pay.cakto.com.br/xg3raeq",
  checkoutUrlCompleto: "https://pay.cakto.com.br/b2no6id_1008575",
};

const demoImages = [
  { src: "/demonstracao1.png", alt: "Amostra de material 1" },
  { src: "/demonstracao2.png", alt: "Amostra de material 2" },
  { src: "/demonstracao3.png", alt: "Amostra de material 3" },
  { src: "/demonstracao4.png", alt: "Amostra de material 4" },
  { src: "/demonstracao5.png", alt: "Amostra de material 5" },
  { src: "/demonstracao6.png", alt: "Amostra de material 6" },
  { src: "/demonstracao7.png", alt: "Amostra de material 7" },
  { src: "/demonstracao8.png", alt: "Amostra de material 8" },
];

const faqItems = [
  {
    question: "Como vou receber o material após a compra?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao material em PDF. O acesso é imediato e vitalício.",
  },
  {
    question: "O material funciona para qual faixa etária?",
    answer: "O kit é voltado para crianças em fase de Educação Infantil e Ensino Fundamental I, ideal para alunos com TEA que estão em processo de alfabetização e desenvolvimento de habilidades cognitivas e socioemocionais.",
  },
  {
    question: "Preciso de algum programa especial para abrir os arquivos?",
    answer: "Não! Todos os materiais são em formato PDF, que pode ser aberto em qualquer dispositivo (celular, tablet ou computador) com o aplicativo gratuito Adobe Reader ou qualquer leitor de PDF.",
  },
  {
    question: "Posso imprimir as atividades quantas vezes quiser?",
    answer: "Sim! Após baixar os arquivos, você pode imprimir quantas vezes precisar, para quantos alunos desejar, sem nenhum custo adicional.",
  },
  {
    question: "O que são as atualizações mensais?",
    answer: "Todo mês adicionamos novas atividades pedagógicas ao acervo. Ao adquirir o Kit Premium, você terá acesso a todas as atualizações futuras sem pagar nada a mais.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="font-bold text-slate-900 text-sm md:text-base leading-snug">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-600 shrink-0 stroke-[2.5]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 stroke-[2.5]" />
        )}
      </button>
      {open && (
        <div className="px-5 md:px-6 pb-5 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [config] = useState(DEFAULT_CONFIG);

  const scrollToPricing = () => {
    const element = document.getElementById("pricing-plans-section");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const redirectToCheckout = (url: string) => {
    const targetUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const capitalizeFirstLetters = (str: string): string => {
    if (!str) return "";
    return str.split(/\s+/).map(word => word ? word.charAt(0).toUpperCase() + word.slice(1) : "").join(" ");
  };

  const renderedHeadline = capitalizeFirstLetters(config.headlineSubtitle);

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
      {/* ── HERO ── */}
      <header id="hero-section" className="relative pt-12 pb-16 px-4 max-w-5xl mx-auto text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-blue-200 rounded-full text-[10px] md:text-xs font-bold text-slate-600 mb-6 uppercase tracking-wider shadow-sm">
          <Flame size={12} className="text-red-500 animate-pulse" />
          <span>Atualização todo mês</span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {renderStyledHeadline(renderedHeadline)}
          </h1>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            {config.persuasiveText}
          </p>
        </div>

        {/* Hero image */}
        <div className="mb-12 max-w-md mx-auto px-4">
          <div className="relative overflow-hidden transition-all duration-500 hover:scale-[1.03] max-w-[340px] mx-auto">
            <img
              src="/mockup_1200_atividades.png"
              alt="Capa Oficial - + de 1200 atividades"
              className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>

        {/* Bullets + price */}
        <div className="mt-8 flex flex-col items-center text-center space-y-6">
          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
            Tenha em mãos o kit definitivo de atividades estruturadas e recursos pedagógicos adaptados para potencializar a aprendizagem de seus alunos com autismo.
          </p>

          <div className="w-full max-w-xl text-left space-y-3.5 py-2 mx-auto">
            {[
              "Mais de 1200 atividades pedagógicas adaptadas e prontas para imprimir em PDF",
              "Organizadas didaticamente por habilidades e áreas do desenvolvimento infantil",
              "Estruturadas para aplicação em sala de aula da Educação Infantil e AEE",
              "Recursos práticos para estimular comunicação funcional e autonomia dos alunos",
              "Acesso imediato e vitalício a todo o material digital em alta resolução",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-600">
                <Check className="text-blue-600 w-5 h-5 shrink-0 stroke-[3] mt-0.5" />
                <span className="font-bold">{text}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 text-xs md:text-sm text-red-500">
              <Sparkles className="text-red-500 w-5 h-5 shrink-0 stroke-[3] animate-pulse mt-0.5" />
              <span className="font-extrabold">Atualizações todo mês com novas atividades pedagógicas</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs md:text-sm font-extrabold tracking-wider text-red-600 uppercase">
              de R$ {config.originalPrice.toFixed(2)} por apenas:
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-blue-600 tracking-tight leading-none">
              R$ {config.promoPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </h2>
          </div>

          <button
            onClick={scrollToPricing}
            className="w-full max-w-xl py-5 px-6 md:px-8 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm md:text-lg rounded-2xl transition-all duration-300 uppercase tracking-wider shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            QUERO ADQUIRIR O KIT COMPLETO
          </button>

          <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-md w-full pt-4">
            {[
              { icon: <ShieldCheck className="text-blue-600 w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />, label: `Garantia de\n${config.warrantyDays} Dias` },
              { icon: <Lock className="text-blue-600 w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />, label: "Compra\nSegura" },
              { icon: <Download className="text-blue-600 w-6 h-6 md:w-7 md:h-7 stroke-[1.5]" />, label: "Acesso\nImediato" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                {item.icon}
                <span className="text-[10px] md:text-xs font-bold text-slate-900 tracking-tight leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── AMOSTRA DO MATERIAL ── */}
      <section id="material-sample-block" className="bg-white border-t border-slate-100 py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              O que tem dentro do material?
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium max-w-xl mx-auto">
              Veja alguns dos materiais que vai receber na prática!
            </p>
          </div>

          {/* Marquee Container with subtle edge fade */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex gap-5">
              {[...demoImages, ...demoImages].map((img, i) => (
                <div
                  key={i}
                  className="w-56 h-56 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={scrollToPricing}
              className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              QUERO MEU KIT AGORA
            </button>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section id="benefits-section" className="py-16 px-4 max-w-5xl mx-auto text-center space-y-10">
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Você receberá um acervo completo para transformar sua rotina!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { emoji: "📚", color: "bg-blue-100 text-blue-600", title: "+1200 Atividades Pedagógicas", desc: "Mais de 1200 atividades estruturadas, prontas para imprimir e aplicar com alunos com Transtorno do Espectro Autista (TEA)." },
            { emoji: "⚡", color: "bg-emerald-100 text-emerald-600", title: "Prontas para Aplicação", desc: "Basta escolher a atividade, imprimir e utilizar em sala de aula. Sem perder horas preparando materiais." },
            { emoji: "🧩", color: "bg-amber-100 text-amber-600", title: "Organizadas por Habilidades", desc: "Materiais separados por alfabetização, comunicação, atenção, coordenação motora, percepção visual, emoções e muito mais." },
            { emoji: "💻", color: "bg-purple-100 text-purple-600", title: "Acesso Imediato e Vitalício", desc: "Receba todos os arquivos em PDF logo após a compra e utilize quando quiser, quantas vezes precisar." },
          ].map((card, i) => (
            <div key={i} className="bg-white border border-blue-100/80 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-3">
              <div className={`w-12 h-12 rounded-full ${card.color} flex items-center justify-center text-2xl font-bold shrink-0`}>
                {card.emoji}
              </div>
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">{card.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button
            onClick={scrollToPricing}
            className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO MEU KIT AGORA
          </button>
        </div>
      </section>

      {/* ── IDEAL PARA VOCÊ ── */}
      <section id="ideal-for-you-section" className="py-16 px-4 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Este Kit Pedagógico é ideal para você que deseja:
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            { title: "Economizar horas no planejamento das aulas", desc: "Tenha atividades prontas para imprimir e aplicar, sem precisar criar materiais do zero." },
            { title: "Trabalhar o desenvolvimento de alunos com TEA de forma prática", desc: "Recursos organizados para estimular alfabetização, comunicação, atenção, coordenação motora, percepção visual e habilidades socioemocionais." },
            { title: "Oferecer aulas mais inclusivas e envolventes", desc: "Utilize atividades adaptadas que tornam o aprendizado mais acessível, organizado e significativo para seus alunos." },
            { title: "Ter um acervo completo sempre à disposição", desc: "Mais de 1.200 atividades pedagógicas organizadas em PDF para utilizar sempre que precisar, durante todo o ano letivo." },
          ].map((card, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-slate-900 text-base md:text-lg leading-snug">{card.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── URGÊNCIA ── */}
      <section className="py-14 md:py-20 px-4 bg-white border-y border-slate-100 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Você está a um passo de transformar suas aulas.
          </h2>
          <button
            onClick={scrollToPricing}
            className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            QUERO MEU KIT AGORA
          </button>
          <p className="text-slate-500 text-xs md:text-sm font-semibold tracking-wide">
            Acesso imediato • Material em PDF • Compra 100% segura
          </p>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI RECEBER ── */}
      <section id="what-you-will-receive-section" className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        <div className="flex justify-center">
          <div className="bg-blue-600 text-white px-6 py-2.5 md:py-3 text-center uppercase font-black text-xs sm:text-sm md:text-lg tracking-wider rounded-md shadow-lg max-w-2xl">
            VOCÊ VAI RECEBER AO ADQUIRIR SEU KIT PEDAGÓGICO
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src="/acesso_imediato.png"
              alt="Kit Principal - + de 1200 atividades com Acesso Imediato"
              className="w-full h-auto object-contain relative z-10 transition-transform duration-500 hover:scale-[1.02] drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            />
          </div>

          <div className="bg-white text-stone-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-stone-100 flex flex-col space-y-5 max-w-md mx-auto w-full">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-black text-stone-900 tracking-tight leading-tight uppercase">
                Kit Completo de Recursos Pedagógicos para TEA
              </h3>
            </div>
            <div className="space-y-2.5 text-xs md:text-sm text-stone-700 max-h-[460px] overflow-y-auto pr-1">
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
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 pb-2 border-b border-stone-100 last:border-0">
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

      {/* ── BÔNUS ── */}
      <section id="exclusive-bonuses-section" className="py-16 px-4 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-sm md:text-base font-extrabold text-red-600 tracking-wider uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-200/60 inline-block">
              E ainda tem mais...
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Você também recebe <span className="text-red-600">3 bônus exclusivos</span>, sem pagar nada a mais.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { label: "BÔNUS 01", src: "/jogos_emocoes.png", title: "Jogos das Emoções" },
              { label: "BÔNUS 02", src: "/rotina_visual.png", title: "Caderno de Rotina Visual" },
              { label: "BÔNUS 03", src: "/jogos_pedagogicos.png", title: "Jogos Pedagógicos" },
            ].map((bonus, i) => (
              <div key={i} className="bg-white border border-red-100 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between space-y-4">
                <div className="space-y-4 w-full flex flex-col items-center">
                  <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200/80 text-red-700 text-xs font-black uppercase px-3 py-1 rounded-full">
                    🎁 {bonus.label}
                  </div>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <img
                      src={bonus.src}
                      alt={bonus.title}
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-black text-slate-900 text-lg md:text-xl leading-snug">{bonus.title}</h3>
                </div>
                <div className="pt-2 border-t border-slate-100 text-emerald-600 text-xs md:text-sm font-extrabold w-full text-center">
                  ✅ Incluso gratuitamente na sua compra.
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 max-w-3xl mx-auto pt-2">
            <p className="text-slate-700 font-bold text-sm md:text-base leading-relaxed">
              Todos os bônus são enviados junto com o Kit Principal, em formato digital (PDF), com acesso imediato após a confirmação do pagamento.
            </p>
            <button
              onClick={scrollToPricing}
              className="bg-amber-500 hover:bg-amber-600 text-white font-black text-base md:text-lg uppercase tracking-wider py-4 px-8 md:px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              QUERO GARANTIR MEU KIT COMPLETO
            </button>
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section id="pricing-plans-section" className="bg-[#1a3bb5] py-16 px-4 w-full">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Escolha a opção ideal para você:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto pt-2">
            {/* Pacote Básico */}
            <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl relative text-slate-900 border border-slate-100">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-black text-blue-950">Pacote Básico:</h3>
                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  {[
                    { ok: true, text: "+1200 Atividades Pedagógicas Adaptadas para TEA" },
                    { ok: true, text: "Prontas para Imprimir e Aplicar em Sala de Aula" },
                    { ok: true, text: "Organizadas por Habilidades do Desenvolvimento" },
                    { ok: true, text: "Acesso Imediato e Vitalício em PDF" },
                    { ok: false, text: "Sem Acesso aos Bônus" },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-start gap-2.5 pb-2 border-b border-slate-100 ${!item.ok ? "bg-red-50/50 p-2 rounded-xl" : ""}`}>
                      <span className={`font-bold shrink-0 mt-0.5 ${item.ok ? "text-emerald-600" : "text-red-600"}`}>{item.ok ? "✅" : "❌"}</span>
                      <span className={`font-semibold leading-tight ${item.ok ? "text-slate-800" : "text-red-600 font-bold"}`}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 space-y-4">
                <div className="text-center space-y-1">
                  <div className="text-xs md:text-sm text-slate-400 font-medium line-through">De R$47,90 por</div>
                  <div className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">R$ 17,90</div>
                  <div className="text-xs text-slate-500 font-medium">(pagamento único)</div>
                </div>
                <button
                  onClick={() => redirectToCheckout(config.checkoutUrlBasico)}
                  className="w-full py-4 px-6 bg-[#1a3bb5] hover:bg-blue-800 text-white font-black text-sm md:text-base rounded-2xl transition-all duration-300 uppercase tracking-wider shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  QUERO O PACOTE BÁSICO
                </button>
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

            {/* Pacote Premium */}
            <div className="bg-[#FFC107] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative text-blue-950 lg:scale-[1.03] lg:-translate-y-2 border-2 border-amber-300">
              <div className="absolute -top-3.5 right-6 bg-emerald-600 text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md z-10">
                RECOMENDADO
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-black text-blue-950">Pacote Premium:</h3>
                <div className="space-y-2.5 text-xs md:text-sm text-blue-950">
                  {[
                    "Kit Completo de Recursos Pedagógicos para TEA",
                    "🎁 Bônus #1: Jogos das Emoções",
                    "🎁 Bônus #2: Caderno de Rotina Visual",
                    "🎁 Bônus #3: Jogos Pedagógicos",
                    "Atualizações de novas atividades todo mês",
                    "Acesso Imediato e Vitalício em PDF",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 pb-2 border-b border-amber-500/20 last:border-0">
                      <Star className="w-4 h-4 text-blue-950 shrink-0 mt-0.5 fill-none stroke-[2.5]" />
                      <span className="font-extrabold text-blue-950 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-amber-500/20 space-y-4">
                <div className="text-center space-y-1">
                  <div className="text-xs md:text-sm text-blue-950/70 font-semibold line-through">De R$57,90 por</div>
                  <div className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">R$ 27,90</div>
                  <div className="text-xs text-blue-950/80 font-bold">(pagamento único)</div>
                </div>
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

      {/* ── FAQ ── */}
      <section id="faq-section-block" className="bg-slate-50 border-y border-slate-100 py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-medium">
              Tire suas dúvidas sobre o Kit Pedagógico para TEA.
            </p>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
