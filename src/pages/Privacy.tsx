import LegalPage from "@/components/LegalPage";

// DRAFT — written to match what the site actually does as of Sept 2026:
// contact/invitation/self-assessment forms emailed to the clinic (via a
// Cloudflare Worker + Resend, with a FormSubmit backup relay), no analytics
// or advertising trackers, YouTube privacy-enhanced embeds, Google Fonts.
// Update this page if any of that changes. Pending attorney review.

const Privacy = () => (
  <LegalPage
    draft
    title="Privacy Policy"
    effectiveDate="[to be set on publication]"
    intro={
      <p>
        The Cabell Clinic ("we," "us") respects your privacy. This policy
        explains, in plain language, what information this website collects,
        how we use it, and the choices you have. It applies to
        thomascabellmd.com only — not to the care we provide as your
        physician, which is governed by our separate patient privacy
        practices.
      </p>
    }
    sections={[
      {
        heading: "Information you give us",
        body: (
          <>
            <p>
              The only personal information this website collects is what you
              choose to send us through our forms — Request an Invitation, the
              Contact form, and the Self-Assessment. Depending on the form,
              that may include your name, email address, phone number, your
              answers to the self-assessment questions, and anything you write
              in a message field.
            </p>
            <p>
              You do not need an account to use this site, and we do not ask
              you to create one.
            </p>
          </>
        ),
      },
      {
        heading: "Please don't send sensitive health details through the site",
        body: (
          <>
            <p>
              Our website forms are a way to introduce yourself and start a
              conversation. They are not a secure patient portal and do not
              create a physician–patient relationship. Please do not include
              detailed medical history, test results, or other sensitive health
              information in a website form — we will gather that through
              appropriate channels once we are working together.
            </p>
            <p>
              If you are experiencing a medical emergency, call 911 or go to
              the nearest emergency room. Do not use this website.
            </p>
          </>
        ),
      },
      {
        heading: "How we use your information",
        body: (
          <>
            <p>We use what you send us to:</p>
            <ul>
              <li>respond to your inquiry and schedule an introductory conversation;</li>
              <li>evaluate whether our membership practice is a good fit for you;</li>
              <li>communicate with you about the clinic when you have asked us to.</li>
            </ul>
            <p>
              We do not sell your information, and we do not share it with
              advertisers or data brokers. We do not currently send a
              newsletter; if we launch one, it will be opt-in only and you
              will be able to unsubscribe at any time.
            </p>
          </>
        ),
      },
      {
        heading: "How your submission travels to us",
        body: (
          <>
            <p>
              When you submit a form, it is delivered to our clinic inbox by
              email. To make that happen, we rely on a small number of service
              providers who process the information solely on our behalf:
            </p>
            <ul>
              <li>
                <strong>Cloudflare</strong> hosts this website and runs the
                service that receives your form submission.
              </li>
              <li>
                <strong>Resend</strong> delivers the submission to our inbox as
                an email.
              </li>
              <li>
                <strong>FormSubmit</strong> is used only as a backup delivery
                route if our primary service is unavailable, so that your
                inquiry is not lost.
              </li>
              <li>
                <strong>Google Workspace</strong> hosts the clinic email
                accounts where your submission ultimately arrives.
              </li>
            </ul>
            <p>
              These providers are not permitted to use your information for
              their own purposes.
            </p>
          </>
        ),
      },
      {
        heading: "Cookies and tracking",
        body: (
          <>
            <p>
              This website does not use analytics services, advertising
              pixels, or any tracking technology to follow you across the web.
              We do not show you a cookie banner because we have nothing to
              ask your consent for.
            </p>
            <p>The following limited technologies are in use:</p>
            <ul>
              <li>
                <strong>Cloudflare</strong> may set strictly functional
                security cookies that help protect the site from automated
                abuse. They do not identify you or track your browsing.
              </li>
              <li>
                <strong>YouTube videos</strong> on some pages are embedded
                using YouTube's privacy-enhanced mode, which does not set
                tracking cookies unless you choose to play a video. Playing a
                video is subject to Google's privacy policy.
              </li>
              <li>
                <strong>Google Fonts</strong> supplies the typefaces on this
                site. Loading them sends your browser's request (including
                your IP address) to Google, as with any web resource; Google
                states that it does not use these requests for tracking.
              </li>
            </ul>
            <p>
              If we ever add analytics or similar tools, we will update this
              policy first.
            </p>
          </>
        ),
      },
      {
        heading: "Technical information",
        body: (
          <p>
            Like virtually every website, our hosting provider automatically
            records basic technical details when you visit — such as your IP
            address, browser type, and the pages requested — in server logs
            used for security and to keep the site running. We do not use
            these logs to identify or profile individual visitors.
          </p>
        ),
      },
      {
        heading: "Links to other websites",
        body: (
          <p>
            Our site links to other organizations, including the partners
            listed on our Our Partners page and the videos on our Resources
            page. Those sites have their own privacy practices, which we do
            not control. We encourage you to review them.
          </p>
        ),
      },
      {
        heading: "How long we keep your information",
        body: (
          <p>
            Form submissions are kept in our clinic email for as long as
            needed to respond to you and, if you become a member, as part of
            our records. If you do not proceed with membership, you may ask us
            to delete your submission at any time.
          </p>
        ),
      },
      {
        heading: "Your choices",
        body: (
          <p>
            You can ask us what information we hold about you from this
            website, ask us to correct it, or ask us to delete it, by emailing{" "}
            <a href="mailto:info@thecabellclinic.com" className="underline hover:text-navy">
              info@thecabellclinic.com
            </a>{" "}
            or calling (615) 237-8706. We will respond within a reasonable
            time.
          </p>
        ),
      },
      {
        heading: "Children",
        body: (
          <p>
            This website is intended for adults. We do not knowingly collect
            information from anyone under 18 through the site.
          </p>
        ),
      },
      {
        heading: "Changes to this policy",
        body: (
          <p>
            If we change how this website handles your information, we will
            update this page and revise the effective date above. Continued use
            of the site after a change means you accept the updated policy.
          </p>
        ),
      },
      {
        heading: "Contact us",
        body: (
          <p>
            The Cabell Clinic
            <br />
            105 Continental Place, Suite 160
            <br />
            Brentwood, TN 37027
            <br />
            (615) 237-8706 · info@thecabellclinic.com
          </p>
        ),
      },
    ]}
  />
);

export default Privacy;
