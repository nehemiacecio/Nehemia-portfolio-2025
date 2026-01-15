import type { TimelineData } from '../types';

export const timelineData: TimelineData = {
  year: 2025,
  playerName: "NEHEMIA",
  playerTitle: "IT Developer Jr. @ PT. BCCARD ASIA PACIFIC",
  intro: "Welcome to my 2025 journey! Navigate through each month to discover my work on MTI Linux, BCKG, and BCVN projects throughout the year.",
  months: [
    {
      month: 1,
      monthName: "January",
      title: "MTI Linux Main Project",
      description: "Started the year tackling core issues in the MTI Linux project, focusing on critical bug fixes and system stability improvements.",
      highlights: [
        "Fixed Core dump issues on Linux platform",
        "Resolved Null pointer handling bugs",
        "Conducted unit testing on Linux environment",
        "Began quality assurance procedures"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Debugging core dumps requires patience and systematic approach to trace memory issues.",
        wouldDoDifferently: "Would have set up better logging earlier to catch null pointer issues faster.",
        recommendation: "Always validate pointers before use in C/C++ to prevent core dumps."
      },
      outcomes: ["Core dump issues resolved", "Improved system stability on Linux"]
    },
    {
      month: 2,
      monthName: "February",
      title: "MTI Linux Quality Testing",
      description: "Deep dive into quality testing and compiler optimization. Fixed various formatting and data type conversion issues.",
      highlights: [
        "Conducted comprehensive Quality Test",
        "Fixed bulk compiler issues",
        "Resolved printf padding problems",
        "Fixed Atoi/Atol conversion bugs"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "String to integer conversions can be tricky - always handle edge cases.",
        recommendation: "Use proper error checking with strtol instead of atoi for safer conversions."
      },
      outcomes: ["All compiler issues fixed", "Printf formatting standardized", "Data conversion bugs eliminated"]
    },
    {
      month: 3,
      monthName: "March",
      title: "BCKG & BCVN Projects Begin",
      description: "Transitioned to BCKG and BCVN projects. Worked on holiday classification systems and user role management.",
      highlights: [
        "BCKG: Holiday to Business Day classification system",
        "BCVN: User Role Matrix implementation",
        "Merchant Registration module development",
        "Database schema optimization"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Understanding business logic for holiday classification is crucial for financial systems.",
        wouldDoDifferently: "Would have documented the role matrix earlier for better team collaboration.",
        recommendation: "Always create clear documentation for user role permissions."
      },
      outcomes: ["Holiday classification system deployed", "User Role Matrix completed for BCVN"]
    },
    {
      month: 4,
      monthName: "April",
      title: "BCKG MASK System Development",
      description: "Focused on the MASK System for QR Sales and implementing card type distinction features.",
      highlights: [
        "MASK System QR Sales List development",
        "Debit/Credit Card Type distinction logic",
        "QR code generation improvements",
        "Sales reporting enhancements"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Clear distinction between card types is essential for accurate transaction processing.",
        recommendation: "Implement robust validation for card type identification at entry points."
      },
      outcomes: ["MASK System QR Sales feature deployed", "Card type distinction working correctly"]
    },
    {
      month: 5,
      monthName: "May",
      title: "IPM File Processing",
      description: "Worked on IPM file automation and continued holiday classification improvements for BCKG.",
      highlights: [
        "IPM File Issue AUTOEDIT implementation",
        "Automated file processing workflows",
        "Holiday classification refinements",
        "Batch processing optimization"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "File automation saves countless hours but requires careful error handling.",
        wouldDoDifferently: "Would have added more comprehensive logging for file processing.",
        recommendation: "Always implement rollback mechanisms for automated file operations."
      },
      outcomes: ["AUTOEDIT feature deployed", "File processing time reduced significantly"]
    },
    {
      month: 6,
      monthName: "June",
      title: "BCVN Merchant Enhancement",
      description: "Enhanced merchant application features and developed MVV Generate Logic for BCVN project.",
      highlights: [
        "Merchant application form enhancements",
        "MVV Generate Logic development",
        "Merchant validation improvements",
        "UI/UX updates for merchant module"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Merchant onboarding flows need to be intuitive while maintaining data integrity.",
        recommendation: "Test merchant flows with real user scenarios to catch edge cases."
      },
      outcomes: ["Enhanced merchant application deployed", "MVV logic implemented successfully"]
    },
    {
      month: 7,
      monthName: "July",
      title: "1C Integration & MVV Logic",
      description: "Focused on final upload forms to 1C system and continued MVV Generate Logic refinements for BCKG.",
      highlights: [
        "Final upload form to 1C implementation",
        "MVV Generate Logic enhancements",
        "Data synchronization with 1C",
        "Integration testing with external systems"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Integration with external systems requires thorough testing of all edge cases.",
        wouldDoDifferently: "Would have created mock services earlier for integration testing.",
        recommendation: "Document all API contracts and maintain version compatibility."
      },
      outcomes: ["1C upload integration completed", "MVV logic refined and deployed"]
    },
    {
      month: 8,
      monthName: "August",
      title: "Batch Processing & Personal Project",
      description: "Developed daily scheduling night job batch for BCKG while starting a personal React frontend project.",
      highlights: [
        "BCKG: Daily scheduling night job batch",
        "Automated batch job monitoring",
        "Personal Project: Frontend React development",
        "Learning modern React patterns"
      ],
      tags: ["Work", "Project", "Personal", "Learning"],
      advice: {
        lesson: "Batch jobs need robust error handling and monitoring for production reliability.",
        recommendation: "Build personal projects to explore technologies you can't use at work."
      },
      outcomes: ["Night batch job deployed", "Personal React project initiated"]
    },
    {
      month: 9,
      monthName: "September",
      title: "MBCS UI & QR Data Processing",
      description: "Enhanced MBCS UI for JCB brand support in BCVN and worked on QR code data processing for BCKG.",
      highlights: [
        "BCVN: MBCS UI Enhancement for JCB Brand",
        "Merchant Data File Processing improvements",
        "BCKG: SAC02F452R QR code data handling",
        "Multi-brand support implementation"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Supporting multiple card brands requires flexible architecture design.",
        wouldDoDifferently: "Would have created a more modular brand configuration system.",
        recommendation: "Design systems to be brand-agnostic from the start when possible."
      },
      outcomes: ["JCB brand support added to MBCS", "QR code data processing optimized"]
    },
    {
      month: 10,
      monthName: "October",
      title: "Sales Target & QR Transactions",
      description: "Implemented Sales Target Merchant feature for BCVN and developed new batch processing for 1C including QR Transaction handling.",
      highlights: [
        "BCVN: Sales Target Merchant implementation",
        "BCKG: New batch for 1C system",
        "QR Transaction processing",
        "Visa Master Off-us transaction handling"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Sales target tracking needs real-time data accuracy for business decisions.",
        recommendation: "Implement caching strategies for frequently accessed sales data."
      },
      outcomes: ["Sales Target feature deployed", "1C batch processing enhanced", "QR transactions working correctly"]
    },
    {
      month: 11,
      monthName: "November",
      title: "Auto-populate & JCB Data Files",
      description: "Implemented auto-populate functionality for Branch Area and developed Merchant Data File processing for JCB brand.",
      highlights: [
        "BCVN: Auto populate Branch Area feature",
        "Merchant Data File for JCB integration",
        "Data validation enhancements",
        "Performance optimization for large datasets"
      ],
      tags: ["Work", "Project"],
      advice: {
        lesson: "Auto-populate features greatly improve user experience and data consistency.",
        wouldDoDifferently: "Would have implemented bulk data import options earlier.",
        recommendation: "Cache frequently used lookup data to speed up auto-populate features."
      },
      outcomes: ["Branch Area auto-populate deployed", "JCB Merchant Data File processing complete"]
    },
    {
      month: 12,
      monthName: "December",
      title: "Group Merchant & UPI Brand",
      description: "Enhanced group merchant screen functionality, added UPI brand support, and worked on personal GAP project.",
      highlights: [
        "BCVN: Group merchant screen enhancement",
        "UPI Brand integration in Merchant Module",
        "Personal Project GAP development",
        "Year-end code reviews and documentation"
      ],
      tags: ["Work", "Project", "Personal"],
      advice: {
        lesson: "Supporting new payment brands requires understanding regional payment ecosystems.",
        wouldDoDifferently: "Would have started GAP project documentation earlier.",
        recommendation: "Keep personal projects organized - they showcase your skills beyond work."
      },
      outcomes: ["Group merchant enhancement deployed", "UPI brand support added", "GAP project progressed"]
    }
  ],
  summary: {
    keyAchievements: [
      "Successfully resolved critical MTI Linux core dump and null pointer issues",
      "Implemented BCKG MASK System for QR Sales with card type distinction",
      "Developed BCVN User Role Matrix and Merchant Registration modules",
      "Built automated batch processing systems for 1C integration",
      "Added multi-brand support (JCB, UPI) to merchant modules"
    ],
    biggestChallenges: [
      {
        challenge: "Debugging core dumps in MTI Linux without proper logging infrastructure",
        solution: "Implemented systematic debugging approach and added comprehensive logging"
      },
      {
        challenge: "Integrating with 1C external system while maintaining data consistency",
        solution: "Created robust synchronization mechanisms with proper error handling"
      },
      {
        challenge: "Supporting multiple card brands with different data requirements",
        solution: "Designed flexible, brand-agnostic architecture for merchant data processing"
      }
    ],
    skillsImproved: [
      "Linux system debugging and core dump analysis",
      "C/C++ programming and memory management",
      "Database optimization and batch processing",
      "Payment system integration (QR, Cards)",
      "React frontend development (personal projects)"
    ],
    nextYearGoals: [
      "Master more payment integration standards",
      "Contribute to more BCVN and BCKG features",
      "Complete personal GAP project",
      "Learn more about system architecture design",
      "Improve automated testing practices"
    ]
  }
};
