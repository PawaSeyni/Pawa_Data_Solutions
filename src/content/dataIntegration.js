// Data Integration — the Sprint 7B pilot.
//
// Content only. The fourteen sections are rendered by DeepSolution.jsx, which is
// the single renderer for every deep page — adding a solution means adding a file
// like this one, never writing JSX.
//
// Identity fields sit outside the locale blocks because they are not language:
// the slug, the practice pillar and the entry-offer id must be identical in every
// locale or the analytics split by language and the routes diverge.

export const IDENTITY = {
  slug: 'solutions/data-integration',
  pageName: 'DataIntegration',
  category: 'Integration & Data Engineering',
};

export const LOCALES = {
  en: {
    "seoTitle": "Data Integration Consulting",
  "seoDescription": "Governed integration architecture for fragmented ERP, CRM, finance and SaaS estates. Current-state map, target architecture, quality controls and lineage, documented and handed over.",
  "eyebrow": "DATA INTEGRATION & ENGINEERING",
    "h1": "Your systems are connected. Your data should be too.",
    "subhead": "ERP, CRM, finance, SaaS and operational systems each hold part of the truth. We design the governed integration architecture that turns those fragments into data your business can rely on, and hand it over documented.",
    "transformation": "Fragmented → Connected",
    "signals": [
      "Reports need manual reconciliation before anyone will trust them.",
      "Two systems disagree about the same customer, product or transaction.",
      "A new integration takes months to design, and nobody can say why.",
      "Pipeline failures are reported by business users, not by monitoring.",
      "Critical mappings and dependencies live in one person's head.",
      "Analytics and AI teams spend more time finding and fixing data than using it."
    ],
    "consequenceFlow": [
      "Systems hold overlapping, conflicting versions of the same entity",
      "Someone reconciles them by hand before every reporting cycle",
      "Reporting is late, and the numbers are argued about rather than used",
      "Decisions get made on the version someone trusts most",
      "AI and analytics inherit every defect, at speed and at scale"
    ],
    "consequenceNote": "The cost is rarely the integration tooling. It is that no one can say which pipeline is authoritative, so every question about a number becomes an archaeology exercise and every change is priced for the risk of breaking something invisible.",
    "transformationRows": [
      {
        "before": "Point-to-point integrations",
        "after": "Governed integration patterns"
      },
      {
        "before": "Fragile pipelines",
        "after": "Observable data flows"
      },
      {
        "before": "Manual reconciliation",
        "after": "Automated validation and quality controls"
      },
      {
        "before": "Conflicting entities and definitions",
        "after": "Consistent business entities and mappings"
      },
      {
        "before": "Tribal knowledge",
        "after": "Documented architecture and lineage"
      },
      {
        "before": "Consultant dependency",
        "after": "A capability your team owns"
      }
    ],
    "capabilities": [
      {
        "title": "Integration architecture",
        "body": "The patterns connecting systems, platforms and consumers: boundaries, latency expectations and who owns each interface. Decided before tooling, because the tool follows the pattern and not the reverse."
      },
      {
        "title": "Data engineering",
        "body": "Batch, change data capture, API and streaming pipelines chosen per use case. Streaming a feed that is consumed once a day is a cost, not an achievement."
      },
      {
        "title": "Data quality",
        "body": "Validation at ingestion and transformation so defects are caught where they enter, rather than found by a business user three systems downstream."
      },
      {
        "title": "Observability",
        "body": "Freshness, volume, schema drift, failures and anomalies, with alerts that name an owner. If your users detect incidents before your monitoring does, that is the gap."
      },
      {
        "title": "Governance in the flow",
        "body": "Ownership, lineage, classification and access built into the pipeline rather than documented beside it. Controls that live in a separate document stop being true within a quarter."
      },
      {
        "title": "DataOps",
        "body": "Repeatable build, test, deploy and operate practice, so a change to a pipeline is a routine release instead of an event."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Source systems feed a governed ingestion layer, where quality controls run before anything is trusted downstream. Transformed data lands in a governed platform, is exposed as semantic models and data products, and is consumed by analytics, operations, AI and applications. Security, lineage, observability and governance are not a stage in that flow; they span all of it, which is why they are drawn across the bottom rather than as a box in the middle.",
      "layers": [
        {
          "name": "Sources",
          "items": [
            "ERP",
            "CRM",
            "SaaS",
            "Files",
            "APIs",
            "Operational DBs"
          ]
        },
        {
          "name": "Ingestion",
          "items": [
            "Batch",
            "Change data capture",
            "APIs",
            "Streaming"
          ]
        },
        {
          "name": "Quality & transform",
          "items": [
            "Validation rules",
            "Reconciliation",
            "Business logic"
          ]
        },
        {
          "name": "Governed platform",
          "items": [
            "Curated storage",
            "Mastered entities",
            "Reference data"
          ]
        },
        {
          "name": "Data products",
          "items": [
            "Semantic models",
            "Interfaces",
            "Events"
          ]
        },
        {
          "name": "Consumers",
          "items": [
            "Analytics",
            "Operations",
            "AI & agents",
            "Applications"
          ]
        }
      ],
      "crossCutting": [
        "Governance & ownership",
        "Lineage",
        "Data quality monitoring",
        "Observability",
        "Security & access control"
      ]
    },
    "deliverables": [
      "Current-state integration map, with the risks and the undocumented jobs named",
      "Target integration architecture and the decisions behind it, including what was rejected",
      "Production pipelines and interfaces within the agreed scope",
      "Data quality controls and reconciliation rules",
      "Lineage and dependency documentation",
      "Monitoring, alerting and operational runbooks",
      "A delivery backlog and modernisation roadmap, sequenced by risk",
      "Knowledge transfer to your team, treated as a deliverable rather than a final meeting"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Inventory what actually runs, including the jobs everyone assumes are dead, and identify who consumes each output."
      },
      {
        "step": "Design",
        "body": "Agree the target pattern and the sequence. Flows feeding regulatory and financial reporting move last, once the pattern is proven on lower-stakes data."
      },
      {
        "step": "Deliver",
        "body": "Build in scope, run in parallel with what it replaces, compare outputs, then decommission the old route as a signed-off step."
      },
      {
        "step": "Enable",
        "body": "Hand over documentation, runbooks and the operating practice, and work alongside your team until they are running it."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Entity resolution across retail, commercial and wealth banking",
        "body": "A Tier 1 North American bank whose lines of business each held their own version of a customer, leaving financial crime investigators to reconcile them by hand. The work began with profiling why records failed to match — name conventions across languages, addresses to different standards, identifiers in fields never meant to hold them — then tuned match rules against cases the investigations team already knew the answer to."
      },
      {
        "proofType": "representative",
        "title": "Representative pattern: consolidating overlapping integration stacks",
        "body": "Years of acquisitions leave several integration stacks running side by side, with the same data moving between the same two systems by three different routes. The work is inventory first, then consolidation sequenced by business risk rather than technical convenience.",
        "outcome": "What the engagement leaves behind: one documented ingestion pattern, parallel-run evidence per migrated flow, and decommissioning treated as a delivery step with its own sign-off."
      }
    ],
    "technologies": [
      {
        "group": "Integration & ETL",
        "items": [
          "Informatica",
          "dbt",
          "Airflow",
          "Fivetran",
          "Kafka",
          "Debezium"
        ]
      },
      {
        "group": "Platforms",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL",
          "SQL Server"
        ]
      },
      {
        "group": "Governance & quality",
        "items": [
          "Collibra",
          "Informatica Axon & DQ",
          "Great Expectations",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud",
        "items": [
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "Integration work is led by our principal, who spent fifteen years at Informatica and ran more than 300 customer-facing proving engagements for Tier 1 banks, insurers, telecoms and transport operators. The person who scopes your engagement is the person who delivers it.",
    "relatedInsights": [
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Turning Point",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-turning-point/"
      },
      {
        "kind": "Assessment",
        "label": "Data Health Check — the broader two to three week review",
        "href": "/data-health-check/"
      }
    ],
    "faqs": [
      {
        "q": "Do we need to replace our current integration platform?",
        "a": "Usually not. Most estates have a viable platform used badly rather than the wrong platform. We assess what you have against what you need before recommending any change, and replatforming is the recommendation only when the pattern genuinely cannot be built on what is there."
      },
      {
        "q": "Can you work alongside our internal engineering team or existing SI?",
        "a": "Yes, and it is the common case. We are frequently brought in for architecture and governance while an internal team or incumbent integrator does the build. We will say plainly where responsibilities need to divide to avoid two teams owning the same interface."
      },
      {
        "q": "Do you recommend particular vendors?",
        "a": "We have no reseller margin and no partner quota, which is deliberate. Our principal spent fifteen years selling one vendor's platform, so the recommendation comes with an unusually direct view of how these tools get positioned, and it is not shaped by what we would earn from it."
      },
      {
        "q": "Can we modernise incrementally rather than replatform everything?",
        "a": "That is the default. Consolidation is sequenced by business risk: prove the pattern on lower-stakes data, then move the flows feeding regulatory and financial reporting last. A big-bang cutover concentrates all the risk at the moment you can least afford it."
      },
      {
        "q": "How do you handle governance and security during the work?",
        "a": "An NDA is signed before any access. We work read-only where possible, and governance is built into the flow rather than added afterwards: ownership, lineage, classification and access controls are part of the pipeline design, not a document written beside it."
      },
      {
        "q": "What happens after go-live?",
        "a": "You get runbooks, monitoring and alerting that names owners, and documented lineage. Knowledge transfer is a deliverable with time allocated to it, not a final presentation. The measure is whether your team can change what we built without us."
      },
      {
        "q": "How is the Integration Architecture Review different from the Data Health Check?",
        "a": "The Data Health Check looks across the whole estate — architecture, integration, quality, governance and operating risk — in two to three weeks. The Architecture Review goes deep on the integration estate specifically, in one to two weeks, and suits a team that already knows integration is the problem."
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "Where the mastered entities this architecture distributes are produced."
      },
      {
        "label": "Data Engineering",
        "href": "/solutions/pipeline-architecture/",
        "why": "Building and operating the flows this architecture defines."
      },
      {
        "label": "AI Readiness",
        "href": "/solutions/ai-readiness/",
        "why": "What governed, connected data is ultimately being made ready for."
      }
    ],
    "entryOffer": {
      "id": "integration_architecture_review",
      "title": "Integration Architecture Review",
      "cta": "Book an Architecture Review",
      "body": "A focused one to two week review for teams with a brittle, expensive or hard-to-explain integration estate. You finish with a current-state map, the risks named, and a target architecture sequenced by business risk.",
      "note": "Scope and commercial terms are agreed in writing before the review starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en intégration de données",
    "seoDescription": "Architecture d'intégration gouvernée pour des parcs ERP, CRM, finance et SaaS fragmentés. Cartographie de l'existant, architecture cible, contrôles qualité et traçabilité, documentés et transmis.",
    "eyebrow": "INTÉGRATION ET INGÉNIERIE DES DONNÉES",
    "h1": "Vos systèmes sont connectés. Vos données devraient l'être aussi.",
    "subhead": "ERP, CRM, finance, SaaS et systèmes opérationnels détiennent chacun une partie de la vérité. Nous concevons l'architecture d'intégration gouvernée qui transforme ces fragments en données fiables pour votre activité, et nous vous la remettons documentée.",
    "transformation": "Fragmenté → Connecté",
    "signals": [
      "Les rapports exigent une réconciliation manuelle avant que quiconque leur fasse confiance.",
      "Deux systèmes ne s'accordent pas sur le même client, produit ou transaction.",
      "Une nouvelle intégration prend des mois à concevoir, sans que personne sache dire pourquoi.",
      "Les incidents de pipeline sont signalés par les utilisateurs métier, pas par la supervision.",
      "Les correspondances et dépendances critiques vivent dans la tête d'une seule personne.",
      "Les équipes analytique et IA passent plus de temps à chercher et corriger les données qu'à les utiliser."
    ],
    "consequenceFlow": [
      "Les systèmes détiennent des versions concurrentes de la même entité",
      "Quelqu'un les réconcilie à la main avant chaque cycle de reporting",
      "Le reporting arrive en retard, et les chiffres sont discutés plutôt qu'utilisés",
      "Les décisions se prennent sur la version en laquelle on a le plus confiance",
      "L'IA et l'analytique héritent de tous les défauts, à grande vitesse et à grande échelle"
    ],
    "consequenceNote": "Le coût réside rarement dans l'outillage d'intégration. Il tient au fait que personne ne peut dire quel pipeline fait autorité : chaque question sur un chiffre devient une fouille archéologique, et chaque changement est chiffré au regard du risque de casser quelque chose d'invisible.",
    "transformationRows": [
      {
        "before": "Intégrations point à point",
        "after": "Schémas d'intégration gouvernés"
      },
      {
        "before": "Pipelines fragiles",
        "after": "Flux de données observables"
      },
      {
        "before": "Réconciliation manuelle",
        "after": "Validation et contrôles qualité automatisés"
      },
      {
        "before": "Entités et définitions contradictoires",
        "after": "Entités métier et correspondances cohérentes"
      },
      {
        "before": "Savoir informel",
        "after": "Architecture et traçabilité documentées"
      },
      {
        "before": "Dépendance au consultant",
        "after": "Une capacité que votre équipe possède"
      }
    ],
    "capabilities": [
      {
        "title": "Architecture d'intégration",
        "body": "Les schémas reliant systèmes, plateformes et consommateurs : frontières, exigences de latence et propriétaire de chaque interface. Décidés avant l'outillage, car l'outil suit le schéma et non l'inverse."
      },
      {
        "title": "Ingénierie des données",
        "body": "Pipelines batch, capture de changements, API et streaming, choisis selon l'usage. Diffuser en continu un flux consommé une fois par jour est un coût, pas une performance."
      },
      {
        "title": "Qualité des données",
        "body": "Validation à l'ingestion et à la transformation, pour que les défauts soient détectés là où ils entrent plutôt que découverts par un utilisateur métier trois systèmes plus loin."
      },
      {
        "title": "Observabilité",
        "body": "Fraîcheur, volumétrie, dérive de schéma, incidents et anomalies, avec des alertes qui désignent un responsable. Si vos utilisateurs détectent les incidents avant votre supervision, c'est là qu'est l'écart."
      },
      {
        "title": "Gouvernance dans le flux",
        "body": "Propriété, traçabilité, classification et accès intégrés au pipeline plutôt que documentés à côté. Des contrôles qui vivent dans un document séparé cessent d'être vrais en un trimestre."
      },
      {
        "title": "DataOps",
        "body": "Pratiques répétables de construction, test, déploiement et exploitation, pour qu'une modification de pipeline soit une mise en production de routine plutôt qu'un événement."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Les systèmes sources alimentent une couche d'ingestion gouvernée, où les contrôles qualité s'exécutent avant que quoi que ce soit ne soit considéré comme fiable en aval. Les données transformées arrivent dans une plateforme gouvernée, sont exposées sous forme de modèles sémantiques et de produits de données, puis consommées par l'analytique, les opérations, l'IA et les applications. Sécurité, traçabilité, observabilité et gouvernance ne sont pas une étape de ce flux : elles le traversent entièrement, ce qui explique qu'elles soient représentées en bas plutôt que comme une boîte au milieu.",
      "layers": [
        {
          "name": "Sources",
          "items": [
            "ERP",
            "CRM",
            "SaaS",
            "Fichiers",
            "API",
            "Bases opérationnelles"
          ]
        },
        {
          "name": "Ingestion",
          "items": [
            "Batch",
            "Capture de changements",
            "API",
            "Streaming"
          ]
        },
        {
          "name": "Qualité et transformation",
          "items": [
            "Règles de validation",
            "Réconciliation",
            "Logique métier"
          ]
        },
        {
          "name": "Plateforme gouvernée",
          "items": [
            "Stockage organisé",
            "Entités maîtres",
            "Données de référence"
          ]
        },
        {
          "name": "Produits de données",
          "items": [
            "Modèles sémantiques",
            "Interfaces",
            "Événements"
          ]
        },
        {
          "name": "Consommateurs",
          "items": [
            "Analytique",
            "Opérations",
            "IA et agents",
            "Applications"
          ]
        }
      ],
      "crossCutting": [
        "Gouvernance et propriété",
        "Traçabilité",
        "Supervision de la qualité",
        "Observabilité",
        "Sécurité et contrôle d'accès"
      ]
    },
    "deliverables": [
      "Cartographie de l'intégration existante, risques et traitements non documentés nommés",
      "Architecture d'intégration cible et décisions associées, y compris ce qui a été écarté",
      "Pipelines et interfaces en production dans le périmètre convenu",
      "Contrôles qualité et règles de réconciliation",
      "Documentation de traçabilité et des dépendances",
      "Supervision, alertes et procédures d'exploitation",
      "Un backlog de livraison et une feuille de route de modernisation, séquencés par risque",
      "Transfert de compétences à votre équipe, traité comme un livrable et non comme une réunion finale"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Inventorier ce qui tourne réellement, y compris les traitements que tout le monde croit éteints, et identifier qui consomme chaque sortie."
      },
      {
        "step": "Concevoir",
        "body": "Convenir du schéma cible et de la séquence. Les flux alimentant le reporting réglementaire et financier passent en dernier, une fois le schéma éprouvé sur des données moins sensibles."
      },
      {
        "step": "Livrer",
        "body": "Construire dans le périmètre, faire tourner en parallèle de l'existant, comparer les sorties, puis décommissionner l'ancienne route comme une étape validée."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre documentation, procédures et pratique d'exploitation, et accompagner votre équipe jusqu'à ce qu'elle opère seule."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Résolution d'entités entre banque de détail, entreprise et gestion de patrimoine",
        "body": "Une banque nord-américaine de premier plan dont chaque ligne métier détenait sa propre version d'un client, laissant les enquêteurs en criminalité financière les réconcilier à la main. Le travail a commencé par analyser pourquoi les enregistrements ne se rapprochaient pas — conventions de noms selon les langues, adresses saisies selon des normes différentes, identifiants logés dans des champs jamais prévus pour cela — puis par ajuster les règles de rapprochement sur des cas dont l'équipe d'enquête connaissait déjà la réponse."
      },
      {
        "proofType": "representative",
        "title": "Schéma représentatif : consolider des piles d'intégration qui se chevauchent",
        "body": "Des années d'acquisitions laissent plusieurs piles d'intégration fonctionner côte à côte, les mêmes données circulant entre les deux mêmes systèmes par trois routes différentes. Le travail commence par l'inventaire, puis la consolidation est séquencée par risque métier plutôt que par commodité technique.",
        "outcome": "Ce que la mission laisse derrière elle : un schéma d'ingestion documenté, des preuves d'exécution en parallèle pour chaque flux migré, et un décommissionnement traité comme une étape de livraison avec sa propre validation."
      }
    ],
    "technologies": [
      {
        "group": "Intégration et ETL",
        "items": [
          "Informatica",
          "dbt",
          "Airflow",
          "Fivetran",
          "Kafka",
          "Debezium"
        ]
      },
      {
        "group": "Plateformes",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL",
          "SQL Server"
        ]
      },
      {
        "group": "Gouvernance et qualité",
        "items": [
          "Collibra",
          "Informatica Axon et DQ",
          "Great Expectations",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud",
        "items": [
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "Les travaux d'intégration sont dirigés par notre associé principal, qui a passé quinze ans chez Informatica et mené plus de 300 missions de validation auprès de banques, assureurs, télécoms et transporteurs de premier plan. La personne qui cadre votre mission est celle qui la réalise.",
    "relatedInsights": [
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Turning Point",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-turning-point/"
      },
      {
        "kind": "Évaluation",
        "label": "Diagnostic de données — la revue plus large de deux à trois semaines",
        "href": "/fr/data-health-check/"
      }
    ],
    "faqs": [
      {
        "q": "Devons-nous remplacer notre plateforme d'intégration actuelle ?",
        "a": "Le plus souvent, non. La plupart des parcs disposent d'une plateforme viable mal utilisée plutôt que d'une mauvaise plateforme. Nous évaluons ce que vous avez au regard de vos besoins avant de recommander tout changement, et le remplacement n'est recommandé que lorsque le schéma cible ne peut réellement pas être construit sur l'existant."
      },
      {
        "q": "Pouvez-vous travailler avec notre équipe interne ou notre intégrateur en place ?",
        "a": "Oui, et c'est le cas le plus fréquent. Nous intervenons souvent sur l'architecture et la gouvernance pendant qu'une équipe interne ou l'intégrateur en place réalise la construction. Nous dirons clairement où les responsabilités doivent se séparer pour éviter que deux équipes possèdent la même interface."
      },
      {
        "q": "Recommandez-vous des éditeurs en particulier ?",
        "a": "Nous n'avons ni marge de revente ni quota partenaire, et c'est délibéré. Notre associé principal a passé quinze ans à vendre la plateforme d'un éditeur : la recommandation s'appuie donc sur une vision très directe de la façon dont ces outils sont positionnés, et elle n'est pas façonnée par ce que nous en tirerions."
      },
      {
        "q": "Pouvons-nous moderniser par étapes plutôt que tout remplacer ?",
        "a": "C'est l'approche par défaut. La consolidation est séquencée par risque métier : éprouver le schéma sur des données moins sensibles, puis déplacer en dernier les flux alimentant le reporting réglementaire et financier. Une bascule en une fois concentre tout le risque au moment où vous pouvez le moins vous le permettre."
      },
      {
        "q": "Comment gérez-vous la gouvernance et la sécurité pendant la mission ?",
        "a": "Un accord de confidentialité est signé avant tout accès. Nous travaillons en lecture seule lorsque c'est possible, et la gouvernance est intégrée au flux plutôt qu'ajoutée après : propriété, traçabilité, classification et contrôles d'accès font partie de la conception du pipeline, et non d'un document rédigé à côté."
      },
      {
        "q": "Que se passe-t-il après la mise en production ?",
        "a": "Vous recevez des procédures d'exploitation, une supervision et des alertes qui désignent des responsables, ainsi qu'une traçabilité documentée. Le transfert de compétences est un livrable auquel du temps est alloué, pas une présentation finale. Le critère est la capacité de votre équipe à modifier sans nous ce que nous avons construit."
      },
      {
        "q": "En quoi la Revue d'architecture d'intégration diffère-t-elle du Diagnostic de données ?",
        "a": "Le Diagnostic de données examine l'ensemble du patrimoine — architecture, intégration, qualité, gouvernance et risque opérationnel — en deux à trois semaines. La Revue d'architecture approfondit spécifiquement le parc d'intégration, en une à deux semaines, et convient à une équipe qui sait déjà que l'intégration est le problème."
      }
    ],
    "entryOffer": {
      "id": "integration_architecture_review",
      "title": "Revue d'architecture d'intégration",
      "cta": "Réserver une revue d'architecture",
      "body": "Une revue ciblée d'une à deux semaines pour les équipes dont le parc d'intégration est fragile, coûteux ou difficile à expliquer. Vous repartez avec une cartographie de l'existant, les risques nommés et une architecture cible séquencée par risque métier.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en integración de datos",
    "seoDescription": "Arquitectura de integración gobernada para entornos fragmentados de ERP, CRM, finanzas y SaaS. Mapa del estado actual, arquitectura objetivo, controles de calidad y linaje, documentados y entregados.",
    "eyebrow": "INTEGRACIÓN E INGENIERÍA DE DATOS",
    "h1": "Tus sistemas están conectados. Tus datos también deberían estarlo.",
    "subhead": "ERP, CRM, finanzas, SaaS y sistemas operativos guardan cada uno una parte de la verdad. Diseñamos la arquitectura de integración gobernada que convierte esos fragmentos en datos fiables para tu negocio, y te la entregamos documentada.",
    "transformation": "Fragmentado → Conectado",
    "signals": [
      "Los informes necesitan reconciliación manual antes de que alguien confíe en ellos.",
      "Dos sistemas no coinciden sobre el mismo cliente, producto o transacción.",
      "Una nueva integración tarda meses en diseñarse y nadie sabe explicar por qué.",
      "Los fallos de pipeline los reportan los usuarios de negocio, no la monitorización.",
      "Los mapeos y dependencias críticos viven en la cabeza de una sola persona.",
      "Los equipos de analítica e IA dedican más tiempo a buscar y arreglar datos que a usarlos."
    ],
    "consequenceFlow": [
      "Los sistemas guardan versiones solapadas y contradictorias de la misma entidad",
      "Alguien las reconcilia a mano antes de cada ciclo de reporte",
      "El reporte llega tarde y las cifras se discuten en lugar de usarse",
      "Las decisiones se toman sobre la versión en la que más se confía",
      "La IA y la analítica heredan todos los defectos, a velocidad y a escala"
    ],
    "consequenceNote": "El coste rara vez está en las herramientas de integración. Está en que nadie puede decir qué pipeline es el autorizado: cada pregunta sobre una cifra se convierte en arqueología y cada cambio se presupuesta por el riesgo de romper algo invisible.",
    "transformationRows": [
      {
        "before": "Integraciones punto a punto",
        "after": "Patrones de integración gobernados"
      },
      {
        "before": "Pipelines frágiles",
        "after": "Flujos de datos observables"
      },
      {
        "before": "Reconciliación manual",
        "after": "Validación y controles de calidad automatizados"
      },
      {
        "before": "Entidades y definiciones contradictorias",
        "after": "Entidades de negocio y mapeos consistentes"
      },
      {
        "before": "Conocimiento tribal",
        "after": "Arquitectura y linaje documentados"
      },
      {
        "before": "Dependencia del consultor",
        "after": "Una capacidad que tu equipo posee"
      }
    ],
    "capabilities": [
      {
        "title": "Arquitectura de integración",
        "body": "Los patrones que conectan sistemas, plataformas y consumidores: límites, expectativas de latencia y quién es dueño de cada interfaz. Se deciden antes que la herramienta, porque la herramienta sigue al patrón y no al revés."
      },
      {
        "title": "Ingeniería de datos",
        "body": "Pipelines batch, captura de cambios, API y streaming elegidos según el caso de uso. Transmitir en streaming un flujo que se consume una vez al día es un coste, no un logro."
      },
      {
        "title": "Calidad de datos",
        "body": "Validación en la ingesta y la transformación, para que los defectos se detecten donde entran y no los encuentre un usuario de negocio tres sistemas más abajo."
      },
      {
        "title": "Observabilidad",
        "body": "Frescura, volumen, deriva de esquema, fallos y anomalías, con alertas que nombran a un responsable. Si tus usuarios detectan incidentes antes que tu monitorización, ahí está la brecha."
      },
      {
        "title": "Gobernanza en el flujo",
        "body": "Propiedad, linaje, clasificación y acceso integrados en el pipeline en lugar de documentados al lado. Los controles que viven en un documento aparte dejan de ser ciertos en un trimestre."
      },
      {
        "title": "DataOps",
        "body": "Prácticas repetibles de construcción, prueba, despliegue y operación, para que cambiar un pipeline sea una entrega rutinaria y no un acontecimiento."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Los sistemas origen alimentan una capa de ingesta gobernada, donde los controles de calidad se ejecutan antes de que nada se considere fiable aguas abajo. Los datos transformados llegan a una plataforma gobernada, se exponen como modelos semánticos y productos de datos, y los consumen analítica, operaciones, IA y aplicaciones. Seguridad, linaje, observabilidad y gobernanza no son una etapa de ese flujo: lo atraviesan por completo, y por eso se dibujan abajo y no como una caja en el medio.",
      "layers": [
        {
          "name": "Orígenes",
          "items": [
            "ERP",
            "CRM",
            "SaaS",
            "Ficheros",
            "API",
            "BBDD operativas"
          ]
        },
        {
          "name": "Ingesta",
          "items": [
            "Batch",
            "Captura de cambios",
            "API",
            "Streaming"
          ]
        },
        {
          "name": "Calidad y transformación",
          "items": [
            "Reglas de validación",
            "Reconciliación",
            "Lógica de negocio"
          ]
        },
        {
          "name": "Plataforma gobernada",
          "items": [
            "Almacenamiento curado",
            "Entidades maestras",
            "Datos de referencia"
          ]
        },
        {
          "name": "Productos de datos",
          "items": [
            "Modelos semánticos",
            "Interfaces",
            "Eventos"
          ]
        },
        {
          "name": "Consumidores",
          "items": [
            "Analítica",
            "Operaciones",
            "IA y agentes",
            "Aplicaciones"
          ]
        }
      ],
      "crossCutting": [
        "Gobernanza y propiedad",
        "Linaje",
        "Monitorización de calidad",
        "Observabilidad",
        "Seguridad y control de acceso"
      ]
    },
    "deliverables": [
      "Mapa del estado actual de la integración, con los riesgos y los procesos no documentados nombrados",
      "Arquitectura de integración objetivo y las decisiones detrás, incluido lo que se descartó",
      "Pipelines e interfaces en producción dentro del alcance acordado",
      "Controles de calidad y reglas de reconciliación",
      "Documentación de linaje y dependencias",
      "Monitorización, alertas y procedimientos de operación",
      "Un backlog de entrega y una hoja de ruta de modernización, secuenciados por riesgo",
      "Transferencia de conocimiento a tu equipo, tratada como entregable y no como una reunión final"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Inventariar lo que realmente se ejecuta, incluidos los procesos que todos dan por muertos, e identificar quién consume cada salida."
      },
      {
        "step": "Diseñar",
        "body": "Acordar el patrón objetivo y la secuencia. Los flujos que alimentan el reporte regulatorio y financiero se mueven al final, una vez probado el patrón en datos menos críticos."
      },
      {
        "step": "Entregar",
        "body": "Construir dentro del alcance, ejecutar en paralelo con lo que sustituye, comparar salidas y luego dar de baja la ruta antigua como paso firmado."
      },
      {
        "step": "Habilitar",
        "body": "Entregar documentación, procedimientos y práctica operativa, y acompañar a tu equipo hasta que lo opere por su cuenta."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Resolución de entidades entre banca minorista, empresarial y patrimonial",
        "body": "Un banco norteamericano de primer nivel donde cada línea de negocio guardaba su propia versión de un cliente, dejando a los investigadores de delitos financieros reconciliarlas a mano. El trabajo empezó analizando por qué los registros no casaban — convenciones de nombres en varios idiomas, direcciones capturadas con estándares distintos, identificadores en campos nunca pensados para ello — y luego ajustando las reglas de coincidencia contra casos cuya respuesta el equipo de investigación ya conocía."
      },
      {
        "proofType": "representative",
        "title": "Patrón representativo: consolidar pilas de integración solapadas",
        "body": "Años de adquisiciones dejan varias pilas de integración funcionando en paralelo, con los mismos datos moviéndose entre los mismos dos sistemas por tres rutas distintas. El trabajo empieza por el inventario y luego secuencia la consolidación por riesgo de negocio en lugar de por conveniencia técnica.",
        "outcome": "Lo que deja el proyecto: un patrón de ingesta documentado, evidencia de ejecución en paralelo por cada flujo migrado, y la baja tratada como un paso de entrega con su propia firma."
      }
    ],
    "technologies": [
      {
        "group": "Integración y ETL",
        "items": [
          "Informatica",
          "dbt",
          "Airflow",
          "Fivetran",
          "Kafka",
          "Debezium"
        ]
      },
      {
        "group": "Plataformas",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL",
          "SQL Server"
        ]
      },
      {
        "group": "Gobernanza y calidad",
        "items": [
          "Collibra",
          "Informatica Axon y DQ",
          "Great Expectations",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud",
        "items": [
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "El trabajo de integración lo dirige nuestro socio principal, que pasó quince años en Informatica y realizó más de 300 proyectos de validación con bancos, aseguradoras, telecomunicaciones y transporte de primer nivel. La persona que define el alcance es la que lo ejecuta.",
    "relatedInsights": [
      {
        "kind": "Artículo",
        "label": "The Governance Crisis: The Turning Point",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-turning-point/"
      },
      {
        "kind": "Evaluación",
        "label": "Diagnóstico de datos — la revisión más amplia de dos a tres semanas",
        "href": "/es/data-health-check/"
      }
    ],
    "faqs": [
      {
        "q": "¿Tenemos que sustituir nuestra plataforma de integración actual?",
        "a": "Normalmente no. La mayoría de los entornos tienen una plataforma viable mal utilizada, no la plataforma equivocada. Evaluamos lo que tienes frente a lo que necesitas antes de recomendar cualquier cambio, y el reemplazo solo se recomienda cuando el patrón realmente no puede construirse sobre lo existente."
      },
      {
        "q": "¿Podéis trabajar junto a nuestro equipo interno o nuestro integrador actual?",
        "a": "Sí, y es lo habitual. Con frecuencia entramos para arquitectura y gobernanza mientras un equipo interno o el integrador existente hace la construcción. Diremos con claridad dónde deben separarse las responsabilidades para evitar que dos equipos sean dueños de la misma interfaz."
      },
      {
        "q": "¿Recomendáis proveedores concretos?",
        "a": "No tenemos margen de reventa ni cuota de partner, y es deliberado. Nuestro socio principal pasó quince años vendiendo la plataforma de un proveedor, así que la recomendación viene con una visión muy directa de cómo se posicionan estas herramientas, y no está condicionada por lo que ganaríamos con ella."
      },
      {
        "q": "¿Podemos modernizar por fases en lugar de reemplazarlo todo?",
        "a": "Es el enfoque por defecto. La consolidación se secuencia por riesgo de negocio: probar el patrón en datos menos críticos y mover al final los flujos que alimentan el reporte regulatorio y financiero. Un cambio de golpe concentra todo el riesgo en el momento en que menos te lo puedes permitir."
      },
      {
        "q": "¿Cómo gestionáis la gobernanza y la seguridad durante el trabajo?",
        "a": "Se firma un acuerdo de confidencialidad antes de cualquier acceso. Trabajamos en solo lectura donde es posible, y la gobernanza se integra en el flujo en lugar de añadirse después: propiedad, linaje, clasificación y controles de acceso forman parte del diseño del pipeline, no de un documento escrito al lado."
      },
      {
        "q": "¿Qué pasa después de la puesta en producción?",
        "a": "Recibes procedimientos operativos, monitorización y alertas que nombran responsables, y linaje documentado. La transferencia de conocimiento es un entregable con tiempo asignado, no una presentación final. La medida es si tu equipo puede cambiar sin nosotros lo que construimos."
      },
      {
        "q": "¿En qué se diferencia la Revisión de Arquitectura de Integración del Diagnóstico de Datos?",
        "a": "El Diagnóstico de Datos mira todo el entorno — arquitectura, integración, calidad, gobernanza y riesgo operativo — en dos o tres semanas. La Revisión de Arquitectura profundiza específicamente en el entorno de integración, en una o dos semanas, y encaja con un equipo que ya sabe que la integración es el problema."
      }
    ],
    "entryOffer": {
      "id": "integration_architecture_review",
      "title": "Revisión de Arquitectura de Integración",
      "cta": "Reservar una revisión de arquitectura",
      "body": "Una revisión focalizada de una a dos semanas para equipos con un entorno de integración frágil, caro o difícil de explicar. Terminas con un mapa del estado actual, los riesgos nombrados y una arquitectura objetivo secuenciada por riesgo de negocio.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em integração de dados",
    "seoDescription": "Arquitetura de integração governada para ambientes fragmentados de ERP, CRM, finanças e SaaS. Mapa do estado atual, arquitetura-alvo, controles de qualidade e linhagem, documentados e entregues.",
    "eyebrow": "INTEGRAÇÃO E ENGENHARIA DE DADOS",
    "h1": "Seus sistemas estão conectados. Seus dados também deveriam estar.",
    "subhead": "ERP, CRM, finanças, SaaS e sistemas operacionais guardam, cada um, uma parte da verdade. Projetamos a arquitetura de integração governada que transforma esses fragmentos em dados confiáveis para o seu negócio, e entregamos documentada.",
    "transformation": "Fragmentado → Conectado",
    "signals": [
      "Os relatórios precisam de reconciliação manual antes que alguém confie neles.",
      "Dois sistemas discordam sobre o mesmo cliente, produto ou transação.",
      "Uma nova integração leva meses para ser projetada e ninguém sabe dizer por quê.",
      "Falhas de pipeline são relatadas por usuários de negócio, não pelo monitoramento.",
      "Mapeamentos e dependências críticas vivem na cabeça de uma única pessoa.",
      "Times de analytics e IA gastam mais tempo procurando e corrigindo dados do que usando-os."
    ],
    "consequenceFlow": [
      "Os sistemas guardam versões sobrepostas e conflitantes da mesma entidade",
      "Alguém as reconcilia à mão antes de cada ciclo de relatório",
      "O relatório atrasa e os números são discutidos em vez de usados",
      "As decisões saem sobre a versão em que mais se confia",
      "IA e analytics herdam todos os defeitos, em velocidade e em escala"
    ],
    "consequenceNote": "O custo raramente está nas ferramentas de integração. Está em ninguém conseguir dizer qual pipeline é o oficial: cada pergunta sobre um número vira arqueologia e cada mudança é precificada pelo risco de quebrar algo invisível.",
    "transformationRows": [
      {
        "before": "Integrações ponto a ponto",
        "after": "Padrões de integração governados"
      },
      {
        "before": "Pipelines frágeis",
        "after": "Fluxos de dados observáveis"
      },
      {
        "before": "Reconciliação manual",
        "after": "Validação e controles de qualidade automatizados"
      },
      {
        "before": "Entidades e definições conflitantes",
        "after": "Entidades de negócio e mapeamentos consistentes"
      },
      {
        "before": "Conhecimento tribal",
        "after": "Arquitetura e linhagem documentadas"
      },
      {
        "before": "Dependência do consultor",
        "after": "Uma capacidade que sua equipe possui"
      }
    ],
    "capabilities": [
      {
        "title": "Arquitetura de integração",
        "body": "Os padrões que conectam sistemas, plataformas e consumidores: fronteiras, expectativas de latência e quem é dono de cada interface. Decididos antes da ferramenta, porque a ferramenta segue o padrão e não o contrário."
      },
      {
        "title": "Engenharia de dados",
        "body": "Pipelines batch, captura de mudanças, API e streaming escolhidos por caso de uso. Transmitir em streaming um fluxo consumido uma vez por dia é custo, não conquista."
      },
      {
        "title": "Qualidade de dados",
        "body": "Validação na ingestão e na transformação, para que defeitos sejam pegos onde entram e não descobertos por um usuário de negócio três sistemas adiante."
      },
      {
        "title": "Observabilidade",
        "body": "Frescor, volume, desvio de esquema, falhas e anomalias, com alertas que nomeiam um responsável. Se seus usuários detectam incidentes antes do seu monitoramento, a lacuna está aí."
      },
      {
        "title": "Governança no fluxo",
        "body": "Propriedade, linhagem, classificação e acesso embutidos no pipeline em vez de documentados ao lado. Controles que vivem num documento separado deixam de ser verdade em um trimestre."
      },
      {
        "title": "DataOps",
        "body": "Práticas repetíveis de construir, testar, implantar e operar, para que mudar um pipeline seja uma entrega de rotina e não um evento."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "Os sistemas de origem alimentam uma camada de ingestão governada, onde os controles de qualidade rodam antes que qualquer coisa seja considerada confiável a jusante. Os dados transformados chegam a uma plataforma governada, são expostos como modelos semânticos e produtos de dados, e consumidos por analytics, operações, IA e aplicações. Segurança, linhagem, observabilidade e governança não são uma etapa desse fluxo: atravessam todo ele, e por isso aparecem embaixo e não como uma caixa no meio.",
      "layers": [
        {
          "name": "Origens",
          "items": [
            "ERP",
            "CRM",
            "SaaS",
            "Arquivos",
            "APIs",
            "Bancos operacionais"
          ]
        },
        {
          "name": "Ingestão",
          "items": [
            "Batch",
            "Captura de mudanças",
            "APIs",
            "Streaming"
          ]
        },
        {
          "name": "Qualidade e transformação",
          "items": [
            "Regras de validação",
            "Reconciliação",
            "Lógica de negócio"
          ]
        },
        {
          "name": "Plataforma governada",
          "items": [
            "Armazenamento curado",
            "Entidades mestras",
            "Dados de referência"
          ]
        },
        {
          "name": "Produtos de dados",
          "items": [
            "Modelos semânticos",
            "Interfaces",
            "Eventos"
          ]
        },
        {
          "name": "Consumidores",
          "items": [
            "Analytics",
            "Operações",
            "IA e agentes",
            "Aplicações"
          ]
        }
      ],
      "crossCutting": [
        "Governança e propriedade",
        "Linhagem",
        "Monitoramento de qualidade",
        "Observabilidade",
        "Segurança e controle de acesso"
      ]
    },
    "deliverables": [
      "Mapa do estado atual da integração, com os riscos e as rotinas não documentadas nomeados",
      "Arquitetura de integração alvo e as decisões por trás, inclusive o que foi descartado",
      "Pipelines e interfaces em produção dentro do escopo acordado",
      "Controles de qualidade e regras de reconciliação",
      "Documentação de linhagem e dependências",
      "Monitoramento, alertas e runbooks operacionais",
      "Um backlog de entrega e um roteiro de modernização, sequenciados por risco",
      "Transferência de conhecimento para sua equipe, tratada como entrega e não como reunião final"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Inventariar o que de fato roda, inclusive as rotinas que todos supõem mortas, e identificar quem consome cada saída."
      },
      {
        "step": "Projetar",
        "body": "Acordar o padrão-alvo e a sequência. Os fluxos que alimentam relatórios regulatórios e financeiros mudam por último, depois que o padrão foi provado em dados menos críticos."
      },
      {
        "step": "Entregar",
        "body": "Construir no escopo, rodar em paralelo com o que substitui, comparar saídas e então descomissionar a rota antiga como um passo assinado."
      },
      {
        "step": "Habilitar",
        "body": "Entregar documentação, runbooks e a prática operacional, e acompanhar sua equipe até que ela opere sozinha."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Resolução de entidades entre varejo, corporativo e wealth banking",
        "body": "Um banco norte-americano de primeira linha em que cada linha de negócio guardava sua própria versão de um cliente, deixando os investigadores de crimes financeiros reconciliá-las à mão. O trabalho começou analisando por que os registros não cruzavam — convenções de nome em vários idiomas, endereços capturados em padrões diferentes, identificadores em campos nunca pensados para isso — e então ajustando as regras de correspondência contra casos cuja resposta a equipe de investigação já conhecia."
      },
      {
        "proofType": "representative",
        "title": "Padrão representativo: consolidar pilhas de integração sobrepostas",
        "body": "Anos de aquisições deixam várias pilhas de integração rodando lado a lado, com os mesmos dados indo entre os mesmos dois sistemas por três rotas diferentes. O trabalho começa pelo inventário e depois sequencia a consolidação por risco de negócio, não por conveniência técnica.",
        "outcome": "O que o projeto deixa: um padrão de ingestão documentado, evidência de execução paralela por fluxo migrado, e o descomissionamento tratado como passo de entrega com assinatura própria."
      }
    ],
    "technologies": [
      {
        "group": "Integração e ETL",
        "items": [
          "Informatica",
          "dbt",
          "Airflow",
          "Fivetran",
          "Kafka",
          "Debezium"
        ]
      },
      {
        "group": "Plataformas",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL",
          "SQL Server"
        ]
      },
      {
        "group": "Governança e qualidade",
        "items": [
          "Collibra",
          "Informatica Axon e DQ",
          "Great Expectations",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud",
        "items": [
          "Azure",
          "AWS",
          "Google Cloud"
        ]
      }
    ],
    "practitionerNote": "O trabalho de integração é liderado pelo nosso sócio principal, que passou quinze anos na Informatica e conduziu mais de 300 projetos de validação junto a bancos, seguradoras, telecomunicações e transporte de primeira linha. A pessoa que define o escopo é a que executa.",
    "relatedInsights": [
      {
        "kind": "Artigo",
        "label": "The Governance Crisis: The Turning Point",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-turning-point/"
      },
      {
        "kind": "Avaliação",
        "label": "Diagnóstico de dados — a revisão mais ampla de duas a três semanas",
        "href": "/pt/data-health-check/"
      }
    ],
    "faqs": [
      {
        "q": "Precisamos substituir nossa plataforma de integração atual?",
        "a": "Normalmente não. A maioria dos ambientes tem uma plataforma viável mal utilizada, e não a plataforma errada. Avaliamos o que você tem frente ao que precisa antes de recomendar qualquer troca, e a substituição só é recomendada quando o padrão realmente não pode ser construído sobre o que existe."
      },
      {
        "q": "Vocês conseguem trabalhar junto com nossa equipe interna ou nosso integrador atual?",
        "a": "Sim, e é o caso mais comum. Frequentemente entramos para arquitetura e governança enquanto uma equipe interna ou o integrador atual faz a construção. Diremos claramente onde as responsabilidades precisam se separar para evitar que duas equipes sejam donas da mesma interface."
      },
      {
        "q": "Vocês recomendam fornecedores específicos?",
        "a": "Não temos margem de revenda nem cota de parceiro, e isso é deliberado. Nosso sócio principal passou quinze anos vendendo a plataforma de um fornecedor, então a recomendação vem com uma visão bastante direta de como essas ferramentas são posicionadas, e não é moldada pelo que ganharíamos com ela."
      },
      {
        "q": "Podemos modernizar aos poucos em vez de trocar tudo?",
        "a": "É a abordagem padrão. A consolidação é sequenciada por risco de negócio: provar o padrão em dados menos críticos e mover por último os fluxos que alimentam relatórios regulatórios e financeiros. Uma virada de uma vez concentra todo o risco no momento em que você menos pode pagar por isso."
      },
      {
        "q": "Como vocês tratam governança e segurança durante o trabalho?",
        "a": "Um acordo de confidencialidade é assinado antes de qualquer acesso. Trabalhamos somente leitura onde possível, e a governança é embutida no fluxo em vez de adicionada depois: propriedade, linhagem, classificação e controles de acesso fazem parte do desenho do pipeline, não de um documento escrito ao lado."
      },
      {
        "q": "O que acontece depois do go-live?",
        "a": "Você recebe runbooks, monitoramento e alertas que nomeiam responsáveis, e linhagem documentada. A transferência de conhecimento é uma entrega com tempo alocado, não uma apresentação final. A medida é se sua equipe consegue alterar sem nós o que construímos."
      },
      {
        "q": "Qual a diferença entre a Revisão de Arquitetura de Integração e o Diagnóstico de Dados?",
        "a": "O Diagnóstico de Dados olha todo o ambiente — arquitetura, integração, qualidade, governança e risco operacional — em duas a três semanas. A Revisão de Arquitetura aprofunda especificamente no ambiente de integração, em uma a duas semanas, e serve a uma equipe que já sabe que a integração é o problema."
      }
    ],
    "entryOffer": {
      "id": "integration_architecture_review",
      "title": "Revisão de Arquitetura de Integração",
      "cta": "Agendar uma revisão de arquitetura",
      "body": "Uma revisão focada de uma a duas semanas para equipes com um ambiente de integração frágil, caro ou difícil de explicar. Você termina com um mapa do estado atual, os riscos nomeados e uma arquitetura-alvo sequenciada por risco de negócio.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
