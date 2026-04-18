export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    writeup?: string;
  };
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Pipeline de Recon Automatizado',
    description: 'Ferramenta que automatiza a fase de reconhecimento em bug bounty: enumeração de subdomínios, varredura de portas, detecção de tecnologias e geração de relatórios.',
    tags: ['Python', 'Shell', 'Nuclei', 'Bug Bounty'],
    links: {
      github: 'https://github.com/OwLinxs',
    },
    featured: true,
  },
  {
    title: 'Infraestrutura Municipal com pfSense',
    description: 'Implementação e gerenciamento de rede municipal usando pfSense, Samba AD, Proxmox e TrueNAS para uma prefeitura com +200 usuários.',
    tags: ['pfSense', 'Proxmox', 'Samba AD', 'Linux'],
    links: {},
    featured: true,
  },
  {
    title: 'Homelab com Proxmox',
    description: 'Servidor pessoal de estudos com Proxmox VE rodando VMs para testes de segurança, CTFs e experimentação com tecnologias de infraestrutura.',
    tags: ['Proxmox', 'Docker', 'TrueNAS', 'Redes'],
    links: {
      github: 'https://github.com/OwLinxs',
    },
    featured: true,
  },
];
