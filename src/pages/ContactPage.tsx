import { useRef, useState } from "react";
import { submitContact } from "../utils/contactSubmit";

const enquiryOptions = ["Sales Enquiry", "Technical Support", "Be an Invisiron Partner", "Others"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{7,}$/;

type MathCaptcha = {
  left: number;
  operator: "+" | "-" | "*" | "/";
  right: number;
  answer: number;
};

function createMathCaptcha(): MathCaptcha {
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)] as MathCaptcha["operator"];

  if (operator === "+") {
    const left = Math.floor(Math.random() * 13) + 3;
    const right = Math.floor(Math.random() * 8) + 2;
    return { left, operator, right, answer: left + right };
  }

  if (operator === "-") {
    const right = Math.floor(Math.random() * 8) + 2;
    const answer = Math.floor(Math.random() * 10) + 1;
    return { left: right + answer, operator, right, answer };
  }

  if (operator === "*") {
    const left = Math.floor(Math.random() * 7) + 2;
    const right = Math.floor(Math.random() * 6) + 2;
    return { left, operator, right, answer: left * right };
  }

  const right = Math.floor(Math.random() * 5) + 2;
  const answer = Math.floor(Math.random() * 9) + 1;
  return { left: right * answer, operator, right, answer };
}

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

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiry, setEnquiry] = useState("");
  const [captcha, setCaptcha] = useState<MathCaptcha>(() => createMathCaptcha());
  const enquiryButtonRef = useRef<HTMLButtonElement>(null);
  const captchaInputRef = useRef<HTMLInputElement>(null);

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
    <section className="contact-source-section">
      <div className="contact-source-grid">
        <div className="contact-source-info">
          <div className="contact-source-copy">
            <h2>Contact Us</h2>
            <p>
              150 Sims Drive
              <br />
              #06-00 Oneberry
              <br />
              Singapore 387381
            </p>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760974128509!2d103.8740187603766!3d1.319104704128842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e3c98a834b%3A0xdfdfe95dad48f6ed!2sOneberry%20Technologies%20Regional%20HQ%2C%20R%26D%2C%20%26%20Innovation%20Lab!5e0!3m2!1sen!2sin!4v1716446039327!5m2!1sen!2sin"
              title="Oneberry Technologies Regional HQ map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-source-form-wrap">
          <form
            noValidate
            className={`contact-source-form${status === "sent" ? " is-sent" : ""}`}
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const formData = new FormData(form);
              setStatus("sending");
              setError("");

              const nextErrors: Record<string, string> = {};
              const values = {
                name: String(formData.get("name") || "").trim(),
                email: String(formData.get("email") || "").trim(),
                phone: String(formData.get("phone") || "").trim(),
                company: String(formData.get("company") || "").trim(),
                message: String(formData.get("message") || "").trim(),
                captchaAnswer: String(formData.get("captchaAnswer") || "").trim(),
              };

              if (!values.name) nextErrors.name = "This field is required.";
              const emailError = getEmailError(values.email);
              const phoneError = getPhoneError(values.phone);
              if (emailError) nextErrors.email = emailError;
              if (phoneError) nextErrors.phone = phoneError;
              if (!values.company) nextErrors.company = "This field is required.";
              if (!enquiry) nextErrors.enquiry = "This field is required.";
              if (!values.message) nextErrors.message = "This field is required.";
              if (!values.captchaAnswer) {
                nextErrors.captchaAnswer = "This field is required.";
              } else if (Number(values.captchaAnswer) !== captcha.answer) {
                nextErrors.captchaAnswer = "Please enter the correct answer.";
              }

              if (Object.keys(nextErrors).length > 0) {
                setFieldErrors(nextErrors);
                setStatus("error");
                setError("");
                if (nextErrors.captchaAnswer) {
                  setCaptcha(createMathCaptcha());
                  if (captchaInputRef.current) captchaInputRef.current.value = "";
                }
                const firstField = Object.keys(nextErrors)[0];
                if (firstField === "enquiry") enquiryButtonRef.current?.focus();
                else if (firstField === "captchaAnswer") captchaInputRef.current?.focus();
                else form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
                return;
              }

              setFieldErrors({});

              try {
                await submitContact({
                  source: "Contact",
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  company: values.company,
                  enquiry,
                  message: values.message,
                });
                form.reset();
                setEnquiry("");
                setCaptcha(createMathCaptcha());
                setStatus("sent");
              } catch (submitError) {
                setError(submitError instanceof Error ? submitError.message : "Unable to send your message.");
                setStatus("error");
              }
            }}
          >
            {status === "sent" ? (
              <>
                <h2>Contact Invisiron</h2>
                <p>Drop us a message. We'd love to hear from you!</p>
                <div className="contact-thank-you">
                  <strong>Thanks for contacting us!</strong>
                  <span>We will be in touch with you shortly.</span>
                </div>
              </>
            ) : (
              <>
                <h2>Contact Invisiron</h2>
                <p>Drop us a message. We'd love to hear from you!</p>
                <input
                  required
                  name="name"
                  className={fieldErrors.name ? "is-invalid-field" : undefined}
                  placeholder="Full Name"
                  aria-label="Full Name"
                  aria-invalid={Boolean(fieldErrors.name)}
                  onChange={() => clearFieldError("name")}
                />
                {fieldErrors.name && <div className="field-error">This field is required.</div>}
                <div className="form-row">
                  <div className="field-wrap">
                    <input
                      required
                      name="email"
                      type="email"
                      className={fieldErrors.email ? "is-invalid-field" : undefined}
                      placeholder="Email"
                      aria-label="Email"
                      aria-invalid={Boolean(fieldErrors.email)}
                      onBlur={(event) => updateFieldError("email", getEmailError(event.currentTarget.value.trim()))}
                      onChange={(event) => updateFieldError("email", getEmailError(event.currentTarget.value.trim()))}
                    />
                    {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}
                  </div>
                  <div className="field-wrap">
                    <input
                      required
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className={fieldErrors.phone ? "is-invalid-field" : undefined}
                      placeholder="Phone"
                      aria-label="Phone"
                      aria-invalid={Boolean(fieldErrors.phone)}
                      onBlur={(event) => updateFieldError("phone", getPhoneError(event.currentTarget.value.trim()))}
                      onChange={(event) => updateFieldError("phone", getPhoneError(event.currentTarget.value.trim()))}
                    />
                    {fieldErrors.phone && <div className="field-error">{fieldErrors.phone}</div>}
                  </div>
                </div>
                <input
                  required
                  name="company"
                  className={fieldErrors.company ? "is-invalid-field" : undefined}
                  placeholder="Company"
                  aria-label="Company"
                  aria-invalid={Boolean(fieldErrors.company)}
                  onChange={() => clearFieldError("company")}
                />
                {fieldErrors.company && <div className="field-error">This field is required.</div>}
                <div
                  className={`contact-dropdown${isEnquiryOpen ? " is-open" : ""}${fieldErrors.enquiry ? " is-invalid" : ""}`}
                  onBlur={(event) => {
                    const nextFocus = event.relatedTarget;
                    if (!(nextFocus instanceof Node) || !event.currentTarget.contains(nextFocus)) {
                      setIsEnquiryOpen(false);
                    }
                  }}
                >
                  <input type="hidden" name="enquiry" value={enquiry} />
                  <button
                  type="button"
                  ref={enquiryButtonRef}
                    className="contact-dropdown-trigger"
                aria-haspopup="listbox"
                aria-expanded={isEnquiryOpen}
                aria-required="true"
                aria-invalid={Boolean(fieldErrors.enquiry)}
                onClick={() => setIsEnquiryOpen((open) => !open)}
              >
                    <span className={enquiry ? undefined : "is-placeholder"}>
                      {enquiry || "I am enquiring about"}
                    </span>
                  </button>
                  {isEnquiryOpen && (
                    <div className="contact-dropdown-menu" role="listbox" tabIndex={-1}>
                      {enquiryOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          role="option"
                          aria-selected={enquiry === option}
                          onClick={() => {
                            setEnquiry(option);
                            clearFieldError("enquiry");
                            setIsEnquiryOpen(false);
                          }}
                        >
                          <span>{option}</span>
                          {option === "Others" && <small>Press to select.</small>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {fieldErrors.enquiry && <div className="field-error">This field is required.</div>}
                <textarea
                  required
                  name="message"
                  className={fieldErrors.message ? "is-invalid-field" : undefined}
                  placeholder="Your message..."
                  rows={6}
                  aria-label="Your message"
                  aria-invalid={Boolean(fieldErrors.message)}
                  onChange={() => clearFieldError("message")}
                />
                {fieldErrors.message && <div className="field-error">This field is required.</div>}
                <div className="math-captcha">
                  <label htmlFor="contact-captcha-answer">
                    {captcha.left} {captcha.operator} {captcha.right} =
                  </label>
                  <input
                    required
                    ref={captchaInputRef}
                    id="contact-captcha-answer"
                    name="captchaAnswer"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="off"
                    className={fieldErrors.captchaAnswer ? "is-invalid-field" : undefined}
                    aria-label={`${captcha.left} ${captcha.operator} ${captcha.right}`}
                    aria-invalid={Boolean(fieldErrors.captchaAnswer)}
                    onChange={() => clearFieldError("captchaAnswer")}
                  />
                </div>
                {fieldErrors.captchaAnswer && <div className="field-error">{fieldErrors.captchaAnswer}</div>}
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
                {status === "error" && <div className="form-success form-error">{error}</div>}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export { ContactPage };
