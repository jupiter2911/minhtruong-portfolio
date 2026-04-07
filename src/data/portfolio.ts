export interface Publication {
  title: string;
  journal: string;
  year: number;
  authors: string;
  link?: string;
  note?: string;
  tags?: string[];
  doi?: string;
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
  languages: string[];
}

export interface ResearchInterest {
  area: string;
  description: string;
  tags: string[];
}

export interface AcademicProfile {
  name: string;
  url: string;
  icon: "orcid" | "google-scholar";
}

export const portfolioData = {
  profile: {
    fullName: "Minh Truong Cong",
    headline: "Medical Oncologist | Oncology Researcher",
    title: "Dr. Minh Trương Công",
    location: "Hanoi, Vietnam",
    bio: "Medical Oncologist specializing in thoracic and urogenital cancer treatments at K National Hospital. Dedicated to improving patient outcomes through evidence-based medicine and clinical research.",
    authorKeyword: "Truong",
  },

  academicProfiles: [
    {
      name: "ORCID",
      url: "https://orcid.org/0000-0003-3953-6729",
      icon: "orcid",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=tIF9nFcAAAAJ&hl=en",
      icon: "google-scholar",
    },
  ] as AcademicProfile[],

  researchInterests: [
    {
      area: "Thoracic Oncology",
      description:
        "EGFR-mutant NSCLC, uncommon EGFR mutations, treatment optimization with afatinib, real-world evidence in lung cancer management.",
      tags: ["NSCLC", "EGFR", "Afatinib", "Lung Cancer"],
    },
    {
      area: "Breast Oncology",
      description:
        "HR+/HER2− metastatic breast cancer, CDK4/6 inhibitors combined with aromatase inhibitors, real-world effectiveness and safety.",
      tags: ["Breast Cancer", "Ribociclib", "CDK4/6 Inhibitor", "HR+/HER2−"],
    },
    {
      area: "Gynecologic Oncology",
      description:
        "Cervical cancer treatment outcomes, concurrent chemoradiation, FIGO 2018 staging system, prognosis factors.",
      tags: ["Cervical Cancer", "Chemoradiation", "FIGO 2018"],
    },
    {
      area: "Real-World Evidence",
      description:
        "Multicenter cohort studies evaluating treatment effectiveness and safety in Vietnamese patient populations; bridging clinical trial data to practice.",
      tags: ["Real-World Evidence", "Multicenter Study", "Cohort Study"],
    },
  ] as ResearchInterest[],

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
      details: ["GPA: 8.1/10"],
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
      title:
        "Optimizing afatinib dosage: enhancing treatment outcomes and minimizing toxicities in advanced EGFR-mutated non-small cell lung cancer patients in Vietnam",
      journal: "Ther Adv Med Oncol",
      year: 2025,
      authors:
        "Cam Phuong Pham, Hung Kien Do, Anh Tu Do, Tuan Khoi Nguyen, Thi Anh Thu Hoang, Tuan Anh Le, Dinh Thy Hao Vuong, Dac Nhan Tam Nguyen, Van Khiem Dang, Thi Oanh Nguyen, Van Luan Pham, Minh Hai Nguyen, Thi Thai Hoa Nguyen, Thi Bich Phuong Nguyen, Ha Thanh Vu, Thi Thuy Hang Nguyen, Van Thai Pham, Le Huy Trinh, Khac Dung Nguyen, Hoang Gia Nguyen, Cong Minh Truong, Tran Minh Chau Pham, Van Tai Nguyen",
      note: "Co-author",
      doi: "10.1177/17588359251382665",
      link: "https://doi.org/10.1177/17588359251382665",
      tags: ["NSCLC", "EGFR", "Afatinib"],
    },
    {
      title:
        "Excellent survival benefit achieved in patients with advanced-stage non-small cell lung cancer harboring epidermal growth factor receptor-G719X mutation treated by afatinib: real-world data from a multicenter study in Vietnam",
      journal: "Ther Adv Respir Dis",
      year: 2025,
      authors:
        "Van Luan Pham, Cam Phuong Pham, Thi Thai Hoa Nguyen, Tuan Khoi Nguyen, Minh Hai Nguyen, Thi Anh Thu Hoang, Tuan Anh Le, Dinh Thy Hao Vuong, Dac Nhan Tam Nguyen, Van Khiem Dang, Thi Oanh Nguyen, Hung Kien Do, Ha Thanh Vu, Thi Thuy Hang Nguyen, Van Thai Pham, Le Huy Trinh, Hoang Gia Nguyen, Cong Minh Truong, Tran Minh Chau Pham, Thi Bich Phuong Nguyen",
      note: "Co-author",
      doi: "10.1177/17534666251341747",
      link: "https://doi.org/10.1177/17534666251341747",
      tags: ["NSCLC", "EGFR", "G719X", "Afatinib"],
    },
    {
      title:
        "Real-World Evidence for First-Line afatinib in Advanced Non-Small Cell Lung Cancer With Uncommon Epidermal Growth Factor Receptor Mutations Other than G719X/L861Q/S768I",
      journal: "Cancer Control",
      year: 2025,
      authors:
        "Thanh Ha Vu, Thi Hoa Thai Nguyen, To Van Ta, Minh Cong Truong, Thang Bui Xuan, Anh Tuan Nguyen, Cao Van Nguyen, Hang Thuy Thi Nguyen, Tuyet Thi Doan, Thanh Thi Vu, Dung Khac Dinh, Giang Vinh Le, Hung Huy Hoang, Chi Khanh Duong, Linh Khanh Dao",
      note: "Co-author",
      doi: "10.1177/10732748251386133",
      link: "https://doi.org/10.1177/10732748251386133",
      tags: ["NSCLC", "EGFR", "Uncommon Mutations", "Afatinib"],
    },
    {
      title:
        "Real-World Effectiveness and Safety of Ribociclib Plus Aromatase Inhibitors in Patients with HR+/HER2- Metastatic Breast Cancer: A Multicenter Experience from Vietnam",
      journal: "Asian Pac J Cancer Prev",
      year: 2025,
      authors:
        "Hoa Nguyen, Quang Le, Huyen Phung, Quang Nguyen, Huong Vu, Minh Truong",
      note: "Co-author",
      doi: "10.31557/apjcp.2025.26.11.4209",
      link: "https://doi.org/10.31557/apjcp.2025.26.11.4209",
      tags: ["Breast Cancer", "Ribociclib", "CDK4/6 Inhibitor"],
    },
    {
      title:
        "Real-world analysis of afatinib as a first-line treatment for patients with advanced stage non-small-cell lung cancer with uncommon EGFR mutations: a multicenter study in Vietnam",
      journal: "Ther Adv Med Oncol",
      year: 2024,
      authors:
        "Van Luan Pham, Tuan Anh Le, Cam Phuong Pham, Thi Thai Hoa Nguyen, Anh Tu Do, Tuan Khoi Nguyen, Minh Hai Nguyen, Thi Anh Thu Hoang, Dinh Thy Hao Vuong, Dac Nhan Tam Nguyen, Van Khiem Dang, Thi Oanh Nguyen, Thi Huyen Trang Vo, Hung Kien Do, Ha Thanh Vu, Thi Thuy Hang Nguyen, Van Thai Pham, Le Huy Trinh, Khac Dung Nguyen, Hoang Gia Nguyen, Cong Minh Truong, Tran Minh Chau Pham, Thi Bich Phuong Nguyen",
      note: "Co-author",
      doi: "10.1177/17588359241242972",
      link: "https://doi.org/10.1177/17588359241242972",
      tags: ["NSCLC", "EGFR", "Uncommon Mutations", "Afatinib"],
    },
    {
      title:
        "A real-world cohort study of first-line afatinib in patients with EGFR-mutant advanced non-small cell lung cancer in Vietnam",
      journal: "BMC Cancer",
      year: 2024,
      authors:
        "Cam Phuong Pham, Thi Thai Hoa Nguyen, Anh Tu Do, Tuan Khoi Nguyen, Thi Anh Thu Hoang, Tuan Anh Le, Dinh Thy Hao Vuong, Dac Nhan Tam Nguyen, Van Khiem Dang, Thi Oanh Nguyen, Van Luan Pham, Minh Hai Nguyen, Thi Huyen Trang Vo, Hung Kien Do, Ha Thanh Vu, Thi Thuy Hang Nguyen, Van Thai Pham, Le Huy Trinh, Khac Dung Nguyen, Hoang Gia Nguyen, Cong Minh Truong, Tran Minh Chau Pham, Thi Bich Phuong Nguyen",
      note: "Co-author",
      doi: "10.1186/s12885-024-11891-w",
      link: "https://doi.org/10.1186/s12885-024-11891-w",
      tags: ["NSCLC", "EGFR", "Afatinib", "Cohort Study"],
    },
    {
      title:
        "Effectiveness and Tolerability of First-Line Afatinib for Advanced EGFR-Mutant Non-Small Cell Lung Cancer in Vietnam",
      journal: "Asian Pac J Cancer Prev",
      year: 2021,
      authors:
        "Thanh Vu, Hoa Nguyen, Linh Dao, Chi Duong, Cao Nguyen, Tuyet Doan, Hang Nguyen, Hung Hoang, Dung Dinh, Giang Le, Thanh Vu, Minh Truong, Long Nguyen",
      note: "Co-author",
      doi: "10.31557/apjcp.2021.22.5.1581",
      link: "https://doi.org/10.31557/apjcp.2021.22.5.1581",
      tags: ["NSCLC", "EGFR", "Afatinib"],
    },
    {
      title:
        "Treatment Outcome and Prognosis Factors of FIGO 2018 Stage III Cervical Cancer Patients Treated with Definitive Concurrent Chemoradiation in Vietnam",
      journal: "Asian Pac J Cancer Prev",
      year: 2021,
      authors:
        "Huyen Phung, Minh Truong, Long Nguyen, Anh Dang, Thanh Vu, Hoa Nguyen",
      note: "Corresponding author",
      doi: "10.31557/apjcp.2021.22.3.853",
      link: "https://doi.org/10.31557/apjcp.2021.22.3.853",
      tags: ["Cervical Cancer", "Chemoradiation", "FIGO 2018"],
    },
  ],

  achievements: [
    {
      title: "International Clinical Research Scholars (ICRS) Program Award",
      year: "2026–2027",
      organization: "ASCO Asia Pacific Regional Council",
      description: [
        "Awarded by ASCO Asia Pacific Regional Council with support from ASCO Conquer Cancer Mission Endowment",
        "Recognizes professional achievements and potential as a leader of oncology research",
        "Participating in a 1-year program providing investigator training and mentorship from research experts",
      ],
    },
    {
      title: "TLCS Research Investigator Award",
      year: "November 2023",
      organization: "ASPIRE Workshop, Taipei",
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
    languages: ["English", "Vietnamese"],
  },

  seo: {
    title: "Dr. Minh Trương – Medical Oncologist & Oncology Researcher",
    description:
      "Medical Oncologist specializing in thoracic and urogenital cancer treatments at K National Hospital, Hanoi. Oncology researcher with multiple peer-reviewed publications.",
    url: "https://minhtruong-portfolio.vercel.app",
  },
};
