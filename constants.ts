import { Project, ExperienceItem, SkillGroup } from './types';
import buybox01 from './assets/projects/buybox/01.jpg';
import buybox02 from './assets/projects/buybox/02.jpg';
import buybox03 from './assets/projects/buybox/03.jpg';
import buybox04 from './assets/projects/buybox/04.jpg';
import buybox05 from './assets/projects/buybox/05.jpg';
import buybox06 from './assets/projects/buybox/06.jpg';
import propertyList01 from './assets/projects/property-list/01.jpg';
import propertyList02 from './assets/projects/property-list/02.jpg';
import propertyList03 from './assets/projects/property-list/03.jpg';
import propertyList04 from './assets/projects/property-list/04.jpg';
import propertyList05 from './assets/projects/property-list/05.jpg';
import propertyList06 from './assets/projects/property-list/06.jpg';
import metricsHubMockup from './assets/projects/metrics-hub/mockup.webp';
import metricsHub02 from './assets/projects/metrics-hub/metrics-02.webp';
import metricsHub03 from './assets/projects/metrics-hub/metrics-03.webp';
import metricsHub04 from './assets/projects/metrics-hub/metrics-04.webp';
import metricsHub05 from './assets/projects/metrics-hub/metrics-05.webp';
import metricsHub06 from './assets/projects/metrics-hub/metrics-06.webp';
import metricsHub07 from './assets/projects/metrics-hub/metrics-07.webp';
import metricsHub08 from './assets/projects/metrics-hub/metrics-08.webp';
import metricsHub09 from './assets/projects/metrics-hub/metrics-09.webp';
import dmAutomation01 from './assets/projects/dm-automation/01.jpg';
import dmAutomation02 from './assets/projects/dm-automation/02.jpg';
import dmAutomation03 from './assets/projects/dm-automation/03.jpg';
import dmAutomation04 from './assets/projects/dm-automation/04.jpg';
import dmAutomation05 from './assets/projects/dm-automation/05.jpg';
import smartFunnel01 from './assets/projects/smart-funnel/01.jpg';
import smartFunnel02 from './assets/projects/smart-funnel/02.jpg';
import smartFunnel03 from './assets/projects/smart-funnel/03.jpg';
import smartFunnel04 from './assets/projects/smart-funnel/04.jpg';
import nowApp01 from './assets/projects/now-app/01.jpg';
import nowApp02 from './assets/projects/now-app/02.jpg';
import nowApp03 from './assets/projects/now-app/03.jpg';
import nowApp04 from './assets/projects/now-app/04.jpg';
import nowApp05 from './assets/projects/now-app/05.jpg';
import nowApp06 from './assets/projects/now-app/06.jpg';
import roof000 from './assets/projects/8020roof/new images/000-cover.jpg';
import roofDashboard from './assets/projects/8020roof/new images/001.jpg';
import roofPropertyList from './assets/projects/8020roof/new images/002.jpg';
import roofPropertyView from './assets/projects/8020roof/new images/003.jpg';
import roofBuybox from './assets/projects/8020roof/new images/004.jpg';
import roofBuyboxEdit from './assets/projects/8020roof/new images/005.jpg';
import roofFulfillment from './assets/projects/8020roof/new images/006.jpg';
import roofDataHealth from './assets/projects/8020roof/new images/007.jpg';
import phoenixCover from './assets/projects/phoenix/cover.jpg';
import phoenixBrands from './assets/projects/phoenix/01-tokens-brands-panels.png';
import phoenixSwitcher from './assets/projects/phoenix/05-brand-switcher-iq-dark.png';
import phoenixDataTable from './assets/projects/phoenix/06-component-data-table-dm-light.png';
import phoenixRules from './assets/projects/phoenix/07-golden-rules-roof-dark.png';
import phoenixButton from './assets/projects/phoenix/10-button-iq-light.png';

export const PROJECTS: Project[] = [
  {
    id: "phoenix",
    title: "Phoenix",
    showcaseTitle: "One design system to rule them all.",
    showcasePreview: "8020IQ is growing quickly, and each new brand needs to feel connected without slowing down the team. Phoenix gives us one shared foundation for design and code, so a new brand takes nine token changes instead of a new interface.",
    subtitle: "One design system for every 8020 brand",
    category: "8020IQ",
    type: "Multi-brand design system · platform",
    role: "Design System Steward & Builder",
    duration: "~4 months",
    tools: ["Figma", "Claude Code", "Nuxt 4", "Vue 3", "TypeScript", "Tailwind CSS v4", "shadcn-vue", "Playwright", "Vitest", "GitHub Actions"],
    tags: ["Design System", "Multi-brand", "Vibecoding", "Platform", "Accessibility"],
    thumbnailGradient: "from-emerald-950 to-zinc-900",
    coverImage: { src: phoenixCover, alt: "Phoenix design system catalog on a laptop" },
    previewImagePosition: "62% center",
    team: {
      note: "Phoenix began as a joint initiative between design and frontend. Jhon and I met regularly, spoke with clients, and worked through the business needs behind each new brand. We used those conversations to build one system that design and frontend could shape together in code.",
      members: [
        { name: "Germán Alvarez", role: "Senior Product Designer · Design System Steward", contribution: "Design-system structure, token model, component experience, and quality rules" },
        { name: "Camilo Rico", role: "Product Director", contribution: "Product direction and the multi-brand business need" },
        { name: "Jhon Fredy Berrio", role: "Lead Front-end Developer", contribution: "Co-builder of the shared components, catalog, and frontend foundation" }
      ]
    },
    narrative: {
      introduction: {
        company: "8020IQ",
        industry: "PropTech SaaS",
        year: "2026",
        summary: "Phoenix is the design system behind 8020IQ, 8020REI, 8020ROOF, and 8020 Direct Mail. One component library, token canon, and living catalog serve every product. A brand is nine CSS declarations on a shared foundation."
      },
      role: {
        title: "Design System Steward & Builder",
        responsibilities: [
          "Co-led the initiative with Jhon Fredy Berrio, our Lead Frontend Developer. We worked from client and business needs to build one shared system in code.",
          "Set a multi-brand architecture: one shared canon and one nine-token accent layer per brand.",
          "Built the catalog in code so designers and frontend teams could work from the same components, tokens, and live specimens.",
          "Wrote accessibility and quality gates so unfiled, forked, or stale components cannot ship.",
          "Drove adoption by promoting proven app components into the catalog and retiring copies."
        ]
      },
      challenge: {
        summary: "The company had become a family of products, but each app had inherited copies of the same UI. Components drifted, dark mode varied by product, and brand colors were hardcoded per app.",
        painPoints: ["Four app-local component sets", "Brand accents hardcoded per app", "Inconsistent dark-mode coverage", "Fixes landing in one copy but not another"],
        constraints: ["Five apps already in production or staging", "Adoption needed to be incremental", "AI-assisted changes needed machine-checkable rules"],
        insights: ["A brand is nine declarations once everything else is shared", "A catalog should measure its own adoption", "Accessibility should be checked in source, not copied from a guide", "Promotion beats decree: prove it in an app, then share it"]
      },
      approach: ["Defined 124 shared tokens with paired light and dark values", "Isolated each brand to nine accent tokens in one manifest", "Rendered 82 components and shells live from the same package the apps import", "Added automated gates for registry, component, motion, and accessibility claims", "Generated AI-facing documentation so agents extend the system instead of forking it"],
      outcome: ["Four brands, two themes, and one shared component library", "64 duplicate component files retired from app trees", "1,001 component import sites measured by the catalog", "82 of 82 components and shells rendered live", "A new brand can be declared with nine tokens and one manifest entry"],
      chapters: [
        { label: "Act 01", title: "Growth was creating the same work four times", paragraphs: ["8020IQ was growing from one product into a family of brands. Each new product needed its own identity, but teams were rebuilding common interface parts separately. That made design and development slower, and every fix risked working differently from one product to another."], highlights: ["Four brands growing on separate foundations", "Common components maintained in several places", "Every new brand increased the cost of keeping products aligned"] },
        { label: "Act 02", title: "We first mapped what the products already shared", paragraphs: ["Before deciding what Phoenix should contain, we mapped the components, tokens, and patterns already used across the products. The inventory showed where teams were solving the same problem repeatedly and gave us a measurable starting point."], highlights: ["1,001 component imports mapped", "Remaining duplicates identified by name", "Color contrast measured from the real token files"] },
        { label: "Act 03", title: "One shared system, nine visual changes per brand", paragraphs: ["We kept common behavior, layout, states, and accessibility rules in one shared system. Each brand only changes nine accent values, so it can look distinct without creating another component library."], highlights: ["124 shared tokens", "Four brands and two themes", "Nine accent values define each brand"] },
        { label: "Act 04", title: "Design and frontend worked with the real components", paragraphs: ["Phoenix works as a live catalog. Designers and frontend developers can inspect, combine, and review the same coded components used by the products. Automated checks make missing components and accessibility problems visible before release."], highlights: ["82 live component examples", "Automated quality checks", "Documentation generated from the code"] },
        { label: "Act 05", title: "One change could now improve every product", paragraphs: ["Phoenix now supports four brands and two themes from one component source. The team retired 64 duplicate files, rendered all 82 catalog entries, and created a faster starting point for the next brand."], highlights: ["Nine values plus one manifest entry per brand", "Accessibility checked in both themes", "Shared fixes reach every connected product"] }
      ]
    },
    images: [
      { src: phoenixBrands, alt: "Four brands rendered from one canon" },
      { src: phoenixSwitcher, alt: "Phoenix brand switcher" },
      { src: phoenixDataTable, alt: "Phoenix live component page" },
      { src: phoenixRules, alt: "Phoenix design system rules" },
      { src: phoenixButton, alt: "Phoenix button component" }
    ]
  },
  // 8020REI (Priority 1)
  {
    id: "8020-roof",
    title: "8020ROOF",
    showcaseTitle: "New Vertical, New Methodology, New Technology",
    showcasePreview: "We turned a manual roofing-list operation into a self-serve platform, retiring the Excel handoff in six weeks. The work combined product design, shared components, and a practical AI-assisted build process.",
    subtitle: "Property intelligence and a marketing pipeline for the roofing vertical",
    category: "8020REI",
    type: "Multi-tenant B2B SaaS, zero-to-one build",
    role: "Senior Product Designer & Builder",
    duration: "~1.5 months active build",
    tools: [
      "Figma",
      "Claude Code",
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-vue",
      "TanStack Query",
      "Pinia",
      "FastAPI",
      "PostgreSQL (AWS Aurora)",
      "AWS Cognito",
      "AWS Amplify",
      "GitHub Actions"
    ],
    tags: ["Design System", "Multi-tenant SaaS", "Vibecoding", "Zero-to-one"],
    thumbnailGradient: "from-orange-950 to-zinc-900",
    coverImage: {
      src: roof000,
      alt: "8020 ROOF cover"
    },
    team: {
      note: "We were three builders without rigid lanes. Each person led where they were strongest, and all three contributed across frontend, backend, data, and QA with shared ownership of the platform.",
      members: [
        {
          name: "Camilo Rico",
          role: "Product Director",
          contribution: "Builder and data owner"
        },
        {
          name: "Nicolas Hernandez",
          role: "Lead QA",
          contribution: "Builder, tests, and security owner"
        },
        {
          name: "Germán Alvarez",
          role: "Senior Product Designer",
          contribution: "Builder and product UX / UI owner"
        }
      ]
    },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2026",
        summary: "A multi-client SaaS that turns a 100M+ row property database into ready-to-use roofing marketing lists. Operators can target properties, create a Buy Box, and run a five-stage pipeline for direct mail, cold calls, and SMS. It replaces weeks of spreadsheet work with a self-serve platform."
      },
      role: {
        title: "Senior Product Designer & Builder",
        responsibilities: [
          "Led product design end to end: property intelligence, the Buy Box, fulfillment, and the door-knocking beta.",
          "Adopted shadcn and customized it into the platform's component library, aligned to the brand and the roofing experience.",
          "Built UI directly in code with Claude Code, moving to Claude or Figma when a screen needed precision.",
          "Audited every feature with the team for design and UX consistency, and validated it with two pilot clients."
        ]
      },
      challenge: {
        summary: "8020REI had a working data business for investor list generation, but the roofing vertical still ran by hand. One person assembled, scored, and split Excel files for each client. The business needed to prove it could launch a second vertical without expanding the engineering team.",
        painPoints: [
          "Two pilot clients still receiving marketing lists as manual Excel exports",
          "Manual scoring and channel splitting on every monthly cycle",
          "No platform path for scaling the roofing vertical without new hires",
          "100M+ property records to expose without exposing the underlying complexity",
          "The team had to replace a service-delivery workflow with a real product"
        ],
        constraints: [
          "Three-person team with no dedicated frontend or backend engineer",
          "Multi-tenant county-level data isolation as a hard requirement",
          "Production-grade design system before any feature work began"
        ],
        insights: [
          "We treated AI as a teammate across design, frontend, backend, and QA, not just as autocomplete",
          "Roles and permissions mapped before the first screen was designed",
          "Component coherence enforced platform-wide and audited each release",
          "Removing manual steps created more value than adding features"
        ]
      },
      approach: [
        "Mapped the operator workflow into three jobs: find candidate properties, package them as a list, deliver them to a channel",
        "Scaled Kairo into 31 production components with semantic tokens, full dark mode, and a hard rule against raw HTML form elements",
        "Shipped 45+ in-platform documentation pages so every screen built after week one stayed coherent",
        "Built property intelligence first: a virtualized table over the 100M-row dataset with saved views, multi-filter search, county scoping, and async exports",
        "Layered the buybox builder, dashboard with real Aurora distress metrics, and the five-stage fulfillment pipeline",
        "Added a beta door-knocking module with traveling-salesman-optimized field routes",
        "Used Claude Code as a development teammate to ship UI flows, admin tooling, and reusable components"
      ],
      outcome: [
        "Two pilot clients live in production",
        "Excel-based monthly list delivery retired for the roofing vertical inside six weeks of active development",
        "Five-stage monthly fulfillment pipeline averaging about 10K direct-mail, 5K cold-call, and 2K SMS records",
        "Proved a three-person cross-functional team could ship production data software",
        "Playbook for the next vertical written along the way"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Roofing was served by hand",
          paragraphs: [
            "8020REI had a working data business for real-estate investors, but roofing was still a manual process. Two pilot clients received a monthly Excel export that someone assembled, scored, and split by hand. The goal was a product clients could use directly."
          ],
          highlights: [
            "Two pilot clients on manual Excel exports",
            "No path to scale roofing without new hires",
            "Replace the service workflow with a self-service product"
          ]
        },
        {
          label: "Act 02",
          title: "The company already had the data and scoring engine",
          paragraphs: [
            "8020REI already owned a 100M+ row property database and a scoring algorithm. The work was to point that asset at a new customer, roofers looking for roofs that need replacing, and to sell it by county instead of per lead."
          ],
          highlights: [
            "100M+ records, scoped by county FIPS",
            "A new pricing wedge: per county, not per lead",
            "Roles and permissions mapped before the first screen"
          ]
        },
        {
          label: "Act 03",
          title: "We adapted an existing design system",
          paragraphs: [
            "We started with shadcn and customized it for the brand. We also brought over the table and Buy Box patterns proven in 8020REI's Kairo system, so later screens could be composed from familiar parts rather than designed from scratch."
          ],
          highlights: [
            "Adopted shadcn, customized for Roof",
            "Reused the Kairo table and Buy Box patterns",
            "One system for every vertical"
          ]
        },
        {
          label: "Act 04",
          title: "One flow connected property search to marketing",
          paragraphs: [
            "We started with property intelligence: a fast table over the 100M-row dataset with saved views and exports. Next came the Buy Box, reduced to the rules that mattered. Then we built a five-stage monthly pipeline for direct mail, cold calls, and SMS, plus a door-knocking beta with optimized field routes."
          ],
          highlights: [
            "Virtualized property table with saved views and exports",
            "Buy Box builder with per-channel targets",
            "Five-stage fulfillment, multi-channel output"
          ]
        },
        {
          label: "Act 05",
          title: "Two clients live, the Excel handoff retired",
          paragraphs: [
            "The platform launched with two clients already using it, and the manual spreadsheet process was retired. It showed that a three-person cross-functional team could build production data software while documenting a playbook for the next vertical."
          ],
          highlights: [
            "Two pilot clients in production",
            "Spreadsheet handoff replaced by self-serve fulfillment",
            "Proof: a small team can ship production SaaS"
          ]
        }
      ]
    },
    images: [
      { src: roofDashboard, alt: "8020 Roof dashboard" },
      { src: roofPropertyList, alt: "8020 Roof property list" },
      { src: roofPropertyView, alt: "8020 Roof property details" },
      { src: roofBuybox, alt: "8020 Roof Buy Box" },
      { src: roofBuyboxEdit, alt: "8020 Roof Buy Box numeric filters" },
      { src: roofFulfillment, alt: "8020 Roof door-knocking routes" },
      { src: roofDataHealth, alt: "8020 Roof data health" }
    ]
  },
  {
    id: "8020-dm-campaign",
    title: "DM campaign",
    subtitle: "Automated direct mail, integrated into the platform",
    category: "8020REI",
    type: "SaaS feature, zero-to-one and ongoing PM ownership",
    role: "Senior Product Designer + Acting PM",
    duration: "3 months design · ongoing PM ownership",
    tools: ["Figma", "Figma Make", "Google Analytics", "Heap", "Clarity", "ChatGPT"],
    tags: ["Product Strategy", "Automation Flow", "Complex Logic", "PM Ownership"],
    thumbnailGradient: "from-emerald-900 to-zinc-900",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "DM Campaign brings direct mail into RapidResponse, turning manual outreach into an automated, data-driven part of the platform. Alongside the original product design, I now act as PM for the feature: I coordinate the team, manage provider relationships, track profitability, and work with the CCO to expand it into a new Direct DM vertical."
      },
      role: {
        title: "Senior Product Designer + Acting PM",
        responsibilities: [
          "Owned end-to-end product design for the automation system",
          "Partnered with Product, Engineering, and Customer Success on scope and feasibility",
          "Defined interaction flows, guardrails, and system feedback states",
          "Shaped onboarding, configuration, and performance visibility",
          "Currently acting as PM: coordinating team initiatives, managing provider relationships, tracking feature profitability and performance",
          "Partnering with the CCO on a new Direct DM business vertical"
        ]
      },
      challenge: {
        summary: "Discovery combined leadership requirements, stakeholder interviews, investor research, and benchmark analysis across direct mail and campaign platforms. The opportunity was to automate outreach triggered by data events and list delivery while preserving control and transparency.",
        painPoints: [
          "Investors relied on third-party direct mail providers",
          "Campaign setup was manual, slow, and fragmented",
          "Messaging was generic and disconnected from real-time data",
          "Lists were delivered, but outreach timing was left to the user",
          "No competing platform automated direct mail from live data events"
        ],
        constraints: [
          "Automation had to work across different list types and data events",
          "Campaign rules needed to be explicit, guided, and auditable",
          "Delivery status and cost needed to be visible at every step"
        ],
        insights: [
          "Manual direct mail workflows introduce costly delays",
          "Investors want automation with control and transparency",
          "Campaign setup must be guided and explicit",
          "Users need pricing, sequencing, and status clarity",
          "Performance data is essential to validate ROI and trust",
          "Onboarding is critical for adoption"
        ]
      },
      approach: [
        "Defined RapidResponse to trigger mail from real-time data updates",
        "Defined SmartDrop to trigger mail from list delivery events",
        "Built a guided campaign setup with predefined steps and guardrails",
        "Supported letters and postcards with clear configuration",
        "Added onboarding to explain automation concepts and constraints",
        "Provided visibility into campaign state, configuration, and progress",
        "Aligned audience selection and segmentation with platform data",
        "Enabled automated execution based on data events or list delivery",
        "Added campaign-level insights and exportable results",
        "Established a foundation for A/B testing and optimization in progress"
      ],
      outcome: [
        "12 clients adopted the product in the early release",
        "Teams reported faster outreach and less operational friction",
        "RapidResponse and SmartDrop were supported in one campaign experience",
        "The next phase was defined around active usage, customer satisfaction, and campaign optimization"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Direct mail still happened outside the product",
          paragraphs: [
            "Direct mail was already part of investor workflows, but execution happened outside the platform through fragmented vendors and manual coordination.",
            "The product opportunity was to turn direct mail into a native capability that could react to data events in real time, not hours or days later."
          ],
          highlights: [
            "Campaign setup was slow and fragmented",
            "Outreach timing depended on manual follow-up",
            "Messaging quality was disconnected from live data"
          ]
        },
        {
          label: "Act 02",
          title: "Research showed users needed control before automation",
          paragraphs: [
            "Research across leadership, stakeholders, and active investors showed that users wanted automation with clear control. They needed to understand what would happen, why it would happen, and what it would cost.",
            "That shifted the scope from a simple trigger engine to a guided system with explicit rules, visibility, and auditability."
          ],
          highlights: [
            "Automation needed transparent logic",
            "Pricing, sequencing, and status had to be visible",
            "Onboarding had to explain tradeoffs before activation"
          ]
        },
        {
          label: "Act 03",
          title: "Two campaign paths, one setup",
          paragraphs: [
            "I defined two core trigger models: one based on live data updates (RapidResponse) and one based on list delivery events (SmartDrop).",
            "This structure matched different investor workflows while keeping one campaign experience."
          ],
          highlights: [
            "Real-time trigger path for rapid reactions",
            "List-event trigger path for scheduled operations",
            "Guided setup with guardrails and explicit decisions"
          ]
        },
        {
          label: "Act 04",
          title: "Making campaign execution easier to understand",
          paragraphs: [
            "The interaction layer focused on reducing uncertainty: clear configuration states, campaign progress, and delivery feedback at each step.",
            "I also introduced onboarding and system language that translated complex automation rules into investor-facing decisions."
          ],
          highlights: [
            "Clear campaign state and progress visibility",
            "Configuration guardrails to prevent risky setup",
            "Integrated performance tracking and exports"
          ]
        },
        {
          label: "Act 05",
          title: "Twelve clients adopted the first release",
          paragraphs: [
            "Twelve clients adopted the early release, and teams reported faster outreach with less operational friction.",
            "The next phase will test whether the product reaches its active-usage and satisfaction targets while expanding campaign optimization."
          ],
          highlights: [
            "Observed: 12 clients in the early release",
            "Observed: faster outreach reported by teams",
            "Next measure: active usage, satisfaction, and retention"
          ]
        }
      ]
    },
    images: [
      {
        src: dmAutomation01,
        alt: "DM campaign screen 01"
      },
      {
        src: dmAutomation02,
        alt: "DM campaign screen 02"
      },
      {
        src: dmAutomation03,
        alt: "DM campaign screen 03"
      },
      {
        src: dmAutomation04,
        alt: "DM campaign screen 04"
      },
      {
        src: dmAutomation05,
        alt: "DM campaign screen 05"
      }
    ]
  },
  {
    id: "8020-buybox",
    title: "BuyBox editor",
    showcaseTitle: "Improving the secret sauce of the business.",
    showcasePreview: "I treated a dense rules engine as a decision workflow, bringing marketing needs, live feedback, and guardrails into the same place. The redesign targeted fewer configuration errors and less support work.",
    subtitle: "From rules engine to guided decisions",
    category: "8020REI",
    type: "Complex Interaction Design",
    role: "Product Designer",
    duration: "2 months",
    tools: ["Figma", "Figma Make", "Heap", "Clarity", "Google Analytics", "ChatGPT", "Zoom"],
    tags: ["Data Visualization", "Filtering Logic", "Legacy Redesign"],
    thumbnailGradient: "from-emerald-950 to-zinc-900",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "Redesigned the BuyBox editor after churn feedback and Customer Success escalations linked configuration problems to poor list quality and misaligned marketing output. The goal was to turn a dense rules engine into a guided decision system aligned with marketing capacity, market opportunity, and investor goals."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Research and stakeholder alignment",
          "Experience strategy and information architecture",
          "Wireframes, prototyping, and experimentation",
          "Design reviews with executive leadership",
          "Final UI aligned to the Kairo design system"
        ]
      },
      challenge: {
        summary: "Churn feedback and Customer Success escalations showed that the legacy editor assumed expertise instead of teaching investors how BuyBox decisions affected list quality and marketing output.",
        painPoints: [
          "No clear feedback when a BuyBox was misconfigured",
          "Limited visibility into how rules affected volume and opportunity",
          "Marketing Needs not reflected during BuyBox construction",
          "High cognitive load from dense tables and fragmented layouts",
          "Heavy reliance on Customer Success to explain system behavior",
          "Errors existed but were not surfaced to users or Customer Success"
        ],
        constraints: [
          "Backward compatibility with existing BuyBoxes",
          "Performance limitations with large datasets",
          "Executive visibility and approval at each major decision",
          "Strict timelines tied to retention and growth goals",
          "Dual audience of self-serve investors and CS-managed accounts",
          "WCAG 2.1 AA compliance for color contrast, focus states, and error communication"
        ],
        insights: [
          "Investors need guidance, not just flexibility",
          "Visibility into why matters more than raw control",
          "Previewing outcomes reduces trial-and-error behavior",
          "Defaults and guardrails outperform open-ended configuration",
          "Marketing capacity must shape acquisition criteria",
          "Errors should be explicit, actionable, and impossible to miss",
          "Accessibility determined whether the interaction was correct. Color alone could not carry meaning."
        ]
      },
      approach: [
        "Rebuilt the editor as modular, collapsible rule groups to reduce cognitive overload",
        "Integrated Marketing Needs directly into BuyBox construction",
        "Added live preview of estimated property volume and balance",
        "Surfaced clear alerts and warnings for misalignment or risky configurations",
        "Designed alerts and warnings against WCAG 2.1 AA: contrast ratios, explicit text, and icon plus color so meaning never depends on color alone",
        "Improved hierarchy and data prioritization to support decision-making",
        "Used a non-scroll, focused layout to reduce misclicks and friction",
        "Defined keyboard navigation and visible focus states across rule groups, alerts, and modals",
        "Rewrote language to match investor mental models",
        "Aligned the UI with the Kairo design system for consistency and scalability"
      ],
      outcome: [
        "A complete redesign and measurable release criteria were defined",
        "The new direction preserved existing BuyBox configurations",
        "Targets were set for 20% faster setup, 80% fewer configuration errors, and 50% fewer support tickets",
        "Post-release results are still needed to validate those targets"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Configuration problems were creating churn risk",
          paragraphs: [
            "The BuyBox editor was where investors defined their acquisition strategy, but it behaved like an expert-only rules engine.",
            "When investors configured it incorrectly, list quality dropped, marketing output misaligned, and Customer Success had to intervene."
          ],
          highlights: [
            "Misconfiguration created expensive downstream effects",
            "Users lacked clear feedback on rule impact",
            "Support dependency increased with account complexity"
          ]
        },
        {
          label: "Act 02",
          title: "Churn feedback showed where users got lost",
          paragraphs: [
            "Churn feedback and CS escalations showed a repeating pattern: users were asked to manage complexity without enough guidance.",
            "Discovery clarified that investors needed interpretable outcomes, not more raw flexibility."
          ],
          highlights: [
            "Dense layouts increased cognitive load",
            "Marketing needs were disconnected from configuration",
            "Errors were hard to detect before lists were generated"
          ]
        },
        {
          label: "Act 03",
          title: "We reorganized the rules around the investor's decision",
          paragraphs: [
            "I reframed the product from a configuration table into a guided decision system that balances market opportunity, marketing capacity, and investor goals.",
            "This meant structuring the experience around comprehension first, then control."
          ],
          highlights: [
            "Modular rule groups and stronger hierarchy",
            "Marketing Needs integrated into setup flow",
            "Live previews to reduce trial-and-error behavior"
          ]
        },
        {
          label: "Act 04",
          title: "Warnings appeared before expensive mistakes",
          paragraphs: [
            "The final interface made risky conditions visible through alerts, warnings, and clearer system language mapped to investor mental models.",
            "I also used a focused, non-scroll layout to reduce misclicks and maintain context while editing complex criteria."
          ],
          highlights: [
            "Warnings and alerts for misalignment, designed against WCAG 2.1 AA contrast and meaning-without-color rules",
            "Improved information hierarchy and readability",
            "Keyboard-navigable rule groups with visible focus states",
            "Kairo-aligned UI for long-term consistency"
          ]
        },
        {
          label: "Act 05",
          title: "We defined the release targets",
          paragraphs: [
            "The redesign was planned around measurable retention outcomes: faster valid setup, fewer errors, and less support burden.",
            "The intended benefit is clearer decision-making for investors and fewer explanations from Customer Success. Post-release measurement is still required."
          ],
          highlights: [
            "Target: 20% faster valid BuyBox setup",
            "Target: 80% fewer configuration errors",
            "Target: 50% fewer BuyBox-related support tickets"
          ]
        }
      ]
    },
    images: [
      {
        src: buybox01,
        alt: "BuyBox editor screen 01"
      },
      {
        src: buybox02,
        alt: "BuyBox editor screen 02"
      },
      {
        src: buybox03,
        alt: "BuyBox editor screen 03"
      },
      {
        src: buybox04,
        alt: "BuyBox editor screen 04"
      },
      {
        src: buybox05,
        alt: "BuyBox editor screen 05"
      },
      {
        src: buybox06,
        alt: "BuyBox editor screen 06"
      }
    ]
  },
  {
    id: "8020-property-list",
    title: "Property view",
    showcaseTitle: "Investors were leaving the product to make a decision.",
    showcasePreview: "Investors were leaving the platform to validate opportunities. I reorganized the list and detail view around the signals they needed, increasing property-related usage by 50%.",
    subtitle: "From data exporter to decision environment",
    category: "8020REI",
    type: "Workflow Optimization",
    role: "Senior Product Designer",
    duration: "2 Months",
    tools: ["Figma", "Figma Make", "Heap", "Clarity", "Google Analytics", "ChatGPT", "GPT"],
    tags: ["Information Density", "Efficiency", "Data Tables"],
    thumbnailGradient: "from-zinc-800 to-zinc-950",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "Reworked the property list and property view so investors could evaluate opportunities without switching to external tools. The new experience turns a data exporter into a decision-making workspace."
      },
      role: {
        title: "Senior Product Designer",
        responsibilities: [
          "Research planning and execution",
          "Stakeholder alignment across Product, Data, CS, and Engineering",
          "Benchmark analysis and competitive research",
          "Information architecture and interaction design",
          "Wireframes, prototyping, and iteration",
          "Final UI aligned to the Kairo design system"
        ]
      },
      challenge: {
        summary: "The property list and property view limited property understanding and led investors to use external platforms for key decisions.",
        painPoints: [
          "Investors used the property list mainly to copy addresses and consult external platforms",
          "The property view lacked critical data investors expected to see",
          "Key signals were hard to identify quickly",
          "Navigation and hierarchy created unnecessary cognitive load",
          "Filters and views were powerful but difficult to manage",
          "Missed clicks and friction were common during property exploration"
        ],
        constraints: [
          "Ongoing framework migration shaped the redesign scope",
          "Primary, high-traffic surface for property intelligence"
        ],
        insights: [
          "Investors need to quickly assess whether a property is an opportunity or not",
          "Scores and distresses are among the strongest decision drivers",
          "Historical trends build confidence",
          "Property data needed a clear sequence that supported the decision",
          "Editing property attributes should be fast and low-friction",
          "Filters and views are central to daily workflows"
        ]
      },
      approach: [
        "Used the property view to explain the opportunity in a clear sequence",
        "Treated the property list as a flexible exploration surface",
        "Surfaced core property signals first",
        "Visualized historical health through score and value trends",
        "Made distresses explicit and editable",
        "Connected properties to BuyBoxes and rankings",
        "Structured information into clear sections",
        "Rewrote definitions to ensure clarity for all user profiles",
        "Optimized layout and hierarchy to reduce cognitive load and misclicks",
        "Migrated the UI to the Kairo design system",
        "Replaced select-based views with a tab-based view system",
        "Made columns configurable with strong defaults",
        "Introduced a card view to reduce per-item cognitive load",
        "Expanded and restructured the filters system",
        "Added smart search to quickly locate properties",
        "Improved bulk actions and data export flows"
      ],
      outcome: [
        "Increased platform usage related to properties by 50%",
        "Achieved over 70% positive feedback in post-interaction CSAT surveys",
        "Reduced bugs, claims, and reported issues by approximately 80%",
        "Increased engagement with views and filters in nearly 60% of sessions",
        "The new information hierarchy kept score, distress, history, and BuyBox fit close to the decision",
        "Further research is needed to understand whether deeper product use improved investment decisions"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Investors left the product to evaluate properties",
          paragraphs: [
            "The property list and property view were high-traffic surfaces, but investors were leaving the platform to validate opportunities in external tools.",
            "That behavior made it clear the product was acting as a data exporter instead of a decision environment."
          ],
          highlights: [
            "Users copied addresses to external platforms",
            "Critical property signals were hard to interpret",
            "Navigation and hierarchy added cognitive friction"
          ]
        },
        {
          label: "Act 02",
          title: "Research defined the information that mattered",
          paragraphs: [
            "Research showed investors needed fast confidence signals: score, distress context, historical direction, and relevance to active buying criteria.",
            "The data was available, but the interface did not explain how it mattered to the decision."
          ],
          highlights: [
            "Opportunity assessment had to happen in seconds",
            "Historical trends increased trust in decisions",
            "Filters and views were central daily behaviors"
          ]
        },
        {
          label: "Act 03",
          title: "The list and detail view had different jobs",
          paragraphs: [
            "I treated the property view as a guided narrative and the list as an exploration surface, ensuring each served a distinct decision phase.",
            "This split reduced context switching and gave users a clearer progression from scanning to evaluation to action."
          ],
          highlights: [
            "Signal-first layout and stronger section hierarchy",
            "Explicit distress and editable attributes",
            "Connection to BuyBoxes and ranking context"
          ]
        },
        {
          label: "Act 04",
          title: "Views and filters became easier to manage",
          paragraphs: [
            "The redesign replaced rigid view controls with tab-based views, configurable columns, and a card view for lower per-item cognitive load.",
            "I also expanded filters, improved search, and streamlined bulk actions to support higher-throughput workflows."
          ],
          highlights: [
            "Tab-based view system",
            "Configurable columns with strong defaults",
            "Expanded filters, smart search, and better exports"
          ]
        },
        {
          label: "Act 05",
          title: "Property usage increased by 50%",
          paragraphs: [
            "Usage increased by 50%, post-interaction feedback was more than 70% positive, and reported issues fell by about 80%.",
            "The next question is whether this deeper use also improves investment decisions."
          ],
          highlights: [
            "50% increase in property-related usage",
            "70%+ positive CSAT on post-interaction surveys",
            "Around 80% reduction in bugs and reported issues"
          ]
        }
      ]
    },
    images: [
      {
        src: propertyList01,
        alt: "Property view screen 01"
      },
      {
        src: propertyList02,
        alt: "Property view screen 02"
      },
      {
        src: propertyList03,
        alt: "Property view screen 03"
      },
      {
        src: propertyList04,
        alt: "Property view screen 04"
      },
      {
        src: propertyList05,
        alt: "Property view screen 05"
      },
      {
        src: propertyList06,
        alt: "Property view screen 06"
      }
    ]
  },
  {
    id: "8020-metrics-hub",
    title: "Metrics Hub",
    showcaseTitle: "I connected six data sources. It found lost revenue.",
    showcasePreview: "I connected six disconnected sources into one shared workspace. It exposed a mail-provider conflict that had stopped client letters, making the fix visible to everyone and helping recover revenue.",
    subtitle: "Turning fragmented operational data into trusted decisions",
    category: "8020REI",
    type: "Unified Analytics Platform",
    role: "Senior Product Designer & Builder",
    duration: "2 months (ongoing)",
    tools: [
      "Figma",
      "Claude Code",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "BigQuery",
      "AWS Aurora",
      "Firebase",
      "Google Drive API",
      "Asana API",
      "Slack Web API",
      "Google Cloud Run",
      "GitHub Actions"
    ],
    tags: ["Data Unification", "Business Decisions", "Accessible Intelligence"],
    thumbnailGradient: "from-cyan-950 to-zinc-950",
    previewImageIndex: 0,
    previewImagePosition: "left center",
    caseStudySnapshot: {
      businessProblem: "Business-critical data was distributed across six systems, leaving Product, Customer Success, and Operations to make decisions with partial evidence.",
      discoveryAndConstraints: "I mapped source ownership, access risks, costs, and the business questions behind each metric before defining the information architecture. The platform had to use existing infrastructure and work for non-technical teams.",
      keyDesignDecision: "Create a role-aware, widget-based workspace with a three-level navigation model and reusable metric patterns, so analytical depth did not come at the cost of comprehension.",
      observedImpact: "Within the first month, the connected view revealed a mail-provider status conflict that was blocking client letters. Resolving it restored mail volume and recovered revenue. A client-requested API built on the platform reached 3x adoption."
    },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2026",
        summary: "I led the 0-to-1 creation of an internal analytics platform that turns data from six disconnected sources into a shared operational workspace for non-technical teams."
      },
      role: {
        title: "Senior Product Designer & Builder",
        responsibilities: [
          "Identified the organizational need and led the initiative from concept to production",
          "Mapped data ownership, access constraints, and business questions across teams",
          "Designed the full information architecture, navigation, and widget workspace",
          "Built frontend and backend layers for multi-source data exploration and monitoring",
          "Defined the Kairo design system and contribution workflows with automated quality gates"
        ]
      },
      challenge: {
        summary: "Business-critical metrics lived in disconnected tools, so teams made product, campaign, and customer decisions with partial evidence.",
        painPoints: [
          "Data was spread across six systems with different permissions and query models",
          "Customer Success lacked reliable usage visibility for client guidance",
          "Product teams debated assumptions instead of shared evidence",
          "Accessing metrics required technical support and delayed decisions",
          "Feature-level performance was hard to compare across workflows"
        ],
        constraints: [
          "Unify heterogeneous data without creating unsafe or expensive query patterns",
          "Design for non-technical teams while preserving analytical depth",
          "Ship using existing infrastructure and subscriptions only"
        ],
        insights: [
          "The main problem was comprehension and accessibility, not data availability",
          "Teams needed a consistent visual language across every metric surface",
          "Alerting and proactive monitoring could unlock immediate business impact",
          "Widget-level flexibility had to coexist with strong defaults and governance"
        ]
      },
      approach: [
        "Mapped data domains, source ownership, and high-value business questions",
        "Designed a three-level IA model for sections, sub-sections, and detail tabs",
        "Built a widget-based workspace with reusable chart, table, and scorecard patterns",
        "Connected six data sources into a single product surface with role-aware access",
        "Created Kairo design system foundations with reusable components and tokens",
        "Implemented automated quality checks to enforce design and implementation consistency",
        "Added monitoring views and alert flows for campaign and API health",
        "Enabled exports and operational views for cross-functional decision loops"
      ],
      outcome: [
        "Connected six systems in one workspace using existing infrastructure",
        "Created 91 widgets across 11 business areas",
        "Exposed a mail-provider conflict that had stopped client letters. Fixing it restored mail volume and recovered revenue",
        "Helped identify five Properties API blockers. After they were fixed, API activity increased 3x",
        "Adoption by nontechnical teams and reduction in ad hoc requests still need long-term measurement"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Six systems separated the business story",
          paragraphs: [
            "At 8020REI, data existed everywhere but understanding existed nowhere. Analytics, product metrics, campaign data, qualitative notes, and task execution all lived in separate systems.",
            "That fragmentation forced teams to depend on assumptions and ad hoc support instead of one place where they could review the evidence."
          ],
          highlights: [
            "No single place to review evidence across teams",
            "Heavy dependency on technical support for basic insights",
            "Feature and campaign priorities were hard to validate"
          ]
        },
        {
          label: "Act 02",
          title: "We mapped each question to its source and owner",
          paragraphs: [
            "I mapped every data source, who owned it, what it answered, and where access or cost constraints could break reliability.",
            "This technical mapping was paired with business discovery so each metric screen reflected real investor and operator workflows, not raw data dumps."
          ],
          highlights: [
            "Six sources aligned to one business model",
            "Stakeholder alignment on access and governance",
            "Business questions defined before interface decisions"
          ]
        },
        {
          label: "Act 03",
          title: "Consistent patterns made 91 widgets easier to read",
          paragraphs: [
            "I designed a three-level navigation model and a widget workspace that makes complex analytics scannable for non-technical users in seconds.",
            "Across 11 business areas, the interface uses one consistent visual and interaction system so teams can move between domains without relearning patterns."
          ],
          highlights: [
            "Three-level IA for depth without disorientation",
            "Reusable widgets across analytics, operations, and product domains",
            "Kairo design system foundations for speed and consistency"
          ]
        },
        {
          label: "Act 04",
          title: "I moved from design into the full build",
          paragraphs: [
            "The initiative required hands-on execution across frontend, backend, integrations, deployment, and quality automation.",
            "I built the platform to be extensible, with contribution workflows and automated checks so future collaborators can ship confidently within the same product standards."
          ],
          highlights: [
            "End-to-end build from UX architecture to cloud deployment",
            "Multi-source integrations with operational alerting",
            "Automated quality gates and scalable contribution model"
          ]
        },
        {
          label: "Act 05",
          title: "Connected data exposed hidden problems",
          paragraphs: [
            "Within the first month, Metrics Hub exposed a mail-provider status conflict that had quietly stopped client letters. The problem was invisible until the data was connected. Resolving it realigned us with the provider, restored mail volume, and recovered revenue for the feature.",
            "The first results showed the value of connecting the data. Longer-term measurement is still needed to understand adoption, response time, and the reduction in manual data requests."
          ],
          highlights: [
            "Provider status conflict fixed, restoring client mailings and recovering revenue",
            "3x API adoption after resolving critical blockers",
            "Zero additional software spend for a company-wide intelligence layer"
          ]
        }
      ]
    },
    images: [
      { src: metricsHubMockup, alt: "Metrics Hub dashboard overview" },
      { src: metricsHub02, alt: "Metrics Hub screen 02" },
      { src: metricsHub03, alt: "Metrics Hub screen 03" },
      { src: metricsHub04, alt: "Metrics Hub screen 04" },
      { src: metricsHub05, alt: "Metrics Hub screen 05" },
      { src: metricsHub06, alt: "Metrics Hub screen 06" },
      { src: metricsHub07, alt: "Metrics Hub screen 07" },
      { src: metricsHub08, alt: "Metrics Hub screen 08" },
      { src: metricsHub09, alt: "Metrics Hub screen 09" }
    ]
  },
  // Habi (Priority 2)
  {
    id: "habi-funnels",
    title: "Smart funnel",
    showcaseTitle: "Optimizing the funnel experience.",
    showcasePreview: "I used behavior data to find where people lost momentum, then simplified the mobile journey from 11 screens to 7. Qualified lead conversion increased by 30%.",
    subtitle: "Mobile-first acquisition funnel",
    category: "Habi",
    type: "Growth Design",
    role: "Product Designer",
    duration: "2 months",
    tools: ["Figma", "Google Analytics", "ChatGPT", "Hotjar", "Clarity"],
    tags: ["Conversion Rate", "A/B Testing", "Mobile First"],
    thumbnailGradient: "from-purple-950 to-zinc-900",
    narrative: {
      introduction: {
        company: "TuHabi",
        industry: "PropTech",
        year: "2024",
        summary: "Rebuilt the mobile acquisition funnel for the Mexico product to increase qualified lead conversion. I led the work remotely from Colombia for a product operated in Mexico."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Led discovery, IA, and interaction design for the acquisition flow",
          "Partnered with marketing to align lead quality requirements",
          "Designed, tested, and iterated funnel variants with analytics input"
        ]
      },
      challenge: {
        summary: "The registration funnel was long and friction-heavy, leading to mid-flow drop-offs and low trust on mobile.",
        painPoints: [
          "11-screen registration flow increased abandonment",
          "Mobile users faced slow, demanding interactions",
          "Perceived over-collection of data reduced trust",
          "Early steps provided limited perceived value"
        ],
        constraints: [
          "Needed to reduce steps without lowering data quality",
          "Majority mobile traffic required a mobile-first approach",
          "Remote execution across Mexico and Colombia teams"
        ],
        insights: [
          "Drop-off spikes clustered around long form segments",
          "Some inputs could be inferred from early signals",
          "Early value framing improved completion intent",
          "Funnel sequence impacted perceived effort"
        ]
      },
      approach: [
        "Reduced the funnel from 11 screens to 7",
        "Used AI-assisted prediction to prefill or infer data from early inputs",
        "Reordered decision points to deliver value earlier",
        "Tested multiple flow variants through A/B testing",
        "Applied a mobile-first layout, hierarchy, and interaction model",
        "Introduced progressive disclosure to replace long forms",
        "Added location-based recommendations and internal property suggestions"
      ],
      outcome: [
        "Reduced the flow from 11 screens to 7",
        "Qualified conversion increased by 30%",
        "Completion time, mobile completion, and long-term lead quality still require documented follow-up"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Eleven screens asked for too much too early",
          paragraphs: [
            "The Mexico acquisition flow asked users to complete an 11-screen process with high effort before they understood the value of finishing.",
            "On mobile, this translated into drop-offs, lower trust, and lower qualified conversion."
          ],
          highlights: [
            "Long multi-screen registration path",
            "High perceived effort on mobile",
            "Low value framing in early steps"
          ]
        },
        {
          label: "Act 02",
          title: "Analytics showed where people left",
          paragraphs: [
            "Behavioral analysis showed concentrated abandonment in long form segments and moments where users felt asked for too much too soon.",
            "This gave us a clear objective: preserve lead quality while reducing unnecessary effort."
          ],
          highlights: [
            "Drop-off spikes around dense input blocks",
            "Some inputs could be inferred from earlier answers",
            "Flow sequence directly affected completion intent"
          ]
        },
        {
          label: "Act 03",
          title: "Seven screens created a clearer sequence",
          paragraphs: [
            "I redesigned the flow from 11 screens to 7, using progressive disclosure and earlier value signals to maintain user momentum.",
            "AI-assisted inference reduced redundant inputs while keeping qualification quality intact."
          ],
          highlights: [
            "11 to 7 screens with mobile-first hierarchy",
            "AI-assisted prefill and inference",
            "Early value framing to increase continuation"
          ]
        },
        {
          label: "Act 04",
          title: "We tested the new order",
          paragraphs: [
            "Multiple variants were tested through A/B experiments to validate ordering, phrasing, and perceived effort.",
            "Design decisions were tied to conversion and completion behavior rather than subjective preference."
          ],
          highlights: [
            "A/B testing across funnel variants",
            "Location-based recommendations",
            "Internal property suggestions for faster qualification"
          ]
        },
        {
          label: "Act 05",
          title: "Qualified conversion increased by 30%",
          paragraphs: [
            "The tested flow reduced the journey from 11 screens to 7 and increased qualified conversion by 30%.",
            "The available record does not include the test window, sample size, or long-term lead-quality result, so those remain important interview follow-ups."
          ],
          highlights: [
            "30% lift in qualified lead conversion",
            "11 screens reduced to 7",
            "Next measure: completion time and long-term lead quality"
          ]
        }
      ]
    },
    images: [
      {
        src: smartFunnel01,
        alt: "Smart funnel screen 01"
      },
      {
        src: smartFunnel02,
        alt: "Smart funnel screen 02"
      },
      {
        src: smartFunnel03,
        alt: "Smart funnel screen 03"
      },
      {
        src: smartFunnel04,
        alt: "Smart funnel screen 04"
      }
    ]
  },
  // Freelance (Priority 3)
  {
    id: "freelance-1",
    title: "Now App",
    showcaseTitle: "Pick a movie in 30 seconds.",
    showcasePreview: "A research-led concept that turns streaming choice overload into a short, guided decision. The goal was to make choosing feel lighter, before browsing becomes the whole night.",
    subtitle: "Concept case study",
    category: "Freelance",
    type: "UX/UI case study",
    role: "UX/UI Designer",
    duration: "1 week",
    tools: ["Figma", "Google Slides", "ChatGPT"],
    tags: ["Research", "Concept", "Decision Flow"],
    thumbnailGradient: "from-zinc-800 to-zinc-900",
    narrative: {
      introduction: {
        company: "Personal project",
        industry: "Streaming concept",
        year: "2024",
        summary: "Now App is a one-week UX/UI concept exploring whether a short guided flow could help people choose a movie in about 30 seconds. It remains unbuilt and unlaunched."
      },
      role: {
        title: "UX/UI Designer",
        responsibilities: [
          "Planned and led qualitative interviews and synthesis",
          "Built the concept definition, IA, and user flows",
          "Designed the UI concept and interaction model",
          "Documented learnings and validation criteria"
        ]
      },
      challenge: {
        summary: "Users of streaming platforms feel overwhelmed by content volume and often spend more time browsing than watching.",
        painPoints: [
          "Lack of a clear starting point",
          "Too many options presented at once",
          "Low confidence in recommendations",
          "High time cost before content consumption"
        ],
        constraints: [
          "Concept proposal with no build or launch",
          "One-week, self-initiated timeline",
          "Focus on UX reasoning over technical feasibility"
        ],
        insights: [
          "Cognitive overload and the paradox of choice drive decision fatigue",
          "Users default to rewatching or external recommendations",
          "Short, guided flows reduce perceived effort",
          "Trust in recommendations is as important as relevance"
        ]
      },
      approach: [
        "Defined the hypothesis around reduced cognitive load and faster decisions",
        "Conducted interviews and mapped behavior patterns across user types",
        "Reviewed competitors including Netflix, Prime Video, HBO Max, IMDb, and JustWatch",
        "Synthesized insights into proto-archetypes and pain points",
        "Designed a guided decision flow with minimal branching",
        "Mapped IA to reduce exploration and emphasize focused paths",
        "Created a mobile-first interface with progressive disclosure",
        "Outlined conceptual validation metrics for time to decision and satisfaction"
      ],
      outcome: [
        "Completed a focused concept and interactive direction in one week",
        "Defined a validation plan around time to decision, recommendation confidence, and satisfaction",
        "No launch or product-performance result is available yet"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "People were spending too long choosing a movie",
          paragraphs: [
            "Now App started from a familiar streaming behavior: users spend more time choosing than watching.",
            "The goal was to explore whether a focused path could help people decide in about 30 seconds."
          ],
          highlights: [
            "High choice overload in streaming experiences",
            "Low confidence in generic recommendation feeds",
            "Strong need for a clear starting point"
          ]
        },
        {
          label: "Act 02",
          title: "Research came before the interface",
          paragraphs: [
            "In a one-week timeline, I prioritized qualitative research and synthesis to avoid jumping into UI without behavioral evidence.",
            "Interviews and competitor analysis were used to map where users lose confidence and where guided decisions could help."
          ],
          highlights: [
            "Interviews and pattern synthesis",
            "Benchmark review across major streaming products",
            "Problem framing around confidence, not only speed"
          ]
        },
        {
          label: "Act 03",
          title: "The concept asked fewer questions",
          paragraphs: [
            "The concept uses minimal branching and progressive disclosure so users process fewer decisions at each step.",
            "Information architecture was structured to favor focus and reduce the perceived effort of choosing."
          ],
          highlights: [
            "Guided flow with minimal decision branches",
            "Mobile-first interaction model",
            "Structured IA for focused progression"
          ]
        },
        {
          label: "Act 04",
          title: "The prototype created a testable hypothesis",
          paragraphs: [
            "Since the project had no launch, the work focused on a clear hypothesis and validation criteria for a future build phase.",
            "I documented how to evaluate time to decision, user confidence, and satisfaction if the concept moved to implementation."
          ],
          highlights: [
            "Concept validation metrics defined",
            "Learning-oriented framing of outcomes",
            "Clear handoff narrative for future iteration"
          ]
        },
        {
          label: "Act 05",
          title: "A concept ready to test",
          paragraphs: [
            "The result was a focused hypothesis, an interaction direction, and a clear plan for testing whether the experience helps people decide faster and with more confidence.",
            "Now App remains a concept case study that shows how I approach product thinking before a product is built."
          ],
          highlights: [
            "Clear decision-confidence problem statement",
            "Repeatable process for future product challenges",
            "Positioned intentionally as a concept case study"
          ]
        }
      ]
    },
    images: [
      {
        src: nowApp01,
        alt: "Now App screen 01"
      },
      {
        src: nowApp02,
        alt: "Now App screen 02"
      },
      {
        src: nowApp03,
        alt: "Now App screen 03"
      },
      {
        src: nowApp04,
        alt: "Now App screen 04"
      },
      {
        src: nowApp05,
        alt: "Now App screen 05"
      },
      {
        src: nowApp06,
        alt: "Now App screen 06"
      }
    ]
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "8020REI",
    role: "Senior Product Designer",
    period: "Jun 2024 – Present",
    location: "Remote · U.S.-based SaaS",
    description: [
      "Leading end-to-end product design for a B2B real estate data platform",
      "Owns strategy, discovery, execution, and delivery across initiatives",
      "Designs complex, data-heavy workflows for investor operations",
      "Develops and maintains the Kairo design system",
      "Leads cross-functional work with Product, Engineering, CS, and Execs"
    ]
  },
  {
    company: "Habi",
    role: "Product Designer",
    period: "Aug 2023 – Jun 2024",
    location: "Hybrid · Colombia",
    secondaryRole: "Creative Designer",
    secondaryPeriod: "Aug 2022 – Aug 2023",
    secondaryLocation: "",
    description: [
      "Design and audit the acquisition funnel experience",
      "Design internal operations tools",
      "Build and iterate AI customer service prompts",
      "UX research with cross-functional teams",
      "Brand and marketing systems",
      "Campaign and visual communication across channels"
    ]
  },
  {
    company: "Metro de Bogotá",
    role: "Creative Designer",
    period: "Nov 2018 – Aug 2023",
    location: "On-site · Bogotá",
    description: [
      "Graphic design for large-scale public communication",
      "Internal communication systems (intranet, newsletters)",
      "Advertising campaigns and event materials"
    ]
  },
  {
    company: "Rd Studio",
    role: "Industrial Designer",
    period: "Jul 2014 – Nov 2014",
    location: "",
    description: [
      "3D modeling and product prototyping",
      "Early professional experience in industrial design"
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Core Strategy",
    items: ["UX Strategy", "UX Research", "Vibecoding", "Collaboration"]
  },
  {
    category: "AI & Tools",
    items: ["Figma", "Figma Make", "ChatGPT Codex", "Claude Code", "Gemini", "Cursor", "Adobe Suite"]
  },
  {
    category: "Technical",
    items: ["React", "Tailwind CSS", "Next.js", "Nuxt", "Google Cloud BigQuery", "AWS", "Terminal (Warp)", "Git", "GitHub"]
  }
];
