// AI Readiness — Sprint 7C.
//
// Content only; DeepSolution.jsx renders it. See src/lib/solutionSchema.js.
//
// Five architecture stages rather than six or seven, and the cross-cutting plane
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
    "seoTitle": "AI Readiness Consulting",
    "seoDescription": "Assess whether your data can support AI in production: entity resolution, provenance, permitted use, retrieval and access governance, plus the AI governance controls around models and agents.",
    "eyebrow": "AI READINESS",
    "h1": "Your AI ambition is ahead of your data. Most are.",
    "subhead": "Pilots work and production stalls, because the model was never the constraint. We assess whether your data is accurate, permitted, resolvable to a single entity and reachable under control — then build the governed context and access layer that AI systems and agents actually need.",
    "transformation": "Experimentation → Production readiness",
    "signals": [
      "Pilots demo well and never reach production, and nobody can name the blocker.",
      "An assistant answers confidently from a document that was superseded months ago.",
      "Nobody can say which data a use case is lawfully permitted to use.",
      "The same customer appears three ways, so the model has no stable notion of who it is talking about.",
      "Agents are being given broad access because scoping it properly is hard.",
      "There is no inventory of AI use cases, owners or risk levels."
    ],
    "consequenceFlow": [
      "Enterprise data is inaccessible, ungoverned or unresolvable to a single entity",
      "Teams work around it with copies, exports and broad access grants",
      "Outputs cannot be traced to a trusted source record",
      "Nobody will sign off the use case for production",
      "The pilot is quietly retired and the ambition moves to the next one"
    ],
    "consequenceNote": "AI does not fail on model quality nearly as often as it fails on inputs and permission. An agent with broad access to inconsistent data is not an AI problem; it is a governance problem that now runs at machine speed.",
    "transformationRows": [
      {
        "before": "Pilots that stall before production",
        "after": "Use cases with a named owner and a route to sign-off"
      },
      {
        "before": "Raw source access for models and agents",
        "after": "Authoritative entity views exposed through controlled services"
      },
      {
        "before": "Unknown provenance",
        "after": "Outputs traceable to trusted enterprise records"
      },
      {
        "before": "Broad, undocumented agent permissions",
        "after": "Scoped access governance for data, tools and actions"
      },
      {
        "before": "No AI inventory",
        "after": "Use-case register with risk tiers and control requirements"
      },
      {
        "before": "Evaluation as a demo",
        "after": "Evaluation gates, drift monitoring and incident response"
      }
    ],
    "capabilities": [
      {
        "title": "AI data readiness assessment",
        "body": "Whether the data behind each approved use case is accurate, complete, permitted and resolvable. Assessed per use case, because readiness is not a property of an organisation — it is a property of a specific use case and the data it touches."
      },
      {
        "title": "Mastered entities as AI context",
        "body": "AI systems need authoritative context, not more raw data. Trusted customer, product, supplier, organisation and location entities give consistent identity, relationships and attributes, so an agent knows that three records are one customer."
      },
      {
        "title": "Retrieval and knowledge access",
        "body": "How content is chunked, indexed, refreshed and permissioned, and how superseded material is retired. Most confidently wrong answers are retrieval problems rather than model problems."
      },
      {
        "title": "Access governance for agents",
        "body": "Scoped access to data, tools and actions, with permitted-use rules applied to the attributes surfaced to a model. Broad access granted because scoping was hard is the most common finding we see."
      },
      {
        "title": "AI governance in practice",
        "body": "Use-case intake and approval, risk tiering, model and agent documentation, versioning and traceability, human-in-the-loop boundaries and escalation. The framework lives on the Governance & MDM page; this is where it meets a real use case."
      },
      {
        "title": "Evaluation and monitoring",
        "body": "Evaluation gates before release, then drift, quality and incident signals afterwards, with an owner. A model that was evaluated once at launch is unmonitored, not governed."
      }
    ],
    "architecture": {
      "title": "Reference architecture: governed context for AI",
      "description": "Source systems and content feed a governed data and knowledge layer, where mastered entities supply authoritative identity and attributes rather than raw records. A retrieval and access layer exposes that context through controlled services, applying permitted-use rules per attribute, so a model or agent receives a scoped view rather than a database connection. AI services and agents sit above it, and everything they do is monitored and evaluated. AI governance, provenance, lineage, security and human oversight span the whole flow — including the actions an agent takes, which is the part most architectures leave out.",
      "layers": [
        {
          "name": "Sources & content",
          "items": [
            "Operational systems",
            "Documents",
            "Knowledge bases",
            "External data"
          ]
        },
        {
          "name": "Governed data & knowledge",
          "items": [
            "Mastered entities",
            "Curated datasets",
            "Indexed content",
            "Provenance"
          ]
        },
        {
          "name": "Retrieval & access",
          "items": [
            "Controlled APIs",
            "Entity views",
            "Permitted-use rules",
            "Scoped context"
          ]
        },
        {
          "name": "AI services & agents",
          "items": [
            "Models",
            "Agents and tools",
            "Orchestration",
            "Human-in-the-loop"
          ]
        },
        {
          "name": "Monitoring & evaluation",
          "items": [
            "Evaluation gates",
            "Drift and quality signals",
            "Incident response"
          ]
        }
      ],
      "crossCutting": [
        "AI governance and use-case risk tiering",
        "Provenance and lineage",
        "Access governance for data, tools and actions",
        "Security",
        "Human oversight and audit evidence"
      ]
    },
    "deliverables": [
      "AI use-case inventory with owners, risk tiers and control requirements per tier",
      "Data readiness findings per use case, with the blockers named rather than scored",
      "Entity resolution and mastered-context assessment for the entities the use cases depend on",
      "Retrieval and knowledge design: chunking, refresh, retirement of superseded content",
      "Access governance model for agents, covering data, tools and actions",
      "Permitted-use rules for attributes surfaced to models and agents",
      "Evaluation gate design and the monitoring signals to run afterwards",
      "Human-in-the-loop and escalation boundaries, written down",
      "A sequenced roadmap from the current state to a use case that can go to production"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Inventory the AI use cases that already exist, including the ones running outside any programme, and identify what data each actually touches."
      },
      {
        "step": "Design",
        "body": "Risk-tier the use cases, then assess data readiness and access for the ones that matter. Governed context and permitted-use rules are designed per tier, not once for everything."
      },
      {
        "step": "Deliver",
        "body": "Build the governed context and access layer for the highest-value use case that can realistically reach production, and the evaluation gate it has to pass."
      },
      {
        "step": "Enable",
        "body": "Hand over the intake process, the risk tiering and the monitoring practice, so the next use case does not need us."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Entity resolution as the foundation for a single customer view",
        "body": "A Tier 1 North American bank where retail, commercial and wealth each held their own version of a customer. The mastered record and the lineage back to every contributing source are exactly what an AI system needs in order to answer a question about a customer consistently — the same work that served financial crime investigators serves an agent that has to know which records are one person."
      },
      {
        "proofType": "representative",
        "title": "Representative pattern: an assistant that is confidently wrong",
        "body": "An internal assistant answering from a knowledge base where superseded policy documents were never retired and access was granted at the folder level. The finding is almost never the model: it is that retrieval has no notion of currency and no permission boundary, so the assistant is accurately reporting the wrong document to the wrong person.",
        "outcome": "What the engagement leaves behind: a retrieval design with refresh and retirement rules, permission boundaries applied at query time, and an evaluation gate that tests for exactly this failure."
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
    "practitionerNote": "AI readiness work is led by our principal, whose background is entity resolution, MDM, governance and lineage for Tier 1 financial institutions. That matters here because AI readiness is mostly those disciplines applied to a new consumer — the questions an auditor asks about a regulatory figure are the questions you should be asking about a model's inputs.",
    "relatedInsights": [
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Reckoning Deepens",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning-deepens/"
      },
      {
        "kind": "Solution",
        "label": "Data Governance & MDM — where the AI governance framework lives",
        "href": "/solutions/data-governance/"
      }
    ],
    "faqs": [
      {
        "q": "Do we need our data perfect before we start with AI?",
        "a": "No, and waiting for that is its own failure mode. Readiness is per use case: a use case touching three well-understood entities can proceed while the rest of the estate is still messy. What you should not do is start with the use case that depends on your worst data because it has the most exciting demo."
      },
      {
        "q": "Is this a model selection exercise?",
        "a": "No. Model choice is the least durable decision in the stack and the easiest to change later. This work is about inputs, access, context and control, which is where production sign-off actually gets blocked."
      },
      {
        "q": "How does MDM relate to AI readiness?",
        "a": "Mastered entities are the authoritative context layer. An agent that cannot tell that three records are one customer will give three answers, and no amount of prompt work fixes that. Trusted entities also carry provenance and match confidence, so an output can be traced back to a real record."
      },
      {
        "q": "What about agents that take actions, not just answer questions?",
        "a": "That raises the stakes and the governance requirement. Access governance has to cover tools and actions, not only data, and the human-in-the-loop boundary has to be written down before build rather than discovered after an incident. We treat action-taking agents as a higher risk tier by default."
      },
      {
        "q": "Who owns AI governance, us or you?",
        "a": "You do. We build the intake process, risk tiering, evaluation gates and monitoring practice, and hand them over. An AI governance function that depends on an external firm cannot make a timely decision, which defeats the point of having one."
      },
      {
        "q": "How is the AI Readiness Assessment different from the Data Health Check?",
        "a": "The Data Health Check looks across the whole estate. The AI Readiness Assessment starts from your AI use cases and works backwards to the data, access and controls each one needs. If you have approved use cases and stalled pilots, start here; if you do not yet know where the problems are, start with the Health Check."
      },
      {
        "q": "What if we have no AI use cases yet?",
        "a": "Then this is early, and we will say so. The honest sequence is usually governance and mastered entities first, because they are what any future use case will need and they pay for themselves in reporting and risk regardless of whether the AI programme ever happens."
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "The AI governance framework and the mastered entities AI needs as context."
      },
      {
        "label": "Data Integration",
        "href": "/solutions/data-integration/",
        "why": "Getting the data reachable in the first place."
      },
      {
        "label": "Process Automation",
        "href": "/solutions/process-automation/",
        "why": "Where agents that take actions meet human review boundaries."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "AI Readiness Assessment",
      "cta": "Book an AI Readiness Assessment",
      "body": "Starts from your AI use cases and works backwards. You finish with a use-case inventory and risk tiers, data readiness findings per use case with the blockers named, an access governance model for agents, and a sequence to get one use case to production.",
      "note": "Scope and commercial terms are agreed in writing before the assessment starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en préparation à l'IA",
    "seoDescription": "Évaluez si vos données peuvent soutenir l'IA en production : résolution d'entités, provenance, usage autorisé, récupération et gouvernance des accès, avec les contrôles de gouvernance autour des modèles et des agents.",
    "eyebrow": "PRÉPARATION À L'IA",
    "h1": "Votre ambition IA devance vos données. C'est le cas de presque tous.",
    "subhead": "Les pilotes fonctionnent et la production cale, parce que le modèle n'a jamais été la contrainte. Nous évaluons si vos données sont exactes, autorisées, rattachables à une entité unique et accessibles sous contrôle, puis nous construisons la couche de contexte et d'accès gouvernée dont les systèmes et agents IA ont réellement besoin.",
    "transformation": "Expérimentation → Prêt pour la production",
    "signals": [
      "Les pilotes démontrent bien et n'atteignent jamais la production, sans que personne sache nommer le blocage.",
      "Un assistant répond avec assurance à partir d'un document périmé depuis des mois.",
      "Personne ne peut dire quelles données un cas d'usage a légalement le droit d'utiliser.",
      "Le même client apparaît de trois façons : le modèle n'a aucune notion stable de son interlocuteur.",
      "On accorde des accès larges aux agents parce que les délimiter correctement est difficile.",
      "Il n'existe aucun inventaire des cas d'usage IA, de leurs propriétaires ou de leurs niveaux de risque."
    ],
    "consequenceFlow": [
      "Les données d'entreprise sont inaccessibles, non gouvernées ou non rattachables à une entité unique",
      "Les équipes contournent avec des copies, des exports et des accès larges",
      "Les sorties ne peuvent être rattachées à un enregistrement source fiable",
      "Personne ne valide le cas d'usage pour la production",
      "Le pilote est discrètement abandonné et l'ambition passe au suivant"
    ],
    "consequenceNote": "L'IA échoue bien moins souvent sur la qualité du modèle que sur les données d'entrée et les autorisations. Un agent doté d'un accès large à des données incohérentes n'est pas un problème d'IA : c'est un problème de gouvernance qui tourne désormais à la vitesse de la machine.",
    "transformationRows": [
      {
        "before": "Des pilotes qui calent avant la production",
        "after": "Des cas d'usage avec un propriétaire et un chemin de validation"
      },
      {
        "before": "Accès brut aux sources pour modèles et agents",
        "after": "Vues d'entités faisant autorité, exposées via des services contrôlés"
      },
      {
        "before": "Provenance inconnue",
        "after": "Sorties rattachables à des enregistrements d'entreprise fiables"
      },
      {
        "before": "Permissions d'agents larges et non documentées",
        "after": "Gouvernance d'accès délimitée pour données, outils et actions"
      },
      {
        "before": "Aucun inventaire IA",
        "after": "Registre des cas d'usage avec niveaux de risque et exigences de contrôle"
      },
      {
        "before": "L'évaluation comme démonstration",
        "after": "Seuils d'évaluation, surveillance de la dérive et réponse aux incidents"
      }
    ],
    "capabilities": [
      {
        "title": "Évaluation de la maturité des données pour l'IA",
        "body": "Les données derrière chaque cas d'usage validé sont-elles exactes, complètes, autorisées et rattachables. Évaluées par cas d'usage, car la maturité n'est pas une propriété de l'organisation : c'est une propriété d'un cas d'usage précis et des données qu'il touche."
      },
      {
        "title": "Les entités maîtres comme contexte IA",
        "body": "Les systèmes IA ont besoin d'un contexte faisant autorité, pas de plus de données brutes. Des entités client, produit, fournisseur, organisation et localisation fiables apportent identité, relations et attributs cohérents, pour qu'un agent sache que trois enregistrements ne font qu'un client."
      },
      {
        "title": "Récupération et accès à la connaissance",
        "body": "Comment le contenu est découpé, indexé, rafraîchi et autorisé, et comment le matériel périmé est retiré. La plupart des réponses fausses mais assurées sont des problèmes de récupération, pas de modèle."
      },
      {
        "title": "Gouvernance des accès pour les agents",
        "body": "Accès délimité aux données, outils et actions, avec des règles d'usage autorisé appliquées aux attributs exposés à un modèle. Un accès large accordé parce que la délimitation était difficile est le constat le plus fréquent."
      },
      {
        "title": "La gouvernance de l'IA en pratique",
        "body": "Admission et validation des cas d'usage, niveaux de risque, documentation des modèles et agents, versionnage et traçabilité, frontières de supervision humaine et escalade. Le cadre vit sur la page Gouvernance et MDM ; ici il rencontre un cas d'usage réel."
      },
      {
        "title": "Évaluation et surveillance",
        "body": "Des seuils d'évaluation avant mise en service, puis dérive, qualité et signaux d'incident ensuite, avec un responsable. Un modèle évalué une seule fois au lancement n'est pas gouverné : il est non surveillé."
      }
    ],
    "architecture": {
      "title": "Architecture de référence : un contexte gouverné pour l'IA",
      "description": "Les systèmes sources et les contenus alimentent une couche de données et de connaissances gouvernée, où les entités maîtres fournissent identité et attributs faisant autorité plutôt que des enregistrements bruts. Une couche de récupération et d'accès expose ce contexte via des services contrôlés, en appliquant des règles d'usage autorisé par attribut : un modèle ou un agent reçoit une vue délimitée et non une connexion à la base. Les services IA et les agents se placent au-dessus, et tout ce qu'ils font est surveillé et évalué. Gouvernance de l'IA, provenance, traçabilité, sécurité et supervision humaine traversent l'ensemble du flux, y compris les actions que prend un agent, qui est la partie que la plupart des architectures omettent.",
      "layers": [
        {
          "name": "Sources et contenus",
          "items": [
            "Systèmes opérationnels",
            "Documents",
            "Bases de connaissances",
            "Données externes"
          ]
        },
        {
          "name": "Données et connaissances gouvernées",
          "items": [
            "Entités maîtres",
            "Jeux de données organisés",
            "Contenu indexé",
            "Provenance"
          ]
        },
        {
          "name": "Récupération et accès",
          "items": [
            "API contrôlées",
            "Vues d'entités",
            "Règles d'usage autorisé",
            "Contexte délimité"
          ]
        },
        {
          "name": "Services IA et agents",
          "items": [
            "Modèles",
            "Agents et outils",
            "Orchestration",
            "Supervision humaine"
          ]
        },
        {
          "name": "Surveillance et évaluation",
          "items": [
            "Seuils d'évaluation",
            "Signaux de dérive et de qualité",
            "Réponse aux incidents"
          ]
        }
      ],
      "crossCutting": [
        "Gouvernance de l'IA et niveaux de risque",
        "Provenance et traçabilité",
        "Gouvernance des accès aux données, outils et actions",
        "Sécurité",
        "Supervision humaine et preuves d'audit"
      ]
    },
    "deliverables": [
      "Inventaire des cas d'usage IA avec propriétaires, niveaux de risque et exigences de contrôle par niveau",
      "Constats de maturité des données par cas d'usage, avec les blocages nommés plutôt que notés",
      "Évaluation de la résolution d'entités et du contexte maître pour les entités dont dépendent les cas d'usage",
      "Conception de la récupération et des connaissances : découpage, rafraîchissement, retrait du contenu périmé",
      "Modèle de gouvernance des accès pour les agents, couvrant données, outils et actions",
      "Règles d'usage autorisé pour les attributs exposés aux modèles et aux agents",
      "Conception des seuils d'évaluation et des signaux de surveillance à exploiter ensuite",
      "Frontières de supervision humaine et d'escalade, écrites",
      "Une feuille de route séquencée de l'état actuel jusqu'à un cas d'usage capable d'aller en production"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Inventorier les cas d'usage IA déjà existants, y compris ceux qui tournent hors de tout programme, et identifier les données que chacun touche réellement."
      },
      {
        "step": "Concevoir",
        "body": "Classer les cas d'usage par niveau de risque, puis évaluer maturité des données et accès pour ceux qui comptent. Contexte gouverné et règles d'usage autorisé se conçoivent par niveau, pas une fois pour tout."
      },
      {
        "step": "Livrer",
        "body": "Construire la couche de contexte et d'accès gouvernée pour le cas d'usage à plus forte valeur qui peut réellement atteindre la production, et le seuil d'évaluation qu'il doit franchir."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre le processus d'admission, la classification des risques et la pratique de surveillance, pour que le cas d'usage suivant n'ait pas besoin de nous."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "La résolution d'entités comme socle d'une vue client unique",
        "body": "Une banque nord-américaine de premier plan où la banque de détail, l'entreprise et la gestion de patrimoine détenaient chacune leur version du client. L'enregistrement de référence et la traçabilité vers chaque source contributrice sont exactement ce dont un système IA a besoin pour répondre de façon cohérente à une question sur un client : le même travail qui servait les enquêteurs sert un agent qui doit savoir que trois enregistrements ne font qu'une personne."
      },
      {
        "proofType": "representative",
        "title": "Schéma représentatif : un assistant qui se trompe avec assurance",
        "body": "Un assistant interne répondant à partir d'une base de connaissances où les documents de politique périmés n'ont jamais été retirés et où les accès étaient accordés au niveau du dossier. Le constat n'est presque jamais le modèle : c'est que la récupération n'a aucune notion d'actualité ni de frontière de permission, si bien que l'assistant rapporte fidèlement le mauvais document à la mauvaise personne.",
        "outcome": "Ce que la mission laisse derrière elle : une conception de récupération avec règles de rafraîchissement et de retrait, des frontières de permission appliquées au moment de la requête, et un seuil d'évaluation qui teste précisément ce mode de défaillance."
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
    "practitionerNote": "Les travaux de préparation à l'IA sont dirigés par notre associé principal, dont le parcours est la résolution d'entités, le MDM, la gouvernance et la traçabilité pour des institutions financières de premier plan. Cela compte ici, car la préparation à l'IA est surtout l'application de ces disciplines à un nouveau consommateur : les questions qu'un auditeur pose sur un chiffre réglementaire sont celles qu'il faut poser sur les données d'entrée d'un modèle.",
    "relatedInsights": [
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Reckoning Deepens",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning-deepens/"
      },
      {
        "kind": "Solution",
        "label": "Gouvernance des données et MDM — où vit le cadre de gouvernance de l'IA",
        "href": "/fr/solutions/data-governance/"
      }
    ],
    "faqs": [
      {
        "q": "Nos données doivent-elles être parfaites avant de commencer avec l'IA ?",
        "a": "Non, et attendre cela est un mode d'échec en soi. La maturité s'évalue par cas d'usage : un cas reposant sur trois entités bien comprises peut avancer pendant que le reste du parc est encore désordonné. Ce qu'il ne faut pas faire, c'est commencer par le cas d'usage qui dépend de vos pires données parce qu'il fait la plus belle démonstration."
      },
      {
        "q": "S'agit-il d'un exercice de sélection de modèle ?",
        "a": "Non. Le choix du modèle est la décision la moins durable de la pile et la plus facile à changer ensuite. Ce travail porte sur les données d'entrée, les accès, le contexte et le contrôle, c'est-à-dire là où la validation pour la production est réellement bloquée."
      },
      {
        "q": "Quel est le lien entre le MDM et la préparation à l'IA ?",
        "a": "Les entités maîtres constituent la couche de contexte faisant autorité. Un agent incapable de voir que trois enregistrements ne font qu'un client donnera trois réponses, et aucun travail sur les invites ne corrige cela. Les entités fiables portent aussi la provenance et le score de rapprochement, ce qui permet de rattacher une sortie à un enregistrement réel."
      },
      {
        "q": "Et les agents qui exécutent des actions, pas seulement des réponses ?",
        "a": "Cela relève l'enjeu et l'exigence de gouvernance. La gouvernance des accès doit couvrir outils et actions, pas seulement données, et la frontière de supervision humaine doit être écrite avant la construction plutôt que découverte après un incident. Nous classons par défaut les agents capables d'agir dans un niveau de risque supérieur."
      },
      {
        "q": "Qui possède la gouvernance de l'IA, vous ou nous ?",
        "a": "Vous. Nous construisons le processus d'admission, la classification des risques, les seuils d'évaluation et la pratique de surveillance, puis nous les transmettons. Une fonction de gouvernance de l'IA qui dépend d'un cabinet externe ne peut pas décider à temps, ce qui en annule l'intérêt."
      },
      {
        "q": "En quoi l'Évaluation de préparation à l'IA diffère-t-elle du Diagnostic de données ?",
        "a": "Le Diagnostic de données examine tout le patrimoine. L'Évaluation de préparation à l'IA part de vos cas d'usage et remonte vers les données, les accès et les contrôles dont chacun a besoin. Si vous avez des cas d'usage validés et des pilotes qui calent, commencez ici ; si vous ne savez pas encore où sont les problèmes, commencez par le Diagnostic."
      },
      {
        "q": "Et si nous n'avons pas encore de cas d'usage IA ?",
        "a": "Alors il est tôt, et nous vous le dirons. La séquence honnête est généralement gouvernance et entités maîtres d'abord, car c'est ce dont tout cas d'usage futur aura besoin et cela se rentabilise en reporting et en risque, que le programme IA voie le jour ou non."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "Évaluation de préparation à l'IA",
      "cta": "Réserver une évaluation de préparation à l'IA",
      "body": "Elle part de vos cas d'usage IA et remonte. Vous repartez avec un inventaire des cas d'usage et leurs niveaux de risque, des constats de maturité des données par cas avec les blocages nommés, un modèle de gouvernance des accès pour les agents, et une séquence pour amener un cas d'usage en production.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en preparación para IA",
    "seoDescription": "Evalúa si tus datos pueden sostener IA en producción: resolución de entidades, procedencia, uso permitido, recuperación y gobernanza de accesos, más los controles de gobernanza sobre modelos y agentes.",
    "eyebrow": "PREPARACIÓN PARA IA",
    "h1": "Tu ambición de IA va por delante de tus datos. Le pasa a casi todos.",
    "subhead": "Los pilotos funcionan y la producción se atasca, porque el modelo nunca fue la restricción. Evaluamos si tus datos son exactos, de uso permitido, resolubles a una entidad única y accesibles bajo control, y después construimos la capa de contexto y acceso gobernada que los sistemas y agentes de IA realmente necesitan.",
    "transformation": "Experimentación → Listo para producción",
    "signals": [
      "Los pilotos demuestran bien y nunca llegan a producción, y nadie sabe nombrar el bloqueo.",
      "Un asistente responde con seguridad desde un documento que quedó obsoleto hace meses.",
      "Nadie puede decir qué datos puede usar lícitamente un caso de uso.",
      "El mismo cliente aparece de tres formas, así que el modelo no tiene una noción estable de con quién habla.",
      "Se dan accesos amplios a los agentes porque acotarlos bien es difícil.",
      "No hay inventario de casos de uso de IA, responsables ni niveles de riesgo."
    ],
    "consequenceFlow": [
      "Los datos corporativos son inaccesibles, no gobernados o no resolubles a una entidad única",
      "Los equipos lo rodean con copias, exportaciones y permisos amplios",
      "Las salidas no pueden rastrearse hasta un registro de origen fiable",
      "Nadie firma el caso de uso para producción",
      "El piloto se retira en silencio y la ambición pasa al siguiente"
    ],
    "consequenceNote": "La IA falla mucho menos por calidad del modelo que por entradas y permisos. Un agente con acceso amplio a datos inconsistentes no es un problema de IA: es un problema de gobernanza que ahora corre a velocidad de máquina.",
    "transformationRows": [
      {
        "before": "Pilotos que se atascan antes de producción",
        "after": "Casos de uso con responsable y una ruta de aprobación"
      },
      {
        "before": "Acceso crudo al origen para modelos y agentes",
        "after": "Vistas de entidades autorizadas expuestas por servicios controlados"
      },
      {
        "before": "Procedencia desconocida",
        "after": "Salidas rastreables hasta registros corporativos fiables"
      },
      {
        "before": "Permisos de agente amplios y sin documentar",
        "after": "Gobernanza de acceso acotada para datos, herramientas y acciones"
      },
      {
        "before": "Sin inventario de IA",
        "after": "Registro de casos de uso con niveles de riesgo y requisitos de control"
      },
      {
        "before": "Evaluación como demo",
        "after": "Puertas de evaluación, monitorización de deriva y respuesta a incidentes"
      }
    ],
    "capabilities": [
      {
        "title": "Evaluación de preparación de datos para IA",
        "body": "Si los datos detrás de cada caso de uso aprobado son exactos, completos, permitidos y resolubles. Se evalúa por caso de uso, porque la preparación no es una propiedad de la organización: es una propiedad de un caso concreto y de los datos que toca."
      },
      {
        "title": "Entidades maestras como contexto de IA",
        "body": "Los sistemas de IA necesitan contexto autorizado, no más datos crudos. Entidades fiables de cliente, producto, proveedor, organización y ubicación aportan identidad, relaciones y atributos consistentes, para que un agente sepa que tres registros son un mismo cliente."
      },
      {
        "title": "Recuperación y acceso al conocimiento",
        "body": "Cómo se trocea, indexa, refresca y permisiona el contenido, y cómo se retira el material obsoleto. La mayoría de las respuestas seguras pero erróneas son problemas de recuperación, no de modelo."
      },
      {
        "title": "Gobernanza de acceso para agentes",
        "body": "Acceso acotado a datos, herramientas y acciones, con reglas de uso permitido aplicadas a los atributos expuestos a un modelo. El acceso amplio concedido porque acotarlo era difícil es el hallazgo más frecuente."
      },
      {
        "title": "Gobernanza de IA en la práctica",
        "body": "Admisión y aprobación de casos de uso, niveles de riesgo, documentación de modelos y agentes, versionado y trazabilidad, fronteras de supervisión humana y escalado. El marco vive en la página de Gobernanza y MDM; aquí se encuentra con un caso de uso real."
      },
      {
        "title": "Evaluación y monitorización",
        "body": "Puertas de evaluación antes del lanzamiento y después señales de deriva, calidad e incidentes, con un responsable. Un modelo evaluado una sola vez al lanzarlo no está gobernado: está sin monitorizar."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia: contexto gobernado para IA",
      "description": "Los sistemas origen y el contenido alimentan una capa gobernada de datos y conocimiento, donde las entidades maestras aportan identidad y atributos autorizados en lugar de registros crudos. Una capa de recuperación y acceso expone ese contexto mediante servicios controlados, aplicando reglas de uso permitido por atributo, de modo que un modelo o agente recibe una vista acotada y no una conexión a la base de datos. Los servicios de IA y los agentes se sitúan encima, y todo lo que hacen se monitoriza y evalúa. Gobernanza de IA, procedencia, linaje, seguridad y supervisión humana atraviesan todo el flujo, incluidas las acciones que ejecuta un agente, que es la parte que la mayoría de arquitecturas deja fuera.",
      "layers": [
        {
          "name": "Orígenes y contenido",
          "items": [
            "Sistemas operativos",
            "Documentos",
            "Bases de conocimiento",
            "Datos externos"
          ]
        },
        {
          "name": "Datos y conocimiento gobernados",
          "items": [
            "Entidades maestras",
            "Conjuntos curados",
            "Contenido indexado",
            "Procedencia"
          ]
        },
        {
          "name": "Recuperación y acceso",
          "items": [
            "API controladas",
            "Vistas de entidad",
            "Reglas de uso permitido",
            "Contexto acotado"
          ]
        },
        {
          "name": "Servicios de IA y agentes",
          "items": [
            "Modelos",
            "Agentes y herramientas",
            "Orquestación",
            "Humano en el bucle"
          ]
        },
        {
          "name": "Monitorización y evaluación",
          "items": [
            "Puertas de evaluación",
            "Señales de deriva y calidad",
            "Respuesta a incidentes"
          ]
        }
      ],
      "crossCutting": [
        "Gobernanza de IA y niveles de riesgo",
        "Procedencia y linaje",
        "Gobernanza de acceso a datos, herramientas y acciones",
        "Seguridad",
        "Supervisión humana y evidencia de auditoría"
      ]
    },
    "deliverables": [
      "Inventario de casos de uso de IA con responsables, niveles de riesgo y requisitos de control por nivel",
      "Hallazgos de preparación de datos por caso de uso, con los bloqueos nombrados en lugar de puntuados",
      "Evaluación de resolución de entidades y contexto maestro para las entidades de las que dependen los casos",
      "Diseño de recuperación y conocimiento: troceado, refresco, retirada de contenido obsoleto",
      "Modelo de gobernanza de acceso para agentes, cubriendo datos, herramientas y acciones",
      "Reglas de uso permitido para los atributos expuestos a modelos y agentes",
      "Diseño de puertas de evaluación y las señales de monitorización posteriores",
      "Fronteras de supervisión humana y escalado, por escrito",
      "Una hoja de ruta secuenciada del estado actual hasta un caso de uso que pueda ir a producción"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Inventariar los casos de uso de IA que ya existen, incluidos los que corren fuera de cualquier programa, e identificar qué datos toca cada uno."
      },
      {
        "step": "Diseñar",
        "body": "Clasificar los casos por riesgo y después evaluar preparación de datos y acceso de los que importan. El contexto gobernado y las reglas de uso permitido se diseñan por nivel, no una vez para todo."
      },
      {
        "step": "Entregar",
        "body": "Construir la capa de contexto y acceso gobernada para el caso de mayor valor que pueda llegar realmente a producción, y la puerta de evaluación que debe superar."
      },
      {
        "step": "Habilitar",
        "body": "Entregar el proceso de admisión, la clasificación de riesgo y la práctica de monitorización, para que el siguiente caso no nos necesite."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Resolución de entidades como base de una vista única de cliente",
        "body": "Un banco norteamericano de primer nivel donde banca minorista, empresarial y patrimonial guardaban cada una su versión del cliente. El registro maestro y el linaje hacia cada origen contribuyente son exactamente lo que un sistema de IA necesita para responder de forma consistente sobre un cliente: el mismo trabajo que servía a los investigadores sirve a un agente que debe saber que tres registros son una persona."
      },
      {
        "proofType": "representative",
        "title": "Patrón representativo: un asistente que se equivoca con seguridad",
        "body": "Un asistente interno que responde desde una base de conocimiento donde los documentos de política obsoletos nunca se retiraron y el acceso se concedía a nivel de carpeta. El hallazgo casi nunca es el modelo: es que la recuperación no tiene noción de vigencia ni frontera de permisos, así que el asistente reporta fielmente el documento equivocado a la persona equivocada.",
        "outcome": "Lo que deja el proyecto: un diseño de recuperación con reglas de refresco y retirada, fronteras de permisos aplicadas en el momento de la consulta, y una puerta de evaluación que prueba exactamente ese fallo."
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
    "practitionerNote": "El trabajo de preparación para IA lo dirige nuestro socio principal, cuya trayectoria es resolución de entidades, MDM, gobernanza y linaje para instituciones financieras de primer nivel. Importa aquí porque la preparación para IA es sobre todo esas disciplinas aplicadas a un consumidor nuevo: las preguntas que un auditor hace sobre una cifra regulatoria son las que deberías hacer sobre las entradas de un modelo.",
    "relatedInsights": [
      {
        "kind": "Artículo",
        "label": "The Governance Crisis: The Reckoning Deepens",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning-deepens/"
      },
      {
        "kind": "Solución",
        "label": "Gobernanza de datos y MDM — donde vive el marco de gobernanza de IA",
        "href": "/es/solutions/data-governance/"
      }
    ],
    "faqs": [
      {
        "q": "¿Necesitamos datos perfectos antes de empezar con IA?",
        "a": "No, y esperar a eso es su propio modo de fallo. La preparación es por caso de uso: uno que toca tres entidades bien entendidas puede avanzar mientras el resto del entorno sigue desordenado. Lo que no conviene es empezar por el caso que depende de tus peores datos porque tiene la demo más llamativa."
      },
      {
        "q": "¿Es esto un ejercicio de selección de modelo?",
        "a": "No. La elección de modelo es la decisión menos duradera de la pila y la más fácil de cambiar después. Este trabajo va de entradas, acceso, contexto y control, que es donde realmente se bloquea la aprobación para producción."
      },
      {
        "q": "¿Qué relación tiene el MDM con la preparación para IA?",
        "a": "Las entidades maestras son la capa de contexto autorizado. Un agente que no distingue que tres registros son un mismo cliente dará tres respuestas, y ningún trabajo de prompts lo arregla. Las entidades fiables además llevan procedencia y confianza de coincidencia, así que una salida puede rastrearse hasta un registro real."
      },
      {
        "q": "¿Y los agentes que ejecutan acciones, no solo responden?",
        "a": "Eso eleva el riesgo y la exigencia de gobernanza. La gobernanza de acceso debe cubrir herramientas y acciones, no solo datos, y la frontera de supervisión humana debe escribirse antes de construir en lugar de descubrirse tras un incidente. Tratamos a los agentes que actúan como un nivel de riesgo superior por defecto."
      },
      {
        "q": "¿Quién es dueño de la gobernanza de IA, vosotros o nosotros?",
        "a": "Vosotros. Construimos el proceso de admisión, la clasificación de riesgo, las puertas de evaluación y la práctica de monitorización, y los entregamos. Una función de gobernanza de IA que depende de una firma externa no puede decidir a tiempo, lo que anula su propósito."
      },
      {
        "q": "¿En qué se diferencia la Evaluación de Preparación para IA del Diagnóstico de Datos?",
        "a": "El Diagnóstico de Datos mira todo el entorno. La Evaluación de Preparación para IA parte de tus casos de uso y va hacia atrás, hasta los datos, accesos y controles que cada uno necesita. Si tienes casos aprobados y pilotos atascados, empieza aquí; si aún no sabes dónde están los problemas, empieza por el Diagnóstico."
      },
      {
        "q": "¿Y si todavía no tenemos casos de uso de IA?",
        "a": "Entonces es pronto, y te lo diremos. La secuencia honesta suele ser gobernanza y entidades maestras primero, porque es lo que cualquier caso futuro necesitará y se paga solo en reporte y riesgo, ocurra o no el programa de IA."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "Evaluación de Preparación para IA",
      "cta": "Reservar una Evaluación de Preparación para IA",
      "body": "Parte de tus casos de uso de IA y va hacia atrás. Terminas con un inventario de casos y niveles de riesgo, hallazgos de preparación de datos por caso con los bloqueos nombrados, un modelo de gobernanza de acceso para agentes, y una secuencia para llevar un caso a producción.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em prontidão para IA",
    "seoDescription": "Avalie se seus dados sustentam IA em produção: resolução de entidades, procedência, uso permitido, recuperação e governança de acesso, mais os controles de governança sobre modelos e agentes.",
    "eyebrow": "PRONTIDÃO PARA IA",
    "h1": "Sua ambição de IA está à frente dos seus dados. Quase todas estão.",
    "subhead": "Os pilotos funcionam e a produção trava, porque o modelo nunca foi a restrição. Avaliamos se seus dados são exatos, de uso permitido, resolvíveis para uma entidade única e acessíveis sob controle, e então construímos a camada de contexto e acesso governada de que sistemas e agentes de IA realmente precisam.",
    "transformation": "Experimentação → Pronto para produção",
    "signals": [
      "Pilotos demonstram bem e nunca chegam à produção, e ninguém sabe nomear o bloqueio.",
      "Um assistente responde com segurança a partir de um documento superado meses atrás.",
      "Ninguém sabe dizer quais dados um caso de uso pode legalmente utilizar.",
      "O mesmo cliente aparece de três formas, então o modelo não tem noção estável de com quem fala.",
      "Agentes recebem acesso amplo porque delimitá-lo direito é difícil.",
      "Não existe inventário de casos de uso de IA, responsáveis ou níveis de risco."
    ],
    "consequenceFlow": [
      "Os dados corporativos são inacessíveis, não governados ou não resolvíveis para uma entidade única",
      "As equipes contornam com cópias, exportações e permissões amplas",
      "As saídas não podem ser rastreadas até um registro de origem confiável",
      "Ninguém assina o caso de uso para produção",
      "O piloto é aposentado em silêncio e a ambição passa para o próximo"
    ],
    "consequenceNote": "A IA falha muito menos por qualidade de modelo do que por entradas e permissão. Um agente com acesso amplo a dados inconsistentes não é um problema de IA: é um problema de governança que agora roda em velocidade de máquina.",
    "transformationRows": [
      {
        "before": "Pilotos que travam antes da produção",
        "after": "Casos de uso com responsável e um caminho de aprovação"
      },
      {
        "before": "Acesso bruto à origem para modelos e agentes",
        "after": "Visões de entidades oficiais expostas por serviços controlados"
      },
      {
        "before": "Procedência desconhecida",
        "after": "Saídas rastreáveis até registros corporativos confiáveis"
      },
      {
        "before": "Permissões de agente amplas e não documentadas",
        "after": "Governança de acesso delimitada para dados, ferramentas e ações"
      },
      {
        "before": "Sem inventário de IA",
        "after": "Registro de casos de uso com níveis de risco e requisitos de controle"
      },
      {
        "before": "Avaliação como demo",
        "after": "Portões de avaliação, monitoramento de desvio e resposta a incidentes"
      }
    ],
    "capabilities": [
      {
        "title": "Avaliação de prontidão dos dados para IA",
        "body": "Se os dados por trás de cada caso de uso aprovado são exatos, completos, permitidos e resolvíveis. Avaliado por caso de uso, porque prontidão não é propriedade de uma organização: é propriedade de um caso específico e dos dados que ele toca."
      },
      {
        "title": "Entidades mestras como contexto de IA",
        "body": "Sistemas de IA precisam de contexto oficial, não de mais dados brutos. Entidades confiáveis de cliente, produto, fornecedor, organização e localização dão identidade, relações e atributos consistentes, para que um agente saiba que três registros são um mesmo cliente."
      },
      {
        "title": "Recuperação e acesso ao conhecimento",
        "body": "Como o conteúdo é fatiado, indexado, atualizado e permissionado, e como o material superado é aposentado. A maioria das respostas confiantes e erradas são problemas de recuperação, não de modelo."
      },
      {
        "title": "Governança de acesso para agentes",
        "body": "Acesso delimitado a dados, ferramentas e ações, com regras de uso permitido aplicadas aos atributos expostos a um modelo. Acesso amplo concedido porque delimitar era difícil é o achado mais comum."
      },
      {
        "title": "Governança de IA na prática",
        "body": "Admissão e aprovação de casos de uso, níveis de risco, documentação de modelos e agentes, versionamento e rastreabilidade, fronteiras de supervisão humana e escalonamento. O arcabouço vive na página de Governança e MDM; aqui ele encontra um caso de uso real."
      },
      {
        "title": "Avaliação e monitoramento",
        "body": "Portões de avaliação antes do lançamento e depois sinais de desvio, qualidade e incidentes, com um responsável. Um modelo avaliado uma única vez no lançamento não está governado: está sem monitoramento."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência: contexto governado para IA",
      "description": "Sistemas de origem e conteúdo alimentam uma camada governada de dados e conhecimento, onde entidades mestras fornecem identidade e atributos oficiais em vez de registros brutos. Uma camada de recuperação e acesso expõe esse contexto por serviços controlados, aplicando regras de uso permitido por atributo, de modo que um modelo ou agente recebe uma visão delimitada e não uma conexão ao banco. Serviços de IA e agentes ficam acima, e tudo o que fazem é monitorado e avaliado. Governança de IA, procedência, linhagem, segurança e supervisão humana atravessam todo o fluxo, inclusive as ações que um agente executa, que é a parte que a maioria das arquiteturas deixa de fora.",
      "layers": [
        {
          "name": "Origens e conteúdo",
          "items": [
            "Sistemas operacionais",
            "Documentos",
            "Bases de conhecimento",
            "Dados externos"
          ]
        },
        {
          "name": "Dados e conhecimento governados",
          "items": [
            "Entidades mestras",
            "Conjuntos curados",
            "Conteúdo indexado",
            "Procedência"
          ]
        },
        {
          "name": "Recuperação e acesso",
          "items": [
            "APIs controladas",
            "Visões de entidade",
            "Regras de uso permitido",
            "Contexto delimitado"
          ]
        },
        {
          "name": "Serviços de IA e agentes",
          "items": [
            "Modelos",
            "Agentes e ferramentas",
            "Orquestração",
            "Humano no circuito"
          ]
        },
        {
          "name": "Monitoramento e avaliação",
          "items": [
            "Portões de avaliação",
            "Sinais de desvio e qualidade",
            "Resposta a incidentes"
          ]
        }
      ],
      "crossCutting": [
        "Governança de IA e níveis de risco",
        "Procedência e linhagem",
        "Governança de acesso a dados, ferramentas e ações",
        "Segurança",
        "Supervisão humana e evidência de auditoria"
      ]
    },
    "deliverables": [
      "Inventário de casos de uso de IA com responsáveis, níveis de risco e requisitos de controle por nível",
      "Achados de prontidão de dados por caso de uso, com os bloqueios nomeados em vez de pontuados",
      "Avaliação de resolução de entidades e contexto mestre para as entidades de que os casos dependem",
      "Desenho de recuperação e conhecimento: fatiamento, atualização, aposentadoria de conteúdo superado",
      "Modelo de governança de acesso para agentes, cobrindo dados, ferramentas e ações",
      "Regras de uso permitido para os atributos expostos a modelos e agentes",
      "Desenho dos portões de avaliação e os sinais de monitoramento posteriores",
      "Fronteiras de supervisão humana e escalonamento, por escrito",
      "Um roteiro sequenciado do estado atual até um caso de uso capaz de ir à produção"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Inventariar os casos de uso de IA que já existem, inclusive os que rodam fora de qualquer programa, e identificar quais dados cada um realmente toca."
      },
      {
        "step": "Projetar",
        "body": "Classificar os casos por risco e então avaliar prontidão de dados e acesso dos que importam. Contexto governado e regras de uso permitido são desenhados por nível, não uma vez para tudo."
      },
      {
        "step": "Entregar",
        "body": "Construir a camada de contexto e acesso governada para o caso de maior valor que pode realmente chegar à produção, e o portão de avaliação que ele precisa passar."
      },
      {
        "step": "Habilitar",
        "body": "Entregar o processo de admissão, a classificação de risco e a prática de monitoramento, para que o próximo caso não precise de nós."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Resolução de entidades como base para uma visão única do cliente",
        "body": "Um banco norte-americano de primeira linha onde varejo, corporativo e wealth guardavam cada um a sua versão do cliente. O registro mestre e a linhagem até cada origem contribuinte são exatamente o que um sistema de IA precisa para responder de forma consistente sobre um cliente: o mesmo trabalho que serviu aos investigadores serve a um agente que precisa saber que três registros são uma pessoa."
      },
      {
        "proofType": "representative",
        "title": "Padrão representativo: um assistente confiantemente errado",
        "body": "Um assistente interno respondendo a partir de uma base de conhecimento onde documentos de política superados nunca foram aposentados e o acesso era concedido no nível da pasta. O achado quase nunca é o modelo: é que a recuperação não tem noção de vigência nem fronteira de permissão, então o assistente relata fielmente o documento errado para a pessoa errada.",
        "outcome": "O que o projeto deixa: um desenho de recuperação com regras de atualização e aposentadoria, fronteiras de permissão aplicadas no momento da consulta, e um portão de avaliação que testa exatamente essa falha."
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
    "practitionerNote": "O trabalho de prontidão para IA é liderado pelo nosso sócio principal, cuja trajetória é resolução de entidades, MDM, governança e linhagem para instituições financeiras de primeira linha. Isso importa aqui porque prontidão para IA é sobretudo essas disciplinas aplicadas a um consumidor novo: as perguntas que um auditor faz sobre um número regulatório são as que você deveria fazer sobre as entradas de um modelo.",
    "relatedInsights": [
      {
        "kind": "Artigo",
        "label": "The Governance Crisis: The Reckoning Deepens",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-reckoning-deepens/"
      },
      {
        "kind": "Solução",
        "label": "Governança de dados e MDM — onde vive o arcabouço de governança de IA",
        "href": "/pt/solutions/data-governance/"
      }
    ],
    "faqs": [
      {
        "q": "Precisamos de dados perfeitos antes de começar com IA?",
        "a": "Não, e esperar por isso é um modo de falha por si só. Prontidão é por caso de uso: um caso que toca três entidades bem compreendidas pode avançar enquanto o resto do ambiente ainda está bagunçado. O que não convém é começar pelo caso que depende dos seus piores dados porque tem a demo mais empolgante."
      },
      {
        "q": "Isto é um exercício de seleção de modelo?",
        "a": "Não. A escolha do modelo é a decisão menos duradoura da pilha e a mais fácil de mudar depois. Este trabalho é sobre entradas, acesso, contexto e controle, que é onde a aprovação para produção realmente trava."
      },
      {
        "q": "Como o MDM se relaciona com prontidão para IA?",
        "a": "As entidades mestras são a camada de contexto oficial. Um agente que não percebe que três registros são um mesmo cliente dará três respostas, e nenhum trabalho de prompt resolve isso. Entidades confiáveis também carregam procedência e confiança de correspondência, então uma saída pode ser rastreada até um registro real."
      },
      {
        "q": "E os agentes que executam ações, não apenas respondem?",
        "a": "Isso eleva o risco e a exigência de governança. A governança de acesso precisa cobrir ferramentas e ações, não só dados, e a fronteira de supervisão humana precisa ser escrita antes da construção em vez de descoberta após um incidente. Tratamos agentes que agem como um nível de risco superior por padrão."
      },
      {
        "q": "Quem é dono da governança de IA, nós ou vocês?",
        "a": "Vocês. Construímos o processo de admissão, a classificação de risco, os portões de avaliação e a prática de monitoramento, e entregamos. Uma função de governança de IA que depende de uma firma externa não consegue decidir a tempo, o que anula o propósito."
      },
      {
        "q": "Qual a diferença entre a Avaliação de Prontidão para IA e o Diagnóstico de Dados?",
        "a": "O Diagnóstico de Dados olha todo o ambiente. A Avaliação de Prontidão para IA parte dos seus casos de uso e volta para trás, até os dados, acessos e controles que cada um precisa. Se você tem casos aprovados e pilotos travados, comece aqui; se ainda não sabe onde estão os problemas, comece pelo Diagnóstico."
      },
      {
        "q": "E se ainda não temos casos de uso de IA?",
        "a": "Então é cedo, e vamos dizer isso. A sequência honesta costuma ser governança e entidades mestras primeiro, porque é o que qualquer caso futuro vai precisar e se paga em relatórios e risco, aconteça ou não o programa de IA."
      }
    ],
    "entryOffer": {
      "id": "ai_readiness_assessment",
      "title": "Avaliação de Prontidão para IA",
      "cta": "Agendar uma Avaliação de Prontidão para IA",
      "body": "Parte dos seus casos de uso de IA e volta para trás. Você termina com um inventário de casos e níveis de risco, achados de prontidão de dados por caso com os bloqueios nomeados, um modelo de governança de acesso para agentes, e uma sequência para levar um caso à produção.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
