import React from "react";

const Sep15 = () => {
  return (
    <>
      <div className="container para-color py-4">
        {/* H1 — PRIMARY KEYWORD */}
        <h1 className="text-primary py-4">
          What Is an SMS API and How Does It Work for Indian Businesses
        </h1>

        {/* Introduction */}
        <section className="mb-5">
          <p>
            A customer waiting on a delivery update, a bank confirming a payment
            with a one-time password, a clinic reminding a patient about
            tomorrow's appointment — all of it depends on one message reaching a
            phone within seconds, not eventually. Try to do that by typing out
            texts one at a time and the reliability disappears the moment volume
            grows. An <strong>SMS API</strong> is what lets an application send
            that message automatically, the instant an event happens, without
            anyone touching a phone.
          </p>

          <p>
            What separates a working setup from a frustrating one usually isn't
            the code — most providers expose a similar set of send-and-track
            endpoints. It's whether messages actually clear India's DLT
            framework instead of getting silently dropped, whether delivery data
            shows up in real time, and whether integration takes an afternoon
            instead of a support-ticket-filled week.
          </p>

          <p>
            As a DLT-registered messaging platform running SMS, RCS, Voice and
            WhatsApp from a single dashboard, <strong>A2ZSMS</strong> treats SMS
            API as one reliable channel in a wider communication stack — not a
            bare endpoint you're left to configure alone. This guide walks
            through what an SMS API actually is, how it works end to end for an
            Indian business, DLT compliance, pricing and what to check before
            choosing a provider.
          </p>
        </section>

        {/* Image 1 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/sep15(1).webp"
            alt="SMS API for Indian businesses - A2ZSMS messaging dashboard"
          />
        </div>

        {/* Section - What Is an SMS API */}
        <section className="mb-5">
          <h2 className="fw-bold">What Is an SMS API?</h2>

          <p>
            An SMS API (Application Programming Interface) is the piece of
            software that lets your app, website or CRM send and receive text
            messages without a person manually dialling a number. Your system
            passes along the recipient's number and the message content; the API
            handles authentication, routes the request to a telecom network, and
            reports back whether it was delivered. Everything from an OTP
            triggered at login to a shipment update triggered by a warehouse
            scan runs through this same mechanism.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Transactional Messages:</b> OTPs, payment confirmations and
              delivery alerts triggered by a customer action.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-megaphone-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Promotional Messages:</b> offers and announcements sent to an
              opted-in customer list.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-arrow-left-right text-primary me-3 fs-4"></i>
            <span>
              <b>Two-Way Messaging:</b> customer replies routed back into your
              application or CRM.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up text-primary me-3 fs-4"></i>
            <span>
              <b>Delivery Reporting:</b> real-time status on whether each
              message actually reached the handset.
            </span>
          </div>
        </section>

        {/* Section - How It Works */}
        <section className="mb-5">
          <h2 className="fw-bold">
            How an SMS API Delivers a Message End to End
          </h2>

          <p>
            The mechanics behind a single SMS are more involved in India than
            most global explainers let on, mainly because of one step almost
            nobody can afford to skip.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-send-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Your Application Sends the Request:</b> triggered automatically
              by an event — a login, an order, an appointment.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-key-fill text-primary me-3 fs-4"></i>
            <span>
              <b>The API Authenticates and Matches a DLT Template:</b> your API
              key is verified, and the message content is checked against your
              registered template before it can proceed.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-broadcast text-primary me-3 fs-4"></i>
            <span>
              <b>The Telecom Network Delivers It:</b> the request routes through
              the operator network to the recipient's handset.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-check2-circle text-primary me-3 fs-4"></i>
            <span>
              <b>Your System Gets a Delivery Report:</b> confirmation comes back
              as delivered, pending or failed, without anyone checking manually.
            </span>
          </div>
        </section>

        {/* Image 2 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/sep15(2).webp"
            alt="How SMS API works - message flow from application to delivery report"
          />
        </div>

        {/* Section - DLT */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Why DLT Registration Is Non-Negotiable for SMS API Use in India
          </h2>

          <p>
            DLT (Distributed Ledger Technology) is the blockchain-based
            registration system that TRAI (Telecom Regulatory Authority of
            India) requires every business to complete before sending commercial
            SMS to Indian numbers. It exists to confirm that whoever is sending
            a message is a verified, traceable entity — not an anonymous bulk
            sender.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-briefcase-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Entity Registration:</b> your business is registered as a
              Principal Entity on a DLT platform before anything else can
              happen.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-tag-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Sender ID (Header) Approval:</b> the short code or name
              customers see as the message sender.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-file-earmark-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Template Approval:</b> every message format needs pre-approval
              before it's allowed to send.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-x-octagon-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Without It, Nothing Sends:</b> messages are blocked by the
              operator before they reach a phone, no matter how well the API
              integration itself is built.
            </span>
          </div>
        </section>

        {/* Section - Compliance */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Compliance and Security Basics for SMS API Senders
          </h2>

          <p>
            DLT covers who's allowed to send. A few other basics govern how
            responsibly that sending happens once you're approved.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Opt-In and DND Compliance:</b> promotional messages should only
              reach numbers that have consented, and TRAI's do-not-disturb
              registry still applies.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Encrypted Transmission:</b> requests should move over secured
              connections between your application, the API and the telecom
              network.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Data Handling Aligned With DPDP:</b> customer numbers and
              message content should be handled in line with India's Digital
              Personal Data Protection Act.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-badge-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Sender ID Must Match Your Business:</b> a registered header
              should be recognisably yours, not a generic or shared code.
            </span>
          </div>
        </section>

        {/* Section - Use Cases Table */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Where Indian Businesses Put SMS API to Work
          </h2>

          <p>
            The underlying API is the same everywhere — what changes is which
            trigger fires it.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Industry</th>
                  <th>Typical SMS API Use</th>
                  <th>Main Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Banking &amp; Finance</b>
                  </td>
                  <td>OTPs, transaction alerts, payment reminders</td>
                  <td>Instant, traceable verification</td>
                </tr>
                <tr>
                  <td>
                    <b>E-commerce &amp; D2C</b>
                  </td>
                  <td>Order confirmations, shipping updates, COD reminders</td>
                  <td>Fewer "where is my order" support calls</td>
                </tr>
                <tr>
                  <td>
                    <b>Healthcare</b>
                  </td>
                  <td>Appointment reminders, report-ready alerts</td>
                  <td>Lower missed-appointment rates</td>
                </tr>
                <tr>
                  <td>
                    <b>Logistics</b>
                  </td>
                  <td>Delivery ETAs, OTP-based handover confirmation</td>
                  <td>Fewer failed or disputed deliveries</td>
                </tr>
                <tr>
                  <td>
                    <b>Education</b>
                  </td>
                  <td>Attendance alerts, fee-due reminders</td>
                  <td>Direct reach to parents without needing an app</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Image 3 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/sep15(3).webp"
            alt="SMS API use cases across Indian industries - A2ZSMS"
          />
        </div>

        {/* Section - Pricing Table */}
        <section className="mb-5">
          <h2 className="fw-bold">
            What SMS API Pricing Actually Includes in India
          </h2>

          <p>
            SMS API pricing isn't one number — it's a per-message rate plus a
            few charges that are easy to miss until the first invoice arrives.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Pricing Component</th>
                  <th>What It Covers</th>
                  <th>Typical Billing Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Per-SMS Rate</b>
                  </td>
                  <td>Cost per message segment sent</td>
                  <td>Charged per message or credit</td>
                </tr>
                <tr>
                  <td>
                    <b>DLT Registration Fees</b>
                  </td>
                  <td>Entity, sender ID and template approval</td>
                  <td>One-time, separate from API usage</td>
                </tr>
                <tr>
                  <td>
                    <b>API Platform Access</b>
                  </td>
                  <td>Dashboard, delivery reports, integration support</td>
                  <td>Monthly or pay-as-you-go</td>
                </tr>
                <tr>
                  <td>
                    <b>GST</b>
                  </td>
                  <td>Tax on subscription and usage charges</td>
                  <td>18%, added to every invoice</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-currency-rupee text-primary me-3 fs-4"></i>
            <span>
              <b>Ask for a Real INR Quote:</b> request pricing based on your
              expected monthly SMS volume, not a generic listed rate.
            </span>
          </div>
        </section>

        {/* Section - Checklist */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Checklist for Choosing an SMS API Provider in India
          </h2>

          <p>
            Rather than comparing homepages, run every shortlisted provider
            through the same short list of questions:
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>DLT Support Included:</b> confirm the provider helps with
              entity, sender ID and template registration, not just the API
              itself.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up text-primary me-3 fs-4"></i>
            <span>
              <b>Delivery Reporting Detail:</b> ask how granular the delivery
              and read data is, down to the message level.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-code-slash text-primary me-3 fs-4"></i>
            <span>
              <b>Documentation Quality:</b> clear, testable API docs save weeks
              during integration.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Support During Live Issues:</b> check response times when a
              transactional flow breaks, not just at onboarding.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cash-coin text-primary me-3 fs-4"></i>
            <span>
              <b>Transparent Per-Message Pricing:</b> a real rate card, not a
              "contact sales" page.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hdd-network-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Room to Add Channels Later:</b> WhatsApp, RCS or Voice on the
              same account if you scale beyond SMS.
            </span>
          </div>
        </section>

        {/* Section - Steps */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Steps to Get Your SMS API Integration Live
          </h2>

          <p>
            Most businesses go from signup to their first live message in a
            handful of steps, once DLT registration is out of the way.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-1-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Complete DLT Registration:</b> register your entity, sender ID
              and message templates before any integration work starts.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-2-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Get Your API Credentials:</b> receive an API key and endpoint
              documentation from your provider.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-3-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Integrate the API Into Your Application:</b> connect it to the
              event that should trigger a message — signup, order, appointment.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-4-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Test With Approved Templates:</b> send test messages against
              your registered templates before going live.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-5-circle-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Go Live and Monitor Delivery:</b> track delivery reports and
              adjust templates or routing as needed.
            </span>
          </div>
        </section>

        {/* Section - Why A2ZSMS */}
        <section className="mb-5">
          <h2 className="fw-bold">Why Businesses Choose A2ZSMS for SMS API</h2>

          <p>
            Plenty of vendors can hand you an API key. Here's what sets A2ZSMS
            apart as a partner built to run SMS as part of a full messaging
            stack, not a standalone endpoint.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hdd-network-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One Dashboard for Every Channel:</b> SMS, WhatsApp, RCS and
              Voice managed from a single screen, with fallback between them.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-check text-primary me-3 fs-4"></i>
            <span>
              <b>DLT Registration Handled for You:</b> entity, sender ID and
              template approvals managed as part of onboarding, not left for you
              to figure out alone.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-cash-coin text-primary me-3 fs-4"></i>
            <span>
              <b>Transparent Per-Message Pricing:</b> a real INR rate card once
              your volumes are known.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>Real-Time Delivery Reporting:</b> see sent, delivered and
              failed status at the message level.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Support in Your Own Time Zone:</b> a team that responds when
              your systems are actually live.
            </span>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Talk to a Reliable SMS API Provider in India
          </h2>

          <p>
            Move OTPs, alerts and updates off manual processes and into one
            DLT-compliant, trackable channel. Whether you're integrating your
            first SMS flow or replacing an unreliable provider,{" "}
            <strong>A2ZSMS</strong> gives you DLT support, real-time delivery
            reporting and transparent INR pricing — so every message actually
            reaches its recipient.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-rocket-takeoff-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Start a Free Trial:</b> experience the A2ZSMS platform across
              SMS, WhatsApp and RCS, with guided onboarding.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-calendar-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Request a Live Demo:</b> see the API, delivery reporting and
              DLT workflow running live, with pricing mapped to your volumes.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Talk to Our Team:</b> call <strong>+91 84310 86185</strong> or
              email <strong>sales@a2zsms.in</strong> to discuss your
              requirements.
            </span>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-5">
          <h2 className="fw-bold">Conclusion</h2>

          <p>
            An SMS API works best for an Indian business when it's treated as a
            compliant, monitored channel — DLT-registered, transparently priced,
            and backed by real delivery data — rather than a bare endpoint
            bolted onto an application. What actually separates one provider
            from another shows up in the details: whether DLT is handled for
            you, whether pricing is a real number instead of a "contact us"
            page, and whether delivery reporting is genuinely real time.
          </p>

          <p>
            For a business comparing options, the question is less about the
            technology and more about the partner. A dependable{" "}
            <strong>SMS API for Indian businesses</strong> should come with DLT
            support, clear pricing and real delivery visibility bundled in, not
            sold separately.
          </p>

          <p>
            <strong>A2ZSMS</strong> brings SMS, WhatsApp, RCS and Voice together
            on a single, DLT-compliant platform with transparent INR pricing and
            hands-on support. Ready to see it for your own use case? Start a
            free trial or request a live demo.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-5">
          <div data-aos="fade-left">
            <h2 className="fw-bold mt-5">
              <span className="text-primary">Frequently Asked Questions:</span>{" "}
              SMS API for Indian Businesses
            </h2>

            <div className="accordion mt-4" id="smsFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq1"
                  >
                    What is an SMS API in simple terms?
                  </button>
                </h2>
                <div
                  id="smsFaq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    An SMS API is the piece of software that lets an application
                    send and receive text messages automatically, without a
                    person sending each one manually. Your system passes along
                    the number and message; the API handles authentication,
                    delivery through the telecom network, and reports back the
                    result.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq2"
                  >
                    Do I need DLT registration to use an SMS API in India?
                  </button>
                </h2>
                <div
                  id="smsFaq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    Yes. TRAI mandates DLT registration for any entity sending
                    commercial SMS to Indian numbers. Without a registered
                    entity, sender ID and approved template, the operator blocks
                    the message before it reaches the recipient — regardless of
                    how well the API integration works.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq3"
                  >
                    What's the difference between an SMS API and bulk SMS
                    software?
                  </button>
                </h2>
                <div
                  id="smsFaq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    Bulk SMS software is typically a dashboard you log into to
                    send messages manually or upload a list. An SMS API is built
                    for your application to trigger messages automatically based
                    on events — an order, a login, an appointment — without
                    anyone opening a dashboard at all.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq4"
                  >
                    Is an SMS API secure enough for OTPs and payment
                    confirmations?
                  </button>
                </h2>
                <div
                  id="smsFaq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    Yes, when it's implemented correctly. Requests should move
                    over encrypted connections, and access should be controlled
                    with a unique API key per account so every request can be
                    traced back to its source — which is exactly why banks and
                    payment platforms rely on SMS APIs for OTP delivery.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq5"
                  >
                    How is SMS API pricing structured for Indian businesses?
                  </button>
                </h2>
                <div
                  id="smsFaq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    Pricing usually combines a per-message rate with a one-time
                    DLT registration cost and 18% GST on top. A2ZSMS shares a
                    real per-message quote based on your expected monthly volume
                    rather than a generic listed rate — request a demo and we'll
                    walk through it.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq6"
                  >
                    Can a small business or startup use an SMS API, or is it
                    only for large enterprises?
                  </button>
                </h2>
                <div
                  id="smsFaq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    Small businesses and startups are often the ones who benefit
                    most — a single OTP flow or order-confirmation trigger can
                    be integrated in a short development cycle, without the
                    overhead a large enterprise rollout would need.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq7"
                  >
                    How long does SMS API integration usually take?
                  </button>
                </h2>
                <div
                  id="smsFaq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    For a single use case like OTP verification or order
                    confirmations, integration is typically a short,
                    well-documented development task once DLT registration is
                    complete. DLT approval timelines depend on the operator and
                    how quickly your documents are submitted, so that's usually
                    the longer part of the process, not the API work itself.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsFaq8"
                  >
                    Can an SMS API send both transactional and promotional
                    messages?
                  </button>
                </h2>
                <div
                  id="smsFaq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsFAQ"
                >
                  <div className="accordion-body">
                    Yes, but they're treated differently under DLT —
                    transactional messages like OTPs and promotional messages
                    like offers need separate registered templates, and
                    promotional messages must only go to numbers that have opted
                    in.
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

export default Sep15;
