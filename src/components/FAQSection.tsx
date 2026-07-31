/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown, HelpCircle, AlertCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como vou receber o material?",
    answer: "Imediatamente após a aprovação do seu pagamento. Você receberá um e-mail automático com os dados de acesso e o link direto para download de todo o acervo em formato digital PDF de alta resolução. Se pagar por PIX, o envio é praticamente instantâneo (leva menos de 1 minuto).",
  },
  {
    id: "faq-2",
    question: "O pagamento é seguro? Como funciona?",
    answer: "Sim, 100% seguro! Nossa plataforma de vendas utiliza criptografia de dados militar SSL de 256 bits (a mesma usada pelos grandes bancos do país). Seus dados de cartão ou PIX não ficam salvos conosco.",
  },
  {
    id: "faq-3",
    question: "E se eu não gostar? Tem garantia?",
    answer: "Garantia incondicional de satisfação! Você tem 14 dias inteiros para explorar as atividades. Se por qualquer motivo achar que o material não atendeu suas expectativas, basta solicitar o reembolso de R$ 27,90 e devolveremos 100% do seu dinheiro, sem burocracia.",
  },
  {
    id: "faq-4",
    question: "Para qual faixa etária as atividades são indicadas?",
    answer: "O material é ideal para a Educação Infantil e anos iniciais do Ensino Fundamental. Por ser muito visual e estruturado, atende desde crianças bem pequenas até crianças em fases de alfabetização mais avançada que necessitam de intervenção ou reforço pedagógico adaptado.",
  },
  {
    id: "faq-5",
    question: "Quem pode aplicar esses recursos pedagógicos?",
    answer: "Professores da Educação Infantil, professores do Atendimento Educacional Especializado (AEE), psicopedagogos e educadores que trabalham com alunos autistas. As atividades são 100% estruturadas, adaptadas e prontas para impressão e aplicação imediata.",
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq-accordion-section" className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-3xl font-display font-black text-[#0f172a] tracking-tight flex items-center justify-center gap-2 uppercase">
          <HelpCircle className="text-[#0284c7] w-6 h-6 md:w-8 md:h-8" />
          <span>Dúvidas Frequentes (FAQ)</span>
        </h2>
        <p className="text-[#475569] text-xs md:text-sm mt-1.5 font-medium">
          Tudo o que você precisa saber antes de adquirir o Kit Completo para TEA
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              id={item.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggleOpen(item.id)}
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 text-[#0f172a] hover:bg-slate-50 cursor-pointer select-none"
              >
                <span className="font-extrabold text-sm md:text-base leading-tight">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#0284c7] transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-56 border-t border-slate-100" : "max-h-0"
                }`}
              >
                <p className="p-4 md:p-5 text-slate-600 text-xs md:text-sm leading-relaxed bg-slate-50/50">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-start gap-3 max-w-xl mx-auto">
        <AlertCircle size={18} className="text-[#0284c7] shrink-0 mt-0.5" />
        <p className="text-[11px] text-[#0369a1] leading-relaxed font-semibold">
          Ainda tem dúvidas? Fique tranquila, a transação é 100% segura e garantida. Você tem 14 dias para testar o material e se arrepender se achar necessário.
        </p>
      </div>
    </div>
  );
}
