# Gian Lorenzo U. Abaño

**Full-Stack Software Engineer** · PHP · TypeScript · Warehouse & Logistics Software

+63 992-830-7802 · [renz.abano16@gmail.com](mailto:renz.abano16@gmail.com) · [github.com/thegeekteen](https://github.com/thegeekteen) · [linkedin.com/in/gian-lorenzo-a](https://www.linkedin.com/in/gian-lorenzo-a-295a26bb/)

Portfolio: [thegeekteen.github.io](https://thegeekteen.github.io) · [Download resume (PDF)](public/resume/Gian-Lorenzo-Abano-Resume.pdf)

Full-stack developer building a multi-tenant warehouse management SaaS that warehouses across Denmark run on every day. Works in PHP 8, MySQL, TypeScript and Angular; a typical feature covers the backend, a database migration, the web UI and the handheld scanner app at once. Most of the work is carrier and ERP integrations, picking and stock workflows, and production issues reported from live warehouses.

## Professional Experience

### Software Developer — [Tiger Media A/S](https://tigermedia.dk)
*May 2023 – Present · Denmark (remote)*

- Built an advanced order search for the order listing: a Graylog-style query language with IDE-style autocomplete, a live syntax preview, saved and shareable searches, and lookups into item, order line and nested JSON fields.
- Designed the shared paperless-return flow, where the carrier issues a QR or drop-off code instead of a printed label, and used it to add paperless UPS returns through the Electronic Return Label API. Also added the NTG freight provider and new PostNord service codes to a label module with 68 carrier providers.
- Moving the platform's hard-coded autoprint settings into its Flow Builder rule engine, one setting per release, each shipped with a per-tenant data migration and parity tests so customers' printing stays the same.
- Added photo documentation during picking to the Ionic/Angular scanner app with byte-accurate upload progress, virtual scrolling for very large orders, and a guard against double-booking a shipping label on repeated taps.
- Maintain integrations with Shopify, Magento 2, Business Central, Uniconta, e-conomic, Dandomain, Rackbeat, C5 and Visma over REST, SOAP, XML and EDIFACT.
- Investigate bugs reported from live warehouses and fix them at the root cause. One example: picked stock stayed reserved after an order was closed by hand; I fixed the status change and wrote a repair script for the affected data.
- Added a CI check that fails the pipeline on missing translation keys, and a command-line tool that clones a production tenant into the local dev environment. Day to day: PHPStan level 6, PHPUnit, GitLab CI and code review on every merge request.

### Software Developer (Part-Time) — [Maryhill College, Inc.](https://maryhillcollege.edu.ph)
*December 2022 – September 2023 · Lucena City, Philippines*

- Containerized Maryhill CMS with **Docker** and established a Git-based deployment workflow, replacing ad hoc file uploads with a repeatable process.
- Built an **Admission System** and maintained the CMS in PHP, JavaScript, MySQL, HTML and CSS.
- Migrated infrastructure from shared hosting to a **VPS**, then owned server uptime, security and performance.
- Deployed an on-premises VPN server on Ubuntu, configured SSL on Windows Server (IIS), and introduced Redmine for task tracking.

## Technical Skills

| | |
| --- | --- |
| **Languages** | PHP 8.x, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3/LESS |
| **Backend** | Doctrine ORM & DBAL, Symfony components (DI, EventDispatcher, Console), Twig, PHPUnit, PHPStan, Composer, RabbitMQ, Redis |
| **Frontend & Mobile** | Angular, Ionic, Capacitor, RxJS, jQuery, Bootstrap, XSLT |
| **Databases** | MySQL / MariaDB, PostgreSQL, SQL Server; schema design, migrations, query optimization |
| **Integrations** | REST, SOAP, JSON, XML, EDIFACT, cURL, webhooks, third-party ERP / carrier / payment APIs |
| **Infrastructure** | Docker & Docker Compose, Linux (Ubuntu), Nginx/Apache, GitLab CI, AWS SDK, VPN & SSL administration |
| **Tooling** | Claude Code, Git, GitLab, VS Code, Chrome DevTools, Sentry/GlitchTip, Graylog, VictoriaLogs |

## Selected Earlier Projects

- **Payroll System** for S.B. Basbacio Construction.
- **School Cases System**: a VB.NET records system that Maryhill College, Lucena City adopted. I wrote it while still in high school.
- Delivered three separate thesis systems for Information Systems students at De La Salle University, Manila.
- Freelance web development, including an online trading platform.

## Education

| | | |
| --- | --- | --- |
| **College** | B.S. Information Systems, De La Salle – College of Saint Benilde | 2015 – 2018 (Undergraduate) |
| **High School** | Maryhill College, Inc. | 2011 – 2015 |

## Additional Information

- **Work style:** Working remotely from the Philippines with a team in Denmark. Most collaboration happens in writing: merge-request reviews, tickets and handover notes.
- **Domain:** Warehouse & logistics operations: inventory and stock control, order fulfilment and picking, returns/RMA, shipping labels and carrier booking, barcode and serial-number traceability.
- **Languages:** English (professional working proficiency), Filipino (native)
- **Profiles:** [github.com/thegeekteen](https://github.com/thegeekteen) · [stackoverflow.com/users/4901031](https://stackoverflow.com/users/4901031) · [thegeekteen.github.io](https://thegeekteen.github.io)

---

## About this repository

The source of my portfolio site, built with Nuxt 3 and Tailwind CSS and deployed to GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:3000
npm run deploy   # generate the static site and publish to GitHub Pages
```
