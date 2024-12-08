'use client';

import HeroCarousel from "@/components/Home/Utils/HeroCarousel";
import hero1 from "@/assets/bg/hero1.jpeg";
import hero2 from "@/assets/bg/hero2.jpeg";
import FadeInSection from "./Utils/FadeInSection";

const slides = [
  {
    imageUrl: hero1.src,
    title: "BEM VINDO A VIVA PLENA",
    toptitle: "Sua saúde é nossa maior prioridade",
    subtitle:
      "Oferecemos um atendimento humanizado e de qualidade, com profissionais altamente qualificados e tecnologia de ponta",
    button1: "Saiba Mais",
    button1Link: "#sobre",
  },
  {
    imageUrl: hero2.src,
    title: "AGENDE SUA CONSULTA",
    toptitle: "Estamos prontos para te atender",
    subtitle:
      "Nossos profissionais estão prontos para te atender e oferecer o melhor tratamento para você e sua família",
    button1: "Agende Agora",
    button1Link: "#contato",
  },
];

export default function Hero() {
  return (
      <section id="hero" className="relative h-[617px] lg:h-screen">
        <HeroCarousel slides={slides} />
      </section>
  );
}
