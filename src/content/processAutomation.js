// Process Automation — Sprint 7D rollout.
//
// Content only; DeepSolution.jsx renders it. See src/lib/solutionSchema.js.
//
// §12B: mastered identities and reference data reduce ambiguity in workflows, and
// this page says plainly that when exceptions come from ambiguous identity the
// right engagement is upstream rather than more automation.

export const IDENTITY = {
  slug: 'solutions/process-automation',
  pageName: 'ProcessAutomation',
  category: 'Process Automation',
};

export const LOCALES = {
  en: {
    "seoTitle": "Process Automation Consulting",
    "seoDescription": "Automate cross-system work where it pays: map where exceptions actually originate, orchestrate the repeatable cases, and write down the human review boundary before anything is built.",
    "eyebrow": "PROCESS AUTOMATION",
    "h1": "Your best people are moving information between systems.",
    "subhead": "The happy path is often already automated, and skilled people spend the week on exceptions. We map where those exceptions actually originate, which is usually upstream data rather than the process, then orchestrate what is genuinely repeatable and leave the rest to people on purpose.",
    "transformation": "Manual → Automated",
    "signals": [
      "People re-key the same information between two systems every day.",
      "The exception queue is the job, and the automated path is the easy part.",
      "Nobody can say how long the process actually takes end to end.",
      "The same failure recurs and is handled from memory rather than a rule.",
      "There is no audit trail for who did what, or it lives in someone's inbox.",
      "Previous automation attempts broke on the cases that were not the happy path."
    ],
    "consequenceFlow": [
      "Cross-system work is done by hand because the systems do not agree",
      "Exceptions accumulate and become a full-time job for skilled people",
      "Process duration and failure points are invisible, so nothing is improved",
      "Automation is attempted on the happy path and stalls on the exceptions",
      "The manual work returns, now with a partly automated system to maintain"
    ],
    "consequenceNote": "Most automation that disappoints was pointed at the wrong thing. If exceptions come from inconsistent customer or product data, automating the workflow moves the work rather than removing it — the ambiguity has to be resolved upstream first.",
    "transformationRows": [
      {
        "before": "Re-keying between systems",
        "after": "Orchestrated flows with a system of record"
      },
      {
        "before": "Exceptions handled from memory",
        "after": "Rules for the recurring cases, people for the genuinely novel"
      },
      {
        "before": "Process duration unknown",
        "after": "Instrumented steps with visible timings and failure points"
      },
      {
        "before": "Ambiguous identities driving exceptions",
        "after": "Mastered entities and reference data resolving them upstream"
      },
      {
        "before": "Audit trail in an inbox",
        "after": "A logged, reviewable record of decisions and actions"
      },
      {
        "before": "Automation stalled on edge cases",
        "after": "A written human review boundary, decided before build"
      }
    ],
    "capabilities": [
      {
        "title": "Process and exception mapping",
        "body": "The actual path including the exceptions, and where each exception originates. This is the step most automation projects skip, and it is the one that determines whether the rest is worth doing."
      },
      {
        "title": "Upstream data resolution",
        "body": "Using mastered identities and reference data from the Governance & MDM practice so the workflow is not asked to guess. A process that stops because two systems name the same supplier differently has a data problem, not a workflow problem."
      },
      {
        "title": "Orchestration and workflow",
        "body": "Coordinating steps across systems with state, retries and idempotency, so a partial failure resumes rather than duplicating work. Most hand-built automation gets this wrong under load."
      },
      {
        "title": "Rules and selective AI",
        "body": "Deterministic rules where the logic is knowable, and models only where genuine judgment on unstructured input is required. Reaching for a model to avoid writing a rule is how automation becomes unexplainable."
      },
      {
        "title": "Human review boundaries",
        "body": "What the process escalates, to whom, and on what signal — written down before build. An automated process with no explicit escalation path escalates anyway, informally, to whoever notices."
      },
      {
        "title": "Audit and monitoring",
        "body": "A record of what ran, what it decided and what a person overrode, plus monitoring on throughput and exception rate so drift is visible."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Systems and events trigger an orchestration layer that holds process state, so a failure resumes rather than restarting or duplicating. Rules handle the cases whose logic can be written down, and AI is used only where judgment on unstructured input is genuinely required. Anything outside those boundaries reaches a human review step that was defined before build rather than discovered after an incident. Every step is logged for audit and monitored for throughput and exception rate. Mastered entities and reference data sit underneath the whole flow, because most exceptions are identity ambiguity arriving in a process that cannot resolve it.",
      "layers": [
        {
          "name": "Systems & events",
          "items": [
            "ERP and CRM",
            "Email and documents",
            "Event triggers",
            "Schedules"
          ]
        },
        {
          "name": "Orchestration",
          "items": [
            "Process state",
            "Retries and idempotency",
            "Routing",
            "SLAs"
          ]
        },
        {
          "name": "Rules & AI",
          "items": [
            "Deterministic rules",
            "Classification",
            "Extraction from documents"
          ]
        },
        {
          "name": "Human review",
          "items": [
            "Escalation boundary",
            "Exception queue",
            "Approvals and overrides"
          ]
        },
        {
          "name": "Audit & monitoring",
          "items": [
            "Decision log",
            "Throughput and exception rate",
            "Alerting"
          ]
        }
      ],
      "crossCutting": [
        "Mastered entities and reference data",
        "Governance and access control",
        "Lineage and provenance",
        "Security",
        "Human accountability for automated decisions"
      ]
    },
    "deliverables": [
      "End-to-end process map including exceptions and where each originates",
      "Automation candidate assessment, with the cases we recommend NOT automating and why",
      "Orchestrated workflows for the repeatable cases, with state, retries and idempotency",
      "Rules for recurring exceptions, written down rather than held in someone's memory",
      "Human review and escalation boundaries, defined before build",
      "Upstream data fixes where ambiguity is the real cause of the exception",
      "Audit logging of decisions, actions and overrides",
      "Monitoring on throughput, exception rate and process duration",
      "Runbooks and handover to the team who will operate it"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Map the process as it runs, exceptions included, and measure where the time actually goes. Perception and measurement usually disagree about which step is the problem."
      },
      {
        "step": "Design",
        "body": "Decide what to automate, what to fix upstream and what to deliberately leave manual. The third category is real and stating it early protects the whole engagement."
      },
      {
        "step": "Deliver",
        "body": "Build the orchestration, rules and review boundaries, running alongside the manual process until the exception rate is understood rather than assumed."
      },
      {
        "step": "Enable",
        "body": "Hand over runbooks, monitoring and the rule-change process, so a new exception type becomes a rule your team adds rather than a ticket to us."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Representative pattern: the exception queue",
        "body": "A cross-system process where the happy path is already automated and skilled people spend their week on exceptions. The work maps where exceptions actually originate, which is usually upstream data rather than the process itself — and if that is the finding, automating harder makes it worse.",
        "outcome": "What the engagement leaves behind: process and exception map, orchestration for the repeatable cases, and a human review boundary that is written down."
      },
      {
        "proofType": "priorExperience",
        "title": "Manual reconciliation as a symptom, not a task",
        "body": "A Tier 1 North American bank where investigators reconciled customer records by hand during investigations. The reconciliation looked like a process to automate; it was actually entity resolution surfacing as manual work. Fixing the matching removed the task rather than accelerating it, which is the distinction this practice exists to make."
      }
    ],
    "technologies": [
      {
        "group": "Orchestration & workflow",
        "items": [
          "Airflow",
          "Temporal",
          "Camunda",
          "Power Automate",
          "Azure Logic Apps"
        ]
      },
      {
        "group": "Integration",
        "items": [
          "APIs",
          "Event streams",
          "Kafka",
          "Webhooks"
        ]
      },
      {
        "group": "Document & extraction",
        "items": [
          "Azure Document Intelligence",
          "AWS Textract",
          "OCR pipelines"
        ]
      },
      {
        "group": "Monitoring & audit",
        "items": [
          "Structured logging",
          "Process metrics",
          "Alerting"
        ]
      }
    ],
    "practitionerNote": "Automation work is led by our principal. The most useful thing we bring here is the discipline to say when a process problem is really a data problem — a judgment built on entity resolution and MDM work for Tier 1 institutions, and one that saves clients from automating the wrong thing.",
    "relatedInsights": [
      {
        "kind": "Case study",
        "label": "Entity resolution for financial crime investigations",
        "href": "/case-studies/entity-resolution-financial-crime/"
      },
      {
        "kind": "Assessment",
        "label": "Data Health Check — the broader estate review",
        "href": "/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "Mastered identities that remove the ambiguity causing exceptions."
      },
      {
        "label": "Data Integration",
        "href": "/solutions/data-integration/",
        "why": "The interfaces an orchestrated process depends on."
      },
      {
        "label": "AI Readiness",
        "href": "/solutions/ai-readiness/",
        "why": "Governance for the cases where a model or agent takes an action."
      }
    ],
    "faqs": [
      {
        "q": "Where should we start?",
        "a": "With the process that is consuming skilled people's time, not the one that is easiest to automate. Those are rarely the same, and starting with the easy one produces a demo rather than a saving."
      },
      {
        "q": "What if the exceptions come from bad data?",
        "a": "Then we will say so, and automating the workflow would be the wrong engagement. Ambiguous customer, product or supplier identity is the most common root cause we find, and it is resolved upstream through mastered entities rather than inside the process."
      },
      {
        "q": "Should we use AI for this?",
        "a": "Only where genuine judgment on unstructured input is needed — reading a document, classifying free text. Where the logic can be written down, a rule is cheaper, faster, explainable and does not drift. Reaching for a model to avoid writing a rule is how automation becomes unexplainable."
      },
      {
        "q": "How do you handle the cases you cannot automate?",
        "a": "Deliberately, and in writing. The escalation boundary is designed before build: what routes to a person, to whom, and on what signal. A process without an explicit boundary still escalates, just informally to whoever notices first."
      },
      {
        "q": "Will this replace jobs?",
        "a": "The work we do targets re-keying and repeated exception handling, which is usually the part of a role people are most relieved to lose. We are not the right firm for a headcount-reduction mandate, and it is fairer to say that at the outset than to discover it mid-engagement."
      },
      {
        "q": "Can this run on the tools we already have?",
        "a": "Often yes. Many organisations already own an orchestration or workflow capability that is underused. We assess what you have before recommending anything new, because a new tool is the most visible and least reliable part of an automation programme."
      },
      {
        "q": "How do we know it is still working in six months?",
        "a": "Monitoring on throughput, exception rate and process duration, with an owner. A quietly rising exception rate is how an automated process becomes a manual one again without anyone deciding to let it."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Automation Opportunity Assessment",
      "cta": "Book an Automation Assessment",
      "body": "A focused review of where manual cross-system work and exceptions are actually consuming time, what is genuinely automatable, what should be fixed upstream instead, and what is better left to people. Includes the candidates we would advise against.",
      "note": "Scope and commercial terms are agreed in writing before the assessment starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en automatisation des processus",
    "seoDescription": "Automatiser le travail inter-systèmes là où cela paie : cartographier l'origine réelle des exceptions, orchestrer les cas répétables, et écrire la frontière de revue humaine avant toute construction.",
    "eyebrow": "AUTOMATISATION DES PROCESSUS",
    "h1": "Vos meilleurs profils déplacent de l'information entre des systèmes.",
    "subhead": "Le chemin nominal est souvent déjà automatisé, et des personnes qualifiées passent la semaine sur les exceptions. Nous cartographions l'origine réelle de ces exceptions — généralement les données en amont plutôt que le processus — puis nous orchestrons ce qui est réellement répétable et laissons le reste aux humains, délibérément.",
    "transformation": "Manuel → Automatisé",
    "signals": [
      "Des personnes ressaisissent chaque jour la même information entre deux systèmes.",
      "La file d'exceptions est le vrai travail, et le chemin automatisé en est la partie facile.",
      "Personne ne sait combien de temps le processus prend réellement de bout en bout.",
      "La même panne revient et se traite de mémoire plutôt que par une règle.",
      "Il n'y a pas de piste d'audit pour savoir qui a fait quoi, ou elle vit dans une boîte mail.",
      "Les tentatives d'automatisation précédentes ont buté sur les cas hors chemin nominal."
    ],
    "consequenceFlow": [
      "Le travail inter-systèmes se fait à la main parce que les systèmes ne concordent pas",
      "Les exceptions s'accumulent et deviennent un emploi à temps plein pour des profils qualifiés",
      "Durée et points de défaillance du processus sont invisibles, donc rien ne s'améliore",
      "L'automatisation vise le chemin nominal et cale sur les exceptions",
      "Le travail manuel revient, avec en plus un système partiellement automatisé à maintenir"
    ],
    "consequenceNote": "La plupart des automatisations décevantes visaient la mauvaise cible. Si les exceptions viennent de données client ou produit incohérentes, automatiser le flux déplace le travail au lieu de le supprimer : l'ambiguïté doit être levée en amont.",
    "transformationRows": [
      {
        "before": "Ressaisie entre systèmes",
        "after": "Des flux orchestrés avec un système de référence"
      },
      {
        "before": "Exceptions traitées de mémoire",
        "after": "Des règles pour les cas récurrents, des humains pour le réellement inédit"
      },
      {
        "before": "Durée du processus inconnue",
        "after": "Des étapes instrumentées, avec durées et points de défaillance visibles"
      },
      {
        "before": "Des identités ambiguës qui génèrent des exceptions",
        "after": "Entités maîtres et données de référence qui les lèvent en amont"
      },
      {
        "before": "Piste d'audit dans une boîte mail",
        "after": "Un enregistrement journalisé et consultable des décisions et actions"
      },
      {
        "before": "Automatisation bloquée sur les cas limites",
        "after": "Une frontière de revue humaine écrite, décidée avant la construction"
      }
    ],
    "capabilities": [
      {
        "title": "Cartographie du processus et des exceptions",
        "body": "Le parcours réel, exceptions comprises, et l'origine de chacune. C'est l'étape que la plupart des projets d'automatisation sautent, et c'est celle qui détermine si le reste vaut la peine."
      },
      {
        "title": "Résolution des données en amont",
        "body": "Utiliser les identités maîtres et les données de référence de la pratique Gouvernance et MDM pour que le flux n'ait pas à deviner. Un processus qui s'arrête parce que deux systèmes nomment différemment le même fournisseur a un problème de données, pas de flux."
      },
      {
        "title": "Orchestration et flux de travail",
        "body": "Coordonner des étapes entre systèmes avec état, reprises et idempotence, pour qu'une défaillance partielle reprenne au lieu de dupliquer le travail. La plupart des automatisations artisanales échouent là sous charge."
      },
      {
        "title": "Règles et IA sélective",
        "body": "Des règles déterministes là où la logique est connaissable, et des modèles seulement là où un jugement réel sur de l'entrée non structurée est requis. Recourir à un modèle pour éviter d'écrire une règle est la façon dont l'automatisation devient inexplicable."
      },
      {
        "title": "Frontières de revue humaine",
        "body": "Ce que le processus remonte, à qui, et sur quel signal — écrit avant la construction. Un processus automatisé sans chemin d'escalade explicite escalade quand même, informellement, vers quiconque s'en aperçoit."
      },
      {
        "title": "Audit et supervision",
        "body": "Un enregistrement de ce qui a tourné, de ce qui a été décidé et de ce qu'une personne a corrigé, plus une supervision du débit et du taux d'exceptions pour rendre la dérive visible."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Systèmes et événements déclenchent une couche d'orchestration qui détient l'état du processus, si bien qu'une défaillance reprend au lieu de redémarrer ou de dupliquer. Des règles traitent les cas dont la logique peut s'écrire, et l'IA n'est utilisée que là où un jugement sur de l'entrée non structurée est réellement nécessaire. Tout ce qui sort de ces frontières atteint une étape de revue humaine définie avant la construction plutôt que découverte après un incident. Chaque étape est journalisée pour l'audit et supervisée en débit et en taux d'exceptions. Entités maîtres et données de référence se placent sous l'ensemble du flux, car la plupart des exceptions sont une ambiguïté d'identité arrivant dans un processus incapable de la lever.",
      "layers": [
        {
          "name": "Systèmes et événements",
          "items": [
            "ERP et CRM",
            "Courriels et documents",
            "Déclencheurs d'événements",
            "Planifications"
          ]
        },
        {
          "name": "Orchestration",
          "items": [
            "État du processus",
            "Reprises et idempotence",
            "Routage",
            "Engagements de service"
          ]
        },
        {
          "name": "Règles et IA",
          "items": [
            "Règles déterministes",
            "Classification",
            "Extraction documentaire"
          ]
        },
        {
          "name": "Revue humaine",
          "items": [
            "Frontière d'escalade",
            "File d'exceptions",
            "Validations et corrections"
          ]
        },
        {
          "name": "Audit et supervision",
          "items": [
            "Journal des décisions",
            "Débit et taux d'exceptions",
            "Alertes"
          ]
        }
      ],
      "crossCutting": [
        "Entités maîtres et données de référence",
        "Gouvernance et contrôle d'accès",
        "Traçabilité et provenance",
        "Sécurité",
        "Responsabilité humaine des décisions automatisées"
      ]
    },
    "deliverables": [
      "Cartographie du processus de bout en bout, exceptions comprises, avec l'origine de chacune",
      "Évaluation des candidats à l'automatisation, y compris les cas que nous recommandons de NE PAS automatiser, et pourquoi",
      "Flux orchestrés pour les cas répétables, avec état, reprises et idempotence",
      "Des règles pour les exceptions récurrentes, écrites plutôt que retenues de mémoire",
      "Frontières de revue humaine et d'escalade, définies avant la construction",
      "Corrections des données en amont là où l'ambiguïté est la vraie cause de l'exception",
      "Journalisation d'audit des décisions, actions et corrections",
      "Supervision du débit, du taux d'exceptions et de la durée du processus",
      "Procédures et transfert à l'équipe qui exploitera l'ensemble"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Cartographier le processus tel qu'il tourne, exceptions comprises, et mesurer où passe réellement le temps. Perception et mesure divergent en général sur l'étape problématique."
      },
      {
        "step": "Concevoir",
        "body": "Décider quoi automatiser, quoi corriger en amont et quoi laisser délibérément manuel. Cette troisième catégorie est réelle, et l'énoncer tôt protège toute la mission."
      },
      {
        "step": "Livrer",
        "body": "Construire l'orchestration, les règles et les frontières de revue, en parallèle du processus manuel jusqu'à ce que le taux d'exceptions soit compris plutôt que supposé."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre procédures, supervision et processus de modification des règles, pour qu'un nouveau type d'exception devienne une règle que votre équipe ajoute plutôt qu'un ticket pour nous."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Schéma représentatif : la file des exceptions",
        "body": "Un processus inter-systèmes dont le chemin nominal est déjà automatisé et où des personnes qualifiées passent leur semaine sur les exceptions. Le travail cartographie l'origine réelle des exceptions, généralement les données en amont plutôt que le processus lui-même — et si c'est le constat, automatiser davantage aggrave la situation.",
        "outcome": "Ce que la mission laisse derrière elle : une cartographie du processus et des exceptions, l'orchestration des cas répétables, et une frontière de revue humaine écrite noir sur blanc."
      },
      {
        "proofType": "priorExperience",
        "title": "La réconciliation manuelle comme symptôme, pas comme tâche",
        "body": "Une banque nord-américaine de premier plan où les enquêteurs réconciliaient à la main les enregistrements clients. La réconciliation ressemblait à une tâche à automatiser ; c'était en réalité de la résolution d'entités qui affleurait sous forme de travail manuel. Corriger le rapprochement a supprimé la tâche plutôt que de l'accélérer, et c'est précisément la distinction que cette pratique existe pour faire."
      }
    ],
    "technologies": [
      {
        "group": "Orchestration et flux",
        "items": [
          "Airflow",
          "Temporal",
          "Camunda",
          "Power Automate",
          "Azure Logic Apps"
        ]
      },
      {
        "group": "Intégration",
        "items": [
          "API",
          "Flux d'événements",
          "Kafka",
          "Webhooks"
        ]
      },
      {
        "group": "Documents et extraction",
        "items": [
          "Azure Document Intelligence",
          "AWS Textract",
          "Chaînes OCR"
        ]
      },
      {
        "group": "Supervision et audit",
        "items": [
          "Journalisation structurée",
          "Métriques de processus",
          "Alertes"
        ]
      }
    ],
    "practitionerNote": "Les travaux d'automatisation sont dirigés par notre associé principal. Ce que nous apportons de plus utile ici est la rigueur de dire quand un problème de processus est en réalité un problème de données — un jugement bâti sur la résolution d'entités et le MDM pour des institutions de premier plan, et qui évite aux clients d'automatiser la mauvaise chose.",
    "relatedInsights": [
      {
        "kind": "Étude de cas",
        "label": "Résolution d'entités pour les enquêtes en criminalité financière",
        "href": "/fr/case-studies/entity-resolution-financial-crime/"
      },
      {
        "kind": "Évaluation",
        "label": "Diagnostic de données — la revue élargie du patrimoine",
        "href": "/fr/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Gouvernance des données et MDM",
        "href": "/solutions/data-governance/",
        "why": "Les identités maîtres qui lèvent l'ambiguïté à l'origine des exceptions."
      },
      {
        "label": "Intégration des données",
        "href": "/solutions/data-integration/",
        "why": "Les interfaces dont dépend un processus orchestré."
      },
      {
        "label": "Préparation à l'IA",
        "href": "/solutions/ai-readiness/",
        "why": "La gouvernance des cas où un modèle ou un agent exécute une action."
      }
    ],
    "faqs": [
      {
        "q": "Par où commencer ?",
        "a": "Par le processus qui consomme le temps de profils qualifiés, pas par celui qui s'automatise le plus facilement. Ce sont rarement les mêmes, et commencer par le facile produit une démonstration plutôt qu'une économie."
      },
      {
        "q": "Et si les exceptions viennent de mauvaises données ?",
        "a": "Alors nous le dirons, et automatiser le flux serait la mauvaise mission. L'ambiguïté d'identité client, produit ou fournisseur est la cause racine la plus fréquente que nous rencontrons, et elle se résout en amont par des entités maîtres plutôt qu'à l'intérieur du processus."
      },
      {
        "q": "Faut-il utiliser l'IA pour cela ?",
        "a": "Seulement là où un jugement réel sur de l'entrée non structurée est nécessaire : lire un document, classer du texte libre. Là où la logique peut s'écrire, une règle est moins chère, plus rapide, explicable et ne dérive pas. Recourir à un modèle pour éviter d'écrire une règle est la façon dont l'automatisation devient inexplicable."
      },
      {
        "q": "Comment traitez-vous les cas non automatisables ?",
        "a": "Délibérément, et par écrit. La frontière d'escalade est conçue avant la construction : ce qui part vers une personne, vers qui, et sur quel signal. Un processus sans frontière explicite escalade quand même, informellement, vers celui qui remarque en premier."
      },
      {
        "q": "Cela va-t-il supprimer des postes ?",
        "a": "Nos travaux visent la ressaisie et le traitement répété d'exceptions, c'est-à-dire la partie du poste que les gens sont généralement soulagés de perdre. Nous ne sommes pas le bon cabinet pour un mandat de réduction d'effectifs, et il est plus loyal de le dire d'emblée que de le découvrir en cours de mission."
      },
      {
        "q": "Cela peut-il tourner sur les outils que nous avons déjà ?",
        "a": "Souvent oui. Beaucoup d'organisations possèdent déjà une capacité d'orchestration sous-utilisée. Nous évaluons l'existant avant de recommander quoi que ce soit de nouveau, car un nouvel outil est la partie la plus visible et la moins fiable d'un programme d'automatisation."
      },
      {
        "q": "Comment savoir que cela fonctionne encore dans six mois ?",
        "a": "Par une supervision du débit, du taux d'exceptions et de la durée du processus, avec un responsable. Un taux d'exceptions qui monte discrètement est la façon dont un processus automatisé redevient manuel sans que personne ne l'ait décidé."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Évaluation des opportunités d'automatisation",
      "cta": "Réserver une évaluation d'automatisation",
      "body": "Une revue ciblée de l'endroit où le travail manuel inter-systèmes et les exceptions consomment réellement du temps, de ce qui est véritablement automatisable, de ce qu'il vaut mieux corriger en amont, et de ce qui gagne à rester humain. Inclut les candidats que nous déconseillons.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en automatización de procesos",
    "seoDescription": "Automatizar el trabajo entre sistemas donde compensa: mapear dónde nacen realmente las excepciones, orquestar los casos repetibles y escribir la frontera de revisión humana antes de construir nada.",
    "eyebrow": "AUTOMATIZACIÓN DE PROCESOS",
    "h1": "Tu mejor gente está moviendo información entre sistemas.",
    "subhead": "El camino feliz suele estar ya automatizado, y personas cualificadas dedican la semana a las excepciones. Mapeamos dónde nacen realmente esas excepciones, que suele ser en los datos de origen y no en el proceso, y luego orquestamos lo que es genuinamente repetible y dejamos el resto a las personas, a propósito.",
    "transformation": "Manual → Automatizado",
    "signals": [
      "Hay personas re-tecleando la misma información entre dos sistemas cada día.",
      "La cola de excepciones es el trabajo, y el camino automatizado es la parte fácil.",
      "Nadie sabe decir cuánto dura realmente el proceso de principio a fin.",
      "El mismo fallo se repite y se resuelve de memoria en lugar de con una regla.",
      "No hay rastro de auditoría de quién hizo qué, o vive en el correo de alguien.",
      "Los intentos previos de automatización se rompieron en los casos que no eran el camino feliz."
    ],
    "consequenceFlow": [
      "El trabajo entre sistemas se hace a mano porque los sistemas no coinciden",
      "Las excepciones se acumulan y se vuelven un empleo a tiempo completo para gente cualificada",
      "La duración y los puntos de fallo del proceso son invisibles, así que nada mejora",
      "Se intenta automatizar el camino feliz y se atasca en las excepciones",
      "El trabajo manual vuelve, ahora con un sistema medio automatizado que mantener"
    ],
    "consequenceNote": "La mayoría de las automatizaciones decepcionantes apuntaban a lo equivocado. Si las excepciones vienen de datos de cliente o producto inconsistentes, automatizar el flujo mueve el trabajo en lugar de eliminarlo: la ambigüedad hay que resolverla aguas arriba.",
    "transformationRows": [
      {
        "before": "Re-teclear entre sistemas",
        "after": "Flujos orquestados con un sistema de referencia"
      },
      {
        "before": "Excepciones resueltas de memoria",
        "after": "Reglas para los casos recurrentes, personas para lo genuinamente nuevo"
      },
      {
        "before": "Duración del proceso desconocida",
        "after": "Pasos instrumentados con tiempos y puntos de fallo visibles"
      },
      {
        "before": "Identidades ambiguas generando excepciones",
        "after": "Entidades maestras y datos de referencia que las resuelven aguas arriba"
      },
      {
        "before": "Rastro de auditoría en un buzón",
        "after": "Un registro guardado y revisable de decisiones y acciones"
      },
      {
        "before": "Automatización atascada en casos límite",
        "after": "Una frontera de revisión humana escrita, decidida antes de construir"
      }
    ],
    "capabilities": [
      {
        "title": "Mapa de proceso y excepciones",
        "body": "El recorrido real incluidas las excepciones, y dónde nace cada una. Es el paso que la mayoría de proyectos de automatización se salta, y es el que determina si el resto merece la pena."
      },
      {
        "title": "Resolución de datos aguas arriba",
        "body": "Usar identidades maestras y datos de referencia de la práctica de Gobernanza y MDM para que al flujo no se le pida adivinar. Un proceso que se detiene porque dos sistemas nombran distinto al mismo proveedor tiene un problema de datos, no de flujo."
      },
      {
        "title": "Orquestación y flujo de trabajo",
        "body": "Coordinar pasos entre sistemas con estado, reintentos e idempotencia, para que un fallo parcial reanude en lugar de duplicar trabajo. La mayoría de la automatización hecha a mano falla aquí bajo carga."
      },
      {
        "title": "Reglas e IA selectiva",
        "body": "Reglas deterministas donde la lógica se puede conocer, y modelos solo donde hace falta juicio real sobre entrada no estructurada. Recurrir a un modelo para evitar escribir una regla es como la automatización se vuelve inexplicable."
      },
      {
        "title": "Fronteras de revisión humana",
        "body": "Qué escala el proceso, a quién y con qué señal, escrito antes de construir. Un proceso automatizado sin ruta de escalado explícita escala igualmente, de manera informal, a quien se dé cuenta."
      },
      {
        "title": "Auditoría y monitorización",
        "body": "Un registro de qué se ejecutó, qué decidió y qué anuló una persona, más monitorización de rendimiento y tasa de excepciones para que la deriva sea visible."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Sistemas y eventos disparan una capa de orquestación que guarda el estado del proceso, de modo que un fallo reanuda en lugar de reiniciar o duplicar. Las reglas atienden los casos cuya lógica se puede escribir, y la IA se usa solo donde hace falta juicio real sobre entrada no estructurada. Todo lo que queda fuera de esas fronteras llega a un paso de revisión humana definido antes de construir y no descubierto tras un incidente. Cada paso se registra para auditoría y se monitoriza en rendimiento y tasa de excepciones. Las entidades maestras y los datos de referencia están debajo de todo el flujo, porque la mayoría de las excepciones son ambigüedad de identidad llegando a un proceso que no puede resolverla.",
      "layers": [
        {
          "name": "Sistemas y eventos",
          "items": [
            "ERP y CRM",
            "Correo y documentos",
            "Disparadores de eventos",
            "Planificaciones"
          ]
        },
        {
          "name": "Orquestación",
          "items": [
            "Estado del proceso",
            "Reintentos e idempotencia",
            "Enrutado",
            "Acuerdos de servicio"
          ]
        },
        {
          "name": "Reglas e IA",
          "items": [
            "Reglas deterministas",
            "Clasificación",
            "Extracción de documentos"
          ]
        },
        {
          "name": "Revisión humana",
          "items": [
            "Frontera de escalado",
            "Cola de excepciones",
            "Aprobaciones y anulaciones"
          ]
        },
        {
          "name": "Auditoría y monitorización",
          "items": [
            "Registro de decisiones",
            "Rendimiento y tasa de excepciones",
            "Alertas"
          ]
        }
      ],
      "crossCutting": [
        "Entidades maestras y datos de referencia",
        "Gobernanza y control de acceso",
        "Linaje y procedencia",
        "Seguridad",
        "Responsabilidad humana de las decisiones automatizadas"
      ]
    },
    "deliverables": [
      "Mapa de proceso de extremo a extremo incluidas las excepciones y dónde nace cada una",
      "Evaluación de candidatos a automatización, con los casos que recomendamos NO automatizar y por qué",
      "Flujos orquestados para los casos repetibles, con estado, reintentos e idempotencia",
      "Reglas para las excepciones recurrentes, escritas en lugar de guardadas en la memoria de alguien",
      "Fronteras de revisión y escalado humano, definidas antes de construir",
      "Correcciones de datos aguas arriba donde la ambigüedad sea la causa real de la excepción",
      "Registro de auditoría de decisiones, acciones y anulaciones",
      "Monitorización de rendimiento, tasa de excepciones y duración del proceso",
      "Procedimientos y traspaso al equipo que lo va a operar"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Mapear el proceso tal como corre, excepciones incluidas, y medir dónde se va realmente el tiempo. Percepción y medición suelen discrepar sobre qué paso es el problema."
      },
      {
        "step": "Diseñar",
        "body": "Decidir qué automatizar, qué arreglar aguas arriba y qué dejar deliberadamente manual. La tercera categoría es real y decirlo pronto protege todo el proyecto."
      },
      {
        "step": "Entregar",
        "body": "Construir la orquestación, las reglas y las fronteras de revisión, corriendo junto al proceso manual hasta que la tasa de excepciones se entienda en lugar de suponerse."
      },
      {
        "step": "Habilitar",
        "body": "Entregar procedimientos, monitorización y el proceso de cambio de reglas, para que un tipo nuevo de excepción sea una regla que añade tu equipo y no un ticket para nosotros."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Patrón representativo: la cola de excepciones",
        "body": "Un proceso entre sistemas cuyo camino feliz ya está automatizado y donde personas cualificadas dedican la semana a las excepciones. El trabajo mapea dónde nacen realmente las excepciones, que suele ser en los datos de origen y no en el proceso — y si ese es el hallazgo, automatizar más lo empeora.",
        "outcome": "Lo que deja el proyecto: mapa de proceso y excepciones, orquestación de los casos repetibles y una frontera de revisión humana puesta por escrito."
      },
      {
        "proofType": "priorExperience",
        "title": "La reconciliación manual como síntoma, no como tarea",
        "body": "Un banco norteamericano de primer nivel donde los investigadores reconciliaban registros de cliente a mano durante las investigaciones. La reconciliación parecía una tarea que automatizar; en realidad era resolución de entidades aflorando como trabajo manual. Arreglar la coincidencia eliminó la tarea en lugar de acelerarla, que es justo la distinción para la que existe esta práctica."
      }
    ],
    "technologies": [
      {
        "group": "Orquestación y flujo",
        "items": [
          "Airflow",
          "Temporal",
          "Camunda",
          "Power Automate",
          "Azure Logic Apps"
        ]
      },
      {
        "group": "Integración",
        "items": [
          "API",
          "Flujos de eventos",
          "Kafka",
          "Webhooks"
        ]
      },
      {
        "group": "Documentos y extracción",
        "items": [
          "Azure Document Intelligence",
          "AWS Textract",
          "Cadenas OCR"
        ]
      },
      {
        "group": "Monitorización y auditoría",
        "items": [
          "Registro estructurado",
          "Métricas de proceso",
          "Alertas"
        ]
      }
    ],
    "practitionerNote": "El trabajo de automatización lo dirige nuestro socio principal. Lo más útil que aportamos aquí es la disciplina de decir cuándo un problema de proceso es en realidad un problema de datos: un criterio construido sobre resolución de entidades y MDM para instituciones de primer nivel, y que evita a los clientes automatizar lo equivocado.",
    "relatedInsights": [
      {
        "kind": "Caso de estudio",
        "label": "Resolución de entidades para investigaciones de delitos financieros",
        "href": "/es/case-studies/entity-resolution-financial-crime/"
      },
      {
        "kind": "Evaluación",
        "label": "Diagnóstico de datos — la revisión más amplia del entorno",
        "href": "/es/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Gobernanza de datos y MDM",
        "href": "/solutions/data-governance/",
        "why": "Identidades maestras que eliminan la ambigüedad que causa excepciones."
      },
      {
        "label": "Integración de datos",
        "href": "/solutions/data-integration/",
        "why": "Las interfaces de las que depende un proceso orquestado."
      },
      {
        "label": "Preparación para IA",
        "href": "/solutions/ai-readiness/",
        "why": "Gobernanza para los casos en que un modelo o agente ejecuta una acción."
      }
    ],
    "faqs": [
      {
        "q": "¿Por dónde empezamos?",
        "a": "Por el proceso que consume el tiempo de gente cualificada, no por el más fácil de automatizar. Rara vez son el mismo, y empezar por el fácil produce una demo en lugar de un ahorro."
      },
      {
        "q": "¿Y si las excepciones vienen de datos malos?",
        "a": "Entonces lo diremos, y automatizar el flujo sería el proyecto equivocado. La identidad ambigua de cliente, producto o proveedor es la causa raíz más común que encontramos, y se resuelve aguas arriba con entidades maestras, no dentro del proceso."
      },
      {
        "q": "¿Deberíamos usar IA para esto?",
        "a": "Solo donde haga falta juicio real sobre entrada no estructurada: leer un documento, clasificar texto libre. Donde la lógica se puede escribir, una regla es más barata, más rápida, explicable y no deriva. Recurrir a un modelo para evitar escribir una regla es como la automatización se vuelve inexplicable."
      },
      {
        "q": "¿Cómo tratáis los casos que no se pueden automatizar?",
        "a": "Deliberadamente y por escrito. La frontera de escalado se diseña antes de construir: qué va a una persona, a quién y con qué señal. Un proceso sin frontera explícita escala igualmente, informalmente, a quien lo note primero."
      },
      {
        "q": "¿Esto va a eliminar puestos?",
        "a": "El trabajo que hacemos apunta al re-tecleo y al manejo repetido de excepciones, que suele ser la parte del puesto que la gente agradece perder. No somos la firma adecuada para un mandato de reducción de plantilla, y es más justo decirlo al principio que descubrirlo a mitad del proyecto."
      },
      {
        "q": "¿Puede funcionar con las herramientas que ya tenemos?",
        "a": "A menudo sí. Muchas organizaciones ya poseen una capacidad de orquestación infrautilizada. Evaluamos lo que tienes antes de recomendar nada nuevo, porque una herramienta nueva es la parte más visible y menos fiable de un programa de automatización."
      },
      {
        "q": "¿Cómo sabemos que sigue funcionando en seis meses?",
        "a": "Con monitorización de rendimiento, tasa de excepciones y duración del proceso, con un responsable. Una tasa de excepciones que sube en silencio es como un proceso automatizado vuelve a ser manual sin que nadie lo decida."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Evaluación de Oportunidades de Automatización",
      "cta": "Reservar una evaluación de automatización",
      "body": "Una revisión focalizada de dónde el trabajo manual entre sistemas y las excepciones consumen realmente tiempo, qué es genuinamente automatizable, qué conviene arreglar aguas arriba y qué es mejor dejar a las personas. Incluye los candidatos que desaconsejaríamos.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em automação de processos",
    "seoDescription": "Automatizar o trabalho entre sistemas onde compensa: mapear onde as exceções realmente nascem, orquestrar os casos repetíveis e escrever a fronteira de revisão humana antes de construir qualquer coisa.",
    "eyebrow": "AUTOMAÇÃO DE PROCESSOS",
    "h1": "Suas melhores pessoas estão movendo informação entre sistemas.",
    "subhead": "O caminho feliz muitas vezes já está automatizado, e pessoas qualificadas passam a semana em exceções. Mapeamos onde essas exceções realmente nascem, o que costuma ser nos dados de origem e não no processo, e então orquestramos o que é genuinamente repetível e deixamos o resto para pessoas, de propósito.",
    "transformation": "Manual → Automatizado",
    "signals": [
      "Pessoas redigitam a mesma informação entre dois sistemas todos os dias.",
      "A fila de exceções é o trabalho, e o caminho automatizado é a parte fácil.",
      "Ninguém sabe dizer quanto o processo realmente leva de ponta a ponta.",
      "A mesma falha se repete e é tratada de memória em vez de por uma regra.",
      "Não há trilha de auditoria de quem fez o quê, ou ela vive na caixa de entrada de alguém.",
      "Tentativas anteriores de automação quebraram nos casos que não eram o caminho feliz."
    ],
    "consequenceFlow": [
      "O trabalho entre sistemas é feito à mão porque os sistemas não concordam",
      "As exceções se acumulam e viram trabalho integral para gente qualificada",
      "Duração e pontos de falha do processo são invisíveis, então nada melhora",
      "A automação é tentada no caminho feliz e trava nas exceções",
      "O trabalho manual volta, agora com um sistema parcialmente automatizado para manter"
    ],
    "consequenceNote": "A maioria das automações decepcionantes apontou para a coisa errada. Se as exceções vêm de dados de cliente ou produto inconsistentes, automatizar o fluxo move o trabalho em vez de removê-lo: a ambiguidade precisa ser resolvida a montante.",
    "transformationRows": [
      {
        "before": "Redigitar entre sistemas",
        "after": "Fluxos orquestrados com um sistema de referência"
      },
      {
        "before": "Exceções tratadas de memória",
        "after": "Regras para os casos recorrentes, pessoas para o genuinamente novo"
      },
      {
        "before": "Duração do processo desconhecida",
        "after": "Passos instrumentados com tempos e pontos de falha visíveis"
      },
      {
        "before": "Identidades ambíguas gerando exceções",
        "after": "Entidades mestras e dados de referência resolvendo-as a montante"
      },
      {
        "before": "Trilha de auditoria numa caixa de entrada",
        "after": "Um registro gravado e revisável de decisões e ações"
      },
      {
        "before": "Automação travada em casos de borda",
        "after": "Uma fronteira de revisão humana escrita, decidida antes de construir"
      }
    ],
    "capabilities": [
      {
        "title": "Mapa de processo e exceções",
        "body": "O caminho real incluindo as exceções, e onde cada uma nasce. É o passo que a maioria dos projetos de automação pula, e é o que determina se o resto vale a pena."
      },
      {
        "title": "Resolução de dados a montante",
        "body": "Usar identidades mestras e dados de referência da prática de Governança e MDM para que o fluxo não precise adivinhar. Um processo que para porque dois sistemas nomeiam o mesmo fornecedor de formas diferentes tem um problema de dados, não de fluxo."
      },
      {
        "title": "Orquestração e workflow",
        "body": "Coordenar passos entre sistemas com estado, retentativas e idempotência, para que uma falha parcial retome em vez de duplicar trabalho. A maioria da automação feita à mão erra isso sob carga."
      },
      {
        "title": "Regras e IA seletiva",
        "body": "Regras determinísticas onde a lógica é conhecível, e modelos apenas onde há necessidade real de julgamento sobre entrada não estruturada. Recorrer a um modelo para evitar escrever uma regra é como a automação se torna inexplicável."
      },
      {
        "title": "Fronteiras de revisão humana",
        "body": "O que o processo escala, para quem e com qual sinal, escrito antes de construir. Um processo automatizado sem caminho de escalonamento explícito escala mesmo assim, informalmente, para quem perceber."
      },
      {
        "title": "Auditoria e monitoramento",
        "body": "Um registro do que rodou, do que decidiu e do que uma pessoa sobrescreveu, além de monitoramento de vazão e taxa de exceções para que o desvio fique visível."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "Sistemas e eventos disparam uma camada de orquestração que guarda o estado do processo, de modo que uma falha retoma em vez de reiniciar ou duplicar. Regras tratam os casos cuja lógica pode ser escrita, e a IA é usada apenas onde julgamento sobre entrada não estruturada é genuinamente necessário. Tudo que fica fora dessas fronteiras chega a um passo de revisão humana definido antes de construir e não descoberto depois de um incidente. Cada passo é registrado para auditoria e monitorado em vazão e taxa de exceções. Entidades mestras e dados de referência ficam abaixo de todo o fluxo, porque a maioria das exceções é ambiguidade de identidade chegando a um processo que não consegue resolvê-la.",
      "layers": [
        {
          "name": "Sistemas e eventos",
          "items": [
            "ERP e CRM",
            "E-mail e documentos",
            "Gatilhos de eventos",
            "Agendamentos"
          ]
        },
        {
          "name": "Orquestração",
          "items": [
            "Estado do processo",
            "Retentativas e idempotência",
            "Roteamento",
            "Acordos de nível de serviço"
          ]
        },
        {
          "name": "Regras e IA",
          "items": [
            "Regras determinísticas",
            "Classificação",
            "Extração de documentos"
          ]
        },
        {
          "name": "Revisão humana",
          "items": [
            "Fronteira de escalonamento",
            "Fila de exceções",
            "Aprovações e sobrescritas"
          ]
        },
        {
          "name": "Auditoria e monitoramento",
          "items": [
            "Log de decisões",
            "Vazão e taxa de exceções",
            "Alertas"
          ]
        }
      ],
      "crossCutting": [
        "Entidades mestras e dados de referência",
        "Governança e controle de acesso",
        "Linhagem e procedência",
        "Segurança",
        "Responsabilidade humana por decisões automatizadas"
      ]
    },
    "deliverables": [
      "Mapa de processo ponta a ponta incluindo exceções e onde cada uma nasce",
      "Avaliação de candidatos à automação, com os casos que recomendamos NÃO automatizar e por quê",
      "Fluxos orquestrados para os casos repetíveis, com estado, retentativas e idempotência",
      "Regras para as exceções recorrentes, escritas em vez de guardadas na memória de alguém",
      "Fronteiras de revisão e escalonamento humano, definidas antes de construir",
      "Correções de dados a montante onde a ambiguidade for a causa real da exceção",
      "Log de auditoria de decisões, ações e sobrescritas",
      "Monitoramento de vazão, taxa de exceções e duração do processo",
      "Runbooks e repasse para a equipe que vai operar"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Mapear o processo como ele roda, exceções incluídas, e medir para onde o tempo realmente vai. Percepção e medição costumam discordar sobre qual passo é o problema."
      },
      {
        "step": "Projetar",
        "body": "Decidir o que automatizar, o que corrigir a montante e o que deixar deliberadamente manual. A terceira categoria é real e dizê-la cedo protege o projeto inteiro."
      },
      {
        "step": "Entregar",
        "body": "Construir a orquestração, as regras e as fronteiras de revisão, rodando ao lado do processo manual até que a taxa de exceções seja compreendida em vez de suposta."
      },
      {
        "step": "Habilitar",
        "body": "Entregar runbooks, monitoramento e o processo de mudança de regras, para que um novo tipo de exceção vire uma regra que sua equipe adiciona e não um chamado para nós."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Padrão representativo: a fila de exceções",
        "body": "Um processo entre sistemas cujo caminho feliz já está automatizado e onde pessoas qualificadas passam a semana em exceções. O trabalho mapeia onde as exceções realmente nascem, o que costuma ser nos dados de origem e não no processo — e se for esse o achado, automatizar mais piora.",
        "outcome": "O que o projeto deixa: mapa de processo e exceções, orquestração dos casos repetíveis e uma fronteira de revisão humana colocada por escrito."
      },
      {
        "proofType": "priorExperience",
        "title": "Reconciliação manual como sintoma, não como tarefa",
        "body": "Um banco norte-americano de primeira linha onde investigadores reconciliavam registros de cliente à mão durante as investigações. A reconciliação parecia uma tarefa a automatizar; era, na verdade, resolução de entidades aflorando como trabalho manual. Corrigir a correspondência removeu a tarefa em vez de acelerá-la, que é exatamente a distinção para a qual esta prática existe."
      }
    ],
    "technologies": [
      {
        "group": "Orquestração e workflow",
        "items": [
          "Airflow",
          "Temporal",
          "Camunda",
          "Power Automate",
          "Azure Logic Apps"
        ]
      },
      {
        "group": "Integração",
        "items": [
          "APIs",
          "Fluxos de eventos",
          "Kafka",
          "Webhooks"
        ]
      },
      {
        "group": "Documentos e extração",
        "items": [
          "Azure Document Intelligence",
          "AWS Textract",
          "Pipelines de OCR"
        ]
      },
      {
        "group": "Monitoramento e auditoria",
        "items": [
          "Log estruturado",
          "Métricas de processo",
          "Alertas"
        ]
      }
    ],
    "practitionerNote": "O trabalho de automação é liderado pelo nosso sócio principal. O mais útil que trazemos aqui é a disciplina de dizer quando um problema de processo é na verdade um problema de dados: um julgamento construído sobre resolução de entidades e MDM para instituições de primeira linha, e que evita que clientes automatizem a coisa errada.",
    "relatedInsights": [
      {
        "kind": "Estudo de caso",
        "label": "Resolução de entidades para investigações de crimes financeiros",
        "href": "/pt/case-studies/entity-resolution-financial-crime/"
      },
      {
        "kind": "Avaliação",
        "label": "Diagnóstico de dados — a revisão mais ampla do ambiente",
        "href": "/pt/data-health-check/"
      }
    ],
    "relatedSolutions": [
      {
        "label": "Governança de dados e MDM",
        "href": "/solutions/data-governance/",
        "why": "Identidades mestras que removem a ambiguidade que causa exceções."
      },
      {
        "label": "Integração de dados",
        "href": "/solutions/data-integration/",
        "why": "As interfaces das quais um processo orquestrado depende."
      },
      {
        "label": "Prontidão para IA",
        "href": "/solutions/ai-readiness/",
        "why": "Governança para os casos em que um modelo ou agente executa uma ação."
      }
    ],
    "faqs": [
      {
        "q": "Por onde começamos?",
        "a": "Pelo processo que consome o tempo de gente qualificada, não pelo mais fácil de automatizar. Raramente são o mesmo, e começar pelo fácil produz uma demo em vez de uma economia."
      },
      {
        "q": "E se as exceções vierem de dados ruins?",
        "a": "Então diremos isso, e automatizar o fluxo seria o projeto errado. Identidade ambígua de cliente, produto ou fornecedor é a causa raiz mais comum que encontramos, e ela se resolve a montante com entidades mestras, não dentro do processo."
      },
      {
        "q": "Devemos usar IA para isso?",
        "a": "Apenas onde houver necessidade real de julgamento sobre entrada não estruturada: ler um documento, classificar texto livre. Onde a lógica pode ser escrita, uma regra é mais barata, mais rápida, explicável e não desvia. Recorrer a um modelo para evitar escrever uma regra é como a automação se torna inexplicável."
      },
      {
        "q": "Como vocês tratam os casos que não dá para automatizar?",
        "a": "Deliberadamente e por escrito. A fronteira de escalonamento é desenhada antes de construir: o que vai para uma pessoa, para quem e com qual sinal. Um processo sem fronteira explícita escala mesmo assim, informalmente, para quem notar primeiro."
      },
      {
        "q": "Isso vai eliminar postos de trabalho?",
        "a": "O trabalho que fazemos mira a redigitação e o tratamento repetido de exceções, que costuma ser a parte do cargo que as pessoas ficam aliviadas de perder. Não somos a firma certa para um mandato de redução de quadro, e é mais justo dizer isso no início do que descobrir no meio do projeto."
      },
      {
        "q": "Isso roda nas ferramentas que já temos?",
        "a": "Muitas vezes sim. Muitas organizações já possuem uma capacidade de orquestração subutilizada. Avaliamos o que você tem antes de recomendar algo novo, porque uma ferramenta nova é a parte mais visível e menos confiável de um programa de automação."
      },
      {
        "q": "Como sabemos que ainda funciona daqui a seis meses?",
        "a": "Com monitoramento de vazão, taxa de exceções e duração do processo, com um responsável. Uma taxa de exceções subindo em silêncio é como um processo automatizado volta a ser manual sem ninguém decidir isso."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Avaliação de Oportunidades de Automação",
      "cta": "Agendar uma avaliação de automação",
      "body": "Uma revisão focada de onde o trabalho manual entre sistemas e as exceções realmente consomem tempo, o que é genuinamente automatizável, o que deve ser corrigido a montante e o que é melhor deixar com pessoas. Inclui os candidatos que desaconselharíamos.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
