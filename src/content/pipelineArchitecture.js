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
    "seoTitle": "Data Engineering Consulting",
    "seoDescription": "Reliable, observable data pipelines with DataOps practice. Inventory what actually runs, add tests and alerting per flow, and make a pipeline change a routine release instead of an event.",
    "eyebrow": "DATA ENGINEERING & PIPELINE ARCHITECTURE",
    "h1": "Pipelines your team can change without holding their breath.",
    "subhead": "Data delivery is fragile, opaque or expensive to operate. We rebuild it as a practice: what runs is inventoried, every flow has tests and alerting that names an owner, and shipping a change stops being an event.",
    "transformation": "Fragile → Reliable",
    "signals": [
      "A pipeline change is estimated by the risk of breaking something, not by the work.",
      "Failures are found by business users on a Monday morning.",
      "Nobody is confident which jobs are still needed, so nothing gets switched off.",
      "Dependencies are discovered when something downstream breaks.",
      "The operating burden grows every quarter and nobody can point to why.",
      "The person who built it has left, or is the only one who can safely touch it."
    ],
    "consequenceFlow": [
      "Pipelines accumulate without inventory, tests or ownership",
      "Every change is priced for the risk of breaking something undocumented",
      "Releases slow down and the backlog moves to workarounds instead",
      "Incidents are found by users, so trust in the data drops",
      "Operating cost rises while delivery speed falls"
    ],
    "consequenceNote": "Fragility is rarely one bad pipeline. It is the absence of the things that make change safe: an inventory, a test per flow, an alert with an owner on it, and a decommissioning step that someone actually signs.",
    "transformationRows": [
      {
        "before": "Unknown inventory of running jobs",
        "after": "A current inventory with consumers identified per output"
      },
      {
        "before": "Failures found by users",
        "after": "Alerting on freshness, volume and schema drift, with an owner"
      },
      {
        "before": "Every change is a risk event",
        "after": "Tests per flow, so a change is a routine release"
      },
      {
        "before": "Dead jobs left running",
        "after": "Decommissioning as a delivery step with sign-off"
      },
      {
        "before": "One person who can safely touch it",
        "after": "Documented runbooks a second engineer can follow"
      },
      {
        "before": "Operating burden rising quietly",
        "after": "Cost and failure patterns visible enough to act on"
      }
    ],
    "capabilities": [
      {
        "title": "Pipeline inventory and dependency mapping",
        "body": "What actually runs, what consumes each output, and which jobs everyone assumes are dead but are not. This is unglamorous and it is where every reliability programme has to start."
      },
      {
        "title": "Ingestion patterns",
        "body": "Batch, change data capture, API and streaming, chosen per use case rather than per fashion. One documented pattern applied per source beats a bespoke design per project."
      },
      {
        "title": "Testing and data contracts",
        "body": "Tests that run on the data, not only on the code: row counts, referential expectations, schema stability. A contract between producer and consumer that fails loudly when it is broken."
      },
      {
        "title": "Observability and alerting",
        "body": "Freshness, volume, schema drift, failures and anomalies, routed to a named owner. Implemented here, but owned by the Data Governance practice — quality and observability are governance concerns wherever the code lives."
      },
      {
        "title": "DataOps",
        "body": "Version control, environments, automated deployment and rollback for pipelines. The point is that a change becomes reversible, which is what makes it routine."
      },
      {
        "title": "Decommissioning",
        "body": "Retiring the pipeline you replaced, treated as a delivery step with its own sign-off. Consolidations fail here more often than they fail in the build."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Raw source data is ingested into a landing layer where nothing is assumed and everything is retained. Transformation and testing produce curated datasets, and only tested data reaches the serving layer that analytics, applications and AI consume. DataOps and observability run across every stage rather than sitting at the end: a test at the point of transformation is what stops a defect reaching a user, and an alert only helps if it fires before someone notices. Governance and quality ownership stay with the Data Governance & MDM practice, even though the controls are implemented here.",
      "layers": [
        {
          "name": "Raw & source",
          "items": [
            "Operational systems",
            "Files and APIs",
            "Event streams"
          ]
        },
        {
          "name": "Ingestion",
          "items": [
            "Batch",
            "Change data capture",
            "Streaming",
            "Landing zone"
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
          "name": "Curated",
          "items": [
            "Modelled datasets",
            "Conformed dimensions",
            "Historised data"
          ]
        },
        {
          "name": "Serve",
          "items": [
            "Analytics",
            "Applications",
            "AI and agents",
            "Operational feeds"
          ]
        }
      ],
      "crossCutting": [
        "DataOps: version control, environments, rollback",
        "Observability and alerting",
        "Governance and quality ownership",
        "Lineage",
        "Security and access"
      ]
    },
    "deliverables": [
      "Inventory of running pipelines with consumers and owners per output",
      "Dependency map, including the jobs nobody could account for",
      "One documented ingestion pattern, applied per source rather than per project",
      "Tests and data contracts per flow, running in the pipeline rather than beside it",
      "Observability, alerting and on-call routing that names an owner",
      "DataOps setup: version control, environments, deployment and rollback",
      "Operational runbooks a second engineer can follow",
      "A decommissioning list with owners and sign-off per item",
      "Knowledge transfer to your engineering team"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Inventory what runs and who consumes it. Expect surprises here — undocumented jobs feeding something important is the normal finding, not the exceptional one."
      },
      {
        "step": "Design",
        "body": "Agree the ingestion pattern, the test strategy and what good alerting looks like for your team's on-call reality rather than an ideal one."
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
        "proofType": "representative",
        "title": "Representative pattern: pipelines nobody can change safely",
        "body": "A pipeline estate where failures are reported by business users rather than monitoring, and every change is priced for the risk of breaking something undocumented. The work starts with an inventory of what actually runs, including the jobs everyone assumes are dead, because you cannot make safe a thing you cannot list.",
        "outcome": "What the engagement leaves behind: one documented ingestion pattern, tests and alerting per flow, and a decommissioning list with owners."
      },
      {
        "proofType": "priorExperience",
        "title": "Consolidating overlapping integration stacks",
        "body": "A North American insurer running several integration stacks side by side after years of acquisitions, with the same policy data moving between the same two systems by three different routes. Consolidation was sequenced by business risk rather than technical convenience, and decommissioning was treated as a delivery step with its own sign-off rather than as cleanup — which is the usual reason duplicate routes survive their own replacement."
      }
    ],
    "technologies": [
      {
        "group": "Orchestration & transformation",
        "items": [
          "Airflow",
          "dbt",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
        ]
      },
      {
        "group": "Streaming & CDC",
        "items": [
          "Kafka",
          "Debezium",
          "Fivetran",
          "Kinesis"
        ]
      },
      {
        "group": "Testing & observability",
        "items": [
          "dbt tests",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Platforms",
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
        "label": "Data Health Check — the two to three week review",
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
        "why": "Where quality and observability are owned, even when built here."
      },
      {
        "label": "Analytics Enablement",
        "href": "/solutions/analytics-enablement/",
        "why": "What the curated layer is ultimately serving."
      }
    ],
    "faqs": [
      {
        "q": "Do we need to move to a new platform to get reliability?",
        "a": "Almost never. Reliability comes from inventory, tests, alerting and a deployment practice, and all four can be added to the platform you already run. A migration undertaken to fix reliability usually carries the same absences across to a more expensive home."
      },
      {
        "q": "How do you decide what to fix first?",
        "a": "By what breaks and what it costs when it does. Flows feeding regulatory and financial reporting get attention first for risk, and the noisiest recurring failures get attention early because they are consuming your team's week."
      },
      {
        "q": "Can you work with our existing engineering team?",
        "a": "That is the usual arrangement. We often set up the pattern, the tests and the DataOps practice while your engineers do the bulk of the rebuild, which is also the fastest route to them owning it afterwards."
      },
      {
        "q": "What about the pipelines nobody understands any more?",
        "a": "They get inventoried like everything else, then either documented, rebuilt or retired. The one thing we will not do is leave a job running because nobody is sure what it does — that uncertainty is the risk, not the job."
      },
      {
        "q": "Is this the same as data integration work?",
        "a": "Related but not identical. Integration is about the architecture and the patterns between systems; engineering is about building and operating the flows reliably. Most engagements touch both, and we will tell you which one your problem actually is."
      },
      {
        "q": "How does this connect to governance?",
        "a": "Quality and observability controls are implemented in pipelines, but they are owned by the Data Governance & MDM practice. That distinction matters: a quality rule with no business owner is a monitoring job, and monitoring jobs get muted."
      },
      {
        "q": "What happens to our operating cost?",
        "a": "We will not promise a number before looking. What the work does is make cost and failure patterns visible enough to act on, and retiring genuinely dead jobs usually accounts for more than people expect."
      }
    ],
    "entryOffer": {
      "id": "data_health_check",
      "title": "Data Health Check",
      "cta": "Book a Data Health Check",
      "href": "/data-health-check/",
      "body": "A two to three week review across architecture, integration, data quality, governance and operating risk. You finish with a written current-state view, prioritised findings and a sequenced roadmap.",
      "note": "Scope and commercial terms are agreed in writing before the review starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en ingénierie des données",
    "seoDescription": "Des pipelines fiables et observables avec une pratique DataOps. Inventorier ce qui tourne, ajouter tests et alertes par flux, et faire d'une modification de pipeline une mise en production de routine.",
    "eyebrow": "INGÉNIERIE DES DONNÉES ET ARCHITECTURE DE PIPELINE",
    "h1": "Des pipelines que votre équipe peut modifier sans retenir son souffle.",
    "subhead": "La livraison des données est fragile, opaque ou coûteuse à exploiter. Nous la reconstruisons comme une pratique : ce qui tourne est inventorié, chaque flux dispose de tests et d'alertes désignant un responsable, et livrer un changement cesse d'être un événement.",
    "transformation": "Fragile → Fiable",
    "signals": [
      "Une modification de pipeline est estimée d'après le risque de casser quelque chose, pas d'après le travail.",
      "Les incidents sont découverts par les utilisateurs métier un lundi matin.",
      "Personne n'est sûr des traitements encore nécessaires, donc rien n'est éteint.",
      "Les dépendances se découvrent quand quelque chose casse en aval.",
      "La charge d'exploitation croît chaque trimestre sans que personne sache dire pourquoi.",
      "La personne qui l'a construit est partie, ou reste la seule à pouvoir y toucher sans risque."
    ],
    "consequenceFlow": [
      "Les pipelines s'accumulent sans inventaire, tests ni propriétaire",
      "Chaque changement est chiffré au regard du risque de casser quelque chose de non documenté",
      "Les livraisons ralentissent et le backlog se déplace vers des contournements",
      "Les incidents sont trouvés par les utilisateurs, donc la confiance dans les données baisse",
      "Le coût d'exploitation monte pendant que la vitesse de livraison descend"
    ],
    "consequenceNote": "La fragilité vient rarement d'un mauvais pipeline. Elle vient de l'absence de ce qui rend le changement sûr : un inventaire, un test par flux, une alerte avec un responsable, et une étape de décommissionnement que quelqu'un valide réellement.",
    "transformationRows": [
      {
        "before": "Inventaire inconnu des traitements en cours",
        "after": "Un inventaire à jour, avec les consommateurs identifiés par sortie"
      },
      {
        "before": "Incidents découverts par les utilisateurs",
        "after": "Alertes sur fraîcheur, volumétrie et dérive de schéma, avec un responsable"
      },
      {
        "before": "Chaque changement est un événement à risque",
        "after": "Des tests par flux : un changement devient une livraison de routine"
      },
      {
        "before": "Traitements morts laissés en marche",
        "after": "Décommissionnement comme étape de livraison, avec validation"
      },
      {
        "before": "Une seule personne peut y toucher sans risque",
        "after": "Des procédures documentées qu'un second ingénieur peut suivre"
      },
      {
        "before": "Charge d'exploitation qui monte discrètement",
        "after": "Coûts et schémas de panne assez visibles pour agir"
      }
    ],
    "capabilities": [
      {
        "title": "Inventaire des pipelines et cartographie des dépendances",
        "body": "Ce qui tourne réellement, ce qui consomme chaque sortie, et les traitements que tout le monde croit morts sans l'être. C'est peu spectaculaire, et c'est par là que tout programme de fiabilité doit commencer."
      },
      {
        "title": "Schémas d'ingestion",
        "body": "Batch, capture de changements, API et streaming, choisis selon l'usage et non selon la mode. Un schéma documenté appliqué par source vaut mieux qu'une conception sur mesure par projet."
      },
      {
        "title": "Tests et contrats de données",
        "body": "Des tests qui portent sur les données et pas seulement sur le code : volumétrie, intégrité référentielle, stabilité du schéma. Un contrat entre producteur et consommateur qui échoue bruyamment lorsqu'il est rompu."
      },
      {
        "title": "Observabilité et alertes",
        "body": "Fraîcheur, volumétrie, dérive de schéma, incidents et anomalies, routés vers un responsable nommé. Implémenté ici, mais relevant de la pratique Gouvernance des données — qualité et observabilité sont des sujets de gouvernance quel que soit l'endroit où vit le code."
      },
      {
        "title": "DataOps",
        "body": "Gestion de versions, environnements, déploiement automatisé et retour arrière pour les pipelines. L'intérêt est qu'un changement devienne réversible, ce qui le rend routinier."
      },
      {
        "title": "Décommissionnement",
        "body": "Retirer le pipeline remplacé, traité comme une étape de livraison avec sa propre validation. Les consolidations échouent plus souvent ici que dans la construction."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Les données sources brutes sont ingérées dans une zone d'atterrissage où rien n'est présumé et tout est conservé. Transformation et tests produisent des jeux de données organisés, et seules des données testées atteignent la couche de service que consomment l'analytique, les applications et l'IA. DataOps et observabilité traversent chaque étape plutôt que de se placer à la fin : un test au moment de la transformation est ce qui empêche un défaut d'atteindre un utilisateur, et une alerte n'aide que si elle se déclenche avant que quelqu'un ne remarque. La propriété de la gouvernance et de la qualité reste à la pratique Gouvernance des données et MDM, même si les contrôles sont implémentés ici.",
      "layers": [
        {
          "name": "Brut et sources",
          "items": [
            "Systèmes opérationnels",
            "Fichiers et API",
            "Flux d'événements"
          ]
        },
        {
          "name": "Ingestion",
          "items": [
            "Batch",
            "Capture de changements",
            "Streaming",
            "Zone d'atterrissage"
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
          "name": "Organisé",
          "items": [
            "Jeux de données modélisés",
            "Dimensions conformées",
            "Historisation"
          ]
        },
        {
          "name": "Service",
          "items": [
            "Analytique",
            "Applications",
            "IA et agents",
            "Flux opérationnels"
          ]
        }
      ],
      "crossCutting": [
        "DataOps : versions, environnements, retour arrière",
        "Observabilité et alertes",
        "Propriété de la gouvernance et de la qualité",
        "Traçabilité",
        "Sécurité et accès"
      ]
    },
    "deliverables": [
      "Inventaire des pipelines en production avec consommateurs et responsables par sortie",
      "Cartographie des dépendances, y compris les traitements que personne ne savait expliquer",
      "Un schéma d'ingestion documenté, appliqué par source plutôt que par projet",
      "Tests et contrats de données par flux, exécutés dans le pipeline et non à côté",
      "Observabilité, alertes et routage d'astreinte désignant un responsable",
      "Mise en place DataOps : versions, environnements, déploiement et retour arrière",
      "Procédures d'exploitation qu'un second ingénieur peut suivre",
      "Une liste de décommissionnement avec responsables et validation par élément",
      "Transfert de compétences vers votre équipe d'ingénierie"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Inventorier ce qui tourne et qui le consomme. Attendez-vous à des surprises : un traitement non documenté alimentant quelque chose d'important est le constat normal, pas l'exception."
      },
      {
        "step": "Concevoir",
        "body": "Convenir du schéma d'ingestion, de la stratégie de test et de ce qu'est une bonne alerte pour la réalité d'astreinte de votre équipe plutôt que pour une réalité idéale."
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
        "proofType": "representative",
        "title": "Schéma représentatif : des pipelines que personne ne peut modifier sereinement",
        "body": "Un parc de pipelines où les incidents sont signalés par les utilisateurs métier plutôt que par la supervision, et où chaque changement est chiffré au regard du risque de casser quelque chose de non documenté. Le travail commence par un inventaire de ce qui tourne réellement, y compris les traitements que tout le monde croit éteints, car on ne peut pas sécuriser ce qu'on ne sait pas lister.",
        "outcome": "Ce que la mission laisse derrière elle : un schéma d'ingestion documenté, des tests et des alertes par flux, et une liste de décommissionnement avec ses responsables."
      },
      {
        "proofType": "priorExperience",
        "title": "Consolider des piles d'intégration qui se chevauchent",
        "body": "Un assureur nord-américain exploitant plusieurs piles d'intégration côte à côte après des années d'acquisitions, les mêmes données de contrats circulant entre les deux mêmes systèmes par trois routes différentes. La consolidation a été séquencée par risque métier plutôt que par commodité technique, et le décommissionnement traité comme une étape de livraison avec sa propre validation plutôt que comme du nettoyage — ce qui explique habituellement pourquoi les routes en double survivent à leur propre remplacement."
      }
    ],
    "technologies": [
      {
        "group": "Orchestration et transformation",
        "items": [
          "Airflow",
          "dbt",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
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
        "group": "Tests et observabilité",
        "items": [
          "tests dbt",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Plateformes",
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
        "label": "Diagnostic de données — la revue de deux à trois semaines",
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
        "why": "Où qualité et observabilité sont détenues, même construites ici."
      },
      {
        "label": "Activation de l'analytique",
        "href": "/solutions/analytics-enablement/",
        "why": "Ce que la couche organisée sert en définitive."
      }
    ],
    "faqs": [
      {
        "q": "Faut-il changer de plateforme pour gagner en fiabilité ?",
        "a": "Presque jamais. La fiabilité vient de l'inventaire, des tests, des alertes et d'une pratique de déploiement, et ces quatre éléments s'ajoutent à la plateforme que vous exploitez déjà. Une migration entreprise pour régler la fiabilité transporte généralement les mêmes absences vers un hébergement plus coûteux."
      },
      {
        "q": "Comment décidez-vous par quoi commencer ?",
        "a": "Par ce qui casse et ce que cela coûte quand cela casse. Les flux alimentant le reporting réglementaire et financier passent en premier pour le risque, et les pannes récurrentes les plus bruyantes sont traitées tôt car elles consomment la semaine de votre équipe."
      },
      {
        "q": "Pouvez-vous travailler avec notre équipe d'ingénierie ?",
        "a": "C'est l'arrangement habituel. Nous mettons souvent en place le schéma, les tests et la pratique DataOps pendant que vos ingénieurs réalisent l'essentiel de la reconstruction, ce qui est aussi la voie la plus rapide pour qu'ils s'en approprient la suite."
      },
      {
        "q": "Et les pipelines que plus personne ne comprend ?",
        "a": "Ils sont inventoriés comme les autres, puis documentés, reconstruits ou retirés. La seule chose que nous ne ferons pas est de laisser tourner un traitement parce que personne n'est sûr de ce qu'il fait : cette incertitude est le risque, pas le traitement."
      },
      {
        "q": "Est-ce la même chose que l'intégration de données ?",
        "a": "Lié mais différent. L'intégration porte sur l'architecture et les schémas entre systèmes ; l'ingénierie porte sur la construction et l'exploitation fiable des flux. La plupart des missions touchent aux deux, et nous vous dirons de quel côté se situe réellement votre problème."
      },
      {
        "q": "Quel est le lien avec la gouvernance ?",
        "a": "Les contrôles de qualité et d'observabilité sont implémentés dans les pipelines, mais ils relèvent de la pratique Gouvernance des données et MDM. La distinction compte : une règle de qualité sans propriétaire métier est un simple job de supervision, et les jobs de supervision finissent en sourdine."
      },
      {
        "q": "Qu'advient-il de notre coût d'exploitation ?",
        "a": "Nous ne promettrons pas de chiffre avant d'avoir regardé. Ce que le travail apporte, c'est de rendre coûts et schémas de panne assez visibles pour agir, et retirer les traitements réellement morts pèse en général plus lourd qu'on ne l'imagine."
      }
    ],
    "entryOffer": {
      "id": "data_health_check",
      "title": "Diagnostic de données",
      "cta": "Réserver un diagnostic de données",
      "href": "/data-health-check/",
      "body": "Une revue de deux à trois semaines couvrant architecture, intégration, qualité des données, gouvernance et risque opérationnel. Vous repartez avec un état des lieux écrit, des constats priorisés et une feuille de route séquencée.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en ingeniería de datos",
    "seoDescription": "Pipelines fiables y observables con práctica DataOps. Inventariar lo que se ejecuta, añadir pruebas y alertas por flujo, y convertir un cambio de pipeline en una entrega rutinaria.",
    "eyebrow": "INGENIERÍA DE DATOS Y ARQUITECTURA DE PIPELINES",
    "h1": "Pipelines que tu equipo puede cambiar sin contener la respiración.",
    "subhead": "La entrega de datos es frágil, opaca o cara de operar. La reconstruimos como práctica: lo que se ejecuta está inventariado, cada flujo tiene pruebas y alertas que nombran a un responsable, y publicar un cambio deja de ser un acontecimiento.",
    "transformation": "Frágil → Fiable",
    "signals": [
      "Un cambio de pipeline se estima por el riesgo de romper algo, no por el trabajo.",
      "Los fallos los encuentran los usuarios de negocio un lunes por la mañana.",
      "Nadie está seguro de qué procesos siguen siendo necesarios, así que no se apaga nada.",
      "Las dependencias se descubren cuando algo se rompe aguas abajo.",
      "La carga operativa crece cada trimestre y nadie sabe señalar por qué.",
      "Quien lo construyó se fue, o es la única persona que puede tocarlo con seguridad."
    ],
    "consequenceFlow": [
      "Los pipelines se acumulan sin inventario, pruebas ni propiedad",
      "Cada cambio se presupuesta por el riesgo de romper algo no documentado",
      "Las entregas se ralentizan y el backlog se desplaza hacia apaños",
      "Los incidentes los encuentran los usuarios, así que baja la confianza en los datos",
      "El coste operativo sube mientras la velocidad de entrega baja"
    ],
    "consequenceNote": "La fragilidad rara vez es un pipeline malo. Es la ausencia de lo que hace seguro el cambio: un inventario, una prueba por flujo, una alerta con un responsable y un paso de baja que alguien firma de verdad.",
    "transformationRows": [
      {
        "before": "Inventario desconocido de procesos activos",
        "after": "Un inventario actual con consumidores identificados por salida"
      },
      {
        "before": "Fallos encontrados por usuarios",
        "after": "Alertas de frescura, volumen y deriva de esquema, con responsable"
      },
      {
        "before": "Cada cambio es un evento de riesgo",
        "after": "Pruebas por flujo: un cambio es una entrega rutinaria"
      },
      {
        "before": "Procesos muertos que siguen corriendo",
        "after": "La baja como paso de entrega con firma"
      },
      {
        "before": "Una sola persona puede tocarlo con seguridad",
        "after": "Procedimientos documentados que otro ingeniero puede seguir"
      },
      {
        "before": "Carga operativa subiendo en silencio",
        "after": "Costes y patrones de fallo visibles lo bastante para actuar"
      }
    ],
    "capabilities": [
      {
        "title": "Inventario de pipelines y mapa de dependencias",
        "body": "Qué se ejecuta realmente, qué consume cada salida y qué procesos todos dan por muertos sin estarlo. Es poco vistoso y es por donde tiene que empezar cualquier programa de fiabilidad."
      },
      {
        "title": "Patrones de ingesta",
        "body": "Batch, captura de cambios, API y streaming, elegidos por caso de uso y no por moda. Un patrón documentado aplicado por origen vale más que un diseño a medida por proyecto."
      },
      {
        "title": "Pruebas y contratos de datos",
        "body": "Pruebas sobre los datos y no solo sobre el código: recuentos, expectativas referenciales, estabilidad de esquema. Un contrato entre productor y consumidor que falla ruidosamente cuando se rompe."
      },
      {
        "title": "Observabilidad y alertas",
        "body": "Frescura, volumen, deriva de esquema, fallos y anomalías, dirigidos a un responsable nombrado. Se implementa aquí, pero pertenece a la práctica de Gobernanza de Datos: calidad y observabilidad son asuntos de gobernanza esté donde esté el código."
      },
      {
        "title": "DataOps",
        "body": "Control de versiones, entornos, despliegue automatizado y rollback para pipelines. El objetivo es que un cambio sea reversible, que es lo que lo vuelve rutinario."
      },
      {
        "title": "Baja de procesos",
        "body": "Retirar el pipeline que se sustituyó, tratado como un paso de entrega con su propia firma. Las consolidaciones fallan aquí más a menudo que en la construcción."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Los datos de origen se ingieren en una zona de aterrizaje donde nada se presupone y todo se conserva. La transformación y las pruebas producen conjuntos curados, y solo datos probados llegan a la capa de servicio que consumen analítica, aplicaciones e IA. DataOps y observabilidad atraviesan cada etapa en lugar de situarse al final: una prueba en el momento de la transformación es lo que impide que un defecto llegue a un usuario, y una alerta solo ayuda si se dispara antes de que alguien lo note. La propiedad de gobernanza y calidad permanece en la práctica de Gobernanza de Datos y MDM, aunque los controles se implementen aquí.",
      "layers": [
        {
          "name": "Crudo y orígenes",
          "items": [
            "Sistemas operativos",
            "Ficheros y API",
            "Flujos de eventos"
          ]
        },
        {
          "name": "Ingesta",
          "items": [
            "Batch",
            "Captura de cambios",
            "Streaming",
            "Zona de aterrizaje"
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
          "name": "Curado",
          "items": [
            "Conjuntos modelados",
            "Dimensiones conformadas",
            "Historificación"
          ]
        },
        {
          "name": "Servicio",
          "items": [
            "Analítica",
            "Aplicaciones",
            "IA y agentes",
            "Feeds operativos"
          ]
        }
      ],
      "crossCutting": [
        "DataOps: versiones, entornos, rollback",
        "Observabilidad y alertas",
        "Propiedad de gobernanza y calidad",
        "Linaje",
        "Seguridad y acceso"
      ]
    },
    "deliverables": [
      "Inventario de pipelines activos con consumidores y responsables por salida",
      "Mapa de dependencias, incluidos los procesos que nadie sabía explicar",
      "Un patrón de ingesta documentado, aplicado por origen y no por proyecto",
      "Pruebas y contratos de datos por flujo, ejecutándose dentro del pipeline y no al lado",
      "Observabilidad, alertas y enrutado de guardia que nombra a un responsable",
      "Montaje de DataOps: versiones, entornos, despliegue y rollback",
      "Procedimientos operativos que otro ingeniero pueda seguir",
      "Una lista de bajas con responsables y firma por elemento",
      "Transferencia de conocimiento a tu equipo de ingeniería"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Inventariar lo que se ejecuta y quién lo consume. Espera sorpresas: un proceso sin documentar alimentando algo importante es el hallazgo normal, no la excepción."
      },
      {
        "step": "Diseñar",
        "body": "Acordar el patrón de ingesta, la estrategia de pruebas y qué es una buena alerta para la realidad de guardia de tu equipo y no para una ideal."
      },
      {
        "step": "Entregar",
        "body": "Reconstruir flujos por prioridad, ejecutarlos en paralelo con lo que sustituyen, comparar salidas y después dar de baja la ruta antigua como paso firmado."
      },
      {
        "step": "Habilitar",
        "body": "Entregar procedimientos, la práctica DataOps y el modelo de alertas, y acompañar a tus ingenieros hasta que publiquen cambios por su cuenta."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Patrón representativo: pipelines que nadie puede cambiar con seguridad",
        "body": "Un parque de pipelines donde los fallos los reportan los usuarios de negocio y no la monitorización, y donde cada cambio se presupuesta por el riesgo de romper algo no documentado. El trabajo empieza por inventariar lo que realmente se ejecuta, incluidos los procesos que todos dan por muertos, porque no puedes asegurar lo que no puedes listar.",
        "outcome": "Lo que deja el proyecto: un patrón de ingesta documentado, pruebas y alertas por flujo, y una lista de bajas con responsables."
      },
      {
        "proofType": "priorExperience",
        "title": "Consolidar pilas de integración solapadas",
        "body": "Una aseguradora norteamericana con varias pilas de integración funcionando en paralelo tras años de adquisiciones, y los mismos datos de póliza moviéndose entre los mismos dos sistemas por tres rutas distintas. La consolidación se secuenció por riesgo de negocio y no por conveniencia técnica, y la baja se trató como un paso de entrega con su propia firma en lugar de como limpieza, que es la razón habitual por la que las rutas duplicadas sobreviven a su propio reemplazo."
      }
    ],
    "technologies": [
      {
        "group": "Orquestación y transformación",
        "items": [
          "Airflow",
          "dbt",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
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
        "group": "Pruebas y observabilidad",
        "items": [
          "tests de dbt",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Plataformas",
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
        "label": "Diagnóstico de datos — la revisión de dos a tres semanas",
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
        "why": "Donde residen calidad y observabilidad, aunque se construyan aquí."
      },
      {
        "label": "Habilitación de análisis",
        "href": "/solutions/analytics-enablement/",
        "why": "Lo que la capa curada sirve en última instancia."
      }
    ],
    "faqs": [
      {
        "q": "¿Hay que cambiar de plataforma para ganar fiabilidad?",
        "a": "Casi nunca. La fiabilidad viene del inventario, las pruebas, las alertas y una práctica de despliegue, y las cuatro cosas se añaden a la plataforma que ya operas. Una migración emprendida para arreglar la fiabilidad suele trasladar las mismas ausencias a un hogar más caro."
      },
      {
        "q": "¿Cómo decidís qué arreglar primero?",
        "a": "Por lo que se rompe y lo que cuesta cuando se rompe. Los flujos que alimentan el reporte regulatorio y financiero van primero por riesgo, y los fallos recurrentes más ruidosos se atienden pronto porque están consumiendo la semana de tu equipo."
      },
      {
        "q": "¿Podéis trabajar con nuestro equipo de ingeniería?",
        "a": "Es el arreglo habitual. Solemos montar el patrón, las pruebas y la práctica DataOps mientras tus ingenieros hacen el grueso de la reconstrucción, que además es la vía más rápida para que después sea suyo."
      },
      {
        "q": "¿Y los pipelines que ya nadie entiende?",
        "a": "Se inventarían como todo lo demás y después se documentan, se reconstruyen o se retiran. Lo único que no haremos es dejar un proceso corriendo porque nadie sabe qué hace: esa incertidumbre es el riesgo, no el proceso."
      },
      {
        "q": "¿Es lo mismo que el trabajo de integración de datos?",
        "a": "Relacionado pero no idéntico. La integración va de la arquitectura y los patrones entre sistemas; la ingeniería va de construir y operar los flujos con fiabilidad. La mayoría de proyectos tocan ambos, y te diremos cuál es realmente tu problema."
      },
      {
        "q": "¿Cómo se conecta esto con la gobernanza?",
        "a": "Los controles de calidad y observabilidad se implementan en pipelines, pero pertenecen a la práctica de Gobernanza de Datos y MDM. Esa distinción importa: una regla de calidad sin dueño de negocio es un trabajo de monitorización, y los trabajos de monitorización acaban silenciados."
      },
      {
        "q": "¿Qué pasa con nuestro coste operativo?",
        "a": "No prometeremos una cifra antes de mirar. Lo que hace el trabajo es hacer los costes y patrones de fallo lo bastante visibles para actuar, y retirar procesos realmente muertos suele pesar más de lo que la gente espera."
      }
    ],
    "entryOffer": {
      "id": "data_health_check",
      "title": "Diagnóstico de datos",
      "cta": "Reservar un diagnóstico de datos",
      "href": "/data-health-check/",
      "body": "Una revisión de dos a tres semanas de arquitectura, integración, calidad de datos, gobernanza y riesgo operativo. Terminas con una visión escrita del estado actual, hallazgos priorizados y una hoja de ruta secuenciada.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em engenharia de dados",
    "seoDescription": "Pipelines confiáveis e observáveis com prática de DataOps. Inventariar o que roda, adicionar testes e alertas por fluxo, e tornar uma mudança de pipeline uma entrega de rotina.",
    "eyebrow": "ENGENHARIA DE DADOS E ARQUITETURA DE PIPELINES",
    "h1": "Pipelines que sua equipe consegue mudar sem prender a respiração.",
    "subhead": "A entrega de dados é frágil, opaca ou cara de operar. Reconstruímos isso como prática: o que roda está inventariado, cada fluxo tem testes e alertas que nomeiam um responsável, e publicar uma mudança deixa de ser um evento.",
    "transformation": "Frágil → Confiável",
    "signals": [
      "Uma mudança de pipeline é estimada pelo risco de quebrar algo, não pelo trabalho.",
      "As falhas são encontradas por usuários de negócio numa segunda-feira de manhã.",
      "Ninguém tem certeza de quais rotinas ainda são necessárias, então nada é desligado.",
      "Dependências são descobertas quando algo quebra a jusante.",
      "A carga operacional cresce a cada trimestre e ninguém sabe apontar por quê.",
      "Quem construiu saiu, ou é a única pessoa que consegue mexer com segurança."
    ],
    "consequenceFlow": [
      "Pipelines se acumulam sem inventário, testes ou dono",
      "Cada mudança é precificada pelo risco de quebrar algo não documentado",
      "As entregas desaceleram e o backlog migra para contornos",
      "Incidentes são achados por usuários, então a confiança nos dados cai",
      "O custo operacional sobe enquanto a velocidade de entrega desce"
    ],
    "consequenceNote": "Fragilidade raramente é um pipeline ruim. É a ausência do que torna a mudança segura: um inventário, um teste por fluxo, um alerta com um responsável, e um passo de descomissionamento que alguém de fato assina.",
    "transformationRows": [
      {
        "before": "Inventário desconhecido de rotinas em execução",
        "after": "Um inventário atual, com consumidores identificados por saída"
      },
      {
        "before": "Falhas encontradas por usuários",
        "after": "Alertas de frescor, volume e desvio de esquema, com um responsável"
      },
      {
        "before": "Toda mudança é um evento de risco",
        "after": "Testes por fluxo: uma mudança vira entrega de rotina"
      },
      {
        "before": "Rotinas mortas deixadas rodando",
        "after": "Descomissionamento como passo de entrega, com assinatura"
      },
      {
        "before": "Uma só pessoa mexe com segurança",
        "after": "Runbooks documentados que um segundo engenheiro consegue seguir"
      },
      {
        "before": "Carga operacional subindo em silêncio",
        "after": "Custos e padrões de falha visíveis o bastante para agir"
      }
    ],
    "capabilities": [
      {
        "title": "Inventário de pipelines e mapa de dependências",
        "body": "O que de fato roda, o que consome cada saída, e quais rotinas todos supõem mortas sem estarem. É pouco glamouroso e é por onde todo programa de confiabilidade precisa começar."
      },
      {
        "title": "Padrões de ingestão",
        "body": "Batch, captura de mudanças, API e streaming, escolhidos por caso de uso e não por moda. Um padrão documentado aplicado por origem vale mais do que um desenho sob medida por projeto."
      },
      {
        "title": "Testes e contratos de dados",
        "body": "Testes sobre os dados e não só sobre o código: contagens, expectativas referenciais, estabilidade de esquema. Um contrato entre produtor e consumidor que falha alto quando é quebrado."
      },
      {
        "title": "Observabilidade e alertas",
        "body": "Frescor, volume, desvio de esquema, falhas e anomalias, roteados para um responsável nomeado. Implementado aqui, mas pertencente à prática de Governança de Dados — qualidade e observabilidade são temas de governança onde quer que o código viva."
      },
      {
        "title": "DataOps",
        "body": "Controle de versão, ambientes, deploy automatizado e rollback para pipelines. O ponto é que a mudança se torne reversível, e é isso que a torna rotineira."
      },
      {
        "title": "Descomissionamento",
        "body": "Aposentar o pipeline que você substituiu, tratado como passo de entrega com assinatura própria. Consolidações falham mais aqui do que na construção."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "Os dados de origem são ingeridos numa camada de pouso onde nada é presumido e tudo é retido. Transformação e testes produzem conjuntos curados, e apenas dados testados chegam à camada de serviço que analytics, aplicações e IA consomem. DataOps e observabilidade atravessam todas as etapas em vez de ficarem no fim: um teste no momento da transformação é o que impede um defeito de chegar ao usuário, e um alerta só ajuda se disparar antes de alguém perceber. A propriedade de governança e qualidade permanece com a prática de Governança de Dados e MDM, mesmo com os controles implementados aqui.",
      "layers": [
        {
          "name": "Bruto e origens",
          "items": [
            "Sistemas operacionais",
            "Arquivos e APIs",
            "Fluxos de eventos"
          ]
        },
        {
          "name": "Ingestão",
          "items": [
            "Batch",
            "Captura de mudanças",
            "Streaming",
            "Zona de pouso"
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
          "name": "Curado",
          "items": [
            "Conjuntos modelados",
            "Dimensões conformadas",
            "Historização"
          ]
        },
        {
          "name": "Servir",
          "items": [
            "Analytics",
            "Aplicações",
            "IA e agentes",
            "Feeds operacionais"
          ]
        }
      ],
      "crossCutting": [
        "DataOps: versão, ambientes, rollback",
        "Observabilidade e alertas",
        "Propriedade de governança e qualidade",
        "Linhagem",
        "Segurança e acesso"
      ]
    },
    "deliverables": [
      "Inventário de pipelines em execução com consumidores e responsáveis por saída",
      "Mapa de dependências, incluindo as rotinas que ninguém sabia explicar",
      "Um padrão de ingestão documentado, aplicado por origem e não por projeto",
      "Testes e contratos de dados por fluxo, rodando dentro do pipeline e não ao lado",
      "Observabilidade, alertas e roteamento de plantão que nomeia um responsável",
      "Montagem de DataOps: versão, ambientes, deploy e rollback",
      "Runbooks operacionais que um segundo engenheiro consiga seguir",
      "Uma lista de descomissionamento com responsáveis e assinatura por item",
      "Transferência de conhecimento para sua equipe de engenharia"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Inventariar o que roda e quem consome. Espere surpresas: uma rotina não documentada alimentando algo importante é o achado normal, não a exceção."
      },
      {
        "step": "Projetar",
        "body": "Acordar o padrão de ingestão, a estratégia de testes e o que é um bom alerta para a realidade de plantão da sua equipe, não para uma ideal."
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
        "proofType": "representative",
        "title": "Padrão representativo: pipelines que ninguém consegue mudar com segurança",
        "body": "Um parque de pipelines onde as falhas são relatadas por usuários de negócio e não pelo monitoramento, e onde cada mudança é precificada pelo risco de quebrar algo não documentado. O trabalho começa pelo inventário do que de fato roda, inclusive as rotinas que todos supõem mortas, porque não dá para tornar seguro o que não se consegue listar.",
        "outcome": "O que o projeto deixa: um padrão de ingestão documentado, testes e alertas por fluxo, e uma lista de descomissionamento com responsáveis."
      },
      {
        "proofType": "priorExperience",
        "title": "Consolidar pilhas de integração sobrepostas",
        "body": "Uma seguradora norte-americana rodando várias pilhas de integração lado a lado após anos de aquisições, com os mesmos dados de apólice indo entre os mesmos dois sistemas por três rotas diferentes. A consolidação foi sequenciada por risco de negócio e não por conveniência técnica, e o descomissionamento tratado como passo de entrega com assinatura própria em vez de limpeza — que é a razão habitual pela qual rotas duplicadas sobrevivem à própria substituição."
      }
    ],
    "technologies": [
      {
        "group": "Orquestração e transformação",
        "items": [
          "Airflow",
          "dbt",
          "Dagster",
          "Azure Data Factory",
          "Informatica"
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
        "group": "Testes e observabilidade",
        "items": [
          "testes dbt",
          "Great Expectations",
          "Monte Carlo",
          "OpenLineage"
        ]
      },
      {
        "group": "Plataformas",
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
        "label": "Diagnóstico de dados — a revisão de duas a três semanas",
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
        "why": "Onde qualidade e observabilidade pertencem, mesmo construídas aqui."
      },
      {
        "label": "Capacitação em Analytics",
        "href": "/solutions/analytics-enablement/",
        "why": "O que a camada curada serve no fim das contas."
      }
    ],
    "faqs": [
      {
        "q": "Precisamos trocar de plataforma para ter confiabilidade?",
        "a": "Quase nunca. Confiabilidade vem de inventário, testes, alertas e uma prática de deploy, e os quatro podem ser adicionados à plataforma que você já opera. Uma migração feita para resolver confiabilidade normalmente leva as mesmas ausências para uma casa mais cara."
      },
      {
        "q": "Como vocês decidem o que corrigir primeiro?",
        "a": "Pelo que quebra e pelo que custa quando quebra. Fluxos que alimentam relatórios regulatórios e financeiros vêm primeiro por risco, e as falhas recorrentes mais barulhentas são tratadas cedo porque estão consumindo a semana da sua equipe."
      },
      {
        "q": "Vocês conseguem trabalhar com nossa equipe de engenharia?",
        "a": "É o arranjo usual. Normalmente montamos o padrão, os testes e a prática de DataOps enquanto seus engenheiros fazem o grosso da reconstrução, o que também é o caminho mais rápido para que depois seja deles."
      },
      {
        "q": "E os pipelines que ninguém mais entende?",
        "a": "São inventariados como todo o resto e então documentados, reconstruídos ou aposentados. A única coisa que não faremos é deixar uma rotina rodando porque ninguém tem certeza do que ela faz: essa incerteza é o risco, não a rotina."
      },
      {
        "q": "Isso é o mesmo que trabalho de integração de dados?",
        "a": "Relacionado, mas não idêntico. Integração é sobre arquitetura e padrões entre sistemas; engenharia é sobre construir e operar os fluxos com confiabilidade. A maioria dos projetos toca os dois, e diremos qual é de fato o seu problema."
      },
      {
        "q": "Como isso se conecta à governança?",
        "a": "Controles de qualidade e observabilidade são implementados em pipelines, mas pertencem à prática de Governança de Dados e MDM. Essa distinção importa: uma regra de qualidade sem dono de negócio é uma rotina de monitoramento, e rotinas de monitoramento acabam silenciadas."
      },
      {
        "q": "O que acontece com nosso custo operacional?",
        "a": "Não prometemos um número antes de olhar. O que o trabalho faz é tornar custos e padrões de falha visíveis o bastante para agir, e aposentar rotinas de fato mortas costuma pesar mais do que as pessoas esperam."
      }
    ],
    "entryOffer": {
      "id": "data_health_check",
      "title": "Diagnóstico de dados",
      "cta": "Agendar um diagnóstico de dados",
      "href": "/data-health-check/",
      "body": "Uma revisão de duas a três semanas de arquitetura, integração, qualidade de dados, governança e risco operacional. Você termina com uma visão escrita do estado atual, achados priorizados e um roteiro sequenciado.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
