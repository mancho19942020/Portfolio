import { Project, ExperienceItem, SkillGroup } from './types';
import buybox01 from './assets/projects/buybox/01.webp';
import buybox02 from './assets/projects/buybox/02.webp';
import buybox03 from './assets/projects/buybox/03.webp';
import buybox04 from './assets/projects/buybox/04.webp';
import buybox05 from './assets/projects/buybox/05.webp';
import buybox06 from './assets/projects/buybox/06.webp';
import propertyList01 from './assets/projects/property-list/01.webp';
import propertyList02 from './assets/projects/property-list/02.webp';
import propertyList03 from './assets/projects/property-list/03.webp';
import propertyList04 from './assets/projects/property-list/04.webp';
import propertyList05 from './assets/projects/property-list/05.webp';
import propertyList06 from './assets/projects/property-list/06.webp';
import metricsHubMockup from './assets/projects/metrics-hub/mockup.webp';
import metricsHub02 from './assets/projects/metrics-hub/metrics-02.webp';
import metricsHub03 from './assets/projects/metrics-hub/metrics-03.webp';
import metricsHub04 from './assets/projects/metrics-hub/metrics-04.webp';
import metricsHub05 from './assets/projects/metrics-hub/metrics-05.webp';
import metricsHub06 from './assets/projects/metrics-hub/metrics-06.webp';
import metricsHub07 from './assets/projects/metrics-hub/metrics-07.webp';
import metricsHub08 from './assets/projects/metrics-hub/metrics-08.webp';
import metricsHub09 from './assets/projects/metrics-hub/metrics-09.webp';
import dmAutomation01 from './assets/projects/dm-automation/01.webp';
import dmAutomation02 from './assets/projects/dm-automation/02.webp';
import dmAutomation03 from './assets/projects/dm-automation/03.webp';
import dmAutomation04 from './assets/projects/dm-automation/04.webp';
import dmAutomation05 from './assets/projects/dm-automation/05.webp';
import smartFunnel01 from './assets/projects/smart-funnel/01.webp';
import smartFunnel02 from './assets/projects/smart-funnel/02.webp';
import smartFunnel03 from './assets/projects/smart-funnel/03.webp';
import smartFunnel04 from './assets/projects/smart-funnel/04.webp';
import nowApp01 from './assets/projects/now-app/01.webp';
import nowApp02 from './assets/projects/now-app/02.webp';
import nowApp03 from './assets/projects/now-app/03.webp';
import nowApp04 from './assets/projects/now-app/04.webp';
import nowApp05 from './assets/projects/now-app/05.webp';
import nowApp06 from './assets/projects/now-app/06.webp';
import roof000 from './assets/projects/8020roof/02 new images/000.webp';
import roofDashboard from './assets/projects/8020roof/02 new images/001.webp';
import roofPropertyList from './assets/projects/8020roof/02 new images/002.webp';
import roofPropertyView from './assets/projects/8020roof/02 new images/003.webp';
import roofBuybox from './assets/projects/8020roof/02 new images/004.webp';
import roofBuyboxEdit from './assets/projects/8020roof/02 new images/005.webp';
import roofFulfillment from './assets/projects/8020roof/02 new images/006.webp';
import roofDoorKnocking from './assets/projects/8020roof/02 new images/007.webp';
import roofDataHealthOverview from './assets/projects/8020roof/02 new images/008.webp';
import roofDataHealthDetails from './assets/projects/8020roof/02 new images/009.webp';
import roofDetailTen from './assets/projects/8020roof/02 new images/010.webp';
import phoenixCover from './assets/projects/phoenix/new images/000.webp';
import phoenix01 from './assets/projects/phoenix/new images/001.webp';
import phoenix02 from './assets/projects/phoenix/new images/002.webp';
import phoenix03 from './assets/projects/phoenix/new images/003.webp';
import phoenix04 from './assets/projects/phoenix/new images/004.webp';
import phoenix05 from './assets/projects/phoenix/new images/005.webp';
import phoenix06 from './assets/projects/phoenix/new images/006.webp';
import phoenix07 from './assets/projects/phoenix/new images/007.webp';
import phoenix08 from './assets/projects/phoenix/new images/008.webp';
import phoenix09 from './assets/projects/phoenix/new images/009.webp';
import phoenix10 from './assets/projects/phoenix/new images/010.webp';
import phoenix11 from './assets/projects/phoenix/new images/011.webp';

export const PROJECTS: Project[] = [
  {
    id: "phoenix",
    title: "Phoenix",
    showcaseTitle: "One design system to rule them all.",
    showcasePreview: "As new brands and internal products emerged, copied interfaces began to drift. Phoenix gives design and engineering one shared language, so teams can launch faster and improve every product from one source.",
    subtitle: "One design system for every 8020 brand",
    category: "8020IQ",
    type: "Multi-brand design system · platform",
    role: "Design system steward & builder",
    duration: "~4 months",
    tools: ["Figma", "Claude Code", "Nuxt 4", "Vue 3", "TypeScript", "Tailwind CSS v4", "shadcn-vue", "Playwright", "Vitest", "GitHub Actions"],
    tags: ["Design system", "Multi-brand", "Vibecoding", "Platform", "Accessibility"],
    thumbnailGradient: "from-emerald-950 to-zinc-900",
    coverImage: { src: phoenixCover, alt: "Phoenix shared design system shown across four 8020 brands" },
    previewImagePosition: "62% center",
    narrative: {
      introduction: {
        company: "8020IQ",
        industry: "PropTech SaaS",
        year: "2026",
        summary: "Phoenix unifies the design and code behind 8020IQ, 8020REI, 8020ROOF, and 8020 Direct Mail. Shared components, accessible patterns, and brand themes give teams one source of truth as new products and AI-assisted workflows grow."
      },
      role: {
        title: "Design system steward & builder",
        responsibilities: [
          "Researched client and internal-team needs, then audited repeated patterns across the products.",
          "Aligned product and frontend on a shared architecture that preserves each brand's identity.",
          "Designed and built a live catalog using the same components and tokens as the products.",
          "Added accessibility checks and code rules so AI-assisted changes stay consistent.",
          "Measured adoption, promoted proven components, and retired duplicate files."
        ],
        collaborators: ["Product director", "Frontend engineering", "Clients", "Internal product teams"]
      },
      challenge: {
        summary: "The company had become a family of products, but each app had inherited copies of the same UI. Components drifted, dark mode varied by product, and brand colors were hardcoded per app.",
        painPoints: ["Four app-local component sets", "Brand accents hardcoded per app", "Inconsistent dark-mode coverage", "Fixes landing in one copy but not another"],
        constraints: ["Five apps already in production or staging", "Adoption needed to be incremental", "AI-assisted changes needed machine-checkable rules"],
        insights: ["A brand is nine declarations once everything else is shared", "A catalog should measure its own adoption", "Accessibility should be checked in source, not copied from a guide", "Promotion beats decree: prove it in an app, then share it"]
      },
      approach: ["Mapped repeated patterns and brand differences across the products", "Built one shared component library with light and dark themes", "Kept brand identity in a small theme layer instead of separate libraries", "Added automated checks for components, motion, and accessibility", "Documented the system so AI-assisted and human changes follow the same rules"],
      outcome: ["Four brands and two themes share one component foundation", "64 duplicate component files retired from app trees", "Shared changes reach connected products from one source", "A live catalog makes behavior, accessibility, and adoption visible", "New brands can start from an existing, tested foundation"],
      chapters: [
        { label: "Act 01", title: "Growth was creating the same work four times", paragraphs: ["8020IQ was growing from one product into a family of brands. Each new product needed its own identity, but teams were rebuilding common interface parts separately. That made design and development slower, and every fix risked working differently from one product to another."], highlights: ["Four brands growing on separate foundations", "Common components maintained in several places", "Every new brand increased the cost of keeping products aligned"] },
        { label: "Act 02", title: "We mapped what the products already shared", paragraphs: ["We audited components, visual rules, and code already used across the products. The inventory showed where teams were solving the same problem repeatedly and gave us a starting point for one shared system."], highlights: ["Duplicate patterns identified", "Brand differences separated from shared behavior", "Contrast measured in the real theme files"] },
        { label: "Act 03", title: "One system, distinct brands", paragraphs: ["Common behavior, layout, states, and accessibility rules now live in one place. A small visual layer gives each brand its identity without another component library."], highlights: ["One UX language across the product family", "Light and dark themes", "Brand identity without component forks"] },
        { label: "Act 04", title: "Design and frontend used the real components", paragraphs: ["Phoenix is a live catalog. Designers and engineers can inspect and review the same coded components used by the products. Automated checks make missing components and accessibility problems visible before release."], highlights: ["Live component examples", "Automated quality checks", "Documentation generated from code"] },
        { label: "Act 05", title: "One improvement could reach every product", paragraphs: ["Four brands and two themes now use one component source. Retiring duplicate files reduced drift, while the catalog gives the next product a tested starting point."], highlights: ["64 duplicate files retired", "Accessibility checked in both themes", "Shared fixes reach connected products"] }
      ]
    },
    images: [
      { src: phoenix01, alt: "Phoenix design system overview and navigation" },
      { src: phoenix02, alt: "Phoenix brand themes and shared color values" },
      { src: phoenix03, alt: "Phoenix component catalog organized by purpose" },
      { src: phoenix04, alt: "Phoenix DataTable component and usage guidance" },
      { src: phoenix05, alt: "Phoenix responsive StatGrid component" },
      { src: phoenix06, alt: "Phoenix StatTile in light and dark themes" },
      { src: phoenix07, alt: "Phoenix button variants, sizes, and states" },
      { src: phoenix08, alt: "Phoenix alert dialog in light and dark themes" },
      { src: phoenix09, alt: "Phoenix dialog component and form example" },
      { src: phoenix10, alt: "Phoenix WizardStepper navigation component" },
      { src: phoenix11, alt: "Phoenix AppShell page structure" }
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
    role: "Senior product designer & builder",
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
    tags: ["Design system", "Multi-tenant SaaS", "Vibecoding", "Zero-to-one"],
    thumbnailGradient: "from-orange-950 to-zinc-900",
    coverImage: {
      src: roof000,
      alt: "8020ROOF cover"
    },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2026",
        summary: "A multi-client SaaS that turns a 100M+ row property database into ready-to-use roofing marketing lists. Operators can target properties, create a Buy Box, and run a five-stage pipeline for direct mail, cold calls, and SMS. It replaces weeks of spreadsheet work with a self-serve platform."
      },
      role: {
        title: "Senior product designer & builder",
        responsibilities: [
          "Researched the roofing market, competitor workflows, and the manual service the business needed to replace.",
          "Interviewed prospective roofing clients and aligned the product model with the product director and builders.",
          "Designed and iterated property intelligence, Buy Boxes, fulfillment, and the door-knocking beta.",
          "Built production UI with AI-assisted development and a shared component library.",
          "Tested the workflow with two pilot clients, refined it from feedback, and supported launch."
        ],
        collaborators: ["Product director", "Engineering and QA", "Prospective clients", "Pilot clients"]
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
      { src: roofDashboard, alt: "8020ROOF dashboard with property metrics and opportunity map" },
      { src: roofPropertyList, alt: "8020ROOF sortable property list" },
      { src: roofPropertyView, alt: "8020ROOF property map and detail panel" },
      { src: roofBuybox, alt: "8020ROOF saved Buy Boxes" },
      { src: roofBuyboxEdit, alt: "8020ROOF Buy Box county filters" },
      { src: roofFulfillment, alt: "8020ROOF Buy Box weighting controls" },
      { src: roofDoorKnocking, alt: "8020ROOF Buy Box ZIP code selection" },
      { src: roofDataHealthOverview, alt: "8020ROOF door-knocking routes and QR codes" },
      { src: roofDataHealthDetails, alt: "8020ROOF door-knocking route map" },
      { src: roofDetailTen, alt: "8020ROOF data health coverage table" }
    ]
  },
  {
    id: "8020-dm-campaign",
    title: "DM campaign",
    subtitle: "Automated direct mail, integrated into the platform",
    category: "8020REI",
    type: "SaaS feature, zero-to-one",
    role: "Senior product designer",
    duration: "3 months",
    tools: ["Figma", "Figma Make", "Google Analytics", "Heap", "Clarity", "ChatGPT"],
    tags: ["Product strategy", "Automation flow", "Complex logic", "Experimentation"],
    thumbnailGradient: "from-emerald-900 to-zinc-900",
    coverImage: { src: dmAutomation01, alt: "DM campaign product preview" },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "DM Campaign brings direct mail into the platform. A guided flow helps investors configure automated outreach, review what will happen, and track campaign status."
      },
      role: {
        title: "Senior product designer",
        responsibilities: [
          "Researched investor and stakeholder needs alongside Customer Success and Product.",
          "Aligned campaign scope and feasibility with engineering and operations.",
          "Designed and iterated onboarding, configuration, guardrails, and status feedback.",
          "Defined how users review campaign performance and how the team would measure adoption."
        ],
        collaborators: ["Product", "Engineering", "Customer Success", "Investors"]
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
        "RapidResponse and SmartDrop were supported in one campaign experience",
        "A measurement plan was defined around active usage, customer satisfaction, and campaign performance",
        "No verified adoption outcome is included"
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
          title: "A foundation for measurable iteration",
          paragraphs: [
            "The design brought RapidResponse and SmartDrop into one campaign experience with a shared setup, status model, and performance view.",
            "Adoption and business impact still require verified post-release measurement."
          ],
          highlights: [
            "Two trigger models in one experience",
            "Measurement plan for usage and satisfaction",
            "No verified adoption result included"
          ]
        }
      ]
    },
    images: [
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
    type: "Complex interaction design",
    role: "Senior product designer",
    duration: "2 months",
    tools: ["Figma", "Figma Make", "Heap", "Clarity", "Google Analytics", "ChatGPT", "Zoom"],
    tags: ["Data visualization", "Filtering logic", "Legacy redesign"],
    thumbnailGradient: "from-emerald-950 to-zinc-900",
    coverImage: { src: buybox01, alt: "BuyBox editor product preview" },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "Churn feedback and Customer Success cases showed that investors struggled to configure Buy Boxes. I redesigned the rules engine as a guided decision flow that connects market opportunity, marketing capacity, and investor goals."
      },
      role: {
        title: "Senior product designer",
        responsibilities: [
          "Reviewed churn feedback and Customer Success cases to identify where BuyBox setup failed.",
          "Aligned the investment rules, marketing needs, and success criteria with Product and leadership.",
          "Designed and iterated the information architecture, live feedback, warnings, and prototypes.",
          "Prepared an accessible UI direction and release measures for engineering review."
        ],
        collaborators: ["Product", "Engineering", "Customer Success", "Leadership"]
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
    showcasePreview: "Investors were leaving the platform to validate opportunities. I reorganized the list and detail view around the signals they needed, increasing daily active users (DAU) by 50%.",
    subtitle: "From data exporter to decision environment",
    category: "8020REI",
    type: "Workflow optimization",
    role: "Senior product designer",
    duration: "2 Months",
    tools: ["Figma", "Figma Make", "Heap", "Clarity", "Google Analytics", "ChatGPT", "GPT"],
    tags: ["Information density", "Efficiency", "Data tables"],
    thumbnailGradient: "from-zinc-800 to-zinc-950",
    coverImage: { src: propertyList01, alt: "Property view product preview" },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "I reworked the property list and detail view so investors could evaluate opportunities in the product, with the most useful signals visible at the right moment."
      },
      role: {
        title: "Senior product designer",
        responsibilities: [
          "Researched investor decisions, support feedback, and competing property tools.",
          "Aligned the most useful property signals with Product, Data, Customer Success, and Engineering.",
          "Designed and iterated list exploration, filters, and a clearer property-detail hierarchy.",
          "Used product usage, satisfaction, and issue reports to evaluate the updated experience."
        ],
        collaborators: ["Product", "Data", "Engineering", "Customer Success", "Investors"]
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
        "Increased daily active users (DAU) by 50%",
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
          title: "Daily active users increased by 50%",
          paragraphs: [
            "Daily active users increased by 50%, post-interaction feedback was more than 70% positive, and reported issues fell by about 80%.",
            "The next question is whether this deeper use also improves investment decisions."
          ],
          highlights: [
            "50% increase in daily active users (DAU)",
            "70%+ positive CSAT on post-interaction surveys",
            "Around 80% reduction in bugs and reported issues"
          ]
        }
      ]
    },
    images: [
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
    type: "Unified analytics platform",
    role: "Senior product designer & builder",
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
    tags: ["Data unification", "Business decisions", "Accessible intelligence"],
    thumbnailGradient: "from-cyan-950 to-zinc-950",
    coverImage: { src: metricsHubMockup, alt: "Metrics Hub dashboard product preview" },
    previewImagePosition: "left center",
    caseStudySnapshot: {
      businessProblem: "Business-critical data was distributed across six systems, leaving Product, Customer Success, and Operations to make decisions with partial evidence.",
      discoveryAndConstraints: "I mapped source ownership, access risks, costs, and the business questions behind each metric before defining the information architecture. The platform had to use existing infrastructure and work for non-technical teams.",
      keyDesignDecision: "Create a role-aware, widget-based workspace with a three-level navigation model and reusable metric patterns, so analytical depth did not come at the cost of comprehension.",
      observedImpact: "Within the first month, the connected view revealed a mail-provider status conflict that was blocking client letters. Resolving it restored mail volume and recovered revenue. After five blockers were fixed, activity in a client-requested API increased 3x."
    },
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2026",
        summary: "I designed and built an internal workspace that connects six data sources. Nontechnical teams can now investigate business health in one place and act on issues sooner."
      },
      role: {
        title: "Senior product designer & builder",
        responsibilities: [
          "Interviewed business teams about decisions they could not make from disconnected data.",
          "Mapped source ownership, access constraints, and key questions across six systems.",
          "Designed and iterated navigation, metric patterns, and a shared widget workspace.",
          "Built frontend and backend layers with AI assistance, then monitored real use and operational issues.",
          "Created contribution and quality rules so the platform could grow consistently."
        ],
        collaborators: ["Product director", "Engineering", "Data teams", "Customer Success", "Operations"]
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
    showcaseTitle: "Fewer screens, more qualified leads.",
    showcasePreview: "I used behavior data to find where people lost momentum, then simplified the mobile journey from 11 screens to 7. Qualified lead conversion increased by 30%.",
    subtitle: "Mobile-first acquisition funnel",
    category: "Habi",
    type: "Growth design",
    role: "Product designer",
    duration: "2 months",
    tools: ["Figma", "Google Analytics", "ChatGPT", "Hotjar", "Clarity"],
    tags: ["Conversion rate", "A/B testing", "Mobile first"],
    thumbnailGradient: "from-purple-950 to-zinc-900",
    coverImage: { src: smartFunnel01, alt: "Habi mobile acquisition funnel product preview" },
    narrative: {
      introduction: {
        company: "TuHabi",
        industry: "PropTech",
        year: "2024",
        summary: "I redesigned Habi's mobile acquisition funnel in Mexico using behavioral data and A/B tests. The flow fell from eleven screens to seven, and qualified lead conversion increased by 30%."
      },
      role: {
        title: "Product designer",
        responsibilities: [
          "Used behavioral data to locate drop-off in the eleven-screen mobile journey.",
          "Aligned qualification needs with Product and Marketing across Mexico and Colombia.",
          "Designed and iterated a seven-screen flow with progressive disclosure.",
          "Tested variants through A/B experiments and reviewed qualified conversion."
        ],
        collaborators: ["Product", "Marketing", "Growth", "Users"]
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
    role: "UX/UI designer",
    duration: "1 week",
    tools: ["Figma", "Google Slides", "ChatGPT"],
    tags: ["Research", "Concept", "Decision flow"],
    thumbnailGradient: "from-zinc-800 to-zinc-900",
    coverImage: { src: nowApp01, alt: "Now App concept preview" },
    narrative: {
      introduction: {
        company: "Personal project",
        industry: "Streaming concept",
        year: "2024",
        summary: "Now App is a one-week UX/UI concept exploring whether a short guided flow could help people choose a movie in about 30 seconds. It remains unbuilt and unlaunched."
      },
      role: {
        title: "UX/UI designer",
        responsibilities: [
          "Interviewed viewers and synthesized the moments that made choosing a movie difficult.",
          "Reviewed competing streaming discovery patterns and framed a testable hypothesis.",
          "Designed a guided decision flow and mobile UI prototype.",
          "Documented what a future user test should measure; the concept has not launched."
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
    role: "Sr. product designer",
    period: "Jun 2024 – Present",
    location: "Remote · U.S.-based SaaS",
    description: [
      "Lead discovery, client research, design, implementation, and measurement across data-heavy B2B SaaS products",
      "Work with clients, Customer Success, Product, Data, and Engineering to turn operational needs into usable workflows",
      "Designed and built Metrics Hub, connecting six data sources and exposing an issue that blocked client mailings",
      "Helped launch 8020ROOF as a self-serve product after researching the roofing market and testing with pilot clients",
      "Co-built Phoenix so four brands share a consistent design and code foundation, with accessible patterns and fewer duplicate components",
      "Across the property experience, daily active users rose 50%, positive in-product CSAT exceeded 70%, and reported issues fell about 80%"
    ]
  },
  {
    company: "Habi",
    role: "Product designer",
    period: "Aug 2022 – Jun 2024",
    location: "Hybrid · Colombia",
    description: [
      "Led research, interaction design, and testing across acquisition and operations in Colombia and Mexico",
      "Used behavioral data and A/B tests to reduce a mobile funnel from 11 screens to 7, increasing qualified lead conversion by 30%",
      "Designed a role-based operations platform for commercial and zone leaders managing teams and territories",
      "Partnered with Product, Growth, Marketing, and Operations to evaluate and iterate customer journeys"
    ]
  },
  {
    company: "Metro de Bogotá",
    role: "Creative designer",
    period: "Nov 2017 – Aug 2022",
    location: "On-site · Bogotá",
    description: [
      "Graphic design for large-scale public communication",
      "Internal communication systems (intranet, newsletters)",
      "Advertising campaigns and event materials"
    ]
  },
  {
    company: "Rd Studio",
    role: "Industrial designer",
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
    category: "Product design",
    items: ["Product strategy", "UX research", "Interaction design", "Mobile product design", "0-to-1 products", "Design systems"]
  },
  {
    category: "Data & delivery",
    items: ["Product analytics", "A/B testing", "Data visualization", "Code-based prototyping", "Production delivery", "Cross-functional leadership"]
  },
  {
    category: "Technology",
    items: ["Figma", "React", "Next.js", "Vue", "Nuxt", "TypeScript", "Tailwind CSS", "BigQuery", "AWS", "Git & GitHub", "AI-assisted development"]
  }
];
