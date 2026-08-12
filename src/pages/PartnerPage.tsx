import { assetPath } from "../config/assets";
import { useRef, useState } from "react";
import { submitContact } from "../utils/contactSubmit";

const whyReasons = [
  {
    icon: "common-criteria-certification-logo-300x300-1-1-100x100.png",
    text: "Our Cyber Defence platform is certified with the International Common Criteria Certification.",
  },
  {
    icon: "invisiron-atm-icon100x-100x100.png",
    text: "We have a proactive Cyber Defence platform with Auto Threat Mitigation.",
  },
  {
    icon: "invisiron-pp-icon_1100x-2-100x100.png",
    text: "Our solutions are plug-and-play which do not require any changes to existing IT infrastructure networks.",
  },
  {
    icon: "true-stealth-mode2.png",
    text: "Our stealth Cyber Defence technology is completely invisible to hackers when deployed.",
  },
  {
    icon: "invisiron-bandwidth-icon100x-100x100.png",
    text: "An in-line Cyber Defence platform that does not impact internet bandwidth performance.",
  },
];

const partnerTypeOptions = ["Distributor", "Reseller", "Collaborator", "Others"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{7,}$/;

function getEmailError(value: string) {
  if (!value) return "This field is required.";
  if (!emailPattern.test(value)) return "Please enter a valid email address.";
  return "";
}

function getPhoneError(value: string) {
  if (!value) return "This field is required.";
  if (!phonePattern.test(value)) return "Please enter a valid phone number.";
  return "";
}

function PartnerPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isPartnerTypeOpen, setIsPartnerTypeOpen] = useState(false);
  const [partnerType, setPartnerType] = useState("");
  const partnerTypeButtonRef = useRef<HTMLButtonElement>(null);

  const clearFieldError = (field: string) => {
    setFieldErrors((errors) => {
      if (!errors[field]) return errors;
      const nextErrors = { ...errors };
      delete nextErrors[field];
      return nextErrors;
    });
  };
  const updateFieldError = (field: string, message: string) => {
    setFieldErrors((errors) => {
      const nextErrors = { ...errors };
      if (message) nextErrors[field] = message;
      else delete nextErrors[field];
      return nextErrors;
    });
  };

  return (
    <div className="partner-page">
      <section className="partner-join-section">
        <div className="partner-join-grid">
          <div className="partner-copy">
            <h1>Join The Invisiron Partner Force</h1>
            <p>Our vision is to create a world safe from cyber-threats; envisioning a planetary future of a cyberspace that is fully secure.</p>
            <p>With over a million records of cyber threat intelligence feeds, our Invisiron Security Threat Analysis and Research Team (Invisiron STAR Team) has implemented rulesets to mitigate cyber-attacks and protect 100,000+ users worldwide, 24/7!</p>
            <p>In order to extend our services to protect customers around the globe, Invisiron works closely with valued partners like yourself, with a joint mission to deliver affordable enterprise-level Cyber-Security.</p>
          </div>
          <form
            noValidate
            className={`partner-form${status === "sent" ? " is-sent" : ""}`}
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const formData = new FormData(form);
              setStatus("sending");
              setError("");

              const nextErrors: Record<string, string> = {};
              const values = {
                firstName: String(formData.get("firstName") || "").trim(),
                lastName: String(formData.get("lastName") || "").trim(),
                company: String(formData.get("company") || "").trim(),
                position: String(formData.get("position") || "").trim(),
                email: String(formData.get("email") || "").trim(),
                phone: String(formData.get("phone") || "").trim(),
                country: String(formData.get("country") || "").trim(),
                message: String(formData.get("message") || "").trim(),
              };

              if (!values.firstName) nextErrors.firstName = "This field is required.";
              if (!values.lastName) nextErrors.lastName = "This field is required.";
              if (!values.company) nextErrors.company = "This field is required.";
              const emailError = getEmailError(values.email);
              const phoneError = getPhoneError(values.phone);
              if (emailError) nextErrors.email = emailError;
              if (phoneError) nextErrors.phone = phoneError;
              if (!partnerType) nextErrors.partnerType = "This field is required.";
              if (!values.message) nextErrors.message = "This field is required.";

              if (Object.keys(nextErrors).length > 0) {
                setFieldErrors(nextErrors);
                setStatus("error");
                setError("");
                const firstField = Object.keys(nextErrors)[0];
                if (firstField === "partnerType") partnerTypeButtonRef.current?.focus();
                else form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
                return;
              }

              setFieldErrors({});

              try {
                await submitContact({
                  source: "Partner",
                  name: [values.firstName, values.lastName].filter(Boolean).join(" "),
                  email: values.email,
                  phone: values.phone,
                  company: values.company,
                  position: values.position,
                  country: values.country,
                  partnerType,
                  message: values.message,
                });
                form.reset();
                setPartnerType("");
                setStatus("sent");
              } catch (submitError) {
                setError(submitError instanceof Error ? submitError.message : "Unable to send your message.");
                setStatus("error");
              }
            }}
          >
            {status === "sent" ? (
              <>
                <h2>Be an Invisiron Partner</h2>
                <p>Fill in your details below and we will be in touch!</p>
                <div className="contact-thank-you">
                  <strong>Thanks for contacting us!</strong>
                  <span>We will be in touch with you shortly.</span>
                </div>
              </>
            ) : (
              <>
                <h2>Be an Invisiron Partner</h2>
                <p>Fill in your details below and we will be in touch!</p>
                <div className="form-row">
                  <div className="field-wrap">
                    <input
                      required
                      name="firstName"
                      type="text"
                      className={fieldErrors.firstName ? "is-invalid-field" : undefined}
                      placeholder="First Name"
                      aria-invalid={Boolean(fieldErrors.firstName)}
                      onChange={() => clearFieldError("firstName")}
                    />
                    {fieldErrors.firstName && <div className="field-error">This field is required.</div>}
                  </div>
                  <div className="field-wrap">
                    <input
                      required
                      name="lastName"
                      type="text"
                      className={fieldErrors.lastName ? "is-invalid-field" : undefined}
                      placeholder="Last Name"
                      aria-invalid={Boolean(fieldErrors.lastName)}
                      onChange={() => clearFieldError("lastName")}
                    />
                    {fieldErrors.lastName && <div className="field-error">This field is required.</div>}
                  </div>
                </div>
                <input
                  required
                  name="company"
                  type="text"
                  className={fieldErrors.company ? "is-invalid-field" : undefined}
                  placeholder="Company Name"
                  aria-invalid={Boolean(fieldErrors.company)}
                  onChange={() => clearFieldError("company")}
                />
                {fieldErrors.company && <div className="field-error">This field is required.</div>}
                <input name="position" type="text" placeholder="Position (Job Title)" />
                <input
                  required
                  name="email"
                  type="email"
                  className={fieldErrors.email ? "is-invalid-field" : undefined}
                  placeholder="Email Address"
                  aria-invalid={Boolean(fieldErrors.email)}
                  onBlur={(event) => updateFieldError("email", getEmailError(event.currentTarget.value.trim()))}
                  onChange={(event) => updateFieldError("email", getEmailError(event.currentTarget.value.trim()))}
                />
                {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}
                <input
                  required
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={fieldErrors.phone ? "is-invalid-field" : undefined}
                  placeholder="Phone Number"
                  aria-invalid={Boolean(fieldErrors.phone)}
                  onBlur={(event) => updateFieldError("phone", getPhoneError(event.currentTarget.value.trim()))}
                  onChange={(event) => updateFieldError("phone", getPhoneError(event.currentTarget.value.trim()))}
                />
                {fieldErrors.phone && <div className="field-error">{fieldErrors.phone}</div>}
                <input name="country" type="text" placeholder="Country" />
                <div
                  className={`contact-dropdown partner-type-dropdown${isPartnerTypeOpen ? " is-open" : ""}${fieldErrors.partnerType ? " is-invalid" : ""}`}
                  onBlur={(event) => {
                    const nextFocus = event.relatedTarget;
                    if (!(nextFocus instanceof Node) || !event.currentTarget.contains(nextFocus)) {
                      setIsPartnerTypeOpen(false);
                    }
                  }}
                >
                  <input type="hidden" name="partnerType" value={partnerType} />
                  <button
                    type="button"
                    ref={partnerTypeButtonRef}
                    className="contact-dropdown-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={isPartnerTypeOpen}
                    aria-required="true"
                    aria-invalid={Boolean(fieldErrors.partnerType)}
                    onClick={() => setIsPartnerTypeOpen((open) => !open)}
                  >
                    <span className={partnerType ? undefined : "is-placeholder"}>{partnerType || "Partner Type"}</span>
                  </button>
                  {isPartnerTypeOpen && (
                    <div className="contact-dropdown-menu" role="listbox" tabIndex={-1}>
                      {partnerTypeOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          role="option"
                          aria-selected={partnerType === option}
                          onClick={() => {
                            setPartnerType(option);
                            clearFieldError("partnerType");
                            setIsPartnerTypeOpen(false);
                          }}
                        >
                          <span>{option}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {fieldErrors.partnerType && <div className="field-error">This field is required.</div>}
                <textarea
                  required
                  name="message"
                  className={fieldErrors.message ? "is-invalid-field" : undefined}
                  placeholder="Your Message"
                  rows={5}
                  aria-invalid={Boolean(fieldErrors.message)}
                  onChange={() => clearFieldError("message")}
                />
                {fieldErrors.message && <div className="field-error">This field is required.</div>}
                <button className="button brown large" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
                {status === "error" && <div className="form-success form-error">{error}</div>}
              </>
            )}
          </form>
        </div>
      </section>
      <section className="partner-why-section">
        <div className="container">
          <h2>Why Invisiron?</h2>
          <div className="partner-reasons">
            {whyReasons.map((reason) => (
              <article key={reason.icon}>
                <img src={assetPath(reason.icon)} alt="" />
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="partner-support-section" id="kg_join_now">
        <div className="container partner-support-content">
          <h2>Partner Support</h2>
          <p>As a partner, you will be part of our mailing list so you can receive the latest news from us. We are continuously working on improving our partner programme and we want you to be the first to know about the latest releases and updates!</p>
          <h3>Support from Invisiron as a Partner</h3>
          <ul>
            <li>Direct Access to the Invisiron Team for Marketing, Sales or Technical Support</li>
            <li>Onboarding &amp; Refresher Trainings</li>
            <li>Deal Protection through Project Registration</li>
            <li>Webinar Support</li>
            <li>Access to Marketing Assets &amp; Collaterals</li>
            <li>Joint Marketing &amp; Communication Initiatives</li>
            <li>Other Sales Resources/Tools/Whitepapers will be made available to you</li>
          </ul>
          <h2>Get Started</h2>
          <h3>We’ll be there every step of the way.</h3>
          <p>As a partner, we will provide you with continuous support throughout to not only help you win customers but ensure that your deployments run smoothly and successfully.</p>
          <p className="partner-support-cta-text">Be part of the Invisiron Partners Force. We look forward to have you onboard!</p>
          <button className="button brown partner-support-cta" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}

export { PartnerPage };
