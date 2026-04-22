import Script from "next/script";
import { A2ZSMS_Service } from "../../../public/Schema/HomeSchema";
import { FAQ } from "../../../public/Schema/FaqSchema";
import { Breadcrumb } from "../../../public/Schema/BreadCrumb";
import { Organization } from "../../../public/Schema/Organization";
import { Website_Schema } from "../../../public/Schema/Website";
import { SoftwareApplication } from "../../../public/Schema/SoftwareApplication";

const SchemaMarkup = () => {
  return (
    <>
      <Script
        id="schema-a2zsms-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(A2ZSMS_Service) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Breadcrumb) }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Organization) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Website_Schema) }}
      />
      <Script
        id="schema-software-application"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SoftwareApplication) }}
      />
    </>
  );
};

export default SchemaMarkup;
