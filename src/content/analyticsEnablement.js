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
    "seoTitle": "Analytics Enablement Consulting",
    "seoDescription": "Turn reporting into decisions. Agreed metric definitions in a semantic layer, built on governed master and reference data, so two teams stop bringing two numbers to the same meeting.",
    "eyebrow": "ANALYTICS ENABLEMENT",
    "h1": "You have reporting. You are still slow to decide.",
    "subhead": "Dashboards exist and nobody trusts them, because the same measure is calculated differently in two places and neither definition is written down. We fix the definition once, in a semantic layer built on governed data, and rebuild the reporting on top of it.",
    "transformation": "Reporting → Decisions",
    "signals": [
      "Finance and operations bring different numbers for the same measure to the same meeting.",
      "Meetings start by arguing about the data instead of deciding with it.",
      "Analysts spend most of their week rebuilding the same figures by hand.",
      "There are more dashboards than anyone uses, and no one will delete any.",
      "A metric definition exists in three tools and matches in none of them.",
      "Nobody can say who owns a number when it looks wrong."
    ],
    "consequenceFlow": [
      "The same measure is defined differently in different tools",
      "Every number arrives with a caveat about which version it is",
      "Meetings spend their first half reconciling rather than deciding",
      "People fall back on the report they personally trust",
      "Decisions get slower and less consistent, while reporting volume grows"
    ],
    "consequenceNote": "The problem is almost never the BI tool. It is that a definition was never agreed, so every tool encodes a slightly different one and the disagreement surfaces in the meeting rather than in the design.",
    "transformationRows": [
      {
        "before": "Metric logic copied into each dashboard",
        "after": "One definition in a semantic layer, reused everywhere"
      },
      {
        "before": "Definitions that differ by team",
        "after": "Agreed definitions with a named owner each"
      },
      {
        "before": "Manual rebuilds before every cycle",
        "after": "Governed pipelines feeding the metric layer"
      },
      {
        "before": "Dashboards nobody trusts or retires",
        "after": "A smaller set that is used, with the rest decommissioned"
      },
      {
        "before": "Numbers with no owner",
        "after": "Ownership visible where the number is consumed"
      },
      {
        "before": "Reporting as an output",
        "after": "Reporting attached to the decision it supports"
      }
    ],
    "capabilities": [
      {
        "title": "Metric definition and ownership",
        "body": "Getting finance, operations and the business to one written definition per measure, with an owner. This is a facilitation problem more than a technical one, and pretending otherwise is why semantic layers get built twice."
      },
      {
        "title": "Semantic and metric layer",
        "body": "The agreed definition encoded once, so every tool inherits it rather than reimplementing it. When the definition changes, it changes in one place and every consumer follows."
      },
      {
        "title": "Governed foundations",
        "body": "Metrics built on mastered entities and reference data from the Governance & MDM practice. A revenue figure that silently counts one customer three times is not a reporting bug; it is an entity resolution bug wearing a reporting costume."
      },
      {
        "title": "Data products for decisions",
        "body": "Reporting scoped to the decision it supports, with the owner and the cadence written down. A dashboard with no decision attached is a maintenance liability."
      },
      {
        "title": "Self-service that stays trustworthy",
        "body": "Enabling analysts to build without letting the definitions drift again: certified datasets, clear boundaries, and a path for a new metric to become official."
      },
      {
        "title": "Rationalisation",
        "body": "Retiring the dashboards nobody uses, which is genuinely difficult politically and is usually the fastest quality improvement available."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Governed sources — including mastered entities and reference data from the Governance & MDM practice — feed a semantic and metric layer where each measure is defined exactly once. BI tools and data products consume the metric layer rather than reimplementing the logic, which is what stops two tools from disagreeing. Those products are attached to specific decision workflows, so a report has a named owner and a cadence. Definitions, ownership and lineage span the whole path, so anyone looking at a number can find out what it means and who is accountable for it.",
      "layers": [
        {
          "name": "Governed sources",
          "items": [
            "Curated datasets",
            "Mastered entities",
            "Reference data"
          ]
        },
        {
          "name": "Semantic & metric layer",
          "items": [
            "Metric definitions",
            "Business logic",
            "Certified datasets"
          ]
        },
        {
          "name": "BI & data products",
          "items": [
            "Dashboards",
            "Reports",
            "Embedded analytics",
            "Extracts"
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
        "Lineage from metric to source",
        "Data quality monitoring",
        "Access control",
        "Change management for definitions"
      ]
    },
    "deliverables": [
      "Agreed metric definitions, written down, with a named owner each",
      "A semantic or metric layer encoding those definitions once",
      "Certified datasets analysts can build on without re-deriving logic",
      "Rebuilt reporting for the priority decisions, attached to owners and cadence",
      "Lineage from each published metric back to source",
      "A rationalisation list: what is retired, what is kept, and why",
      "A route for a new metric to become official rather than proliferate",
      "Enablement for your analysts, so definitions do not drift again"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Find where the same measure is defined more than once, and which decisions actually depend on it. The overlap is usually smaller and more contested than expected."
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
        "proofType": "representative",
        "title": "Representative pattern: two teams, two numbers",
        "body": "Dashboards exist and are not trusted, because finance and operations calculate the same measure differently and neither definition is written down. The work surfaces the disagreement rather than averaging it, then fixes the definition once in a semantic layer.",
        "outcome": "What the engagement leaves behind: agreed metric definitions, a semantic layer that enforces them, and the reporting rebuilt on top."
      },
      {
        "proofType": "priorExperience",
        "title": "Definitional disagreement surfaced during the work",
        "body": "A Canadian financial institution where each reported measure was traced through its transformations back to source and the owning business definition captured with a named owner. Where two business areas disagreed on a definition, the disagreement surfaced during the engagement rather than during a review — which is the cheaper of the two moments to find it."
      }
    ],
    "technologies": [
      {
        "group": "Semantic & metric layers",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Power BI models"
        ]
      },
      {
        "group": "BI & visualisation",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Governance & catalog",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Platforms",
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
        "a": "Usually not. Two tools disagreeing is a symptom of two definitions, not of the wrong tool. Once the definition lives in one place, most tools consume it happily, and a tool migration undertaken to fix trust generally reproduces the problem in a new interface."
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
        "a": "The Analytics Health Check runs in weeks and is deliberately narrow: where definitions diverge, which decisions depend on them, and what it would take to fix the top few. A full semantic layer is a longer piece of work and should be justified by that review, not assumed."
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
      "body": "A focused review for teams whose reporting exists but is not trusted. Where the same measure is defined more than once, which decisions depend on it, what the disagreements actually are, and a sequence for fixing the ones that matter.",
      "note": "Scope and commercial terms are agreed in writing before the review starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en activation de l'analytique",
    "seoDescription": "Transformer le reporting en décisions. Des définitions de mesures convenues dans une couche sémantique, bâties sur des données de référence gouvernées, pour que deux équipes cessent d'apporter deux chiffres à la même réunion.",
    "eyebrow": "ACTIVATION DE L'ANALYTIQUE",
    "h1": "Vous avez du reporting. Vous décidez toujours lentement.",
    "subhead": "Les tableaux de bord existent et personne ne s'y fie, parce que la même mesure est calculée différemment à deux endroits et qu'aucune définition n'est écrite. Nous fixons la définition une fois, dans une couche sémantique bâtie sur des données gouvernées, et nous reconstruisons le reporting dessus.",
    "transformation": "Reporting → Décisions",
    "signals": [
      "La finance et les opérations apportent des chiffres différents pour la même mesure à la même réunion.",
      "Les réunions commencent par débattre des données au lieu de décider avec elles.",
      "Les analystes passent l'essentiel de leur semaine à reconstruire les mêmes chiffres à la main.",
      "Il y a plus de tableaux de bord que personne n'en utilise, et personne n'accepte d'en supprimer.",
      "Une définition de mesure existe dans trois outils et ne correspond dans aucun.",
      "Personne ne peut dire qui possède un chiffre lorsqu'il paraît faux."
    ],
    "consequenceFlow": [
      "La même mesure est définie différemment selon les outils",
      "Chaque chiffre arrive avec une réserve sur la version dont il s'agit",
      "Les réunions passent leur première moitié à réconcilier plutôt qu'à décider",
      "Chacun se rabat sur le rapport auquel il fait personnellement confiance",
      "Les décisions ralentissent et se dispersent, pendant que le volume de reporting augmente"
    ],
    "consequenceNote": "Le problème n'est presque jamais l'outil décisionnel. C'est qu'une définition n'a jamais été convenue : chaque outil en encode donc une légèrement différente, et le désaccord surgit en réunion plutôt qu'à la conception.",
    "transformationRows": [
      {
        "before": "Logique de mesure copiée dans chaque tableau de bord",
        "after": "Une définition dans une couche sémantique, réutilisée partout"
      },
      {
        "before": "Des définitions qui diffèrent selon l'équipe",
        "after": "Des définitions convenues, chacune avec un propriétaire nommé"
      },
      {
        "before": "Reconstructions manuelles avant chaque cycle",
        "after": "Des pipelines gouvernés alimentant la couche de mesures"
      },
      {
        "before": "Des tableaux de bord ni fiables ni retirés",
        "after": "Un ensemble réduit et réellement utilisé, le reste décommissionné"
      },
      {
        "before": "Des chiffres sans propriétaire",
        "after": "Une propriété visible là où le chiffre est consommé"
      },
      {
        "before": "Le reporting comme une sortie",
        "after": "Le reporting rattaché à la décision qu'il soutient"
      }
    ],
    "capabilities": [
      {
        "title": "Définition et propriété des mesures",
        "body": "Amener la finance, les opérations et le métier à une définition écrite unique par mesure, avec un propriétaire. C'est davantage un problème d'animation que de technique, et prétendre le contraire est la raison pour laquelle les couches sémantiques se construisent deux fois."
      },
      {
        "title": "Couche sémantique et de mesures",
        "body": "La définition convenue encodée une seule fois : chaque outil en hérite au lieu de la réimplémenter. Quand la définition change, elle change à un seul endroit et tous les consommateurs suivent."
      },
      {
        "title": "Fondations gouvernées",
        "body": "Des mesures bâties sur les entités maîtres et les données de référence issues de la pratique Gouvernance et MDM. Un chiffre de revenu qui compte silencieusement trois fois le même client n'est pas un bug de reporting : c'est un bug de résolution d'entités déguisé en reporting."
      },
      {
        "title": "Produits de données pour la décision",
        "body": "Un reporting cadré sur la décision qu'il soutient, avec propriétaire et cadence écrits. Un tableau de bord sans décision rattachée est une dette de maintenance."
      },
      {
        "title": "Un libre-service qui reste fiable",
        "body": "Permettre aux analystes de construire sans laisser les définitions dériver à nouveau : jeux de données certifiés, frontières claires, et un chemin pour qu'une nouvelle mesure devienne officielle."
      },
      {
        "title": "Rationalisation",
        "body": "Retirer les tableaux de bord que personne n'utilise, ce qui est réellement difficile politiquement et constitue en général l'amélioration de qualité la plus rapide disponible."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Des sources gouvernées — y compris les entités maîtres et les données de référence issues de la pratique Gouvernance et MDM — alimentent une couche sémantique et de mesures où chaque indicateur est défini exactement une fois. Les outils décisionnels et les produits de données consomment cette couche au lieu de réimplémenter la logique, ce qui empêche deux outils de diverger. Ces produits sont rattachés à des processus de décision précis : un rapport a donc un propriétaire nommé et une cadence. Définitions, propriété et traçabilité traversent tout le parcours, de sorte que quiconque regarde un chiffre peut savoir ce qu'il signifie et qui en répond.",
      "layers": [
        {
          "name": "Sources gouvernées",
          "items": [
            "Jeux de données organisés",
            "Entités maîtres",
            "Données de référence"
          ]
        },
        {
          "name": "Couche sémantique et de mesures",
          "items": [
            "Définitions de mesures",
            "Logique métier",
            "Jeux certifiés"
          ]
        },
        {
          "name": "Décisionnel et produits de données",
          "items": [
            "Tableaux de bord",
            "Rapports",
            "Analytique embarquée",
            "Extractions"
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
        "Traçabilité de la mesure jusqu'à la source",
        "Supervision de la qualité",
        "Contrôle d'accès",
        "Gestion du changement des définitions"
      ]
    },
    "deliverables": [
      "Des définitions de mesures convenues, écrites, chacune avec un propriétaire nommé",
      "Une couche sémantique ou de mesures encodant ces définitions une seule fois",
      "Des jeux de données certifiés sur lesquels les analystes peuvent bâtir sans redériver la logique",
      "Le reporting reconstruit pour les décisions prioritaires, rattaché à des propriétaires et une cadence",
      "La traçabilité de chaque mesure publiée jusqu'à la source",
      "Une liste de rationalisation : ce qui est retiré, ce qui est conservé, et pourquoi",
      "Un parcours pour qu'une nouvelle mesure devienne officielle plutôt que de proliférer",
      "L'accompagnement de vos analystes, pour que les définitions ne dérivent pas à nouveau"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Trouver où la même mesure est définie plus d'une fois, et quelles décisions en dépendent réellement. Le recoupement est en général plus étroit et plus disputé qu'on ne l'imagine."
      },
      {
        "step": "Concevoir",
        "body": "Animer l'accord sur les définitions et la propriété. Lorsque deux domaines ont réellement besoin de mesures différentes, nous les nommons différemment plutôt que de prétendre que l'une est fausse."
      },
      {
        "step": "Livrer",
        "body": "Construire la couche sémantique et reconstruire le reporting prioritaire dessus, en parallèle de l'existant afin que les chiffres puissent être comparés avant toute extinction."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre le processus de changement des définitions et le parcours de certification, pour que la mesure suivante ne relance pas une divergence."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Schéma représentatif : deux équipes, deux chiffres",
        "body": "Des tableaux de bord existent et n'inspirent pas confiance, parce que la finance et les opérations calculent différemment la même mesure et qu'aucune des deux définitions n'est écrite. Le travail fait émerger le désaccord plutôt que de le moyenner, puis fixe la définition une fois dans une couche sémantique.",
        "outcome": "Ce que la mission laisse derrière elle : des définitions convenues, une couche sémantique qui les applique, et le reporting reconstruit dessus."
      },
      {
        "proofType": "priorExperience",
        "title": "Un désaccord de définition mis au jour pendant la mission",
        "body": "Une institution financière canadienne où chaque mesure publiée a été retracée à travers ses transformations jusqu'à la source, la définition métier associée étant capturée avec un propriétaire nommé. Lorsque deux domaines divergeaient sur une définition, le désaccord a émergé pendant la mission plutôt que lors d'une revue — le moins coûteux des deux moments."
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
        "group": "Plateformes",
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
        "a": "En général non. Deux outils qui divergent sont le symptôme de deux définitions, pas d'un mauvais outil. Une fois la définition logée à un seul endroit, la plupart des outils la consomment sans difficulté, et une migration entreprise pour rétablir la confiance reproduit généralement le problème dans une nouvelle interface."
      },
      {
        "q": "Qui tranche la définition lorsque deux équipes divergent ?",
        "a": "Vous. Notre travail est de rendre cette décision possible, pas de la prendre à votre place. Parfois la réponse honnête est que les deux mesures sont légitimes et méritent des noms différents — les fondre en une seule est le mode d'échec que nous voulons le plus éviter."
      },
      {
        "q": "Quelle dépendance à la gouvernance et au MDM ?",
        "a": "Forte. Une mesure bâtie sur des entités non résolues sera fausse d'une façon qu'aucun tableau de bord ne peut révéler : si un client apparaît trois fois, tout indicateur par client est faux et paraît correct. Nous dirons clairement quand le problème analytique est en réalité un problème d'entités."
      },
      {
        "q": "Allez-vous supprimer nos tableaux de bord ?",
        "a": "Nous produirons la liste et le raisonnement ; leur retrait vous appartient. La rationalisation est politiquement plus difficile que techniquement, et nous préférons vous remettre un dossier défendable qu'un fait accompli."
      },
      {
        "q": "Et le libre-service ? Nous ne voulons pas de goulot d'étranglement.",
        "a": "Nous non plus. L'objectif est que les analystes construisent librement sur des jeux certifiés avec des définitions convenues, plus un parcours clair pour qu'une nouvelle mesure devienne officielle. Le goulot que l'on redoute vient généralement de l'absence d'un tel parcours, pas de la gouvernance."
      },
      {
        "q": "En combien de temps quelque chose change-t-il ?",
        "a": "Le Diagnostic Analytique se compte en semaines et reste délibérément étroit : où les définitions divergent, quelles décisions en dépendent, et ce qu'il faudrait pour corriger les principales. Une couche sémantique complète est un travail plus long, qui doit être justifié par cette revue et non présupposé."
      },
      {
        "q": "Pouvez-vous travailler avec notre équipe décisionnelle ?",
        "a": "Oui, et c'est en général la bonne forme. Votre équipe connaît le paysage du reporting et les enjeux politiques ; nous apportons la discipline de définition et de gouvernance. Les deux sont nécessaires, aucune ne suffit."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Diagnostic Analytique",
      "cta": "Réserver un diagnostic analytique",
      "body": "Une revue ciblée pour les équipes dont le reporting existe mais n'inspire pas confiance. Où la même mesure est définie plusieurs fois, quelles décisions en dépendent, quels sont réellement les désaccords, et une séquence pour corriger ceux qui comptent.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en habilitación de análisis",
    "seoDescription": "Convertir el reporte en decisiones. Definiciones de métricas acordadas en una capa semántica, construidas sobre datos maestros y de referencia gobernados, para que dos equipos dejen de traer dos cifras a la misma reunión.",
    "eyebrow": "HABILITACIÓN DE ANÁLISIS",
    "h1": "Tienes informes. Sigues decidiendo despacio.",
    "subhead": "Los cuadros de mando existen y nadie confía en ellos, porque la misma medida se calcula distinto en dos sitios y ninguna definición está escrita. Fijamos la definición una vez, en una capa semántica construida sobre datos gobernados, y reconstruimos el reporte encima.",
    "transformation": "Informes → Decisiones",
    "signals": [
      "Finanzas y operaciones traen cifras distintas de la misma medida a la misma reunión.",
      "Las reuniones empiezan discutiendo los datos en lugar de decidir con ellos.",
      "Los analistas pasan casi toda la semana rehaciendo las mismas cifras a mano.",
      "Hay más cuadros de mando de los que nadie usa, y nadie quiere borrar ninguno.",
      "Una definición de métrica existe en tres herramientas y no coincide en ninguna.",
      "Nadie sabe decir quién es dueño de un número cuando parece equivocado."
    ],
    "consequenceFlow": [
      "La misma medida se define de forma distinta en cada herramienta",
      "Cada cifra llega con una advertencia sobre qué versión es",
      "Las reuniones gastan su primera mitad reconciliando en vez de decidir",
      "La gente recurre al informe en el que confía personalmente",
      "Las decisiones se vuelven más lentas e inconsistentes mientras crece el volumen de informes"
    ],
    "consequenceNote": "El problema casi nunca es la herramienta de BI. Es que nunca se acordó una definición, así que cada herramienta codifica una ligeramente distinta y el desacuerdo aparece en la reunión en lugar de en el diseño.",
    "transformationRows": [
      {
        "before": "Lógica de métrica copiada en cada cuadro de mando",
        "after": "Una definición en una capa semántica, reutilizada en todas partes"
      },
      {
        "before": "Definiciones que difieren según el equipo",
        "after": "Definiciones acordadas, cada una con un responsable nombrado"
      },
      {
        "before": "Reconstrucciones manuales antes de cada ciclo",
        "after": "Pipelines gobernados alimentando la capa de métricas"
      },
      {
        "before": "Cuadros de mando sin confianza ni retirada",
        "after": "Un conjunto menor que sí se usa, con el resto dado de baja"
      },
      {
        "before": "Cifras sin dueño",
        "after": "Propiedad visible allí donde se consume la cifra"
      },
      {
        "before": "El informe como salida",
        "after": "El informe ligado a la decisión que sostiene"
      }
    ],
    "capabilities": [
      {
        "title": "Definición y propiedad de métricas",
        "body": "Llevar a finanzas, operaciones y negocio a una definición escrita por medida, con un responsable. Es más un problema de facilitación que técnico, y fingir lo contrario es por lo que las capas semánticas se construyen dos veces."
      },
      {
        "title": "Capa semántica y de métricas",
        "body": "La definición acordada codificada una sola vez, de modo que cada herramienta la hereda en lugar de reimplementarla. Cuando la definición cambia, cambia en un sitio y todos los consumidores siguen."
      },
      {
        "title": "Fundamentos gobernados",
        "body": "Métricas construidas sobre entidades maestras y datos de referencia de la práctica de Gobernanza y MDM. Una cifra de ingresos que cuenta en silencio tres veces al mismo cliente no es un fallo de reporte: es un fallo de resolución de entidades disfrazado de reporte."
      },
      {
        "title": "Productos de datos para decidir",
        "body": "Reporte acotado a la decisión que sostiene, con dueño y cadencia por escrito. Un cuadro de mando sin decisión asociada es un pasivo de mantenimiento."
      },
      {
        "title": "Autoservicio que sigue siendo fiable",
        "body": "Permitir a los analistas construir sin que las definiciones vuelvan a divergir: conjuntos certificados, límites claros y una ruta para que una métrica nueva se vuelva oficial."
      },
      {
        "title": "Racionalización",
        "body": "Retirar los cuadros de mando que nadie usa, políticamente difícil de verdad y normalmente la mejora de calidad más rápida disponible."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Fuentes gobernadas —incluidas entidades maestras y datos de referencia de la práctica de Gobernanza y MDM— alimentan una capa semántica y de métricas donde cada medida se define exactamente una vez. Las herramientas de BI y los productos de datos consumen la capa de métricas en lugar de reimplementar la lógica, que es lo que impide que dos herramientas discrepen. Esos productos se ligan a flujos de decisión concretos, de modo que un informe tiene dueño y cadencia. Definiciones, propiedad y linaje atraviesan todo el recorrido, así que quien mire una cifra puede averiguar qué significa y quién responde por ella.",
      "layers": [
        {
          "name": "Fuentes gobernadas",
          "items": [
            "Conjuntos curados",
            "Entidades maestras",
            "Datos de referencia"
          ]
        },
        {
          "name": "Capa semántica y de métricas",
          "items": [
            "Definiciones de métricas",
            "Lógica de negocio",
            "Conjuntos certificados"
          ]
        },
        {
          "name": "BI y productos de datos",
          "items": [
            "Cuadros de mando",
            "Informes",
            "Analítica embebida",
            "Extracciones"
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
        "Linaje de la métrica al origen",
        "Monitorización de calidad",
        "Control de acceso",
        "Gestión del cambio de definiciones"
      ]
    },
    "deliverables": [
      "Definiciones de métricas acordadas, escritas, cada una con un responsable nombrado",
      "Una capa semántica o de métricas que codifica esas definiciones una sola vez",
      "Conjuntos certificados sobre los que los analistas pueden construir sin rederivar lógica",
      "Reporte reconstruido para las decisiones prioritarias, ligado a dueños y cadencia",
      "Linaje de cada métrica publicada hasta el origen",
      "Una lista de racionalización: qué se retira, qué se mantiene y por qué",
      "Una ruta para que una métrica nueva se vuelva oficial en lugar de proliferar",
      "Habilitación de tus analistas, para que las definiciones no vuelvan a divergir"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Encontrar dónde la misma medida está definida más de una vez y qué decisiones dependen realmente de ella. El solapamiento suele ser menor y más disputado de lo esperado."
      },
      {
        "step": "Diseñar",
        "body": "Facilitar el acuerdo sobre definiciones y propiedad. Donde dos áreas necesiten de verdad medidas distintas, las nombramos distinto en lugar de fingir que una está mal."
      },
      {
        "step": "Entregar",
        "body": "Construir la capa semántica y reconstruir el reporte prioritario sobre ella, en paralelo con lo existente para poder comparar cifras antes de apagar nada."
      },
      {
        "step": "Habilitar",
        "body": "Entregar el proceso de cambio de definiciones y la vía de certificación, para que la siguiente métrica no inicie otra divergencia."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Patrón representativo: dos equipos, dos cifras",
        "body": "Existen cuadros de mando y no se confía en ellos, porque finanzas y operaciones calculan la misma medida de forma distinta y ninguna definición está escrita. El trabajo saca a la luz el desacuerdo en lugar de promediarlo, y luego fija la definición una vez en una capa semántica.",
        "outcome": "Lo que deja el proyecto: definiciones de métricas acordadas, una capa semántica que las aplica y el reporte reconstruido encima."
      },
      {
        "proofType": "priorExperience",
        "title": "Un desacuerdo de definición sacado a la luz durante el trabajo",
        "body": "Una institución financiera canadiense donde cada medida reportada se rastreó a través de sus transformaciones hasta el origen y la definición de negocio propietaria se capturó con un responsable nombrado. Donde dos áreas discrepaban sobre una definición, el desacuerdo salió durante el proyecto y no durante una revisión, que es el más barato de los dos momentos."
      }
    ],
    "technologies": [
      {
        "group": "Capas semánticas y de métricas",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Modelos de Power BI"
        ]
      },
      {
        "group": "BI y visualización",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Gobernanza y catálogo",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Plataformas",
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
        "a": "Normalmente no. Que dos herramientas discrepen es síntoma de dos definiciones, no de la herramienta equivocada. Una vez la definición vive en un sitio, la mayoría de herramientas la consumen sin problema, y una migración emprendida para recuperar confianza suele reproducir el problema en una interfaz nueva."
      },
      {
        "q": "¿Quién decide la definición cuando dos equipos discrepan?",
        "a": "Vosotros, y nuestro trabajo es hacer posible esa decisión, no tomarla por vosotros. A veces la respuesta honesta es que ambas medidas son legítimas y necesitan nombres distintos; fundirlas en una es el modo de fallo que más queremos evitar."
      },
      {
        "q": "¿Cuánto depende esto de gobernanza y MDM?",
        "a": "Mucho. Una métrica construida sobre entidades sin resolver estará mal de una forma que ningún cuadro de mando revela: si un cliente aparece tres veces, toda cifra por cliente está mal y parece correcta. Diremos con claridad cuando el problema analítico sea en realidad un problema de entidades."
      },
      {
        "q": "¿Vais a borrar nuestros cuadros de mando?",
        "a": "Produciremos la lista y el razonamiento; retirarlos es decisión vuestra. La racionalización es políticamente más difícil que técnicamente, así que preferimos entregaros un caso defendible antes que un hecho consumado."
      },
      {
        "q": "¿Y el autoservicio? No queremos un cuello de botella.",
        "a": "Nosotros tampoco. El objetivo es que los analistas construyan con libertad sobre conjuntos certificados con definiciones acordadas, más una ruta clara para que una métrica nueva se vuelva oficial. El cuello de botella que se teme suele venir de no tener esa ruta, no de tener gobernanza."
      },
      {
        "q": "¿Cuánto tarda en cambiar algo?",
        "a": "El Analytics Health Check dura semanas y es deliberadamente estrecho: dónde divergen las definiciones, qué decisiones dependen de ellas y qué haría falta para arreglar las principales. Una capa semántica completa es un trabajo más largo y debe justificarse con esa revisión, no darse por supuesta."
      },
      {
        "q": "¿Podéis trabajar junto a nuestro equipo de BI?",
        "a": "Sí, y suele ser la forma correcta. Vuestro equipo conoce el panorama de reporte y la política interna; nosotros aportamos la disciplina de definición y gobernanza. Ambas son necesarias y ninguna basta."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Analytics Health Check",
      "cta": "Reservar un Analytics Health Check",
      "body": "Una revisión focalizada para equipos cuyo reporte existe pero no se cree. Dónde la misma medida se define más de una vez, qué decisiones dependen de ella, cuáles son realmente los desacuerdos y una secuencia para arreglar los que importan.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em capacitação em analytics",
    "seoDescription": "Transformar relatórios em decisões. Definições de métricas acordadas numa camada semântica, construídas sobre dados mestres e de referência governados, para que duas equipes parem de levar dois números à mesma reunião.",
    "eyebrow": "CAPACITAÇÃO EM ANALYTICS",
    "h1": "Você tem relatórios. E continua decidindo devagar.",
    "subhead": "Os painéis existem e ninguém confia neles, porque a mesma medida é calculada de formas diferentes em dois lugares e nenhuma definição está escrita. Fixamos a definição uma vez, numa camada semântica construída sobre dados governados, e reconstruímos os relatórios em cima.",
    "transformation": "Relatórios → Decisões",
    "signals": [
      "Financeiro e operações levam números diferentes da mesma medida à mesma reunião.",
      "As reuniões começam discutindo os dados em vez de decidir com eles.",
      "Analistas passam quase a semana refazendo os mesmos números à mão.",
      "Há mais painéis do que alguém usa, e ninguém quer apagar nenhum.",
      "Uma definição de métrica existe em três ferramentas e não bate em nenhuma.",
      "Ninguém sabe dizer quem é dono de um número quando ele parece errado."
    ],
    "consequenceFlow": [
      "A mesma medida é definida de formas diferentes em cada ferramenta",
      "Cada número chega com uma ressalva sobre qual versão é",
      "As reuniões gastam a primeira metade reconciliando em vez de decidir",
      "As pessoas recorrem ao relatório em que confiam pessoalmente",
      "As decisões ficam mais lentas e inconsistentes enquanto o volume de relatórios cresce"
    ],
    "consequenceNote": "O problema quase nunca é a ferramenta de BI. É que uma definição nunca foi acordada, então cada ferramenta codifica uma ligeiramente diferente e a divergência aparece na reunião em vez de no desenho.",
    "transformationRows": [
      {
        "before": "Lógica de métrica copiada em cada painel",
        "after": "Uma definição numa camada semântica, reutilizada em todo lugar"
      },
      {
        "before": "Definições que variam por equipe",
        "after": "Definições acordadas, cada uma com um dono nomeado"
      },
      {
        "before": "Refazer tudo à mão antes de cada ciclo",
        "after": "Pipelines governados alimentando a camada de métricas"
      },
      {
        "before": "Painéis sem confiança e sem aposentadoria",
        "after": "Um conjunto menor que é usado, com o resto descomissionado"
      },
      {
        "before": "Números sem dono",
        "after": "Propriedade visível onde o número é consumido"
      },
      {
        "before": "Relatório como saída",
        "after": "Relatório ligado à decisão que sustenta"
      }
    ],
    "capabilities": [
      {
        "title": "Definição e propriedade de métricas",
        "body": "Levar financeiro, operações e negócio a uma definição escrita por medida, com um dono. É mais um problema de facilitação do que técnico, e fingir o contrário é o motivo pelo qual camadas semânticas são construídas duas vezes."
      },
      {
        "title": "Camada semântica e de métricas",
        "body": "A definição acordada codificada uma única vez, de modo que cada ferramenta a herda em vez de reimplementá-la. Quando a definição muda, muda num lugar só e todos os consumidores acompanham."
      },
      {
        "title": "Fundações governadas",
        "body": "Métricas construídas sobre entidades mestras e dados de referência da prática de Governança e MDM. Um número de receita que conta silenciosamente o mesmo cliente três vezes não é um bug de relatório: é um bug de resolução de entidades fantasiado de relatório."
      },
      {
        "title": "Produtos de dados para decisão",
        "body": "Relatório delimitado pela decisão que sustenta, com dono e cadência por escrito. Um painel sem decisão associada é um passivo de manutenção."
      },
      {
        "title": "Autosserviço que continua confiável",
        "body": "Permitir que analistas construam sem que as definições voltem a divergir: conjuntos certificados, fronteiras claras e um caminho para uma métrica nova se tornar oficial."
      },
      {
        "title": "Racionalização",
        "body": "Aposentar os painéis que ninguém usa, politicamente difícil de verdade e normalmente a melhoria de qualidade mais rápida disponível."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "Fontes governadas — incluindo entidades mestras e dados de referência da prática de Governança e MDM — alimentam uma camada semântica e de métricas onde cada medida é definida exatamente uma vez. Ferramentas de BI e produtos de dados consomem a camada de métricas em vez de reimplementar a lógica, que é o que impede duas ferramentas de discordarem. Esses produtos são ligados a fluxos de decisão específicos, então um relatório tem dono e cadência. Definições, propriedade e linhagem atravessam todo o caminho, para que quem olha um número consiga descobrir o que ele significa e quem responde por ele.",
      "layers": [
        {
          "name": "Fontes governadas",
          "items": [
            "Conjuntos curados",
            "Entidades mestras",
            "Dados de referência"
          ]
        },
        {
          "name": "Camada semântica e de métricas",
          "items": [
            "Definições de métricas",
            "Lógica de negócio",
            "Conjuntos certificados"
          ]
        },
        {
          "name": "BI e produtos de dados",
          "items": [
            "Painéis",
            "Relatórios",
            "Analytics embarcado",
            "Extrações"
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
        "Linhagem da métrica até a origem",
        "Monitoramento de qualidade",
        "Controle de acesso",
        "Gestão de mudança de definições"
      ]
    },
    "deliverables": [
      "Definições de métricas acordadas, escritas, cada uma com um dono nomeado",
      "Uma camada semântica ou de métricas que codifica essas definições uma única vez",
      "Conjuntos certificados sobre os quais analistas podem construir sem rederivar lógica",
      "Relatórios reconstruídos para as decisões prioritárias, ligados a donos e cadência",
      "Linhagem de cada métrica publicada até a origem",
      "Uma lista de racionalização: o que é aposentado, o que é mantido e por quê",
      "Um caminho para uma métrica nova se tornar oficial em vez de proliferar",
      "Capacitação dos seus analistas, para que as definições não voltem a divergir"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Encontrar onde a mesma medida está definida mais de uma vez e quais decisões realmente dependem dela. A sobreposição costuma ser menor e mais disputada do que se espera."
      },
      {
        "step": "Projetar",
        "body": "Facilitar o acordo sobre definições e propriedade. Onde duas áreas realmente precisam de medidas diferentes, damos nomes diferentes em vez de fingir que uma está errada."
      },
      {
        "step": "Entregar",
        "body": "Construir a camada semântica e reconstruir os relatórios prioritários sobre ela, em paralelo com o que existe para que os números possam ser comparados antes de desligar qualquer coisa."
      },
      {
        "step": "Habilitar",
        "body": "Entregar o processo de mudança de definições e o caminho de certificação, para que a próxima métrica não inicie outra divergência."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Padrão representativo: duas equipes, dois números",
        "body": "Painéis existem e não são confiáveis, porque financeiro e operações calculam a mesma medida de formas diferentes e nenhuma definição está escrita. O trabalho traz a divergência à tona em vez de tirar a média, e então fixa a definição uma vez numa camada semântica.",
        "outcome": "O que o projeto deixa: definições de métricas acordadas, uma camada semântica que as aplica e os relatórios reconstruídos em cima."
      },
      {
        "proofType": "priorExperience",
        "title": "Uma divergência de definição trazida à tona durante o trabalho",
        "body": "Uma instituição financeira canadense onde cada medida reportada foi rastreada por suas transformações até a origem e a definição de negócio responsável capturada com um dono nomeado. Onde duas áreas discordavam de uma definição, a divergência apareceu durante o projeto e não durante uma revisão, que é o mais barato dos dois momentos."
      }
    ],
    "technologies": [
      {
        "group": "Camadas semânticas e de métricas",
        "items": [
          "dbt Semantic Layer",
          "Cube",
          "LookML",
          "Modelos do Power BI"
        ]
      },
      {
        "group": "BI e visualização",
        "items": [
          "Power BI",
          "Tableau",
          "Looker",
          "Metabase"
        ]
      },
      {
        "group": "Governança e catálogo",
        "items": [
          "Collibra",
          "Microsoft Purview",
          "Alation",
          "OpenMetadata"
        ]
      },
      {
        "group": "Plataformas",
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
        "a": "Normalmente não. Duas ferramentas discordando é sintoma de duas definições, não da ferramenta errada. Uma vez que a definição vive num lugar só, a maioria das ferramentas a consome sem problema, e uma migração feita para recuperar confiança costuma reproduzir o problema numa interface nova."
      },
      {
        "q": "Quem decide a definição quando duas equipes discordam?",
        "a": "Vocês, e o trabalho é tornar essa decisão possível, não tomá-la por vocês. Às vezes a resposta honesta é que ambas as medidas são legítimas e precisam de nomes diferentes; fundi-las numa só é o modo de falha que mais queremos evitar."
      },
      {
        "q": "O quanto isso depende de governança e MDM?",
        "a": "Muito. Uma métrica construída sobre entidades não resolvidas estará errada de um jeito que nenhum painel revela: se um cliente aparece três vezes, todo número por cliente está errado e parece certo. Diremos com clareza quando o problema de analytics for, na verdade, um problema de entidades."
      },
      {
        "q": "Vocês vão apagar nossos painéis?",
        "a": "Produziremos a lista e o raciocínio; aposentá-los é decisão de vocês. Racionalização é politicamente mais difícil do que tecnicamente, então preferimos entregar um caso defensável a um fato consumado."
      },
      {
        "q": "E o autosserviço? Não queremos um gargalo.",
        "a": "Nem nós. O objetivo é analistas construindo livremente sobre conjuntos certificados com definições acordadas, mais um caminho claro para uma métrica nova se tornar oficial. O gargalo que se teme costuma vir de não existir esse caminho, não de existir governança."
      },
      {
        "q": "Em quanto tempo algo muda?",
        "a": "O Analytics Health Check dura semanas e é deliberadamente estreito: onde as definições divergem, quais decisões dependem delas e o que seria preciso para corrigir as principais. Uma camada semântica completa é um trabalho mais longo e deve ser justificada por essa revisão, não presumida."
      },
      {
        "q": "Vocês conseguem trabalhar ao lado da nossa equipe de BI?",
        "a": "Sim, e normalmente é o formato certo. Sua equipe conhece o cenário de relatórios e a política interna; nós trazemos a disciplina de definição e governança. Ambas são necessárias e nenhuma é suficiente."
      }
    ],
    "entryOffer": {
      "id": "analytics_health_check",
      "title": "Analytics Health Check",
      "cta": "Agendar um Analytics Health Check",
      "body": "Uma revisão focada para equipes cujos relatórios existem mas não são confiáveis. Onde a mesma medida é definida mais de uma vez, quais decisões dependem dela, quais são de fato as divergências e uma sequência para corrigir as que importam.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
