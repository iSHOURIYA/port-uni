import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills &amp; Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          What I work with — no exaggeration, no filler.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Backend systems, ML pipelines, blockchain protocols, and DevOps
          tooling. Every skill listed here has been used in a real project or
          production system.
        </PageHeaderDescription>
      </PageHeader>

      <div className="my-6 space-y-6">
        {mySkills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="px-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
