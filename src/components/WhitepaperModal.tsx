import type { FormEvent } from "react";
import { useState } from "react";
import { assetPath } from "../config/assets";

type WhitepaperModalProps = {
  onClose: () => void;
};

type WhitepaperFormValues = {
  fullName: string;
  email: string;
  jobTitle: string;
  company: string;
  phone: string;
};

type WhitepaperFormErrors = Partial<Record<keyof WhitepaperFormValues, string>>;

const initialValues: WhitepaperFormValues = {
  fullName: "",
  email: "",
  jobTitle: "",
  company: "",
  phone: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]+$/;

function WhitepaperModal({ onClose }: WhitepaperModalProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<WhitepaperFormErrors>({});

  const setFieldValue = (field: keyof WhitepaperFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: WhitepaperFormErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "This Field Required.";
    if (!values.email.trim()) {
      nextErrors.email = "This Field Required.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Enter Valid Email Address.";
    }
    if (!values.jobTitle.trim()) nextErrors.jobTitle = "This Field Required.";
    if (!values.company.trim()) nextErrors.company = "This Field Required.";
    if (!values.phone.trim()) {
      nextErrors.phone = "This Field Required.";
    } else if (!phonePattern.test(values.phone.trim())) {
      nextErrors.phone = "Enter Valid Phone Number.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    window.open(assetPath("invisiron-fortify-your-network-defence.pdf"), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="blog-download-modal" role="dialog" aria-modal="true" aria-labelledby="blog-download-title">
      <button className="blog-download-backdrop" type="button" aria-label="Close popup" onClick={onClose} />
      <div className="blog-download-dialog">
        <button className="blog-download-close" type="button" aria-label="Close popup" onClick={onClose}>
          ×
        </button>
        <h2 id="blog-download-title">
          <span className="blog-download-title-line">Fortify Your Existing Network</span>
          <span className="blog-download-title-line">with Proactive Cyber Defence</span>
        </h2>
        <p>Download Invisiron's exclusive Whitepaper</p>
        <form onSubmit={handleSubmit} noValidate>
          <input className={errors.fullName ? "has-error" : ""} type="text" placeholder="Full Name*" value={values.fullName} onChange={(event) => setFieldValue("fullName", event.target.value)} />
          {errors.fullName && <div className="whitepaper-field-error">{errors.fullName}</div>}
          <input className={errors.email ? "has-error" : ""} type="email" placeholder="Work Email*" value={values.email} onChange={(event) => setFieldValue("email", event.target.value)} />
          {errors.email && <div className="whitepaper-field-error">{errors.email}</div>}
          <input className={errors.jobTitle ? "has-error" : ""} type="text" placeholder="Job Title*" value={values.jobTitle} onChange={(event) => setFieldValue("jobTitle", event.target.value)} />
          {errors.jobTitle && <div className="whitepaper-field-error">{errors.jobTitle}</div>}
          <input className={errors.company ? "has-error" : ""} type="text" placeholder="Company Name*" value={values.company} onChange={(event) => setFieldValue("company", event.target.value)} />
          {errors.company && <div className="whitepaper-field-error">{errors.company}</div>}
          <input className={errors.phone ? "has-error" : ""} type="tel" placeholder="Work Phone Number*" value={values.phone} onChange={(event) => setFieldValue("phone", event.target.value)} />
          {errors.phone && <div className="whitepaper-field-error">{errors.phone}</div>}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export { WhitepaperModal };
