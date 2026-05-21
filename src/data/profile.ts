import { type Profile } from '../types';

export const profileData: Profile = {
  name: "André Fragata",
  title: "Profissional de T.I | Foco em Cybersegurança",
  location: "Francisco Beltrão, PR",
  email: "andrefragata14@gmail.com",
  linkedin: "https://www.linkedin.com/in/andrefra",
  phone: "+55 (46) 99139-3338",
  education: "Tecnólogo em Análise e Desenvolvimento de Sistemas — CESUL",
  currentRole: {
    role: "Coordenador de Suporte de T.I",
    company: "Prefeitura Municipal de Francisco Beltrão",
    period: "jan/2025 – presente",
    responsibilities: [
      "Coordenação de equipe de suporte técnico e atendimento",
      "Gerenciamento de infraestrutura de rede corporativa e servidores municipais",
      "Desenvolvimento e aplicação de políticas de segurança da informação (foco em adequação à LGPD)",
      "Gestão de contratos públicos de T.I e aquisição de ativos tecnológicos",
      "Suporte de infraestrutura e serviços em mais de 80 unidades municipais",
      "Controle de acesso, gerenciamento de domínio (Active Directory) e segurança de endpoints"
    ]
  },
  certifications: [
    { name: "pfSense", hours: 85 },
    { name: "MikroTik", hours: 27.5 },
    { name: "Arquitetura de Redes", hours: 25 },
    { name: "Linux Fundamental", hours: 20 },
    { name: "Auditoria de Logs", hours: 20 },
    { name: "Fundamentos de SQL", hours: 20 },
    { name: "DevOps Essentials", hours: 20 },
    { name: "Shell Script", hours: 12.5 },
    { name: "Proxmox", hours: 12 },
    { name: "Linux AD", hours: 9.5 },
    { name: "Fundamentos de Inteligência de Ameaças", hours: 5 }
  ],
  totalCertHours: 256.5
};
