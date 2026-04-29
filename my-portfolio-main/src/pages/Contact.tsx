import { useEffect } from 'react';
import AOS from 'aos';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contato" className="py-20 px-6 flex flex-col items-center">
      <div 
        className="w-full max-w-4xl bg-[#1a1a1a]/50 border border-[#F5F5DC]/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Lado Esquerdo: Texto e Infos */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#F5F5DC] mb-4">Fale Comigo</h2>
            <p className="text-[#F5F5DC]/70 mb-8 font-medium">
              Entre em contato para colaborações, projetos ou dúvidas sobre meus trabalhos. 
              Estou sempre aberta a novas oportunidades em Engenharia de Software.
            </p>
            
            <div className="space-y-6 text-[#F5F5DC]/90">
              <div className="flex items-center gap-4 group">
                <span className="bg-[#F5F5DC]/10 p-3 rounded-full group-hover:bg-[#F5F5DC]/20 transition-colors">📍</span>
                <span className="font-medium">Serra Negra-Sp</span>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="bg-[#F5F5DC]/10 p-3 rounded-full group-hover:bg-[#F5F5DC]/20 transition-colors">📧</span>
                <span className="font-medium">jenifervbs@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário Conectado ao Formspree */}
          <form 
            action="https://formspree.io/f/maqnrned" //  LINK DO FORMSPREE
            method="POST"
            className="flex flex-col gap-4 text-left"
          >
            <div>
              <label className="block text-sm font-semibold text-[#F5F5DC] mb-1">Nome</label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full bg-black/40 border border-[#F5F5DC]/20 rounded-lg px-4 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#F5F5DC] transition duration-300"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#F5F5DC] mb-1">E-mail</label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full bg-black/40 border border-[#F5F5DC]/20 rounded-lg px-4 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#F5F5DC] transition duration-300"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#F5F5DC] mb-1">Mensagem</label>
              <textarea 
                name="message" 
                rows={4}
                required
                className="w-full bg-black/40 border border-[#F5F5DC]/20 rounded-lg px-4 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#F5F5DC] transition duration-300"
                placeholder="Como posso te ajudar?"
              />
            </div>
            <button 
              type="submit"
              className="mt-2 bg-[#F5F5DC] text-[#4A4A4A] font-bold py-3 rounded-full hover:bg-[#EDEADE] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

