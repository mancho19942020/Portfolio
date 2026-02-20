import { Project, ExperienceItem, SkillGroup } from './types';
import buybox01 from './assets/projects/buybox/01.jpg';
import buybox02 from './assets/projects/buybox/02.jpg';
import buybox03 from './assets/projects/buybox/03.jpg';
import buybox04 from './assets/projects/buybox/04.jpg';
import buybox05 from './assets/projects/buybox/05.jpg';
import buybox06 from './assets/projects/buybox/06.jpg';
import buybox07 from './assets/projects/buybox/07.jpg';
import propertyList01 from './assets/projects/property-list/01.jpg';
import propertyList02 from './assets/projects/property-list/02.jpg';
import propertyList03 from './assets/projects/property-list/03.jpg';
import propertyList04 from './assets/projects/property-list/04.jpg';
import propertyList05 from './assets/projects/property-list/05.jpg';
import propertyList06 from './assets/projects/property-list/06.jpg';
import kairo01 from './assets/projects/kairo/01.jpg';
import kairo02 from './assets/projects/kairo/02.jpg';
import kairo03 from './assets/projects/kairo/03.jpg';
import kairo04 from './assets/projects/kairo/04.jpg';
import kairo05 from './assets/projects/kairo/05.jpg';
import kairo06 from './assets/projects/kairo/06.jpg';
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

export const PROJECTS: Project[] = [
  // 8020REI (Priority 1)
  {
    id: "8020-dm-campaign",
    title: "DM campaign",
    subtitle: "New product initiative",
    category: "8020REI",
    type: "SaaS Feature • 0 to 1",
    role: "Lead Product Designer",
    duration: "3 months",
    tools: ["Figma", "Figma Make", "Google Analytics", "Heap", "Clarity", "ChatGPT"],
    tags: ["Product Strategy", "Automation Flow", "Complex Logic"],
    thumbnailGradient: "from-emerald-900 to-zinc-900",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "DM campaign is an automated direct mail system that builds on RapidResponse. It eliminates manual workflows, reduces time-to-contact, and turns direct mail into a data-driven, automated channel integrated into the platform."
      },
      role: {
        title: "Lead Product Designer",
        responsibilities: [
          "Owned end-to-end product design for the automation system",
          "Partnered with Product, Engineering, and Customer Success on scope and feasibility",
          "Defined interaction flows, guardrails, and system feedback states",
          "Shaped onboarding, configuration, and performance visibility"
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
        "12 active clients adopted the system in early usage",
        "Faster outreach and reduced operational friction",
        "Higher platform stickiness among active users",
        "Stronger confidence in data-driven timing and execution",
        "Support for churn reduction by improving deal velocity",
        "Targets include a 50% increase in active usage",
        "Targets include positive CSAT feedback among active users",
        "Targets include expanded testing, optimization, and automation capabilities"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "From manual execution to product opportunity",
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
          title: "Discovery aligned trust, control, and automation",
          paragraphs: [
            "Research across leadership, stakeholders, and active investors showed that automation alone was not enough. Users needed to understand what would happen, why it would happen, and what it would cost.",
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
          title: "A two-track automation model",
          paragraphs: [
            "I defined two core trigger models: one based on live data updates (RapidResponse) and one based on list delivery events (SmartDrop).",
            "This created a flexible structure that matched different investor operating models without forcing one rigid campaign type."
          ],
          highlights: [
            "Real-time trigger path for rapid reactions",
            "List-event trigger path for scheduled operations",
            "Guided setup with guardrails and explicit decisions"
          ]
        },
        {
          label: "Act 04",
          title: "Designing confidence into execution",
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
          title: "Early adoption and measurable direction",
          paragraphs: [
            "Early usage validated the need: 12 clients adopted the product and teams reported faster outreach with less operational friction.",
            "Post-launch, we defined expansion metrics around active usage, satisfaction, and optimization capabilities to guide the next phase."
          ],
          highlights: [
            "12 active clients in early adoption",
            "Higher confidence in automated campaign execution",
            "Clear roadmap for testing and optimization"
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
    title: "BuyBox editor redesign",
    subtitle: "Core feature redesign",
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
        summary: "Redesigned the BuyBox editor to reduce churn caused by misconfigured acquisition rules and misaligned marketing output. The goal was to turn a dense rules engine into a guided decision system aligned with marketing capacity, market opportunity, and investor goals."
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
          "Dual audience of self-serve investors and CS-managed accounts"
        ],
        insights: [
          "Investors need guidance, not just flexibility",
          "Visibility into why matters more than raw control",
          "Previewing outcomes reduces trial-and-error behavior",
          "Defaults and guardrails outperform open-ended configuration",
          "Marketing capacity must shape acquisition criteria",
          "Errors should be explicit, actionable, and impossible to miss"
        ]
      },
      approach: [
        "Rebuilt the editor as modular, collapsible rule groups to reduce cognitive overload",
        "Integrated Marketing Needs directly into BuyBox construction",
        "Added live preview of estimated property volume and balance",
        "Surfaced clear alerts and warnings for misalignment or risky configurations",
        "Improved hierarchy and data prioritization to support decision-making",
        "Used a non-scroll, focused layout to reduce misclicks and friction",
        "Rewrote language to match investor mental models",
        "Aligned the UI with the Kairo design system for consistency and scalability"
      ],
      outcome: [
        "Designed to reduce customer churn by improving list quality",
        "Targeted a 20% reduction in time required to build a valid BuyBox",
        "Targeted an 80% reduction in BuyBox configuration errors",
        "Expected a 50% reduction in BuyBox-related support tickets",
        "Improved transparency and trust between investors and Customer Success",
        "Higher confidence in decision-making through clearer feedback loops",
        "Post-release metrics were defined to validate outcomes once fully deployed"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "A critical feature was driving churn",
          paragraphs: [
            "The BuyBox editor was one of the most important decision surfaces in the platform, but it behaved like an expert-only rules engine.",
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
          title: "Evidence from escalations and discovery",
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
          title: "Reframing the editor as guided decision making",
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
          title: "Interaction design focused on preventable mistakes",
          paragraphs: [
            "The final interface made risky conditions visible through alerts, warnings, and clearer system language mapped to investor mental models.",
            "I also used a focused, non-scroll layout to reduce misclicks and maintain context while editing complex criteria."
          ],
          highlights: [
            "Warnings and alerts for misalignment",
            "Improved information hierarchy and readability",
            "Kairo-aligned UI for long-term consistency"
          ]
        },
        {
          label: "Act 05",
          title: "Outcome targets tied to retention",
          paragraphs: [
            "The redesign was planned around measurable retention outcomes: faster valid setup, fewer errors, and less support burden.",
            "Beyond metrics, the core gain was decision confidence for investors and clearer communication across Product and CS."
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
        alt: "BuyBox editor redesign screen 01"
      },
      {
        src: buybox02,
        alt: "BuyBox editor redesign screen 02"
      },
      {
        src: buybox03,
        alt: "BuyBox editor redesign screen 03"
      },
      {
        src: buybox04,
        alt: "BuyBox editor redesign screen 04"
      },
      {
        src: buybox05,
        alt: "BuyBox editor redesign screen 05"
      },
      {
        src: buybox06,
        alt: "BuyBox editor redesign screen 06"
      },
      {
        src: buybox07,
        alt: "BuyBox editor redesign screen 07"
      }
    ]
  },
  {
    id: "8020-property-list",
    title: "Properties view redesign",
    subtitle: "Core feature redesign",
    category: "8020REI",
    type: "Workflow Optimization",
    role: "Lead Product Designer",
    duration: "2 Months",
    tools: ["Figma", "Figma Make", "Heap", "Clarity", "Google Analytics", "ChatGPT", "GPT"],
    tags: ["Information Density", "Efficiency", "Data Tables"],
    thumbnailGradient: "from-zinc-800 to-zinc-950",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2025",
        summary: "Redesigned the property list and property view to improve how investors explore, evaluate, and understand properties within their markets. The goal was to keep investors inside the platform instead of relying on external tools."
      },
      role: {
        title: "Lead Product Designer",
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
          "Data must be presented as a narrative, not a dump",
          "Editing property attributes should be fast and low-friction",
          "Filters and views are central to daily workflows"
        ]
      },
      approach: [
        "Treated the property view as a guided story",
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
        "Reduced missed clicks and navigation friction through layout optimization",
        "Increased engagement with views and filters in nearly 60% of sessions",
        "Improved overall perception of the platform as a reliable source of property intelligence",
        "Reduced cognitive load while increasing trust and confidence"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "The core workflow was leaking value",
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
          title: "Discovery clarified what investors optimize for",
          paragraphs: [
            "Research showed investors needed fast confidence signals: score, distress context, historical direction, and relevance to active buying criteria.",
            "The challenge was not missing data volume, but missing narrative structure in how data was presented."
          ],
          highlights: [
            "Opportunity assessment had to happen in seconds",
            "Historical trends increased trust in decisions",
            "Filters and views were central daily behaviors"
          ]
        },
        {
          label: "Act 03",
          title: "Designing list and detail as connected stories",
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
          title: "Execution focused on configurability without chaos",
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
          title: "Usage and trust improved together",
          paragraphs: [
            "Post-release signals showed both behavioral and sentiment gains, with stronger usage and positive feedback across high-frequency workflows.",
            "The outcome was not only higher interaction volume, but better decision quality and platform trust."
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
        alt: "Properties view redesign screen 01"
      },
      {
        src: propertyList02,
        alt: "Properties view redesign screen 02"
      },
      {
        src: propertyList03,
        alt: "Properties view redesign screen 03"
      },
      {
        src: propertyList04,
        alt: "Properties view redesign screen 04"
      },
      {
        src: propertyList05,
        alt: "Properties view redesign screen 05"
      },
      {
        src: propertyList06,
        alt: "Properties view redesign screen 06"
      }
    ]
  },
  {
    id: "8020-kairo",
    title: "Kairo design system",
    subtitle: "Foundational initiative",
    category: "8020REI",
    type: "Design Systems",
    role: "Design System Lead",
    duration: "Ongoing",
    tools: ["Figma", "Figma Make"],
    tags: ["Scalability", "Component Architecture", "Documentation"],
    thumbnailGradient: "from-blue-950 to-zinc-950",
    previewImageIndex: 1,
    previewImagePosition: "left center",
    narrative: {
      introduction: {
        company: "8020REI",
        industry: "PropTech SaaS",
        year: "2024",
        summary: "Created Kairo to establish a single source of truth across the platform. Before this initiative, there was no design system, UI patterns were inconsistent, and there was no shared framework between design, engineering, product, or marketing."
      },
      role: {
        title: "Design System Lead",
        responsibilities: [
          "Defined the system strategy, scope, and priorities",
          "Built foundations and component standards for data-heavy workflows",
          "Aligned design, engineering, product, and marketing on shared patterns",
          "Established contribution and documentation workflows",
          "Partnered with engineering to align Figma and frontend implementation"
        ]
      },
      challenge: {
        summary: "The absence of a design system created usability issues, slowed development, increased design debt, and made the platform hard to scale.",
        painPoints: [
          "No shared component standards",
          "Inconsistent visual language across screens",
          "Poor readability in data-heavy views",
          "High cognitive load for users",
          "Fragmented collaboration between design and engineering",
          "No clear ownership or documentation of UI decisions"
        ],
        constraints: [
          "System needed to support ongoing product delivery",
          "Patterns had to work across data-heavy workflows",
          "Adoption required alignment across teams"
        ],
        insights: [
          "Dense data without hierarchy increases cognitive load",
          "Inconsistent patterns slow decisions and reduce trust",
          "Lack of proximity and consistency breaks recognition",
          "Unfamiliar interfaces raise learning effort",
          "Poor contrast reduces legibility and scanability"
        ]
      },
      approach: [
        "Established a single source of truth for UI and interaction patterns",
        "Built a clear typography system optimized for data readability",
        "Defined an accessible color system with semantic meanings",
        "Standardized spacing, layout, and hierarchy rules",
        "Created reusable, composable components for data-heavy use cases",
        "Implemented token-based foundations for scalability and theming",
        "Established proto-personas informed by ongoing research, stakeholder input, and user behavior analysis, which later evolved into formal personas",
        "Aligned Figma foundations with frontend implementation",
        "Documented usage guidelines and best practices"
      ],
      outcome: [
        "Created a single source of truth across teams",
        "Reduced design debt and visual inconsistency while reducing technical debt through reusable components and optimized implementation workflows",
        "Improved readability and usability in data-heavy screens",
        "Accelerated feature development through reuse",
        "Enabled scalable growth into new product areas",
        "Improved collaboration between design and engineering",
        "System impact continues to evolve as adoption grows"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Scaling without a shared system was unsustainable",
          paragraphs: [
            "When Kairo started, teams were shipping product work without a common visual or interaction foundation.",
            "Each new feature increased design debt, implementation drift, and inconsistency for users moving between workflows."
          ],
          highlights: [
            "No shared standards for UI components",
            "Inconsistent language across screens",
            "High collaboration overhead between design and engineering"
          ]
        },
        {
          label: "Act 02",
          title: "The problem was more than visual inconsistency",
          paragraphs: [
            "Discovery showed the cost was operational as well as experiential: slower delivery, repeated debates, and reduced confidence in dense data interfaces.",
            "A durable system needed to improve readability, accelerate build cycles, and clarify ownership."
          ],
          highlights: [
            "Dense views increased cognitive load",
            "Pattern inconsistency reduced trust and recognition",
            "No clear contribution model for shared UI decisions"
          ]
        },
        {
          label: "Act 03",
          title: "Building the foundations for product velocity",
          paragraphs: [
            "I defined system strategy and delivered foundations across typography, color semantics, spacing, and composable components for data-heavy products.",
            "Tokenized decisions made the system easier to scale and easier to keep aligned between design artifacts and frontend code."
          ],
          highlights: [
            "Token-based system foundations",
            "Reusable component architecture",
            "Accessibility and readability as baseline criteria"
          ]
        },
        {
          label: "Act 04",
          title: "Adoption depended on workflows, not files",
          paragraphs: [
            "Beyond building components, I set up contribution and documentation workflows to make the system usable in real delivery cycles.",
            "Cross-functional alignment turned Kairo into an operating model, not just a Figma library."
          ],
          highlights: [
            "Design and engineering alignment rituals",
            "Documentation and usage guidance",
            "Shared pattern decisions across product and marketing"
          ]
        },
        {
          label: "Act 05",
          title: "A system that compounds over time",
          paragraphs: [
            "Kairo established a shared source of truth and improved both product consistency and delivery speed.",
            "Its impact keeps compounding as adoption grows and new product areas reuse the same primitives."
          ],
          highlights: [
            "Reduced design and technical debt",
            "Improved usability in dense workflows",
            "Faster feature development through reuse"
          ]
        }
      ]
    },
    images: [
      {
        src: kairo01,
        alt: "Kairo design system screen 01"
      },
      {
        src: kairo02,
        alt: "Kairo design system screen 02"
      },
      {
        src: kairo03,
        alt: "Kairo design system screen 03"
      },
      {
        src: kairo04,
        alt: "Kairo design system screen 04"
      },
      {
        src: kairo05,
        alt: "Kairo design system screen 05"
      },
      {
        src: kairo06,
        alt: "Kairo design system screen 06"
      }
    ]
  },
  // Habi (Priority 2)
  {
    id: "habi-funnels",
    title: "Smart funnel",
    subtitle: "Growth & optimization",
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
        summary: "Redesigned a mobile-first acquisition funnel to increase qualified lead conversion for the Mexico product. Execution was led remotely from Colombia, with the product operated in Mexico."
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
        "30% increase in qualified lead conversion rate",
        "Reduced interaction time per registration",
        "Higher completion rates on mobile devices",
        "Improved lead quality for downstream sales teams",
        "Stronger alignment between marketing goals and product execution"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "Conversion was blocked by friction-heavy onboarding",
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
          title: "Analytics exposed where intent was lost",
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
          title: "Re-sequencing the funnel around momentum",
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
          title: "Iteration through controlled experiments",
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
          title: "Measured growth with stronger downstream quality",
          paragraphs: [
            "The redesign delivered a 30% increase in qualified conversion while shortening interaction time.",
            "It also improved alignment between marketing acquisition goals and product execution quality."
          ],
          highlights: [
            "30% lift in qualified lead conversion",
            "Higher mobile completion rates",
            "Better lead quality for sales teams"
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
  {
    id: "habi-internal",
    title: "Internal Ops",
    subtitle: "Efficiency tooling",
    category: "Habi",
    type: "Internal Tool",
    role: "Product Designer",
    duration: "2 months",
    tools: ["Figma"],
    tags: ["Workflow", "Enterprise UX", "Service Design"],
    thumbnailGradient: "from-fuchsia-950 to-zinc-900",
    narrative: {
      introduction: {
        company: "Habi",
        industry: "Internal Operations",
        year: "2023",
        summary: "Designed an internal operations platform that helps commercial and zone leaders manage teams, territories, and assignments across cities."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Led workflow analysis with internal stakeholders",
          "Designed role-based UI for managers and operations teams",
          "Aligned product behavior with internal CRM requirements"
        ]
      },
      challenge: {
        summary: "Team and zone management relied on spreadsheets and manual processes, creating operational friction and poor visibility.",
        painPoints: [
          "No clear visibility into who was working on which areas",
          "Difficult to track team status and availability",
          "High dependency on a single administrator",
          "Poor UI clarity for internal stakeholders"
        ],
        constraints: [
          "Changes needed to sync with the internal CRM",
          "Zone logic varied across cities",
          "Operations teams needed fast edits with low risk"
        ],
        insights: [
          "Role-based visibility reduces decision friction",
          "Clear zone language improves coordination",
          "Instant updates prevent operational drift"
        ]
      },
      approach: [
        "Designed a clean, role-based internal UI",
        "Standardized zone selection language across the platform",
        "Enabled managers to create, edit, and assign zones visually",
        "Built team member profiles with role, territory, and status",
        "Synced all changes directly with the internal CRM"
      ],
      outcome: [
        "Improved speed and accuracy of team and zone management",
        "Increased operational transparency",
        "Reduced dependency on a single operator",
        "Faster onboarding of new sellers",
        "Better alignment between internal operations and CRM data"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
        alt: "Operations workflow overview"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        alt: "Internal dashboard analytics"
      },
      {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        alt: "Ops team planning"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        alt: "Platform development"
      }
    ]
  },
  // Freelance (Priority 3)
  {
    id: "freelance-1",
    title: "Now App",
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
        summary: "Now App is a conceptual UX/UI case study designed to help users decide what to watch in under one minute. The work focuses on reducing decision fatigue through research-led, minimal decision steps and was never built or launched."
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
        "Framed a clear problem statement around decision confidence",
        "Showed how fewer, curated options can increase confidence",
        "Reinforced the value of research depth before ideation",
        "Documented a repeatable process for future product work",
        "Positioned the case study as a learning exercise, not a production product"
      ],
      chapters: [
        {
          label: "Act 01",
          title: "A concept born from decision fatigue",
          paragraphs: [
            "Now App started from a familiar streaming behavior: users spend more time choosing than watching.",
            "The goal of the case study was to design a focused path that helps people decide in under one minute."
          ],
          highlights: [
            "High choice overload in streaming experiences",
            "Low confidence in generic recommendation feeds",
            "Strong need for a clear starting point"
          ]
        },
        {
          label: "Act 02",
          title: "Research before interface",
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
          title: "Designing a narrow, guided decision path",
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
          title: "Turning insights into a testable concept",
          paragraphs: [
            "Because this was not a launched product, the work emphasized hypothesis clarity and validation criteria for a future build phase.",
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
          title: "Outcome as process maturity",
          paragraphs: [
            "The strongest result was a repeatable approach: research depth first, concept clarity second, interface expression last.",
            "Now App remains a strategic case study that demonstrates structured product thinking rather than shipping output."
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
  {
    id: "freelance-2",
    title: "Freelance 2",
    subtitle: "Project description placeholder",
    category: "Freelance",
    type: "App Design",
    role: "Product Designer",
    duration: "2 Months",
    tools: ["Figma", "React Native"],
    tags: ["Mobile", "UX"],
    thumbnailGradient: "from-zinc-900 to-zinc-800",
    narrative: {
      introduction: {
        company: "Independent Client",
        industry: "Consumer App",
        year: "2021",
        summary: "Designed a mobile-first product concept focused on habit tracking and lightweight coaching. The project balanced playful visual design with a clear onboarding flow."
      },
      role: {
        title: "Product Designer",
        responsibilities: [
          "Defined onboarding, core flows, and UI patterns",
          "Produced high-fidelity prototypes for stakeholder demos",
          "Collaborated with engineering on React Native handoff"
        ]
      },
      challenge: {
        summary: "The product needed to feel motivating without adding friction.",
        painPoints: [
          "Drop-offs during onboarding",
          "Limited clarity on daily actions",
          "Overly dense tracking screens"
        ],
        constraints: [
          "Small team with limited development resources",
          "Need to ship an MVP quickly",
          "Multiple feature ideas with no prioritization"
        ],
        insights: [
          "Short onboarding increases first-week retention",
          "Daily prompts outperform long forms",
          "Clear progress visualization improves engagement"
        ]
      },
      approach: [
        "Streamlined onboarding to a three-step flow",
        "Built a simple daily check-in and streak mechanic",
        "Used visual progress cards to reinforce momentum",
        "Defined an MVP roadmap with phased feature rollout"
      ],
      outcome: [
        "Stronger prototype clarity for fundraising demos",
        "Faster iteration cycle for MVP scope",
        "Foundation for a cohesive mobile design system"
      ]
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1559027615-5c6a1a234d8b?auto=format&fit=crop&w=1400&q=80",
        alt: "Mobile app experience"
      },
      {
        src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
        alt: "Mobile UI exploration"
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
        alt: "Prototype review"
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
        alt: "Engagement metrics sketch"
      }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "8020REI",
    role: "Lead Product Designer",
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
