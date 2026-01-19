'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Zap, Award, ThumbsUp } from 'lucide-react';

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  const stats = [
    {
      icon: Zap,
      value: 200,
      suffix: '+',
      label: 'Projetos Concluídos',
      color: 'text-blue-400',
    },
    {
      icon: Award,
      value: 100,
      suffix: '%',
      label: 'Conformidade NBR',
      color: 'text-green-400',
    },
    {
      icon: ThumbsUp,
      value: 100,
      suffix: '%',
      label: 'Satisfação do Cliente',
      color: 'text-yellow-400',
    },
  ];

  return (
    <section className="relative px-4 py-24 bg-gradient-to-b from-dark via-navy/10 to-dark">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Números que Falam por Si
          </h2>
          <div className="mx-auto h-1 w-24 bg-navy"></div>
          <p className="mt-6 text-lg text-gray-300">
            Nossa trajetória de sucesso em números
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg border border-navy bg-navy/10 p-8 text-center backdrop-blur-sm transition-all hover:bg-navy/20 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative z-10">
                <stat.icon className={`mx-auto mb-4 h-12 w-12 ${stat.color} transition-transform group-hover:scale-110`} />
                
                <div className="mb-2 text-5xl font-bold text-white">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                
                <p className="text-sm font-medium text-gray-300">
                  {stat.label}
                </p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-navy"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300">
            Mais de <strong className="text-white text-2xl">200 projetos</strong> executados com{' '}
            <strong className="text-navy">excelência</strong> e{' '}
            <strong className="text-green-400">satisfação total</strong> dos clientes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
