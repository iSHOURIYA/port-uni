export const dynamic = "force-dynamic";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { getGitHubStatsServerAction } from "../actions/getGitHubStatsServerAction";
import GitHubGraphs from "./GitHubGraphs";
import Pager from "@/components/pager";

const StatCard = ({
  title,
  value,
  className = "",
}: {
  title: string;
  value: string | number;
  className?: string;
}) => (
  <div
    className={`card border border-border/40 rounded-xl p-4 w-full h-full transition-transform duration-200 hover:scale-105 ${className}`}
  >
    <div className="card-content">
      <h3 className="text-lg font-semibold tracking-tight card-title text-muted-foreground">
        {title}
      </h3>
      <span className="text-5xl font-bold leading-tight tracking-tight card-value">
        {value}
      </span>
    </div>
  </div>
);

const Stats = async () => {
  const githubStats = await getGitHubStatsServerAction();

  const githubStatCards = [
    {
      title: "Hireable",
      value: (githubStats as any).hireable && "Yes",
      className: (githubStats as any).hireable && "bg-green-500/20",
    },
    {
      title: "Total Public Repositories",
      value: (githubStats as any).public_repos,
    },
    {
      title: "Followers",
      value: (githubStats as any).followers,
    },
    {
      title: "Following",
      value: (githubStats as any).following,
    },
    {
      title: "Current Company",
      value: (githubStats as any).company,
    },
    {
      title: "Location",
      value: (githubStats as any).location,
    },
  ];

  return (
    <>
      {/* GitHub Stats */}
      <PageHeader className="mb-4">
        <PageHeaderHeading>GitHub Stats</PageHeaderHeading>
        <PageHeaderDescription>
          Insights and metrics about my GitHub profile
        </PageHeaderDescription>
      </PageHeader>

      {/* GitHub Contribution Graph */}
      <div className="flex items-center justify-center w-full p-4 mb-8 border border-border/40 rounded-xl">
        <GitHubGraphs />
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-4 card-container md:grid-cols-3">
          {githubStatCards.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value || "N/A"}
              className={card.className}
            />
          ))}
        </div>
      </div>

      <Pager
        prevHref="/contact"
        nextHref="/"
        prevTitle="Contact"
        nextTitle="Home"
      />
    </>
  );
};

export default Stats;
