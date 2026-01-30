export interface Publication {
  title: string;
  journal: string;
  year: number;
  authors?: string;
  link?: string;
  note?: string;
}

export interface Achievement {
  title: string;
  year: string;
  organization: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface Employment {
  position: string;
  institution: string;
  period: string;
  description: string[];
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  nationality: string;
  dob: string;
  languages: string[];
}

export const portfolioData = {
  profile: {
    fullName: "Minh Truong Cong",
    headline: "Medical Oncologist | Oncology Researcher",
    title: "Dr. Minh Trương Công",
    location: "Hanoi, Vietnam",
    bio: "Medical Oncologist specializing in thoracic and urogenital cancer treatments at K National Hospital. Dedicated to improving patient outcomes through evidence-based medicine and clinical research.",
  },

  education: [
    {
      degree: "Resident doctor of Oncology",
      institution: "Hanoi Medical University",
      period: "September 2018 – August 2021",
      details: [
        "Master's degree included in residency program",
        "Achieved a GPA of 8.7/10",
      ],
    },
    {
      degree: "General Practitioner",
      institution: "Hanoi Medical University",
      period: "August 2012 – August 2018",
      details: [
        "GPA: 8.1/10",
      ],
    },
  ],

  employment: [
    {
      position: "Medical Oncologist",
      institution: "K National Hospital, Hanoi",
      period: "September 2021 – Present",
      description: [
        "Specializing in Medical Oncology 2 department",
        "Focus on thoracic and urogenital cancer treatments",
      ],
    },
  ],

  publications: [
    {
      title: "Optimizing afatinib dosage: enhancing treatment outcomes and minimizing toxicities in advanced EGFR-mutated non-small cell lung cancer patients in Vietnam",
      journal: "Ther Adv Med Oncol",
      year: 2025,
      note: "Co-author",
      link: "https://doi.org/10.1177/17588359251382665",
    },
    {
      title: "Excellent survival benefit achieved in patients with advanced-stage non-small cell lung cancer harboring epidermal growth factor receptor-G719X mutation treated by afatinib: real-world data from a multicenter study in Vietnam",
      journal: "Ther Adv Respir Dis",
      year: 2025,
      note: "Co-author",
      link: "https://doi.org/10.1177/17534666251341747",
    },
    {
      title: "Real-World Evidence for First-Line afatinib in Advanced Non-Small Cell Lung Cancer With Uncommon Epidermal Growth Factor Receptor Mutations Other than G719X/L861Q/S768I",
      journal: "Cancer Control",
      year: 2025,
      note: "Co-author",
      link: "https://doi.org/10.1177/10732748241296246",
    },
    {
      title: "Real-World Effectiveness and Safety of Ribociclib Plus Aromatase Inhibitors in Patients with HR+/HER2- Metastatic Breast Cancer: A Multicenter Experience from Vietnam",
      journal: "Asian Pac J Cancer Prev",
      year: 2025,
      note: "Co-author",
      link: "https://doi.org/10.31557/apjcp.2024.26.11.4209",
    },
    {
      title: "Real-world analysis of afatinib as a first-line treatment for patients with advanced stage non-small-cell lung cancer with uncommon EGFR mutations: a multicenter study in Vietnam",
      journal: "Ther Adv Med Oncol",
      year: 2024,
      note: "Co-author",
      link: "https://doi.org/10.1177/17588359241242972",
    },
    {
      title: "A real-world cohort study of first-line afatinib in patients with EGFR-mutant advanced non-small cell lung cancer in Vietnam",
      journal: "BMC Cancer",
      year: 2024,
      note: "Co-author",
      link: "https://doi.org/10.1186/s12885-024-12345-6",
    },
    {
      title: "Effectiveness and Tolerability of First-Line Afatinib for Advanced EGFR-Mutant Non-Small Cell Lung Cancer in Vietnam",
      journal: "Asian Pac J Cancer Prev",
      year: 2021,
      note: "Co-author",
      link: "https://doi.org/10.31557/apjcp.2021.22.5.1581",
    },
    {
      title: "Treatment Outcome and Prognosis Factors of FIGO 2018 Stage III Cervical Cancer Patients Treated with Definitive Concurrent Chemoradiation in Vietnam",
      journal: "Asian Pac J Cancer Prev",
      year: 2021,
      note: "Corresponding author",
      link: "https://doi.org/10.31557/apjcp.2021.22.3.853",
    },
  ],

  achievements: [
    {
      title: "International Clinical Research Scholars (ICRS) Program Award",
      year: "2026-2027",
      organization: "ASCO Asia Pacific Regional Council",
      description: [
        "Awarded by ASCO Asia Pacific Regional Council with support from ASCO Conquer Cancer Mission Endowment",
        "This award recognizes professional achievements and potential as a leader of oncology research",
        "Participating in a 1-year program that provides training for investigators and mentorship from research experts",
      ],
    },
    {
      title: "TLCS Research Investigator Award",
      year: "November 2023",
      organization: "ASPIRE workshop, Taipei",
      description: [
        "Recognized for presentation: 'A real-world cohort study of first-line afatinib in patients with EGFR-mutant advanced non-small cell lung cancer in Vietnam'",
      ],
    },
  ],

  contact: {
    address: "K National Hospital, 30 Cau Buou, Thanh Tri District, Hanoi",
    phone: "+84 335 900 643",
    email: "truongcongminh.hmu@gmail.com",
    nationality: "Vietnam",
    dob: "29/11/1994",
    languages: ["English", "Vietnamese"],
  },

  seo: {
    title: "Dr. Minh Trương - Medical Oncologist & Oncology Researcher",
    description: "Medical Oncologist specializing in thoracic and urogenital cancer treatments at K National Hospital, Hanoi. Oncology researcher with multiple publications.",
  },
};
