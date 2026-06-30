import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Shouriya</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Systems builder, not just a coder.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a final-year B.Tech Computer Science student at Lovely
          Professional University with a passion for backend engineering and
          AI-powered applications. Previously a Data Science Intern at Infosys
          Springboard, where I built DeepVision Crowd Monitor using CSRNet,
          FastAPI, React, OpenCV, and Docker for real-time crowd density
          estimation.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I enjoy building production-ready software that solves real
          problems—from AI infrastructure and API platforms to machine learning
          systems. My projects include GenAff, a multi-provider AI API gateway
          with billing and analytics, FraudNet.AI, a real-time fraud detection
          platform, and Quanta Ballot, a blockchain-based voting system.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond development, I serve as Founder & COO of ECHO Tech
          Organization, leading hackathons and technical events with 800+
          participants while mentoring students in backend development, AI/ML,
          and software engineering.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
