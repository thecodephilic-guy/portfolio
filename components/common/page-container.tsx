import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div>
        <PageHeader title={title} description={description} />
        <div className="px-2 sm:px-4 lg:px-6 max-w-full">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
