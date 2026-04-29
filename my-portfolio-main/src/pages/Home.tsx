import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="space-y-20 py-10 px-4 max-w-5xl mx-auto">
      
      {/* HEADER / HERO SECTION */}
      <header 
        className="flex flex-col md:flex-row items-center gap-10 py-20"
        data-aos="fade-up"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-200 rounded-full blur opacity-25"></div>
          <img
            src="/assets/jenifer.png"
            alt="Jenifer"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-amber-500/20 shadow-2xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        
        <div className="text-center md:text-left">
          <span className="text-amber-500 font-mono text-sm mb-2 block">Engenheira de Software em formação</span>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Oi, eu sou a Jenifer 👋
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl text-lg leading-relaxed">
            Estudante de Engenharia de Software focada em <strong>Cultura DevOps, Automação e Cloud Computing</strong>. 
            Desenvolvo pipelines de CI/CD e soluções escaláveis utilizando Azure e Python.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="#projetos" className="bg-amber-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-amber-400 transition">Ver projetos</a>
            <a href="#contato" className="border border-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">Fale comigo</a>
          </div>
        </div>
      </header>

      {/* SEÇÃO PROJETOS RECENTES (DEVOPS FOCUS) */}
      <section id="projetos">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold border-b-2 border-amber-500 pb-2" data-aos="fade-right">
            Projetos recentes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Pipeline Azure CI/CD", 
              desc: "Automação completa de build e deploy de API Flask utilizando Azure DevOps e YAML[cite: 3, 16, 17].", 
              repo: "https://github.com/jenifervbs", 
              status: "Online" 
            },
            { 
              title: "GitLab Monitoring", 
              desc: "Simulação de pipeline de entrega contínua com monitoramento de processos em Python[cite: 13, 16].", 
              repo: "https://gitlab.com/jenifervbs/unopar_ci_cd", 
              status: "Concluído" 
            },
            { 
              title: "Marmoraria Inovação", 
              desc: "Desenvolvimento de site institucional com foco em UX e performance.", 
              repo: "https://github.com/jeniferboas/marmoraria-inovacao", 
              status: "Em Construção" 
            },
          ].map((p, index) => (
            <article 
              key={p.title} 
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
              className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">{p.status}</span>
              <h3 className="font-bold text-xl mt-2 group-hover:text-amber-500 transition-colors">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">{p.desc}</p>
              <div className="mt-6">
                <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm font-medium inline-flex items-center text-amber-500 hover:gap-2 transition-all">
                  Ver código <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

    </section>
  );
}