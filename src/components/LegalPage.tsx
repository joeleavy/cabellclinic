import { ReactNode, useEffect } from "react";
import Layout from "@/components/layout/Layout";

type Section = {
  heading: string;
  body: ReactNode;
};

type Props = {
  title: string;
  effectiveDate: string;
  intro: ReactNode;
  sections: Section[];
  /** Draft pages are noindexed and carry a review banner. */
  draft?: boolean;
};

const LegalPage = ({ title, effectiveDate, intro, sections, draft }: Props) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title}${draft ? " (Draft)" : ""} | The Cabell Clinic`;
    let meta: HTMLMetaElement | null = null;
    if (draft) {
      meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow";
      document.head.appendChild(meta);
    }
    return () => {
      document.title = previousTitle;
      if (meta) document.head.removeChild(meta);
    };
  }, [title, draft]);

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pb-24 bg-soft-white">
        <div className="container-narrow">
          {draft && (
            <div className="border border-gold/40 bg-gold/5 px-5 py-4 mb-10 text-sm text-navy">
              <strong>Draft for review.</strong> This page is unlisted and not
              yet in effect. Pending review by Dr. Cabell and the clinic's
              attorney before publication.
            </div>
          )}
          <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-display-lg text-navy mb-4">{title}</h1>
          <p className="text-sm text-muted-foreground/70 mb-10">
            Effective date: {effectiveDate}
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed mb-12">
            {intro}
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-2xl text-navy mb-3">
                  {section.heading}
                </h2>
                <div className="text-muted-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPage;
