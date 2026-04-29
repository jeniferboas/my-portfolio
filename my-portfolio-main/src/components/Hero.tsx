import { Github, Linkedin, Gitlab } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative overflow-hidden rounded-3xl border border-[#7B5E57]/40
        bg-gradient-to-br from-[#121012] via-[#240f11] to-[#000000]
        
        /* Largura e Altura Dinâmicas */
        max-w-[90%] md:max-w-4xl 
        mx-auto my-6 md:my-10           
        
        /* Força a caixa a encolher para o tamanho do conteúdo */
        h-auto flex-none
        
        flex items-center justify-center shadow-[0_0_40px_#3E2C23]/35
      "
    >
      {/* Efeito de luz */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light
                      bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)]" />

      {/* CONTEÚDO: py-6 (celular) deixa a caixa bem baixa */}
      <div className="relative z-10 w-full px-4 py-6 md:py-10 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16">
          
          {/* FOTO */}
          <div className="relative flex-shrink-0"> 
            <img
              src="/assets/jenifer.png"
              alt="Foto de Jenifer Boas"
              className="relative w-28 h-28 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-[#F5F5DC]/10
                        shadow-xl animate-float"
            />
          </div>

          {/* TEXTO: Margens mínimas entre as linhas */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold
                            bg-[#F5F5DC]/10 border border-[#F5F5DC]/20 text-[#F5F5DC]">
              <span className="h-2 w-2 rounded-full bg-[#F5F5DC] animate-pulse" />
              Disponível para projetos
            </div>

            <h1 className="mt-2 text-2xl md:text-5xl font-extrabold leading-tight text-[#F5F5DC]">
              Jenifer V. Boas
            </h1>

            <p className="mt-0.5 text-xs md:text-lg text-[#F5F5DC]/70">
              • Estudante de Engenharia de Software | DevOps & Cloud 
            </p>

            {/* ÍCONES SOCIAIS */}
            <div className="mt-3 flex gap-5">
              <a href="https://github.com/jeniferboas" target="_blank" rel="noreferrer" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-all transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/jenifer-v-boas-b9a1ab168/" target="_blank" rel="noreferrer" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://gitlab.com/jenifervbs/unopar_ci_cd" target="_blank" rel="noreferrer" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-all transform hover:scale-110">
                <Gitlab size={20} />
              </a>
            </div>

            {/* BOTÕES: gap-2 deixa um colado no outro */}
            <div className="flex flex-col sm:flex-row gap-2 mt-5 w-full sm:w-auto">
              <a 
                href="#projetos" 
                className="px-8 py-2 border border-[#F5F5DC] text-[#F5F5DC] font-semibold rounded-full hover:bg-[#F5F5DC]/10 transition-all text-xs text-center"
              >
                Ver projetos
              </a>

              <a 
                href="#contato" 
                className="px-8 py-2 border border-[#F5F5DC] text-[#F5F5DC] font-semibold rounded-full hover:bg-[#F5F5DC]/10 transition-all text-xs text-center"
              >
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}