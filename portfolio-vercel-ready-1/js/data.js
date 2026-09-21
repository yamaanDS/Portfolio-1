/* ============================================================
   SITE DATA — this is the only file you need to edit for content.
   Everything on the site is generated from this file.

   HOW IMAGES/FILES WORK:
   - Put image files in  assets/images/...
   - Put PDFs/reports in  assets/files/...
   - Then reference them here with a relative path, e.g.
     "assets/images/profile/me.jpg"
   - If a path doesn't exist, the site falls back to a clean
     placeholder automatically — nothing breaks.
   ============================================================ */

const SITE = {
  name: "Samieyul Islam Yamaan",
  initials: "YN",
  role: "Industrial & Production Engineering Student | Supply Chain & Operations | Logistics | Manufacturing | Data Analytics",
  tagline:
    "Final year IPE student at RUET with a strong interest in Supply Chain, Operations, Planning, Logistics, and Business with experience in management and Leadership. Completed industrial training at Q Collection. Proven campus leadership as brand ambassador for Nestlé and Perfetti Van Melle, and as Media & Marketing Secretary of RUET IPE Club. Seeking an entry-level role in Supply Chain, Operations, or Logistics.",
  location: "Dhaka, Bangladesh",
  university: "Rajshahi University of Engineering & Technology (RUET)",
  department: "Industrial & Production Engineering",
  email: "sameyulyamaan@gmail.com",
profileImage: "assets/images/profile/profile.png",
 cvFile: "assets/files/cv/CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/samieyul-islam-yamaan/",
    scholar: "https://scholar.google.com/citations?user=yourid",
    github: "https://github.com/yamaanDS",
    researchgate: "https://researchgate.net/profile/yourprofile",
    email: "sameyulyamaan@gmail.com",
  },

  about: {
    bio: "Final-year IPE student at RUET focused on Supply Chain, Operations, and Logistics, with hands-on experience from industrial training at SQ Hues – Q Collection and campus leadership roles with Nestlé, Perfetti Van Melle, and the RUET IPE Club. Currently exploring closed-loop supply chain optimization as an early research direction, alongside project work in inventory modeling, forecasting, and dashboarding. Looking to bring this mix of analytical and operational experience into an entry-level Supply Chain or Logistics role",
    academicInterests: [
      "Supply Chain Management",
      "Operations Management",
      "Manufacturing Systems",
      "Production Planning",
      "Logistics & Transportation",
      "Data Analytics",
      "Optimization",
      "Sustainable Supply Chains",
    ],
    researchInterests: [
      "Sustainable Supply Chains",
      "Optimization",
      "Data Analytics in Industry",
    ],
    careerGoals:
      "To start my career in an entry-level Supply Chain or Operations role, where I can apply my academic training and grow as a professional.",
    philosophy:
      "I believe good engineering starts with understanding the system, not just solving the equation.'",
  },

  // Small stats strip under About. Values are computed automatically
  // from the arrays below (see js/main.js) EXCEPT "activitiesLabel"
  // fields you set here.
  stats: {
    educationLabel: "RUET · IPE",
  },
};

/* ---------------- EDUCATION ---------------- */
const EDUCATION = [
  {
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    degree: "B.Sc. in Industrial & Production Engineering",
    start: "2022",
    end: "Present",
    cgpa: "3.62/4.00",
    location: "Rajshahi, Bangladesh",
    logo: "assets/images/logos/ruet.png",
    coursework: [
      "Engineering Economics",
      "Supply Chain Management",
      "Operations Research",
      "Operation Management",
      "Production Process 1 & 2",
      "Machine Tool Technology",
      "Quality Control & Management",
      "Ergonomics & Safety Engineering",
      "Management & Information System",
    ],
    description:
      "All the coursework and projects are focused on industrial engineering, supply chain, operations, and manufacturing systems. I have also been involved in research projects related to supply chain optimization and data analytics.",
  },
  // Add more entries here, e.g. your secondary/higher-secondary education:
  // {
  //   institution: "Your School Name",
  //   degree: "Higher Secondary Certificate",
  //   start: "2019", end: "2021",
  //   gpa: "GPA 5.00/5.00", location: "City, Country",
  //   logo: "", coursework: [], description: ""
  // },
];

/* ---------------- EXPERIENCE ---------------- */
const EXPERIENCE = [
  {
    title: "Industrial Trainee",
    organization: "SQ Hues – Q Collection | SQ Group ",
    type: "Attachment",
    start: "Feb 2026",
    end: "March 2026",
    location: "Gazipur, Bangladesh",
    logo: "assets/images/logos/sqgroup.png",
    responsibilities: [
      "Mapped supply chain processes to identify production bottlenecks.",
      "Supported quality inspections and AQL compliance.Describe another responsibility.",
      "Analysed inefficiencies and suggested data-driven improvements.",
    ],
    achievements: [
      "Contributed to data-driven production and quality improvements. Identified key production bottlenecks and improvement areas.",
    ],
    skills: ["Quality Control", "Excel", "Production Planning"],
    images: [
      "assets/images/activities/Attachment.jpeg",
    ],
  },
  // Add more experience entries in the same shape.
];

/* ---------------- ACTIVITIES ---------------- */
const ACTIVITIES = [
  {
    title: "Elevate Campus Ambassador",
    organization: "Perfetti Van Melle",
    role: "Campus Ambassador",
    date: "2025-2026",
    location: "RUET, Rajshahi",
    detailDescription:
      "Represent PVM brand portfolio across RUET campus, driving product awareness among 500+ students through on-ground activations and digital promotions and Organizing Skill oriented events with PVM.",
    skills: ["Microsoft Excel", "Leadership", "project management", "communication"],
    images: [
      "assets/images/activities/Pvm-1.jpeg",
      "assets/images/activities/Pvm-2.jpeg",
    ],
    certificate: "assets/images/activities/Pvm-3.jpeg",
    link: "",
  },
  {
    title: "Nestle Youth Influencer",
    organization: "Nestle Bangladesh",
    role: "Youth Influencer",
    date: "2026",
    location: "RUET, Rajshahi",
    detailDescription:
      "Selected as official Nestlé campus representative at RUET; Facilitating collaboration between Nestlé Bangladesh and RUET through campus engagement initiatives.",
    skills: ["Leadership", "Coordination", "Communication"],
    images: ["assets/images/activities/Nestle.jpeg"],
    certificate: "",
    link: "",
  },
   {
    title: "Nestle NesRiser",
    organization: "Nestle Bangladesh",
    role: "Supply Chain Mentee",
    date: "2026",
    detailDescription:
      "learned directly from experienced Nestlé professionals about real-world supply chain operations, including planning, procurement, logistics, inventory management, and end-to-end supply chain processes.",
    skills: ["Supply Chain Management", "Planning", "OPERATIONS", "Logistics", "Inventory Management"],
    images: ["assets/images/activities/scm.png"],
    certificate: "",
    link: "",
  },
  {
    title: "Joint Secretary (Admin)",
    organization: "RUET IPE Club",
    date: "2026",
    detailDescription:
      "Responsible for managing administrative tasks and coordinating club activities.",
    skills: ["Team Management", "Leadership", "Communication", "Event Management", "Planning"],
    images: ["assets/images/activities/ipe.png"],
    certificate: "",
    link: "",
  },
  // Add more activities in the same shape — the Activities section
  // renders them automatically as a scrolling showcase, in order.
];

/* ---------------- SKILLS ----------------
   "key" must be unique — it's used to link a skill to projects
   (see PROJECTS below, "skills" array must use these same keys).
*/
const SKILL_CATEGORIES = [
  {
    category: "Technical Skills",
    skills: [
      { key: "python", name: "Python" },
      { key: "solidworks", name: "SolidWorks" },
      { key: "excel", name: "Excel" },
      { key: "powerbi", name: "Power BI" },
    ],
  },
  {
    category: "Digital & Creative",
    skills: [
      { key: "videoediting", name: "Video Editing" },
      { key: "graphicdesign", name: "Graphic Design" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { key: "leadership", name: "Leadership" },
      { key: "communication", name: "Communication" },
      { key: "teamwork", name: "Teamwork" },
      { key: "eventmgmt", name: "Event Management" },
      { key: "problemsolving", name: "Problem Solving" },
      { key: "presentation", name: "Presentation" },
    ],
  },
];

/* ---------------- PROJECTS ----------------
   "skills" array uses the "key" values defined in SKILL_CATEGORIES
   above — that's what links a skill card to its projects.
*/
const PROJECTS = [
  {
    title: "ROOT CAUSE ANALYSIS OF FABRIC REJECTION IN CIRCULAR KNITTING SECTION TO REDUCE PRODUCTION WASTAGE",
    category: "Quality Control & Management",
    date: "2026",
    description: "Conducted root cause analysis on circular knitting fabric rejection during an industrial attachment at SQ Hues Limited.",
    problem: "High fabric rejection rates and production wastage in circular knitting, primarily driven by Spandex Cotton Mixing defects.",
    contribution: "Collected operational data and applied Lean & Quality engineering tools to identify key defect drivers and formulate practical preventive measures.",
    tools: ["Pareto Chart", "Fishbone Diagram", "5 Why Analysis", "Kaizen"],
    methodology: "Data-driven quality control using Pareto analysis for defect prioritization, followed by Fishbone and 5 Why analysis to determine root causes.",
    results: "Identified Spandex Cotton Mixing as the primary defect driver and proposed targeted interventions for yarn feeding, maintenance, and quality control.",
    image: "assets/images/projects/sq.png",
    report: "assets/files/reports/SQ_HUES_Attachment_Project.pdf",
    github: "https://github.com/yourusername/scm-optimization",
    demo: "",
    skills: ["python", "or", "scm", "optimization"],
  },
    {
    title: "STUDY OF GARMENTS PRODUCTION LINE & METHOD TO IMPROVE EFFICIENCY",
    category: "Line Balanmcing & Work Study",
    date: "2025",
    description: "Analyzed a 20-workstation garment production line to identify bottlenecks, idle time, and non-productive activities for performance improvement.",
    problem: "High cycle times, workstation imbalance, blocking/starving, and non-productive time were limiting overall production efficiency.",
    contribution: "Conducted time studies and applied Lean and data-driven techniques to optimize line balancing, helper allocation, buffer placement, and NPT reduction",
    tools: ["Python", "Random Forest", "XGBoost", "ARIMA", "Prophet", "LSTM", "Fishbone Diagram", "5 Why Analysis", "Kaizen"],
    methodology: "Calculated SMV, Basic Time, Capacity, and Line Efficiency, followed by Python-based helper allocation, intelligent buffer optimization, and root cause analysis of NPT.",
    results: "Reduced cycle time from 229.32s to 210.38s, utilized 378.89s of idle time, and achieved an 8.3% efficiency improvement.",
    image: "assets/images/projects/line1.png",
    report: "assets/files/reports/LINE_BALANCE.png",
    github: "https://github.com/yourusername/scm-optimization",
    demo: "",
    skills: ["python", "or", "scm", "optimization"],
  },
   {
    title: "AI-Based PPE Detection System - An advanced AI-based Personal Protective Equipment (PPE) detection tool",
    category: "Product Design",
    date: "2026",
    description: "Developed a real-time AI-based PPE detection system for monitoring workplace safety compliance in industrial environments",
    problem: "Manual PPE compliance monitoring is difficult to maintain continuously, creating risks of workers operating without required safety equipment.",
    contribution: "Designed and developed a smart prototype integrating AI-based object detection with Raspberry Pi 5, camera-based monitoring, and automated visual and audio alerts.Conducted time studies and applied Lean and data-driven techniques to optimize line balancing, helper allocation, buffer placement, and NPT reduction",
    tools: ["Python", "AI/Computer Vision", "YOLO", "Raspberry Pi 5", "Camera Module", "SOLIDWORKS"],
    methodology: "Analyzed customer and safety requirements, designed the product concept and 3D components, developed an AI-based PPE detection model, and integrated real-time detection with LED indicators and a buzzer for non-compliance alerts.",
    results: "Developed a functional prototype capable of real-time PPE monitoring, providing green signals for compliance and red signal with buzzer alerts when required PPE is missing",
    image: "assets/images/projects/pd.png",
    report: "assets/files/reports/LINE_BALANCE.png",
    github: "https://github.com/yourusername/scm-optimization",
    demo: "",
    skills: ["python", "ai", "computer-vision", "yolo", "raspberry-pi", "solidworks", "product-design"],
  },
  {
    title: "Customer Churn Analysis Dashboard",
    category: "Data Analytics",
    date: "2026",
    description: "Built an interactive dashboard to analyze customer churn patterns, churn reasons, demographics, consumption behavior, and competitor-related factors.",
    problem: "The organization needed a clear way to identify major customer churn drivers and understand which customer segments were most likely to leave.",
    contribution: "Designed and developed an interactive dashboard that transformed customer data into meaningful KPIs and visual insights, including churn rate, churn reasons, demographic analysis, consumption-based churn, and competitor analysis.",
    tools: ["Power BI", "Excel"],
    methodology: "Cleaned and organized customer data in Excel, calculated key churn metrics, segmented customers by demographic and usage characteristics, and developed interactive Power BI visualizations to identify churn patterns and major contributing factors.",
    results: "Analyzed 6,687 customers and identified 1,796 churned customers, resulting in an overall churn rate of 26.86%. The dashboard highlighted key churn reasons and customer segments requiring attention.",
    image: "assets/images/projects/churn.png",
    report: "",
    github: "https://github.com/yamaanDS/customer-churn-analysis",
    demo: "",
    skills: [ "excel"],
  },
   {
    title: "Workforce Optimization Using Linear Programming",
    category: "Industrial Engineering",
    date: "2026",
    description: "Developed a Linear Programming model to determine the minimum number of workers required to meet varying daily workforce demand while following a 5-consecutive-day work schedule.",
    problem: "A company needs to determine the minimum number of workers to hire when daily workforce demand varies throughout the week and each worker must work 5 consecutive days.",
    contribution: "Formulated the workforce scheduling problem as a Linear Programming model, defined decision variables and demand constraints, and implemented the optimization model using Microsoft Excel Solver to minimize the total number of workers required.",
    tools: ["Excel", "Excel Solver"],
    methodology: "Defined daily worker requirements and decision variables, formulated demand coverage constraints for each day, applied non-negativity constraints, and used Excel Solver to minimize the total workforce while satisfying daily demand.",
    results: "Determined the minimum workforce required to satisfy the demand for every day of the week while maintaining the required 5-consecutive-day work schedule.",
    image: "assets/images/projects/solver.png",
    report: "",
    github: "https://github.com/yamaanDS/Workforce-Optimization-Using-Linear-Programming",
    demo: "",
    skills:  ["excel", "optimization", "linearprogramming", "operationsresearch", "workforceplanning"],
  },
    {
    title: "Supply Chain Analysis Dashboard",
    category: "Data Analytics",
    date: "2026",
    description: "Developed an interactive Excel dashboard to analyze supply chain performance, track key KPIs, and visualize product sales, revenue, manufacturing costs, shipping efficiency, and quality metrics for data-driven decision-making",
    problem: "The organization needed a clear way to monitor supply chain performance, understand product sales and revenue, and identify key factors affecting manufacturing, inventory, transportation, and product quality.",
    contribution: "Designed and developed an interactive Supply Chain Dashboard that transformed supply chain data into meaningful KPIs and visual insights, including revenue, product sales, manufacturing costs, lead times, shipping costs, defect rates, and product-wise performance.",
    tools: ["Excel"],
    methodology: "Cleaned and organized supply chain data in Excel, created PivotTables to calculate key performance indicators, analyzed product, supplier, and transportation performance, and developed interactive Excel dashboard visualizations to identify sales trends, operational costs, and potential areas for improvement.",
    results: "Analyzed 100 supply chain records and summarized key operational metrics, including total revenue of 577,604.82, 46,099 products sold, and 56,784 units of production volume. The dashboard highlighted skincare as the highest-selling product category, with an average lead time of 15.96 days, average shipping cost of 5.55, and average defect rate of 2.28%, providing insights into supply chain efficiency and product performance.",
    image: "assets/images/projects/Supply.png",
    report: "",
    github: "https://github.com/yamaanDS/Supply-Chain-Analysis-Dashboard.git",
    demo: "",
    skills: ["excel"],
  },
     {
    title: "Smart Automatic Bird Feeder with Sensor Controlled Feed Gate and Automatic Tray Clearing SystemProduction Line Balancing Dashboard",
    category: "Measurement & Instrumentation",
    date: "2026",
    description: "Developed a low-cost, offline automated bird-feeding and tray-cleaning system using Arduino Nano, ultrasonic sensing, and servo motors, featuring controlled feed dispensing and automatic waste removal at an estimated cost of BDT 1,870.",
    problem: "Manual bird feeding and tray cleaning require regular effort and can lead to leftover feed and waste accumulation.",
    contribution: "Developed a low-cost automated bird-feeding and tray-cleaning system as part of the Measurement & Instrumentation Lab at RUET.",
    tools: ["Arduino IDE", "SolidWorks", "Proteus", "Embedded C/C++"],
    methodology: "Integrated an ultrasonic sensor, Arduino Nano, and three servo motors to automate two-stage feed dispensing and independent tray cleaning.",
    results: "Developed an offline automated prototype with an estimated build cost of approximately BDT 1,870, gaining hands-on experience in embedded systems, instrumentation, and system integration.",
    image: "assets/images/projects/ai.jpg",
    report: "",
    github: "",
    demo: "",
    skills: ["Mechanical Design", "Control Systems", "solidworks", "product-design ", "Arduino", "Embedded Systems"],
  },
  {
    title: "FMCG MIS Dashboard",
    category: "Excel",
    date: "2026",
    description: "Developed an interactive Excel FMCG MIS Dashboard to analyze sales trends, track target achievement, compare regional and product-wise performance, monitor distributor and sales executive contributions, and manage inventory levels, stock availability, and reorder requirements.",
    problem: "The need to monitor FMCG sales performance, target achievement, regional operations, inventory, and business performance.",
    contribution: "Developed an interactive Excel MIS Dashboard to visualize sales, targets, product performance, distributor contributions, and inventory status.",
    tools: ["Excel"],
    methodology: "Organized sales data, applied Excel formulas and PivotTables, and created interactive charts and KPIs to analyze sales trends, target achievement, regional performance, and stock levels.",
    results: "Created a centralized dashboard to track sales performance, compare targets with actual results, monitor product and regional contributions, and support data-driven business decisions.",
    image: "assets/images/projects/FMGC.png",
    report: "",
    github: "https://github.com/yamaanDS/FMCG-MIS-Dashboard",
    demo: "",
    skills: ["excel"],
  },
    {
    title: "Demand Forecasting Dashboard",
    category: "Supply Chain & Operations",
    date: "2026",
    description: "Developed an Excel-based demand forecasting project to analyze historical sales data, identify demand patterns, and support inventory and replenishment planning.",
    problem: "The need to understand demand trends and estimate future requirements to support inventory planning and reduce the risk of stockouts or excess inventory.",
    contribution: "Organized historical demand data and developed an Excel-based forecasting analysis to support demand estimation and inventory decisions.",
    tools: ["Excel"],
    methodology: "Organized historical sales data, analyzed demand patterns, and applied Excel-based forecasting techniques to estimate future demand and support inventory planning.",
    results: "Created a structured demand forecasting tool to support sales analysis, future demand estimation, and more informed inventory planning.",
    image: "assets/images/projects/For.png",
    report: "",
    github: "https://github.com/yamaanDS/Demand-Forecasting-and-Sales-Analysis-Dashboard",
    demo: "",
    skills: ["excel"],
  },
    {
    title: "Video Editing",
    category: "Video Editing",
    date: "2026",
    description: "Here is The Driive link Containing my video editing works. I have done video editing for various purposes, including promotional videos, event coverage, and social media content.",
    problem: "",
    contribution: "",
    tools: ["Adobe Premiere Pro", "Adobe After Effects"],
    methodology: "",
    results: "",
    image: "assets/images/projects/ae.png",
    report: "",
    github: "https://drive.google.com/drive/folders/1--FCvr5Brkmnhv3s1pq6PiY3jNE-S_IC?usp=drive_link",
    demo: "",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "Video Editing"],
  },
  // Add more projects in the same shape. "category" is used for the
  // filter buttons on the Projects section (add new categories freely).
];

/* ---------------- PUBLICATIONS ----------------
   type:   "Journal" | "Conference"
   status: "Published" | "Accepted" | "Under Review" | "Submitted" | "In Preparation"
*/
const PUBLICATIONS = [
  {
    title: "Integrating Analytic Hierarchy Process (AHP) and Bayesian Best-Worst Method (BWM): A dual-phase MCDM framework for addressing critical challenges in lean manufacturing systems",
    authors: ["Samieyul Islam Yamaan", "Shamsul Arafat Chowdhury", "Md. Rashedul Islam", "Ashrafe Bin Alim", "Md. Limonur Rahman Lingkon"],
    type: "Conference",
    status: "Published",
    venue: "ICMEAS",
    location: "MIST, Dhaka, Bangladesh",
    date: "2025",
    doi: "",
    link: "",
    abstract: "Abstract: Lean manufacturing has become a vital part of operational excellence. In a world of constant change, lean manufacturing provides the crucial framework for maximizing value and minimizing waste. However, critical problems and selecting optimal solutions in complex production systems remain challenging. This study proposes a novel dual-phase multi-criteria decision-making (MCDM) framework to address these gaps systematically. In the first phase, the Analytic Hierarchy Process (AHP) is employed to identify the most impactful and dangerous problems hindering lean manufacturing efficiency, evaluating criteria such as impact on efficiency, waste reduction, cost saving, scalability of improvement, and alignment with lean principles. The second phase introduces the Bayesian Best-Worst Method (Bayesian-BWM) to prioritize context-specific solutions for the most critical problem, incorporating probabilistic reasoning to enhance decisions under uncertainty. Experts from various industries and the manufacturing unit validate the framework. The results reveal the best solution among the alternatives and compare them with each other with the help of necessary software. The Bayesian Best-Worst method is a powerful decision-making tool for finding the best solution. The hybrid AHP-Bayesian BWM approach outperformed standalone MCDM methods by reducing subjective biases in problem identification and improving solution reliability through Bayesian posterior probabilities. This research provides a structured, data-driven approach to help companies identify critical problems and find the right lean solutions for continuous improvement.",
    keywords: ["Lean Manufacturing", "Analytic Hierarchy Process (AHP)", "Bayesian", "multi-criteria decision-making (MCDM)."],
    researchArea: "Industrial Management, Project Management and Operation Research",
  },
    {
    title: "Analyzing the Factors that Affect Employee Retention and Commitment in Manufacturing Companies: A Quantitative Study Using Spearman's Rank Correlation",
    authors: ["Suneet Malakar", "Abu Bakar Siddiq", "Samieyul Islam Yamaan", "Md. Sanowar hossein"],
    type: "Conference",
    status: "Published",
    venue: "ICMEAS",
    location: "MIST, Dhaka, Bangladesh",
    date: "2025",
    doi: "",
    link: "",
    abstract: "Abstract: Employee retention and commitment are critical challenges for manufacturing companies, where high turnover rates disrupt productivity and increase operational costs. This study examines the key factors influencing employee retention and commitment using a survey-based quantitative approach. Spearman’s Rank Correlation was applied to analyze the relationships between workplace factors such as compensation and benefits, job characteristics, supervisor and co-worker support, work-life balance policies, emotional and affective commitment, work environment and culture, leadership and management, and career growth opportunities. The findings indicate that leadership & management, career growth opportunities, and work-life balance policies have the most significant positive impact on retention and commitment, while compensation and job characteristics show a weaker correlation. The study highlights the importance of non-monetary workplace factors, such as leadership effectiveness, career progression, and organizational culture, in enhancing employee loyalty. These findings suggest that manufacturing firms should prioritize leadership development, career advancement programs, and employee-centric work policies to improve retention and ensure long-term organizational sustainability. This study contributes to the literature on organizational behavior in manufacturing by providing empirical evidence and practical recommendations for HR professionals and policymakers.",
    keywords: ["Employee Retention", "Commitment", "Manufacturing", "Quantitative Study"],
    researchArea: "Human Resource Management, Organizational Behavior, Employee Retention and Commitment",
  },
  {
    title: "A Sustainable Electronic Supply Chain Design for Electronic Products Manufacturing and E-Waste Management Using Reverse Logistics",
    authors: ["Shahadat Amin", "Samieyul Islam Yamaan", "and Md. Mohibul Islam"],
    type: "Conference",
    status: "Under Review",
    venue: "ICERIE 2027",
    location: "Sust, Sylhet, Bangladesh",
    date: "2026",
    doi: "",
    link: "",
    abstract: "Electronic product uses such as power banks which have a very short lifespan, are increasing rapidly. These products contribute hugely to e-waste generation worldwide. This study addresses this gap by developing an integrated forward-reverse supply chain optimization model for electronic product manufacturing, using power banks as a representative case. The primary objectives are to jointly optimize production quantity, selling price, and inventory decisions under multi-period, price-dependent stochastic demand; design an efficient reverse logistics strategy that allocates returned products among repair, recycling, and secondary manufacturing (scrap) channels; embed environmental accountability into the model through carbon emission tracking and taxation; and identify the parameters that most strongly influence supply chain profitability. A multi-period, multi-manufacturer, multi-retailer nonlinear optimization model was formulated. Demand in each period is expressed as a function of the selling price with an added normally distributed random error term, and demand fulfillment is guaranteed at a target service level through a chance constraint that is reformulated into an equivalent deterministic constraint. Each period, a constant proportion of items previously sold comes back to the firm, where these items are classified, inspected, and disassembled before being distributed, in predetermined portions, to repair facilities, recycling facilities, and secondary manufacturers, which then use scrap from these items as their inputs. The objective function combines manufacturing, inventory holding, ordering, repair, recycling, transportation, and carbon-tax costs against sales revenue, subject to production capacity, inventory balance, and flow constraints. The resultant constrained nonlinear optimization problem was solved by the Sequential Least Squares Programming (SLSQP) method available in the SciPy package of the Python programming language. One at a Time (OAT) sensitivity analysis was then conducted by varying the cost parameters and baseline demand by ±10% and ±20%.Applied to a five-period, two-manufacturer numerical example, the optimized model achieved a total profit of $426,959.82 against total revenue of $1,320,622.27. The optimal selling price remained nearly constant across periods (approximately $36.72–$36.73), while production volumes rose gradually to meet growing demand, which increased from 6,642 units in Period 1 to 7,765 units in Period 5 on average, with both manufacturers operating within their capacity limits. Reverse flows scaled in proportion to demand: returns grew from about 1,993 to 2,329 units over the five periods, with 40% allocated to repair, 35% to recycling, and 25% sold as scrap to secondary manufacturers. Sensitivity analysis showed that repair cost and base demand exert the greatest influence on total profit, followed by recycling and disassembly costs, while sorting and transportation costs had comparatively minor effects. The findings confirm that integrating reverse logistics operations, repair, recycling, and secondary manufacturing with carbon taxation into multi-period supply chain planning can simultaneously deliver strong economic performance and environmental sustainability. The proposed model offers practical decision support for pricing, production planning, and reverse-flow allocation in electronic product supply chains, and is particularly relevant to developing countries such as Bangladesh, where informal e-waste handling remains dominant. Possible future research directions include the expansion of the model through advanced techniques of stochastic or robust optimization, return-allocation ratio optimization instead of setting them arbitrarily, and the addition of multi-level network design to improve applicability.",
    keywords: ["Reverse Logistics", "E-Waste Management", "Supply Chain Optimization", "Stochastic Demand", "Carbon Emission", "Circular Economy", "Sustainability"],
researchArea: "Supply Chain Management (SCM) & Operations Research, Sustainable Operations and Circular Economy, Industrial Management and Production Planning, Environmental Management and Policy, Reverse Logistics & Closed-Loop Supply Chains (CLSC), Mathematical Optimization",  },
  // Add more publications in the same shape.
];

/* ---------------- RESEARCH INTERESTS (for the standalone cards section) ---------------- */
const RESEARCH_INTERESTS = [
  { title: "Logistics & Procurement", icon: "route" },
  { title: "Sustainable Supply Chain", icon: "leaf" },
  { title: "Operations Research", icon: "chart" },
  { title: "Optimization", icon: "target" },
  { title: "Sales & Production Planning", icon: "calendar" },
  { title: "Data Analytics", icon: "data" },
  { title: "AI in Industry", icon: "chip" },
  { title: "Quality Control & Managment", icon: "shield" },
];

/* ---------------- ACHIEVEMENTS ---------------- */
const ACHIEVEMENTS = [
  {
    title: "70% Scholarship for Global CSCA Certification",
    organization: "International Supply Chain Education Alliance (ISCEA)",
    date: "2027",
    description: "Awarded a 70% scholarship for the Global Certified Supply Chain Analyst (CSCA) certification by ISCEA for successfully participating and performing in the ISCEA PTak Prize / ISCEA Prize Global Supply Chain Case Competition 2026.",
    image: "assets/images/projects/CSCA.jpg",
    link: "",
  },
    {
    title: "4th Place – Orbeetal Idea Contest 2026",
    organization: "RUET Career Forum (RCF) & Orbeetal",
    date: "2027",
    description: "Secured 4th place at the Orbeetal Idea Contest 2026 during the 11th RCF Career Fair for presenting the product design project \"AI-Based PPE Detection System.\"",
    image: "assets/images/projects/RCF.jpg",
    link: "",
  },
];

/* ---------------- CERTIFICATIONS ---------------- */
const CERTIFICATIONS = [
  {
    name: "Fundamentals of Logistics",
    issuer: "Alison",
    date: "2026",
    credentialId: "6007-48986652",
    skills: ["Logistics"],
    image: "assets/images/certificates/Log.png",
    verifyLink: "https://alison.com/verify/cba3e8d665",
  },
  {
    name: "Supply Chain Management and Capacity Planning",
    issuer: "Alison",
    date: "2026",
    credentialId: "3338-48986652",
    skills: ["Supply Chain Management"],
    image: "assets/images/certificates/Cap.png",
    verifyLink: "https://alison.com/verify/e5e01d3b5d",
  },
  {
    name: "Microsoft Excel 2024: Beginner to Excel Pro",
    issuer: "Udemy",
    date: "2025",
    credentialId: "",
    skills: ["Excel"],
    image: "assets/images/certificates/Udm.jpg",
    verifyLink: "https://www.udemy.com/certificate/UC-9304378d-ab06-48fc-a215-3552dfdd1b73/",
  },
  {
    name: "Six Sigma Yellow Belt",
    issuer: "6sigmastudy",
    date: "2025",
    credentialId: "909986",
    skills: ["Quality Control & Production"],
    image: "assets/images/certificates/6s.jpg",
    verifyLink: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:7b456298-b43e-4017-a794-2d7f2eb5fed5",
  },
   {
    name: "Python",
    issuer: "DataCamp",
    date: "2025",
    credentialId: "",
    skills: ["Data Analytics & Programming"],
    image: "assets/images/certificates/py.jpg",
    verifyLink: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:01ad05c9-cb16-44a0-ba97-e930cd2f4b15?viewer%21megaVerb=group-discover",
  },
];
