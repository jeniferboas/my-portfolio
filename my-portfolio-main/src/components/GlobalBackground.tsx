// Fundo global com códigos caindo — discreto no lado esquerdo,
// atrás do conteúdo e acima do fundo preto da página.

const SNIPPETS = [
  "function recycle(item){ return item?.toLowerCase().includes('plastic'); }",
  "const db = connect('mongodb://localhost:27017/recicla');",
  "type User = { id: string; name: string; points: number };",
  "fetch('/api/collect', { method: 'POST', body: JSON.stringify({ type: 'glass' }) });",
  "useEffect(() => { localStorage.setItem('theme', 'coffee'); }, []);",
  "export const ODS = { goal: 12, name: 'Consumo e Produção Sustentáveis' };",
  "console.log('Reduza, Reuse, Recicle ♻️');",
];

type ColProps = { speed: "fall-slow" | "fall-mid" | "fall-fast"; delay: number; soft?: boolean };

function Col({ speed, delay, soft }: ColProps) {
  const text = Array.from({ length: 14 })
    .map((_, i) => SNIPPETS[i % SNIPPETS.length])
    .join("\n\n");

  return (
    <div className="relative h-full w-[20ch] code-mask">
      <pre
        className={`code-mono ${soft ? "code-soft" : "code-soft-2"} whitespace-pre-wrap leading-6 ${speed} text-[12px]`}
        style={{ animationDelay: `${delay}s` }}
      >
        {text}
      </pre>
    </div>
  );
}

export default function GlobalBackground() {
  return (
    /* z-0 => acima do fundo da página; o conteúdo usa z-10 e fica por cima */
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* só o lado esquerdo */}
      <div className="absolute inset-y-0 left-0 w-[38vw] max-w-[640px] overflow-hidden">
        {/* transição suave no preto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A] via-transparent to-transparent" />

        {/* camada 1 (mais forte) */}
        <div className="absolute inset-0 flex gap-6 px-6 opacity-70">
          {Array.from({ length: 7 }).map((_, i) => (
            <Col key={`l1-${i}`} speed="fall-slow" delay={i * 1.7} soft />
          ))}
        </div>

        {/* camada 2 (mais leve) */}
        <div className="absolute inset-0 flex gap-8 px-10 opacity-18">
          {Array.from({ length: 6 }).map((_, i) => (
            <Col key={`l2-${i}`} speed="fall-mid" delay={i * 1.2} />
          ))}
        </div>
      </div>
    </div>
  );
}
