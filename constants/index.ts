export type SkillCategory = {
  category: string;
  skills: string[];
};

export const mySkills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Flask',
      'REST APIs',
      'JWT Authentication',
      'RBAC',
      'Prisma ORM',
    ],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'PyTorch',
      'XGBoost',
      'OpenCV',
      'CSRNet',
      'Feature Engineering',
      'LLM APIs',
      'Prompt Engineering',
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      'Docker',
      'Docker Compose',
      'Nginx',
      'Git',
      'GitHub',
      'Linux',
      'Postman',
    ],
  },
  {
    category: 'Blockchain',
    skills: ['Hyperledger Fabric', 'Solidity'],
  },
];
