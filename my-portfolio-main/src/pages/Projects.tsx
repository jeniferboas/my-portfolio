import { Github, Gitlab, Code2, Globe, Cloud } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const meusProjetos = [
    {
      title: "Orquestração Kubernetes & CI/CD",
      desc: "Implantação de API Node.js utilizando Azure Pipelines, Docker e Azure Container Registry (ACR). Orquestração em cluster Kubernetes (AKS) via YAML, resolvendo desafios de rede e segurança com Kubernetes Secrets.",
      tags: ["Node.js", "Docker", "Kubernetes (AKS)", "CI/CD"],
      repo: "https://github.com/jeniferboas/azure-kubernetes-cicd-api", 
      link: "https://api-jenifer-devops-cqf6fkenesdmavgj.canadacentral-01.azurewebsites.net",
      status: "Concluído",
      icon: <Code2 size={24} />,
      isGitLab: false
    },
    {
      title: "Pipeline de IA para Propostas ESG",
      desc: "Automação serverless com Azure Logic Apps e Webhooks para propostas ESG. Integração com Azure OpenAI (GPT-4) via Prompt Engineering e arquitetura resiliente com troubleshooting de logs contra limitações de cota.",
      tags: ["Azure", "Logic Apps", "OpenAI GPT-4", "Serverless"],
      repo: "https://github.com/jeniferboas/pipeline-ia-propostas-esg",
      status: "Concluído",
      icon: <Cloud size={24} />,
      isGitLab: false
    },
    {
      
      title: "Pipeline CI/CD & Monitoramento Cloud",
      desc: "Implementação de fluxo completo de CI/CD via YAML no Azure DevOps. Configuração de Self-Hosted Agents e deploy automatizado em Azure App Service.",
      tags: ["Azure DevOps", "Python", "YAML", "Cloud"],
      repo: "https://github.com/jeniferboas/pipeline-flask-azure-devops", 
      link: "https://dev.azure.com/jenifervbs/Devops101_scrum/_build/results?buildId=20&view=results",
      status: "Online",
      icon: <Cloud size={24} />,
      isGitLab: false
    },
    {
      title: "Pipeline de CI/CD GitLab",
      desc: "Simulação de um fluxo de entrega contínua. Configurei scripts .gitlab-ci.yml para automação de deploy, integrando Git local com repositório remoto no GitLab.",
      tags: ["GitLab CI/CD", "Python", "PowerShell", "Git"],
      repo: "https://gitlab.com/jenifervbs/unopar_ci_cd",
      link: "https://gitlab.com/jenifervbs/unopar_ci_cd",
      status: "Concluído",
      icon: <Gitlab size={24} />,
      isGitLab: true
    },
    {
      title: "Frameworks Java Web",
      desc: "Aplicação Java Web completa com Tomcat e NetBeans. Interface com Bootstrap 5 e consumo da API ViaCEP para preenchimento dinâmico.",
      tags: ["Java", "Apache Tomcat", "Bootstrap 5", "jQuery"],
      repo: "https://github.com/jeniferboas/frameworks-java-web",
      link: "https://github.com/jeniferboas/frameworks-java-web",
      status: "Concluído",
      icon: <Code2 size={24} />,
      isGitLab: false
    },
    {
      title: "Marmoraria Inovação",
      desc: "Site institucional focado em UX. Desenvolvido para apresentar portfólio de produtos e serviços com design responsivo.",
      tags: ["React", "Tailwind CSS", "Vite"],
      repo: "https://github.com/jeniferboas/marmoraria-inovacao",
      link: "https://github.com/jeniferboas/marmoraria-inovacao",
      status: "Em Construção",
      icon: <Globe size={24} />,
      isGitLab: false
    }
  ];

  return (
    <section id="projetos" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-bold text-[#C8A97E] mb-4" data-aos="fade-down">
          Meus Projetos
        </h2>
        <div className="h-1 w-20 bg-[#5a2f25] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meusProjetos.map((proj) => (
          <article 
            key={proj.title}
            data-aos="fade-up"
            className="bg-[#1a1a1a]/60 border border-[#3E2C23] rounded-3xl p-8 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-[#C8A97E]">{proj.icon}</div>
              <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-[#C8A97E] text-[#C8A97E]">
                {proj.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#EADCC8] mb-3">{proj.title}</h3>
            <p className="text-[#EADCC8]/70 text-sm mb-6 flex-grow">{proj.desc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-[#3E2C23]/50 text-[#C8A97E] px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 pt-4 border-t border-[#3E2C23]">
              <a href={proj.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-[#EADCC8]/60 hover:text-[#C8A97E]">
                {proj.isGitLab ? <Gitlab size={18} /> : <Github size={18} />} Code
              </a>
              {proj.link && proj.link !== proj.repo && (
                <a href={proj.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-[#EADCC8]/60 hover:text-[#C8A97E]">
                  <Globe size={18} /> Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
