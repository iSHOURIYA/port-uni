import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          The foundation behind the systems.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Pursuing B.Tech in Computer Science & Engineering at Lovely
          Professional University, Phagwara with a CGPA of 7.39. Key ML
          coursework includes Machine Learning I (O grade), Machine Learning II
          (A), Foundations (A+), and NLP (A).
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/achievements"
        prevTitle="Experience"
        nextTitle="Achievements"
      />
    </>
  );
};
export default EducationPage;
