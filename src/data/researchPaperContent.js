// src/data/researchPaperContent.js

export const researchPaperContent = {
    1: [
      {
        type: "title",
        text: "The Impact of Artificial Intelligence on the Future of Healthcare",
      },
      {
        type: "meta",
        items: [
          { icon: "school", text: "University of Chicago", href: "#" },
          { icon: "calendar_month", text: "January 2023" },
          { icon: "qr_code", text: "DOI: 10.1234/ai.healthcare.2023" },
        ],
      },
      {
        type: "section",
        title: "Researchers",
        content: [
          {
            type: "tags",
            tags: [
              { icon: "person", text: "John Doe", href: "#" },
              { icon: "person", text: "Dr. Jane Smith", href: "#" },
              { icon: "person", text: "Dr. Mark Lee", href: "#" },
            ],
          },
        ],
      },
      {
        type: "section",
        title: "Abstract",
        content: [
          {
            type: "paragraph",
            text: `Artificial Intelligence (AI) has emerged as a promising technology for revolutionizing
            healthcare systems globally. This paper explores the various AI-based tools that are
            being developed to assist in patient diagnosis, prediction of disease outbreaks, and
            personalized medicine.`,
          },
          {
            type: "keywords",
            keywords: [
              "Artificial Intelligence",
              "Machine Learning",
              "Healthcare Technology",
              "Deep Learning",
              "Medical Diagnostics",
            ],
          },
          {
            type: "button",
            icon: "download",
            text: "Download Full Paper (PDF)",
          },
        ],
      },
      {
        type: "section",
        title: "Research Topics Covered",
        content: [
          {
            type: "detailsList",
            items: [
              {
                title: "AI in Healthcare",
                icon: "smart_toy",
                content: `In-depth analysis of how AI algorithms are being used to predict health
                  outcomes and enhance diagnosis. The research examines various case studies
                  where AI implementation has significantly improved diagnostic accuracy and
                  patient care.`,
              },
              {
                title: "Machine Learning Models",
                icon: "psychology",
                content: `A look at different types of models such as supervised learning,
                  unsupervised learning, and reinforcement learning in healthcare
                  applications. The research compares the efficacy of these models in various
                  healthcare scenarios.`,
              },
              {
                title: "Healthcare Innovations",
                icon: "lightbulb",
                content: `Innovations in patient care using AI, such as virtual assistants, predictive
                  analytics, and automated diagnostics. The paper highlights breakthrough
                  technologies that are transforming healthcare delivery and patient
                  experience.`,
              },
            ],
          },
        ],
      },
      {
        type: "section",
        title: "Research Methodology",
        content: [
          {
            type: "paragraph",
            text: `This study employs a quantitative approach to compare the performance of AI-based
            diagnostic tools against traditional methods. The results were analyzed using
            statistical methods to assess the accuracy of predictions.`,
          },
          {
            type: "list",
            items: [
              "Quantitative analysis of 1,500+ patient cases",
              "Comparative study between 5 AI diagnostic systems and 12 human experts",
              "Double-blind testing protocol to ensure unbiased results",
              "Statistical significance validated through p-value analysis",
            ],
          },
        ],
      },
      {
        type: "section",
        title: "Research Findings",
        content: [
          {
            type: "subsection",
            title: "Diagnostic Accuracy Comparison",
            content: [
              {
                type: "image",
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                alt: "Bar chart comparing AI vs human diagnostic accuracy",
              },
            ],
          },
          {
            type: "subsection",
            title: "AI Decision-Making Process",
            content: [
              {
                type: "image",
                src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                alt: "Flowchart showing AI decision-making process in patient diagnosis",
              },
            ],
          },
        ],
      },
      {
        type: "section",
        title: "Research Impact",
        content: [
          {
            type: "impactStats",
            citations: 145,
            awards: `Winner of the IEEE Healthcare Technology Innovation Award in 2023`,
            references: [
              `Doe, J., Smith, J., Lee, M. (2023). "Artificial Intelligence and Healthcare: A Survey." Journal of Medical AI Research, 12(3), 45-60.`,
              `Smith, J., et al. (2022). "Deep Learning for Medical Image Analysis." IEEE Transactions on Medical Imaging, 41(2), 189-203.`,
              `Lee, M., Doe, J. (2023). "Ethical Considerations in AI-Based Healthcare." Ethics in Medicine, 18(4), 312-328.`,
            ],
            relatedResearch: [
              {
                title: "AI for Early Cancer Detection: A Systematic Review",
                institution: "University of Chicago",
                year: 2022,
                href: "#",
              },
              {
                title: "The Future of AI in Telemedicine and Remote Patient Monitoring",
                institution: "Stanford Medical School",
                year: 2023,
                href: "#",
              },
              {
                title: "Ethical Implications of AI in Clinical Decision Support Systems",
                institution: "Harvard Medical Ethics Department",
                year: 2023,
                href: "#",
              },
            ],
          },
        ],
      },
    ],
  
    // Example: content for paper with id=2
    2: [
      {
        type: "title",
        text: "Genomic Analysis of Rare Genetic Disorders: A Comprehensive Review",
      },
      {
        type: "meta",
        items: [
          { icon: "school", text: "Harvard University", href: "#" },
          { icon: "calendar_month", text: "March 2023" },
          { icon: "qr_code", text: "DOI: 10.5678/genomics.review.2023" },
        ],
      },
      {
        type: "section",
        title: "Researchers",
        content: [
          {
            type: "tags",
            tags: [
              { icon: "person", text: "Dr. Emily Johnson", href: "#" },
              { icon: "person", text: "Dr. Michael Brown", href: "#" },
            ],
          },
        ],
      },
      {
        type: "section",
        title: "Abstract",
        content: [
          {
            type: "paragraph",
            text: `This comprehensive review examines the latest genomic analysis techniques for identifying and understanding rare genetic disorders. The paper discusses the challenges in diagnosis and potential treatment approaches based on genetic mapping.`,
          },
          {
            type: "keywords",
            keywords: [
              "Genomics",
              "Rare Genetic Disorders",
              "Genetic Mapping",
              "Medical Genetics",
            ],
          },
          {
            type: "button",
            icon: "download",
            text: "Download Full Paper (PDF)",
          },
        ],
      },
      // You can add more sections here...
    ],
  };
  