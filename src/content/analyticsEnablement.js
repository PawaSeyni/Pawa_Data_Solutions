// Analytics Enablement — Sprint 7D rollout.
//
// Content only; DeepSolution.jsx renders it. See src/lib/solutionSchema.js.
//
// §12B: governed master and reference data plus semantic definitions are the
// foundation for trusted metrics — so this page leans on the Governance & MDM
// practice rather than restating it. Four architecture stages, the fewest of the
// six, because the shape of this problem genuinely is shorter.

export const IDENTITY = {
  slug: 'solutions/analytics-enablement',
  pageName: 'AnalyticsEnablement',
  category: 'Analytics & Decision Intelligence',
};

export const LOCALES = {
  en: {
    "seoTitle": "Analytics & Decision Intelligence Consulting",
    "seoDescription": "Trusted metrics, governed semantic definitions and decision products, so people stop reconciling numbers and start acting on them. Lineage from metric to source.",
    "eyebrow": "ANALYTICS & DECISION INTELLIGENCE",
    "h1": "Give every decision the same trusted version of the business.",
    "subhead": "We connect governed data, shared metric definitions and fit-for-purpose analytics so teams can explain a number, trust it and act on it, without rebuilding the logic in every report.",
    "transformation": "Reporting → Trusted decisions",
    "signals": [
      "Executives receive different answers to the same business question.",
      "Analysts spend more time reconciling metrics than interpreting them.",
      "Critical KPI logic lives inside individual dashboards or spreadsheets.",
      "Self-service has produced more reports, but not more consistency.",
      "Nobody can easily trace a metric back to its source and its definition.",
      "Analytics and AI teams inherit the same semantic ambiguity."
    ],
    "consequenceFlow": [
      "The same measure is defined differently in different tools",
      "Meetings begin by reconciling dashboards instead of deciding",
      "Decisions are delayed, and confidence in the numbers drops",
      "Teams duplicate analytics effort to produce a version they trust",
      "AI and decision automation inherit the ambiguity and scale it"
    ],
    "consequenceNote": "The problem is almost never the BI tool. It is that a definition was never agreed, so every tool encodes a slightly different one and the disagreement surfaces in the meeting rather than in the design.",
    "transformationRows": [
      {
        "before": "Dashboard-specific KPI logic",
        "after": "Governed shared metric definitions"
      },
      {
        "before": "Multiple versions of truth",
        "after": "Named business definitions with named owners"
      },
      {
        "before": "Manual reconciliation",
        "after": "A consistent semantic and metric layer"
      },
      {
        "before": "Opaque calculations",
        "after": "Navigable lineage from metric to source"
      },
      {
        "before": "Report proliferation",
        "after": "Purpose-built decision products"
      },
      {
        "before": "Analyst dependency",
        "after": "Governed self-service with clear boundaries"
      }
    ],
    "capabilities": [
      {
        "title": "Metric inventory and rationalisation",
        "body": "Find every place a measure is defined, and how many of those definitions actually differ. The overlap is usually smaller and more contested than anyone expects."
      },
      {
        "title": "Business glossary and ownership",
        "body": "Definitions tied to analytics, with one accountable owner per term rather than a committee. Shared ownership of a definition is precisely how two teams end up with two numbers."
      },
      {
        "title": "Semantic and metrics-layer architecture",
        "body": "The agreed definition encoded once, so every tool inherits it instead of reimplementing it. When the definition changes it changes in one place and every consumer follows."
      },
      {
        "title": "Data product and curated model design",
        "body": "Curated models built on governed sources and master data, so a per-customer figure is not silently counting one customer three times."
      },
      {
        "title": "Lineage from source to reported measure",
        "body": "The derivation path for a published number becomes navigable rather than reconstructed, which is what makes a figure explainable under challenge."
      },
      {
        "title": "Quality rules on critical measures",
        "body": "Data quality rules attached to the measures that matter, defined under the Governance & MDM practice and enforced where the metric is produced."
      },
      {
        "title": "Report rationalisation and governed self-service",
        "body": "Retiring what nobody uses, certifying what people depend on, and giving analysts a clear path to build without letting definitions drift again."
      },
      {
        "title": "Decision workflow design",
        "body": "What action a metric should enable, by whom, and when. A dashboard with no decision attached is a maintenance liability rather than an asset."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Governed sources and master data — customer, product and reference domains from the Governance & MDM practice — feed curated data products. A semantic and metrics layer sits above them, defining each measure exactly once, and BI tools, embedded analytics and data apps consume that layer rather than reimplementing the logic. That is what stops two tools from disagreeing. Those products attach to specific decision workflows, so a report has a named owner and a cadence. Definitions, ownership, quality, lineage, access and observability span the whole path, so anyone looking at a number can find out what it means and who is accountable for it.",
      "layers": [
        {
          "name": "Governed sources & master data",
          "items": [
            "Curated source data",
            "Mastered entities",
            "Reference domains"
          ]
        },
        {
          "name": "Curated data products",
          "items": [
            "Modelled datasets",
            "Conformed dimensions",
            "Certified tables"
          ]
        },
        {
          "name": "Semantic / metrics layer",
          "items": [
            "Metric definitions",
            "Business logic",
            "Certified measures"
          ]
        },
        {
          "name": "BI, embedded analytics & data apps",
          "items": [
            "Dashboards",
            "Reports",
            "Embedded analytics",
            "Data apps"
          ]
        },
        {
          "name": "Decision workflows",
          "items": [
            "Owners and cadence",
            "Operational reviews",
            "Alerts and thresholds"
          ]
        }
      ],
      "crossCutting": [
        "Governance: definitions and ownership",
        "Data quality on critical measures",
        "Lineage from metric to source",
        "Access control",
        "Observability and freshness status"
      ]
    },
    "deliverables": [
      "Metric and KPI inventory, with the conflicts and ownership gaps named",
      "Canonical metric definitions and the semantic model that encodes them",
      "Target analytics architecture",
      "Priority dashboards and data products redesigned around the decisions they support",
      "Lineage and quality controls for the critical measures",
      "Report rationalisation backlog: what is retired, what is kept, and why",
      "Self-service governance rules and enablement material for your analysts",
      "A route for a new metric to become official rather than proliferate"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Find where the same measure is defined more than once, and which decisions actually depend on it."
      },
      {
        "step": "Design",
        "body": "Facilitate agreement on definitions and ownership. Where two areas genuinely need different measures, we name them differently rather than pretending one is wrong."
      },
      {
        "step": "Deliver",
        "body": "Build the semantic layer and rebuild the priority reporting on it, in parallel with what exists so the numbers can be compared before anything is switched off."
      },
      {
        "step": "Enable",
        "body": "Hand over the definition change process and the certification path, so the next metric does not start another divergence."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Making regulatory figures explainable",
        "body": "A Canadian financial institution producing regulatory numbers on time but unable to demonstrate how a given figure had been derived. Each reported measure was traced through its transformations back to source, and the owning business definition captured with a named owner. Quality rules were attached to the definitions themselves, so a breach named a person rather than a table. Where two business areas disagreed on a definition, the disagreement surfaced during the work rather than during a review — which is the cheaper of the two moments to find it."
      },
      {
        "proofType": "representative",
        "title": "Representative pattern: two teams, two numbers",
        "body": "Dashboards exist and are not trusted, because finance and operations calculate the same measure differently and neither definition is written down. The work surfaces the disagreement rather than averaging it, then fixes the definition once in a semantic layer and rebuilds the reporting on top.",
        "outcome": "What the engagement leaves behind: agreed metric definitions with owners, a semantic layer that enforces them, and a rationalisation list with reasoning."
      }
    ],
    "technologies": [
      {
        "group": "Semantic and metrics layers",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Power BI models"
        ]
      },
      {
        "group": "BI and visualisation",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Governance and catalog",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Platform",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse"
        ]
      }
    ],
    "practitionerNote": "Analytics work is led by our principal, whose background is governance, lineage and mastered data for Tier 1 financial institutions. That matters here because most analytics trust problems are definition and entity problems that have surfaced in a dashboard.",
    "relatedInsights": [
      {
        "kind": "Case study",
        "label": "Making regulatory figures explainable",
        "href": "/case-studies/governance-regulatory-reporting/"
      },
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Call",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-call/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "Where definitions, ownership and mastered entities come from."
      },
      {
        "label": "Data Engineering",
        "href": "/solutions/pipeline-architecture/",
        "why": "The curated layer the metric layer is built on."
      },
      {
        "label": "AI Readiness",
        "href": "/solutions/ai-readiness/",
        "why": "The same definitions an AI system will need to answer consistently."
      }
    ],
    "faqs": [
      {
        "q": "Do we need to change BI tools?",
        "a": "Usually not. Two tools disagreeing is a symptom of two definitions, not of the wrong tool. Once the definition lives in one place most tools consume it happily, and a migration undertaken to fix trust generally reproduces the problem in a new interface."
      },
      {
        "q": "Who decides the definition when two teams disagree?",
        "a": "You do, and the work is making that decision possible rather than making it for you. Sometimes the honest answer is that both measures are legitimate and need different names — averaging them into one is the failure mode we most want to avoid."
      },
      {
        "q": "How does this depend on governance and MDM?",
        "a": "Heavily. A metric built on unresolved entities will be wrong in a way no dashboard can reveal: if one customer appears three times, every per-customer figure is wrong and looks fine. We will say plainly when the analytics problem is actually an entity problem."
      },
      {
        "q": "Will you delete our dashboards?",
        "a": "We will produce the list and the reasoning; retiring them is your call. Rationalisation is politically harder than it is technically, so we would rather hand you a defensible case than a fait accompli."
      },
      {
        "q": "What about self-service? We do not want a bottleneck.",
        "a": "Nor do we. The aim is analysts building freely on certified datasets with agreed definitions, plus a clear route for a new metric to become official. The bottleneck people fear usually comes from having no such route, not from having governance."
      },
      {
        "q": "How long before anything changes?",
        "a": "The Analytics Health Check runs in weeks and is deliberately narrow: where definitions diverge, which decisions depend on them, and what it would take to fix the top few. A full semantic layer is longer work and should be justified by that review rather than assumed."
      },
      {
        "q": "Can you work alongside our BI team?",
        "a": "Yes, and it is usually the right shape. Your BI team knows the reporting landscape and the politics; we bring the definition and governance discipline. Both are needed, and neither is sufficient."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Analytics Health Check",
      "cta": "Book an Analytics Health Check",
      "body": "A focused review of metric consistency, semantic architecture, report sprawl, lineage, data quality and decision usability. You finish with the conflicts named, the owners identified, and a sequence for fixing the ones that matter.",
      "note": "Scope and commercial terms are agreed in writing before the review starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en analytique et intelligence décisionnelle",
    "seoDescription": "Des mesures fiables, des définitions sémantiques gouvernées et des produits de décision, pour que les équipes cessent de réconcilier des chiffres et se mettent à agir. Traçabilité de la mesure jusqu'à la source.",
    "eyebrow": "ANALYTIQUE ET INTELLIGENCE DÉCISIONNELLE",
    "h1": "Donnez à chaque décision la même version fiable de l'entreprise.",
    "subhead": "Nous relions données gouvernées, définitions de mesures partagées et analytique adaptée à l'usage, pour que les équipes puissent expliquer un chiffre, s'y fier et agir, sans reconstruire la logique dans chaque rapport.",
    "transformation": "Reporting → Décisions fiables",
    "signals": [
      "Les dirigeants reçoivent des réponses différentes à la même question métier.",
      "Les analystes passent plus de temps à réconcilier des mesures qu'à les interpréter.",
      "La logique des indicateurs critiques vit dans des tableaux de bord ou des tableurs isolés.",
      "Le libre-service a produit davantage de rapports, mais pas plus de cohérence.",
      "Personne ne peut facilement retracer une mesure jusqu'à sa source et sa définition.",
      "Les équipes analytique et IA héritent de la même ambiguïté sémantique."
    ],
    "consequenceFlow": [
      "La même mesure est définie différemment selon les outils",
      "Les réunions commencent par réconcilier des tableaux de bord au lieu de décider",
      "Les décisions sont retardées et la confiance dans les chiffres baisse",
      "Les équipes dupliquent l'effort analytique pour produire une version à laquelle elles se fient",
      "L'IA et l'automatisation des décisions héritent de l'ambiguïté et la démultiplient"
    ],
    "consequenceNote": "Le problème n'est presque jamais l'outil décisionnel. C'est qu'une définition n'a jamais été convenue : chaque outil en encode donc une légèrement différente, et le désaccord surgit en réunion plutôt qu'à la conception.",
    "transformationRows": [
      {
        "before": "Logique d'indicateur propre à chaque tableau de bord",
        "after": "Des définitions de mesures partagées et gouvernées"
      },
      {
        "before": "Plusieurs versions de la vérité",
        "after": "Des définitions métier nommées, avec des propriétaires nommés"
      },
      {
        "before": "Réconciliation manuelle",
        "after": "Une couche sémantique et de mesures cohérente"
      },
      {
        "before": "Calculs opaques",
        "after": "Une traçabilité navigable de la mesure jusqu'à la source"
      },
      {
        "before": "Prolifération de rapports",
        "after": "Des produits de décision conçus pour un usage"
      },
      {
        "before": "Dépendance aux analystes",
        "after": "Un libre-service gouverné, aux frontières claires"
      }
    ],
    "capabilities": [
      {
        "title": "Inventaire et rationalisation des mesures",
        "body": "Trouver chaque endroit où une mesure est définie, et combien de ces définitions diffèrent réellement. Le recoupement est en général plus étroit et plus disputé qu'on ne l'imagine."
      },
      {
        "title": "Glossaire métier et propriété",
        "body": "Des définitions rattachées à l'analytique, avec un propriétaire responsable par terme plutôt qu'un comité. La propriété partagée d'une définition est précisément ce qui produit deux chiffres."
      },
      {
        "title": "Architecture de couche sémantique",
        "body": "La définition convenue encodée une seule fois : chaque outil en hérite au lieu de la réimplémenter. Quand elle change, elle change à un seul endroit."
      },
      {
        "title": "Conception des produits de données",
        "body": "Des modèles organisés bâtis sur des sources gouvernées et des données maîtres, pour qu'un indicateur par client ne compte pas silencieusement trois fois le même client."
      },
      {
        "title": "Traçabilité de la source à la mesure publiée",
        "body": "Le chemin de dérivation d'un chiffre devient navigable au lieu d'être reconstitué, ce qui rend la mesure explicable en cas de contestation."
      },
      {
        "title": "Règles de qualité sur les mesures critiques",
        "body": "Des règles rattachées aux mesures qui comptent, définies dans la pratique Gouvernance et MDM et appliquées là où la mesure est produite."
      },
      {
        "title": "Rationalisation et libre-service gouverné",
        "body": "Retirer ce que personne n'utilise, certifier ce dont les équipes dépendent, et donner aux analystes un chemin clair pour construire sans laisser dériver les définitions."
      },
      {
        "title": "Conception des processus de décision",
        "body": "Quelle action une mesure doit permettre, par qui et quand. Un tableau de bord sans décision rattachée est une dette de maintenance."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Les sources gouvernées et les données maîtres — client, produit et domaines de référence issus de la pratique Gouvernance et MDM — alimentent des produits de données organisés. Une couche sémantique et de mesures se place au-dessus, définissant chaque indicateur exactement une fois ; les outils décisionnels, l'analytique embarquée et les applications de données consomment cette couche au lieu de réimplémenter la logique. C'est ce qui empêche deux outils de diverger. Ces produits se rattachent à des processus de décision précis : un rapport a donc un propriétaire nommé et une cadence. Définitions, propriété, qualité, traçabilité, accès et observabilité traversent tout le parcours.",
      "layers": [
        {
          "name": "Sources gouvernées et données maîtres",
          "items": [
            "Données sources organisées",
            "Entités maîtres",
            "Domaines de référence"
          ]
        },
        {
          "name": "Produits de données organisés",
          "items": [
            "Jeux modélisés",
            "Dimensions conformées",
            "Tables certifiées"
          ]
        },
        {
          "name": "Couche sémantique et de mesures",
          "items": [
            "Définitions de mesures",
            "Logique métier",
            "Mesures certifiées"
          ]
        },
        {
          "name": "Décisionnel, analytique embarquée et applications",
          "items": [
            "Tableaux de bord",
            "Rapports",
            "Analytique embarquée",
            "Applications de données"
          ]
        },
        {
          "name": "Processus de décision",
          "items": [
            "Propriétaires et cadence",
            "Revues opérationnelles",
            "Alertes et seuils"
          ]
        }
      ],
      "crossCutting": [
        "Gouvernance : définitions et propriété",
        "Qualité sur les mesures critiques",
        "Traçabilité de la mesure à la source",
        "Contrôle d'accès",
        "Observabilité et fraîcheur"
      ]
    },
    "deliverables": [
      "Inventaire des mesures et indicateurs, avec les conflits et les manques de propriété nommés",
      "Définitions canoniques et le modèle sémantique qui les encode",
      "Architecture analytique cible",
      "Tableaux de bord et produits de données prioritaires reconçus autour des décisions qu'ils soutiennent",
      "Traçabilité et contrôles de qualité pour les mesures critiques",
      "Backlog de rationalisation : ce qui est retiré, ce qui est conservé, et pourquoi",
      "Règles de gouvernance du libre-service et matériel d'accompagnement pour vos analystes",
      "Un parcours pour qu'une nouvelle mesure devienne officielle plutôt que de proliférer"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Trouver où la même mesure est définie plus d'une fois, et quelles décisions en dépendent réellement."
      },
      {
        "step": "Concevoir",
        "body": "Animer l'accord sur les définitions et la propriété. Lorsque deux domaines ont réellement besoin de mesures différentes, nous les nommons différemment plutôt que de prétendre que l'une est fausse."
      },
      {
        "step": "Livrer",
        "body": "Construire la couche sémantique et reconstruire le reporting prioritaire dessus, en parallèle de l'existant afin de comparer les chiffres avant toute extinction."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre le processus de changement des définitions et le parcours de certification, pour que la mesure suivante ne relance pas une divergence."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Rendre explicables des chiffres réglementaires",
        "body": "Une institution financière canadienne produisant ses chiffres réglementaires dans les délais sans pouvoir démontrer comment un chiffre donné avait été dérivé. Chaque mesure publiée a été retracée jusqu'à la source, et la définition métier associée capturée avec un propriétaire nommé. Les règles de qualité ont été rattachées aux définitions elles-mêmes, si bien qu'une violation désigne une personne plutôt qu'une table. Lorsque deux domaines divergeaient, le désaccord a émergé pendant les travaux plutôt qu'en revue — le moins coûteux des deux moments."
      },
      {
        "proofType": "representative",
        "title": "Schéma représentatif : deux équipes, deux chiffres",
        "body": "Des tableaux de bord existent et n'inspirent pas confiance, parce que la finance et les opérations calculent différemment la même mesure et qu'aucune définition n'est écrite. Le travail fait émerger le désaccord plutôt que de le moyenner, puis fixe la définition une fois dans une couche sémantique.",
        "outcome": "Ce que la mission laisse derrière elle : des définitions convenues avec propriétaires, une couche sémantique qui les applique, et une liste de rationalisation argumentée."
      }
    ],
    "technologies": [
      {
        "group": "Couches sémantiques et de mesures",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Modèles Power BI"
        ]
      },
      {
        "group": "Décisionnel et visualisation",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Gouvernance et catalogue",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Plateforme",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse"
        ]
      }
    ],
    "practitionerNote": "Les travaux d'analytique sont dirigés par notre associé principal, dont le parcours est la gouvernance, la traçabilité et les données maîtres pour des institutions financières de premier plan. Cela compte ici, car la plupart des problèmes de confiance en analytique sont des problèmes de définition et d'entités qui ont fait surface dans un tableau de bord.",
    "relatedInsights": [
      {
        "kind": "Étude de cas",
        "label": "Rendre explicables des chiffres réglementaires",
        "href": "/fr/case-studies/governance-regulatory-reporting/"
      },
      {
        "kind": "Article",
        "label": "The Governance Crisis: The Call",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-call/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Gouvernance des données et MDM",
        "href": "/solutions/data-governance/",
        "why": "D'où viennent définitions, propriété et entités maîtres."
      },
      {
        "label": "Ingénierie des données",
        "href": "/solutions/pipeline-architecture/",
        "why": "La couche organisée sur laquelle la couche de mesures est bâtie."
      },
      {
        "label": "Préparation à l'IA",
        "href": "/solutions/ai-readiness/",
        "why": "Les mêmes définitions dont un système IA aura besoin pour répondre de façon cohérente."
      }
    ],
    "faqs": [
      {
        "q": "Devons-nous changer d'outil décisionnel ?",
        "a": "En général non. Deux outils qui divergent sont le symptôme de deux définitions, pas d'un mauvais outil. Une fois la définition logée à un seul endroit, la plupart des outils la consomment sans difficulté."
      },
      {
        "q": "Qui tranche la définition lorsque deux équipes divergent ?",
        "a": "Vous. Notre travail est de rendre cette décision possible, pas de la prendre à votre place. Parfois la réponse honnête est que les deux mesures sont légitimes et méritent des noms différents."
      },
      {
        "q": "Quelle dépendance à la gouvernance et au MDM ?",
        "a": "Forte. Une mesure bâtie sur des entités non résolues sera fausse d'une façon qu'aucun tableau de bord ne révèle : si un client apparaît trois fois, tout indicateur par client est faux et paraît correct."
      },
      {
        "q": "Allez-vous supprimer nos tableaux de bord ?",
        "a": "Nous produirons la liste et le raisonnement ; leur retrait vous appartient. La rationalisation est politiquement plus difficile que techniquement."
      },
      {
        "q": "Et le libre-service ? Nous ne voulons pas de goulot d'étranglement.",
        "a": "Nous non plus. L'objectif est que les analystes construisent librement sur des jeux certifiés, plus un parcours clair pour officialiser une nouvelle mesure. Le goulot redouté vient de l'absence d'un tel parcours, pas de la gouvernance."
      },
      {
        "q": "En combien de temps quelque chose change-t-il ?",
        "a": "Le Diagnostic Analytique se compte en semaines et reste délibérément étroit. Une couche sémantique complète est un travail plus long, qui doit être justifié par cette revue et non présupposé."
      },
      {
        "q": "Pouvez-vous travailler avec notre équipe décisionnelle ?",
        "a": "Oui, et c'est en général la bonne forme. Votre équipe connaît le paysage et les enjeux politiques ; nous apportons la discipline de définition et de gouvernance."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Diagnostic Analytique",
      "cta": "Réserver un diagnostic analytique",
      "body": "Une revue ciblée de la cohérence des mesures, de l'architecture sémantique, de la prolifération de rapports, de la traçabilité, de la qualité et de l'utilisabilité décisionnelle. Vous repartez avec les conflits nommés, les propriétaires identifiés et une séquence pour corriger ceux qui comptent.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en analítica e inteligencia de decisión",
    "seoDescription": "Métricas fiables, definiciones semánticas gobernadas y productos de decisión, para que la gente deje de reconciliar cifras y empiece a actuar. Linaje de la métrica al origen.",
    "eyebrow": "ANALÍTICA E INTELIGENCIA DE DECISIÓN",
    "h1": "Dale a cada decisión la misma versión fiable del negocio.",
    "subhead": "Conectamos datos gobernados, definiciones de métricas compartidas y analítica adecuada al propósito, para que los equipos puedan explicar una cifra, confiar en ella y actuar, sin rehacer la lógica en cada informe.",
    "transformation": "Informes → Decisiones fiables",
    "signals": [
      "Los directivos reciben respuestas distintas a la misma pregunta de negocio.",
      "Los analistas dedican más tiempo a reconciliar métricas que a interpretarlas.",
      "La lógica de los KPI críticos vive dentro de cuadros de mando u hojas de cálculo sueltas.",
      "El autoservicio ha producido más informes, pero no más consistencia.",
      "Nadie puede rastrear con facilidad una métrica hasta su origen y su definición.",
      "Los equipos de analítica e IA heredan la misma ambigüedad semántica."
    ],
    "consequenceFlow": [
      "La misma medida se define de forma distinta en cada herramienta",
      "Las reuniones empiezan reconciliando cuadros de mando en lugar de decidir",
      "Las decisiones se retrasan y baja la confianza en las cifras",
      "Los equipos duplican el esfuerzo analítico para producir una versión en la que confían",
      "La IA y la automatización de decisiones heredan la ambigüedad y la escalan"
    ],
    "consequenceNote": "El problema casi nunca es la herramienta de BI. Es que nunca se acordó una definición, así que cada herramienta codifica una ligeramente distinta y el desacuerdo aparece en la reunión en lugar de en el diseño.",
    "transformationRows": [
      {
        "before": "Lógica de KPI propia de cada cuadro de mando",
        "after": "Definiciones de métricas compartidas y gobernadas"
      },
      {
        "before": "Múltiples versiones de la verdad",
        "after": "Definiciones de negocio nombradas, con responsables nombrados"
      },
      {
        "before": "Reconciliación manual",
        "after": "Una capa semántica y de métricas consistente"
      },
      {
        "before": "Cálculos opacos",
        "after": "Linaje navegable de la métrica al origen"
      },
      {
        "before": "Proliferación de informes",
        "after": "Productos de decisión construidos con un propósito"
      },
      {
        "before": "Dependencia del analista",
        "after": "Autoservicio gobernado con límites claros"
      }
    ],
    "capabilities": [
      {
        "title": "Inventario y racionalización de métricas",
        "body": "Encontrar cada sitio donde se define una medida y cuántas de esas definiciones difieren de verdad. El solapamiento suele ser menor y más disputado de lo que nadie espera."
      },
      {
        "title": "Glosario de negocio y propiedad",
        "body": "Definiciones ligadas a la analítica, con un responsable por término y no un comité. La propiedad compartida de una definición es justo lo que produce dos cifras."
      },
      {
        "title": "Arquitectura de capa semántica",
        "body": "La definición acordada codificada una sola vez, de modo que cada herramienta la hereda en lugar de reimplementarla. Cuando cambia, cambia en un sitio."
      },
      {
        "title": "Diseño de productos de datos",
        "body": "Modelos curados construidos sobre fuentes gobernadas y datos maestros, para que una cifra por cliente no cuente en silencio tres veces al mismo cliente."
      },
      {
        "title": "Linaje del origen a la medida publicada",
        "body": "La ruta de derivación de una cifra pasa a ser navegable en lugar de reconstruida, que es lo que la hace explicable bajo cuestionamiento."
      },
      {
        "title": "Reglas de calidad en medidas críticas",
        "body": "Reglas ligadas a las medidas que importan, definidas en la práctica de Gobernanza y MDM y aplicadas donde se produce la métrica."
      },
      {
        "title": "Racionalización y autoservicio gobernado",
        "body": "Retirar lo que nadie usa, certificar aquello de lo que la gente depende y dar a los analistas una vía clara para construir sin que las definiciones vuelvan a divergir."
      },
      {
        "title": "Diseño del flujo de decisión",
        "body": "Qué acción debe habilitar una métrica, por parte de quién y cuándo. Un cuadro de mando sin decisión asociada es un pasivo de mantenimiento."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Las fuentes gobernadas y los datos maestros —cliente, producto y dominios de referencia de la práctica de Gobernanza y MDM— alimentan productos de datos curados. Encima se sitúa una capa semántica y de métricas que define cada medida exactamente una vez, y las herramientas de BI, la analítica embebida y las aplicaciones de datos consumen esa capa en lugar de reimplementar la lógica. Eso es lo que impide que dos herramientas discrepen. Esos productos se ligan a flujos de decisión concretos, así que un informe tiene dueño y cadencia. Definiciones, propiedad, calidad, linaje, acceso y observabilidad atraviesan todo el recorrido.",
      "layers": [
        {
          "name": "Fuentes gobernadas y datos maestros",
          "items": [
            "Datos de origen curados",
            "Entidades maestras",
            "Dominios de referencia"
          ]
        },
        {
          "name": "Productos de datos curados",
          "items": [
            "Conjuntos modelados",
            "Dimensiones conformadas",
            "Tablas certificadas"
          ]
        },
        {
          "name": "Capa semántica / de métricas",
          "items": [
            "Definiciones de métricas",
            "Lógica de negocio",
            "Medidas certificadas"
          ]
        },
        {
          "name": "BI, analítica embebida y data apps",
          "items": [
            "Cuadros de mando",
            "Informes",
            "Analítica embebida",
            "Data apps"
          ]
        },
        {
          "name": "Flujos de decisión",
          "items": [
            "Dueños y cadencia",
            "Revisiones operativas",
            "Alertas y umbrales"
          ]
        }
      ],
      "crossCutting": [
        "Gobernanza: definiciones y propiedad",
        "Calidad en medidas críticas",
        "Linaje de la métrica al origen",
        "Control de acceso",
        "Observabilidad y frescura"
      ]
    },
    "deliverables": [
      "Inventario de métricas y KPI, con los conflictos y las brechas de propiedad nombrados",
      "Definiciones canónicas y el modelo semántico que las codifica",
      "Arquitectura analítica objetivo",
      "Cuadros de mando y productos de datos prioritarios rediseñados en torno a las decisiones que sostienen",
      "Linaje y controles de calidad para las medidas críticas",
      "Backlog de racionalización: qué se retira, qué se mantiene y por qué",
      "Reglas de gobernanza del autoservicio y material de habilitación para tus analistas",
      "Una vía para que una métrica nueva se vuelva oficial en lugar de proliferar"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Encontrar dónde la misma medida está definida más de una vez y qué decisiones dependen realmente de ella."
      },
      {
        "step": "Diseñar",
        "body": "Facilitar el acuerdo sobre definiciones y propiedad. Donde dos áreas necesiten de verdad medidas distintas, las nombramos distinto en lugar de fingir que una está mal."
      },
      {
        "step": "Entregar",
        "body": "Construir la capa semántica y rehacer el reporte prioritario sobre ella, en paralelo con lo existente para poder comparar cifras antes de apagar nada."
      },
      {
        "step": "Habilitar",
        "body": "Entregar el proceso de cambio de definiciones y la vía de certificación, para que la siguiente métrica no inicie otra divergencia."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Hacer explicables las cifras regulatorias",
        "body": "Una institución financiera canadiense entregaba sus cifras regulatorias a tiempo pero no podía demostrar cómo se había derivado una cifra concreta. Cada medida reportada se rastreó hasta el origen y la definición de negocio propietaria se capturó con un responsable nombrado. Las reglas de calidad se ligaron a las propias definiciones, de modo que un incumplimiento nombra a una persona y no a una tabla. Donde dos áreas discrepaban, el desacuerdo salió durante el trabajo y no durante una revisión."
      },
      {
        "proofType": "representative",
        "title": "Patrón representativo: dos equipos, dos cifras",
        "body": "Existen cuadros de mando y no se confía en ellos, porque finanzas y operaciones calculan la misma medida de forma distinta y ninguna definición está escrita. El trabajo saca a la luz el desacuerdo en lugar de promediarlo, y luego fija la definición una vez en una capa semántica.",
        "outcome": "Lo que deja el proyecto: definiciones acordadas con responsables, una capa semántica que las aplica y una lista de racionalización razonada."
      }
    ],
    "technologies": [
      {
        "group": "Semantic and metrics layers",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Power BI models"
        ]
      },
      {
        "group": "BI and visualisation",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Governance and catalog",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Platform",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse"
        ]
      }
    ],
    "practitionerNote": "El trabajo de analítica lo dirige nuestro socio principal, cuya trayectoria es gobernanza, linaje y datos maestros para instituciones financieras de primer nivel. Importa aquí porque la mayoría de los problemas de confianza en analítica son problemas de definición y de entidades que han aflorado en un cuadro de mando.",
    "relatedInsights": [
      {
        "kind": "Caso de estudio",
        "label": "Hacer explicables las cifras regulatorias",
        "href": "/es/case-studies/governance-regulatory-reporting/"
      },
      {
        "kind": "Artículo",
        "label": "The Governance Crisis: The Call",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-call/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Gobernanza de datos y MDM",
        "href": "/solutions/data-governance/",
        "why": "De donde vienen definiciones, propiedad y entidades maestras."
      },
      {
        "label": "Ingeniería de datos",
        "href": "/solutions/pipeline-architecture/",
        "why": "La capa curada sobre la que se construye la capa de métricas."
      },
      {
        "label": "Preparación para IA",
        "href": "/solutions/ai-readiness/",
        "why": "Las mismas definiciones que un sistema de IA necesitará para responder de forma consistente."
      }
    ],
    "faqs": [
      {
        "q": "¿Hay que cambiar de herramienta de BI?",
        "a": "Normalmente no. Que dos herramientas discrepen es síntoma de dos definiciones, no de la herramienta equivocada. Una vez la definición vive en un sitio, la mayoría de herramientas la consumen sin problema."
      },
      {
        "q": "¿Quién decide la definición cuando dos equipos discrepan?",
        "a": "Vosotros, y nuestro trabajo es hacer posible esa decisión, no tomarla por vosotros. A veces la respuesta honesta es que ambas medidas son legítimas y necesitan nombres distintos."
      },
      {
        "q": "¿Cuánto depende esto de gobernanza y MDM?",
        "a": "Mucho. Una métrica construida sobre entidades sin resolver estará mal de una forma que ningún cuadro de mando revela: si un cliente aparece tres veces, toda cifra por cliente está mal y parece correcta."
      },
      {
        "q": "¿Vais a borrar nuestros cuadros de mando?",
        "a": "Produciremos la lista y el razonamiento; retirarlos es decisión vuestra. La racionalización es políticamente más difícil que técnicamente."
      },
      {
        "q": "¿Y el autoservicio? No queremos un cuello de botella.",
        "a": "Nosotros tampoco. El objetivo es que los analistas construyan con libertad sobre conjuntos certificados, más una ruta clara para oficializar una métrica nueva. El cuello de botella que se teme viene de no tener esa ruta, no de tener gobernanza."
      },
      {
        "q": "¿Cuánto tarda en cambiar algo?",
        "a": "El Analytics Health Check dura semanas y es deliberadamente estrecho. Una capa semántica completa es un trabajo más largo y debe justificarse con esa revisión, no darse por supuesta."
      },
      {
        "q": "¿Podéis trabajar junto a nuestro equipo de BI?",
        "a": "Sí, y suele ser la forma correcta. Vuestro equipo conoce el panorama y la política interna; nosotros aportamos la disciplina de definición y gobernanza."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Analytics Health Check",
      "cta": "Reservar un Analytics Health Check",
      "body": "Una revisión focalizada de consistencia de métricas, arquitectura semántica, proliferación de informes, linaje, calidad de datos y usabilidad para decidir. Terminas con los conflictos nombrados, los responsables identificados y una secuencia para arreglar los que importan.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em analytics e inteligência de decisão",
    "seoDescription": "Métricas confiáveis, definições semânticas governadas e produtos de decisão, para que as pessoas parem de reconciliar números e comecem a agir. Linhagem da métrica até a origem.",
    "eyebrow": "ANALYTICS E INTELIGÊNCIA DE DECISÃO",
    "h1": "Dê a cada decisão a mesma versão confiável do negócio.",
    "subhead": "Conectamos dados governados, definições de métricas compartilhadas e analytics adequado ao propósito, para que as equipes consigam explicar um número, confiar nele e agir, sem refazer a lógica em cada relatório.",
    "transformation": "Relatórios → Decisões confiáveis",
    "signals": [
      "Executivos recebem respostas diferentes para a mesma pergunta de negócio.",
      "Analistas passam mais tempo reconciliando métricas do que interpretando.",
      "A lógica dos KPIs críticos vive dentro de painéis ou planilhas isoladas.",
      "O autosserviço produziu mais relatórios, mas não mais consistência.",
      "Ninguém consegue rastrear com facilidade uma métrica até sua origem e definição.",
      "As equipes de analytics e IA herdam a mesma ambiguidade semântica."
    ],
    "consequenceFlow": [
      "A mesma medida é definida de formas diferentes em cada ferramenta",
      "As reuniões começam reconciliando painéis em vez de decidir",
      "As decisões atrasam e a confiança nos números cai",
      "As equipes duplicam o esforço de analytics para produzir uma versão em que confiam",
      "IA e automação de decisão herdam a ambiguidade e a escalam"
    ],
    "consequenceNote": "O problema quase nunca é a ferramenta de BI. É que uma definição nunca foi acordada, então cada ferramenta codifica uma ligeiramente diferente e a divergência aparece na reunião em vez de no desenho.",
    "transformationRows": [
      {
        "before": "Lógica de KPI própria de cada painel",
        "after": "Definições de métricas compartilhadas e governadas"
      },
      {
        "before": "Múltiplas versões da verdade",
        "after": "Definições de negócio nomeadas, com donos nomeados"
      },
      {
        "before": "Reconciliação manual",
        "after": "Uma camada semântica e de métricas consistente"
      },
      {
        "before": "Cálculos opacos",
        "after": "Linhagem navegável da métrica até a origem"
      },
      {
        "before": "Proliferação de relatórios",
        "after": "Produtos de decisão construídos com propósito"
      },
      {
        "before": "Dependência do analista",
        "after": "Autosserviço governado com limites claros"
      }
    ],
    "capabilities": [
      {
        "title": "Inventário e racionalização de métricas",
        "body": "Encontrar cada lugar onde uma medida é definida e quantas dessas definições de fato divergem. A sobreposição costuma ser menor e mais disputada do que se espera."
      },
      {
        "title": "Glossário de negócio e propriedade",
        "body": "Definições ligadas ao analytics, com um dono por termo e não um comitê. Propriedade compartilhada de uma definição é exatamente o que produz dois números."
      },
      {
        "title": "Arquitetura de camada semântica",
        "body": "A definição acordada codificada uma única vez, de modo que cada ferramenta a herda em vez de reimplementá-la. Quando muda, muda num lugar só."
      },
      {
        "title": "Desenho de produtos de dados",
        "body": "Modelos curados construídos sobre fontes governadas e dados mestres, para que um número por cliente não conte silenciosamente o mesmo cliente três vezes."
      },
      {
        "title": "Linhagem da origem até a medida publicada",
        "body": "O caminho de derivação de um número passa a ser navegável em vez de reconstruído, o que o torna explicável sob questionamento."
      },
      {
        "title": "Regras de qualidade em medidas críticas",
        "body": "Regras ligadas às medidas que importam, definidas na prática de Governança e MDM e aplicadas onde a métrica é produzida."
      },
      {
        "title": "Racionalização e autosserviço governado",
        "body": "Aposentar o que ninguém usa, certificar aquilo de que as pessoas dependem e dar aos analistas um caminho claro para construir sem que as definições voltem a divergir."
      },
      {
        "title": "Desenho do fluxo de decisão",
        "body": "Que ação uma métrica deve habilitar, por quem e quando. Um painel sem decisão associada é um passivo de manutenção."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "Fontes governadas e dados mestres — cliente, produto e domínios de referência da prática de Governança e MDM — alimentam produtos de dados curados. Acima deles fica uma camada semântica e de métricas que define cada medida exatamente uma vez, e ferramentas de BI, analytics embarcado e data apps consomem essa camada em vez de reimplementar a lógica. É isso que impede duas ferramentas de discordarem. Esses produtos se ligam a fluxos de decisão específicos, então um relatório tem dono e cadência. Definições, propriedade, qualidade, linhagem, acesso e observabilidade atravessam todo o caminho.",
      "layers": [
        {
          "name": "Fontes governadas e dados mestres",
          "items": [
            "Dados de origem curados",
            "Entidades mestras",
            "Domínios de referência"
          ]
        },
        {
          "name": "Produtos de dados curados",
          "items": [
            "Conjuntos modelados",
            "Dimensões conformadas",
            "Tabelas certificadas"
          ]
        },
        {
          "name": "Camada semântica / de métricas",
          "items": [
            "Definições de métricas",
            "Lógica de negócio",
            "Medidas certificadas"
          ]
        },
        {
          "name": "BI, analytics embarcado e data apps",
          "items": [
            "Painéis",
            "Relatórios",
            "Analytics embarcado",
            "Data apps"
          ]
        },
        {
          "name": "Fluxos de decisão",
          "items": [
            "Donos e cadência",
            "Revisões operacionais",
            "Alertas e limiares"
          ]
        }
      ],
      "crossCutting": [
        "Governança: definições e propriedade",
        "Qualidade em medidas críticas",
        "Linhagem da métrica até a origem",
        "Controle de acesso",
        "Observabilidade e frescor"
      ]
    },
    "deliverables": [
      "Inventário de métricas e KPIs, com as divergências e lacunas de propriedade nomeadas",
      "Definições canônicas e o modelo semântico que as codifica",
      "Arquitetura-alvo de analytics",
      "Painéis e produtos de dados prioritários redesenhados em torno das decisões que sustentam",
      "Linhagem e controles de qualidade para as medidas críticas",
      "Backlog de racionalização: o que é aposentado, o que é mantido e por quê",
      "Regras de governança do autosserviço e material de capacitação para seus analistas",
      "Um caminho para uma métrica nova se tornar oficial em vez de proliferar"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Encontrar onde a mesma medida é definida mais de uma vez e quais decisões realmente dependem dela."
      },
      {
        "step": "Projetar",
        "body": "Facilitar o acordo sobre definições e propriedade. Onde duas áreas precisam de fato de medidas diferentes, damos nomes diferentes em vez de fingir que uma está errada."
      },
      {
        "step": "Entregar",
        "body": "Construir a camada semântica e refazer os relatórios prioritários sobre ela, em paralelo com o que existe para comparar os números antes de desligar qualquer coisa."
      },
      {
        "step": "Habilitar",
        "body": "Entregar o processo de mudança de definições e o caminho de certificação, para que a próxima métrica não inicie outra divergência."
      }
    ],
    "proof": [
      {
        "proofType": "priorExperience",
        "title": "Tornar explicáveis os números regulatórios",
        "body": "Uma instituição financeira canadense entregava seus números regulatórios no prazo mas não conseguia demonstrar como um determinado número fora derivado. Cada medida reportada foi rastreada até a origem e a definição de negócio responsável capturada com um dono nomeado. As regras de qualidade foram ligadas às próprias definições, de modo que uma violação nomeia uma pessoa e não uma tabela. Onde duas áreas discordavam, a divergência apareceu durante o trabalho e não durante uma revisão."
      },
      {
        "proofType": "representative",
        "title": "Padrão representativo: duas equipes, dois números",
        "body": "Painéis existem e não são confiáveis, porque financeiro e operações calculam a mesma medida de formas diferentes e nenhuma definição está escrita. O trabalho traz a divergência à tona em vez de tirar a média, e então fixa a definição uma vez numa camada semântica.",
        "outcome": "O que o projeto deixa: definições acordadas com donos, uma camada semântica que as aplica e uma lista de racionalização fundamentada."
      }
    ],
    "technologies": [
      {
        "group": "Semantic and metrics layers",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Power BI models"
        ]
      },
      {
        "group": "BI and visualisation",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Governance and catalog",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Platform",
        "items": [
          "Snowflake",
          "Databricks",
          "BigQuery",
          "Azure Synapse"
        ]
      }
    ],
    "practitionerNote": "O trabalho de analytics é liderado pelo nosso sócio principal, cuja trajetória é governança, linhagem e dados mestres para instituições financeiras de primeira linha. Importa aqui porque a maioria dos problemas de confiança em analytics são problemas de definição e de entidades que afloraram num painel.",
    "relatedInsights": [
      {
        "kind": "Estudo de caso",
        "label": "Tornar explicáveis os números regulatórios",
        "href": "/pt/case-studies/governance-regulatory-reporting/"
      },
      {
        "kind": "Artigo",
        "label": "The Governance Crisis: The Call",
        "href": "https://papanguer.com/writing/the-governance-crisis-the-call/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Governança de dados e MDM",
        "href": "/solutions/data-governance/",
        "why": "De onde vêm definições, propriedade e entidades mestras."
      },
      {
        "label": "Engenharia de dados",
        "href": "/solutions/pipeline-architecture/",
        "why": "A camada curada sobre a qual a camada de métricas é construída."
      },
      {
        "label": "Prontidão para IA",
        "href": "/solutions/ai-readiness/",
        "why": "As mesmas definições que um sistema de IA vai precisar para responder de forma consistente."
      }
    ],
    "faqs": [
      {
        "q": "Precisamos trocar de ferramenta de BI?",
        "a": "Normalmente não. Duas ferramentas discordando é sintoma de duas definições, não da ferramenta errada. Uma vez que a definição vive num lugar só, a maioria das ferramentas a consome sem problema."
      },
      {
        "q": "Quem decide a definição quando duas equipes discordam?",
        "a": "Vocês, e o trabalho é tornar essa decisão possível, não tomá-la por vocês. Às vezes a resposta honesta é que ambas as medidas são legítimas e precisam de nomes diferentes."
      },
      {
        "q": "O quanto isso depende de governança e MDM?",
        "a": "Muito. Uma métrica construída sobre entidades não resolvidas estará errada de um jeito que nenhum painel revela: se um cliente aparece três vezes, todo número por cliente está errado e parece certo."
      },
      {
        "q": "Vocês vão apagar nossos painéis?",
        "a": "Produziremos a lista e o raciocínio; aposentá-los é decisão de vocês. Racionalização é politicamente mais difícil do que tecnicamente."
      },
      {
        "q": "E o autosserviço? Não queremos um gargalo.",
        "a": "Nem nós. O objetivo é analistas construindo livremente sobre conjuntos certificados, mais um caminho claro para oficializar uma métrica nova. O gargalo temido vem de não existir esse caminho, não de existir governança."
      },
      {
        "q": "Em quanto tempo algo muda?",
        "a": "O Analytics Health Check dura semanas e é deliberadamente estreito. Uma camada semântica completa é um trabalho mais longo e deve ser justificada por essa revisão, não presumida."
      },
      {
        "q": "Vocês conseguem trabalhar ao lado da nossa equipe de BI?",
        "a": "Sim, e normalmente é o formato certo. Sua equipe conhece o cenário e a política interna; nós trazemos a disciplina de definição e governança."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Analytics Health Check",
      "cta": "Agendar um Analytics Health Check",
      "body": "Uma revisão focada de consistência de métricas, arquitetura semântica, proliferação de relatórios, linhagem, qualidade de dados e usabilidade para decidir. Você termina com as divergências nomeadas, os donos identificados e uma sequência para corrigir as que importam.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
