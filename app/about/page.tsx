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
          I am a B.Tech CSE student at Lovely Professional University, currently
          Currently a Data Science Intern at Infosys Springboard (Feb–Apr 2026),
          having built DeepVision Crowd Monitor — a real-time crowd density
          estimation system using CSRNet and MCNN architectures in PyTorch,
          trained on the ShanghaiTech dataset with OpenCV preprocessing,
          heatmap overlays, and Flask/Streamlit dashboards.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I build production-grade systems that solve real problems. FraudNet.AI
          processes financial transactions with sub-200ms inference and 94.2%
          accuracy. DocPat uses Solidity smart contracts and IPFS for
          decentralized medical records with end-to-end encryption. Quanta
          Ballet is a distributed voting system on Hyperledger Fabric with
          cryptographic attack resistance.
        </PageHeaderDescription>

        <PageHeaderDescription>
          As Founder & COO of ECHO Tech Organization, I have led hackathons with
          800+ participants, managed sponsorships and logistics, and mentored
          students in backend development, machine learning, and deployment
          pipelines.
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
