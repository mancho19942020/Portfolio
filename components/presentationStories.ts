export type PresentationDecision = {
  title: string;
  detail: string;
  tradeoff?: string;
};

export type PresentationStory = {
  coverLines?: string[];
  stakes: string;
  successDefinition: string;
  intendedMetrics: string[];
  evidence: string[];
  insight: string;
  process: Array<{ title: string; detail: string }>;
  decisions: PresentationDecision[];
  collaboration: string[];
  observed: string[];
  stillToValidate: string[];
};

export const PRESENTATION_STORIES: Record<string, PresentationStory> = {
  phoenix: {
    stakes: '8020IQ was growing from one product into a family of brands. Separate components were making the same design and development work repeat across products.',
    successDefinition: 'Create one shared design and code system that lets each brand feel distinct without rebuilding common interface parts.',
    intendedMetrics: [
      'Reduce component drift and duplicate files',
      'Make brand setup a small, repeatable code change',
      'Check adoption and accessibility in code',
    ],
    evidence: [
      'In meetings with clients and internal teams, design and frontend heard the same need. New brands had to launch quickly without losing consistency.',
      'A code inventory found 1,001 places where products imported components, along with repeated app-specific copies.',
      'Most brand differences could be handled through a small set of visual values instead of separate component libraries.',
    ],
    insight: 'The products needed one shared core with a small brand layer on top.',
    process: [
      { title: 'Understand the need', detail: 'Meet with clients and teams to learn what each brand and product needed.' },
      { title: 'Map the products', detail: 'Find repeated components, visual rules, and local copies.' },
      { title: 'Define the shared core', detail: 'Keep common behavior, states, and accessibility rules in one place.' },
      { title: 'Build together in code', detail: 'Design and frontend shape the real components in a working catalog.' },
      { title: 'Measure adoption', detail: 'Track what products use, what remains duplicated, and what needs attention.' },
    ],
    decisions: [
      { title: 'One source for shared behavior', detail: 'The catalog and the products use the same component files.', tradeoff: 'Existing local copies had to be reviewed and retired over time.' },
      { title: 'Nine visual values per brand', detail: 'Brand identity changes through a small token layer instead of a separate library.', tradeoff: 'Each brand stays expressive within a common product structure.' },
      { title: 'A working space for design and frontend', detail: 'The team designs, reviews, and tests the components in code.', tradeoff: 'Coded states and accessibility checks become part of the design process.' },
    ],
    collaboration: [
      'Jhon Fredy Berrio, Lead Front-end Developer, and I built Phoenix together through regular working sessions.',
      'We spoke with clients and internal teams to understand the business needs behind the new brands.',
      'We followed the same method. We understood the need, shaped the system together, and tested decisions in working code.',
    ],
    observed: [
      '4 brands and 2 themes run from one foundation',
      '124 design tokens',
      '82 of 82 catalog entries rendered',
      '64 duplicate component files retired',
    ],
    stillToValidate: [
      'Time saved when launching the next brand',
      'Adoption depth across every product team',
      'Long-term reduction in design and code drift',
    ],
  },
  '8020-roof': {
    coverLines: ['New Vertical', 'New Methodology', 'New Technology'],
    stakes: '8020REI was launching a roofing business, but property selection and campaign delivery still depended on spreadsheets and manual work.',
    successDefinition: 'Turn that manual service into a self-service platform that could support more roofing clients without adding a new person for every account.',
    intendedMetrics: [
      'Retire the operating spreadsheet',
      'Bring pilot clients into a self-service workflow',
      'Keep every client account isolated and auditable',
    ],
    evidence: [
      'Two pilot clients were receiving monthly property lists through manual Excel exports.',
      'One person assembled, scored, and divided each file by campaign channel.',
      'The company already had more than 100 million property records, but roofing clients did not have a product they could use directly.',
    ],
    insight: 'The product needed to turn roofing criteria into a repeatable marketing campaign instead of copying the spreadsheet into a screen.',
    process: [
      { title: 'Find candidates', detail: 'Start from the property universe and narrow the market.' },
      { title: 'Define the Buy Box', detail: 'Translate an investor thesis into reusable rules.' },
      { title: 'Package the list', detail: 'Make the selected opportunity clear and reviewable.' },
      { title: 'Deliver the campaign', detail: 'Connect the list to direct mail and cold-call operations.' },
      { title: 'Learn from pilots', detail: 'Use live clients to refine the product and the monthly workflow.' },
    ],
    decisions: [
      { title: 'Pipeline over feature collection', detail: 'Every screen supports the same journey from criteria to outreach.', tradeoff: 'Lower-priority tools waited until the core path was dependable.' },
      { title: 'Reusable Buy Boxes', detail: 'Teams can save an investment model and apply it repeatedly.', tradeoff: 'The interface had to make complex rules understandable.' },
      { title: 'Tenant isolation from day one', detail: 'Each client sees its own data, settings, and campaign activity.', tradeoff: 'Foundational access work came before visible polish.' },
    ],
    collaboration: [
      'A three-person builder team combined product design, engineering, and business operations.',
      'I turned the operating method into a product model, designed the workflow, and worked close to implementation.',
      'Pilot feedback connected product decisions to the reality of campaign delivery.',
    ],
    observed: [
      '2 pilot clients live',
      'The operating spreadsheet retired within 6 weeks',
      'A five-stage pipeline replaced monthly Excel delivery',
      'Average monthly output of about 10K direct-mail, 5K cold-call, and 2K SMS records',
    ],
    stillToValidate: [
      'Retention across a larger client group',
      'Cycle-time improvement with repeated use',
      'Unit economics as campaign volume grows',
    ],
  },
  '8020-dm-campaign': {
    stakes: 'Real-estate teams could launch outreach, but fragmented configuration made campaign performance and profitability hard to understand.',
    successDefinition: 'Create one campaign flow that shows users what will happen, what it will cost, and how the campaign is performing.',
    intendedMetrics: [
      'Increase active usage by 50%',
      'Earn positive customer satisfaction',
      'Make campaign performance and profitability visible',
    ],
    evidence: [
      'The workflow served two distinct trigger models, live seller signals and scheduled list delivery.',
      'Configuration choices were spread across the experience and difficult to review.',
      'Operational and provider constraints affected what the product could promise.',
    ],
    insight: 'A campaign builder is most useful when every choice is visible, reviewable, and connected to an expected business outcome.',
    process: [
      { title: 'Map the models', detail: 'Separate RapidResponse from SmartDrop without creating two products.' },
      { title: 'Order the decisions', detail: 'Sequence targeting, timing, creative, and delivery.' },
      { title: 'Make it auditable', detail: 'Give users a clear summary before launch.' },
      { title: 'Connect the economics', detail: 'Show performance and provider cost in the same operating view.' },
    ],
    decisions: [
      { title: 'One guided structure', detail: 'Both trigger models share the same sequence of decisions.', tradeoff: 'Model-specific choices appear only when they matter.' },
      { title: 'Review before launch', detail: 'A clear summary reduces uncertainty and catches configuration mistakes.', tradeoff: 'The flow adds a deliberate checkpoint before execution.' },
      { title: 'Profitability in the product', detail: 'Campaign health includes provider costs and performance.', tradeoff: 'The team needed reliable operational data, not only interface changes.' },
    ],
    collaboration: [
      'I moved from design into acting product management for the campaign experience.',
      'The work connected users, engineering, campaign providers, and profitability constraints.',
      'Early client conversations shaped the workflow before broader expansion.',
    ],
    observed: [
      '12 active clients in the early release',
      'Teams reported faster outreach and less operational friction',
      'Two trigger models supported in one campaign experience',
    ],
    stillToValidate: [
      'The 50% active-usage target',
      'Measured customer satisfaction over time',
      'Churn and retention impact',
    ],
  },
  '8020-buybox': {
    stakes: 'The rules editor captured the business logic behind each investor strategy, but configuration errors and support escalations were creating churn risk.',
    successDefinition: 'Help teams express an investment thesis with fewer errors, less support, and a clearer view of the opportunity it would produce.',
    intendedMetrics: [
      '20% faster Buy Box setup',
      '80% fewer configuration errors',
      '50% fewer related support tickets',
    ],
    evidence: [
      'Customer-success escalations showed that the existing rules were difficult to understand and maintain.',
      'The same configuration had to balance market opportunity, marketing capacity, and investor goals.',
      'Changes had to remain compatible with existing Buy Boxes and platform performance limits.',
    ],
    insight: 'Users needed to see what a rule meant for the business, not only whether the syntax was valid.',
    process: [
      { title: 'Trace the failures', detail: 'Use churn feedback and support cases to find recurring confusion.' },
      { title: 'Model the logic', detail: 'Group rules around how investors describe an opportunity.' },
      { title: 'Show the consequence', detail: 'Preview volume and balance while the user edits.' },
      { title: 'Protect the system', detail: 'Keep accessibility, compatibility, and performance visible.' },
    ],
    decisions: [
      { title: 'Modular rule groups', detail: 'The editor follows the investor mental model instead of exposing one long form.', tradeoff: 'More structure required careful migration of existing setups.' },
      { title: 'Live opportunity feedback', detail: 'Volume and balance react to the current configuration.', tradeoff: 'Useful feedback depends on fast, dependable calculations.' },
      { title: 'Warnings in context', detail: 'Accessible guidance appears next to risky or conflicting choices.', tradeoff: 'Warnings had to help without blocking expert users.' },
    ],
    collaboration: [
      'Customer success brought the churn and support evidence into the product conversation.',
      'I translated that evidence into the mental model, interaction structure, and success criteria.',
      'Engineering constraints shaped backward compatibility and live-feedback behavior.',
    ],
    observed: [
      'A complete design direction and measurable release criteria were defined',
      'The proposed experience preserved existing configurations',
      'No verified post-release performance result is available yet',
    ],
    stillToValidate: [
      'Setup-time improvement',
      'Configuration error reduction',
      'Support-ticket reduction after release',
    ],
  },
  '8020-property-list': {
    stakes: 'Property teams were leaving the product to evaluate opportunities because the list and detail views did not tell a clear investment story.',
    successDefinition: 'Keep evaluation inside the product by making the most important evidence easier to scan, compare, and trust.',
    intendedMetrics: [
      'Increase property use, views, and filters',
      'Improve post-interaction satisfaction',
      'Reduce bugs, claims, and recurring issues',
    ],
    evidence: [
      'The list needed to support exploration across many properties.',
      'The detail view needed to guide a deeper decision without repeating the list.',
      'Score, distress, ownership history, and Buy Box fit carried different weight at each stage.',
    ],
    insight: 'The list should support comparison. The detail view should explain why one property deserves attention.',
    process: [
      { title: 'Map the decision', detail: 'Identify what users need before and after opening a property.' },
      { title: 'Prioritize signals', detail: 'Rank score, distress, history, and Buy Box fit.' },
      { title: 'Separate the jobs', detail: 'Use the list for exploration and the detail view for a clear sequence of information.' },
      { title: 'Measure behavior', detail: 'Track use, views, filters, satisfaction, and product issues.' },
    ],
    decisions: [
      { title: 'Two different information rhythms', detail: 'Dense comparison in the list, guided evidence in the detail view.', tradeoff: 'Not every field appears in both places.' },
      { title: 'Investment signals first', detail: 'The hierarchy reflects the decision users are trying to make.', tradeoff: 'Secondary property data moves behind the main story.' },
      { title: 'Filters as part of exploration', detail: 'Filters stay close to the list and its visible results.', tradeoff: 'The interface favors quick iteration over a separate advanced search.' },
    ],
    collaboration: [
      'I connected user behavior and support evidence to a new information hierarchy.',
      'Product and engineering helped define the available signals and dependable states.',
      'The release was evaluated through product usage, satisfaction, and issue volume.',
    ],
    observed: [
      '50% increase in property usage',
      'More than 70% positive post-interaction satisfaction',
      'About 80% fewer bugs, claims, and related issues',
      'Views and filters used in nearly 60% of sessions',
    ],
    stillToValidate: [
      'Whether deeper property use improves downstream investment decisions',
      'Which signals contribute most to confident selection',
    ],
  },
  '8020-metrics-hub': {
    stakes: 'Business answers were scattered across six systems, which made operational problems slow to spot and hard for nontechnical teams to investigate.',
    successDefinition: 'Give teams a shared, self-service view of product and operational health without adding another paid software platform.',
    intendedMetrics: [
      'Reduce ad hoc data pulls',
      'Make operational failures visible earlier',
      'Create one trusted language for business health',
    ],
    evidence: [
      'Six systems held different parts of the operating story.',
      'Important failures could look like a product problem, a provider problem, or a data problem.',
      'Nontechnical teams needed answers without writing queries or waiting for an analyst.',
    ],
    insight: 'A useful dashboard begins with a business question, then makes ownership and the next action obvious.',
    process: [
      { title: 'Start with the question', detail: 'Define the decision each view must support.' },
      { title: 'Trace the source', detail: 'Map owners, access risk, and gaps across six systems.' },
      { title: 'Create shared widgets', detail: 'Use one visual language for recurring questions.' },
      { title: 'Monitor the signal', detail: 'Make unusual changes visible before they become bigger losses.' },
      { title: 'Connect to action', detail: 'Show who needs to respond and what to inspect next.' },
    ],
    decisions: [
      { title: 'Question-led navigation', detail: 'Views follow the work people need to do instead of the database structure.', tradeoff: 'Some data appears in more than one business context.' },
      { title: 'Shared widget grammar', detail: 'Teams learn a consistent way to read health and change.', tradeoff: 'Special cases had to fit a limited visual vocabulary.' },
      { title: 'Build on existing tools', detail: 'The hub used current infrastructure with no new software spend.', tradeoff: 'The design worked within the limits of those tools.' },
    ],
    collaboration: [
      'I mapped questions with business teams and traced each answer to its source and owner.',
      'Engineering and operations helped verify data behavior and define actionable alerts.',
      'The product became a shared place to discuss health, not only a reporting surface.',
    ],
    observed: [
      '6 systems connected',
      '91 widgets across 11 business areas',
      'A mail-provider issue was found in month one, then fixed to restore volume and revenue',
      'Properties API activity increased 3x after five blockers were resolved',
    ],
    stillToValidate: [
      'Reduction in recurring ad hoc requests',
      'Time from anomaly to resolution across teams',
      'Long-term adoption by nontechnical users',
    ],
  },
  'habi-funnels': {
    stakes: 'A long qualification flow was asking for too much effort before users could understand the value of continuing.',
    successDefinition: 'Increase qualified conversion while protecting lead quality and making the experience easier to finish on mobile.',
    intendedMetrics: [
      'Increase qualified conversion',
      'Reduce abandonment and time to complete',
      'Protect the quality of submitted leads',
    ],
    evidence: [
      'Behavioral analytics showed where users were leaving the eleven-screen flow.',
      'Not every question needed to appear before the user understood the next step.',
      'The work had to support Colombia and Mexico with a remote product and marketing team.',
    ],
    insight: 'Removing questions alone would not solve the problem. The sequence had to earn each next piece of information.',
    process: [
      { title: 'Find the exits', detail: 'Use behavioral data to locate friction and hesitation.' },
      { title: 'Reorder the value', detail: 'Show why the next answer matters before asking for it.' },
      { title: 'Reduce the path', detail: 'Move from eleven screens to seven with progressive disclosure.' },
      { title: 'Test the change', detail: 'Compare the new sequence while monitoring lead quality.' },
    ],
    decisions: [
      { title: 'Seven purposeful screens', detail: 'The flow keeps only the questions needed for qualification.', tradeoff: 'Secondary information moves later in the journey.' },
      { title: 'Progressive disclosure', detail: 'Complexity appears only after the user has enough context.', tradeoff: 'The team had to define a dependable sequence for every path.' },
      { title: 'Conversion with a quality guardrail', detail: 'The test did not treat more submissions as success on their own.', tradeoff: 'Marketing and product metrics had to be read together.' },
    ],
    collaboration: [
      'I worked with product and marketing across Colombia and Mexico.',
      'Behavioral evidence shaped the sequence, while business partners protected lead quality.',
      'The redesigned funnel was evaluated through an A/B test against the existing experience.',
    ],
    observed: [
      'The flow was reduced from 11 screens to 7',
      'Qualified conversion increased 30%',
    ],
    stillToValidate: [
      'A documented baseline, sample size, and test window',
      'Long-term lead quality after the conversion lift',
      'Sustained mobile completion improvement',
    ],
  },
  'freelance-1': {
    stakes: 'Streaming choice can become a long comparison task when people want a good movie but do not want to browse every catalog.',
    successDefinition: 'Explore whether a short, guided conversation could help someone choose a movie in about 30 seconds.',
    intendedMetrics: [
      'Time to a confident decision',
      'Recommendation confidence',
      'Post-selection satisfaction',
    ],
    evidence: [
      'Qualitative conversations explored how people describe mood, company, and viewing context.',
      'A competitor review showed how much effort existing discovery patterns place on browsing.',
      'The concept needed very few branches to keep the decision fast.',
    ],
    insight: 'People often describe the moment they want before they can name the movie they want.',
    process: [
      { title: 'Listen for context', detail: 'Learn how people describe mood, company, and available time.' },
      { title: 'Review the market', detail: 'Compare browsing, filters, lists, and recommendation patterns.' },
      { title: 'Reduce the branches', detail: 'Keep only the questions that materially change a recommendation.' },
      { title: 'Prototype the rhythm', detail: 'Use progressive disclosure to make the conversation feel quick.' },
      { title: 'Plan validation', detail: 'Measure time, confidence, and satisfaction with real users.' },
    ],
    decisions: [
      { title: 'Start with the viewing moment', detail: 'The first questions describe context instead of genre taxonomy.', tradeoff: 'The concept depends on a useful mapping from context to titles.' },
      { title: 'Minimal branching', detail: 'Each answer changes the next prompt or removes options.', tradeoff: 'The flow avoids expert controls in favor of speed.' },
      { title: 'One recommendation at a time', detail: 'The interface creates a decision instead of another catalog.', tradeoff: 'Users need an easy way to reject and refine the suggestion.' },
    ],
    collaboration: [
      'This was a one-week personal concept, so I owned research, product framing, interaction design, and prototyping.',
      'The work produced a testable hypothesis and validation plan rather than a launched product.',
    ],
    observed: [
      'A focused one-week concept and interactive direction were completed',
      'No launch or product-performance metric is available yet',
    ],
    stillToValidate: [
      'Whether people can decide in about 30 seconds',
      'Confidence in the recommendation',
      'Satisfaction after watching the selected movie',
    ],
  },
};
