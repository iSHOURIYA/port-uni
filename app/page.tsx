import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>SHOURIYA TAYAL</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Backend & ML Engineer building low-latency, production-grade systems
        </PageHeaderHeading>
        <PageHeaderDescription>
          Building real-time inference systems with sub-200ms latency,
          blockchain-backed data platforms, and production-grade APIs. Currently
          a Data Science Intern at Infosys Springboard working on crowd density
          estimation with CSRNet/MCNN, and Founder & COO of ECHO Tech leading
          800+ participant hackathons.
        </PageHeaderDescription>
        <PageHeaderDescription className="flex items-center gap-2 text-sm">
          <MapPin className="size-4" />
          Phagwara, Punjab, India · +91-8218109345
        </PageHeaderDescription>
        <PageHeaderDescription className="text-sm text-primary">
          Open to full-time roles & internships · Open to relocation
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
