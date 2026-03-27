import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const achievements = [
  {
    title: '3rd Place — Smart India Inter-University Hackathon 2023',
    description:
      'Secured 3rd place in the Smart India Inter-University Hackathon, competing against teams from multiple universities on real-world problem statements.',
  },
  {
    title: 'Machine Learning Coursework Excellence',
    description:
      'ML I: O (Outstanding), ML II: A, Foundations: A+, NLP: A — consistently top-performing in core ML and AI coursework at LPU.',
  },
  {
    title: 'LeetCode — Rating 1416',
    description:
      'Active competitive programmer with a LeetCode rating of 1416, focused on dynamic programming and algorithmic problem solving.',
  },
  {
    title: 'CodeChef — Bronze Division',
    description:
      'CodeChef Bronze-rated competitive programmer with consistent participation in rated contests.',
  },
];

const AchievementsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Achievements</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Milestones that matter.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Hackathon placements, academic excellence in ML coursework, and
          competitive programming ratings.
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative flex flex-col p-6 overflow-hidden transition-all duration-300 border shadow-sm group bg-card/50 backdrop-blur-sm text-card-foreground rounded-xl border-border/40 hover:border-border/80 hover:shadow-md"
          >
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:opacity-100"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold tracking-tight mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pager
        prevHref="/education"
        nextHref="/contact"
        prevTitle="Education"
        nextTitle="Contact"
      />
    </>
  );
};
export default AchievementsPage;
