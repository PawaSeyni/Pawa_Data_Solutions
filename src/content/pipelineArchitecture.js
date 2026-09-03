// Data Engineering & Pipeline Architecture — Sprint 7D rollout.
//
// Content only; DeepSolution.jsx renders it. See src/lib/solutionSchema.js.
//
// §12A cross-page rule: quality and observability appear here as implemented
// mechanisms, but ownership is stated as belonging to the Data Governance & MDM
// practice rather than being positioned as a separate PaWa pillar.
//
// Entry offer is the existing Data Health Check, so entryOffer.href sends the CTA
// to that page instead of a contact anchor.

export const IDENTITY = {
  slug: 'solutions/pipeline-architecture',
  pageName: 'PipelineArchitecture',
  category: 'Integration & Data Engineering',
};

export const LOCALES = {
  en: {
    "seoTitle": "Data Engineering & Pipeline Consulting",
    "seoDescription": "Batch, CDC and streaming pipelines with testing, observability, lineage and DataOps built into the operating model. Reliability your team can run, change and recover.",
    "eyebrow": "DATA ENGINEERING & PIPELINE ARCHITECTURE",
    "h1": "Build data pipelines your team can trust in production.",
    "subhead": "We design and modernise batch, CDC and streaming pipelines with testing, observability, lineage and DataOps built into the operating model — not added after go-live.",
    "transformation": "Fragile → Reliable and operable",
    "signals": [
      "Pipeline failures are discovered by report users rather than by monitoring.",
      "Small source changes break downstream jobs unexpectedly.",
      "Retries, backfills and recovery depend on a few experienced engineers.",
      "Batch and streaming paths have grown side by side without consistent patterns.",
      "Release cycles are slow because testing and dependency impact are unclear.",
      "Nobody can answer whether the data is late, incomplete or simply wrong."
    ],
    "consequenceFlow": [
      "Fragile pipelines with no contracts, tests or ownership",
      "Failures stay hidden until someone downstream notices, then recovery is manual",
      "Downstream data becomes unreliable, and people start keeping their own copies",
      "Releases slow down while the operational burden rises every quarter",
      "Trust in analytics and AI falls, because both inherit the same defects"
    ],
    "consequenceNote": "Fragility is rarely one bad pipeline. It is the absence of the things that make change safe: a contract, a test per flow, an alert with an owner on it, and a recovery path someone has actually rehearsed.",
    "transformationRows": [
      {
        "before": "One-off pipeline patterns",
        "after": "Reusable engineering patterns and data contracts"
      },
      {
        "before": "Manual testing",
        "after": "Automated data and pipeline tests"
      },
      {
        "before": "Failures found downstream",
        "after": "Freshness, volume, schema and dependency signals"
      },
      {
        "before": "Opaque dependencies",
        "after": "Documented lineage and impact paths"
      },
      {
        "before": "Heroic recovery",
        "after": "Runbooks, retries, backfills and named ownership"
      },
      {
        "before": "Risky releases",
        "after": "CI/CD, environment controls and deployment discipline"
      }
    ],
    "capabilities": [
      {
        "title": "Pipeline architecture",
        "body": "Batch, CDC, micro-batch and streaming chosen by business latency and operating need. Streaming a feed consumed once a day is a cost, not an achievement, and the reverse is a missed obligation."
      },
      {
        "title": "Data contracts and schema change",
        "body": "An agreement between producer and consumer about shape, semantics and notice — so a column rename becomes a conversation before deployment rather than an incident after it."
      },
      {
        "title": "Layered transformation patterns",
        "body": "Raw, tested and curated layers with reusable patterns, so a new source follows an established path instead of inventing one per project."
      },
      {
        "title": "Automated tests and reconciliation",
        "body": "Tests that run on the data, not only the code: row counts, referential expectations, schema stability and reconciliation against source."
      },
      {
        "title": "Operational observability",
        "body": "Freshness, volume, schema drift, failures and dependency signals with alerts that name an owner. Implemented here; the trust and ownership expectations behind it belong to the Governance & MDM practice."
      },
      {
        "title": "DataOps",
        "body": "Source control, CI/CD, environment promotion and release discipline. The point is that a change becomes reversible, which is what makes it routine."
      },
      {
        "title": "Recovery design",
        "body": "Idempotency, retries, backfills, replay and graceful degradation, decided during design rather than improvised at 2am. Most estates can rerun a job; far fewer can rerun it safely twice."
      },
      {
        "title": "Lineage tied to ownership",
        "body": "Documentation and lineage that connect a flow to the person accountable for it, so impact analysis has somewhere to land."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Sources feed ingestion — batch, CDC or events — into a raw landing layer where nothing is assumed and everything is retained. Transformation and testing run together, so a defect is caught where it enters rather than found three systems downstream. Tested data becomes curated data products, exposed through a serving, semantic or API layer to analytics, operations and AI. Orchestration, observability, lineage, security and data quality span every stage rather than sitting at the end. Data quality and observability are implemented here; the policy, critical-element definitions and issue-management model behind them are owned by the Governance & MDM practice, which is why they are drawn across the flow rather than as a stage in it.",
      "layers": [
        {
          "name": "Sources",
          "items": [
            "Operational systems",
            "SaaS",
            "Files",
            "APIs"
          ]
        },
        {
          "name": "Ingestion",
          "items": [
            "Batch",
            "CDC",
            "Events and streaming"
          ]
        },
        {
          "name": "Raw / landing",
          "items": [
            "Immutable landing",
            "Retention",
            "Replay source"
          ]
        },
        {
          "name": "Transform & test",
          "items": [
            "Business logic",
            "Data tests",
            "Contracts",
            "Reconciliation"
          ]
        },
        {
          "name": "Curated data products",
          "items": [
            "Modelled datasets",
            "Conformed dimensions",
            "Historised data"
          ]
        },
        {
          "name": "Serving",
          "items": [
            "Semantic layer",
            "APIs",
            "Operational feeds"
          ]
        },
        {
          "name": "Consumers",
          "items": [
            "Analytics",
            "Operations",
            "AI and agents"
          ]
        }
      ],
      "crossCutting": [
        "Orchestration",
        "Observability",
        "Lineage",
        "Security",
        "Data quality and governance (owned by Governance & MDM)"
      ]
    },
    "deliverables": [
      "Current-state pipeline and dependency map, with a failure-risk inventory",
      "Target pipeline architecture and written engineering standards",
      "Production pipelines within the agreed scope",
      "Automated tests and reconciliation controls, running in the pipeline rather than beside it",
      "Monitoring, alerting and service-level expectations with named owners",
      "CI/CD, environment promotion and deployment pattern",
      "Recovery and backfill runbooks, plus the ownership model",
      "Modernisation backlog and knowledge transfer to your engineers"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Inventory what actually runs and who consumes each output. Undocumented jobs feeding something important is the normal finding here, not the exceptional one."
      },
      {
        "step": "Design",
        "body": "Agree the ingestion patterns, the contracts, the test strategy and what good alerting looks like for your team's real on-call rota rather than an ideal one."
      },
      {
        "step": "Deliver",
        "body": "Rebuild flows in priority order, run them in parallel with what they replace, compare outputs, then decommission the old route as a signed-off step."
      },
      {
        "step": "Enable",
        "body": "Hand over runbooks, the DataOps practice and the alerting model, and stay alongside your engineers until they are shipping changes themselves."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Consolidating overlapping integration stacks",
        "body": "A North American insurer running several integration stacks side by side after years of acquisitions, with the same policy data moving between the same two systems by three different routes. Consolidation was sequenced by business risk rather than technical convenience, and decommissioning was treated as a delivery step with its own sign-off rather than as cleanup — which is the usual reason duplicate routes survive their own replacement."
      },
      {
        "proofType": "representative",
        "title": "Representative architecture: pipeline modernisation",
        "body": "A pipeline estate where failures are reported by business users rather than monitoring, and every change is priced for the risk of breaking something undocumented. The pattern is inventory first — including the jobs everyone assumes are dead — then contracts, tests and alerting per flow, then recovery design, then decommissioning as a signed step.",
        "outcome": "What the engagement leaves behind: engineering standards, tests and alerting per flow, recovery runbooks, and a decommissioning list with owners."
      }
    ],
    "technologies": [
      {
        "group": "Orchestration",
        "items": [
          "Airflow",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
        ]
      },
      {
        "group": "Transformation",
        "items": [
          "dbt",
          "Spark",
          "SQL frameworks"
        ]
      },
      {
        "group": "Streaming and CDC",
        "items": [
          "Kafka",
          "Debezium",
          "Fivetran",
          "Kinesis"
        ]
      },
      {
        "group": "Observability and testing",
        "items": [
          "dbt tests",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud and platform",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL"
        ]
      }
    ],
    "practitionerNote": "Engineering work is led by our principal, whose fifteen years at Informatica covered more than 300 customer-facing engagements for Tier 1 banks, insurers, telecoms and transport operators. The reliability problems in a pipeline estate are rarely novel, which is the good news.",
    "relatedInsights": [
      {
        "kind": "Case study",
        "label": "Consolidating overlapping integration stacks",
        "href": "/case-studies/integration-platform-consolidation/"
      },
      {
        "kind": "Assessment",
        "label": "Data Health Check — the broader two to three week estate review",
        "href": "/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Integration",
        "href": "/solutions/data-integration/",
        "why": "The architecture and patterns these pipelines implement."
      },
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "Owns quality policy and trust expectations; implemented here."
      },
      {
        "label": "AI Readiness",
        "href": "/solutions/ai-readiness/",
        "why": "What reliable, tested data is ultimately being prepared for."
      }
    ],
    "faqs": [
      {
        "q": "Do we need to move to a new platform to get reliability?",
        "a": "Almost never. Reliability comes from contracts, tests, alerting and a deployment practice, and all four can be added to the platform you already run. A migration undertaken to fix reliability usually carries the same absences across to a more expensive home."
      },
      {
        "q": "How do you decide what to fix first?",
        "a": "By what breaks and what it costs when it does. Flows feeding regulatory and financial reporting get attention first for risk, and the noisiest recurring failures get attention early because they are consuming your team's week."
      },
      {
        "q": "Can you work with our existing engineering team?",
        "a": "That is the usual arrangement. We often set up the patterns, contracts, tests and DataOps practice while your engineers do the bulk of the rebuild, which is also the fastest route to them owning it afterwards."
      },
      {
        "q": "What about the pipelines nobody understands any more?",
        "a": "They get inventoried like everything else, then documented, rebuilt or retired. The one thing we will not do is leave a job running because nobody is sure what it does — that uncertainty is the risk, not the job."
      },
      {
        "q": "Is this the same as data integration work?",
        "a": "Related but not identical, and they are two pages for that reason. Integration is the architecture and patterns between systems; engineering is building and operating the flows reliably. Most engagements touch both, and we will tell you which one your problem actually is."
      },
      {
        "q": "How does this relate to data quality and governance?",
        "a": "Quality and observability controls are implemented in pipelines, but the policy, the critical data elements and the issue-management model are owned by the Governance & MDM practice. That distinction matters: a quality rule with no business owner is a monitoring job, and monitoring jobs get muted."
      },
      {
        "q": "What happens to our operating cost?",
        "a": "We will not promise a number before looking. What the work does is make cost and failure patterns visible enough to act on, and retiring genuinely dead jobs usually accounts for more than people expect."
      }
    ],
    "entryOffer": {
      "id": "data_engineering_health_check",
      "title": "Data Engineering Health Check",
      "cta": "Book a Data Engineering Health Check",
      "body": "A focused review of pipeline reliability, dependencies, testing, observability, recovery and delivery practice. You finish with a failure-risk inventory, engineering standards worth adopting, and a sequenced modernisation backlog.",
      "note": "Scope and commercial terms are agreed in writing before the review starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en ingénierie des données et pipelines",
    "seoDescription": "Pipelines batch, CDC et streaming avec tests, observabilité, traçabilité et DataOps intégrés au modèle d'exploitation. Une fiabilité que votre équipe peut opérer, modifier et rétablir.",
    "eyebrow": "INGÉNIERIE DES DONNÉES ET ARCHITECTURE DE PIPELINE",
    "h1": "Des pipelines auxquels votre équipe peut se fier en production.",
    "subhead": "Nous concevons et modernisons des pipelines batch, CDC et streaming avec tests, observabilité, traçabilité et DataOps intégrés au modèle d'exploitation — et non ajoutés après la mise en production.",
    "transformation": "Fragile → Fiable et exploitable",
    "signals": [
      "Les incidents de pipeline sont découverts par les utilisateurs des rapports plutôt que par la supervision.",
      "De petits changements en amont cassent des traitements avals sans prévenir.",
      "Reprises, rattrapages et rétablissement dépendent de quelques ingénieurs expérimentés.",
      "Les chemins batch et streaming ont grandi côte à côte sans schémas cohérents.",
      "Les cycles de livraison sont lents car tests et impact des dépendances restent flous.",
      "Personne ne sait dire si la donnée est en retard, incomplète ou simplement fausse."
    ],
    "consequenceFlow": [
      "Des pipelines fragiles, sans contrats, sans tests, sans propriétaire",
      "Les incidents restent invisibles jusqu'à ce que quelqu'un en aval s'en aperçoive, puis le rétablissement est manuel",
      "La donnée aval devient peu fiable et chacun se met à garder sa propre copie",
      "Les livraisons ralentissent tandis que la charge d'exploitation monte chaque trimestre",
      "La confiance dans l'analytique et l'IA baisse, car toutes deux héritent des mêmes défauts"
    ],
    "consequenceNote": "La fragilité vient rarement d'un mauvais pipeline. Elle vient de l'absence de ce qui rend le changement sûr : un contrat, un test par flux, une alerte avec un responsable, et un chemin de rétablissement que quelqu'un a réellement répété.",
    "transformationRows": [
      {
        "before": "Des schémas de pipeline au cas par cas",
        "after": "Des schémas d'ingénierie réutilisables et des contrats de données"
      },
      {
        "before": "Tests manuels",
        "after": "Tests automatisés des données et des pipelines"
      },
      {
        "before": "Incidents découverts en aval",
        "after": "Signaux de fraîcheur, volumétrie, schéma et dépendances"
      },
      {
        "before": "Dépendances opaques",
        "after": "Traçabilité documentée et chemins d'impact"
      },
      {
        "before": "Rétablissement héroïque",
        "after": "Procédures, reprises, rattrapages et propriété nommée"
      },
      {
        "before": "Livraisons risquées",
        "after": "CI/CD, contrôles d'environnement et discipline de déploiement"
      }
    ],
    "capabilities": [
      {
        "title": "Architecture de pipeline",
        "body": "Batch, CDC, micro-batch et streaming choisis selon la latence métier et le besoin d'exploitation. Diffuser en continu un flux consommé une fois par jour est un coût ; l'inverse est une obligation manquée."
      },
      {
        "title": "Contrats de données et changements de schéma",
        "body": "Un accord entre producteur et consommateur sur la forme, la sémantique et le préavis — pour qu'un renommage de colonne devienne une conversation avant déploiement plutôt qu'un incident après."
      },
      {
        "title": "Transformations par couches",
        "body": "Couches brutes, testées et organisées avec des schémas réutilisables : une nouvelle source suit un chemin établi au lieu d'en inventer un par projet."
      },
      {
        "title": "Tests automatisés et réconciliation",
        "body": "Des tests qui portent sur les données et pas seulement sur le code : volumétrie, intégrité référentielle, stabilité du schéma et réconciliation avec la source."
      },
      {
        "title": "Observabilité opérationnelle",
        "body": "Fraîcheur, volumétrie, dérive de schéma, incidents et signaux de dépendance, avec des alertes qui désignent un responsable. Implémentée ici ; les attentes de confiance et de propriété qui la sous-tendent relèvent de la pratique Gouvernance et MDM."
      },
      {
        "title": "DataOps",
        "body": "Gestion de versions, CI/CD, promotion d'environnements et discipline de livraison. L'intérêt est qu'un changement devienne réversible, ce qui le rend routinier."
      },
      {
        "title": "Conception du rétablissement",
        "body": "Idempotence, reprises, rattrapages, rejeu et dégradation maîtrisée, décidés à la conception plutôt qu'improvisés à 2h du matin. La plupart des parcs savent relancer un traitement ; beaucoup moins savent le relancer deux fois sans risque."
      },
      {
        "title": "Traçabilité rattachée à la propriété",
        "body": "Une documentation et une traçabilité qui relient un flux à la personne qui en répond, pour que l'analyse d'impact ait un destinataire."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Les sources alimentent l'ingestion — batch, CDC ou événements — vers une zone d'atterrissage brute où rien n'est présumé et tout est conservé. Transformation et tests s'exécutent ensemble : un défaut est détecté là où il entre plutôt que découvert trois systèmes plus loin. Les données testées deviennent des produits de données organisés, exposés via une couche de service, sémantique ou API vers l'analytique, les opérations et l'IA. Orchestration, observabilité, traçabilité, sécurité et qualité traversent chaque étape au lieu de se placer à la fin. Qualité et observabilité sont implémentées ici ; la politique, la définition des données critiques et le modèle de gestion des anomalies relèvent de la pratique Gouvernance et MDM, d'où leur représentation transversale plutôt qu'en étape.",
      "layers": [
        {
          "name": "Sources",
          "items": [
            "Systèmes opérationnels",
            "SaaS",
            "Fichiers",
            "API"
          ]
        },
        {
          "name": "Ingestion",
          "items": [
            "Batch",
            "CDC",
            "Événements et streaming"
          ]
        },
        {
          "name": "Brut / atterrissage",
          "items": [
            "Atterrissage immuable",
            "Rétention",
            "Source de rejeu"
          ]
        },
        {
          "name": "Transformation et tests",
          "items": [
            "Logique métier",
            "Tests de données",
            "Contrats",
            "Réconciliation"
          ]
        },
        {
          "name": "Produits de données organisés",
          "items": [
            "Jeux modélisés",
            "Dimensions conformées",
            "Historisation"
          ]
        },
        {
          "name": "Mise à disposition",
          "items": [
            "Couche sémantique",
            "API",
            "Flux opérationnels"
          ]
        },
        {
          "name": "Consommateurs",
          "items": [
            "Analytique",
            "Opérations",
            "IA et agents"
          ]
        }
      ],
      "crossCutting": [
        "Orchestration",
        "Observabilité",
        "Traçabilité",
        "Sécurité",
        "Qualité et gouvernance (détenues par Gouvernance et MDM)"
      ]
    },
    "deliverables": [
      "Cartographie des pipelines et dépendances actuels, avec un inventaire des risques de défaillance",
      "Architecture cible des pipelines et standards d'ingénierie écrits",
      "Pipelines en production dans le périmètre convenu",
      "Tests automatisés et contrôles de réconciliation, exécutés dans le pipeline et non à côté",
      "Supervision, alertes et niveaux de service attendus, avec des responsables nommés",
      "CI/CD, promotion d'environnements et schéma de déploiement",
      "Procédures de rétablissement et de rattrapage, plus le modèle de propriété",
      "Backlog de modernisation et transfert de compétences à vos ingénieurs"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Inventorier ce qui tourne réellement et qui consomme chaque sortie. Un traitement non documenté alimentant quelque chose d'important est ici le constat normal, pas l'exception."
      },
      {
        "step": "Concevoir",
        "body": "Convenir des schémas d'ingestion, des contrats, de la stratégie de test et de ce qu'est une bonne alerte pour l'astreinte réelle de votre équipe plutôt qu'idéale."
      },
      {
        "step": "Livrer",
        "body": "Reconstruire les flux par ordre de priorité, les faire tourner en parallèle de l'existant, comparer les sorties, puis décommissionner l'ancienne route comme une étape validée."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre procédures, pratique DataOps et modèle d'alerte, et rester aux côtés de vos ingénieurs jusqu'à ce qu'ils livrent eux-mêmes."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Consolider des piles d'intégration qui se chevauchent",
        "body": "Un assureur nord-américain exploitant plusieurs piles d'intégration côte à côte après des années d'acquisitions, les mêmes données de contrats circulant entre les deux mêmes systèmes par trois routes différentes. La consolidation a été séquencée par risque métier plutôt que par commodité technique, et le décommissionnement traité comme une étape de livraison avec sa propre validation plutôt que comme du nettoyage — ce qui explique habituellement pourquoi les routes en double survivent à leur propre remplacement."
      },
      {
        "proofType": "representative",
        "title": "Architecture représentative : modernisation de pipelines",
        "body": "Un parc de pipelines où les incidents sont signalés par les utilisateurs métier plutôt que par la supervision, et où chaque changement est chiffré au regard du risque de casser quelque chose de non documenté. Le schéma commence par l'inventaire — y compris les traitements que tout le monde croit éteints — puis contrats, tests et alertes par flux, puis conception du rétablissement, puis décommissionnement comme étape validée.",
        "outcome": "Ce que la mission laisse derrière elle : des standards d'ingénierie, des tests et alertes par flux, des procédures de rétablissement, et une liste de décommissionnement avec ses responsables."
      }
    ],
    "technologies": [
      {
        "group": "Orchestration",
        "items": [
          "Airflow",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
        ]
      },
      {
        "group": "Transformation",
        "items": [
          "dbt",
          "Spark",
          "Frameworks SQL"
        ]
      },
      {
        "group": "Streaming et CDC",
        "items": [
          "Kafka",
          "Debezium",
          "Fivetran",
          "Kinesis"
        ]
      },
      {
        "group": "Observabilité et tests",
        "items": [
          "tests dbt",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud et plateformes",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL"
        ]
      }
    ],
    "practitionerNote": "Les travaux d'ingénierie sont dirigés par notre associé principal, dont les quinze ans chez Informatica ont couvert plus de 300 missions auprès de banques, assureurs, télécoms et transporteurs de premier plan. Les problèmes de fiabilité d'un parc de pipelines sont rarement inédits, ce qui est une bonne nouvelle.",
    "relatedInsights": [
      {
        "kind": "Étude de cas",
        "label": "Consolider des piles d'intégration qui se chevauchent",
        "href": "/fr/case-studies/integration-platform-consolidation/"
      },
      {
        "kind": "Évaluation",
        "label": "Diagnostic de données — la revue élargie de deux à trois semaines",
        "href": "/fr/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Intégration des données",
        "href": "/solutions/data-integration/",
        "why": "L'architecture et les schémas que ces pipelines mettent en œuvre."
      },
      {
        "label": "Gouvernance des données et MDM",
        "href": "/solutions/data-governance/",
        "why": "Détient la politique qualité et les attentes de confiance ; implémentées ici."
      },
      {
        "label": "Préparation à l'IA",
        "href": "/solutions/ai-readiness/",
        "why": "Ce à quoi des données fiables et testées sont finalement destinées."
      }
    ],
    "faqs": [
      {
        "q": "Faut-il changer de plateforme pour gagner en fiabilité ?",
        "a": "Presque jamais. La fiabilité vient des contrats, des tests, des alertes et d'une pratique de déploiement, et ces quatre éléments s'ajoutent à la plateforme que vous exploitez déjà. Une migration entreprise pour régler la fiabilité transporte généralement les mêmes absences vers un hébergement plus coûteux."
      },
      {
        "q": "Comment décidez-vous par quoi commencer ?",
        "a": "Par ce qui casse et ce que cela coûte quand cela casse. Les flux alimentant le reporting réglementaire et financier passent en premier pour le risque, et les pannes récurrentes les plus bruyantes sont traitées tôt car elles consomment la semaine de votre équipe."
      },
      {
        "q": "Pouvez-vous travailler avec notre équipe d'ingénierie ?",
        "a": "C'est l'arrangement habituel. Nous mettons souvent en place les schémas, les contrats, les tests et la pratique DataOps pendant que vos ingénieurs réalisent l'essentiel de la reconstruction, ce qui est aussi la voie la plus rapide pour qu'ils s'en approprient la suite."
      },
      {
        "q": "Et les pipelines que plus personne ne comprend ?",
        "a": "Ils sont inventoriés comme les autres, puis documentés, reconstruits ou retirés. La seule chose que nous ne ferons pas est de laisser tourner un traitement parce que personne n'est sûr de ce qu'il fait : cette incertitude est le risque, pas le traitement."
      },
      {
        "q": "Est-ce la même chose que l'intégration de données ?",
        "a": "Lié mais différent, et c'est pourquoi ce sont deux pages. L'intégration porte sur l'architecture et les schémas entre systèmes ; l'ingénierie porte sur la construction et l'exploitation fiable des flux. La plupart des missions touchent aux deux, et nous vous dirons de quel côté se situe réellement votre problème."
      },
      {
        "q": "Quel est le lien avec la qualité et la gouvernance des données ?",
        "a": "Les contrôles de qualité et d'observabilité sont implémentés dans les pipelines, mais la politique, les données critiques et le modèle de gestion des anomalies relèvent de la pratique Gouvernance et MDM. La distinction compte : une règle de qualité sans propriétaire métier est un simple job de supervision, et les jobs de supervision finissent en sourdine."
      },
      {
        "q": "Qu'advient-il de notre coût d'exploitation ?",
        "a": "Nous ne promettrons pas de chiffre avant d'avoir regardé. Ce que le travail apporte, c'est de rendre coûts et schémas de panne assez visibles pour agir, et retirer les traitements réellement morts pèse en général plus lourd qu'on ne l'imagine."
      }
    ],
    "entryOffer": {
      "id": "data_engineering_health_check",
      "title": "Diagnostic d'ingénierie des données",
      "cta": "Réserver un diagnostic d'ingénierie",
      "body": "Une revue ciblée de la fiabilité des pipelines, des dépendances, des tests, de l'observabilité, du rétablissement et des pratiques de livraison. Vous repartez avec un inventaire des risques de défaillance, des standards d'ingénierie à adopter, et un backlog de modernisation séquencé.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en ingeniería de datos y pipelines",
    "seoDescription": "Pipelines batch, CDC y streaming con pruebas, observabilidad, linaje y DataOps integrados en el modelo operativo. Fiabilidad que tu equipo puede operar, cambiar y recuperar.",
    "eyebrow": "INGENIERÍA DE DATOS Y ARQUITECTURA DE PIPELINES",
    "h1": "Construye pipelines en los que tu equipo pueda confiar en producción.",
    "subhead": "Diseñamos y modernizamos pipelines batch, CDC y streaming con pruebas, observabilidad, linaje y DataOps integrados en el modelo operativo, no añadidos después del arranque.",
    "transformation": "Frágil → Fiable y operable",
    "signals": [
      "Los fallos de pipeline los descubren los usuarios de los informes y no la monitorización.",
      "Cambios pequeños en el origen rompen procesos aguas abajo sin previo aviso.",
      "Reintentos, recargas y recuperación dependen de unos pocos ingenieros con experiencia.",
      "Las rutas batch y streaming han crecido en paralelo sin patrones consistentes.",
      "Los ciclos de entrega son lentos porque las pruebas y el impacto de dependencias no están claros.",
      "Nadie sabe decir si el dato llega tarde, incompleto o simplemente mal."
    ],
    "consequenceFlow": [
      "Pipelines frágiles sin contratos, pruebas ni propiedad",
      "Los fallos quedan ocultos hasta que alguien aguas abajo los nota, y entonces la recuperación es manual",
      "El dato aguas abajo pierde fiabilidad y la gente empieza a guardar sus propias copias",
      "Las entregas se ralentizan mientras la carga operativa sube cada trimestre",
      "La confianza en la analítica y la IA cae, porque ambas heredan los mismos defectos"
    ],
    "consequenceNote": "La fragilidad rara vez es un pipeline malo. Es la ausencia de lo que hace segura la mudanza: un contrato, una prueba por flujo, una alerta con un responsable y una ruta de recuperación que alguien haya ensayado de verdad.",
    "transformationRows": [
      {
        "before": "Patrones de pipeline improvisados",
        "after": "Patrones de ingeniería reutilizables y contratos de datos"
      },
      {
        "before": "Pruebas manuales",
        "after": "Pruebas automatizadas de datos y de pipeline"
      },
      {
        "before": "Fallos detectados aguas abajo",
        "after": "Señales de frescura, volumen, esquema y dependencias"
      },
      {
        "before": "Dependencias opacas",
        "after": "Linaje documentado y rutas de impacto"
      },
      {
        "before": "Recuperación heroica",
        "after": "Procedimientos, reintentos, recargas y propiedad nombrada"
      },
      {
        "before": "Entregas arriesgadas",
        "after": "CI/CD, control de entornos y disciplina de despliegue"
      }
    ],
    "capabilities": [
      {
        "title": "Arquitectura de pipelines",
        "body": "Batch, CDC, micro-batch y streaming elegidos según la latencia de negocio y la necesidad operativa. Transmitir en streaming un flujo que se consume una vez al día es un coste; lo contrario es una obligación incumplida."
      },
      {
        "title": "Contratos de datos y cambio de esquema",
        "body": "Un acuerdo entre productor y consumidor sobre forma, semántica y preaviso, para que renombrar una columna sea una conversación antes del despliegue y no un incidente después."
      },
      {
        "title": "Transformaciones por capas",
        "body": "Capas cruda, probada y curada con patrones reutilizables, de modo que un origen nuevo siga un camino establecido en lugar de inventar uno por proyecto."
      },
      {
        "title": "Pruebas automatizadas y reconciliación",
        "body": "Pruebas sobre los datos y no solo sobre el código: recuentos, expectativas referenciales, estabilidad de esquema y reconciliación contra el origen."
      },
      {
        "title": "Observabilidad operativa",
        "body": "Frescura, volumen, deriva de esquema, fallos y señales de dependencia con alertas que nombran a un responsable. Se implementa aquí; las expectativas de confianza y propiedad detrás pertenecen a la práctica de Gobernanza y MDM."
      },
      {
        "title": "DataOps",
        "body": "Control de versiones, CI/CD, promoción de entornos y disciplina de entrega. El objetivo es que un cambio sea reversible, que es lo que lo vuelve rutinario."
      },
      {
        "title": "Diseño de recuperación",
        "body": "Idempotencia, reintentos, recargas, reproceso y degradación controlada, decididos en el diseño y no improvisados de madrugada. Casi todos los entornos pueden relanzar un proceso; muy pocos pueden relanzarlo dos veces con seguridad."
      },
      {
        "title": "Linaje ligado a la propiedad",
        "body": "Documentación y linaje que conectan un flujo con la persona responsable, para que el análisis de impacto tenga destinatario."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Los orígenes alimentan la ingesta — batch, CDC o eventos — hacia una capa cruda de aterrizaje donde nada se presupone y todo se conserva. Transformación y pruebas se ejecutan juntas, de modo que un defecto se detecta donde entra en lugar de encontrarse tres sistemas más abajo. El dato probado pasa a productos de datos curados, expuestos por una capa de servicio, semántica o API a analítica, operaciones e IA. Orquestación, observabilidad, linaje, seguridad y calidad atraviesan todas las etapas en lugar de quedarse al final. Calidad y observabilidad se implementan aquí; la política, la definición de datos críticos y el modelo de gestión de incidencias pertenecen a la práctica de Gobernanza y MDM, y por eso se dibujan cruzando el flujo en vez de como una etapa.",
      "layers": [
        {
          "name": "Orígenes",
          "items": [
            "Sistemas operativos",
            "SaaS",
            "Ficheros",
            "API"
          ]
        },
        {
          "name": "Ingesta",
          "items": [
            "Batch",
            "CDC",
            "Eventos y streaming"
          ]
        },
        {
          "name": "Crudo / aterrizaje",
          "items": [
            "Aterrizaje inmutable",
            "Retención",
            "Origen de reproceso"
          ]
        },
        {
          "name": "Transformación y pruebas",
          "items": [
            "Lógica de negocio",
            "Pruebas de datos",
            "Contratos",
            "Reconciliación"
          ]
        },
        {
          "name": "Productos de datos curados",
          "items": [
            "Conjuntos modelados",
            "Dimensiones conformadas",
            "Historificación"
          ]
        },
        {
          "name": "Servicio",
          "items": [
            "Capa semántica",
            "API",
            "Feeds operativos"
          ]
        },
        {
          "name": "Consumidores",
          "items": [
            "Analítica",
            "Operaciones",
            "IA y agentes"
          ]
        }
      ],
      "crossCutting": [
        "Orquestación",
        "Observabilidad",
        "Linaje",
        "Seguridad",
        "Calidad y gobernanza (propiedad de Gobernanza y MDM)"
      ]
    },
    "deliverables": [
      "Mapa de pipelines y dependencias del estado actual, con inventario de riesgo de fallo",
      "Arquitectura objetivo de pipelines y estándares de ingeniería por escrito",
      "Pipelines en producción dentro del alcance acordado",
      "Pruebas automatizadas y controles de reconciliación, ejecutándose en el pipeline y no al lado",
      "Monitorización, alertas y expectativas de nivel de servicio con responsables nombrados",
      "CI/CD, promoción de entornos y patrón de despliegue",
      "Procedimientos de recuperación y recarga, más el modelo de propiedad",
      "Backlog de modernización y transferencia de conocimiento a tus ingenieros"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Inventariar lo que realmente se ejecuta y quién consume cada salida. Un proceso sin documentar alimentando algo importante es aquí el hallazgo normal, no la excepción."
      },
      {
        "step": "Diseñar",
        "body": "Acordar los patrones de ingesta, los contratos, la estrategia de pruebas y qué es una buena alerta para la guardia real de tu equipo y no para una ideal."
      },
      {
        "step": "Entregar",
        "body": "Reconstruir flujos por prioridad, ejecutarlos en paralelo con lo que sustituyen, comparar salidas y luego dar de baja la ruta antigua como paso firmado."
      },
      {
        "step": "Habilitar",
        "body": "Entregar procedimientos, la práctica DataOps y el modelo de alertas, y acompañar a tus ingenieros hasta que publiquen cambios por su cuenta."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Consolidar pilas de integración solapadas",
        "body": "Una aseguradora norteamericana con varias pilas de integración funcionando en paralelo tras años de adquisiciones, y los mismos datos de póliza moviéndose entre los mismos dos sistemas por tres rutas distintas. La consolidación se secuenció por riesgo de negocio y no por conveniencia técnica, y la baja se trató como un paso de entrega con su propia firma en lugar de como limpieza, que es la razón habitual por la que las rutas duplicadas sobreviven a su propio reemplazo."
      },
      {
        "proofType": "representative",
        "title": "Arquitectura representativa: modernización de pipelines",
        "body": "Un parque de pipelines donde los fallos los reportan los usuarios de negocio y no la monitorización, y donde cada cambio se presupuesta por el riesgo de romper algo no documentado. El patrón es inventario primero — incluidos los procesos que todos dan por muertos — luego contratos, pruebas y alertas por flujo, después diseño de recuperación, y por último la baja como paso firmado.",
        "outcome": "Lo que deja el proyecto: estándares de ingeniería, pruebas y alertas por flujo, procedimientos de recuperación y una lista de bajas con responsables."
      }
    ],
    "technologies": [
      {
        "group": "Orquestación",
        "items": [
          "Airflow",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
        ]
      },
      {
        "group": "Transformación",
        "items": [
          "dbt",
          "Spark",
          "Frameworks SQL"
        ]
      },
      {
        "group": "Streaming y CDC",
        "items": [
          "Kafka",
          "Debezium",
          "Fivetran",
          "Kinesis"
        ]
      },
      {
        "group": "Observabilidad y pruebas",
        "items": [
          "tests de dbt",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud y plataforma",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL"
        ]
      }
    ],
    "practitionerNote": "El trabajo de ingeniería lo dirige nuestro socio principal, cuyos quince años en Informatica cubrieron más de 300 proyectos con bancos, aseguradoras, telecomunicaciones y transporte de primer nivel. Los problemas de fiabilidad de un parque de pipelines rara vez son inéditos, lo cual es una buena noticia.",
    "relatedInsights": [
      {
        "kind": "Caso de estudio",
        "label": "Consolidar pilas de integración solapadas",
        "href": "/es/case-studies/integration-platform-consolidation/"
      },
      {
        "kind": "Evaluación",
        "label": "Diagnóstico de datos — la revisión más amplia de dos a tres semanas",
        "href": "/es/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Integración de datos",
        "href": "/solutions/data-integration/",
        "why": "La arquitectura y los patrones que estos pipelines implementan."
      },
      {
        "label": "Gobernanza de datos y MDM",
        "href": "/solutions/data-governance/",
        "why": "Posee la política de calidad y las expectativas de confianza; se implementan aquí."
      },
      {
        "label": "Preparación para IA",
        "href": "/solutions/ai-readiness/",
        "why": "Para lo que en última instancia se prepara un dato fiable y probado."
      }
    ],
    "faqs": [
      {
        "q": "¿Hay que cambiar de plataforma para ganar fiabilidad?",
        "a": "Casi nunca. La fiabilidad viene de los contratos, las pruebas, las alertas y una práctica de despliegue, y las cuatro cosas se añaden a la plataforma que ya operas. Una migración emprendida para arreglar la fiabilidad suele trasladar las mismas ausencias a un hogar más caro."
      },
      {
        "q": "¿Cómo decidís qué arreglar primero?",
        "a": "Por lo que se rompe y lo que cuesta cuando se rompe. Los flujos que alimentan el reporte regulatorio y financiero van primero por riesgo, y los fallos recurrentes más ruidosos se atienden pronto porque están consumiendo la semana de tu equipo."
      },
      {
        "q": "¿Podéis trabajar con nuestro equipo de ingeniería?",
        "a": "Es el arreglo habitual. Solemos montar los patrones, contratos, pruebas y la práctica DataOps mientras tus ingenieros hacen el grueso de la reconstrucción, que además es la vía más rápida para que después sea suyo."
      },
      {
        "q": "¿Y los pipelines que ya nadie entiende?",
        "a": "Se inventarían como todo lo demás y después se documentan, se reconstruyen o se retiran. Lo único que no haremos es dejar un proceso corriendo porque nadie sabe qué hace: esa incertidumbre es el riesgo, no el proceso."
      },
      {
        "q": "¿Es lo mismo que el trabajo de integración de datos?",
        "a": "Relacionado pero no idéntico, y por eso son dos páginas. La integración es la arquitectura y los patrones entre sistemas; la ingeniería es construir y operar los flujos con fiabilidad. La mayoría de proyectos tocan ambos, y te diremos cuál es realmente tu problema."
      },
      {
        "q": "¿Cómo se relaciona esto con la calidad y la gobernanza?",
        "a": "Los controles de calidad y observabilidad se implementan en pipelines, pero la política, los datos críticos y el modelo de gestión de incidencias pertenecen a la práctica de Gobernanza y MDM. Esa distinción importa: una regla de calidad sin dueño de negocio es un trabajo de monitorización, y los trabajos de monitorización acaban silenciados."
      },
      {
        "q": "¿Qué pasa con nuestro coste operativo?",
        "a": "No prometeremos una cifra antes de mirar. Lo que hace el trabajo es hacer los costes y patrones de fallo lo bastante visibles para actuar, y retirar procesos realmente muertos suele pesar más de lo que la gente espera."
      }
    ],
    "entryOffer": {
      "id": "data_engineering_health_check",
      "title": "Diagnóstico de Ingeniería de Datos",
      "cta": "Reservar un diagnóstico de ingeniería",
      "body": "Una revisión focalizada de fiabilidad de pipelines, dependencias, pruebas, observabilidad, recuperación y práctica de entrega. Terminas con un inventario de riesgo de fallo, estándares de ingeniería que merece adoptar y un backlog de modernización secuenciado.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em engenharia de dados e pipelines",
    "seoDescription": "Pipelines batch, CDC e streaming com testes, observabilidade, linhagem e DataOps embutidos no modelo operacional. Confiabilidade que sua equipe consegue operar, mudar e recuperar.",
    "eyebrow": "ENGENHARIA DE DADOS E ARQUITETURA DE PIPELINES",
    "h1": "Construa pipelines em que sua equipe possa confiar em produção.",
    "subhead": "Projetamos e modernizamos pipelines batch, CDC e streaming com testes, observabilidade, linhagem e DataOps embutidos no modelo operacional, não adicionados depois do go-live.",
    "transformation": "Frágil → Confiável e operável",
    "signals": [
      "As falhas de pipeline são descobertas por usuários de relatórios, não pelo monitoramento.",
      "Pequenas mudanças na origem quebram rotinas a jusante sem aviso.",
      "Retentativas, recargas e recuperação dependem de poucos engenheiros experientes.",
      "Os caminhos batch e streaming cresceram lado a lado sem padrões consistentes.",
      "Os ciclos de entrega são lentos porque testes e impacto de dependências não estão claros.",
      "Ninguém sabe dizer se o dado está atrasado, incompleto ou simplesmente errado."
    ],
    "consequenceFlow": [
      "Pipelines frágeis sem contratos, testes ou dono",
      "As falhas ficam ocultas até alguém a jusante notar, e então a recuperação é manual",
      "O dado a jusante perde confiabilidade e as pessoas passam a guardar cópias próprias",
      "As entregas desaceleram enquanto a carga operacional sobe a cada trimestre",
      "A confiança em analytics e IA cai, porque ambos herdam os mesmos defeitos"
    ],
    "consequenceNote": "Fragilidade raramente é um pipeline ruim. É a ausência do que torna a mudança segura: um contrato, um teste por fluxo, um alerta com um responsável, e um caminho de recuperação que alguém de fato ensaiou.",
    "transformationRows": [
      {
        "before": "Padrões de pipeline improvisados",
        "after": "Padrões de engenharia reutilizáveis e contratos de dados"
      },
      {
        "before": "Testes manuais",
        "after": "Testes automatizados de dados e de pipeline"
      },
      {
        "before": "Falhas encontradas a jusante",
        "after": "Sinais de frescor, volume, esquema e dependências"
      },
      {
        "before": "Dependências opacas",
        "after": "Linhagem documentada e caminhos de impacto"
      },
      {
        "before": "Recuperação heroica",
        "after": "Runbooks, retentativas, recargas e propriedade nomeada"
      },
      {
        "before": "Entregas arriscadas",
        "after": "CI/CD, controle de ambientes e disciplina de deploy"
      }
    ],
    "capabilities": [
      {
        "title": "Arquitetura de pipelines",
        "body": "Batch, CDC, micro-batch e streaming escolhidos pela latência de negócio e pela necessidade operacional. Transmitir em streaming um fluxo consumido uma vez por dia é custo; o contrário é uma obrigação não cumprida."
      },
      {
        "title": "Contratos de dados e mudança de esquema",
        "body": "Um acordo entre produtor e consumidor sobre forma, semântica e aviso prévio, para que renomear uma coluna vire uma conversa antes do deploy em vez de um incidente depois."
      },
      {
        "title": "Transformações em camadas",
        "body": "Camadas bruta, testada e curada com padrões reutilizáveis, para que uma origem nova siga um caminho estabelecido em vez de inventar um por projeto."
      },
      {
        "title": "Testes automatizados e reconciliação",
        "body": "Testes sobre os dados e não apenas sobre o código: contagens, expectativas referenciais, estabilidade de esquema e reconciliação com a origem."
      },
      {
        "title": "Observabilidade operacional",
        "body": "Frescor, volume, desvio de esquema, falhas e sinais de dependência com alertas que nomeiam um responsável. Implementada aqui; as expectativas de confiança e propriedade por trás pertencem à prática de Governança e MDM."
      },
      {
        "title": "DataOps",
        "body": "Controle de versão, CI/CD, promoção de ambientes e disciplina de release. O ponto é que a mudança se torne reversível, e é isso que a torna rotineira."
      },
      {
        "title": "Desenho de recuperação",
        "body": "Idempotência, retentativas, recargas, replay e degradação controlada, decididos no desenho em vez de improvisados de madrugada. Quase todo ambiente consegue reexecutar uma rotina; bem menos conseguem reexecutá-la duas vezes com segurança."
      },
      {
        "title": "Linhagem ligada à propriedade",
        "body": "Documentação e linhagem que conectam um fluxo à pessoa responsável, para que a análise de impacto tenha a quem chegar."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "As origens alimentam a ingestão — batch, CDC ou eventos — para uma camada bruta de pouso onde nada é presumido e tudo é retido. Transformação e testes rodam juntos, de modo que um defeito é pego onde entra em vez de encontrado três sistemas adiante. O dado testado vira produtos de dados curados, expostos por uma camada de serviço, semântica ou API para analytics, operações e IA. Orquestração, observabilidade, linhagem, segurança e qualidade atravessam todas as etapas em vez de ficarem no fim. Qualidade e observabilidade são implementadas aqui; a política, a definição de dados críticos e o modelo de gestão de ocorrências pertencem à prática de Governança e MDM, e por isso aparecem cruzando o fluxo e não como uma etapa.",
      "layers": [
        {
          "name": "Origens",
          "items": [
            "Sistemas operacionais",
            "SaaS",
            "Arquivos",
            "APIs"
          ]
        },
        {
          "name": "Ingestão",
          "items": [
            "Batch",
            "CDC",
            "Eventos e streaming"
          ]
        },
        {
          "name": "Bruto / pouso",
          "items": [
            "Pouso imutável",
            "Retenção",
            "Origem de replay"
          ]
        },
        {
          "name": "Transformação e testes",
          "items": [
            "Lógica de negócio",
            "Testes de dados",
            "Contratos",
            "Reconciliação"
          ]
        },
        {
          "name": "Produtos de dados curados",
          "items": [
            "Conjuntos modelados",
            "Dimensões conformadas",
            "Historização"
          ]
        },
        {
          "name": "Servir",
          "items": [
            "Camada semântica",
            "APIs",
            "Feeds operacionais"
          ]
        },
        {
          "name": "Consumidores",
          "items": [
            "Analytics",
            "Operações",
            "IA e agentes"
          ]
        }
      ],
      "crossCutting": [
        "Orquestração",
        "Observabilidade",
        "Linhagem",
        "Segurança",
        "Qualidade e governança (de Governança e MDM)"
      ]
    },
    "deliverables": [
      "Mapa de pipelines e dependências do estado atual, com inventário de risco de falha",
      "Arquitetura-alvo de pipelines e padrões de engenharia escritos",
      "Pipelines em produção dentro do escopo acordado",
      "Testes automatizados e controles de reconciliação, rodando no pipeline e não ao lado",
      "Monitoramento, alertas e expectativas de nível de serviço com responsáveis nomeados",
      "CI/CD, promoção de ambientes e padrão de deploy",
      "Runbooks de recuperação e recarga, mais o modelo de propriedade",
      "Backlog de modernização e transferência de conhecimento para seus engenheiros"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Inventariar o que de fato roda e quem consome cada saída. Uma rotina não documentada alimentando algo importante é aqui o achado normal, não a exceção."
      },
      {
        "step": "Projetar",
        "body": "Acordar os padrões de ingestão, os contratos, a estratégia de testes e o que é um bom alerta para o plantão real da sua equipe, não para um ideal."
      },
      {
        "step": "Entregar",
        "body": "Reconstruir fluxos por prioridade, rodar em paralelo com o que substituem, comparar saídas e então descomissionar a rota antiga como passo assinado."
      },
      {
        "step": "Habilitar",
        "body": "Entregar runbooks, a prática de DataOps e o modelo de alertas, e ficar ao lado dos seus engenheiros até que publiquem mudanças sozinhos."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Consolidar pilhas de integração sobrepostas",
        "body": "Uma seguradora norte-americana rodando várias pilhas de integração lado a lado após anos de aquisições, com os mesmos dados de apólice indo entre os mesmos dois sistemas por três rotas diferentes. A consolidação foi sequenciada por risco de negócio e não por conveniência técnica, e o descomissionamento tratado como passo de entrega com assinatura própria em vez de limpeza — que é a razão habitual pela qual rotas duplicadas sobrevivem à própria substituição."
      },
      {
        "proofType": "representative",
        "title": "Arquitetura representativa: modernização de pipelines",
        "body": "Um parque de pipelines onde as falhas são relatadas por usuários de negócio e não pelo monitoramento, e onde cada mudança é precificada pelo risco de quebrar algo não documentado. O padrão é inventário primeiro — inclusive as rotinas que todos supõem mortas — depois contratos, testes e alertas por fluxo, então desenho de recuperação, e por fim descomissionamento como passo assinado.",
        "outcome": "O que o projeto deixa: padrões de engenharia, testes e alertas por fluxo, runbooks de recuperação e uma lista de descomissionamento com responsáveis."
      }
    ],
    "technologies": [
      {
        "group": "Orquestração",
        "items": [
          "Airflow",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
        ]
      },
      {
        "group": "Transformação",
        "items": [
          "dbt",
          "Spark",
          "Frameworks SQL"
        ]
      },
      {
        "group": "Streaming e CDC",
        "items": [
          "Kafka",
          "Debezium",
          "Fivetran",
          "Kinesis"
        ]
      },
      {
        "group": "Observabilidade e testes",
        "items": [
          "testes dbt",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Cloud e plataforma",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse",
          "PostgreSQL"
        ]
      }
    ],
    "practitionerNote": "O trabalho de engenharia é liderado pelo nosso sócio principal, cujos quinze anos na Informatica cobriram mais de 300 projetos com bancos, seguradoras, telecomunicações e transporte de primeira linha. Os problemas de confiabilidade de um parque de pipelines raramente são inéditos, o que é uma boa notícia.",
    "relatedInsights": [
      {
        "kind": "Estudo de caso",
        "label": "Consolidar pilhas de integração sobrepostas",
        "href": "/pt/case-studies/integration-platform-consolidation/"
      },
      {
        "kind": "Avaliação",
        "label": "Diagnóstico de dados — a revisão mais ampla de duas a três semanas",
        "href": "/pt/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Integração de dados",
        "href": "/solutions/data-integration/",
        "why": "A arquitetura e os padrões que estes pipelines implementam."
      },
      {
        "label": "Governança de dados e MDM",
        "href": "/solutions/data-governance/",
        "why": "Detém a política de qualidade e as expectativas de confiança; implementadas aqui."
      },
      {
        "label": "Prontidão para IA",
        "href": "/solutions/ai-readiness/",
        "why": "Para o que dados confiáveis e testados são, no fim, preparados."
      }
    ],
    "faqs": [
      {
        "q": "Precisamos trocar de plataforma para ter confiabilidade?",
        "a": "Quase nunca. Confiabilidade vem de contratos, testes, alertas e uma prática de deploy, e os quatro podem ser adicionados à plataforma que você já opera. Uma migração feita para resolver confiabilidade normalmente leva as mesmas ausências para uma casa mais cara."
      },
      {
        "q": "Como vocês decidem o que corrigir primeiro?",
        "a": "Pelo que quebra e pelo que custa quando quebra. Fluxos que alimentam relatórios regulatórios e financeiros vêm primeiro por risco, e as falhas recorrentes mais barulhentas são tratadas cedo porque estão consumindo a semana da sua equipe."
      },
      {
        "q": "Vocês conseguem trabalhar com nossa equipe de engenharia?",
        "a": "É o arranjo usual. Normalmente montamos os padrões, contratos, testes e a prática de DataOps enquanto seus engenheiros fazem o grosso da reconstrução, o que também é o caminho mais rápido para que depois seja deles."
      },
      {
        "q": "E os pipelines que ninguém mais entende?",
        "a": "São inventariados como todo o resto e então documentados, reconstruídos ou aposentados. A única coisa que não faremos é deixar uma rotina rodando porque ninguém tem certeza do que ela faz: essa incerteza é o risco, não a rotina."
      },
      {
        "q": "Isso é o mesmo que trabalho de integração de dados?",
        "a": "Relacionado, mas não idêntico, e por isso são duas páginas. Integração é a arquitetura e os padrões entre sistemas; engenharia é construir e operar os fluxos com confiabilidade. A maioria dos projetos toca os dois, e diremos qual é de fato o seu problema."
      },
      {
        "q": "Como isso se relaciona com qualidade e governança?",
        "a": "Controles de qualidade e observabilidade são implementados em pipelines, mas a política, os dados críticos e o modelo de gestão de ocorrências pertencem à prática de Governança e MDM. Essa distinção importa: uma regra de qualidade sem dono de negócio é uma rotina de monitoramento, e rotinas de monitoramento acabam silenciadas."
      },
      {
        "q": "O que acontece com nosso custo operacional?",
        "a": "Não prometemos um número antes de olhar. O que o trabalho faz é tornar custos e padrões de falha visíveis o bastante para agir, e aposentar rotinas de fato mortas costuma pesar mais do que as pessoas esperam."
      }
    ],
    "entryOffer": {
      "id": "data_engineering_health_check",
      "title": "Diagnóstico de Engenharia de Dados",
      "cta": "Agendar um diagnóstico de engenharia",
      "body": "Uma revisão focada de confiabilidade de pipelines, dependências, testes, observabilidade, recuperação e prática de entrega. Você termina com um inventário de risco de falha, padrões de engenharia que valem adotar e um backlog de modernização sequenciado.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
