# ALZA.Net IT Solutions — Corporate Website

Official corporate website for **ALZA.Net IT Solutions**, a technology and software engineering consultancy based in Bohol, Philippines.

**Motto:** WE FIND. WE SOLVE. WE LIFT.  
**Leadership:**
- Jhayr Caturza — Co-Founder & Chief Executive Officer
- AJ Rienze — Co-Founder & Chief Technology Officer

---

## 1. Architectural & Engineering Highlights

- **Visual Language:** Balanced blend of high-end editorial technology design and modern light SaaS elegance.
- **Color System Tokens:**
  - Canvas: `#FAFAF8`
  - Main Surface: `#FFFFFF`
  - Primary Typography: `#17191D`
  - Secondary Typography: `#626875`
  - Borders: `#DCE0E6`
  - Corporate Accent: `#344F80`
  - Soft Tint Accent: `#EEF2F8`
- **Typography:** Plus Jakarta Sans for geometric brand hierarchy, paired with JetBrains Mono for technical specifications and schema invariants.
- **Top Bar Contract:** Strictly enforced 3-zone layout (1-element wordmark, 5-6 single-line navigation links, 1 primary action button).
- **Anti-Slop Discipline:**
  - Zero unverified client claims, fabricated statistics, or mock revenue counters.
  - Zero static pill envelopes on metadata; unboxed metadata with typographic separators (`·`).
  - No fake compiler banners, code-comment prefixes (`//`), or decorative pulsing dots.
  - Authentic technical schematic compositions for featured systems (TAGAD, TALGov, ALZA DevKit).
- **Performance & SEO:**
  - Complete Schema.org JSON-LD structured data for `ProfessionalService` and `Organization`.
  - Comprehensive OpenGraph and Twitter card metadata.
  - Client-side routing with browser hash history synchronization (`#services`, `#work`, `#approach`, `#about`, `#contact`).

---

## 2. Directory Structure

```
├── index.html                   # SEO metadata, OpenGraph, JSON-LD Schema & Web Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies & build scripts
├── src/
│   ├── main.tsx                 # React DOM root entry
│   ├── App.tsx                  # Main application orchestrator & routing state
│   ├── index.css                # Tailwind CSS v4 design tokens & glassmorphism
│   ├── types/
│   │   └── index.ts             # Strict TypeScript definitions
│   ├── data/
│   │   └── companyData.ts       # Verified company records, services, projects, leadership
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Accessible Top Bar Contract header
│   │   │   └── Footer.tsx       # Corporate footer with privacy policy trigger
│   │   ├── home/
│   │   │   ├── Hero.tsx         # Layered systems composition & value proposition
│   │   │   ├── ExpertiseStrip.tsx # Horizontal capability indicators
│   │   │   ├── WhatWeDo.tsx     # 4 primary service blocks
│   │   │   ├── SelectedWork.tsx # Verified project catalog (TAGAD, TALGov, DevKit)
│   │   │   ├── HowWeWork.tsx    # 5-stage engineering process timeline
│   │   │   ├── AboutSection.tsx # Company narrative & motto breakdown
│   │   │   ├── LeadershipSection.tsx # Text-led leadership composition
│   │   │   └── ClosingCTA.tsx   # Project discussion callout
│   │   └── modals/
│   │       ├── ProjectModal.tsx # Architectural inspection modal
│   │       ├── ServiceModal.tsx # Service scope inspection modal
│   │       └── PrivacyModal.tsx # Non-disclosure & Philippine RA 10173 policy
│   └── pages/
│       ├── ServicesPage.tsx     # Full capabilities, problems solved & engagement models
│       ├── WorkPage.tsx         # Catalog with filter and architectural invariants
│       ├── ApproachPage.tsx     # 5-phase delivery framework & QA safeguards
│       ├── AboutPage.tsx        # Mission, vision, philosophy, and regional presence
│       └── ContactPage.tsx      # Validated inquiry form, mailto generator & contact channels
```

---

## 3. Development & Build

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Run TypeScript lint verification
npm run lint

# Compile production bundle
npm run build
```

---

## 4. Verification Report

- [x] **Top Bar Contract Verified:** Exactly 3 zones with single-element brand mark, 5 single-line nav links, and 1 primary CTA.
- [x] **Zero-Pill Metadata Verified:** No static pill badges on metadata; unboxed text with `·` dividers used throughout.
- [x] **Verified Project Catalog:** TAGAD, TALGov, and ALZA DevKit represented strictly according to verified facts without fabricated contract values or inflated statistics.
- [x] **Accessible Form Validation:** Interactive inquiry form with comprehensive client validation, error messages, and submission summary.
- [x] **Mobile Responsiveness:** Viewports verified from 320px mobile through wide desktop monitors with zero horizontal overflow.
- [x] **TypeScript & Build:** `npm run lint` and `vite build` completed with zero errors.
