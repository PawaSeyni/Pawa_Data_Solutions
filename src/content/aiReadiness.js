// AI Readiness — Sprint 7C.
//
// Content only; DeepSolution.jsx renders it. See src/lib/solutionSchema.js.
//
// Rewritten to the Sprint 7C page specification. Six architecture layers now,
// not five: "Trust & context" became its own stage rather than being folded into
// governed data, and a "Human & business layer" was added — review and approval
// are part of the architecture, not something that happens beside it. Monitoring
// moved into the cross-cutting plane where it belongs.
//
// The spec's critical message (§8) is that MDM is NOT mandatory for every AI use
// case. The previous copy read as though it were. Mastering now appears as
// conditional authoritative context, and the FAQ says plainly that we would
// rather tell you MDM is not your constraint than sell a programme for it.
//
// Original note: the cross-cutting plane
// covers agent ACTIONS as well as data — an agent that can act is a different
// governance problem from one that can only answer. §12A puts the AI governance
// framework on the Governance & MDM page; this page applies it to real use cases.

export const IDENTITY = {
  slug: 'solutions/ai-readiness',
  pageName: 'AIReadiness',
  category: 'AI Readiness',
};

export const LOCALES = {
  en: {
    "seoTitle": "AI Readiness & Governance Consulting",
    "seoDescription": "Prepare trusted data, governed enterprise context and production controls for AI models and agents. Senior-led, vendor-neutral, with access governance and evaluation built in.",
    "eyebrow": "AI READINESS & GOVERNANCE",
    "h1": "Your AI is only as ready as the data and controls behind it.",
    "subhead": "We help teams prepare trusted data, governed enterprise context and production controls for AI, so models and agents can use the right information, through the right access paths, with clear accountability.",
    "transformation": "Experimentation → Governed production readiness",
    "signals": [
      "Pilots work on curated samples and fail once connected to real enterprise data.",
      "Nobody can say which customer, product or supplier record an AI system should trust.",
      "Sensitive data can technically be reached, but permitted use by models or agents is unclear.",
      "Different teams are building separate RAG, agent and model patterns with no common controls.",
      "No one owns the approval path from experiment to production.",
      "Model, prompt, retrieval and data changes are hard to reconstruct after deployment.",
      "Human review happens by convention; escalation and override boundaries are not written down.",
      "Leadership is asking for AI progress while quality, lineage and ownership remain unresolved."
    ],
    "consequenceFlow": [
      "Fragmented or poorly governed data",
      "Ambiguous enterprise context — no agreed answer to who or what a record refers to",
      "Uncontrolled AI access to that context",
      "Inconsistent outputs and weak traceability",
      "Production approval stalls, operational risk rises, trust falls"
    ],
    "consequenceNote": "None of these are model problems, which is why buying a better model does not move them. The constraint is what the model is allowed to see, whether that information is trustworthy, and who is accountable when it is wrong.",
    "transformationRows": [
      {
        "before": "Pilots built around convenient data",
        "after": "Use cases tied to governed data and knowledge sources"
      },
      {
        "before": "Conflicting customer and product identities",
        "after": "Authoritative mastered entities and controlled context, where the use case needs them"
      },
      {
        "before": "Broad or ad-hoc data access",
        "after": "Purpose-based access paths and policy controls"
      },
      {
        "before": "Unclear AI ownership",
        "after": "Named use-case, data, model and control owners"
      },
      {
        "before": "One-time pre-launch testing",
        "after": "Evaluation gates plus ongoing monitoring"
      },
      {
        "before": "Prompt, model and data changes hard to reconstruct",
        "after": "Versioning, lineage and retained evidence"
      },
      {
        "before": "Human review by convention",
        "after": "Defined human-in-the-loop and escalation boundaries"
      },
      {
        "before": "AI governance as a policy document",
        "after": "Controls embedded in the architecture and the lifecycle"
      }
    ],
    "capabilities": [
      {
        "title": "Readiness assessment",
        "body": "Inventory the priority use cases, then evaluate the data, context, access, governance, architecture and operating gaps each one actually has. Readiness is a property of a use case, not of an organisation."
      },
      {
        "title": "Trusted data foundation",
        "body": "Identify the authoritative sources, the quality requirements, the transformations and the serving patterns a given AI use case depends on — and say plainly which of them do not exist yet."
      },
      {
        "title": "Mastered enterprise context",
        "body": "Where a use case depends on consistent customer, product, supplier, organisation or location identity, MDM and entity resolution supply it. Where it does not, we say so rather than selling a mastering programme the use case cannot justify."
      },
      {
        "title": "Knowledge and retrieval architecture",
        "body": "Governed retrieval and context patterns, metadata, refresh and retirement, and the access boundaries appropriate to the use case. Most confidently wrong answers are retrieval failures, not model failures."
      },
      {
        "title": "AI governance",
        "body": "Use-case intake, risk tiering, approvals, accountability, evidence and lifecycle controls. The enterprise framework lives on the Governance & MDM page; here it meets a real use case."
      },
      {
        "title": "Agent and model access governance",
        "body": "Which data, tools and actions a model or agent can reach, with least privilege and human approval boundaries defined before build. An agent that can act is a different governance problem from one that can only answer."
      },
      {
        "title": "Evaluation and monitoring",
        "body": "Pre-production evaluation gates, then production quality, safety and operational monitoring with an owner. A model evaluated once at launch is unmonitored, not governed."
      },
      {
        "title": "Enablement and handover",
        "body": "Architecture decisions, control mappings, runbooks and ownership left with your team. An AI governance function that depends on an external firm cannot make a timely decision."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Enterprise sources feed a trust and context layer — quality, entity resolution where identity matters, reference data, metadata and lineage. That produces governed data and knowledge: curated data products, semantic context and controlled retrieval. An AI access layer sits between that and the models: APIs, retrieval services, tool gateways, policy enforcement and identity. AI services consume it, and a human layer holds review, approval and escalation. AI governance, privacy and security, observability, evaluation and audit evidence span the whole stack, including the actions an agent takes. One thing this diagram does NOT say: that every AI use case needs a centralised MDM hub. Mastering earns its place where entity identity is what the use case turns on, and not otherwise.",
      "layers": [
        {
          "name": "Enterprise sources",
          "items": [
            "CRM",
            "ERP",
            "Operational databases",
            "SaaS",
            "Documents",
            "APIs",
            "Event streams"
          ]
        },
        {
          "name": "Trust & context",
          "items": [
            "Data quality",
            "MDM / entity resolution",
            "Reference data",
            "Metadata",
            "Lineage"
          ]
        },
        {
          "name": "Governed data & knowledge",
          "items": [
            "Curated data products",
            "Semantic context",
            "Knowledge stores",
            "Controlled retrieval"
          ]
        },
        {
          "name": "AI access layer",
          "items": [
            "APIs",
            "Retrieval services",
            "Tool gateways",
            "Policy enforcement",
            "Identity and access"
          ]
        },
        {
          "name": "AI services",
          "items": [
            "Models",
            "RAG applications",
            "Copilots",
            "Agents",
            "Decision services"
          ]
        },
        {
          "name": "Human & business layer",
          "items": [
            "Review",
            "Approval",
            "Escalation",
            "Operations",
            "Business workflows"
          ]
        }
      ],
      "crossCutting": [
        "AI governance",
        "Privacy and security",
        "Observability",
        "Evaluation",
        "Audit evidence",
        "Lifecycle management"
      ]
    },
    "deliverables": [
      "AI readiness scorecard by priority use case, with the blockers named rather than scored",
      "Current-state risk and dependency map",
      "Authoritative data and context map, including where MDM is genuinely needed and where it is not",
      "Target AI data and knowledge architecture",
      "AI access-control and governance design covering data, tools and actions",
      "Use-case risk and control matrix with the approval flow",
      "Evaluation and monitoring requirements",
      "Prioritised remediation backlog and sequenced roadmap",
      "Architecture decision records, ownership model and handover documentation"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Prioritise the use cases, including the ones running outside any programme, then inspect the data, knowledge, architecture, governance and operating constraints each one meets."
      },
      {
        "step": "Design",
        "body": "Define the target data and context architecture, the controls, the access patterns and the decision rights. Designed per risk tier, not once for everything."
      },
      {
        "step": "Prove",
        "body": "Where scope calls for it, validate a bounded architecture and control pattern against one priority use case, rather than asserting the design will hold."
      },
      {
        "step": "Enable",
        "body": "Transfer the decisions, artifacts, runbooks, ownership and the roadmap for what comes next."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Representative architecture: AI readiness in a regulated enterprise",
        "body": "A financial institution with approved AI use cases and no agreed answer on whether the underlying data may lawfully be used. The pattern shows how the pieces interact: entity resolution supplies a stable notion of who a customer is, governed retrieval decides what an assistant may see, lineage lets an output be traced back to a real record, and a written human approval boundary governs anything that acts rather than answers. Each piece is ordinary; the readiness is in how they connect.",
        "outcome": "What the engagement leaves behind: a use-case risk and control matrix, the access design agents will operate under, and a sequenced view of what must change before production."
      },
      {
        "proofType": "priorExperience",
        "title": "Entity resolution as the foundation for a single customer view",
        "body": "A Tier 1 North American bank where retail, commercial and wealth each held their own version of a customer. The mastered record and the lineage back to every contributing source are exactly what an AI system needs to answer a question about a customer consistently — the same work that served financial crime investigators serves an agent that has to know which records are one person."
      }
    ],
    "technologies": [
      {
        "group": "AI platforms",
        "items": [
          "Azure OpenAI",
          "AWS Bedrock",
          "Google Vertex AI",
          "Databricks Mosaic"
        ]
      },
      {
        "group": "Retrieval and vector",
        "items": [
          "Azure AI Search",
          "pgvector",
          "Elasticsearch",
          "OpenSearch"
        ]
      },
      {
        "group": "Governance and context",
        "items": [
          "Informatica MDM",
          "Collibra",
          "Microsoft Purview",
          "OpenLineage"
        ]
      },
      {
        "group": "Evaluation and monitoring",
        "items": [
          "Evaluation harnesses",
          "Drift monitoring",
          "Structured audit logging"
        ]
      }
    ],
    "practitionerNote": "AI readiness work is led by our principal, whose background is enterprise data architecture, governance, MDM and entity resolution, lineage and financial-services controls — plus fifteen years translating vendor capability into production operating patterns. That matters here because the questions an auditor asks about a regulatory figure are the questions you should be asking about a model's inputs.",
    "relatedInsights": [
      {
        "kind": "Solution",
        "label": "Data Governance & MDM — where the AI governance framework lives",
        "href": "/solutions/data-governance/"
      },
      {
        "kind": "Assessment",
        "label": "Data Health Check — if you do not yet know whether the constraint is AI-specific",
        "href": "/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "The AI governance framework and the mastered entities AI needs as context."
      },
      {
        "label": "Integration & Data Engineering",
        "href": "/solutions/data-integration/",
        "why": "Getting the data reachable and reliable in the first place."
      },
      {
        "label": "Process Automation",
        "href": "/solutions/process-automation/",
        "why": "Where agents that take actions meet human review boundaries."
      }
    ],
    "faqs": [
      {
        "q": "Do we need an MDM platform before we can use AI?",
        "a": "No. The question is whether your use case depends on authoritative entity identity — a customer assistant usually does, a document summariser usually does not. Where it does, we apply the lightest mastering pattern that meets the need, which is often not a platform purchase. We would rather tell you MDM is not your constraint than sell you a programme the use case cannot justify."
      },
      {
        "q": "Is AI readiness the same as MLOps?",
        "a": "No. MLOps is one operating capability within it. Readiness also covers the data, the enterprise context, access paths, governance, evaluation and ownership — and in our experience those are what actually block production approval, long after the deployment pipeline works fine."
      },
      {
        "q": "Can you work with our existing AI and cloud stack?",
        "a": "Yes, and we assess what is already in place rather than proposing a replacement. We have no reseller margin and no partner quota with any platform, which is what keeps that assessment honest."
      },
      {
        "q": "Do you build models?",
        "a": "Scope-dependent, and it is not the core offer. What we do is the enterprise data, context and governance foundation that production AI depends on. If you need a model-development team, that is a different firm, and we will say so rather than staffing it."
      },
      {
        "q": "How do you govern AI agents?",
        "a": "By controlling identity, data and tool access, permitted actions, approval boundaries, monitoring and evidence. An agent that can take an action is a higher risk tier by default, and the human approval boundary is written down before build rather than discovered after an incident."
      },
      {
        "q": "What if our data governance is immature?",
        "a": "Then that becomes part of the readiness roadmap rather than a reason to stop. Often the honest sequence is governance and mastered entities first, because any future use case will need them and they pay for themselves in reporting and risk regardless of whether the AI programme proceeds."
      },
      {
        "q": "Can we start with one use case?",
        "a": "Yes, and it is usually the better way in. A bounded priority use case exposes the reusable foundation and control requirements faster than an enterprise-wide assessment, and produces something you can act on rather than a document."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "AI Readiness Assessment",
      "cta": "Request an AI Readiness Assessment",
      "body": "A focused assessment of one or more priority AI use cases across data quality, authoritative context, access, governance, architecture, evaluation and operating readiness. You leave with a written gap view and a sequenced plan for what must change before production.",
      "note": "Scope and commercial terms are agreed in writing before the assessment starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en préparation et gouvernance de l'IA",
    "seoDescription": "Préparer des données fiables, un contexte d'entreprise gouverné et des contrôles de production pour vos modèles et agents IA. Conseil senior, neutre vis-à-vis des éditeurs.",
    "eyebrow": "PRÉPARATION ET GOUVERNANCE DE L'IA",
    "h1": "Votre IA ne vaut que les données et les contrôles qui la soutiennent.",
    "subhead": "Nous aidons les équipes à préparer des données fiables, un contexte d'entreprise gouverné et des contrôles de production pour l'IA, afin que modèles et agents utilisent la bonne information, par les bons chemins d'accès, avec une responsabilité claire.",
    "transformation": "Expérimentation → Production gouvernée",
    "signals": [
      "Les pilotes fonctionnent sur des échantillons préparés et échouent une fois branchés aux données réelles.",
      "Personne ne peut dire quelle fiche client, produit ou fournisseur un système IA devrait considérer comme fiable.",
      "Les données sensibles sont techniquement atteignables, mais l'usage autorisé par les modèles ou agents reste flou.",
      "Différentes équipes construisent des schémas RAG, agents et modèles séparés, sans contrôles communs.",
      "Personne ne détient le chemin d'approbation de l'expérimentation vers la production.",
      "Les changements de modèle, d'invite, de récupération et de données sont difficiles à reconstituer après déploiement.",
      "La revue humaine se fait par convention ; les frontières d'escalade et de correction ne sont pas écrites.",
      "La direction réclame des avancées IA alors que qualité, traçabilité et propriété restent non résolues."
    ],
    "consequenceFlow": [
      "Des données éclatées ou mal gouvernées",
      "Un contexte d'entreprise ambigu — aucune réponse convenue sur ce qu'une fiche désigne réellement",
      "Un accès IA non contrôlé à ce contexte",
      "Des sorties incohérentes et une traçabilité faible",
      "L'approbation pour la production s'enlise, le risque opérationnel monte, la confiance baisse"
    ],
    "consequenceNote": "Aucun de ces points n'est un problème de modèle, ce qui explique qu'acheter un meilleur modèle n'y change rien. La contrainte porte sur ce que le modèle a le droit de voir, la fiabilité de cette information, et la personne responsable lorsqu'elle est fausse.",
    "transformationRows": [
      {
        "before": "Des pilotes bâtis sur les données les plus accessibles",
        "after": "Des cas d'usage rattachés à des sources de données et de connaissances gouvernées"
      },
      {
        "before": "Des identités client et produit contradictoires",
        "after": "Des entités maîtres faisant autorité et un contexte contrôlé, lorsque le cas d'usage l'exige"
      },
      {
        "before": "Des accès larges ou improvisés",
        "after": "Des chemins d'accès par finalité et des contrôles de politique"
      },
      {
        "before": "Une propriété de l'IA floue",
        "after": "Des propriétaires nommés pour le cas d'usage, les données, le modèle et les contrôles"
      },
      {
        "before": "Un test unique avant lancement",
        "after": "Des seuils d'évaluation et une surveillance continue"
      },
      {
        "before": "Changements d'invite, de modèle et de données irreconstituables",
        "after": "Versionnage, traçabilité et preuves conservées"
      },
      {
        "before": "Une revue humaine par convention",
        "after": "Des frontières définies de supervision humaine et d'escalade"
      },
      {
        "before": "Une gouvernance de l'IA sous forme de document",
        "after": "Des contrôles intégrés à l'architecture et au cycle de vie"
      }
    ],
    "capabilities": [
      {
        "title": "Évaluation de la maturité",
        "body": "Inventorier les cas d'usage prioritaires, puis évaluer les écarts réels de chacun en matière de données, contexte, accès, gouvernance, architecture et exploitation. La maturité est une propriété d'un cas d'usage, pas d'une organisation."
      },
      {
        "title": "Socle de données fiables",
        "body": "Identifier les sources faisant autorité, les exigences de qualité, les transformations et les modes de mise à disposition dont un cas d'usage dépend — et dire clairement lesquels n'existent pas encore."
      },
      {
        "title": "Contexte d'entreprise maîtrisé",
        "body": "Lorsqu'un cas d'usage dépend d'une identité cohérente de client, produit, fournisseur, organisation ou localisation, le MDM et la résolution d'entités la fournissent. Dans le cas contraire, nous le disons plutôt que de vendre un programme de mastering que le cas d'usage ne justifie pas."
      },
      {
        "title": "Architecture de connaissance et de récupération",
        "body": "Des schémas de récupération et de contexte gouvernés, des métadonnées, un rafraîchissement et un retrait, et les frontières d'accès adaptées au cas d'usage. La plupart des réponses fausses mais assurées sont des échecs de récupération, pas de modèle."
      },
      {
        "title": "Gouvernance de l'IA",
        "body": "Admission des cas d'usage, niveaux de risque, validations, responsabilités, preuves et contrôles de cycle de vie. Le cadre d'entreprise vit sur la page Gouvernance et MDM ; ici il rencontre un cas d'usage réel."
      },
      {
        "title": "Gouvernance des accès des agents et modèles",
        "body": "Quelles données, quels outils et quelles actions un modèle ou un agent peut atteindre, avec moindre privilège et frontières d'approbation humaine définies avant la construction. Un agent capable d'agir pose un problème de gouvernance différent de celui qui se contente de répondre."
      },
      {
        "title": "Évaluation et surveillance",
        "body": "Des seuils d'évaluation avant production, puis une surveillance de la qualité, de la sûreté et de l'exploitation, avec un responsable. Un modèle évalué une seule fois au lancement n'est pas gouverné : il est non surveillé."
      },
      {
        "title": "Autonomisation et transfert",
        "body": "Décisions d'architecture, cartographie des contrôles, procédures et propriété remises à vos équipes. Une fonction de gouvernance de l'IA qui dépend d'un cabinet externe ne peut pas décider à temps."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Les sources d'entreprise alimentent une couche de confiance et de contexte : qualité, résolution d'entités lorsque l'identité compte, données de référence, métadonnées et traçabilité. Elle produit des données et connaissances gouvernées : produits de données organisés, contexte sémantique et récupération contrôlée. Une couche d'accès IA s'intercale avant les modèles : API, services de récupération, passerelles d'outils, application des politiques et identité. Les services IA la consomment, et une couche humaine porte la revue, l'approbation et l'escalade. Gouvernance de l'IA, confidentialité et sécurité, observabilité, évaluation et preuves d'audit traversent l'ensemble, y compris les actions que prend un agent. Ce que ce schéma ne dit PAS : que chaque cas d'usage IA exige un référentiel MDM centralisé. Le mastering se justifie là où l'identité des entités est ce sur quoi repose le cas d'usage, et pas ailleurs.",
      "layers": [
        {
          "name": "Sources d'entreprise",
          "items": [
            "CRM",
            "ERP",
            "Bases opérationnelles",
            "SaaS",
            "Documents",
            "API",
            "Flux d'événements"
          ]
        },
        {
          "name": "Confiance et contexte",
          "items": [
            "Qualité des données",
            "MDM / résolution d'entités",
            "Données de référence",
            "Métadonnées",
            "Traçabilité"
          ]
        },
        {
          "name": "Données et connaissances gouvernées",
          "items": [
            "Produits de données organisés",
            "Contexte sémantique",
            "Bases de connaissances",
            "Récupération contrôlée"
          ]
        },
        {
          "name": "Couche d'accès IA",
          "items": [
            "API",
            "Services de récupération",
            "Passerelles d'outils",
            "Application des politiques",
            "Identité et accès"
          ]
        },
        {
          "name": "Services IA",
          "items": [
            "Modèles",
            "Applications RAG",
            "Copilotes",
            "Agents",
            "Services de décision"
          ]
        },
        {
          "name": "Couche humaine et métier",
          "items": [
            "Revue",
            "Approbation",
            "Escalade",
            "Exploitation",
            "Processus métier"
          ]
        }
      ],
      "crossCutting": [
        "Gouvernance de l'IA",
        "Confidentialité et sécurité",
        "Observabilité",
        "Évaluation",
        "Preuves d'audit",
        "Gestion du cycle de vie"
      ]
    },
    "deliverables": [
      "Grille de maturité IA par cas d'usage prioritaire, avec les blocages nommés plutôt que notés",
      "Cartographie des risques et dépendances de l'état actuel",
      "Cartographie des données et du contexte faisant autorité, précisant où le MDM est réellement nécessaire et où il ne l'est pas",
      "Architecture cible des données et connaissances pour l'IA",
      "Conception des contrôles d'accès et de la gouvernance de l'IA, couvrant données, outils et actions",
      "Matrice risque / contrôles par cas d'usage, avec le circuit d'approbation",
      "Exigences d'évaluation et de surveillance",
      "Backlog de remédiation priorisé et feuille de route séquencée",
      "Décisions d'architecture consignées, modèle de propriété et documentation de transfert"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Prioriser les cas d'usage, y compris ceux qui tournent hors de tout programme, puis examiner les contraintes de données, de connaissances, d'architecture, de gouvernance et d'exploitation que chacun rencontre."
      },
      {
        "step": "Concevoir",
        "body": "Définir l'architecture cible des données et du contexte, les contrôles, les modes d'accès et les droits de décision. Conçus par niveau de risque, pas une fois pour tout."
      },
      {
        "step": "Éprouver",
        "body": "Lorsque le périmètre le justifie, valider un schéma d'architecture et de contrôles délimité sur un cas d'usage prioritaire, plutôt que d'affirmer que la conception tiendra."
      },
      {
        "step": "Autonomiser",
        "body": "Transférer décisions, artefacts, procédures, propriété et la feuille de route de la suite."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Architecture représentative : maturité IA dans une entreprise réglementée",
        "body": "Une institution financière disposant de cas d'usage IA validés et d'aucune réponse convenue sur la licéité d'usage des données sous-jacentes. Le schéma montre comment les pièces s'articulent : la résolution d'entités fournit une notion stable de qui est le client, la récupération gouvernée décide de ce qu'un assistant peut voir, la traçabilité permet de rattacher une sortie à un enregistrement réel, et une frontière d'approbation humaine écrite encadre tout ce qui agit au lieu de répondre. Chaque pièce est ordinaire ; la maturité tient à la façon dont elles se connectent.",
        "outcome": "Ce que la mission laisse derrière elle : une matrice risque / contrôles par cas d'usage, la conception des accès sous lesquels les agents opéreront, et une vue séquencée de ce qui doit changer avant la production."
      },
      {
        "proofType": "priorExperience",
        "title": "La résolution d'entités comme socle d'une vue client unique",
        "body": "Une banque nord-américaine de premier plan où la banque de détail, l'entreprise et la gestion de patrimoine détenaient chacune leur version du client. L'enregistrement de référence et la traçabilité vers chaque source contributrice sont exactement ce dont un système IA a besoin pour répondre de façon cohérente à une question sur un client : le même travail qui servait les enquêteurs sert un agent qui doit savoir que trois enregistrements ne font qu'une personne."
      }
    ],
    "technologies": [
      {
        "group": "Plateformes IA",
        "items": [
          "Azure OpenAI",
          "AWS Bedrock",
          "Google Vertex AI",
          "Databricks Mosaic"
        ]
      },
      {
        "group": "Récupération et vecteurs",
        "items": [
          "Azure AI Search",
          "pgvector",
          "Elasticsearch",
          "OpenSearch"
        ]
      },
      {
        "group": "Gouvernance et contexte",
        "items": [
          "Informatica MDM",
          "Collibra",
          "Microsoft Purview",
          "OpenLineage"
        ]
      },
      {
        "group": "Évaluation et surveillance",
        "items": [
          "Harnais d'évaluation",
          "Surveillance de la dérive",
          "Journalisation d'audit structurée"
        ]
      }
    ],
    "practitionerNote": "Les travaux de préparation à l'IA sont dirigés par notre associé principal, dont le parcours couvre l'architecture de données d'entreprise, la gouvernance, le MDM et la résolution d'entités, la traçabilité et les contrôles en services financiers — plus quinze ans à traduire des capacités éditeurs en schémas d'exploitation en production. Cela compte ici : les questions qu'un auditeur pose sur un chiffre réglementaire sont celles qu'il faut poser sur les données d'entrée d'un modèle.",
    "relatedInsights": [
      {
        "kind": "Solution",
        "label": "Gouvernance des données et MDM — où vit le cadre de gouvernance de l'IA",
        "href": "/fr/solutions/data-governance/"
      },
      {
        "kind": "Évaluation",
        "label": "Diagnostic de données — si vous ignorez encore si la contrainte est propre à l'IA",
        "href": "/fr/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Gouvernance des données et MDM",
        "href": "/solutions/data-governance/",
        "why": "Le cadre de gouvernance de l'IA et les entités maîtres dont l'IA a besoin comme contexte."
      },
      {
        "label": "Intégration et ingénierie des données",
        "href": "/solutions/data-integration/",
        "why": "Rendre les données atteignables et fiables au départ."
      },
      {
        "label": "Automatisation des processus",
        "href": "/solutions/process-automation/",
        "why": "Là où les agents qui agissent rencontrent les frontières de revue humaine."
      }
    ],
    "faqs": [
      {
        "q": "Faut-il une plateforme MDM avant de pouvoir utiliser l'IA ?",
        "a": "Non. La question est de savoir si votre cas d'usage dépend d'une identité d'entité faisant autorité : un assistant client en dépend généralement, un résumeur de documents non. Lorsque c'est le cas, nous appliquons le schéma de mastering le plus léger qui réponde au besoin, et ce n'est souvent pas l'achat d'une plateforme. Nous préférons vous dire que le MDM n'est pas votre contrainte plutôt que de vous vendre un programme que le cas d'usage ne justifie pas."
      },
      {
        "q": "La préparation à l'IA, est-ce la même chose que le MLOps ?",
        "a": "Non. Le MLOps en est une capacité d'exploitation parmi d'autres. La préparation couvre aussi les données, le contexte d'entreprise, les chemins d'accès, la gouvernance, l'évaluation et la propriété — et d'après notre expérience, ce sont ces éléments qui bloquent réellement l'approbation en production, bien après que la chaîne de déploiement fonctionne."
      },
      {
        "q": "Pouvez-vous travailler avec notre pile IA et cloud existante ?",
        "a": "Oui, et nous évaluons l'existant plutôt que de proposer un remplacement. Nous n'avons ni marge de revente ni quota partenaire avec aucune plateforme, ce qui garantit l'honnêteté de cette évaluation."
      },
      {
        "q": "Développez-vous des modèles ?",
        "a": "Cela dépend du périmètre, et ce n'est pas le cœur de l'offre. Ce que nous faisons, c'est le socle de données, de contexte et de gouvernance dont dépend l'IA en production. S'il vous faut une équipe de développement de modèles, c'est un autre cabinet, et nous le dirons plutôt que de la staffer."
      },
      {
        "q": "Comment gouvernez-vous les agents IA ?",
        "a": "En contrôlant l'identité, l'accès aux données et aux outils, les actions autorisées, les frontières d'approbation, la surveillance et les preuves. Un agent capable d'agir relève par défaut d'un niveau de risque supérieur, et la frontière d'approbation humaine est écrite avant la construction plutôt que découverte après un incident."
      },
      {
        "q": "Et si notre gouvernance des données est immature ?",
        "a": "Cela devient une partie de la feuille de route plutôt qu'une raison de s'arrêter. La séquence honnête est souvent gouvernance et entités maîtres d'abord, car tout cas d'usage futur en aura besoin et cela se rentabilise en reporting et en risque, que le programme IA aboutisse ou non."
      },
      {
        "q": "Peut-on commencer par un seul cas d'usage ?",
        "a": "Oui, et c'est généralement la meilleure porte d'entrée. Un cas d'usage prioritaire délimité révèle les exigences de socle et de contrôles réutilisables plus vite qu'une évaluation à l'échelle de l'entreprise, et produit quelque chose d'actionnable plutôt qu'un document."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "Évaluation de préparation à l'IA",
      "cta": "Demander une évaluation de préparation à l'IA",
      "body": "Une évaluation ciblée d'un ou plusieurs cas d'usage IA prioritaires, couvrant qualité des données, contexte faisant autorité, accès, gouvernance, architecture, évaluation et maturité d'exploitation. Vous repartez avec une vue écrite des écarts et un plan séquencé de ce qui doit changer avant la production.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en preparación y gobernanza de IA",
    "seoDescription": "Prepara datos fiables, contexto empresarial gobernado y controles de producción para modelos y agentes de IA. Consultoría sénior y neutral respecto a proveedores.",
    "eyebrow": "PREPARACIÓN Y GOBERNANZA DE IA",
    "h1": "Tu IA vale lo que valen los datos y controles que hay detrás.",
    "subhead": "Ayudamos a los equipos a preparar datos fiables, contexto empresarial gobernado y controles de producción para IA, de modo que modelos y agentes usen la información correcta, por las rutas de acceso correctas y con responsabilidad clara.",
    "transformation": "Experimentación → Producción gobernada",
    "signals": [
      "Los pilotos funcionan con muestras curadas y fallan al conectarse a los datos reales.",
      "Nadie sabe decir en qué registro de cliente, producto o proveedor debería confiar un sistema de IA.",
      "Los datos sensibles son técnicamente alcanzables, pero el uso permitido por modelos o agentes no está claro.",
      "Distintos equipos construyen patrones de RAG, agentes y modelos separados, sin controles comunes.",
      "Nadie es dueño de la ruta de aprobación del experimento a producción.",
      "Los cambios de modelo, prompt, recuperación y datos son difíciles de reconstruir tras el despliegue.",
      "La revisión humana ocurre por costumbre; las fronteras de escalado y anulación no están escritas.",
      "La dirección pide avances en IA mientras calidad, linaje y propiedad siguen sin resolverse."
    ],
    "consequenceFlow": [
      "Datos fragmentados o mal gobernados",
      "Contexto empresarial ambiguo — sin respuesta acordada sobre a qué se refiere un registro",
      "Acceso de IA no controlado a ese contexto",
      "Salidas inconsistentes y trazabilidad débil",
      "La aprobación para producción se atasca, sube el riesgo operativo y baja la confianza"
    ],
    "consequenceNote": "Ninguno de estos es un problema de modelo, y por eso comprar un modelo mejor no los mueve. La restricción está en lo que el modelo puede ver, en si esa información es fiable y en quién responde cuando es incorrecta.",
    "transformationRows": [
      {
        "before": "Pilotos construidos sobre los datos más cómodos",
        "after": "Casos de uso ligados a fuentes de datos y conocimiento gobernadas"
      },
      {
        "before": "Identidades de cliente y producto contradictorias",
        "after": "Entidades maestras autorizadas y contexto controlado, cuando el caso de uso lo requiere"
      },
      {
        "before": "Acceso amplio o improvisado",
        "after": "Rutas de acceso por finalidad y controles de política"
      },
      {
        "before": "Propiedad de la IA poco clara",
        "after": "Responsables nombrados de caso de uso, datos, modelo y controles"
      },
      {
        "before": "Una única prueba antes del lanzamiento",
        "after": "Puertas de evaluación más monitorización continua"
      },
      {
        "before": "Cambios de prompt, modelo y datos irreconstruibles",
        "after": "Versionado, linaje y evidencia conservada"
      },
      {
        "before": "Revisión humana por costumbre",
        "after": "Fronteras definidas de supervisión humana y escalado"
      },
      {
        "before": "Gobernanza de IA como documento de política",
        "after": "Controles integrados en la arquitectura y el ciclo de vida"
      }
    ],
    "capabilities": [
      {
        "title": "Evaluación de preparación",
        "body": "Inventariar los casos de uso prioritarios y evaluar las brechas reales de cada uno en datos, contexto, acceso, gobernanza, arquitectura y operación. La preparación es propiedad de un caso de uso, no de una organización."
      },
      {
        "title": "Base de datos fiables",
        "body": "Identificar las fuentes autorizadas, los requisitos de calidad, las transformaciones y los patrones de servicio de los que depende un caso de uso, y decir con claridad cuáles todavía no existen."
      },
      {
        "title": "Contexto empresarial maestro",
        "body": "Cuando un caso de uso depende de una identidad consistente de cliente, producto, proveedor, organización o ubicación, el MDM y la resolución de entidades la aportan. Cuando no, lo decimos en lugar de vender un programa de mastering que el caso de uso no justifica."
      },
      {
        "title": "Arquitectura de conocimiento y recuperación",
        "body": "Patrones de recuperación y contexto gobernados, metadatos, refresco y retirada, y las fronteras de acceso apropiadas al caso de uso. La mayoría de respuestas seguras pero erróneas son fallos de recuperación, no de modelo."
      },
      {
        "title": "Gobernanza de IA",
        "body": "Admisión de casos de uso, niveles de riesgo, aprobaciones, responsabilidad, evidencia y controles de ciclo de vida. El marco corporativo vive en la página de Gobernanza y MDM; aquí se encuentra con un caso de uso real."
      },
      {
        "title": "Gobernanza de acceso de agentes y modelos",
        "body": "Qué datos, herramientas y acciones puede alcanzar un modelo o agente, con mínimo privilegio y fronteras de aprobación humana definidas antes de construir. Un agente que puede actuar es un problema de gobernanza distinto del que solo responde."
      },
      {
        "title": "Evaluación y monitorización",
        "body": "Puertas de evaluación previas a producción y después monitorización de calidad, seguridad y operación con un responsable. Un modelo evaluado una sola vez al lanzarlo no está gobernado: está sin monitorizar."
      },
      {
        "title": "Habilitación y traspaso",
        "body": "Decisiones de arquitectura, mapeo de controles, procedimientos y propiedad entregados a tu equipo. Una función de gobernanza de IA que depende de una firma externa no puede decidir a tiempo."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Las fuentes corporativas alimentan una capa de confianza y contexto: calidad, resolución de entidades cuando la identidad importa, datos de referencia, metadatos y linaje. De ahí salen datos y conocimiento gobernados: productos de datos curados, contexto semántico y recuperación controlada. Una capa de acceso de IA se sitúa entre eso y los modelos: API, servicios de recuperación, pasarelas de herramientas, aplicación de políticas e identidad. Los servicios de IA la consumen, y una capa humana sostiene revisión, aprobación y escalado. Gobernanza de IA, privacidad y seguridad, observabilidad, evaluación y evidencia de auditoría atraviesan toda la pila, incluidas las acciones que ejecuta un agente. Lo que este diagrama NO dice: que cada caso de uso de IA necesite un hub MDM centralizado. El mastering se gana su sitio donde la identidad de entidad es aquello sobre lo que gira el caso de uso, y no en otro caso.",
      "layers": [
        {
          "name": "Fuentes corporativas",
          "items": [
            "CRM",
            "ERP",
            "Bases operativas",
            "SaaS",
            "Documentos",
            "API",
            "Flujos de eventos"
          ]
        },
        {
          "name": "Confianza y contexto",
          "items": [
            "Calidad de datos",
            "MDM / resolución de entidades",
            "Datos de referencia",
            "Metadatos",
            "Linaje"
          ]
        },
        {
          "name": "Datos y conocimiento gobernados",
          "items": [
            "Productos de datos curados",
            "Contexto semántico",
            "Bases de conocimiento",
            "Recuperación controlada"
          ]
        },
        {
          "name": "Capa de acceso de IA",
          "items": [
            "API",
            "Servicios de recuperación",
            "Pasarelas de herramientas",
            "Aplicación de políticas",
            "Identidad y acceso"
          ]
        },
        {
          "name": "Servicios de IA",
          "items": [
            "Modelos",
            "Aplicaciones RAG",
            "Copilotos",
            "Agentes",
            "Servicios de decisión"
          ]
        },
        {
          "name": "Capa humana y de negocio",
          "items": [
            "Revisión",
            "Aprobación",
            "Escalado",
            "Operaciones",
            "Flujos de negocio"
          ]
        }
      ],
      "crossCutting": [
        "Gobernanza de IA",
        "Privacidad y seguridad",
        "Observabilidad",
        "Evaluación",
        "Evidencia de auditoría",
        "Gestión del ciclo de vida"
      ]
    },
    "deliverables": [
      "Cuadro de preparación de IA por caso de uso prioritario, con los bloqueos nombrados en lugar de puntuados",
      "Mapa de riesgos y dependencias del estado actual",
      "Mapa de datos y contexto autorizado, incluyendo dónde el MDM es realmente necesario y dónde no",
      "Arquitectura objetivo de datos y conocimiento para IA",
      "Diseño de control de acceso y gobernanza de IA, cubriendo datos, herramientas y acciones",
      "Matriz de riesgo y controles por caso de uso, con el flujo de aprobación",
      "Requisitos de evaluación y monitorización",
      "Backlog de remediación priorizado y hoja de ruta secuenciada",
      "Registros de decisiones de arquitectura, modelo de propiedad y documentación de traspaso"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Priorizar los casos de uso, incluidos los que corren fuera de cualquier programa, y examinar las restricciones de datos, conocimiento, arquitectura, gobernanza y operación que encuentra cada uno."
      },
      {
        "step": "Diseñar",
        "body": "Definir la arquitectura objetivo de datos y contexto, los controles, los patrones de acceso y los derechos de decisión. Diseñados por nivel de riesgo, no una vez para todo."
      },
      {
        "step": "Probar",
        "body": "Cuando el alcance lo justifique, validar un patrón acotado de arquitectura y controles contra un caso de uso prioritario, en lugar de afirmar que el diseño aguantará."
      },
      {
        "step": "Habilitar",
        "body": "Transferir decisiones, artefactos, procedimientos, propiedad y la hoja de ruta de lo que sigue."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Arquitectura representativa: preparación para IA en una empresa regulada",
        "body": "Una institución financiera con casos de uso de IA aprobados y sin respuesta acordada sobre si los datos subyacentes pueden usarse lícitamente. El patrón muestra cómo encajan las piezas: la resolución de entidades aporta una noción estable de quién es el cliente, la recuperación gobernada decide qué puede ver un asistente, el linaje permite rastrear una salida hasta un registro real, y una frontera escrita de aprobación humana gobierna todo lo que actúa en lugar de responder. Cada pieza es corriente; la preparación está en cómo se conectan.",
        "outcome": "Lo que deja el proyecto: una matriz de riesgo y controles por caso de uso, el diseño de acceso bajo el que operarán los agentes, y una vista secuenciada de lo que debe cambiar antes de producción."
      },
      {
        "proofType": "priorExperience",
        "title": "Resolución de entidades como base de una vista única de cliente",
        "body": "Un banco norteamericano de primer nivel donde banca minorista, empresarial y patrimonial guardaban cada una su versión del cliente. El registro maestro y el linaje hacia cada origen contribuyente son exactamente lo que un sistema de IA necesita para responder de forma consistente sobre un cliente: el mismo trabajo que servía a los investigadores sirve a un agente que debe saber que tres registros son una persona."
      }
    ],
    "technologies": [
      {
        "group": "Plataformas de IA",
        "items": [
          "Azure OpenAI",
          "AWS Bedrock",
          "Google Vertex AI",
          "Databricks Mosaic"
        ]
      },
      {
        "group": "Recuperación y vectores",
        "items": [
          "Azure AI Search",
          "pgvector",
          "Elasticsearch",
          "OpenSearch"
        ]
      },
      {
        "group": "Gobernanza y contexto",
        "items": [
          "Informatica MDM",
          "Collibra",
          "Microsoft Purview",
          "OpenLineage"
        ]
      },
      {
        "group": "Evaluación y monitorización",
        "items": [
          "Arneses de evaluación",
          "Monitorización de deriva",
          "Registro de auditoría estructurado"
        ]
      }
    ],
    "practitionerNote": "El trabajo de preparación para IA lo dirige nuestro socio principal, cuya trayectoria abarca arquitectura de datos corporativos, gobernanza, MDM y resolución de entidades, linaje y controles en servicios financieros, más quince años traduciendo capacidades de proveedores en patrones operativos de producción. Importa aquí porque las preguntas que un auditor hace sobre una cifra regulatoria son las que deberías hacer sobre las entradas de un modelo.",
    "relatedInsights": [
      {
        "kind": "Solución",
        "label": "Gobernanza de datos y MDM — donde vive el marco de gobernanza de IA",
        "href": "/es/solutions/data-governance/"
      },
      {
        "kind": "Evaluación",
        "label": "Diagnóstico de datos — si aún no sabes si la restricción es específica de IA",
        "href": "/es/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Gobernanza de datos y MDM",
        "href": "/solutions/data-governance/",
        "why": "El marco de gobernanza de IA y las entidades maestras que la IA necesita como contexto."
      },
      {
        "label": "Integración e ingeniería de datos",
        "href": "/solutions/data-integration/",
        "why": "Hacer los datos alcanzables y fiables de entrada."
      },
      {
        "label": "Automatización de procesos",
        "href": "/solutions/process-automation/",
        "why": "Donde los agentes que actúan se encuentran con las fronteras de revisión humana."
      }
    ],
    "faqs": [
      {
        "q": "¿Necesitamos una plataforma MDM antes de poder usar IA?",
        "a": "No. La pregunta es si tu caso de uso depende de una identidad de entidad autorizada: un asistente de clientes suele depender, un resumidor de documentos no. Cuando depende, aplicamos el patrón de mastering más ligero que cubra la necesidad, y a menudo no es comprar una plataforma. Preferimos decirte que el MDM no es tu restricción antes que venderte un programa que el caso de uso no justifica."
      },
      {
        "q": "¿La preparación para IA es lo mismo que MLOps?",
        "a": "No. MLOps es una capacidad operativa dentro de ella. La preparación cubre además los datos, el contexto corporativo, las rutas de acceso, la gobernanza, la evaluación y la propiedad, y por experiencia eso es lo que realmente bloquea la aprobación para producción, mucho después de que el pipeline de despliegue funcione bien."
      },
      {
        "q": "¿Podéis trabajar con nuestra pila de IA y cloud actual?",
        "a": "Sí, y evaluamos lo que ya existe en lugar de proponer un reemplazo. No tenemos margen de reventa ni cuota de partner con ninguna plataforma, que es lo que mantiene honesta esa evaluación."
      },
      {
        "q": "¿Desarrolláis modelos?",
        "a": "Depende del alcance y no es el núcleo de la oferta. Lo que hacemos es la base de datos, contexto y gobernanza de la que depende la IA en producción. Si necesitas un equipo de desarrollo de modelos, esa es otra firma, y lo diremos en lugar de dotarla."
      },
      {
        "q": "¿Cómo gobernáis los agentes de IA?",
        "a": "Controlando identidad, acceso a datos y herramientas, acciones permitidas, fronteras de aprobación, monitorización y evidencia. Un agente que puede actuar es un nivel de riesgo superior por defecto, y la frontera de aprobación humana se escribe antes de construir en lugar de descubrirse tras un incidente."
      },
      {
        "q": "¿Y si nuestra gobernanza de datos es inmadura?",
        "a": "Entonces pasa a formar parte de la hoja de ruta en lugar de ser motivo para parar. La secuencia honesta suele ser gobernanza y entidades maestras primero, porque cualquier caso futuro lo necesitará y se paga solo en reporte y riesgo, salga o no adelante el programa de IA."
      },
      {
        "q": "¿Podemos empezar con un solo caso de uso?",
        "a": "Sí, y suele ser la mejor entrada. Un caso prioritario acotado expone los requisitos de base y de control reutilizables más rápido que una evaluación de toda la empresa, y produce algo accionable en vez de un documento."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "Evaluación de Preparación para IA",
      "cta": "Solicitar una Evaluación de Preparación para IA",
      "body": "Una evaluación focalizada de uno o varios casos de uso de IA prioritarios en calidad de datos, contexto autorizado, acceso, gobernanza, arquitectura, evaluación y preparación operativa. Terminas con una vista escrita de las brechas y un plan secuenciado de lo que debe cambiar antes de producción.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em prontidão e governança de IA",
    "seoDescription": "Prepare dados confiáveis, contexto corporativo governado e controles de produção para modelos e agentes de IA. Consultoria sênior e neutra em relação a fornecedores.",
    "eyebrow": "PRONTIDÃO E GOVERNANÇA DE IA",
    "h1": "Sua IA vale o que valem os dados e os controles por trás dela.",
    "subhead": "Ajudamos equipes a preparar dados confiáveis, contexto corporativo governado e controles de produção para IA, para que modelos e agentes usem a informação certa, pelos caminhos de acesso certos, com responsabilidade clara.",
    "transformation": "Experimentação → Produção governada",
    "signals": [
      "Os pilotos funcionam com amostras curadas e falham ao serem ligados aos dados reais.",
      "Ninguém sabe dizer em qual registro de cliente, produto ou fornecedor um sistema de IA deveria confiar.",
      "Dados sensíveis são tecnicamente alcançáveis, mas o uso permitido por modelos ou agentes não está claro.",
      "Equipes diferentes constroem padrões separados de RAG, agentes e modelos, sem controles comuns.",
      "Ninguém é dono do caminho de aprovação do experimento até a produção.",
      "Mudanças de modelo, prompt, recuperação e dados são difíceis de reconstruir após o deploy.",
      "A revisão humana acontece por costume; as fronteiras de escalonamento e sobrescrita não estão escritas.",
      "A liderança pede avanços em IA enquanto qualidade, linhagem e propriedade seguem sem solução."
    ],
    "consequenceFlow": [
      "Dados fragmentados ou mal governados",
      "Contexto corporativo ambíguo — sem resposta acordada sobre a que um registro se refere",
      "Acesso de IA não controlado a esse contexto",
      "Saídas inconsistentes e rastreabilidade fraca",
      "A aprovação para produção trava, o risco operacional sobe e a confiança cai"
    ],
    "consequenceNote": "Nenhum desses é problema de modelo, e por isso comprar um modelo melhor não os resolve. A restrição está no que o modelo pode ver, em se aquela informação é confiável e em quem responde quando ela está errada.",
    "transformationRows": [
      {
        "before": "Pilotos construídos sobre os dados mais convenientes",
        "after": "Casos de uso ligados a fontes de dados e conhecimento governadas"
      },
      {
        "before": "Identidades de cliente e produto conflitantes",
        "after": "Entidades mestras oficiais e contexto controlado, quando o caso de uso exige"
      },
      {
        "before": "Acesso amplo ou improvisado",
        "after": "Caminhos de acesso por finalidade e controles de política"
      },
      {
        "before": "Propriedade da IA pouco clara",
        "after": "Donos nomeados de caso de uso, dados, modelo e controles"
      },
      {
        "before": "Um único teste antes do lançamento",
        "after": "Portões de avaliação mais monitoramento contínuo"
      },
      {
        "before": "Mudanças de prompt, modelo e dados difíceis de reconstruir",
        "after": "Versionamento, linhagem e evidência retida"
      },
      {
        "before": "Revisão humana por costume",
        "after": "Fronteiras definidas de supervisão humana e escalonamento"
      },
      {
        "before": "Governança de IA como documento de política",
        "after": "Controles embutidos na arquitetura e no ciclo de vida"
      }
    ],
    "capabilities": [
      {
        "title": "Avaliação de prontidão",
        "body": "Inventariar os casos de uso prioritários e avaliar as lacunas reais de cada um em dados, contexto, acesso, governança, arquitetura e operação. Prontidão é propriedade de um caso de uso, não de uma organização."
      },
      {
        "title": "Base de dados confiáveis",
        "body": "Identificar as fontes oficiais, os requisitos de qualidade, as transformações e os padrões de entrega dos quais um caso de uso depende, e dizer com clareza quais ainda não existem."
      },
      {
        "title": "Contexto corporativo mestre",
        "body": "Quando um caso de uso depende de identidade consistente de cliente, produto, fornecedor, organização ou localização, MDM e resolução de entidades a fornecem. Quando não, dizemos isso em vez de vender um programa de mastering que o caso de uso não justifica."
      },
      {
        "title": "Arquitetura de conhecimento e recuperação",
        "body": "Padrões governados de recuperação e contexto, metadados, atualização e aposentadoria, e as fronteiras de acesso adequadas ao caso de uso. A maioria das respostas confiantes e erradas são falhas de recuperação, não de modelo."
      },
      {
        "title": "Governança de IA",
        "body": "Admissão de casos de uso, níveis de risco, aprovações, responsabilidade, evidência e controles de ciclo de vida. O arcabouço corporativo vive na página de Governança e MDM; aqui ele encontra um caso de uso real."
      },
      {
        "title": "Governança de acesso de agentes e modelos",
        "body": "Quais dados, ferramentas e ações um modelo ou agente pode alcançar, com menor privilégio e fronteiras de aprovação humana definidas antes de construir. Um agente que pode agir é um problema de governança diferente do que apenas responde."
      },
      {
        "title": "Avaliação e monitoramento",
        "body": "Portões de avaliação antes da produção e depois monitoramento de qualidade, segurança e operação com um responsável. Um modelo avaliado uma única vez no lançamento não está governado: está sem monitoramento."
      },
      {
        "title": "Habilitação e repasse",
        "body": "Decisões de arquitetura, mapeamento de controles, runbooks e propriedade entregues à sua equipe. Uma função de governança de IA que depende de uma firma externa não consegue decidir a tempo."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "As fontes corporativas alimentam uma camada de confiança e contexto: qualidade, resolução de entidades quando a identidade importa, dados de referência, metadados e linhagem. Dali saem dados e conhecimento governados: produtos de dados curados, contexto semântico e recuperação controlada. Uma camada de acesso de IA fica entre isso e os modelos: APIs, serviços de recuperação, gateways de ferramentas, aplicação de políticas e identidade. Os serviços de IA consomem, e uma camada humana sustenta revisão, aprovação e escalonamento. Governança de IA, privacidade e segurança, observabilidade, avaliação e evidência de auditoria atravessam toda a pilha, inclusive as ações que um agente executa. O que este diagrama NÃO diz: que todo caso de uso de IA precisa de um hub de MDM centralizado. O mastering ganha seu lugar onde a identidade de entidade é aquilo em que o caso de uso se apoia, e não fora disso.",
      "layers": [
        {
          "name": "Fontes corporativas",
          "items": [
            "CRM",
            "ERP",
            "Bancos operacionais",
            "SaaS",
            "Documentos",
            "APIs",
            "Fluxos de eventos"
          ]
        },
        {
          "name": "Confiança e contexto",
          "items": [
            "Qualidade de dados",
            "MDM / resolução de entidades",
            "Dados de referência",
            "Metadados",
            "Linhagem"
          ]
        },
        {
          "name": "Dados e conhecimento governados",
          "items": [
            "Produtos de dados curados",
            "Contexto semântico",
            "Bases de conhecimento",
            "Recuperação controlada"
          ]
        },
        {
          "name": "Camada de acesso de IA",
          "items": [
            "APIs",
            "Serviços de recuperação",
            "Gateways de ferramentas",
            "Aplicação de políticas",
            "Identidade e acesso"
          ]
        },
        {
          "name": "Serviços de IA",
          "items": [
            "Modelos",
            "Aplicações RAG",
            "Copilotos",
            "Agentes",
            "Serviços de decisão"
          ]
        },
        {
          "name": "Camada humana e de negócio",
          "items": [
            "Revisão",
            "Aprovação",
            "Escalonamento",
            "Operações",
            "Fluxos de negócio"
          ]
        }
      ],
      "crossCutting": [
        "Governança de IA",
        "Privacidade e segurança",
        "Observabilidade",
        "Avaliação",
        "Evidência de auditoria",
        "Gestão do ciclo de vida"
      ]
    },
    "deliverables": [
      "Painel de prontidão para IA por caso de uso prioritário, com os bloqueios nomeados em vez de pontuados",
      "Mapa de riscos e dependências do estado atual",
      "Mapa de dados e contexto oficial, incluindo onde o MDM é realmente necessário e onde não é",
      "Arquitetura-alvo de dados e conhecimento para IA",
      "Desenho de controle de acesso e governança de IA, cobrindo dados, ferramentas e ações",
      "Matriz de risco e controles por caso de uso, com o fluxo de aprovação",
      "Requisitos de avaliação e monitoramento",
      "Backlog de remediação priorizado e roteiro sequenciado",
      "Registros de decisões de arquitetura, modelo de propriedade e documentação de repasse"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Priorizar os casos de uso, inclusive os que rodam fora de qualquer programa, e examinar as restrições de dados, conhecimento, arquitetura, governança e operação que cada um encontra."
      },
      {
        "step": "Projetar",
        "body": "Definir a arquitetura-alvo de dados e contexto, os controles, os padrões de acesso e os direitos de decisão. Projetados por nível de risco, não uma vez para tudo."
      },
      {
        "step": "Provar",
        "body": "Quando o escopo justificar, validar um padrão delimitado de arquitetura e controles contra um caso de uso prioritário, em vez de afirmar que o desenho vai se sustentar."
      },
      {
        "step": "Habilitar",
        "body": "Transferir decisões, artefatos, runbooks, propriedade e o roteiro do que vem depois."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Arquitetura representativa: prontidão para IA numa empresa regulada",
        "body": "Uma instituição financeira com casos de uso de IA aprovados e sem resposta acordada sobre se os dados subjacentes podem ser usados licitamente. O padrão mostra como as peças se conectam: a resolução de entidades dá uma noção estável de quem é o cliente, a recuperação governada decide o que um assistente pode ver, a linhagem permite rastrear uma saída até um registro real, e uma fronteira escrita de aprovação humana governa tudo o que age em vez de responder. Cada peça é comum; a prontidão está em como elas se ligam.",
        "outcome": "O que o projeto deixa: uma matriz de risco e controles por caso de uso, o desenho de acesso sob o qual os agentes vão operar, e uma visão sequenciada do que precisa mudar antes da produção."
      },
      {
        "proofType": "priorExperience",
        "title": "Resolução de entidades como base para uma visão única do cliente",
        "body": "Um banco norte-americano de primeira linha onde varejo, corporativo e wealth guardavam cada um a sua versão do cliente. O registro mestre e a linhagem até cada origem contribuinte são exatamente o que um sistema de IA precisa para responder de forma consistente sobre um cliente: o mesmo trabalho que serviu aos investigadores serve a um agente que precisa saber que três registros são uma pessoa."
      }
    ],
    "technologies": [
      {
        "group": "Plataformas de IA",
        "items": [
          "Azure OpenAI",
          "AWS Bedrock",
          "Google Vertex AI",
          "Databricks Mosaic"
        ]
      },
      {
        "group": "Recuperação e vetores",
        "items": [
          "Azure AI Search",
          "pgvector",
          "Elasticsearch",
          "OpenSearch"
        ]
      },
      {
        "group": "Governança e contexto",
        "items": [
          "Informatica MDM",
          "Collibra",
          "Microsoft Purview",
          "OpenLineage"
        ]
      },
      {
        "group": "Avaliação e monitoramento",
        "items": [
          "Arcabouços de avaliação",
          "Monitoramento de desvio",
          "Log de auditoria estruturado"
        ]
      }
    ],
    "practitionerNote": "O trabalho de prontidão para IA é liderado pelo nosso sócio principal, cuja trajetória cobre arquitetura de dados corporativos, governança, MDM e resolução de entidades, linhagem e controles em serviços financeiros, além de quinze anos traduzindo capacidade de fornecedores em padrões operacionais de produção. Isso importa aqui porque as perguntas que um auditor faz sobre um número regulatório são as que você deveria fazer sobre as entradas de um modelo.",
    "relatedInsights": [
      {
        "kind": "Solução",
        "label": "Governança de dados e MDM — onde vive o arcabouço de governança de IA",
        "href": "/pt/solutions/data-governance/"
      },
      {
        "kind": "Avaliação",
        "label": "Diagnóstico de dados — se você ainda não sabe se a restrição é específica de IA",
        "href": "/pt/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Governança de dados e MDM",
        "href": "/solutions/data-governance/",
        "why": "O arcabouço de governança de IA e as entidades mestras que a IA precisa como contexto."
      },
      {
        "label": "Integração e engenharia de dados",
        "href": "/solutions/data-integration/",
        "why": "Tornar os dados alcançáveis e confiáveis para começar."
      },
      {
        "label": "Automação de processos",
        "href": "/solutions/process-automation/",
        "why": "Onde agentes que agem encontram as fronteiras de revisão humana."
      }
    ],
    "faqs": [
      {
        "q": "Precisamos de uma plataforma de MDM antes de usar IA?",
        "a": "Não. A pergunta é se o seu caso de uso depende de identidade de entidade oficial: um assistente de clientes geralmente depende, um sumarizador de documentos geralmente não. Quando depende, aplicamos o padrão de mastering mais leve que atenda à necessidade, e muitas vezes isso não é comprar uma plataforma. Preferimos dizer que o MDM não é a sua restrição a vender um programa que o caso de uso não justifica."
      },
      {
        "q": "Prontidão para IA é o mesmo que MLOps?",
        "a": "Não. MLOps é uma capacidade operacional dentro dela. A prontidão cobre também os dados, o contexto corporativo, os caminhos de acesso, a governança, a avaliação e a propriedade — e, pela nossa experiência, é isso que de fato trava a aprovação para produção, muito depois de o pipeline de deploy já funcionar."
      },
      {
        "q": "Vocês conseguem trabalhar com nossa pilha de IA e cloud atual?",
        "a": "Sim, e avaliamos o que já existe em vez de propor substituição. Não temos margem de revenda nem cota de parceiro com nenhuma plataforma, e é isso que mantém essa avaliação honesta."
      },
      {
        "q": "Vocês desenvolvem modelos?",
        "a": "Depende do escopo e não é o núcleo da oferta. O que fazemos é a base de dados, contexto e governança da qual a IA em produção depende. Se você precisa de um time de desenvolvimento de modelos, essa é outra firma, e diremos isso em vez de alocá-la."
      },
      {
        "q": "Como vocês governam agentes de IA?",
        "a": "Controlando identidade, acesso a dados e ferramentas, ações permitidas, fronteiras de aprovação, monitoramento e evidência. Um agente que pode agir é um nível de risco superior por padrão, e a fronteira de aprovação humana é escrita antes de construir em vez de descoberta após um incidente."
      },
      {
        "q": "E se nossa governança de dados for imatura?",
        "a": "Então ela entra no roteiro em vez de ser motivo para parar. A sequência honesta costuma ser governança e entidades mestras primeiro, porque qualquer caso futuro vai precisar disso e se paga em relatórios e risco, aconteça ou não o programa de IA."
      },
      {
        "q": "Podemos começar com um caso de uso só?",
        "a": "Sim, e normalmente é a melhor porta de entrada. Um caso prioritário delimitado expõe os requisitos reutilizáveis de base e de controle mais rápido do que uma avaliação corporativa inteira, e produz algo acionável em vez de um documento."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "Avaliação de Prontidão para IA",
      "cta": "Solicitar uma Avaliação de Prontidão para IA",
      "body": "Uma avaliação focada de um ou mais casos de uso de IA prioritários em qualidade de dados, contexto oficial, acesso, governança, arquitetura, avaliação e prontidão operacional. Você termina com uma visão escrita das lacunas e um plano sequenciado do que precisa mudar antes da produção.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
