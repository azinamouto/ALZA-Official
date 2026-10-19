import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { InquiryFormData } from '../types';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

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

    setSubmittedData({ ...formData });
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

  const generateMailtoLink = (data: InquiryFormData) => {
    const subject = encodeURIComponent(`Project Inquiry: ${data.organization} — ${data.serviceInterest}`);
    const body = encodeURIComponent(
      `Name: ${data.fullName}\n` +
      `Organization: ${data.organization}\n` +
      `Email: ${data.email}\n` +
      `Service: ${data.serviceInterest}\n` +
      `Timeline: ${data.timeline}\n` +
      `Budget Range: ${data.estimatedBudget}\n\n` +
      `Project Description:\n${data.projectDescription}\n`
    );
    return `mailto:${COMPANY_INFO.primaryEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
              DIRECT ENGINEERING CONSULTATION
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-tight mb-6">
              Start a Project Discussion
            </h1>
            <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
              Have an operational challenge or an idea for a digital system? Tell us what you're trying to solve.
              We’ll prepare an email inquiry for you to review and send to our engineering leads.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Inquiry Form or Success State */}
          <div className="lg:col-span-8 bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs">
            {submittedData ? (
              <div className="space-y-6">
                <div className="p-4 bg-[#F2F4F7] dark:bg-[#1D2026] border border-[#17191D]/20 dark:border-white/20 rounded-lg flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-base font-bold text-[#17191D] dark:text-[#F7F7F8] mb-1 font-mono">
                      Your Inquiry Is Ready
                    </h2>
                    <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                      Thank you, <strong>{submittedData.fullName}</strong>. Your project brief is ready, but it has not been sent to ALZA yet. Open the email draft below and send it from your email app so our engineering leads can review it.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#FAFAF8] dark:bg-[#1A1D23] border border-[#E2E5EB] dark:border-[#242830] rounded-lg space-y-4">
                  <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider pb-2 border-b border-[#E2E5EB] dark:border-[#242830] font-mono">
                    Submitted Brief Summary
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#5F6573] dark:text-[#9CA3AF] block">Organization / LGU:</span>
                      <strong className="text-[#17191D] dark:text-white">{submittedData.organization}</strong>
                    </div>
                    <div>
                      <span className="text-[#5F6573] dark:text-[#9CA3AF] block">Contact Email:</span>
                      <strong className="text-[#17191D] dark:text-white">{submittedData.email}</strong>
                    </div>
                    <div>
                      <span className="text-[#5F6573] dark:text-[#9CA3AF] block">Service Domain:</span>
                      <strong className="text-[#17191D] dark:text-white">{submittedData.serviceInterest}</strong>
                    </div>
                    <div>
                      <span className="text-[#5F6573] dark:text-[#9CA3AF] block">Target Timeline:</span>
                      <strong className="text-[#17191D] dark:text-white">{submittedData.timeline}</strong>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#5F6573] dark:text-[#9CA3AF] text-xs block mb-1">Operational Description:</span>
                    <p className="text-xs text-[#17191D] dark:text-[#E5E7EB] bg-[#FFFFFF] dark:bg-[#141619] p-3 rounded border border-[#E2E5EB] dark:border-[#242830] whitespace-pre-wrap font-mono">
                      {submittedData.projectDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2E5EB] dark:border-[#242830]">
                  <a
                    href={generateMailtoLink(submittedData)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17191D] dark:text-white hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open and send inquiry in your email app</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#17191D] dark:text-white bg-[#FAFAF8] dark:bg-[#1A1D23] hover:bg-[#FFFFFF] dark:hover:bg-[#20242B] border border-[#E2E5EB] dark:border-[#242830] rounded-lg transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#17191D] dark:text-[#F7F7F8] mb-1">
                    Tell us about the system you need
                  </h2>
                  <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {/* Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
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
                      className={`w-full px-4 py-2.5 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white ${
                        errors.fullName ? 'border-red-500' : 'border-[#E2E5EB] dark:border-[#242830]'
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
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
                      className={`w-full px-4 py-2.5 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white ${
                        errors.organization ? 'border-red-500' : 'border-[#E2E5EB] dark:border-[#242830]'
                      }`}
                      aria-invalid={!!errors.organization}
                      aria-describedby={errors.organization ? 'org-error' : undefined}
                    />
                    {errors.organization && (
                      <p id="org-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
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
                      className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
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
                      className={`w-full px-4 py-2.5 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white ${
                        errors.email ? 'border-red-500' : 'border-[#E2E5EB] dark:border-[#242830]'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="serviceInterest"
                      className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
                    >
                      Primary Service Domain
                    </label>
                    <select
                      id="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceInterest: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border border-[#E2E5EB] dark:border-[#242830] rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white"
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
                      className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
                    >
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border border-[#E2E5EB] dark:border-[#242830] rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white"
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
                      className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
                    >
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      id="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={(e) =>
                        setFormData({ ...formData, estimatedBudget: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border border-[#E2E5EB] dark:border-[#242830] rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white"
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
                    className="block text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] uppercase tracking-wider mb-2 font-mono text-[11px]"
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
                    className={`w-full px-4 py-3 text-sm bg-[#FAFAF8] dark:bg-[#1A1D23] text-[#17191D] dark:text-[#F7F7F8] border rounded-lg transition-colors focus:bg-[#FFFFFF] dark:focus:bg-[#20242B] focus:outline-none focus:ring-2 focus:ring-[#17191D] dark:focus:ring-white ${
                      errors.projectDescription ? 'border-red-500' : 'border-[#E2E5EB] dark:border-[#242830]'
                    }`}
                    aria-invalid={!!errors.projectDescription}
                    aria-describedby={errors.projectDescription ? 'desc-error' : undefined}
                  />
                  {errors.projectDescription && (
                    <p id="desc-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
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
                      className="mt-1 w-4 h-4 rounded text-[#17191D] dark:text-white border-[#E2E5EB] dark:border-[#242830] focus:ring-[#17191D] dark:focus:ring-white"
                    />
                    <span className="text-xs text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                      I agree that ALZA.Net IT Solutions may review the submitted project details solely for engineering feasibility evaluation. I understand ALZA respects{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#17191D] dark:text-white underline hover:text-[#5F6573] cursor-pointer"
                      >
                        institutional non-disclosure and privacy protocols
                      </button>
                      . *
                    </span>
                  </label>
                  {errors.agreeToPrivacy && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.agreeToPrivacy}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-[#E2E5EB] dark:border-[#242830] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white dark:text-[#0C0D0F] bg-[#17191D] dark:bg-white hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] disabled:opacity-50 transition-colors rounded-lg shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Prepare Email Inquiry</span>
                  </button>

                  <span className="text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                    Direct consultation · No marketing spam
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Office Information */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-6 sm:p-7 shadow-xs">
              <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-[#E2E5EB] dark:border-[#242830] font-mono">
                Direct Contact Channels
              </h3>
              <div className="space-y-4 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#17191D] dark:text-white font-bold block mb-0.5">Primary Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_INFO.primaryEmail}`}
                      className="text-[#17191D] dark:text-white underline hover:text-[#5F6573]"
                    >
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#17191D] dark:text-white font-bold block mb-0.5">Headquarters & Base</span>
                    <span>{COMPANY_INFO.location}</span>
                    <span className="text-[11px] block text-[#8B92A0] mt-0.5">
                      {COMPANY_INFO.region}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#17191D] dark:text-white font-bold block mb-0.5">Consultation Hours</span>
                    <span>Monday – Friday, 8:00 AM – 5:00 PM PHT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAF8] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-6 text-xs text-[#5F6573] dark:text-[#9CA3AF] space-y-3">
              <div className="flex items-center gap-2 text-[#17191D] dark:text-white font-bold">
                <ShieldCheck className="w-4 h-4 text-[#17191D] dark:text-white" />
                <span>Our Consultation Guarantee</span>
              </div>
              <p className="leading-relaxed">
                We do not employ aggressive sales tactics or push unneeded software. If your operational challenge can be solved with a simpler procedure or an existing standard tool, we will tell you honestly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
