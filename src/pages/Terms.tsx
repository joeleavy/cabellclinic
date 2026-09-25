import LegalPage from "@/components/LegalPage";

// DRAFT — pending review by Dr. Cabell and counsel.

const Terms = () => (
  <LegalPage
    draft
    title="Terms of Service"
    effectiveDate="[to be set on publication]"
    intro={
      <p>
        Welcome to thomascabellmd.com, the website of The Cabell Clinic. By
        using this site you agree to these terms. They are short, and we have
        tried to write them plainly.
      </p>
    }
    sections={[
      {
        heading: "This website is for information only",
        body: (
          <>
            <p>
              The content on this site — including articles, videos, talks,
              and descriptions of our approach — is provided for general
              educational purposes. It is not medical advice, and it is not a
              substitute for evaluation and care by a physician who knows your
              individual situation.
            </p>
            <p>
              Using this website, submitting a form, or contacting us through
              it does not create a physician–patient relationship. That
              relationship begins only when you formally become a member of
              the practice under a separate membership agreement.
            </p>
          </>
        ),
      },
      {
        heading: "Emergencies",
        body: (
          <p>
            If you are experiencing a medical emergency, call 911 or go to the
            nearest emergency room immediately. This website and our contact
            forms are not monitored for urgent matters.
          </p>
        ),
      },
      {
        heading: "Membership",
        body: (
          <p>
            Descriptions of membership on this site are general and may change.
            The specific terms of membership — including services, fees, and
            responsibilities — are set out in the written membership agreement
            you sign with the practice, which controls over anything on this
            website.
          </p>
        ),
      },
      {
        heading: "Your use of the site",
        body: (
          <>
            <p>You agree not to:</p>
            <ul>
              <li>submit false information through our forms;</li>
              <li>use the site in a way that could damage, disable, or overburden it;</li>
              <li>attempt to gain unauthorized access to any part of the site or its systems.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "Our content",
        body: (
          <p>
            Unless otherwise noted, the text, images, and design of this site
            belong to The Cabell Clinic. Videos and partner logos belong to
            their respective owners and are used with permission or under
            their own terms. You may view and share links to our content for
            personal, non-commercial purposes; please ask before reproducing
            it elsewhere.
          </p>
        ),
      },
      {
        heading: "Third-party sites",
        body: (
          <p>
            Links to other organizations — such as our partners and embedded
            videos — are provided for convenience. We do not control those
            sites and are not responsible for their content, products, or
            practices. A link is not an endorsement of everything a third
            party offers.
          </p>
        ),
      },
      {
        heading: "No warranties; limitation of liability",
        body: (
          <p>
            We work to keep this site accurate and available, but it is
            provided "as is," without warranties of any kind. To the fullest
            extent permitted by law, The Cabell Clinic is not liable for any
            loss or damage arising from your use of, or reliance on, this
            website or its content.
          </p>
        ),
      },
      {
        heading: "Privacy",
        body: (
          <p>
            How we handle the information you send us is described in our
            Privacy Policy, which is part of these terms.
          </p>
        ),
      },
      {
        heading: "Governing law",
        body: (
          <p>
            These terms are governed by the laws of the State of Tennessee,
            without regard to its conflict-of-law rules.
          </p>
        ),
      },
      {
        heading: "Changes",
        body: (
          <p>
            We may update these terms from time to time. Changes take effect
            when posted here, with a revised effective date.
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:info@thecabellclinic.com" className="underline hover:text-navy">
              info@thecabellclinic.com
            </a>{" "}
            or call (615) 237-8706.
          </p>
        ),
      },
    ]}
  />
);

export default Terms;
