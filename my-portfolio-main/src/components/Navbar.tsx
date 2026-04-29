export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0E0C0A]/80 backdrop-blur-md border-b border-[#3E2C23] text-[#EADCC8] fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-bold text-[#efedea]">D'Boas</h1>

      <div className="flex gap-6 text-sm md:text-base">
        {/* Usamos href apontando para os IDs que definimos no App.tsx */}
        <a href="#inicio" className="hover:text-[#C8A97E] transition cursor-pointer">Início</a>
        <a href="#projetos" className="hover:text-[#C8A97E] transition cursor-pointer">Projetos</a>
        <a href="#contato" className="hover:text-[#C8A97E] transition cursor-pointer">Contato</a>
      </div>
    </nav>
  );
}