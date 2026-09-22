import React from "react";

const Sep22 = () => {
  return (
    <>
      <div className="container para-color py-4">
        {/* H1 — PRIMARY KEYWORD */}
        <h1 className="text-primary py-4">
          WhatsApp Business API: Step by Step Guide
        </h1>

        {/* Introduction */}
        <section className="mb-5">
          <p>
            Most of your customers already open WhatsApp several times a day —
            for family group chats, quick voice notes, forwarded memes. A{" "}
            <strong>WhatsApp Business API</strong> connection puts your business
            inside that same habit, instead of asking people to check an inbox
            or answer a call they don't recognise. That's the whole case for
            treating WhatsApp as a proper <strong>business messaging</strong>{" "}
            channel rather than a side-channel for the occasional support query.
          </p>

          <p>
            The free WhatsApp Business app covers a solo shop owner replying to
            a handful of chats a day. The moment a team, an automation flow, or
            a growing customer list enters the picture, that app hits a ceiling
            fast. This guide walks through what the{" "}
            <strong>WhatsApp Business API</strong> actually is, the pieces you
            need before you can send a single message, how it's priced, and what
            to check before choosing a{" "}
            <strong>WhatsApp Business API provider</strong> to run it through.
          </p>

          <p>
            <strong>A2ZSMS</strong> runs WhatsApp alongside SMS, RCS and Voice
            from a single DLT-compliant dashboard — this guide isn't written to
            talk you into anything, just to walk through how{" "}
            <strong>WhatsApp API for business</strong> use actually works, end
            to end.
          </p>
        </section>

        {/* Image 1 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/sep22(1).webp"
            alt="WhatsApp Business API step by step setup guide for Indian businesses - A2ZSMS"
          />
        </div>

        {/* Section 1 - What Is WhatsApp Business API */}
        <section className="mb-5">
          <h2 id="what-is-whatsapp-business-api" className="fw-bold">
            What Is the WhatsApp Business API?
          </h2>

          <p>
            The WhatsApp Business API is the programmable, backend version of
            WhatsApp built for businesses that need to send and manage
            conversations at a scale no single phone screen can handle. It's the
            layer that sits behind broadcasts, automated replies and multi-agent
            support desks — not something a customer downloads, but something
            your team or software connects to.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-diagram-3-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Programmatic Access at Scale:</b> Messages flow through an API
              or a provider dashboard instead of one phone, so volume stops
              being the bottleneck.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-robot text-primary me-3 fs-4"></i>
            <span>
              <b>Built for Automation, Not Manual Typing:</b> Rule-based flows
              and chatbots handle repetitive replies, order updates and FAQs
              without a person typing each one.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-people-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Multi-Agent, Multi-Device Support:</b> Sales, support and
              marketing teams can all work off the same business number at the
              same time.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-toggle-on text-primary me-3 fs-4"></i>
            <span>
              <b>Governed by Opt-In and Template Rules:</b> Every outbound
              message needs a customer who opted in, and anything sent outside
              an active conversation needs an approved template first.
            </span>
          </div>
        </section>

        {/* Section 2 - Core Components */}
        <section className="mb-5">
          <h2 id="core-components-for-getting-started" className="fw-bold">
            The Core Pieces You Need Before Sending a Single Message
          </h2>

          <p>
            Five components have to be in place before any business can use the
            API. Once you know what each one does, the rest of the setup is
            mostly just filling in the blanks.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-building text-primary me-3 fs-4"></i>
            <span>
              <b>Meta Business Manager:</b> The control centre that houses your
              Facebook pages, ad accounts and WhatsApp Business Account in one
              place, and where business verification happens.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-vcard-fill text-primary me-3 fs-4"></i>
            <span>
              <b>A WhatsApp Business Account (WABA):</b> Connects your business
              to the API and organises every number you run under one account.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>A Dedicated Phone Number:</b> One number, used only for the API
              — it can't stay active on the personal or free Business app at the
              same time.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hdd-network-fill text-primary me-3 fs-4"></i>
            <span>
              <b>A Business Solution Provider (BSP) Like A2ZSMS:</b> Gives you a
              working dashboard on top of the raw API, so your team doesn't have
              to build broadcast and chatbot tooling from scratch.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-text-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Message Templates:</b> Pre-approved formats required to start
              or restart a conversation once the active service window has
              closed.
            </span>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Component</th>
                  <th>What It Does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Meta Business Manager</b>
                  </td>
                  <td>Verifies your business and houses your assets</td>
                </tr>
                <tr>
                  <td>
                    <b>WABA</b>
                  </td>
                  <td>Connects your phone numbers to the API</td>
                </tr>
                <tr>
                  <td>
                    <b>Phone Number</b>
                  </td>
                  <td>The number customers message you on</td>
                </tr>
                <tr>
                  <td>
                    <b>BSP (A2ZSMS)</b>
                  </td>
                  <td>Gives you a dashboard to actually run the API</td>
                </tr>
                <tr>
                  <td>
                    <b>Message Templates</b>
                  </td>
                  <td>Pre-approved messages for outreach outside live chats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 - Cloud vs On-Premise */}
        <section className="mb-5">
          <h2 id="cloud-api-vs-on-premise-hosting" className="fw-bold">
            Cloud API vs. On-Premise API: Picking a Hosting Model
          </h2>

          <p>
            Once the five pieces above are in place, the API needs somewhere to
            actually run. There are two hosting options, and most businesses
            don't need to think hard about which one fits.
          </p>

          <p>
            The <strong>WhatsApp Cloud API</strong> is hosted directly by Meta.
            There's no server to manage, no infrastructure to maintain, and it
            stays current with new WhatsApp features automatically — which is
            why most businesses, regardless of size, default to it. The
            On-Premise API, by contrast, runs on servers your own team manages.
            It offers more control, but it also means your engineering team owns
            updates, uptime and security — a trade-off that only tends to make
            sense for large enterprises with the infrastructure to support it.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Feature</th>
                  <th>Cloud API</th>
                  <th>On-Premise API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Hosting</b>
                  </td>
                  <td>Managed by Meta</td>
                  <td>Managed by your business</td>
                </tr>
                <tr>
                  <td>
                    <b>Setup</b>
                  </td>
                  <td>Quick and simple</td>
                  <td>More complex</td>
                </tr>
                <tr>
                  <td>
                    <b>Maintenance</b>
                  </td>
                  <td>Meta handles updates</td>
                  <td>Your team manages servers and updates</td>
                </tr>
                <tr>
                  <td>
                    <b>Technical Effort</b>
                  </td>
                  <td>Low</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>
                    <b>Best For</b>
                  </td>
                  <td>Most businesses</td>
                  <td>Large enterprises with custom infrastructure needs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Image 2 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/sep22(2).webp"
            alt="WhatsApp Business API vs free Business app comparison for Indian businesses - A2ZSMS"
          />
        </div>

        {/* Section 4 - App vs API */}
        <section className="mb-5">
          <h2 id="whatsapp-business-app-vs-api-differences" className="fw-bold">
            How This Compares to the Free WhatsApp Business App
          </h2>

          <p>
            On the surface, both look like "WhatsApp for business." In practice,
            the free app and the <strong>WhatsApp Business API</strong> solve
            for very different situations.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Feature</th>
                  <th>WhatsApp Business App</th>
                  <th>WhatsApp Business API (via A2ZSMS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Broadcast Limit</b>
                  </td>
                  <td>256 contacts per list</td>
                  <td>Unlimited opted-in users (quality-rating dependent)</td>
                </tr>
                <tr>
                  <td>
                    <b>Users / Agents</b>
                  </td>
                  <td>Single user</td>
                  <td>Multiple agents, one number</td>
                </tr>
                <tr>
                  <td>
                    <b>Automation &amp; Chatbots</b>
                  </td>
                  <td>Not available</td>
                  <td>Rule-based and AI-driven automation</td>
                </tr>
                <tr>
                  <td>
                    <b>CRM / Contact Management</b>
                  </td>
                  <td>Not available</td>
                  <td>Built-in segmentation, tags and filters</td>
                </tr>
                <tr>
                  <td>
                    <b>Analytics &amp; Reporting</b>
                  </td>
                  <td>None</td>
                  <td>Delivery, read and response-level insights</td>
                </tr>
                <tr>
                  <td>
                    <b>Message Templates</b>
                  </td>
                  <td>Not supported</td>
                  <td>Approved, reusable templates</td>
                </tr>
                <tr>
                  <td>
                    <b>Scalability</b>
                  </td>
                  <td>Very small teams only</td>
                  <td>Built for growing and large businesses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 - Service Window */}
        <section className="mb-5">
          <h2 id="messaging-inside-outside-service-window" className="fw-bold">
            Sending Messages: Inside vs. Outside the Customer Service Window
          </h2>

          <p>
            What you're allowed to send depends entirely on timing relative to
            the customer's last message.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-chat-left-dots-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Inside the 24-Hour Window:</b> Free-form replies and utility
              messages go out with no template needed, and service conversations
              stay free.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Outside the Window:</b> Only a pre-approved template —
              Marketing, Utility or Authentication — can restart the
              conversation, and per-message charges apply.
            </span>
          </div>

          <p>
            A platform like A2ZSMS routes messages through broadcast campaigns,
            a live chat dashboard, or automated flows, so your team doesn't have
            to track which window each customer is in manually.
          </p>
        </section>

        {/* Section 6 - Quality Rating */}
        <section className="mb-5">
          <h2 id="quality-rating-and-messaging-limits" className="fw-bold">
            How Your Quality Rating Shapes Your Messaging Limits
          </h2>

          <p>
            "Unlimited" broadcasting isn't unconditional. WhatsApp scales your
            sending limit based on a quality rating tied to how customers
            respond to your number — replies and opens keep it healthy; blocks
            and complaints pull it down.
          </p>

          <div className="d-flex align-items-start mb-2">
            <i className="bi bi-circle-fill text-success me-3"></i>
            <span>
              <b>Green:</b> High quality — limits stay high or increase.
            </span>
          </div>
          <div className="d-flex align-items-start mb-2">
            <i className="bi bi-circle-fill text-warning me-3"></i>
            <span>
              <b>Yellow:</b> Medium quality — proceed carefully.
            </span>
          </div>
          <div className="d-flex align-items-start mb-4">
            <i className="bi bi-circle-fill text-danger me-3"></i>
            <span>
              <b>Red:</b> Low quality — WhatsApp may restrict or pause sending.
            </span>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Tier</th>
                  <th>Unique Customers Messageable in 24 Hrs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tier 1</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>Tier 2</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>Tier 3</td>
                  <td>100,000</td>
                </tr>
                <tr>
                  <td>Tier 4</td>
                  <td>Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7 - Two Routes */}
        <section className="mb-5">
          <h2
            id="two-routes-to-access-whatsapp-business-api"
            className="fw-bold"
          >
            Two Ways to Get Access to the API
          </h2>

          <p>
            Meta offers direct access through the Cloud API, but it comes
            without a usable dashboard, without local payment support for Indian
            businesses, and with email-only support. In practice, most
            businesses get access through an{" "}
            <strong>official WhatsApp Business API</strong> provider instead — a
            BSP like A2ZSMS supplies the dashboard, broadcast tools, chatbot
            builder and support that Meta's direct route leaves out.
          </p>
        </section>

        {/* Section 8 - Step by Step Setup */}
        <section className="mb-5">
          <h2 id="step-by-step-setup-with-a2zsms" className="fw-bold">
            Step-by-Step: Setting Up Through A2ZSMS
          </h2>

          <p>
            Setting up WhatsApp Business API in India follows a fairly
            consistent pattern no matter which provider handles it. Here's how
            that looks with A2ZSMS.
          </p>

          <ol className="mb-4">
            <li className="mb-2">
              <b>Sign up and add your business details</b> — company name,
              industry and billing information.
            </li>
            <li className="mb-2">
              <b>Connect your Facebook Business Manager account</b> and grant
              the permissions needed to start the application.
            </li>
            <li className="mb-2">
              <b>Create or link your WhatsApp Business Profile</b>, including
              your display name and business category.
            </li>
            <li className="mb-2">
              <b>Add your dedicated phone number</b> and verify it by SMS or
              voice call.
            </li>
            <li className="mb-2">
              <b>Submit your application for review.</b> Number approval is
              usually quick; display name approval can take longer.
            </li>
            <li className="mb-2">
              <b>Go live</b> once your A2ZSMS dashboard shows the account as
              active, and start building your first templates.
            </li>
          </ol>
        </section>

        {/* Image 3 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/sep22(3).webp"
            alt="Business verification documents for WhatsApp Business API in India - A2ZSMS"
          />
        </div>

        {/* Section 9 - Compliance / Documents (EEAT-corrected) */}
        <section className="mb-5">
          <h2
            id="business-verification-and-compliance-documents"
            className="fw-bold"
          >
            Business Verification and the Documents You'll Need
          </h2>

          <p>
            It's worth being precise here, because this is where a lot of guides
            blur two different compliance systems together. India's DLT
            framework, regulated by TRAI, governs SMS and RCS sent through
            telecom operators. The <strong>WhatsApp Business API</strong> is not
            part of that framework — it runs under Meta's own business
            verification and Commerce Policy, alongside India's general data
            protection law.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-text-fill text-primary me-3 fs-4"></i>
            <span>
              <b>A Legal Business Document:</b> GST registration, an MSME
              certificate, or an incorporation certificate, used to confirm your
              business is real before Meta approves your account.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-globe text-primary me-3 fs-4"></i>
            <span>
              <b>A Business Website:</b> With your legal business name visible,
              usually in the footer.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>A Fresh Phone Number:</b> Not currently active on any personal
              or Business WhatsApp account.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Data Handling Aligned With the DPDP Act:</b> Customer numbers
              and conversation data should be handled in line with India's
              Digital Personal Data Protection Act, regardless of which BSP you
              use.
            </span>
          </div>

          <p>
            Businesses in regulated sectors like BFSI should also weigh their
            messaging practices — OTPs, payment reminders, policy alerts —
            against their own sector-specific guidance, since those carry
            obligations beyond what Meta's verification process alone covers.
          </p>
        </section>

        {/* Section 10 - Do You Need It */}
        <section className="mb-5">
          <h2 id="do-you-need-the-api-or-the-free-app" className="fw-bold">
            Do You Need the API, or Does the Free App Cover You?
          </h2>

          <p>
            Not every business needs to make the switch immediately. A few
            honest questions usually settle it.
          </p>

          <div className="d-flex align-items-start mb-2">
            <i className="bi bi-people-fill text-primary me-3 fs-4"></i>
            <span>
              How large is your customer base — under a few hundred a month, or
              thousands?
            </span>
          </div>
          <div className="d-flex align-items-start mb-2">
            <i className="bi bi-person-lines-fill text-primary me-3 fs-4"></i>
            <span>Does more than one person need to reply to customers?</span>
          </div>
          <div className="d-flex align-items-start mb-2">
            <i className="bi bi-arrow-left-right text-primary me-3 fs-4"></i>
            <span>
              Do you already use a CRM or e-commerce platform you'd want
              WhatsApp connected to?
            </span>
          </div>
          <div className="d-flex align-items-start mb-4">
            <i className="bi bi-gear-fill text-primary me-3 fs-4"></i>
            <span>
              Do you need to automate anything — reminders, drip flows, cart
              recovery?
            </span>
          </div>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>If You...</th>
                  <th>You Probably Need</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Message under a few hundred people a month, solo</td>
                  <td>WhatsApp Business App</td>
                </tr>
                <tr>
                  <td>Message hundreds or thousands regularly</td>
                  <td>WhatsApp Business API</td>
                </tr>
                <tr>
                  <td>Have multiple team members replying to customers</td>
                  <td>WhatsApp Business API</td>
                </tr>
                <tr>
                  <td>Want to automate replies, broadcasts or workflows</td>
                  <td>WhatsApp Business API</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 11 - Pricing */}
        <section className="mb-5">
          <h2 id="whatsapp-business-api-pricing-explained" className="fw-bold">
            What Does It Actually Cost?
          </h2>

          <p>
            <strong>WhatsApp Business API pricing in India</strong> has two
            separate layers, and it helps to keep them apart when you're
            budgeting.
          </p>

          <p>
            The first is WhatsApp's own conversation-based charges, billed per
            template message delivered, split across Marketing, Utility and
            Authentication categories — service messages and utility replies
            sent inside an active window stay free. The second is your{" "}
            <strong>WhatsApp Business API provider</strong> fee, which varies by
            platform and typically scales with features like broadcast
            scheduling, click-tracking, agent seats and support tier.
          </p>

          <p>
            Rather than quote a single number here — provider fees change and
            vary by volume — the more useful step is getting a rate card matched
            to your expected sending volume directly from A2ZSMS's team.
            {/* TODO (Ananth): drop in verified A2ZSMS plan tiers/₹ figures here once confirmed */}
          </p>
        </section>

        {/* Section 12 - Feature Use Cases */}
        <section className="mb-5">
          <h2 id="practical-use-cases-feature-by-feature" className="fw-bold">
            Where Businesses Put WhatsApp Automation to Work
          </h2>

          <p>
            None of the above matters without a platform connecting it to your
            actual workflows. Here's what that looks like in practice.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-megaphone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Bulk WhatsApp Messaging to Opted-In Users:</b> Offers, festival
              promotions and product launches sent to your full list in one
              broadcast.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-gear-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Automated Notifications via Integrations:</b> Order, delivery
              and payment updates triggered automatically from your CRM or
              store.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Live Support Across Multiple Devices:</b> Your whole support
              team answering from the same number, on whatever device they're
              using.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-robot text-primary me-3 fs-4"></i>
            <span>
              <b>Chatbots for Sales and Support:</b> Handling common questions,
              qualifying leads and collecting details before a human steps in.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cursor-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Click-to-WhatsApp Ads:</b> Ad clicks that drop straight into a
              WhatsApp conversation instead of a landing page form.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-images text-primary me-3 fs-4"></i>
            <span>
              <b>Rich Media Messaging:</b> Images, videos, PDFs and catalogs
              sent directly inside the chat.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-credit-card text-primary me-3 fs-4"></i>
            <span>
              <b>Payment and Subscription Reminders:</b> Links and due-date
              nudges sent straight to a customer's most-used app.
            </span>
          </div>
        </section>

        {/* Section 13 - Industry Applications */}
        <section className="mb-5">
          <h2
            id="industry-applications-for-whatsapp-business-api"
            className="fw-bold"
          >
            Industry Applications: Where the API Delivers the Most Value
          </h2>

          <p>
            Feature lists rarely tell the full story. Here's how different
            industries actually put the API to work.
          </p>

          <h3 className="fw-bold mt-4">Ecommerce</h3>
          <ul>
            <li>Abandoned cart recovery sent within hours of drop-off</li>
            <li>Order confirmations and shipping updates, no manual typing</li>
            <li>COD confirmation before dispatch to cut failed deliveries</li>
          </ul>

          <h3 className="fw-bold mt-4">Healthcare</h3>
          <ul>
            <li>Appointment booking and reminders</li>
            <li>Prescription and follow-up notifications</li>
            <li>
              Basic triage questions handled by a bot before a human joins
            </li>
          </ul>

          <h3 className="fw-bold mt-4">
            BFSI (Banking, Financial Services &amp; Insurance)
          </h3>
          <ul>
            <li>Secure OTPs and login verification</li>
            <li>Payment due reminders and receipt confirmations</li>
            <li>
              Policy renewal notifications, handled with the same data-handling
              care your compliance team applies elsewhere
            </li>
          </ul>

          <h3 className="fw-bold mt-4">Education</h3>
          <ul>
            <li>Enrollment confirmations and fee reminders</li>
            <li>Class schedule and assignment notifications</li>
            <li>Doubt-clearing chatbots available outside class hours</li>
          </ul>

          <h3 className="fw-bold mt-4">Travel &amp; Hospitality</h3>
          <ul>
            <li>Booking confirmations and check-in reminders</li>
            <li>Real-time itinerary updates</li>
            <li>Post-stay feedback requests</li>
          </ul>

          <h3 className="fw-bold mt-4">Logistics &amp; Delivery</h3>
          <ul>
            <li>Real-time shipment tracking links</li>
            <li>Out-for-delivery and delivery-attempt alerts</li>
            <li>Failed delivery follow-ups</li>
          </ul>
        </section>

        {/* Section 14 - Team-wise */}
        <section className="mb-5">
          <h2
            id="team-wise-use-cases-for-whatsapp-business-api"
            className="fw-bold"
          >
            How Different Teams Use the API
          </h2>

          <p>
            <b>Sales &amp; Marketing:</b> Broadcasts to opted-in users, driving
            promotions and product launches at a scale the free app can't match.
          </p>
          <p>
            <b>Support Teams:</b> Live chat support across multiple agents and
            devices, answering customer queries without a single-user
            bottleneck.
          </p>
          <p>
            <b>Internal Communication:</b> Broadcasting announcements and
            updates across teams, especially useful once a business grows past a
            handful of people.
          </p>
        </section>

        {/* Section 15 - Why A2ZSMS */}
        <section className="mb-5">
          <h2
            id="why-choose-a2zsms-for-whatsapp-business-api"
            className="fw-bold"
          >
            Why Businesses Pick A2ZSMS to Run It
          </h2>

          <p>
            A2ZSMS was built around the idea that WhatsApp, SMS, RCS and Voice
            shouldn't need separate logins, separate compliance checks and
            separate invoices.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hdd-network-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One Dashboard, Every Channel:</b> Manage WhatsApp, SMS, RCS and
              Voice from a single screen.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Guided Business Verification:</b> Support through Meta Business
              Manager setup, document checks and template approvals.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cash-coin text-primary me-3 fs-4"></i>
            <span>
              <b>Transparent INR Pricing:</b> A real quote based on your
              expected volume, not a generic listed rate.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>Real-Time Delivery Reporting:</b> Sent, delivered and read
              status at the message level.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Support in Your Own Time Zone:</b> A team that responds when
              your business actually needs it.
            </span>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-5">
          <h2 className="fw-bold">Ready to Set This Up for Your Business?</h2>

          <p>
            Whether you're setting up WhatsApp messaging for the first time or
            replacing a setup that isn't delivering, <strong>A2ZSMS</strong>{" "}
            gives you WhatsApp — plus SMS, RCS and Voice — on one DLT-compliant
            platform with transparent INR pricing.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-rocket-takeoff-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Start a Free Trial:</b> Try WhatsApp Business API on the A2ZSMS
              platform with guided onboarding.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-calendar-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Request a Live Demo:</b> See broadcast tools, delivery
              reporting and template approvals running live.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Talk to Our Team:</b> Call <strong>+91 84310 86185</strong> or
              email <strong>sales@a2zsms.in</strong> to discuss your
              requirements.
            </span>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-5">
          <h2 className="fw-bold">Conclusion</h2>

          <p>
            The WhatsApp Business API isn't a replacement for the free app so
            much as what a business grows into once conversations outgrow one
            phone and one person. The pieces — Meta Business Manager, a WABA, a
            dedicated number, a BSP and approved templates — are straightforward
            once you know what each one does.
          </p>

          <p>
            <strong>A2ZSMS</strong> brings WhatsApp together with SMS, RCS and
            Voice on one dashboard, so setting up one channel doesn't mean
            starting from zero on the next.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-5">
          <div data-aos="fade-left">
            <h2 className="fw-bold mt-5">
              <span className="text-primary">Frequently Asked Questions:</span>{" "}
              WhatsApp Business API
            </h2>

            <div className="accordion mt-4" id="waApiFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq1"
                  >
                    Is WhatsApp Business API free in India?
                  </button>
                </h2>
                <div
                  id="waApiFaq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    No. WhatsApp charges per template message delivered, varying
                    by category and destination country, and your provider
                    charges a separate platform fee. Service messages sent
                    inside an active conversation window are free.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq2"
                  >
                    How do I apply for WhatsApp Business API in India?
                  </button>
                </h2>
                <div
                  id="waApiFaq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    You can apply directly through Meta's Cloud API or, more
                    commonly, through a Business Solution Provider like A2ZSMS,
                    which handles the Meta Business Manager connection, number
                    verification and template setup for you.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq3"
                  >
                    What documents are required for WhatsApp Business API in
                    India?
                  </button>
                </h2>
                <div
                  id="waApiFaq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    A legal business document (GST, MSME, or incorporation
                    certificate), a business website showing your legal name,
                    and a phone number not currently active on any WhatsApp
                    account.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq4"
                  >
                    Do I need DLT registration to use WhatsApp Business API?
                  </button>
                </h2>
                <div
                  id="waApiFaq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    No. DLT registration under TRAI applies to SMS and RCS sent
                    through Indian telecom operators. WhatsApp Business API runs
                    under Meta's own business verification and Commerce Policy,
                    alongside India's data protection obligations — a separate
                    compliance track, not DLT.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq5"
                  >
                    What's the difference between WhatsApp Business API and the
                    free Business app?
                  </button>
                </h2>
                <div
                  id="waApiFaq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    The free app is built for one person managing a small volume
                    of chats. The API supports multiple agents, automation, CRM
                    integration and unlimited broadcasts to opted-in users —
                    built for teams and growing message volume.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq6"
                  >
                    Can small businesses use WhatsApp Business API, or is it
                    only for large enterprises?
                  </button>
                </h2>
                <div
                  id="waApiFaq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    Small and growing businesses are often the ones who benefit
                    most — the API removes the 256-contact broadcast cap and
                    single-user limit that the free app imposes, well before
                    "enterprise scale" becomes relevant.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq7"
                  >
                    What is a WhatsApp quality rating, and how does it affect my
                    sending limit?
                  </button>
                </h2>
                <div
                  id="waApiFaq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    It's a score WhatsApp tracks based on how customers respond
                    to your number — replies and opens keep it healthy, blocks
                    and complaints lower it. Your rating directly determines how
                    many unique customers you can message in a 24-hour period.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#waApiFaq8"
                  >
                    Can I use WhatsApp Business API on multiple devices?
                  </button>
                </h2>
                <div
                  id="waApiFaq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#waApiFAQ"
                >
                  <div className="accordion-body">
                    Yes. Unlike the free Business app, the API supports multiple
                    agents logging in from different devices at the same time,
                    all under the same business number.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sep22;
