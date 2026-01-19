'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Award, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Soluções modernas e eficientes em engenharia elétrica',
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Projetos com total conformidade às normas NBR',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade em cada projeto',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Equipe especializada e altamente qualificada',
    },
  ];

  return (
    <section id="sobre" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Sobre Nós
          </h2>
          <div className="mx-auto h-1 w-24 bg-navy"></div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Tradição e Inovação em Engenharia Elétrica
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              A <strong className="text-white">Eletric Serviços Engenharia</strong> é referência 
              em projetos elétricos, combinando anos de experiência com as mais modernas 
              tecnologias do mercado.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Nossa missão é entregar soluções em engenharia elétrica que superem expectativas, 
              garantindo segurança, eficiência energética e total conformidade com as normas 
              técnicas brasileiras.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Desde projetos residenciais até grandes instalações industriais, nossa equipe 
              de Técnicos especializados desenvolve cada projeto com atenção aos mínimos 
              detalhes, assegurando qualidade e durabilidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-lg border border-navy bg-navy/10 p-6 transition-all hover:bg-navy/20"
              >
                <feature.icon className="mb-4 h-12 w-12 text-navy transition-transform group-hover:scale-110" />
                <h4 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
