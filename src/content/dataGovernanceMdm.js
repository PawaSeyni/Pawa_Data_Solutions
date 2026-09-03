// Data Governance & Master Data Management — Sprint 7C.
//
// Content only; DeepSolution.jsx renders it. See src/lib/solutionSchema.js.
//
// Eight capability cards and a seven-stage architecture, against the pilot's six
// and six. That difference is the point of 7C: the template had to flex for a
// governance-heavy service without a new layout, and §12A/§12B require the full
// practice — quality and observability under governance, MDM as first-class, and
// AI governance owned here rather than on the AI page.

export const IDENTITY = {
  slug: 'solutions/data-governance',
  pageName: 'DataGovernance',
  category: 'Data Governance & Master Data Management',
};

export const LOCALES = {
  en: {
    "seoTitle": "Data Governance & MDM Consulting",
    "seoDescription": "Governance operating model, data quality, lineage, master data management and AI governance. Entity resolution, golden records, survivorship and stewardship, built as a practice your team owns.",
    "eyebrow": "DATA GOVERNANCE & MASTER DATA MANAGEMENT",
    "h1": "Trusted, owned and explainable enterprise data.",
    "subhead": "People cannot confidently find, trust, own or control the data they depend on. We build the governance operating model and the mastered entities underneath it, so a number can be explained, a customer means one thing, and an auditor's follow-up question is a lookup rather than an investigation.",
    "transformation": "Uncertain → Trusted",
    "signals": [
      "The same customer, product or supplier exists several times, and no system is authoritative.",
      "Two teams report the same measure differently and neither definition is written down.",
      "You can produce a regulatory figure on time but cannot always demonstrate how it was derived.",
      "Data ownership is described as 'everyone' or sits with a committee that meets quarterly.",
      "Data quality is discussed after an incident rather than monitored before one.",
      "AI use cases are being approved with no view of what data they may lawfully use."
    ],
    "consequenceFlow": [
      "Critical entities are duplicated and definitions are undocumented",
      "Every trust question becomes a manual investigation by senior people",
      "Reporting, regulatory response and remediation all slow down",
      "Decisions and controls rest on figures nobody can fully explain",
      "AI and automation scale those defects faster than anyone can review them"
    ],
    "consequenceNote": "A report that is correct but unexplainable is a finding waiting to happen. The exposure is rarely the arithmetic — it is the inability to answer a follow-up about provenance without pulling senior people off other work for days.",
    "transformationRows": [
      {
        "before": "Ownership described as 'everyone'",
        "after": "One accountable owner per domain and per critical term"
      },
      {
        "before": "Definitions in people's heads",
        "after": "A glossary with owners, tied to the reports that use it"
      },
      {
        "before": "Duplicate customers, products and suppliers",
        "after": "Mastered entities with survivorship rules agreed per attribute"
      },
      {
        "before": "Quality discussed after incidents",
        "after": "Rules attached to definitions, monitored, with a named owner on breach"
      },
      {
        "before": "Lineage reconstructed by hand",
        "after": "Automated lineage from report to source"
      },
      {
        "before": "AI approved without data controls",
        "after": "Use-case intake, risk tiering and permitted-use rules before build"
      }
    ],
    "capabilities": [
      {
        "title": "Governance strategy and operating model",
        "body": "Decision rights, accountability, domain ownership and stewardship — sized to your organisation. A governance council that meets quarterly and owns nothing is worse than no council, because it looks like coverage."
      },
      {
        "title": "Data quality",
        "body": "Critical data elements identified first, then rules, profiling, monitoring, issue management and remediation. Quality rules attach to the business definitions they protect, so a breach names an owner rather than a table."
      },
      {
        "title": "Data observability",
        "body": "Freshness, volume, schema drift, lineage and anomaly monitoring, with incident detection and operational accountability. Observability sits under governance here, not as a separate product pillar."
      },
      {
        "title": "Metadata, catalog and business glossary",
        "body": "Discoverability, definitions, ownership and context. One accountable owner per term rather than a committee, because shared ownership of a definition is how two teams end up with two numbers."
      },
      {
        "title": "Data lineage",
        "body": "Technical and business lineage supporting trust, change-impact analysis and auditability. The derivation path for a reported figure becomes navigable rather than reconstructed."
      },
      {
        "title": "Master and reference data",
        "body": "Authoritative entities for customer, product, supplier, organisation and location: matching, merge and unmerge, survivorship, hierarchies, reference domains and controlled change. Detailed below."
      },
      {
        "title": "Policy, privacy, security and access governance",
        "body": "Classification, retention, access control and the evidence trail that shows the controls were actually applied, not merely documented."
      },
      {
        "title": "AI governance",
        "body": "Use-case intake and approval, risk tiering, data provenance and permitted use, model and agent documentation, human-in-the-loop boundaries, evaluation gates, drift monitoring and audit evidence from experiment to retirement. This page owns the framework; the AI Readiness page applies it."
      }
    ],
    "architecture": {
      "title": "Reference architecture: the mastered data lifecycle",
      "description": "Source systems feed data quality, where records are profiled and validated before any attempt to match them. Matching, linking and merging produce a golden record for each entity, with survivorship rules agreed per attribute rather than per system. Stewardship and governance sit on top: the scored middle band of ambiguous matches goes to a person, not a threshold. Mastered entities are then distributed through APIs, events and batch to operations, analytics and AI. Metadata, lineage, observability, security and policy span the whole lifecycle, which is why they are drawn across it rather than placed at one stage.",
      "layers": [
        {
          "name": "Source systems",
          "items": [
            "CRM",
            "ERP",
            "Billing",
            "Supplier systems",
            "External reference"
          ]
        },
        {
          "name": "Data quality",
          "items": [
            "Profiling",
            "Validation rules",
            "Standardisation",
            "Issue management"
          ]
        },
        {
          "name": "Match, link, merge",
          "items": [
            "Deterministic rules",
            "Probabilistic scoring",
            "Merge and unmerge"
          ]
        },
        {
          "name": "Golden record",
          "items": [
            "Survivorship per attribute",
            "Hierarchies and relationships",
            "Reference domains"
          ]
        },
        {
          "name": "Stewardship & governance",
          "items": [
            "Steward queue",
            "Exception workflow",
            "Approvals",
            "Policy and access"
          ]
        },
        {
          "name": "Distribution",
          "items": [
            "APIs",
            "Events",
            "Batch and CDC",
            "Syndication"
          ]
        },
        {
          "name": "Consumers",
          "items": [
            "Operations",
            "Analytics",
            "AI and agents"
          ]
        }
      ],
      "crossCutting": [
        "Metadata and catalog",
        "Lineage",
        "Observability",
        "Security and access",
        "Policy and AI governance"
      ]
    },
    "deliverables": [
      "Governance operating model: decision rights, domain ownership and stewardship roles, with names in them",
      "Critical data element inventory and the quality rules that protect each one",
      "Business glossary with one accountable owner per term, linked to the reports that consume it",
      "Match and survivorship design per mastered domain, tested against cases your team already knows",
      "Golden record model, hierarchies and reference data domains",
      "Stewardship workflows for the ambiguous middle band, including merge and unmerge",
      "Automated lineage from reporting layer through transformation to source",
      "AI governance framework: use-case intake, risk tiering, permitted-use rules and evaluation gates",
      "Policy, classification, retention and access controls with the evidence trail",
      "MDM architecture decision: registry, consolidation, coexistence or centralised, with the reasoning"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Identify the critical data elements and the domains that actually carry risk. Most estates have hundreds of candidates and perhaps a dozen that matter."
      },
      {
        "step": "Design",
        "body": "Agree ownership, definitions, survivorship and the MDM architecture style. Where two areas disagree on a definition, that disagreement is surfaced and resolved rather than averaged."
      },
      {
        "step": "Deliver",
        "body": "Build quality rules, matching, golden records, stewardship workflows and lineage. Match rules are tuned against known cases your team can judge."
      },
      {
        "step": "Enable",
        "body": "Hand over the operating model and the stewardship practice. Governance that depends on us being there is not governance."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Entity resolution for financial crime investigations",
        "body": "A Tier 1 North American bank whose retail, commercial and wealth lines each held their own version of a customer. Deterministic rules covered identifier matches, probabilistic scoring covered the rest, and the scored middle band went to a stewardship queue so an ambiguous match reached a person rather than a threshold. Lineage was retained from the mastered record back to every contributing source, so a match could be explained rather than asserted."
      },
      {
        "proofType": "priorExperience",
        "title": "Making regulatory figures explainable",
        "body": "A Canadian financial institution producing regulatory numbers on time but unable to demonstrate derivation. Each reported measure was traced back through its transformations to source, and the owning business definition captured with a named owner. Where two areas disagreed on a definition, the disagreement was surfaced and resolved during the work rather than during a review."
      },
      {
        "proofType": "representative",
        "title": "Representative pattern: MDM modernisation",
        "body": "An organisation running a registry-style MDM that no longer fits: downstream systems need attributes the registry does not hold, and stewards work in a tool nobody trained them on. The work assesses whether the architecture style is wrong or the implementation is, because replatforming an implementation problem is expensive and does not fix it.",
        "outcome": "What the engagement leaves behind: a target MDM style with the reasoning, a migration path for mastered domains, and stewardship workflows people will actually use."
      }
    ],
    "technologies": [
      {
        "group": "MDM and data quality",
        "items": [
          "Informatica MDM",
          "Informatica Data Quality",
          "Reltio",
          "Semarchy",
          "Profisee"
        ]
      },
      {
        "group": "Governance and catalog",
        "items": [
          "Collibra",
          "Informatica Axon",
          "Alation",
          "Microsoft Purview",
          "OpenMetadata"
        ]
      },
      {
        "group": "Lineage and observability",
        "items": [
          "OpenLineage",
          "Monte Carlo",
          "Great Expectations",
          "dbt tests"
        ]
      },
      {
        "group": "Platforms",
        "items": [
          "Snowflake",
          "Databricks",
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "Governance and MDM work is led by our principal, whose depth sits where financial services meets data: KYC and AML, entity resolution, MDM, governance, lineage and the regulatory reporting that has to survive an audit. Fifteen years at Informatica, and more than 300 customer-facing engagements with Tier 1 institutions.",
    "relatedInsights": [
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Reckoning",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning/"
      },
      {
        "kind": "Case study",
        "label": "Making regulatory figures explainable",
        "href": "/case-studies/governance-regulatory-reporting/"
      }
    ],
    "faqs": [
      {
        "q": "Do we need to buy an MDM platform?",
        "a": "Not necessarily, and not first. The architecture style — registry, consolidation, coexistence or centralised — should be decided by what downstream systems need, and several organisations get a long way with the platform they already own. A platform bought before the survivorship rules are agreed usually just relocates the argument."
      },
      {
        "q": "What is the difference between data governance and MDM?",
        "a": "Governance sets ownership, definitions, policy and control. MDM produces the authoritative entities those definitions describe. They fail separately: governance without mastered data is a document, and MDM without governance is a matching engine nobody trusts. We treat them as one practice for that reason."
      },
      {
        "q": "Where do data quality and observability sit?",
        "a": "Under this practice, even though the controls are implemented inside pipelines and platforms. Quality rules attach to the business definitions they protect, so a breach names an owner rather than a table, and that ownership is a governance question rather than an engineering one."
      },
      {
        "q": "How long before we see anything?",
        "a": "The Governance QuickStart runs in weeks, not quarters, and is deliberately narrow: critical data elements for one or two domains, the ownership model, and the first quality rules in monitoring. A governance programme that produces its first artifact in month six has usually lost the room by month four."
      },
      {
        "q": "Who does the stewardship afterwards?",
        "a": "Your people. Stewardship workflows are designed around roles you actually have, and the exception queue is sized so it can be worked. A design that assumes three full-time stewards you have not hired is a design that quietly stops."
      },
      {
        "q": "How does AI governance relate to this?",
        "a": "This page owns the framework: use-case intake, risk tiering, permitted-use rules, model and agent documentation, human-in-the-loop boundaries, evaluation gates and audit evidence. The AI Readiness page explains how those controls get applied to specific use cases, data access, models and agents."
      },
      {
        "q": "Can you work with our existing governance team?",
        "a": "Yes, and often the work is helping an existing team get traction rather than replacing it. Most governance programmes stall on decision rights rather than on tooling, and that is a different conversation from a platform selection."
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Integration",
        "href": "/solutions/data-integration/",
        "why": "How source data arrives and mastered data is distributed."
      },
      {
        "label": "AI Readiness",
        "href": "/solutions/ai-readiness/",
        "why": "Where this governance framework is applied to models and agents."
      },
      {
        "label": "Analytics Enablement",
        "href": "/solutions/analytics-enablement/",
        "why": "Trusted metrics built on these definitions and entities."
      }
    ],
    "entryOffer": {
      "id": "governance_quickstart",
      "title": "Governance QuickStart",
      "cta": "Book a Governance QuickStart",
      "body": "A focused engagement for organisations that need governance to produce something visible quickly. Critical data elements for one or two domains, an ownership model with names in it, the first quality rules in monitoring, and a defensible sequence for what comes next.",
      "note": "Scope and commercial terms are agreed in writing before the engagement starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en gouvernance des données et MDM",
    "seoDescription": "Modèle opérationnel de gouvernance, qualité des données, traçabilité, gestion des données de référence et gouvernance de l'IA. Résolution d'entités, enregistrements de référence, survivance et intendance, construits comme une pratique que votre équipe possède.",
    "eyebrow": "GOUVERNANCE DES DONNÉES ET GESTION DES DONNÉES DE RÉFÉRENCE",
    "h1": "Des données d'entreprise fiables, assumées et explicables.",
    "subhead": "Les équipes ne parviennent pas à trouver, faire confiance, assumer ou contrôler les données dont elles dépendent. Nous construisons le modèle opérationnel de gouvernance et les entités maîtres qui le soutiennent : un chiffre s'explique, un client désigne une seule chose, et la question de suivi d'un auditeur devient une consultation plutôt qu'une enquête.",
    "transformation": "Incertain → Fiable",
    "signals": [
      "Le même client, produit ou fournisseur existe plusieurs fois, et aucun système ne fait autorité.",
      "Deux équipes publient différemment la même mesure et aucune définition n'est écrite.",
      "Vous produisez un chiffre réglementaire à temps sans toujours pouvoir démontrer sa dérivation.",
      "La propriété des données est décrite comme « tout le monde » ou confiée à un comité trimestriel.",
      "La qualité des données se discute après un incident plutôt qu'elle ne se surveille avant.",
      "Des cas d'usage IA sont validés sans vision de ce qu'ils ont légalement le droit d'utiliser."
    ],
    "consequenceFlow": [
      "Les entités critiques sont dupliquées et les définitions ne sont pas documentées",
      "Chaque question de confiance devient une enquête manuelle menée par des profils seniors",
      "Reporting, réponse réglementaire et remédiation ralentissent tous",
      "Décisions et contrôles reposent sur des chiffres que personne ne sait pleinement expliquer",
      "L'IA et l'automatisation démultiplient ces défauts plus vite que personne ne peut les relire"
    ],
    "consequenceNote": "Un rapport juste mais inexplicable est une observation d'audit en devenir. L'exposition tient rarement au calcul : elle tient à l'impossibilité de répondre à une question de provenance sans mobiliser des profils seniors pendant des jours.",
    "transformationRows": [
      {
        "before": "Propriété décrite comme « tout le monde »",
        "after": "Un responsable par domaine et par terme critique"
      },
      {
        "before": "Définitions dans la tête des gens",
        "after": "Un glossaire avec des propriétaires, relié aux rapports qui l'utilisent"
      },
      {
        "before": "Clients, produits et fournisseurs en double",
        "after": "Entités maîtres avec règles de survivance convenues par attribut"
      },
      {
        "before": "Qualité discutée après incident",
        "after": "Règles rattachées aux définitions, surveillées, avec un responsable désigné"
      },
      {
        "before": "Traçabilité reconstituée à la main",
        "after": "Traçabilité automatisée du rapport jusqu'à la source"
      },
      {
        "before": "IA validée sans contrôles de données",
        "after": "Admission des cas d'usage, niveaux de risque et règles d'usage autorisé avant construction"
      }
    ],
    "capabilities": [
      {
        "title": "Stratégie et modèle opérationnel de gouvernance",
        "body": "Droits de décision, responsabilités, propriété par domaine et intendance, dimensionnés à votre organisation. Un comité de gouvernance qui se réunit chaque trimestre et ne possède rien est pire que pas de comité, car il donne l'illusion d'une couverture."
      },
      {
        "title": "Qualité des données",
        "body": "Identifier d'abord les données critiques, puis les règles, le profilage, la surveillance, la gestion des anomalies et la remédiation. Les règles se rattachent aux définitions métier qu'elles protègent : une violation désigne un responsable, pas une table."
      },
      {
        "title": "Observabilité des données",
        "body": "Fraîcheur, volumétrie, dérive de schéma, traçabilité et détection d'anomalies, avec responsabilité opérationnelle. L'observabilité relève ici de la gouvernance, et non d'un pilier de service distinct."
      },
      {
        "title": "Métadonnées, catalogue et glossaire métier",
        "body": "Découvrabilité, définitions, propriété et contexte. Un responsable par terme plutôt qu'un comité : la propriété partagée d'une définition est précisément ce qui produit deux chiffres pour une même mesure."
      },
      {
        "title": "Traçabilité des données",
        "body": "Traçabilité technique et métier au service de la confiance, de l'analyse d'impact et de l'auditabilité. Le chemin de dérivation d'un chiffre devient navigable au lieu d'être reconstitué."
      },
      {
        "title": "Données maîtres et de référence",
        "body": "Entités faisant autorité pour client, produit, fournisseur, organisation et localisation : rapprochement, fusion et défusion, survivance, hiérarchies, domaines de référence et changement contrôlé. Détaillé ci-dessous."
      },
      {
        "title": "Politique, confidentialité, sécurité et gouvernance des accès",
        "body": "Classification, rétention, contrôle d'accès et la piste de preuve qui montre que les contrôles ont réellement été appliqués, et pas seulement documentés."
      },
      {
        "title": "Gouvernance de l'IA",
        "body": "Admission et validation des cas d'usage, niveaux de risque, provenance et usage autorisé des données, documentation des modèles et agents, frontières de supervision humaine, seuils d'évaluation, surveillance de la dérive et preuves d'audit, de l'expérimentation au retrait. Cette page détient le cadre ; la page Préparation à l'IA l'applique."
      }
    ],
    "architecture": {
      "title": "Architecture de référence : le cycle de vie des données maîtres",
      "description": "Les systèmes sources alimentent la qualité des données, où les enregistrements sont profilés et validés avant toute tentative de rapprochement. Le rapprochement, le lien et la fusion produisent un enregistrement de référence par entité, avec des règles de survivance convenues par attribut plutôt que par système. L'intendance et la gouvernance se placent au-dessus : la bande intermédiaire des rapprochements ambigus est traitée par une personne, pas par un seuil. Les entités maîtres sont ensuite distribuées via API, événements et batch vers les opérations, l'analytique et l'IA. Métadonnées, traçabilité, observabilité, sécurité et politique traversent tout le cycle de vie, d'où leur représentation transversale plutôt qu'à une seule étape.",
      "layers": [
        {
          "name": "Systèmes sources",
          "items": [
            "CRM",
            "ERP",
            "Facturation",
            "Systèmes fournisseurs",
            "Référentiels externes"
          ]
        },
        {
          "name": "Qualité des données",
          "items": [
            "Profilage",
            "Règles de validation",
            "Normalisation",
            "Gestion des anomalies"
          ]
        },
        {
          "name": "Rapprochement et fusion",
          "items": [
            "Règles déterministes",
            "Score probabiliste",
            "Fusion et défusion"
          ]
        },
        {
          "name": "Enregistrement de référence",
          "items": [
            "Survivance par attribut",
            "Hiérarchies et relations",
            "Domaines de référence"
          ]
        },
        {
          "name": "Intendance et gouvernance",
          "items": [
            "File d'intendance",
            "Traitement des exceptions",
            "Validations",
            "Politique et accès"
          ]
        },
        {
          "name": "Distribution",
          "items": [
            "API",
            "Événements",
            "Batch et capture de changements",
            "Diffusion"
          ]
        },
        {
          "name": "Consommateurs",
          "items": [
            "Opérations",
            "Analytique",
            "IA et agents"
          ]
        }
      ],
      "crossCutting": [
        "Métadonnées et catalogue",
        "Traçabilité",
        "Observabilité",
        "Sécurité et accès",
        "Politique et gouvernance de l'IA"
      ]
    },
    "deliverables": [
      "Modèle opérationnel de gouvernance : droits de décision, propriété par domaine et rôles d'intendance, avec des noms dedans",
      "Inventaire des données critiques et règles de qualité qui protègent chacune",
      "Glossaire métier avec un responsable par terme, relié aux rapports qui le consomment",
      "Conception du rapprochement et de la survivance par domaine, testée sur des cas que votre équipe connaît déjà",
      "Modèle d'enregistrement de référence, hiérarchies et domaines de données de référence",
      "Flux d'intendance pour la bande ambiguë, y compris fusion et défusion",
      "Traçabilité automatisée de la couche de reporting jusqu'à la source",
      "Cadre de gouvernance de l'IA : admission des cas d'usage, niveaux de risque, règles d'usage autorisé et seuils d'évaluation",
      "Politique, classification, rétention et contrôles d'accès avec la piste de preuve",
      "Décision d'architecture MDM : registre, consolidation, coexistence ou centralisée, avec le raisonnement"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Identifier les données critiques et les domaines qui portent réellement le risque. La plupart des parcs comptent des centaines de candidats et une douzaine qui comptent."
      },
      {
        "step": "Concevoir",
        "body": "Convenir de la propriété, des définitions, de la survivance et du style d'architecture MDM. Lorsque deux domaines divergent sur une définition, le désaccord est mis au jour et tranché plutôt que moyenné."
      },
      {
        "step": "Livrer",
        "body": "Construire règles de qualité, rapprochement, enregistrements de référence, flux d'intendance et traçabilité. Les règles sont ajustées sur des cas connus que votre équipe peut juger."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre le modèle opérationnel et la pratique d'intendance. Une gouvernance qui dépend de notre présence n'est pas une gouvernance."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Résolution d'entités pour les enquêtes en criminalité financière",
        "body": "Une banque nord-américaine de premier plan dont la banque de détail, l'entreprise et la gestion de patrimoine détenaient chacune leur version du client. Les règles déterministes couvraient les identifiants, le score probabiliste le reste, et la bande intermédiaire alimentait une file d'intendance pour qu'un rapprochement ambigu arrive devant une personne et non devant un seuil. La traçabilité était conservée de l'enregistrement de référence jusqu'à chaque source contributrice, afin qu'un rapprochement puisse être expliqué et non affirmé."
      },
      {
        "proofType": "priorExperience",
        "title": "Rendre explicables des chiffres réglementaires",
        "body": "Une institution financière canadienne produisant ses chiffres réglementaires dans les délais sans pouvoir en démontrer la dérivation. Chaque mesure publiée a été retracée à travers ses transformations jusqu'à la source, et la définition métier associée capturée avec un propriétaire nommé. Lorsque deux domaines divergeaient sur une définition, le désaccord a été traité pendant la mission plutôt que lors d'une revue."
      },
      {
        "proofType": "representative",
        "title": "Schéma représentatif : modernisation MDM",
        "body": "Une organisation exploitant un MDM de type registre qui ne convient plus : les systèmes avals ont besoin d'attributs que le registre ne détient pas, et les intendants travaillent dans un outil sur lequel personne ne les a formés. Le travail détermine si c'est le style d'architecture qui est inadapté ou l'implémentation, car remplacer une plateforme pour un problème d'implémentation coûte cher et ne le corrige pas.",
        "outcome": "Ce que la mission laisse derrière elle : un style MDM cible argumenté, une trajectoire de migration par domaine maître, et des flux d'intendance que les équipes utiliseront réellement."
      }
    ],
    "technologies": [
      {
        "group": "MDM et qualité des données",
        "items": [
          "Informatica MDM",
          "Informatica Data Quality",
          "Reltio",
          "Semarchy",
          "Profisee"
        ]
      },
      {
        "group": "Gouvernance et catalogue",
        "items": [
          "Collibra",
          "Informatica Axon",
          "Alation",
          "Microsoft Purview",
          "OpenMetadata"
        ]
      },
      {
        "group": "Traçabilité et observabilité",
        "items": [
          "OpenLineage",
          "Monte Carlo",
          "Great Expectations",
          "tests dbt"
        ]
      },
      {
        "group": "Plateformes",
        "items": [
          "Snowflake",
          "Databricks",
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "Les travaux de gouvernance et de MDM sont dirigés par notre associé principal, dont l'expertise se situe à la rencontre des services financiers et des données : KYC et LCB, résolution d'entités, MDM, gouvernance, traçabilité et les rapports réglementaires qui doivent résister à un audit. Quinze ans chez Informatica et plus de 300 missions auprès d'institutions de premier plan.",
    "relatedInsights": [
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Reckoning",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning/"
      },
      {
        "kind": "Étude de cas",
        "label": "Rendre explicables des chiffres réglementaires",
        "href": "/fr/case-studies/governance-regulatory-reporting/"
      }
    ],
    "faqs": [
      {
        "q": "Devons-nous acheter une plateforme MDM ?",
        "a": "Pas nécessairement, et pas en premier. Le style d'architecture — registre, consolidation, coexistence ou centralisée — doit découler des besoins des systèmes avals, et plusieurs organisations vont loin avec la plateforme qu'elles possèdent déjà. Une plateforme achetée avant que les règles de survivance ne soient convenues ne fait généralement que déplacer le débat."
      },
      {
        "q": "Quelle est la différence entre gouvernance des données et MDM ?",
        "a": "La gouvernance fixe la propriété, les définitions, la politique et le contrôle. Le MDM produit les entités faisant autorité que ces définitions décrivent. Ils échouent séparément : une gouvernance sans données maîtres est un document, et un MDM sans gouvernance est un moteur de rapprochement auquel personne ne se fie. C'est pourquoi nous les traitons comme une seule pratique."
      },
      {
        "q": "Où se situent la qualité et l'observabilité des données ?",
        "a": "Dans cette pratique, même si les contrôles sont implémentés au sein des pipelines et des plateformes. Les règles de qualité se rattachent aux définitions métier qu'elles protègent : une violation désigne un responsable plutôt qu'une table, et cette responsabilité est une question de gouvernance et non d'ingénierie."
      },
      {
        "q": "Au bout de combien de temps voit-on quelque chose ?",
        "a": "Le QuickStart Gouvernance se compte en semaines, pas en trimestres, et reste délibérément étroit : les données critiques d'un ou deux domaines, le modèle de propriété et les premières règles de qualité sous surveillance. Un programme de gouvernance qui produit son premier livrable au sixième mois a généralement perdu l'adhésion dès le quatrième."
      },
      {
        "q": "Qui assure l'intendance ensuite ?",
        "a": "Vos équipes. Les flux d'intendance sont conçus autour de rôles que vous avez réellement, et la file d'exceptions est dimensionnée pour être traitée. Une conception qui suppose trois intendants à temps plein que vous n'avez pas recrutés est une conception qui s'arrête discrètement."
      },
      {
        "q": "Comment la gouvernance de l'IA s'y rattache-t-elle ?",
        "a": "Cette page détient le cadre : admission des cas d'usage, niveaux de risque, règles d'usage autorisé, documentation des modèles et agents, frontières de supervision humaine, seuils d'évaluation et preuves d'audit. La page Préparation à l'IA explique comment ces contrôles s'appliquent à des cas d'usage, des accès aux données, des modèles et des agents concrets."
      },
      {
        "q": "Pouvez-vous travailler avec notre équipe gouvernance existante ?",
        "a": "Oui, et la mission consiste souvent à aider une équipe en place à prendre de l'élan plutôt qu'à la remplacer. La plupart des programmes de gouvernance s'enlisent sur les droits de décision et non sur l'outillage, et c'est une conversation différente d'un choix de plateforme."
      }
    ],
    "entryOffer": {
      "id": "governance_quickstart",
      "title": "QuickStart Gouvernance",
      "cta": "Réserver un QuickStart Gouvernance",
      "body": "Une mission ciblée pour les organisations qui ont besoin que la gouvernance produise rapidement quelque chose de visible. Les données critiques d'un ou deux domaines, un modèle de propriété avec des noms dedans, les premières règles de qualité sous surveillance, et une séquence défendable pour la suite.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en gobernanza de datos y MDM",
    "seoDescription": "Modelo operativo de gobernanza, calidad de datos, linaje, gestión de datos maestros y gobernanza de IA. Resolución de entidades, registros dorados, supervivencia y stewardship, como una práctica que tu equipo posee.",
    "eyebrow": "GOBERNANZA DE DATOS Y GESTIÓN DE DATOS MAESTROS",
    "h1": "Datos empresariales fiables, con dueño y explicables.",
    "subhead": "Las personas no logran encontrar, confiar, poseer ni controlar los datos de los que dependen. Construimos el modelo operativo de gobernanza y las entidades maestras que lo sostienen: una cifra se explica, un cliente significa una sola cosa, y la pregunta de seguimiento de un auditor pasa a ser una consulta y no una investigación.",
    "transformation": "Incierto → Fiable",
    "signals": [
      "El mismo cliente, producto o proveedor existe varias veces y ningún sistema es el autorizado.",
      "Dos equipos reportan la misma medida de forma distinta y ninguna definición está escrita.",
      "Puedes entregar una cifra regulatoria a tiempo pero no siempre demostrar cómo se derivó.",
      "La propiedad del dato se describe como «de todos» o recae en un comité que se reúne cada trimestre.",
      "La calidad de datos se discute tras un incidente en lugar de monitorizarse antes.",
      "Se aprueban casos de uso de IA sin saber qué datos pueden utilizar lícitamente."
    ],
    "consequenceFlow": [
      "Las entidades críticas están duplicadas y las definiciones no están documentadas",
      "Cada pregunta de confianza se convierte en una investigación manual de gente sénior",
      "El reporte, la respuesta regulatoria y la remediación se ralentizan",
      "Decisiones y controles descansan sobre cifras que nadie sabe explicar del todo",
      "La IA y la automatización escalan esos defectos más rápido de lo que nadie puede revisar"
    ],
    "consequenceNote": "Un informe correcto pero inexplicable es un hallazgo esperando a ocurrir. La exposición rara vez está en la aritmética: está en no poder responder una pregunta sobre procedencia sin sacar a gente sénior de otro trabajo durante días.",
    "transformationRows": [
      {
        "before": "Propiedad descrita como «de todos»",
        "after": "Un responsable por dominio y por término crítico"
      },
      {
        "before": "Definiciones en la cabeza de la gente",
        "after": "Un glosario con dueños, ligado a los informes que lo usan"
      },
      {
        "before": "Clientes, productos y proveedores duplicados",
        "after": "Entidades maestras con reglas de supervivencia acordadas por atributo"
      },
      {
        "before": "Calidad discutida tras incidentes",
        "after": "Reglas ligadas a definiciones, monitorizadas, con responsable nombrado"
      },
      {
        "before": "Linaje reconstruido a mano",
        "after": "Linaje automatizado del informe al origen"
      },
      {
        "before": "IA aprobada sin controles de datos",
        "after": "Admisión de casos de uso, niveles de riesgo y reglas de uso permitido antes de construir"
      }
    ],
    "capabilities": [
      {
        "title": "Estrategia y modelo operativo de gobernanza",
        "body": "Derechos de decisión, responsabilidad, propiedad por dominio y stewardship, dimensionados a tu organización. Un comité de gobernanza que se reúne cada trimestre y no posee nada es peor que ninguno, porque aparenta cobertura."
      },
      {
        "title": "Calidad de datos",
        "body": "Primero identificar los datos críticos, después reglas, perfilado, monitorización, gestión de incidencias y remediación. Las reglas se ligan a las definiciones de negocio que protegen: un incumplimiento nombra a un responsable, no a una tabla."
      },
      {
        "title": "Observabilidad de datos",
        "body": "Frescura, volumen, deriva de esquema, linaje y detección de anomalías, con responsabilidad operativa. Aquí la observabilidad depende de gobernanza, no es un pilar de servicio aparte."
      },
      {
        "title": "Metadatos, catálogo y glosario de negocio",
        "body": "Descubribilidad, definiciones, propiedad y contexto. Un responsable por término y no un comité: la propiedad compartida de una definición es justo lo que produce dos cifras para una misma medida."
      },
      {
        "title": "Linaje de datos",
        "body": "Linaje técnico y de negocio al servicio de la confianza, el análisis de impacto y la auditabilidad. La ruta de derivación de una cifra pasa a ser navegable en lugar de reconstruida."
      },
      {
        "title": "Datos maestros y de referencia",
        "body": "Entidades autorizadas para cliente, producto, proveedor, organización y ubicación: coincidencia, fusión y desfusión, supervivencia, jerarquías, dominios de referencia y cambio controlado. Detallado más abajo."
      },
      {
        "title": "Política, privacidad, seguridad y gobernanza de accesos",
        "body": "Clasificación, retención, control de acceso y el rastro de evidencia que demuestra que los controles se aplicaron de verdad y no solo se documentaron."
      },
      {
        "title": "Gobernanza de IA",
        "body": "Admisión y aprobación de casos de uso, niveles de riesgo, procedencia y uso permitido de los datos, documentación de modelos y agentes, fronteras de supervisión humana, puertas de evaluación, monitorización de deriva y evidencia de auditoría, del experimento al retiro. Esta página posee el marco; la página de Preparación para IA lo aplica."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia: el ciclo de vida del dato maestro",
      "description": "Los sistemas origen alimentan la calidad de datos, donde los registros se perfilan y validan antes de cualquier intento de coincidencia. La coincidencia, el enlace y la fusión producen un registro dorado por entidad, con reglas de supervivencia acordadas por atributo y no por sistema. El stewardship y la gobernanza se sitúan encima: la banda intermedia de coincidencias ambiguas la resuelve una persona, no un umbral. Las entidades maestras se distribuyen después vía API, eventos y batch hacia operaciones, analítica e IA. Metadatos, linaje, observabilidad, seguridad y política atraviesan todo el ciclo, y por eso se dibujan cruzándolo en lugar de situarse en una sola etapa.",
      "layers": [
        {
          "name": "Sistemas origen",
          "items": [
            "CRM",
            "ERP",
            "Facturación",
            "Sistemas de proveedores",
            "Referencias externas"
          ]
        },
        {
          "name": "Calidad de datos",
          "items": [
            "Perfilado",
            "Reglas de validación",
            "Estandarización",
            "Gestión de incidencias"
          ]
        },
        {
          "name": "Coincidencia y fusión",
          "items": [
            "Reglas deterministas",
            "Puntuación probabilística",
            "Fusión y desfusión"
          ]
        },
        {
          "name": "Registro dorado",
          "items": [
            "Supervivencia por atributo",
            "Jerarquías y relaciones",
            "Dominios de referencia"
          ]
        },
        {
          "name": "Stewardship y gobernanza",
          "items": [
            "Cola de stewardship",
            "Flujo de excepciones",
            "Aprobaciones",
            "Política y acceso"
          ]
        },
        {
          "name": "Distribución",
          "items": [
            "API",
            "Eventos",
            "Batch y captura de cambios",
            "Sindicación"
          ]
        },
        {
          "name": "Consumidores",
          "items": [
            "Operaciones",
            "Analítica",
            "IA y agentes"
          ]
        }
      ],
      "crossCutting": [
        "Metadatos y catálogo",
        "Linaje",
        "Observabilidad",
        "Seguridad y acceso",
        "Política y gobernanza de IA"
      ]
    },
    "deliverables": [
      "Modelo operativo de gobernanza: derechos de decisión, propiedad por dominio y roles de stewardship, con nombres dentro",
      "Inventario de datos críticos y las reglas de calidad que protegen cada uno",
      "Glosario de negocio con un responsable por término, ligado a los informes que lo consumen",
      "Diseño de coincidencia y supervivencia por dominio, probado contra casos que tu equipo ya conoce",
      "Modelo de registro dorado, jerarquías y dominios de datos de referencia",
      "Flujos de stewardship para la banda ambigua, incluidas fusión y desfusión",
      "Linaje automatizado desde la capa de reporte hasta el origen",
      "Marco de gobernanza de IA: admisión de casos de uso, niveles de riesgo, reglas de uso permitido y puertas de evaluación",
      "Política, clasificación, retención y controles de acceso con el rastro de evidencia",
      "Decisión de arquitectura MDM: registro, consolidación, coexistencia o centralizada, con el razonamiento"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Identificar los datos críticos y los dominios que realmente cargan riesgo. La mayoría de entornos tienen cientos de candidatos y quizá una docena que importan."
      },
      {
        "step": "Diseñar",
        "body": "Acordar propiedad, definiciones, supervivencia y el estilo de arquitectura MDM. Cuando dos áreas discrepan sobre una definición, el desacuerdo se saca a la luz y se resuelve en lugar de promediarse."
      },
      {
        "step": "Entregar",
        "body": "Construir reglas de calidad, coincidencia, registros dorados, flujos de stewardship y linaje. Las reglas se ajustan contra casos conocidos que tu equipo puede juzgar."
      },
      {
        "step": "Habilitar",
        "body": "Entregar el modelo operativo y la práctica de stewardship. Una gobernanza que depende de que estemos presentes no es gobernanza."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Resolución de entidades para investigaciones de delitos financieros",
        "body": "Un banco norteamericano de primer nivel donde banca minorista, empresarial y patrimonial guardaban cada una su versión del cliente. Las reglas deterministas cubrían identificadores, la puntuación probabilística el resto, y la banda intermedia alimentaba una cola de stewardship para que una coincidencia ambigua llegara a una persona y no a un umbral. Se conservó el linaje desde el registro maestro hasta cada origen contribuyente, de modo que una coincidencia pudiera explicarse y no solo afirmarse."
      },
      {
        "proofType": "priorExperience",
        "title": "Hacer explicables las cifras regulatorias",
        "body": "Una institución financiera canadiense entregaba sus cifras regulatorias a tiempo pero no podía demostrar su derivación. Cada medida reportada se rastreó a través de sus transformaciones hasta el origen, y la definición de negocio propietaria se capturó con un responsable nombrado. Donde dos áreas discrepaban sobre una definición, el desacuerdo se resolvió durante el trabajo y no durante una revisión."
      },
      {
        "proofType": "representative",
        "title": "Patrón representativo: modernización de MDM",
        "body": "Una organización con un MDM tipo registro que ya no encaja: los sistemas aguas abajo necesitan atributos que el registro no guarda, y los stewards trabajan en una herramienta para la que nadie los formó. El trabajo evalúa si lo equivocado es el estilo de arquitectura o la implementación, porque reemplazar la plataforma por un problema de implementación es caro y no lo arregla.",
        "outcome": "Lo que deja el proyecto: un estilo MDM objetivo con su razonamiento, una ruta de migración por dominio maestro y flujos de stewardship que la gente realmente usará."
      }
    ],
    "technologies": [
      {
        "group": "MDM y calidad de datos",
        "items": [
          "Informatica MDM",
          "Informatica Data Quality",
          "Reltio",
          "Semarchy",
          "Profisee"
        ]
      },
      {
        "group": "Gobernanza y catálogo",
        "items": [
          "Collibra",
          "Informatica Axon",
          "Alation",
          "Microsoft Purview",
          "OpenMetadata"
        ]
      },
      {
        "group": "Linaje y observabilidad",
        "items": [
          "OpenLineage",
          "Monte Carlo",
          "Great Expectations",
          "tests de dbt"
        ]
      },
      {
        "group": "Plataformas",
        "items": [
          "Snowflake",
          "Databricks",
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "El trabajo de gobernanza y MDM lo dirige nuestro socio principal, cuya profundidad está donde los servicios financieros se encuentran con los datos: KYC y AML, resolución de entidades, MDM, gobernanza, linaje y los informes regulatorios que deben resistir una auditoría. Quince años en Informatica y más de 300 proyectos con instituciones de primer nivel.",
    "relatedInsights": [
      {
        "kind": "Artículo",
        "label": "The Governance Crisis: The Reckoning",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning/"
      },
      {
        "kind": "Caso de estudio",
        "label": "Hacer explicables las cifras regulatorias",
        "href": "/es/case-studies/governance-regulatory-reporting/"
      }
    ],
    "faqs": [
      {
        "q": "¿Necesitamos comprar una plataforma MDM?",
        "a": "No necesariamente, y no lo primero. El estilo de arquitectura — registro, consolidación, coexistencia o centralizada — debe decidirlo lo que necesitan los sistemas aguas abajo, y varias organizaciones llegan lejos con la plataforma que ya tienen. Una plataforma comprada antes de acordar las reglas de supervivencia suele limitarse a mudar la discusión de sitio."
      },
      {
        "q": "¿Cuál es la diferencia entre gobernanza de datos y MDM?",
        "a": "La gobernanza fija propiedad, definiciones, política y control. El MDM produce las entidades autorizadas que esas definiciones describen. Fallan por separado: gobernanza sin datos maestros es un documento, y MDM sin gobernanza es un motor de coincidencia en el que nadie confía. Por eso los tratamos como una sola práctica."
      },
      {
        "q": "¿Dónde encajan la calidad y la observabilidad de datos?",
        "a": "Dentro de esta práctica, aunque los controles se implementen en pipelines y plataformas. Las reglas de calidad se ligan a las definiciones de negocio que protegen, de modo que un incumplimiento nombra a un responsable y no a una tabla, y esa responsabilidad es una cuestión de gobernanza, no de ingeniería."
      },
      {
        "q": "¿Cuánto tardamos en ver algo?",
        "a": "El Governance QuickStart se mide en semanas, no en trimestres, y es deliberadamente estrecho: datos críticos de uno o dos dominios, el modelo de propiedad y las primeras reglas de calidad monitorizadas. Un programa de gobernanza que produce su primer entregable en el mes seis suele haber perdido a la sala en el mes cuatro."
      },
      {
        "q": "¿Quién hace el stewardship después?",
        "a": "Tu gente. Los flujos se diseñan alrededor de roles que realmente tienes, y la cola de excepciones se dimensiona para poder trabajarse. Un diseño que asume tres stewards a tiempo completo que no has contratado es un diseño que se detiene en silencio."
      },
      {
        "q": "¿Cómo se relaciona la gobernanza de IA con esto?",
        "a": "Esta página posee el marco: admisión de casos de uso, niveles de riesgo, reglas de uso permitido, documentación de modelos y agentes, fronteras de supervisión humana, puertas de evaluación y evidencia de auditoría. La página de Preparación para IA explica cómo se aplican esos controles a casos de uso, accesos, modelos y agentes concretos."
      },
      {
        "q": "¿Podéis trabajar con nuestro equipo de gobernanza actual?",
        "a": "Sí, y a menudo el trabajo consiste en ayudar a un equipo existente a coger tracción más que en sustituirlo. La mayoría de los programas de gobernanza se atascan en los derechos de decisión, no en la herramienta, y esa es una conversación distinta a una selección de plataforma."
      }
    ],
    "entryOffer": {
      "id": "governance_quickstart",
      "title": "Governance QuickStart",
      "cta": "Reservar un Governance QuickStart",
      "body": "Un proyecto focalizado para organizaciones que necesitan que la gobernanza produzca algo visible pronto. Datos críticos de uno o dos dominios, un modelo de propiedad con nombres dentro, las primeras reglas de calidad monitorizadas y una secuencia defendible para lo que sigue.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em governança de dados e MDM",
    "seoDescription": "Modelo operacional de governança, qualidade de dados, linhagem, gestão de dados mestres e governança de IA. Resolução de entidades, registros dourados, sobrevivência e stewardship, como uma prática que sua equipe possui.",
    "eyebrow": "GOVERNANÇA DE DADOS E GESTÃO DE DADOS MESTRES",
    "h1": "Dados corporativos confiáveis, com dono e explicáveis.",
    "subhead": "As pessoas não conseguem encontrar, confiar, assumir ou controlar os dados dos quais dependem. Construímos o modelo operacional de governança e as entidades mestras que o sustentam: um número se explica, um cliente significa uma coisa só, e a pergunta seguinte de um auditor vira uma consulta em vez de uma investigação.",
    "transformation": "Incerto → Confiável",
    "signals": [
      "O mesmo cliente, produto ou fornecedor existe várias vezes e nenhum sistema é o oficial.",
      "Duas equipes reportam a mesma medida de formas diferentes e nenhuma definição está escrita.",
      "Você entrega um número regulatório no prazo, mas nem sempre consegue demonstrar como foi derivado.",
      "A propriedade do dado é descrita como «de todos» ou fica com um comitê que se reúne por trimestre.",
      "Qualidade de dados é discutida depois de um incidente em vez de monitorada antes.",
      "Casos de uso de IA são aprovados sem visão do que podem legalmente usar."
    ],
    "consequenceFlow": [
      "Entidades críticas estão duplicadas e as definições não estão documentadas",
      "Cada pergunta de confiança vira uma investigação manual de gente sênior",
      "Relatórios, resposta regulatória e remediação desaceleram",
      "Decisões e controles se apoiam em números que ninguém explica por inteiro",
      "IA e automação escalam esses defeitos mais rápido do que qualquer um consegue revisar"
    ],
    "consequenceNote": "Um relatório correto mas inexplicável é um apontamento esperando para acontecer. A exposição raramente está na aritmética: está em não conseguir responder uma pergunta sobre procedência sem tirar gente sênior de outro trabalho por dias.",
    "transformationRows": [
      {
        "before": "Propriedade descrita como «de todos»",
        "after": "Um responsável por domínio e por termo crítico"
      },
      {
        "before": "Definições na cabeça das pessoas",
        "after": "Um glossário com donos, ligado aos relatórios que o usam"
      },
      {
        "before": "Clientes, produtos e fornecedores duplicados",
        "after": "Entidades mestras com regras de sobrevivência acordadas por atributo"
      },
      {
        "before": "Qualidade discutida após incidentes",
        "after": "Regras ligadas a definições, monitoradas, com responsável nomeado"
      },
      {
        "before": "Linhagem reconstruída à mão",
        "after": "Linhagem automatizada do relatório até a origem"
      },
      {
        "before": "IA aprovada sem controles de dados",
        "after": "Admissão de casos de uso, níveis de risco e regras de uso permitido antes de construir"
      }
    ],
    "capabilities": [
      {
        "title": "Estratégia e modelo operacional de governança",
        "body": "Direitos de decisão, responsabilidade, propriedade por domínio e stewardship, dimensionados à sua organização. Um comitê de governança que se reúne por trimestre e não possui nada é pior do que nenhum, porque parece cobertura."
      },
      {
        "title": "Qualidade de dados",
        "body": "Primeiro identificar os dados críticos, depois regras, perfilamento, monitoramento, gestão de ocorrências e remediação. As regras se ligam às definições de negócio que protegem: uma violação nomeia um responsável, não uma tabela."
      },
      {
        "title": "Observabilidade de dados",
        "body": "Frescor, volume, desvio de esquema, linhagem e detecção de anomalias, com responsabilidade operacional. Aqui a observabilidade fica sob governança, não como um pilar de serviço separado."
      },
      {
        "title": "Metadados, catálogo e glossário de negócio",
        "body": "Descoberta, definições, propriedade e contexto. Um responsável por termo em vez de um comitê: propriedade compartilhada de uma definição é exatamente o que produz dois números para a mesma medida."
      },
      {
        "title": "Linhagem de dados",
        "body": "Linhagem técnica e de negócio a serviço da confiança, da análise de impacto e da auditabilidade. O caminho de derivação de um número passa a ser navegável em vez de reconstruído."
      },
      {
        "title": "Dados mestres e de referência",
        "body": "Entidades oficiais para cliente, produto, fornecedor, organização e localização: correspondência, merge e unmerge, sobrevivência, hierarquias, domínios de referência e mudança controlada. Detalhado abaixo."
      },
      {
        "title": "Política, privacidade, segurança e governança de acesso",
        "body": "Classificação, retenção, controle de acesso e a trilha de evidência que mostra que os controles foram de fato aplicados, e não apenas documentados."
      },
      {
        "title": "Governança de IA",
        "body": "Admissão e aprovação de casos de uso, níveis de risco, procedência e uso permitido dos dados, documentação de modelos e agentes, fronteiras de supervisão humana, portões de avaliação, monitoramento de desvio e evidência de auditoria, do experimento à aposentadoria. Esta página detém o arcabouço; a página de Prontidão para IA o aplica."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência: o ciclo de vida do dado mestre",
      "description": "Os sistemas de origem alimentam a qualidade de dados, onde os registros são perfilados e validados antes de qualquer tentativa de correspondência. Correspondência, ligação e merge produzem um registro dourado por entidade, com regras de sobrevivência acordadas por atributo e não por sistema. Stewardship e governança ficam acima: a faixa intermediária de correspondências ambíguas vai para uma pessoa, não para um limiar. As entidades mestras são então distribuídas por APIs, eventos e batch para operações, analytics e IA. Metadados, linhagem, observabilidade, segurança e política atravessam todo o ciclo, e por isso aparecem cruzando-o em vez de em uma única etapa.",
      "layers": [
        {
          "name": "Sistemas de origem",
          "items": [
            "CRM",
            "ERP",
            "Faturamento",
            "Sistemas de fornecedores",
            "Referências externas"
          ]
        },
        {
          "name": "Qualidade de dados",
          "items": [
            "Perfilamento",
            "Regras de validação",
            "Padronização",
            "Gestão de ocorrências"
          ]
        },
        {
          "name": "Correspondência e merge",
          "items": [
            "Regras determinísticas",
            "Escore probabilístico",
            "Merge e unmerge"
          ]
        },
        {
          "name": "Registro dourado",
          "items": [
            "Sobrevivência por atributo",
            "Hierarquias e relações",
            "Domínios de referência"
          ]
        },
        {
          "name": "Stewardship e governança",
          "items": [
            "Fila de stewardship",
            "Fluxo de exceções",
            "Aprovações",
            "Política e acesso"
          ]
        },
        {
          "name": "Distribuição",
          "items": [
            "APIs",
            "Eventos",
            "Batch e captura de mudanças",
            "Sindicalização"
          ]
        },
        {
          "name": "Consumidores",
          "items": [
            "Operações",
            "Analytics",
            "IA e agentes"
          ]
        }
      ],
      "crossCutting": [
        "Metadados e catálogo",
        "Linhagem",
        "Observabilidade",
        "Segurança e acesso",
        "Política e governança de IA"
      ]
    },
    "deliverables": [
      "Modelo operacional de governança: direitos de decisão, propriedade por domínio e papéis de stewardship, com nomes dentro",
      "Inventário de dados críticos e as regras de qualidade que protegem cada um",
      "Glossário de negócio com um responsável por termo, ligado aos relatórios que o consomem",
      "Desenho de correspondência e sobrevivência por domínio, testado contra casos que sua equipe já conhece",
      "Modelo de registro dourado, hierarquias e domínios de dados de referência",
      "Fluxos de stewardship para a faixa ambígua, incluindo merge e unmerge",
      "Linhagem automatizada da camada de relatório até a origem",
      "Arcabouço de governança de IA: admissão de casos de uso, níveis de risco, regras de uso permitido e portões de avaliação",
      "Política, classificação, retenção e controles de acesso com a trilha de evidência",
      "Decisão de arquitetura MDM: registro, consolidação, coexistência ou centralizada, com o raciocínio"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Identificar os dados críticos e os domínios que de fato carregam risco. A maioria dos ambientes tem centenas de candidatos e talvez uma dúzia que importa."
      },
      {
        "step": "Projetar",
        "body": "Acordar propriedade, definições, sobrevivência e o estilo de arquitetura MDM. Quando duas áreas discordam de uma definição, a divergência é trazida à tona e resolvida em vez de mediada."
      },
      {
        "step": "Entregar",
        "body": "Construir regras de qualidade, correspondência, registros dourados, fluxos de stewardship e linhagem. As regras são ajustadas contra casos conhecidos que sua equipe consegue julgar."
      },
      {
        "step": "Habilitar",
        "body": "Entregar o modelo operacional e a prática de stewardship. Governança que depende da nossa presença não é governança."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Resolução de entidades para investigações de crimes financeiros",
        "body": "Um banco norte-americano de primeira linha em que varejo, corporativo e wealth guardavam cada um a sua versão do cliente. Regras determinísticas cobriam identificadores, escore probabilístico cobria o resto, e a faixa intermediária alimentava uma fila de stewardship para que uma correspondência ambígua chegasse a uma pessoa e não a um limiar. A linhagem foi mantida do registro mestre até cada origem contribuinte, para que uma correspondência pudesse ser explicada e não apenas afirmada."
      },
      {
        "proofType": "priorExperience",
        "title": "Tornar explicáveis os números regulatórios",
        "body": "Uma instituição financeira canadense entregava os números regulatórios no prazo, mas não conseguia demonstrar a derivação. Cada medida reportada foi rastreada por suas transformações até a origem, e a definição de negócio responsável capturada com um dono nomeado. Onde duas áreas discordavam de uma definição, a divergência foi resolvida durante o trabalho e não durante uma revisão."
      },
      {
        "proofType": "representative",
        "title": "Padrão representativo: modernização de MDM",
        "body": "Uma organização rodando um MDM em estilo registro que já não serve: sistemas a jusante precisam de atributos que o registro não guarda, e os stewards trabalham numa ferramenta para a qual ninguém os treinou. O trabalho avalia se o errado é o estilo de arquitetura ou a implementação, porque trocar de plataforma por um problema de implementação é caro e não resolve.",
        "outcome": "O que o projeto deixa: um estilo de MDM alvo com o raciocínio, um caminho de migração por domínio mestre, e fluxos de stewardship que as pessoas realmente vão usar."
      }
    ],
    "technologies": [
      {
        "group": "MDM e qualidade de dados",
        "items": [
          "Informatica MDM",
          "Informatica Data Quality",
          "Reltio",
          "Semarchy",
          "Profisee"
        ]
      },
      {
        "group": "Governança e catálogo",
        "items": [
          "Collibra",
          "Informatica Axon",
          "Alation",
          "Microsoft Purview",
          "OpenMetadata"
        ]
      },
      {
        "group": "Linhagem e observabilidade",
        "items": [
          "OpenLineage",
          "Monte Carlo",
          "Great Expectations",
          "testes dbt"
        ]
      },
      {
        "group": "Plataformas",
        "items": [
          "Snowflake",
          "Databricks",
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "O trabalho de governança e MDM é liderado pelo nosso sócio principal, cuja profundidade está onde os serviços financeiros encontram os dados: KYC e AML, resolução de entidades, MDM, governança, linhagem e os relatórios regulatórios que precisam resistir a uma auditoria. Quinze anos na Informatica e mais de 300 projetos com instituições de primeira linha.",
    "relatedInsights": [
      {
        "kind": "Artigo",
        "label": "The Governance Crisis: The Reckoning",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning/"
      },
      {
        "kind": "Estudo de caso",
        "label": "Tornar explicáveis os números regulatórios",
        "href": "/pt/case-studies/governance-regulatory-reporting/"
      }
    ],
    "faqs": [
      {
        "q": "Precisamos comprar uma plataforma de MDM?",
        "a": "Não necessariamente, e não primeiro. O estilo de arquitetura — registro, consolidação, coexistência ou centralizada — deve ser decidido pelo que os sistemas a jusante precisam, e várias organizações vão longe com a plataforma que já têm. Uma plataforma comprada antes de acordar as regras de sobrevivência geralmente só muda a discussão de lugar."
      },
      {
        "q": "Qual a diferença entre governança de dados e MDM?",
        "a": "A governança define propriedade, definições, política e controle. O MDM produz as entidades oficiais que essas definições descrevem. Eles falham separadamente: governança sem dados mestres é um documento, e MDM sem governança é um motor de correspondência em que ninguém confia. Por isso os tratamos como uma prática só."
      },
      {
        "q": "Onde ficam qualidade e observabilidade de dados?",
        "a": "Dentro desta prática, mesmo que os controles sejam implementados em pipelines e plataformas. As regras de qualidade se ligam às definições de negócio que protegem, então uma violação nomeia um responsável e não uma tabela, e essa responsabilidade é uma questão de governança, não de engenharia."
      },
      {
        "q": "Em quanto tempo vemos algo?",
        "a": "O Governance QuickStart é medido em semanas, não em trimestres, e é deliberadamente estreito: dados críticos de um ou dois domínios, o modelo de propriedade e as primeiras regras de qualidade monitoradas. Um programa de governança que produz a primeira entrega no sexto mês normalmente já perdeu a sala no quarto."
      },
      {
        "q": "Quem faz o stewardship depois?",
        "a": "Sua equipe. Os fluxos são desenhados em torno de papéis que você realmente tem, e a fila de exceções é dimensionada para ser trabalhada. Um desenho que pressupõe três stewards em tempo integral que você não contratou é um desenho que para em silêncio."
      },
      {
        "q": "Como a governança de IA se relaciona com isso?",
        "a": "Esta página detém o arcabouço: admissão de casos de uso, níveis de risco, regras de uso permitido, documentação de modelos e agentes, fronteiras de supervisão humana, portões de avaliação e evidência de auditoria. A página de Prontidão para IA explica como esses controles se aplicam a casos de uso, acessos, modelos e agentes concretos."
      },
      {
        "q": "Vocês conseguem trabalhar com nossa equipe de governança atual?",
        "a": "Sim, e muitas vezes o trabalho é ajudar uma equipe existente a ganhar tração em vez de substituí-la. A maioria dos programas de governança trava nos direitos de decisão, não na ferramenta, e essa é uma conversa diferente de uma seleção de plataforma."
      }
    ],
    "entryOffer": {
      "id": "governance_quickstart",
      "title": "Governance QuickStart",
      "cta": "Agendar um Governance QuickStart",
      "body": "Um trabalho focado para organizações que precisam que a governança produza algo visível rápido. Dados críticos de um ou dois domínios, um modelo de propriedade com nomes dentro, as primeiras regras de qualidade monitoradas e uma sequência defensável para o que vem depois.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
