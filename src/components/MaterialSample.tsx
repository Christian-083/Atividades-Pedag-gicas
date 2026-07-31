/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function MaterialSample() {
  const demos = [
    {
      img: "/demonstracao_1.png",
      title: "Atividade de Pareamento & Cores",
      tag: "Cognição",
      bgTag: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      img: "/demonstracao_2.png",
      title: "Estímulo de Foco & Atenção",
      tag: "Foco",
      bgTag: "bg-red-50 text-red-700 border-red-100",
    },
    {
      img: "/demonstracao_3.png",
      title: "Coordenação Motora e Traçado",
      tag: "Motor",
      bgTag: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      img: "/demonstracao_4.png",
      title: "Matemática & Quantidades",
      tag: "Matemática",
      bgTag: "bg-red-50 text-red-700 border-red-100",
    },
    {
      img: "/demonstracao_5.png",
      title: "Linguagem e Alfabetização",
      tag: "Linguagem",
      bgTag: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      img: "/demonstracao_6.png",
      title: "Rotina Visual Escolar",
      tag: "Autonomia",
      bgTag: "bg-red-50 text-red-700 border-red-100",
    },
    {
      img: "/demonstracao_7.png",
      title: "Socioemocional & Emoções",
      tag: "Emoções",
      bgTag: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      img: "/demonstracao_8.png",
      title: "Jogos e Dinâmicas Lúdicas",
      tag: "Lúdico",
      bgTag: "bg-red-50 text-red-700 border-red-100",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const timerRef = useRef<any>(null);

  // Dynamically update how many slides are visible based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalDemos = demos.length;
  // We can cycle indefinitely or go slide by slide
  const maxIndex = totalDemos - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // wrap around
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex; // wrap around to end
      }
      return prev - 1;
    });
  };

  // Setup auto-advance slider interval
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3200); // changes every 3.2s

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [visibleCount, maxIndex]);

  const handleManualNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    nextSlide();
  };

  const handleManualPrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    prevSlide();
  };

  return (
    <div id="material-sample-section" className="py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Título & Subtítulo - Replicating image style */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase max-w-4xl mx-auto">
          VEJA AS DEMONSTRAÇÕES DO MATERIAL!
        </h2>
      </div>

      {/* Main Carousel Wrapper */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-12 group/carousel">
        {/* Left Arrow Button */}
        <button
          onClick={handleManualPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-blue-600 hover:text-white text-slate-800 p-2.5 rounded-full shadow-lg border border-slate-200 transition-all cursor-pointer active:scale-90"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Slides Viewport */}
        <div className="overflow-hidden rounded-2xl p-2">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {demos.map((item, index) => (
              <div
                key={index}
                className="px-2 shrink-0 select-none flex-col justify-between"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* Card Container Frame */}
                <div className="relative bg-white rounded-2xl border-2 border-slate-100 p-2.5 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 flex flex-col h-full justify-between">
                  {/* Image Frame with shadow and rounded corners */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100 aspect-[3/4] flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover pointer-events-none transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleManualNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-blue-600 hover:text-white text-slate-800 p-2.5 rounded-full shadow-lg border border-slate-200 transition-all cursor-pointer active:scale-90"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>

      {/* Bullet Slide Indicators */}
      <div className="flex justify-center gap-2 pt-2">
        {Array.from({ length: totalDemos - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setCurrentIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index ? "w-6 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
