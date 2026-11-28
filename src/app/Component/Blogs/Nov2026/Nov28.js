import React from "react";

const Nov28 = () => {
  return (
    <>
      <div className="container para-color py-4">
        {/* H1 — PRIMARY KEYWORD */}
        <h1 className="text-primary py-4">
          Bulk SMS Templates for Indian Businesses
        </h1>

        {/* Introduction */}
        <section className="mb-5">
          <p>
            In India, a bulk SMS doesn't leave your dashboard until it matches
            something you registered in advance. That "something" is a template,
            and most of the frustration businesses have with SMS, from blocked
            messages to rejected submissions, traces back to how the template
            was written rather than to the platform sending it.
          </p>

          <p>
            This guide is a working reference for{" "}
            <strong>bulk SMS templates</strong> for Indian businesses. It
            explains the four template categories, how a template is built, and
            gives example wording for OTPs, order updates, reminders and
            promotions that you can adapt, along with the mistakes that get
            templates rejected. It also covers the consent and timing rules that
            apply once a template is approved.
          </p>

          <p>
            <strong>A2ZSMS</strong> runs SMS alongside WhatsApp, RCS and Voice
            from a single DLT-compliant dashboard. The examples below are
            starting points, not guaranteed approvals: every business registers
            its own templates on its operator's DLT portal, and operators decide
            what gets through.
          </p>
        </section>

        {/* Image 1 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/nov28(1).webp"
            alt="Bulk SMS templates for Indian businesses with DLT-compliant examples - A2ZSMS"
          />
        </div>

        {/* Section 1 - Why templates */}
        <section className="mb-5">
          <h2
            id="why-every-bulk-sms-starts-with-a-registered-template"
            className="fw-bold"
          >
            Why Every Bulk SMS in India Starts With a Registered Template
          </h2>

          <p>
            India's DLT framework, regulated by TRAI, requires businesses that
            send commercial SMS to register their details with the telecom
            operators before sending. Three things get registered, and each one
            has a job.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>What You Register</th>
                  <th>What It Is</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Entity</b>
                  </td>
                  <td>
                    Your business, registered with proof on an operator's DLT
                    portal
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Header (Sender ID)</b>
                  </td>
                  <td>The six-character name recipients see as the sender</td>
                </tr>
                <tr>
                  <td>
                    <b>Content Template</b>
                  </td>
                  <td>
                    The approved wording of a message, with variables for the
                    parts that change
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Consent Template</b>
                  </td>
                  <td>
                    Linked to service-explicit templates to show customers
                    agreed to receive them
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Once a template is approved it gets a Template ID, and every message
            you send must match that registered wording, with only the variable
            values changing. For the registration steps themselves, see our
            guide to{" "}
            <a
              href="/blogs/how-to-use-bulk-sms-service-grow-business-india-2026/"
              className="text-primary"
            >
              using a bulk SMS service in India
            </a>
            . This article picks up from there and focuses on the wording.
          </p>
        </section>

        {/* Section 2 - Categories */}
        <section className="mb-5">
          <h2
            id="template-categories-and-what-belongs-in-each"
            className="fw-bold"
          >
            Four Template Categories and What Belongs in Each
          </h2>

          <p>
            Picking the wrong category is one of the most common reasons a
            template is rejected, so it's worth being clear on what each one is
            for.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Category</th>
                  <th>Used For</th>
                  <th>Watch Out For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Transactional</b>
                  </td>
                  <td>OTPs and banking-type transaction alerts</td>
                  <td>
                    Keep it strictly to the OTP or alert, with no promotion
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Service Implicit</b>
                  </td>
                  <td>
                    Updates triggered by the customer's own action, such as
                    orders, bookings and receipts
                  </td>
                  <td>No promotional content mixed in</td>
                </tr>
                <tr>
                  <td>
                    <b>Service Explicit</b>
                  </td>
                  <td>
                    Messages to existing customers that suggest other products
                    or services
                  </td>
                  <td>Needs a linked consent template</td>
                </tr>
                <tr>
                  <td>
                    <b>Promotional</b>
                  </td>
                  <td>Offers, launches, sales and announcements</td>
                  <td>
                    Needs a promotional header, and consent and timing rules
                    apply
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Operators review categories strictly. Promotional wording inside a
            transactional or service template is a common reason for rejection,
            so confirm the right category for your message with your provider
            before you submit.
          </p>
        </section>

        {/* Section 3 - Anatomy */}
        <section className="mb-5">
          <h2 id="anatomy-of-a-dlt-template" className="fw-bold">
            Anatomy of a Template: Fixed Text, Variables and Your Brand Name
          </h2>

          <p>
            Every approved template is a mix of fixed wording and placeholders.
            Variables are written as <code>{"{#var#}"}</code>, and they're meant
            for values that change from one message to the next.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-braces text-primary me-3 fs-4"></i>
            <span>
              <b>Variables for Values That Change:</b> Names, amounts, dates,
              order numbers and OTPs belong in variables. Each variable is
              limited to 30 characters.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-tag-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Your Brand Name in the Text:</b> Recipients should recognise
              who is writing from the message itself, not only from the header.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-text-paragraph text-primary me-3 fs-4"></i>
            <span>
              <b>Meaningful Fixed Text:</b> Chaining several variables together
              with little fixed wording around them looks like an attempt to get
              around the rules and is discouraged.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-eraser-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Clean Formatting:</b> Stray spaces or empty lines at the end of
              a template can make it look non-standard.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-link-45deg text-primary me-3 fs-4"></i>
            <span>
              <b>Registered Links and Callback Numbers:</b> URLs and phone
              numbers placed in a template need to be whitelisted on the DLT
              platform, and the rules on shortened links have tightened, so ask
              your provider what is currently accepted.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-collection-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One Template per Purpose and Header:</b> A separate, specific
              template for each use case is more likely to be approved than one
              template stretched across several.
            </span>
          </div>
        </section>

        {/* Section 4 - OTP */}
        <section className="mb-5">
          <h2 id="otp-and-verification-templates" className="fw-bold">
            OTP and Verification Templates
          </h2>

          <p>
            OTPs are the simplest templates to write and the least forgiving.
            Keep the message to the code, its validity and a warning, and add
            nothing else.
          </p>

          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Login OTP</b>
              <span className="badge bg-primary">Transactional</span>
            </div>
            <p className="mb-0">
              {"{#var#}"} is your OTP to log in to YourBrand. It is valid for{" "}
              {"{#var#}"} minutes. Do not share it with anyone.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Payment confirmation OTP</b>
              <span className="badge bg-primary">Transactional</span>
            </div>
            <p className="mb-0">
              Use {"{#var#}"} as the OTP to confirm your payment of Rs.{" "}
              {"{#var#}"} at YourBrand. Do not share this OTP. Valid for{" "}
              {"{#var#}"} minutes.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Registration verification code</b>
              <span className="badge bg-primary">Transactional</span>
            </div>
            <p className="mb-0">
              Welcome to YourBrand! {"{#var#}"} is your verification code to
              complete registration. It expires in {"{#var#}"} minutes.
            </p>
          </div>

          <p>
            Never add an offer or a link to an OTP message. It risks rejection
            and can undermine the trust that makes people enter the code in the
            first place.
          </p>
        </section>

        {/* Section 5 - Order and booking */}
        <section className="mb-5">
          <h2
            id="order-booking-and-payment-update-templates"
            className="fw-bold"
          >
            Order, Booking and Payment Update Templates
          </h2>

          <p>
            These messages report something the customer just did, such as
            placing an order, booking a slot or paying an invoice. They usually
            belong in the service-implicit category, which means no promotional
            wording can be added.
          </p>

          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Order confirmation</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Hi {"{#var#}"}, your YourBrand order {"{#var#}"} is confirmed.
              Expected delivery by {"{#var#}"}. Thank you for shopping with us.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Shipping update</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Good news, {"{#var#}"}! Your YourBrand order {"{#var#}"} has been
              shipped via {"{#var#}"}. Track it with the courier using ID{" "}
              {"{#var#}"}.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Booking confirmation</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Dear {"{#var#}"}, your booking {"{#var#}"} with YourBrand is
              confirmed for {"{#var#}"}. For help, call 080XXXXXXXX.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Payment received</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Thank you, {"{#var#}"}. We have received Rs. {"{#var#}"} towards
              invoice {"{#var#}"} on {"{#var#}"}. - YourBrand
            </p>
          </div>
        </section>

        {/* Image 2 */}
        <div className="mb-3">
          <img
            width="100%"
            height="auto"
            src="/Images/nov28(2).webp"
            alt="Order and booking SMS template examples with DLT variables - A2ZSMS"
          />
        </div>

        {/* Section 6 - Reminders */}
        <section className="mb-5">
          <h2
            id="reminder-templates-for-appointments-fees-and-renewals"
            className="fw-bold"
          >
            Reminder Templates for Appointments, Fees and Renewals
          </h2>

          <p>
            Reminders are among the most useful SMS a business can send, because
            they prevent missed visits and late payments. Keep each one to a
            single date and a single action.
          </p>

          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Appointment reminder</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Dear {"{#var#}"}, this is a reminder of your appointment at
              YourClinic on {"{#var#}"} at {"{#var#}"}. To reschedule, call
              080XXXXXXXX.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Fee reminder</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Dear Parent, the fee of Rs. {"{#var#}"} for {"{#var#}"} is due on{" "}
              {"{#var#}"}. Kindly pay at the school office or on the school
              portal. - YourSchool
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Plan or subscription expiry</b>
              <span className="badge bg-primary">Service Implicit</span>
            </div>
            <p className="mb-0">
              Dear {"{#var#}"}, your YourBrand plan expires on {"{#var#}"}.
              Renew before this date to avoid any interruption.
            </p>
          </div>

          <p>
            Banks, insurers and other regulated businesses should also check
            their sector's own guidance on payment and renewal messages before
            finalising wording.
          </p>
        </section>

        {/* Section 7 - Promotional */}
        <section className="mb-5">
          <h2
            id="promotional-templates-for-offers-launches-and-events"
            className="fw-bold"
          >
            Promotional Templates for Offers, Launches and Events
          </h2>

          <p>
            Promotional templates need a promotional header, and the message
            should read like an offer from the first line. Say what's on offer,
            until when and how to act.
          </p>

          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Sale announcement</b>
              <span className="badge bg-primary">Promotional</span>
            </div>
            <p className="mb-0">
              YourBrand Festive Sale is on! Get up to {"{#var#}"}% off on
              selected products till {"{#var#}"}. Visit www.yourbrand.com to
              shop. T&amp;C apply.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Project launch</b>
              <span className="badge bg-primary">Promotional</span>
            </div>
            <p className="mb-0">
              Introducing YourProject by YourBuilder in {"{#var#}"}. Book your
              site visit this weekend. Call 080XXXXXXXX for details. T&amp;C
              apply.
            </p>
          </div>
          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Event or webinar invite</b>
              <span className="badge bg-primary">Promotional</span>
            </div>
            <p className="mb-0">
              Join YourBrand's free {"{#var#}"} session on {"{#var#}"} at{" "}
              {"{#var#}"}. Limited seats. Register at www.yourbrand.com/events.
            </p>
          </div>

          <p>
            If you want to promote related products to existing customers inside
            a service message, that falls under the service-explicit category,
            and the template must be linked to a consent template.
          </p>

          <div className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
              <b>Related offer to an existing customer</b>
              <span className="badge bg-primary">Service Explicit</span>
            </div>
            <p className="mb-0">
              Hi {"{#var#}"}, thank you for choosing YourBrand. As our valued
              customer, you can add {"{#var#}"} to your recent purchase at a
              special price. Call 080XXXXXXXX to know more.
            </p>
          </div>
        </section>

        {/* Section 8 - Industry starter sets */}
        <section className="mb-5">
          <h2
            id="industry-starter-sets-for-bulk-sms-templates"
            className="fw-bold"
          >
            Starter Sets by Industry
          </h2>

          <p>
            Most businesses need only a handful of templates to cover the
            moments that matter. Here's a useful starting list by sector.
          </p>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Industry</th>
                  <th>Useful Templates</th>
                  <th>Usual Categories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Retail and eCommerce</b>
                  </td>
                  <td>
                    Order confirmation, shipping update, sale announcement
                  </td>
                  <td>Service Implicit, Promotional</td>
                </tr>
                <tr>
                  <td>
                    <b>Healthcare</b>
                  </td>
                  <td>
                    Appointment confirmation, reminder, health camp invitation
                  </td>
                  <td>Service Implicit, Promotional</td>
                </tr>
                <tr>
                  <td>
                    <b>Education</b>
                  </td>
                  <td>Admission confirmation, fee reminder, event invite</td>
                  <td>Service Implicit, Promotional</td>
                </tr>
                <tr>
                  <td>
                    <b>Real Estate</b>
                  </td>
                  <td>
                    Site visit confirmation, payment milestone reminder, project
                    launch
                  </td>
                  <td>Service Implicit, Promotional</td>
                </tr>
                <tr>
                  <td>
                    <b>Travel and Hospitality</b>
                  </td>
                  <td>
                    Booking confirmation, itinerary change alert, package offer
                  </td>
                  <td>Service Implicit, Promotional</td>
                </tr>
                <tr>
                  <td>
                    <b>Banking and Financial Services</b>
                  </td>
                  <td>OTP, transaction alert, renewal reminder</td>
                  <td>Transactional, Service Implicit (follow sector rules)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Treat the categories as a guide rather than a guarantee. Confirm the
            right one for each template with your provider before you submit.
          </p>
        </section>

        {/* Section 9 - Rejections */}
        <section className="mb-5">
          <h2
            id="why-templates-get-rejected-and-how-to-fix-them"
            className="fw-bold"
          >
            Why Templates Get Rejected, and How to Fix Them
          </h2>

          <div className="table-responsive mb-4">
            <table className="table table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Common Reason</th>
                  <th>How to Fix It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>
                      Promotional wording in a service or transactional template
                    </b>
                  </td>
                  <td>Move offers to a promotional header and template</td>
                </tr>
                <tr>
                  <td>
                    <b>A generic name such as "Test" or "Template"</b>
                  </td>
                  <td>
                    Use a descriptive name that reflects the message's purpose
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Brand name missing from the text</b>
                  </td>
                  <td>Include your brand name in the message itself</td>
                </tr>
                <tr>
                  <td>
                    <b>Extra spaces or empty lines</b>
                  </td>
                  <td>Remove them and paste the text carefully</td>
                </tr>
                <tr>
                  <td>
                    <b>Too many variables and vague fixed text</b>
                  </td>
                  <td>Use variables only for values that change</td>
                </tr>
                <tr>
                  <td>
                    <b>Template linked to a mismatched header</b>
                  </td>
                  <td>Keep a specific template for each header and category</td>
                </tr>
                <tr>
                  <td>
                    <b>Links or callback numbers not whitelisted</b>
                  </td>
                  <td>Register them on the DLT portal before submitting</td>
                </tr>
                <tr>
                  <td>
                    <b>
                      Message differs from the registered wording at send time
                    </b>
                  </td>
                  <td>
                    Send the approved text exactly, changing only variable
                    values
                  </td>
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
            src="/Images/nov28(3).webp"
            alt="DLT template approval workflow for bulk SMS campaigns - A2ZSMS"
          />
        </div>

        {/* Section 10 - Workflow */}
        <section className="mb-5">
          <h2
            id="from-draft-to-approved-a-simple-template-workflow"
            className="fw-bold"
          >
            From Draft to Approved: A Simple Template Workflow
          </h2>

          <p>
            A little discipline up front saves resubmissions later. Here's a
            workflow that keeps things tidy.
          </p>

          <ol className="mb-4">
            <li className="mb-2">
              <b>Write the message in plain words</b> and decide what it is for:
              verification, an update, a reminder or an offer.
            </li>
            <li className="mb-2">
              <b>Choose the category and header</b> that match, keeping
              promotional content out of everything else.
            </li>
            <li className="mb-2">
              <b>Replace changing values with variables,</b> and check each one
              stays within the 30-character limit.
            </li>
            <li className="mb-2">
              <b>Add your brand name,</b> and make sure any link or callback
              number is whitelisted.
            </li>
            <li className="mb-2">
              <b>Submit through your provider</b> or the operator's DLT portal,
              and wait for approval.
            </li>
            <li className="mb-2">
              <b>Note the Template ID,</b> test with a small send, and keep a
              library of approved templates for your team.
            </li>
          </ol>
        </section>

        {/* Section 11 - Writing tips */}
        <section className="mb-5">
          <h2 id="writing-short-messages-that-get-read" className="fw-bold">
            Writing Short Messages That Get Read
          </h2>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-123 text-primary me-3 fs-4"></i>
            <span>
              <b>Mind the Character Count:</b> A standard SMS fits about 160
              characters. Longer messages are split into parts, and each part is
              usually billed as a separate message.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-currency-rupee text-primary me-3 fs-4"></i>
            <span>
              <b>Write "Rs." Instead of the Rupee Symbol:</b> The ₹ symbol isn't
              part of the standard SMS character set and can push a message into
              Unicode encoding, which fits fewer characters.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-translate text-primary me-3 fs-4"></i>
            <span>
              <b>Plan for Regional Languages:</b> Messages in Hindi, Kannada,
              Telugu or other scripts use Unicode, so they fit fewer characters
              per part, and the template must be registered in that language.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-bullseye text-primary me-3 fs-4"></i>
            <span>
              <b>Put the Key Detail First:</b> Lead with the OTP, the date or
              the offer, since many people read only the first line.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hand-index-thumb-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One Clear Action:</b> A single call number or link beats
              several choices.
            </span>
          </div>
        </section>

        {/* Section 12 - Compliance */}
        <section className="mb-5">
          <h2
            id="sending-within-the-rules-consent-timing-and-opt-out"
            className="fw-bold"
          >
            Sending Within the Rules: Consent, Timing and Opt-Out
          </h2>

          <p>
            A template being approved doesn't mean every message is free to go
            to every number. The rules around who you message and when still
            apply.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-person-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Respect Do Not Disturb Preferences:</b> Promotional messages
              shouldn't go to numbers that opted out of promotional SMS unless
              the customer has given you consent.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-clock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Send Within Permitted Hours:</b> Promotional messages are
              limited to daytime and evening hours set by TRAI, so check the
              current window before scheduling campaigns.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-toggle-on text-primary me-3 fs-4"></i>
            <span>
              <b>Make Opting Out Easy:</b> Many promotional templates carry an
              opt-out instruction, and honouring requests quickly protects your
              sender reputation.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-journal-check text-primary me-3 fs-4"></i>
            <span>
              <b>Keep Records of Consent:</b> Store when and how each customer
              agreed to hear from you.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-lock-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Handle Customer Data Carefully:</b> Phone numbers and message
              data should be handled in line with the Digital Personal Data
              Protection Act.
            </span>
          </div>
        </section>

        {/* Section 13 - Beyond SMS */}
        <section className="mb-5">
          <h2
            id="templates-beyond-sms-fallback-rcs-and-whatsapp"
            className="fw-bold"
          >
            Templates Beyond SMS: Fallback, RCS and WhatsApp
          </h2>

          <p>
            Many businesses now run SMS next to other channels, and it helps to
            know which rules follow which channel.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-arrow-repeat text-primary me-3 fs-4"></i>
            <span>
              <b>SMS Fallback for RCS:</b> When a phone can't receive RCS, the
              message goes out as SMS, and that fallback version still has to
              match a registered DLT template. Our guide to{" "}
              <a href="/blogs/rcs-fallback-to-sms/" className="text-primary">
                RCS fallback to SMS
              </a>{" "}
              explains how it works.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-chat-dots-fill text-primary me-3 fs-4"></i>
            <span>
              <b>WhatsApp Templates Are Separate:</b> WhatsApp isn't part of the
              DLT framework. Its templates are approved by Meta, with their own
              categories and rules. See our guide to{" "}
              <a
                href="/blogs/best-whatsapp-api-message-templates-for-indian-businesses/"
                className="text-primary"
              >
                WhatsApp API message templates
              </a>
              .
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hdd-network-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Consistent Wording Across Channels:</b> Keeping your SMS and
              WhatsApp wording aligned makes the customer experience feel
              consistent, even though the approvals differ.
            </span>
          </div>
        </section>

        {/* Section 14 - Pricing */}
        <section className="mb-5">
          <h2
            id="what-bulk-sms-costs-and-how-templates-affect-it"
            className="fw-bold"
          >
            What Bulk SMS Costs and How Templates Affect It
          </h2>

          <p>
            Bulk SMS is typically priced per message part, and the rate depends
            on the category and your provider. Your template choices affect the
            bill in two ways: longer messages and Unicode text are split into
            more parts, and the category you register under decides which rate
            applies.
          </p>

          <p>
            Instead of quoting one number here, the more useful step is a rate
            card matched to your expected volume and message mix, shared in INR
            by the A2ZSMS team.
            {/* TODO (Ananth): drop in verified A2ZSMS bulk SMS rates/₹ figures here once confirmed */}
          </p>
        </section>

        {/* Section 15 - Why A2ZSMS */}
        <section className="mb-5">
          <h2 id="why-businesses-pick-a2zsms-for-bulk-sms" className="fw-bold">
            What You Get With A2ZSMS
          </h2>

          <p>
            A2ZSMS was built around the idea that SMS, WhatsApp, RCS and Voice
            shouldn't need separate logins, separate compliance checks and
            separate invoices.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-hdd-network-fill text-primary me-3 fs-4"></i>
            <span>
              <b>One Dashboard, Every Channel:</b> Manage SMS, WhatsApp, RCS and
              Voice from a single screen.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-shield-check text-primary me-3 fs-4"></i>
            <span>
              <b>DLT-Compliant Delivery:</b> Compliance handled in the same
              place you build and send.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-patch-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Guidance on Headers and Templates:</b> Support while you set up
              your registrations and write your first templates.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-code-slash text-primary me-3 fs-4"></i>
            <span>
              <b>API Integration:</b> Trigger OTPs and updates from your own
              software.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-graph-up-arrow text-primary me-3 fs-4"></i>
            <span>
              <b>Real-Time Reporting:</b> Delivery status while your campaign is
              still running.
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
            <i className="bi bi-headset text-primary me-3 fs-4"></i>
            <span>
              <b>Reachable Support:</b> A team you can call or email when
              something needs fixing.
            </span>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-5">
          <h2 className="fw-bold">
            Ready to Send SMS That Gets Approved and Delivered?
          </h2>

          <p>
            Whether you're registering your first template or cleaning up a set
            that keeps getting rejected, <strong>A2ZSMS</strong> gives you SMS —
            plus WhatsApp, RCS and Voice — on one DLT-compliant platform with
            transparent INR pricing.
          </p>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-rocket-takeoff-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Start a Free Trial:</b> Try bulk SMS on the A2ZSMS platform
              with guided onboarding.
            </span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-calendar-check-fill text-primary me-3 fs-4"></i>
            <span>
              <b>Request a Live Demo:</b> See campaign tools and delivery
              reporting running live.
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
            Good bulk SMS templates come down to a few habits: pick the right
            category, keep the wording short and specific, use variables only
            for what changes, include your brand name and keep every message
            within the approved text. Do that and most rejections and blocked
            messages disappear.
          </p>

          <p>
            <strong>A2ZSMS</strong> brings SMS together with WhatsApp, RCS and
            Voice on one dashboard, so your templates and your customers'
            inboxes stay consistent across channels.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-5">
          <div data-aos="fade-left">
            <h2 className="fw-bold mt-5">
              <span className="text-primary">Frequently Asked Questions:</span>{" "}
              Bulk SMS Templates
            </h2>

            <div className="accordion mt-4" id="smsTemplateFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq1"
                  >
                    What is a bulk SMS template in India?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    It's the approved wording of a message, registered on an
                    operator's DLT portal with variables for the parts that
                    change. Every SMS you send must match a registered template.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq2"
                  >
                    Can I send an SMS that doesn't match my registered template?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    No. A message that doesn't match the approved wording, apart
                    from its variable values, is likely to be blocked.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq3"
                  >
                    What does {"{#var#}"} mean in an SMS template?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    It marks a variable, a placeholder for a value that changes
                    in each message, such as a name, amount or date. Each
                    variable can be up to 30 characters long.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq4"
                  >
                    Which category should my template be in?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    OTPs and banking-type alerts are transactional, updates
                    triggered by a customer's action are service implicit,
                    related offers to existing customers are service explicit,
                    and everything promotional needs a promotional header.
                    Confirm the right category with your provider before you
                    submit.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq5"
                  >
                    How long does template approval take?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    Timelines vary by operator and by how clean your submission
                    is. Getting the category, brand name and variables right
                    first time helps avoid resubmissions.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq6"
                  >
                    Can I include links or phone numbers in my template?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    Yes, but links and callback numbers need to be whitelisted
                    on the DLT platform first. The rules on shortened links have
                    tightened, so ask the A2ZSMS team what's currently accepted.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq7"
                  >
                    Can I send templates in Hindi or other regional languages?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    Yes, if the template is registered in that language.
                    Regional scripts use Unicode, which fits fewer characters
                    per message part, so keep them short.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#smsTemplateFaq8"
                  >
                    Do these templates work for RCS fallback and WhatsApp?
                  </button>
                </h2>
                <div
                  id="smsTemplateFaq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#smsTemplateFAQ"
                >
                  <div className="accordion-body">
                    SMS fallback for RCS still needs a registered DLT template.
                    WhatsApp templates are separate and approved by Meta, not
                    through DLT.
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

export default Nov28;
