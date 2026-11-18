import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { InquiryFormData } from '../types';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, RefreshCw } from 'lucide-react';
import { Reveal, DepthCard } from '../components/common/MotionPrimitives';

interface ContactPageProps {
  onOpenPrivacy: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    organization: '',
    email: '',
    serviceInterest: 'Custom Software Development',
    projectDescription: '',
    timeline: 'Within 1-3 Months',
    estimatedBudget: 'Under Discussion',
    agreeToPrivacy: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.organization.trim()) {
      errs.organization = 'Please provide your organization or municipality name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., name@domain.com).';
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe the system or operational challenge you are looking to solve.';
    } else if (formData.projectDescription.trim().length < 20) {
      errs.projectDescription = 'Please provide at least 20 characters describing the system requirements.';
    }

    if (!formData.agreeToPrivacy) {
      errs.agreeToPrivacy = 'You must acknowledge our institutional confidentiality and privacy terms.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      serviceInterest: 'Custom Software Development',
      projectDescription: '',
      timeline: 'Within 1-3 Months',
      estimatedBudget: 'Under Discussion',
      agreeToPrivacy: false,
    });
    setErrors({});
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.organization} — ${formData.serviceInterest}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Organization: ${formData.organization}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.serviceInterest}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Budget Range: ${formData.estimatedBudget}\n\n` +
      `Project Description:\n${formData.projectDescription}\n`
    );
    return `mailto:${COMPANY_INFO.primaryEmail}?subject=${subject}&body=${body}`;
  };

  const inputBaseClass =
    'w-full px-4 py-3 text-sm bg-[#F5F5F7]/75 dark:bg-[#111114] text-[#0E0E10] dark:text-[#F5F5F7] placeholder:text-[#868690] dark:placeholder:text-[#64646E] border rounded-xl transition-all focus:bg-[#FFFFFF] dark:focus:bg-[#161619] focus:outline-none focus:ring-2 focus:ring-[#0E0E10] dark:focus:ring-[#F5F5F7]';

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] py-18 relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 cosmic-grid opacity-55 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
              DIRECT ENGINEERING CONSULTATION
            </div>
            <h1 className="type-h1 text-[#0E0E10] dark:text-[#F5F5F7] mb-6 text-balance">
              Start a Project Discussion
            </h1>
            <p className="type-body text-[#585860] dark:text-[#9898A2] max-w-2xl">
              Have an operational challenge or an idea for a digital system? Tell us what you're trying to solve.
              Our engineering leads review all submissions directly and provide honest feasibility feedback.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Inquiry Form or Success State */}
          <Reveal className="lg:col-span-8">
            <DepthCard enableTilt={false} className="p-8 sm:p-10">
              {submittedData ? (
                <div className="space-y-6">
                  <div className="p-5 bg-[#EFEFF2] dark:bg-[#141417] border border-[var(--border-strong)] rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-base font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-1 font-mono">
                        Project Inquiry Received
                      </h2>
                      <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                        Thank you, <strong className="text-[#0E0E10] dark:text-white">{submittedData.fullName}</strong>. Your project brief has been logged for review by our engineering leads (Jhary Caturza & AJ Rienze). We aim to review requirements within 1 business day.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5F5F7]/75 dark:bg-[#111114] border border-[var(--border)] rounded-2xl space-y-4">
                    <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] pb-3 border-b border-[var(--border)]">
                      Submitted Brief Summary
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[#585860] dark:text-[#9898A2] block">Organization / LGU:</span>
                        <strong className="text-[#0E0E10] dark:text-[#F5F5F7]">{submittedData.organization}</strong>
                      </div>
                      <div>
                        <span className="text-[#585860] dark:text-[#9898A2] block">Contact Email:</span>
                        <strong className="text-[#0E0E10] dark:text-[#F5F5F7]">{submittedData.email}</strong>
                      </div>
                      <div>
                        <span className="text-[#585860] dark:text-[#9898A2] block">Service Domain:</span>
                        <strong className="text-[#0E0E10] dark:text-[#F5F5F7]">{submittedData.serviceInterest}</strong>
                      </div>
                      <div>
                        <span className="text-[#585860] dark:text-[#9898A2] block">Target Timeline:</span>
                        <strong className="text-[#0E0E10] dark:text-[#F5F5F7]">{submittedData.timeline}</strong>
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#585860] dark:text-[#9898A2] text-xs block mb-1.5">Operational Description:</span>
                      <p className="text-xs text-[#0E0E10] dark:text-[#E2E2E6] bg-[#FFFFFF] dark:bg-[#0D0D0F] p-4 rounded-xl border border-[var(--border)] whitespace-pre-wrap font-mono leading-[1.6]">
                        {submittedData.projectDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)]">
                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] hover:opacity-75 transition-opacity"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send copy directly via your email client</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="btn-frosted inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit another inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="type-h3 text-[#0E0E10] dark:text-[#F5F5F7] mb-1">
                      Tell us about the system you need
                    </h2>
                    <p className="text-xs text-[#585860] dark:text-[#9898A2]">
                      Fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Maria Santos"
                        className={`${inputBaseClass} ${
                          errors.fullName ? 'border-[#0E0E10] dark:border-white ring-1 ring-[#0E0E10] dark:ring-white' : 'border-[var(--border)]'
                        }`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 text-xs text-[#0E0E10] dark:text-[#F5F5F7] font-medium flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                      >
                        Organization / LGU / Business *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        placeholder="e.g. LGU Talibon / Central Office"
                        className={`${inputBaseClass} ${
                          errors.organization ? 'border-[#0E0E10] dark:border-white ring-1 ring-[#0E0E10] dark:ring-white' : 'border-[var(--border)]'
                        }`}
                        aria-invalid={!!errors.organization}
                        aria-describedby={errors.organization ? 'org-error' : undefined}
                      />
                      {errors.organization && (
                        <p id="org-error" className="mt-1.5 text-xs text-[#0E0E10] dark:text-[#F5F5F7] font-medium flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.organization}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                      >
                        Official / Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. contact@domain.gov.ph"
                        className={`${inputBaseClass} ${
                          errors.email ? 'border-[#0E0E10] dark:border-white ring-1 ring-[#0E0E10] dark:ring-white' : 'border-[var(--border)]'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-[#0E0E10] dark:text-[#F5F5F7] font-medium flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="serviceInterest"
                        className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                      >
                        Primary Service Domain
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceInterest: e.target.value })
                        }
                        className={`${inputBaseClass} border-[var(--border)]`}
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="IT Consulting & Feasibility Review">
                          IT Consulting & Feasibility Review
                        </option>
                        <option value="Other / Multi-Discipline System">
                          Other / Multi-Discipline System
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                      >
                        Target Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className={`${inputBaseClass} border-[var(--border)]`}
                      >
                        <option value="Immediate (Within 1 Month)">Immediate (Within 1 Month)</option>
                        <option value="Within 1-3 Months">Within 1-3 Months</option>
                        <option value="Within 3-6 Months">Within 3-6 Months</option>
                        <option value="Next Fiscal Budget Cycle">Next Fiscal Budget Cycle</option>
                        <option value="Exploratory / Discovery Stage">Exploratory / Discovery Stage</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="estimatedBudget"
                        className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                      >
                        Estimated Budget Range (Optional)
                      </label>
                      <select
                        id="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={(e) =>
                          setFormData({ ...formData, estimatedBudget: e.target.value })
                        }
                        className={`${inputBaseClass} border-[var(--border)]`}
                      >
                        <option value="Under Discussion">Under Discussion / To Be Determined</option>
                        <option value="Small Municipal / Dept Scope (< ₱150,000)">Small Departmental Scope (&lt; ₱150,000)</option>
                        <option value="Standard Information System (₱150,000 - ₱500,000)">Standard Information System (₱150k - ₱500k)</option>
                        <option value="Comprehensive Enterprise/GovTech (₱500,000+)">Comprehensive Enterprise/GovTech (₱500k+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2"
                    >
                      Project Description & Operational Problem *
                    </label>
                    <textarea
                      id="projectDescription"
                      rows={5}
                      value={formData.projectDescription}
                      onChange={(e) =>
                        setFormData({ ...formData, projectDescription: e.target.value })
                      }
                      placeholder="Describe your current workflow, what manual processes or records need improvement, and what specific features or outputs your organization requires..."
                      className={`${inputBaseClass} ${
                        errors.projectDescription ? 'border-[#0E0E10] dark:border-white ring-1 ring-[#0E0E10] dark:ring-white' : 'border-[var(--border)]'
                      }`}
                      aria-invalid={!!errors.projectDescription}
                      aria-describedby={errors.projectDescription ? 'desc-error' : undefined}
                    />
                    {errors.projectDescription && (
                      <p id="desc-error" className="mt-1.5 text-xs text-[#0E0E10] dark:text-[#F5F5F7] font-medium flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Privacy Agreement Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToPrivacy}
                        onChange={(e) =>
                          setFormData({ ...formData, agreeToPrivacy: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 rounded text-[#0E0E10] dark:text-white border-[var(--border-strong)] accent-[#0E0E10] dark:accent-white focus:ring-[#0E0E10] dark:focus:ring-white"
                      />
                      <span className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                        I agree that ALZA.Net IT Solutions may review the submitted project details solely for engineering feasibility evaluation. I understand ALZA respects{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacy}
                          className="text-[#0E0E10] dark:text-[#F5F5F7] underline underline-offset-4 hover:opacity-75 cursor-pointer"
                        >
                          institutional non-disclosure and privacy protocols
                        </button>
                        . *
                      </span>
                    </label>
                    {errors.agreeToPrivacy && (
                      <p className="mt-1.5 text-xs text-[#0E0E10] dark:text-[#F5F5F7] font-medium flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.agreeToPrivacy}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group btn-primary-depth w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white disabled:opacity-50 rounded-xl cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Validating Submission...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>

                    <span className="text-xs text-[#585860] dark:text-[#9898A2]">
                      Direct consultation · No marketing spam
                    </span>
                  </div>
                </form>
              )}
            </DepthCard>
          </Reveal>

          {/* Right Column: Direct Contact & Office Information */}
          <Reveal delay={0.12} className="lg:col-span-4 space-y-6">
            <DepthCard tiltStrength={2.5} className="p-6 sm:p-7">
              <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-5 pb-3 border-b border-[var(--border)]">
                Direct Contact Channels
              </h3>
              <div className="space-y-4 text-xs text-[#585860] dark:text-[#9898A2]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold block mb-0.5">Primary Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_INFO.primaryEmail}`}
                      className="text-[#0E0E10] dark:text-[#F5F5F7] underline underline-offset-4 hover:opacity-75"
                    >
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold block mb-0.5">Headquarters & Base</span>
                    <span>{COMPANY_INFO.location}</span>
                    <span className="text-[11px] block text-[#868690] dark:text-[#64646E] mt-0.5">
                      {COMPANY_INFO.region}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold block mb-0.5">Consultation Hours</span>
                    <span>Monday – Friday, 8:00 AM – 5:00 PM PHT</span>
                  </div>
                </div>
              </div>
            </DepthCard>

            <DepthCard tiltStrength={2.5} className="p-6 text-xs text-[#585860] dark:text-[#9898A2]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#0E0E10] dark:text-[#F5F5F7] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7]" />
                  <span>Our Consultation Guarantee</span>
                </div>
                <p className="leading-[1.65]">
                  We do not employ aggressive sales tactics or push unneeded software. If your operational challenge can be solved with a simpler procedure or an existing standard tool, we will tell you honestly.
                </p>
              </div>
            </DepthCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
