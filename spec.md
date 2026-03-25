# Aditattva Group Corporate Website

## Current State
New project — no existing pages or backend.

## Requested Changes (Diff)

### Add
- Full multi-page corporate website for Aditattva Technocrats Private Limited
- Pages: Home, About Us, Services (with sub-sections), Industries, Solutions/Case Studies, Why Choose Us, Careers, Contact
- Contact form that stores submissions in the backend
- Sticky navbar with mega menu for Services
- Stats section: 100+ Services, 15+ Industries, 50+ Partners
- Smooth scroll, subtle animations (fade-in on scroll)
- Responsive layout (mobile + desktop)

### Modify
N/A

### Remove
N/A

## Implementation Plan

### Backend
- `submitContact(name, email, phone, message, subject)` → stores contact form submissions
- `getContacts()` → admin retrieval of submissions

### Frontend Pages
1. **Home** — Hero with headline + CTA, stats (100+ Services, 15+ Industries, 50+ Partners), About snapshot, Services overview cards, Industries grid, Why Choose Us, Client success highlights, CTA banner
2. **About Us** — Company overview, Vision & Mission, Core values (Innovation, Integrity, Sustainability, Excellence), Leadership philosophy, Global delivery model
3. **Services** — Tabbed/sectioned layout for: Technology Services, Engineering Services, R&D & Innovation, Consulting & Strategy — each with sub-service cards
4. **Industries** — Grid cards: Healthcare, Telecom, FinTech, Energy & Utilities, Infrastructure, Manufacturing, Smart Cities
5. **Solutions** — Case study cards: Digital Transformation, AI-powered Solutions, Engineering Innovation, Smart Infrastructure
6. **Why Choose Us** — Feature highlights: Integrated Expertise, Global Delivery, Innovation-led, Sustainability, Quality & Certifications
7. **Careers** — Culture section, open positions list, growth opportunities
8. **Contact** — Address (Ranchi, Jharkhand), phone/email, contact form wired to backend, embedded map iframe

### Navigation
- Sticky navbar with logo + nav links
- Services link opens mega menu dropdown with 4 service categories and their sub-items
- Mobile hamburger menu

### Design
- Color palette: Dark Navy (#0A1628) primary, White, Gold accent (#C9A84C), Teal accent (#0D9488)
- Typography: Inter / system font
- Full-width hero with gradient overlay
- Smooth scroll between sections
- Fade-in animations on scroll (Intersection Observer)
- Positioning statement: "A next-generation integrated technology, engineering, and consulting firm delivering scalable, sustainable, and intelligent solutions globally."
