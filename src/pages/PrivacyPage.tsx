import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[72px] md:pt-[88px]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12">
          <header className="space-y-3 border-b border-border pb-8">
            <h1 className="font-display text-3xl md:text-5xl text-foreground">Data Protection Notice</h1>
            <p className="text-lg text-foreground">Bethel Chambers LLC</p>
            <p className="text-sm text-muted-foreground">Last updated: 17 September 2026 · Version 1.0</p>
          </header>

          <Section title="1. About this notice">
            <p>Bethel Chambers LLC ("we", "us") is a law practice in Singapore.</p>
            <p>
              This notice tells you how we collect, use, disclose and protect personal data. It follows the Personal
              Data Protection Act 2012 (the "PDPA").
            </p>
            <p>
              This notice covers personal data about our clients. It also covers personal data about other persons
              related to our matters. Some of these persons have never contacted us.
            </p>
            <p>
              We also have a duty of confidentiality to our clients. Legal professional privilege also applies to our
              work. These duties are separate from the PDPA. In some cases they are stricter. This notice does not
              reduce these duties.
            </p>
          </Section>

          <Section title="2. Persons we hold personal data about">
            <p>We hold personal data about:</p>
            <Bullets
              items={[
                "Clients, possible clients, and persons who book a consultation",
                "Persons related to a client's matter. This includes spouses, former spouses, children, family members, executors, beneficiaries, next-of-kin, donors and donees under a Lasting Power of Attorney, persons who do not have mental capacity, and their deputies and carers",
                "Other parties to a matter. This includes opposing parties, their lawyers, witnesses, counterparties, and their advisers",
                "Professional contacts. This includes foreign lawyers, agents, experts, and court staff",
                "Job applicants and our own staff",
                "Persons who visit our website, or who contact us by email, telephone or WhatsApp",
              ]}
            />
          </Section>

          <Section title="3. How your personal data is collected">
            <p>
              Often the person does not give us the personal data. We get personal data about other persons from our
              client. We also get it from opposing parties, from courts, and from public registries. This is necessary
              in family, probate, mental capacity and litigation matters.
            </p>
            <p>Some of these sources include:</p>
            <Bullets
              items={[
                "Directly from you or your business, including through our client due diligence and onboarding process",
                "From opposing parties, courts, tribunals and public registries",
                "Through your use of our website, including enquiry forms and cookies (see Section 10)",
                "Through networking, for example at conferences, seminars or events we host or attend",
                "From publicly available sources, such as ACRA, court records, the Law Society directory, and professional or media profiles",
              ]}
            />
            <p>
              We do not rely on consent when we hold personal data about a person who is not our client. Instead we
              rely on the following:
            </p>
            <Bullets
              items={[
                "Collection, use or disclosure that is necessary for an investigation or proceedings (First Schedule, Part 3)",
                "Legitimate interests, when the benefit is greater than any bad effect on the person",
                "Collection, use or disclosure that the law requires or permits. This includes court rules, court orders, the Legal Profession Act 1966, and rules made under that Act",
                "Consent, or deemed consent, when the person has received notice",
              ]}
            />
            <p>We record the basis when the basis is not clear.</p>
          </Section>

          <Section title="4. Why we use personal data, and our lawful basis">
            <p>We use personal data to:</p>
            <Bullets
              items={[
                "Check for conflicts of interest before we accept a matter",
                "Do client due diligence and identity checks. The Legal Profession (Prevention of Money Laundering, Financing of Terrorism and Proliferation Financing) Rules 2015 require this",
                "Give legal advice and act for our clients",
                "Prepare and file documents with courts, tribunals and registries",
                "Write to other parties",
                "Instruct foreign lawyers, agents, experts, valuers and process servers",
                "Issue bills, keep accounts, and recover fees",
                "Obey our professional and legal duties. This includes duties to the Law Society of Singapore, to courts, and to the authorities",
                "Answer complaints, claims and disciplinary proceedings",
                "Manage the firm, and instruct our insurers and advisers",
                "Recruit and employ staff",
                "Send information about our services to persons who agreed to receive it",
              ]}
            />
            <p>
              If we need personal data by law, or under the terms of our engagement with you, and it is not provided
              when requested, we may be unable to act for you or to continue acting for you.
            </p>
            <h3 className="font-display text-xl text-foreground">Direct marketing</h3>
            <p>
              You can withdraw consent to marketing, or opt out, at any time by contacting us using the details in
              Section 11. Marketing emails include an unsubscribe option.
            </p>
          </Section>

          <Section title="5. Who we disclose personal data to">
            <p>
              We disclose personal data only when it is necessary for the purposes in Section 4, or when the law
              requires or permits it.
            </p>
            <p>We can disclose personal data to:</p>
            <Bullets
              items={[
                "Courts, tribunals, registries and authorities, in Singapore and in other countries",
                "Other parties to a matter, and their lawyers",
                "Foreign lawyers, agents and experts that we instruct",
                "Our bank, accountant, auditor, book-keeper, insurers and advisers",
                "Service providers that process personal data for us, under a contract. This includes our practice management system, our document system, our IT support, our storage and destruction contractors, and our booking service",
              ]}
            />
            <p>
              We do not sell personal data. We do not disclose personal data for the marketing of other organisations.
            </p>
          </Section>

          <Section title="6. Transfers out of Singapore">
            <p>
              We instruct lawyers and agents in other countries. We write to clients in other countries. Some of our
              service providers keep data outside Singapore. Our booking service is one example.
            </p>
            <p>
              Before we transfer personal data out of Singapore, we take steps to protect it. We make sure the
              recipient must give a standard of protection comparable to the PDPA. Usually we do this by contract.
            </p>
          </Section>

          <Section title="7. How we protect personal data">
            <p>
              We use reasonable security arrangements. These arrangements protect personal data against unauthorised
              access, collection, use, disclosure, copying, modification and disposal.
            </p>
            <p>Our arrangements include:</p>
            <Bullets
              items={[
                "Access controls on matter files",
                "Multi-factor authentication on our systems",
                "Encryption of data in transit and at rest",
                "Limits on the removal of client information from our systems",
                "Training for all staff",
              ]}
            />
          </Section>

          <Section title="8. How long we keep personal data">
            <p>We stop keeping personal data when two conditions are true:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The purpose of collection is complete</li>
              <li>We no longer need the personal data for legal or business purposes</li>
            </ol>
            <p>
              We can also remove the means to connect the personal data to a person. This has the same effect.
            </p>
            <p>
              For a law practice, legal and business purposes continue for a long time after a matter closes. The
              reasons are:
            </p>
            <Bullets
              items={[
                "Limitation periods for claims about the matter",
                "Our exposure to professional negligence claims and complaints",
                "The duty to keep client due diligence records for at least five years after the business relationship ends",
                "The duty to preserve books of account, ledgers, records and bank statements for client accounts for at least six years",
                "Court orders, undertakings, and current or expected proceedings",
              ]}
            />
            <p>
              We apply a written retention schedule. The schedule gives a period for each type of record. You can ask
              us for a copy.
            </p>
          </Section>

          <Section title="9. Your rights">
            <p>
              <strong className="text-foreground">Access.</strong> You can ask us what personal data we hold about you.
              You can also ask how we used or disclosed it in the past year.
            </p>
            <p>
              <strong className="text-foreground">Correction.</strong> You can ask us to correct an error in your
              personal data.
            </p>
            <p>
              <strong className="text-foreground">Withdrawal of consent.</strong> You can withdraw your consent when we
              rely on it. Give us reasonable notice. We will tell you the results of the withdrawal. If you are a
              client in a current matter, we can become unable to continue to act for you.
            </p>
            <p>
              <strong className="text-foreground">Limits on these rights.</strong> The PDPA does not require us to give
              personal data in the Fifth Schedule. This applies often in a law practice. Examples are:
            </p>
            <Bullets
              items={[
                "Material that legal professional privilege protects",
                "Opinion data that we keep only to make an evaluation",
                "Personal data that would show confidential commercial information",
                "Personal data about another person, which we must not give to you",
              ]}
            />
            <p>If we refuse a request for one of these reasons, we will tell you the reason.</p>
            <p>
              If you are a party against our client, we will assess your request in the same way. But our duties to our
              client do not change.
            </p>
            <p>
              <strong className="text-foreground">How to make a request.</strong> Write to our Data Protection Officer.
              Section 11 gives the contact details. Describe the personal data clearly, so that we can find it. We can
              ask you to prove your identity first.
            </p>
            <p>
              <strong className="text-foreground">What we may need from you.</strong> We may ask you for specific
              information to confirm your identity before we act on your request. This protects your personal data from
              being disclosed to someone who has no right to it, and is not a way of delaying a legitimate request.
            </p>
            <p>
              <strong className="text-foreground">Our response time.</strong> We will respond as soon as we reasonably
              can. If we cannot respond in 30 days, we will tell you the date of our response. We will tell you this in
              those 30 days.
            </p>
            <p>
              <strong className="text-foreground">Fee.</strong> The firm has discretion to charge a fee for access
              requests. If we decide to charge a fee, we will inform you of the fee before we proceed with your
              request.
            </p>
          </Section>

          <Section title="10. Cookies and this website">
            <p>Our website uses cookies. The cookies operate the site and show us how visitors use it.</p>
          </Section>

          <Section title="11. Contact and complaints">
            <p>Our Data Protection Officer is responsible for our compliance with the PDPA.</p>
            <p>
              <strong className="text-foreground">Data Protection Officer</strong>
              <br />
              Yue-En Chong, Managing Director, Bethel Chambers LLC
            </p>
            <p>
              Address: 39B Neil Road, Singapore 088823
              <br />
              Email:{" "}
              <a className="text-accent hover:underline" href="mailto:dpo@bethelchambers.com">
                dpo@bethelchambers.com
              </a>
              <br />
              Telephone:{" "}
              <a className="text-accent hover:underline" href="tel:+6569800230">
                +65 6980 0230
              </a>
            </p>
            <p>
              Contact the Data Protection Officer if you have a question or a complaint about personal data. We will
              confirm that we received your complaint. We will tell you how we will deal with it.
            </p>
            <p>
              If our response does not satisfy you, you can contact the Personal Data Protection Commission.
            </p>
          </Section>

          <Section title="12. Third-party links">
            <p>
              Our website may include links to third-party websites, plug-ins or applications (for example,
              publications we contribute to, or professional or referral networks). Clicking those links may allow
              third parties to collect or share data about you. We do not control third-party websites and are not
              responsible for their privacy practices. We encourage you to read the privacy notice of every website you
              visit.
            </p>
          </Section>

          <Section title="13. Changes to this notice">
            <p>We review this notice each year. We also review it when our practices change.</p>
            <p>
              The version number and date at the top show the date of the last change. The version on this page is
              always the current version.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
