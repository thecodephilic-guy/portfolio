import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contributions.metadata.title,
  description: pagesConfig.contributions.metadata.description,
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title={pagesConfig.contributions.title}
      description={pagesConfig.contributions.description}
    >
      <div className="w-full bg-muted py-10 px-6 md:px-12 my-8 rounded-3xl">
        <ContributionCard
          contributions={contributionsUnsorted}
        />
      </div>
    </PageContainer>
  );
}
