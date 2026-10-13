import React from "react";

/* ------------------------------------------------------------------
   Oct13 — RCS Fallback to SMS: How It Works and Why You Need It
   Slug:  rcs-fallback-to-sms
   Brand: A2ZSMS
   ------------------------------------------------------------------ */

const LINKS = {
  rcs: "/rcs-service",
  sms: "/bulk-sms",
  whatsapp: "/whatsapp-api",
  contact: "/contact",
  rcsVsWhatsapp: "/blogs/rcs-vs-whatsapp-which-is-better-for-business-messaging",
  rcsProviderIndia: "/blogs/rcs-messaging-provider-in-india",
  smsApi: "/blogs/what-is-an-sms-api-and-how-does-it-work-for-indian-businesses",
  trai: "https://trai.gov.in/",
  googleRcs:
    "https://developers.google.com/business-communications/rcs-business-messaging",
};

const PAGE_URL = "https://www.a2zsms.in/blogs/rcs-fallback-to-sms";
const META_DESCRIPTION =
  "RCS Fallback to SMS: How It Works and Why You Need It. A2ZSMS pairs RCS business messaging with automatic SMS fallback, DLT-compliant, from one dashboard.";

/* FAQ data drives BOTH the accordion and the FAQPage schema, so they always mirror exactly */
const faqs = [
  {
    q: "What is RCS fallback to SMS?",
    a: "RCS fallback to SMS is a delivery rule that sends a business message as an SMS when it can't be delivered as RCS. The platform tries RCS first, and if the recipient's device, app or network doesn't support it, or delivery isn't confirmed in time, the same message goes out as a text through the SMS route instead.",
  },
  {
    q: "Does RCS automatically fall back to SMS?",
    a: "Not on its own. RCS is a channel, and the fallback logic lives in your messaging platform or provider. When it is configured, the platform checks reachability and switches to SMS without anyone sending a second message by hand. Check how your provider handles triggers and timers before launch.",
  },
  {
    q: "What happens if RCS is not supported on a customer's phone?",
    a: "Without fallback, the message isn't delivered as RCS and the customer may never see it. With fallback in place, the customer receives an SMS version instead. It is plainer, with no cards or buttons, but the key information and a short link still reach the customer's phone.",
  },
  {
    q: "How do I set up RCS fallback to SMS using an API?",
    a: "You send one message request through your provider's RCS API with the RCS content and an SMS fallback text attached, and the platform handles the routing. Before that, register your business for DLT, get the SMS template and header approved, and verify your RCS sender. Exact request fields differ by provider, so follow their API documentation.",
  },
  {
    q: "Do I need DLT registration for the SMS fallback in India?",
    a: "Yes. The fallback SMS is ordinary business SMS, so your entity, sender ID header and message template should be registered and approved on the DLT platform under TRAI rules, and the text should match the approved template. DLT applies to SMS, not to WhatsApp, which runs under Meta's own business policies.",
  },
  {
    q: "Will a customer receive both the RCS message and the SMS?",
    a: "That depends on your provider's setup. A well-configured flow sends the SMS only when RCS can't be delivered, so a customer normally receives one message. A very short fallback timer or a delayed RCS delivery could produce a duplicate, so ask how your provider handles that case and test it before a large send.",
  },
  {
    q: "What is the difference between RCS fallback and WhatsApp fallback?",
    a: "RCS fallback depends on whether a phone can receive RCS, which turns on device, app, network and operator support. WhatsApp fallback depends on whether the customer is on WhatsApp and has opted in, since outbound business messages need approved templates. On a multi-channel platform, both can route to SMS as the backup, and the SMS leg is the one that needs DLT approval in India.",
  },
  {
    q: "Why do businesses need RCS fallback to SMS?",
    a: "Because RCS reach isn't universal. Without a backup, every customer whose phone can't receive RCS becomes a silent failure. RCS fallback to SMS lifts your overall delivery rate, protects time-sensitive alerts and keeps reporting in one place, so you get the richness of RCS without giving up the reach of SMS.",
  },
];

/* Schema block 1 — Article */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "RCS Fallback to SMS: How It Works and Why You Need It",
  description: META_DESCRIPTION,
  image: "https://www.a2zsms.in/Images/oct13(1).webp",
  author: { "@type": "Person", name: "Ananth" },
  publisher: {
    "@type": "Organization",
    name: "A2ZSMS",
    url: "https://www.a2zsms.in/",
  },
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

/* Schema block 2 — FAQPage (mirrors the accordion exactly) */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* Schema block 3 — BreadcrumbList */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.a2zsms.in/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.a2zsms.in/blogs" },
    {
      "@type": "ListItem",
      position: 3,
      name: "RCS Fallback to SMS",
      item: PAGE_URL,
    },
  ],
};

const Oct13 = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container para-color py-4">
        {/* H1 — PRIMARY KEYWORD */}
        <h1 className="text-primary py-4">
          RCS Fallback to SMS: How It Works and Why You Need It
        </h1>

        {/* E-E-A-T byline */}

        {/* Introduction */}
        <section className="mb-5">
          <p>
            <strong>RCS fallback to SMS</strong> is the safety net that makes sure a business message still reaches a customer when their phone can't display RCS. The platform first tries to deliver a rich RCS message. If the device, app or network can't receive it, the same communication goes out as a plain SMS instead, so no customer is left out and no campaign quietly fails.
          </p>

          <p>
            This guide explains how <strong>RCS business messaging</strong> and SMS work together, what happens behind the scenes, where DLT rules apply in India, and what to check before you set it up. <strong>A2ZSMS</strong> runs RCS, SMS, WhatsApp and Voice from one platform, so the examples below reflect how real multi-channel campaigns are planned.
          </p>
        </section>

        {/* Image 1 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/oct13(1).webp"
            alt="RCS fallback to SMS flow showing a business message reaching every phone - A2ZSMS"
          />
        </div>

        {/* Early CTA (first third) */}
        <div className="d-flex align-items-start mb-5">
          <i className="bi bi-rocket-takeoff-fill text-primary me-3 fs-4"></i>
          <span>
            <b>Want to see it running?</b> <a href={LINKS.contact}>Book a free demo</a> and the A2ZSMS team will walk you through RCS with SMS fallback on the platform.
          </span>
        </div>

        {/* Section 1 - RCS Business Messaging */}
        <section className="mb-5">
          <h2 id="what-is-rcs-business-messaging" className="fw-bold">
            What Is RCS Business Messaging, and Where Does SMS Fit?
          </h2>

          <p>
            <strong>RCS business messaging</strong> lets brands send app-like messages — images, carousels, buttons and suggested replies — straight into a customer's default messaging app, with a verified sender name and logo on top. It is built on the Rich Communication Services standard and reaches businesses through platforms such as Google's <a href={LINKS.googleRcs} target="_blank" rel="noopener noreferrer">RCS Business Messaging (RBM)</a>. Think of it as the upgrade path for plain text.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-layout-three-columns text-primary me-3 fs-4"></i>
            <span>
              <b>Rich Cards and Carousels:</b> Product images, short descriptions and tap-ready buttons inside one message, so customers can act without leaving the chat.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Verified Sender Identity:</b> A branded profile with your name and logo helps customers recognise a genuine message.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-reply-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Suggested Replies and Actions:</b> Buttons such as Track Order or Call Us turn a notification into a next step.
            </span>
          </div>

          <p>
            <strong>SMS</strong> sits at the other end of the spectrum. It is plain text, it works on virtually every handset, and it travels over the cellular network without needing a data connection. Those traits make it the natural backup. Used together, RCS gives you richness where it is supported and SMS gives you reach where it isn't, which is why a good setup treats them as one flow rather than two separate campaigns. You can explore each channel on the <a href={LINKS.rcs}>RCS Business Messaging</a> and <a href={LINKS.sms}>Bulk SMS services</a> pages.
          </p>
        </section>

        {/* Section 2 - How it works */}
        <section className="mb-5">
          <h2 id="how-automatic-sms-fallback-works" className="fw-bold">
            How Automatic SMS Fallback Works, Step by Step
          </h2>

          <p>
            So how does RCS fallback to SMS work in practice? The routing logic runs inside your messaging platform, not on the customer's phone, and it follows the same decision path for every recipient on your list. Four stages make up that path.
          </p>

          <h3 className="fw-bold mt-4">Step One: The RCS Capability Check</h3>
          <p>
            Before a message goes out, the platform checks whether the recipient can receive RCS at all, meaning whether their phone, messaging app and operator support it. This RCS capability check splits one contact list into RCS-enabled devices and non-RCS devices without any manual sorting. Some providers skip the lookup and attempt RCS first, so ask which approach yours uses.
          </p>

          <h3 className="fw-bold mt-4">
            Step Two: The Delivery Attempt and Fallback Timer
          </h3>
          <p>
            If the number is RCS-reachable, the message is sent as RCS and the platform waits for a delivery signal. If none arrives before the fallback timer runs out, the message is treated as undelivered. A short timer protects urgent alerts but raises the chance of a late RCS delivery overlapping with the SMS, while a long timer delays everything. Pick a value that matches how urgent the message really is.
          </p>

          <h3 className="fw-bold mt-4">Step Three: The Switch to SMS</h3>
          <p>
            So what happens when an RCS message fails? The routing logic sends the SMS version instead. This is a separate message with its own rules: plain text only, and in India it must use a DLT-approved template and a registered sender ID. To the customer it simply looks like a normal text from your brand.
          </p>

          <h3 className="fw-bold mt-4">Step Four: Reporting on Both Channels</h3>
          <p>
            Good delivery failure handling doesn't end at the switch. Delivery reports should show which channel actually reached each customer, with read receipts where RCS provides them and standard delivery status for SMS. When both channels appear in a single dashboard, you can see exactly where messages are being lost and adjust the flow.
          </p>
        </section>

        {/* Section 3 - Why phones can't receive RCS */}
        <section className="mb-5">
          <h2 id="why-some-phones-cant-receive-rcs" className="fw-bold">
            Why Some Phones Can't Receive RCS Messages
          </h2>

          <p>
            RCS reach is not universal, and any honest plan for RCS starts there. Whether a message can be delivered as RCS depends on a combination of device, app, connection and operator. That is why fallback is part of the design rather than an optional extra.
          </p>

          <h3 className="fw-bold mt-4">The Device and Messaging App</h3>
          <p>
            In India, RCS typically reaches Android users through Google Messages or a manufacturer app that supports it. Older handsets, feature phones, devices with RCS switched off and phones using a different default messaging app won't receive it. Android and iOS support also differs and keeps changing, so check the current position for your own audience.
          </p>

          <h3 className="fw-bold mt-4">Data Connection and Network</h3>
          <p>
            RCS travels over mobile data or Wi-Fi, while SMS uses the cellular signal alone. If a customer's phone is offline, has data switched off or sits in a weak coverage area, an RCS message can't be delivered even when the phone is fully capable. SMS often still gets through in exactly those moments.
          </p>

          <h3 className="fw-bold mt-4">Operator and Region</h3>
          <p>
            Operator and carrier support varies from one network and region to the next. A customer list covering Bangalore, smaller towns and rural areas will almost always include a mix of RCS-enabled and non-RCS devices, which is why RCS message delivery on non-RCS phones needs a plan before you send, not after.
          </p>

          <p>
            So what happens if RCS is not supported? Without fallback, nothing useful reaches the customer. With fallback, they receive the SMS version. That is also the answer to a common question about how to reach Android users who don't have RCS enabled: you don't force RCS on them, you deliver the same message as text.
          </p>
        </section>

        {/* Section 4 - Why businesses need it */}
        <section className="mb-5">
          <h2
            id="why-businesses-need-rcs-messaging-fallback"
            className="fw-bold"
          >
            Why Businesses Need RCS Messaging Fallback
          </h2>

          <p>
            Without a backup path, every unreachable number is a lost message, and often a silent one, because nothing tells you it never arrived. RCS fallback to SMS closes that gap without asking your team to run two separate campaigns.
          </p>

          <h3 className="fw-bold mt-4">
            Why Every Customer on Your List Gets the Message
          </h3>
          <p>
            So why do businesses need RCS fallback to SMS? Because RCS messaging reaches only the customers whose device, app and network support it. Your RCS to SMS fallback delivery rate is the share of recipients who receive the message on at least one channel, and fallback is what lifts that figure beyond RCS-enabled phones alone. The result is a consistent experience for the whole list, not just part of it.
          </p>

          <h3 className="fw-bold mt-4">Time-Sensitive Alerts Can't Wait</h3>
          <p>
            Payment reminders, delivery updates and appointment confirmations lose value quickly. If an RCS message gets stuck, the customer needs the information through another route before it goes stale. Fallback gives time-sensitive alerts that second route automatically, and it fits naturally into wider multi-channel messaging that may also include the <a href={LINKS.whatsapp}>WhatsApp Business API</a> or voice.
          </p>

          <p>
            It also keeps reporting tidy. One campaign, one set of delivery reports and one dashboard make results far easier to explain to your team, which is a quiet but real benefit of omnichannel communication.
          </p>
        </section>

        {/* Image 2 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            loading="lazy"
            src="/Images/oct13(2).webp"
            alt="RCS business messaging with automatic SMS fallback delivery path for Indian businesses - A2ZSMS"
          />
        </div>

        {/* Section 5 - Designing the SMS version */}
        <section className="mb-5">
          <h2
            id="designing-the-sms-version-of-your-rich-message"
            className="fw-bold"
          >
            Designing the SMS Version of Your Rich Message
          </h2>

          <p>
            SMS fallback for RCS is not a copy-and-paste job. A rich card with an image, a title and three buttons has no direct SMS equivalent, so the text version should be planned at the same time as the RCS design, not after it.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Element</th>
                  <th>RCS Message</th>
                  <th>SMS Fallback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Format</b>
                  </td>
                  <td>Rich cards, images and carousels</td>
                  <td>Plain text, with a short link where needed</td>
                </tr>
                <tr>
                  <td>
                    <b>Sender Identity</b>
                  </td>
                  <td>Verified sender name and logo</td>
                  <td>DLT-registered sender ID (header)</td>
                </tr>
                <tr>
                  <td>
                    <b>Calls to Action</b>
                  </td>
                  <td>Buttons and suggested replies</td>
                  <td>A short link or a reply keyword</td>
                </tr>
                <tr>
                  <td>
                    <b>Content Approval</b>
                  </td>
                  <td>Brand verification and message review through your RCS provider</td>
                  <td>DLT-approved content template</td>
                </tr>
                <tr>
                  <td>
                    <b>Delivery Signals</b>
                  </td>
                  <td>Delivered and read status where the recipient allows it</td>
                  <td>Delivery report, no read receipts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Here is an illustrative example. An order-update RCS message might show a product image, the line Your order is out for delivery and a Track Order button. The SMS fallback carries the same information in one short line: the order reference, the delivery status and a short tracking link, written to fit the template your DLT registration approved.
          </p>

          <p>
            Keep the SMS lean. A single SMS segment holds 160 characters in standard encoding and fewer when the text includes regional-language characters, and longer messages are split into several segments. Lead with the key information, keep any link short and leave out anything that only made sense next to a button.
          </p>
        </section>

        {/* Section 6 - India / DLT */}
        <section className="mb-5">
          <h2
            id="rcs-fallback-in-india-dlt-trai-and-sender-id-rules"
            className="fw-bold"
          >
            RCS Fallback in India: DLT, TRAI and Sender ID Rules
          </h2>

          <p>
            The SMS you send as a fallback is ordinary application-to-person (A2P) SMS, so it follows the same rules as any other business text under TRAI regulations. That means RCS fallback to SMS for businesses in India has two moving parts to get right: your RCS setup and your DLT setup.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-building-check text-primary me-3 fs-4"></i>
            <span>
              <b>Entity Registration:</b> Your business registers as an entity on an operator's DLT platform before any commercial SMS can be sent.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-signpost-2-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Sender ID (Header) Approval:</b> The sender ID customers see on the fallback SMS must be registered and approved. It is separate from the verified sender name shown in RCS.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-text-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Content Template Approval:</b> Each fallback message has to match an approved template, with variables for details such as order numbers or amounts. That is why the SMS text should be written and approved before launch.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Message Category and Consent:</b> Messages are classed by purpose, for example transactional or promotional, and customer consent rules apply. Choose the category that honestly matches the message.
            </span>
          </div>

          <p>
            RCS business messaging has its own sender verification and message review through your provider, so confirm which approvals apply to your account. Handle customer numbers in line with India's Digital Personal Data Protection (DPDP) Act as well. Rules and processes change, so check current requirements on the <a href={LINKS.trai} target="_blank" rel="noopener noreferrer">TRAI website</a> or with your provider before launch.
          </p>
        </section>

        {/* Image 3 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            loading="lazy"
            src="/Images/oct13(3).webp"
            alt="DLT registration and SMS fallback template setup for RCS messaging in India - A2ZSMS"
          />
        </div>

        {/* Section 7 - Use cases */}
        <section className="mb-5">
          <h2
            id="real-world-use-cases-for-fallback-messaging"
            className="fw-bold"
          >
            Real-World Use Cases for Fallback Messaging
          </h2>

          <p>
            Fallback earns its place wherever a missed message has a cost. These are the situations where it matters most.
          </p>

          <h3 className="fw-bold mt-4">Banking and Payments</h3>
          <ul>
            <li>Payment due reminders with an RCS pay button and an SMS pay link</li>
            <li>Transaction and policy-renewal alerts that must reach every customer</li>
            <li>Alerts handled with the same data care your compliance team applies elsewhere</li>
          </ul>

          <h3 className="fw-bold mt-4">E-commerce and Delivery</h3>
          <ul>
            <li>Order confirmations and out-for-delivery updates</li>
            <li>Cash-on-delivery confirmation before dispatch</li>
            <li>Cart reminders using an RCS carousel where supported, and plain text for everyone else</li>
          </ul>

          <h3 className="fw-bold mt-4">Travel and Ticketing</h3>
          <ul>
            <li>Booking confirmations and check-in reminders</li>
            <li>Itinerary and schedule changes that can't wait</li>
            <li>Post-trip feedback requests with a tap-to-rate card where RCS is available</li>
          </ul>

          <h3 className="fw-bold mt-4">Healthcare and Education</h3>
          <ul>
            <li>Appointment and follow-up reminders</li>
            <li>Fee reminders and class schedule changes</li>
            <li>Event and exam notices that reach parents and students on any handset</li>
          </ul>
        </section>

        {/* Section 8 - Setup */}
        <section className="mb-5">
          <h2 id="how-to-set-up-rcs-with-sms-fallback" className="fw-bold">
            How to Set Up RCS with SMS Fallback Through an RCS API
          </h2>

          <p>
            How to set up RCS fallback to SMS depends on your team. Non-technical teams usually work from a dashboard, while developers connect through a messaging API. RCS fallback to SMS using an API generally means one request that carries the RCS content and the SMS text, with the platform handling the routing between them.
          </p>

          <ol className="mb-4">
            <li className="mb-2">
              <b>Complete DLT registration for SMS</b> — register your entity, then get your sender ID header and content templates approved.
            </li>
            <li className="mb-2">
              <b>Set up your RCS sender</b> — complete brand verification through your provider so customers see a verified profile.
            </li>
            <li className="mb-2">
              <b>Build the RCS message</b> — cards, images, buttons and suggested replies for customers whose phones support them.
            </li>
            <li className="mb-2">
              <b>Write the SMS fallback text</b> — match it to an approved DLT template and pair it with the RCS message it backs up.
            </li>
            <li className="mb-2">
              <b>Set your fallback rules</b> — decide the trigger conditions and the fallback timer based on how urgent the message is.
            </li>
            <li className="mb-2">
              <b>Test on both device types</b> — send to an RCS-enabled phone and a non-RCS phone, check the delivery reports, then launch.
            </li>
          </ol>

          <p>
            On <strong>A2ZSMS</strong>, RCS, SMS, WhatsApp and Voice sit in one dashboard, so contact lists, templates and delivery reports stay in one place instead of being rebuilt for each channel. Exact fallback options such as timers, triggers and reporting depend on your plan and configuration, so confirm them with the team during onboarding.
          </p>
        </section>

        {/* Section 9 - Provider questions */}
        <section className="mb-5">
          <h2
            id="questions-to-ask-before-choosing-a-provider"
            className="fw-bold"
          >
            Questions to Ask Before You Choose a Provider
          </h2>

          <p>
            Choosing the best RCS provider with SMS fallback in India comes down to how well the provider handles the details, not just whether the feature exists. These questions separate a basic setup from a dependable one.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-signpost-split-fill text-primary me-3 fs-4"></i>
            <span>
              <b>What Triggers the Switch?</b> Confirm fallback covers both non-RCS devices and failed deliveries, not just one of them.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-stopwatch-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Can You Control the Timer?</b> Ask whether the fallback timer can be set per campaign, since an alert and a promotion need different values.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-currency-rupee text-primary me-3 fs-4"></i>
            <span>
              <b>How Is Each Leg Billed in INR?</b> Find out whether SMS is charged only when fallback fires, and how RCS messages are counted.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Is DLT Template Mapping Built In?</b> Check that each RCS message can be paired with an approved SMS template without workarounds.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>Do Reports Show the Delivering Channel?</b> You should see, per message, whether RCS or SMS reached the customer.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Is Onboarding Support Available?</b> DLT and RCS sender verification are easier with a team that has done them before. You can also read how to evaluate an <a href={LINKS.rcsProviderIndia}>RCS messaging provider in India</a>.
            </span>
          </div>
        </section>

        {/* Section 10 - Mistakes */}
        <section className="mb-5">
          <h2 id="common-setup-mistakes-and-how-to-avoid-them" className="fw-bold">
            Common Setup Mistakes and How to Avoid Them
          </h2>

          <p>
            Most fallback problems come from small oversights during setup rather than from the technology itself. These are the ones worth checking first.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-pencil-square text-primary me-3 fs-4"></i>
            <span>
              <b>Treating the SMS as an Afterthought:</b> Write the text version alongside the RCS design so the message still makes sense without cards or buttons.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-exclamation-triangle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Skipping the Template Match:</b> A fallback SMS that doesn't match an approved DLT template can be blocked before it reaches the customer.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hourglass-split text-primary me-3 fs-4"></i>
            <span>
              <b>Using One Timer for Everything:</b> Match the wait to the urgency of the message rather than applying a single default.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-files text-primary me-3 fs-4"></i>
            <span>
              <b>Ignoring Duplicate Risk:</b> Ask how your provider handles an RCS message that arrives after the SMS has already gone out, and test it.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-phone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Testing Only on One Phone:</b> Always test on both an RCS-enabled and a non-RCS handset before a large send.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clipboard-data-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Not Reviewing Failed Messages:</b> Check the numbers that failed on both channels and clean the list, since they point to invalid or inactive contacts.
            </span>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-5">
          <h2 id="talk-to-a2zsms-about-rcs-campaigns" className="fw-bold">
            Talk to A2ZSMS About Your RCS Campaigns
          </h2>

          <p>
            Whether you are launching your first RCS campaign or fixing delivery gaps in an existing one, <strong>A2ZSMS</strong> gives you RCS, SMS, WhatsApp and Voice on one DLT-compliant platform with automatic SMS fallback options to match your plan. Conversations that convert start with reaching every customer on your list.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-calendar-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Request a Live Demo:</b> See RCS messages, SMS fallback and delivery reports working together. <a href={LINKS.contact}>Book your demo</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-chat-square-text-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Explore the Channels:</b> Learn more about <a href={LINKS.rcs}>RCS Business Messaging</a>, <a href={LINKS.sms}>Bulk SMS services</a> and the <a href={LINKS.whatsapp}>WhatsApp Business API</a>.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Talk to Our Team:</b> Call <strong>+91 84310 86185</strong> or email <strong>sales@a2zsms.in</strong> to discuss your requirements.
            </span>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-5">
          <h2 id="conclusion" className="fw-bold">
            Conclusion
          </h2>

          <p>
            RCS gives businesses a richer way to talk to customers, but it only reaches phones that support it. Fallback is the piece that makes the channel dependable: the platform checks reachability, tries RCS first and switches to SMS when it has to, so the message still arrives.
          </p>

          <p>
            Plan the SMS version early, get your DLT template and sender ID approved, set a fallback timer that fits the urgency of the message and test on both device types. With those basics in place, <strong>A2ZSMS</strong> helps you run RCS, SMS and WhatsApp as one connected flow, so the rich experience reaches everyone it can and the text version covers everyone else.
          </p>

          <p>
            Related reading: <a href={LINKS.rcsVsWhatsapp}>RCS vs WhatsApp for business messaging</a> and <a href={LINKS.smsApi}>how an SMS API works</a>.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-5">
          <div data-aos="fade-left">
            <h2 id="frequently-asked-questions" className="fw-bold mt-5">
              <span className="text-primary">Frequently Asked Questions:</span>{" "}
              RCS Fallback to SMS
            </h2>

            <div className="accordion mt-4" id="rcsFallbackFAQ">
              {faqs.map((faq, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#rcsFbFaq${i + 1}`}
                    >
                      {faq.q}
                    </button>
                  </h2>
                  <div
                    id={`rcsFbFaq${i + 1}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#rcsFallbackFAQ"
                  >
                    <div className="accordion-body">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Oct13;
