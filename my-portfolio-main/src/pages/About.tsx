export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-bold text-[#C8A97E] mb-4" data-aos="fade-down">
          Sobre Mim
        </h2>
        <div className="h-1 w-20 bg-[#5a2f25] rounded-full"></div>
      </div>

      <div 
        data-aos="fade-up"
        className="bg-[#1a1a1a]/60 border border-[#3E2C23] rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-[#EADCC8]/90 text-lg leading-relaxed mb-6">
            Estudante de Engenharia de Software (6º semestre) na Faculdade Anhanguera. 
            Atualmente, busco uma oportunidade de <strong>estágio</strong> onde eu possa aplicar e expandir meu 
            conhecimento em <strong>Cultura DevOps e Automação de Processos</strong>.
          </p>
          <p className="text-[#EADCC8]/90 text-lg leading-relaxed mb-10">
            Tenho experiência prática na implementação de pipelines de <strong>CI/CD</strong> utilizando 
            <strong> Azure DevOps</strong> e <strong>GitLab CI</strong>, além de desenvolver APIs robustas com 
            <strong> Python (Flask)</strong> e <strong>Java</strong>. Sou movida por desafios técnicos 
            que envolvem a integração contínua e a otimização do ciclo de vida do software.
          </p>

          <h3 className="text-[#C8A97E] text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8A97E]/30"></span>
            Minhas Habilidades
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-[#3E2C23]/20 p-4 rounded-xl border border-[#3E2C23]/50">
                <h4 className="text-[#C8A97E] font-bold mb-2">Cloud & DevOps</h4>
                <p className="text-sm text-[#EADCC8]/70">Azure DevOps, Microsoft Azure, GitLab CI/CD, YAML.</p>
              </div>
              <div className="bg-[#3E2C23]/20 p-4 rounded-xl border border-[#3E2C23]/50">
                <h4 className="text-[#C8A97E] font-bold mb-2">Desenvolvimento</h4>
                <p className="text-sm text-[#EADCC8]/70">Python (Flask), Java (Web), React, TypeScript.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#3E2C23]/20 p-4 rounded-xl border border-[#3E2C23]/50">
                <h4 className="text-[#C8A97E] font-bold mb-2">Banco de Dados</h4>
                <p className="text-sm text-[#EADCC8]/70">MySQL, PostgreSQL, MongoDB (conceitos).</p>
              </div>
              <div className="bg-[#3E2C23]/20 p-4 rounded-xl border border-[#3E2C23]/50">
                <h4 className="text-[#C8A97E] font-bold mb-2">Ferramentas</h4>
                <p className="text-sm text-[#EADCC8]/70">Git, GitHub, PowerShell, Apache Tomcat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

