export type SkillCategory = {
  category: string;
  skills: string[];
};

export const mySkills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'Java', 'JavaScript/TypeScript', 'SQL'],
  },
  {
    category: 'ML / AI',
    skills: [
      'PyTorch',
      'XGBoost',
      'CSRNet',
      'MCNN',
      'OpenCV',
      'Feature Engineering',
      'SMOTE',
      'Model Evaluation',
    ],
  },
  {
    category: 'Backend',
    skills: ['Flask', 'REST APIs', 'Next.js', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'Linux'],
  },
  {
    category: 'DevOps',
    skills: [
      'Docker',
      'Docker Compose',
      'Kubernetes (basics)',
      'Nginx',
      'GitHub Actions',
      'CI/CD',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    category: 'Security / Web3',
    skills: ['JWT', 'RBAC', 'Solidity', 'IPFS', 'Hyperledger Fabric'],
  },
  {
    category: 'Competitive Programming',
    skills: ['LeetCode (Rating 1416, DP)', 'CodeChef Bronze'],
  },
];