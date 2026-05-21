export interface Certification {
  name: string;
  hours: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  education: string;
  currentRole: {
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
  };
  certifications: Certification[];
  totalCertHours: number;
}

export interface Post {
  id: string; // Slug ou identificador único
  title: string;
  content: string; // Conteúdo bruto do Markdown
  preview: string; // 120 caracteres de texto puro
  uploadDate: string; // Data formatada
}
