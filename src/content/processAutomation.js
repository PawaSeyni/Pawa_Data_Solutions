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
    "seoDescription": "Automate cross-system work without hiding risk in brittle bots. Workflow, exception and control design first, then the right mechanism — API, orchestration, RPA or AI.",
    "eyebrow": "PROCESS AUTOMATION",
    "h1": "Automate the work between systems, without losing control.",
    "subhead": "We identify repetitive cross-system work, redesign the workflow, and implement automation with clear exception handling, auditability and human approval where judgment still matters.",
    "transformation": "Manual and fragmented → Controlled and automated",
    "signals": [
      "Teams re-key the same information across multiple systems.",
      "High-volume work depends on email, spreadsheets and manual handoffs.",
      "Exceptions consume more time than the happy path.",
      "Existing bots break when screens, fields or upstream processes change.",
      "Automation ownership is unclear once the project team leaves.",
      "AI is being proposed before the workflow, data and approval boundaries are understood."
    ],
    "consequenceFlow": [
      "Fragmented workflow across systems that do not agree",
      "Repetitive manual handoffs, held together by email and spreadsheets",
      "Slow cycle time and inconsistent execution, with no measurement of either",
      "Hidden exceptions and control gaps that only surface during an audit",
      "Automation that is difficult to operate or trust, so the manual work returns"
    ],
    "consequenceNote": "Most automation that disappoints was pointed at the wrong thing. If exceptions come from inconsistent customer or supplier data, automating the workflow moves the work rather than removing it — the ambiguity has to be resolved upstream first.",
    "transformationRows": [
      {
        "before": "Manual re-keying",
        "after": "API, workflow and event automation where interfaces are stable"
      },
      {
        "before": "Email-driven handoffs",
        "after": "Explicit orchestration with named ownership"
      },
      {
        "before": "Happy-path-only bots",
        "after": "Designed exception and recovery paths"
      },
      {
        "before": "Opaque automation",
        "after": "Audit trail, monitoring and accountability"
      },
      {
        "before": "Technology-first RPA",
        "after": "Mechanism selected after process analysis"
      },
      {
        "before": "Unbounded AI actions",
        "after": "Governed agent and tool permissions with human approval"
      }
    ],
    "capabilities": [
      {
        "title": "Process discovery and opportunity scoring",
        "body": "The actual path including exceptions, scored by volume, friction, feasibility and control risk — so the first thing automated is the one consuming your people's week, not the one that demos best."
      },
      {
        "title": "Workflow redesign before automation",
        "body": "Automating a process nobody has questioned encodes its worst habits at speed. The redesign comes first, and sometimes it removes the step rather than automating it."
      },
      {
        "title": "API and event integration",
        "body": "Where stable interfaces exist, integrate through them. This is the most durable mechanism available and the first one we look for."
      },
      {
        "title": "Workflow and BPM orchestration",
        "body": "Multi-step business processes with state, retries and idempotency, so a partial failure resumes rather than duplicating work."
      },
      {
        "title": "RPA where it is genuinely appropriate",
        "body": "UI automation is the right answer when a system has no API and no realistic path to one. It is a legitimate mechanism and a poor default: bots break when screens change, which is why we place them deliberately rather than by habit."
      },
      {
        "title": "Process mining",
        "body": "Where event data exists, it exposes real bottlenecks and process variants — usually disagreeing with what everyone believed the process was."
      },
      {
        "title": "AI-assisted classification and extraction",
        "body": "Models where genuine judgment on unstructured input is needed: reading a document, classifying free text. Where the logic can be written down, a rule is cheaper, faster and explainable."
      },
      {
        "title": "Human-in-the-loop and exception handling",
        "body": "Approval queues, escalation and override boundaries, written down before build. A process without an explicit boundary escalates anyway, informally, to whoever notices."
      },
      {
        "title": "Monitoring, audit and runbooks",
        "body": "A record of what ran, what it decided and what a person overrode, plus throughput and exception-rate monitoring so drift is visible before the manual work returns."
      }
    ],
    "architecture": {
      "title": "Reference architecture",
      "description": "Systems and events trigger an integration layer, then a workflow orchestrator that holds process state so a failure resumes rather than restarting or duplicating. Rules and AI services handle the decidable cases — rules where the logic can be written down, models only where judgment on unstructured input is genuinely required. Anything outside those boundaries reaches human review and exception handling, defined before build rather than discovered after an incident, and the outcome is written back to the systems of record. Identity and access, governance, audit trail, observability and operational ownership span the whole flow. Where the process turns on who or what a record refers to, mastered entities from the Governance & MDM practice remove the ambiguity upstream instead of asking the workflow to guess.",
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
          "name": "Integration / APIs",
          "items": [
            "APIs",
            "Event streams",
            "Webhooks",
            "File transfer"
          ]
        },
        {
          "name": "Workflow orchestration",
          "items": [
            "Process state",
            "Retries and idempotency",
            "Routing",
            "SLAs"
          ]
        },
        {
          "name": "Rules / AI services",
          "items": [
            "Deterministic rules",
            "Classification",
            "Extraction",
            "Decision support"
          ]
        },
        {
          "name": "Human review & exceptions",
          "items": [
            "Approval queues",
            "Escalation boundary",
            "Overrides"
          ]
        },
        {
          "name": "Systems of record / actions",
          "items": [
            "Write-back",
            "Downstream triggers",
            "Notifications"
          ]
        }
      ],
      "crossCutting": [
        "Identity and access",
        "Governance and mastered entities",
        "Audit trail",
        "Observability",
        "Operational ownership"
      ]
    },
    "deliverables": [
      "Automation opportunity inventory and prioritisation matrix, including the candidates we advise against",
      "Current-state process and exception map, with the origin of each exception named",
      "Target workflow and control design",
      "Automation components within the agreed scope",
      "Human approval and exception model, written before build",
      "Monitoring, audit logging and operational runbooks",
      "Ownership and RACI, plus change-management guidance",
      "Backlog for the subsequent automation opportunities"
    ],
    "process": [
      {
        "step": "Discover",
        "body": "Map the process as it runs, exceptions included, and measure where the time actually goes. Perception and measurement usually disagree about which step is the problem."
      },
      {
        "step": "Design",
        "body": "Decide what to automate, what to fix upstream and what to leave deliberately manual — then choose the mechanism. Mechanism last is the whole discipline."
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
        "body": "A cross-system process where the happy path is already automated and skilled people spend their week on exceptions. The work maps where exceptions actually originate — usually upstream data rather than the process itself — and if that is the finding, automating harder makes it worse. Mechanism selection comes after that answer, not before.",
        "outcome": "What the engagement leaves behind: a process and exception map, orchestration for the repeatable cases, a written human review boundary, and monitoring on exception rate."
      },
      {
        "proofType": "priorExperience",
        "title": "Manual reconciliation as a symptom, not a task",
        "body": "A Tier 1 North American bank where investigators reconciled customer records by hand during investigations. The reconciliation looked like a process to automate; it was actually entity resolution surfacing as manual work. Fixing the matching removed the task rather than accelerating it, which is the distinction this practice exists to make."
      }
    ],
    "technologies": [
      {
        "group": "Workflow and BPM",
        "items": [
          "Camunda",
          "Temporal",
          "Azure Logic Apps",
          "Power Automate"
        ]
      },
      {
        "group": "Orchestration",
        "items": [
          "Airflow",
          "Event-driven orchestration"
        ]
      },
      {
        "group": "RPA",
        "items": [
          "UiPath",
          "Power Automate Desktop",
          "Automation Anywhere"
        ]
      },
      {
        "group": "Process mining",
        "items": [
          "Celonis",
          "Event-log analysis"
        ]
      },
      {
        "group": "Document and extraction",
        "items": [
          "Azure Document Intelligence",
          "AWS Textract",
          "OCR pipelines"
        ]
      },
      {
        "group": "Monitoring and audit",
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
        "label": "Data Integration",
        "href": "/solutions/data-integration/",
        "why": "The interfaces an orchestrated process depends on."
      },
      {
        "label": "Data Governance & MDM",
        "href": "/solutions/data-governance/",
        "why": "Mastered identities that remove the ambiguity causing exceptions."
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
        "a": "With the process consuming skilled people's time, not the one that is easiest to automate. Those are rarely the same, and starting with the easy one produces a demo rather than a saving."
      },
      {
        "q": "What if the exceptions come from bad data?",
        "a": "Then we will say so, and automating the workflow would be the wrong engagement. Ambiguous customer, product or supplier identity is the most common root cause we find, and it is resolved upstream through mastered entities rather than inside the process."
      },
      {
        "q": "Is RPA still relevant, or is it obsolete?",
        "a": "It is relevant where a system has no API and no realistic path to one, which is a real and common situation. It is a poor default because bots break when screens change. We select the mechanism after the process analysis, so RPA gets used deliberately rather than by habit."
      },
      {
        "q": "Should we use AI for this?",
        "a": "Only where genuine judgment on unstructured input is needed — reading a document, classifying free text. Where the logic can be written down, a rule is cheaper, faster, explainable and does not drift. Reaching for a model to avoid writing a rule is how automation becomes unexplainable."
      },
      {
        "q": "How do you govern automation that takes actions?",
        "a": "Permitted tools and actions, human approval boundaries, evidence and monitoring — the same controls the AI Readiness page describes, applied to a workflow. An agent or bot that can act is a higher risk tier by default, and the boundary is written before build."
      },
      {
        "q": "Will this replace jobs?",
        "a": "The work we do targets re-keying and repeated exception handling, which is usually the part of a role people are most relieved to lose. We are not the right firm for a headcount-reduction mandate, and it is fairer to say that at the outset than to discover it mid-engagement."
      },
      {
        "q": "Can you tell us the ROI up front?",
        "a": "Not honestly, and we will not publish a percentage we cannot support. The assessment establishes a measured baseline — volume, cycle time, exception rate — which is what any credible figure has to be calculated from afterwards."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Automation Opportunity Assessment",
      "cta": "Book an Automation Assessment",
      "body": "Identify and rank candidate workflows by volume, friction, feasibility, control risk and expected operational value. Includes the candidates we would advise against, and the measured baseline any future ROI claim would have to be calculated from.",
      "note": "Scope and commercial terms are agreed in writing before the assessment starts."
    }
  },
  fr: {
    "seoTitle": "Conseil en automatisation des processus",
    "seoDescription": "Automatiser le travail inter-systèmes sans dissimuler le risque dans des robots fragiles. Conception du flux, des exceptions et des contrôles d'abord, puis le bon mécanisme.",
    "eyebrow": "AUTOMATISATION DES PROCESSUS",
    "h1": "Automatisez le travail entre les systèmes, sans perdre le contrôle.",
    "subhead": "Nous identifions le travail répétitif inter-systèmes, reconcevons le flux, et mettons en place l'automatisation avec une gestion claire des exceptions, une auditabilité et une approbation humaine là où le jugement compte encore.",
    "transformation": "Manuel et éclaté → Contrôlé et automatisé",
    "signals": [
      "Les équipes ressaisissent la même information dans plusieurs systèmes.",
      "Un travail à fort volume repose sur des courriels, des tableurs et des transmissions manuelles.",
      "Les exceptions consomment plus de temps que le chemin nominal.",
      "Les robots existants cassent quand les écrans, les champs ou les processus amont changent.",
      "La propriété de l'automatisation devient floue une fois l'équipe projet partie.",
      "L'IA est proposée avant que le flux, les données et les frontières d'approbation ne soient compris."
    ],
    "consequenceFlow": [
      "Un flux éclaté entre des systèmes qui ne concordent pas",
      "Des transmissions manuelles répétitives, tenues par courriel et tableur",
      "Des délais longs et une exécution inégale, sans mesure ni de l'un ni de l'autre",
      "Des exceptions cachées et des lacunes de contrôle qui n'apparaissent qu'en audit",
      "Une automatisation difficile à exploiter ou à laquelle se fier, si bien que le travail manuel revient"
    ],
    "consequenceNote": "La plupart des automatisations décevantes visaient la mauvaise cible. Si les exceptions viennent de données client ou fournisseur incohérentes, automatiser le flux déplace le travail au lieu de le supprimer : l'ambiguïté doit être levée en amont.",
    "transformationRows": [
      {
        "before": "Ressaisie manuelle",
        "after": "Automatisation par API, flux et événements là où les interfaces sont stables"
      },
      {
        "before": "Transmissions par courriel",
        "after": "Orchestration explicite avec propriété nommée"
      },
      {
        "before": "Robots limités au chemin nominal",
        "after": "Des chemins d'exception et de rétablissement conçus"
      },
      {
        "before": "Automatisation opaque",
        "after": "Piste d'audit, supervision et responsabilité"
      },
      {
        "before": "RPA choisie d'abord pour la technologie",
        "after": "Mécanisme choisi après l'analyse du processus"
      },
      {
        "before": "Actions IA sans limites",
        "after": "Permissions d'agents et d'outils gouvernées, avec approbation humaine"
      }
    ],
    "capabilities": [
      {
        "title": "Découverte et notation des opportunités",
        "body": "Le parcours réel, exceptions comprises, noté par volume, friction, faisabilité et risque de contrôle — pour que la première chose automatisée soit celle qui consomme la semaine de vos équipes, et non celle qui se démontre le mieux."
      },
      {
        "title": "Reconception du flux avant automatisation",
        "body": "Automatiser un processus que personne n'a remis en question encode ses pires habitudes à grande vitesse. La reconception vient d'abord, et parfois elle supprime l'étape au lieu de l'automatiser."
      },
      {
        "title": "Intégration par API et événements",
        "body": "Là où des interfaces stables existent, on intègre par elles. C'est le mécanisme le plus durable disponible et le premier que nous cherchons."
      },
      {
        "title": "Orchestration workflow et BPM",
        "body": "Des processus métier multi-étapes avec état, reprises et idempotence, pour qu'une défaillance partielle reprenne au lieu de dupliquer le travail."
      },
      {
        "title": "RPA lorsque c'est réellement approprié",
        "body": "L'automatisation d'interface est la bonne réponse quand un système n'a pas d'API ni de perspective réaliste d'en avoir une. C'est un mécanisme légitime et un mauvais réflexe par défaut : les robots cassent quand les écrans changent, d'où un placement délibéré plutôt qu'habituel."
      },
      {
        "title": "Process mining",
        "body": "Là où des données d'événements existent, elles révèlent les vrais goulots et variantes du processus — en désaccord, généralement, avec l'idée que chacun s'en faisait."
      },
      {
        "title": "Classification et extraction assistées par IA",
        "body": "Des modèles là où un jugement réel sur de l'entrée non structurée est nécessaire : lire un document, classer du texte libre. Là où la logique peut s'écrire, une règle est moins chère, plus rapide et explicable."
      },
      {
        "title": "Supervision humaine et exceptions",
        "body": "Files d'approbation, escalade et frontières de correction, écrites avant la construction. Un processus sans frontière explicite escalade quand même, informellement, vers quiconque s'en aperçoit."
      },
      {
        "title": "Supervision, audit et procédures",
        "body": "Un enregistrement de ce qui a tourné, de ce qui a été décidé et de ce qu'une personne a corrigé, plus une supervision du débit et du taux d'exceptions pour rendre la dérive visible avant le retour du travail manuel."
      }
    ],
    "architecture": {
      "title": "Architecture de référence",
      "description": "Systèmes et événements déclenchent une couche d'intégration, puis un orchestrateur qui détient l'état du processus : une défaillance reprend au lieu de redémarrer ou de dupliquer. Règles et services IA traitent les cas décidables — des règles quand la logique peut s'écrire, des modèles seulement là où un jugement sur de l'entrée non structurée est réellement requis. Tout ce qui sort de ces frontières atteint la revue humaine et le traitement des exceptions, définis avant la construction plutôt que découverts après un incident, et le résultat est réécrit dans les systèmes de référence. Identité et accès, gouvernance, piste d'audit, observabilité et propriété opérationnelle traversent l'ensemble. Lorsque le processus dépend de savoir à qui ou à quoi une fiche se rapporte, les entités maîtres issues de la pratique Gouvernance et MDM lèvent l'ambiguïté en amont plutôt que de demander au flux de deviner.",
      "layers": [
        {
          "name": "Systèmes et événements",
          "items": [
            "ERP et CRM",
            "Courriels et documents",
            "Déclencheurs",
            "Planifications"
          ]
        },
        {
          "name": "Intégration / API",
          "items": [
            "API",
            "Flux d'événements",
            "Webhooks",
            "Transfert de fichiers"
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
          "name": "Règles / services IA",
          "items": [
            "Règles déterministes",
            "Classification",
            "Extraction",
            "Aide à la décision"
          ]
        },
        {
          "name": "Revue humaine et exceptions",
          "items": [
            "Files d'approbation",
            "Frontière d'escalade",
            "Corrections"
          ]
        },
        {
          "name": "Systèmes de référence / actions",
          "items": [
            "Écriture en retour",
            "Déclencheurs avals",
            "Notifications"
          ]
        }
      ],
      "crossCutting": [
        "Identité et accès",
        "Gouvernance et entités maîtres",
        "Piste d'audit",
        "Observabilité",
        "Propriété opérationnelle"
      ]
    },
    "deliverables": [
      "Inventaire des opportunités d'automatisation et matrice de priorisation, y compris les candidats que nous déconseillons",
      "Cartographie du processus et des exceptions actuelles, avec l'origine de chaque exception nommée",
      "Conception du flux et des contrôles cibles",
      "Composants d'automatisation dans le périmètre convenu",
      "Modèle d'approbation humaine et d'exceptions, écrit avant la construction",
      "Supervision, journalisation d'audit et procédures d'exploitation",
      "Propriété et RACI, plus les recommandations de conduite du changement",
      "Backlog des opportunités d'automatisation suivantes"
    ],
    "process": [
      {
        "step": "Découvrir",
        "body": "Cartographier le processus tel qu'il tourne, exceptions comprises, et mesurer où passe réellement le temps. Perception et mesure divergent en général sur l'étape problématique."
      },
      {
        "step": "Concevoir",
        "body": "Décider quoi automatiser, quoi corriger en amont et quoi laisser délibérément manuel — puis choisir le mécanisme. Le mécanisme en dernier, c'est toute la discipline."
      },
      {
        "step": "Livrer",
        "body": "Construire l'orchestration, les règles et les frontières de revue, en parallèle du processus manuel jusqu'à ce que le taux d'exceptions soit compris plutôt que supposé."
      },
      {
        "step": "Autonomiser",
        "body": "Remettre procédures, supervision et processus de modification des règles, pour qu'un nouveau type d'exception devienne une règle que votre équipe ajoute."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Schéma représentatif : la file des exceptions",
        "body": "Un processus inter-systèmes dont le chemin nominal est déjà automatisé et où des personnes qualifiées passent leur semaine sur les exceptions. Le travail cartographie l'origine réelle des exceptions — généralement les données en amont plutôt que le processus — et si c'est le constat, automatiser davantage aggrave la situation. Le choix du mécanisme vient après cette réponse, pas avant.",
        "outcome": "Ce que la mission laisse derrière elle : une cartographie du processus et des exceptions, l'orchestration des cas répétables, une frontière de revue humaine écrite, et une supervision du taux d'exceptions."
      },
      {
        "proofType": "priorExperience",
        "title": "La réconciliation manuelle comme symptôme, pas comme tâche",
        "body": "Une banque nord-américaine de premier plan où les enquêteurs réconciliaient à la main les enregistrements clients. La réconciliation ressemblait à une tâche à automatiser ; c'était en réalité de la résolution d'entités affleurant sous forme de travail manuel. Corriger le rapprochement a supprimé la tâche plutôt que de l'accélérer."
      }
    ],
    "technologies": [
      {
        "group": "Workflow et BPM",
        "items": [
          "Camunda",
          "Temporal",
          "Azure Logic Apps",
          "Power Automate"
        ]
      },
      {
        "group": "Orchestration",
        "items": [
          "Airflow",
          "Orchestration événementielle"
        ]
      },
      {
        "group": "RPA",
        "items": [
          "UiPath",
          "Power Automate Desktop",
          "Automation Anywhere"
        ]
      },
      {
        "group": "Process mining",
        "items": [
          "Celonis",
          "Analyse de journaux d'événements"
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
    "practitionerNote": "Les travaux d'automatisation sont dirigés par notre associé principal. Ce que nous apportons de plus utile ici est la rigueur de dire quand un problème de processus est en réalité un problème de données — un jugement bâti sur la résolution d'entités et le MDM pour des institutions de premier plan, et qui évite d'automatiser la mauvaise chose.",
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
        "label": "Intégration des données",
        "href": "/solutions/data-integration/",
        "why": "Les interfaces dont dépend un processus orchestré."
      },
      {
        "label": "Gouvernance des données et MDM",
        "href": "/solutions/data-governance/",
        "why": "Les identités maîtres qui lèvent l'ambiguïté à l'origine des exceptions."
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
        "a": "Alors nous le dirons, et automatiser le flux serait la mauvaise mission. L'ambiguïté d'identité client, produit ou fournisseur est la cause racine la plus fréquente, et elle se résout en amont par des entités maîtres."
      },
      {
        "q": "La RPA est-elle encore pertinente, ou obsolète ?",
        "a": "Elle est pertinente là où un système n'a pas d'API ni de perspective réaliste d'en avoir une, ce qui est courant. C'est un mauvais réflexe par défaut car les robots cassent quand les écrans changent. Nous choisissons le mécanisme après l'analyse du processus, pour que la RPA soit utilisée délibérément."
      },
      {
        "q": "Faut-il utiliser l'IA pour cela ?",
        "a": "Seulement là où un jugement réel sur de l'entrée non structurée est nécessaire. Là où la logique peut s'écrire, une règle est moins chère, plus rapide, explicable et ne dérive pas."
      },
      {
        "q": "Comment gouvernez-vous une automatisation qui exécute des actions ?",
        "a": "Outils et actions autorisés, frontières d'approbation humaine, preuves et supervision — les contrôles décrits sur la page Préparation à l'IA, appliqués à un flux. Un agent ou robot capable d'agir relève par défaut d'un niveau de risque supérieur."
      },
      {
        "q": "Cela va-t-il supprimer des postes ?",
        "a": "Nos travaux visent la ressaisie et le traitement répété d'exceptions, c'est-à-dire la partie du poste que les gens sont soulagés de perdre. Nous ne sommes pas le bon cabinet pour un mandat de réduction d'effectifs, et il est plus loyal de le dire d'emblée."
      },
      {
        "q": "Pouvez-vous nous donner le retour sur investissement dès le départ ?",
        "a": "Pas honnêtement, et nous ne publierons pas un pourcentage que nous ne pouvons pas étayer. L'évaluation établit une base mesurée — volume, temps de cycle, taux d'exceptions — à partir de laquelle tout chiffre crédible devra être calculé ensuite."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Évaluation des opportunités d'automatisation",
      "cta": "Réserver une évaluation d'automatisation",
      "body": "Identifier et classer les flux candidats par volume, friction, faisabilité, risque de contrôle et valeur opérationnelle attendue. Inclut les candidats que nous déconseillons, et la base mesurée à partir de laquelle tout futur chiffre de ROI devrait être calculé.",
      "note": "Le périmètre et les conditions commerciales sont convenus par écrit avant le démarrage."
    }
  },
  es: {
    "seoTitle": "Consultoría en automatización de procesos",
    "seoDescription": "Automatizar el trabajo entre sistemas sin esconder el riesgo en bots frágiles. Diseño de flujo, excepciones y controles primero; después el mecanismo adecuado.",
    "eyebrow": "AUTOMATIZACIÓN DE PROCESOS",
    "h1": "Automatiza el trabajo entre sistemas, sin perder el control.",
    "subhead": "Identificamos el trabajo repetitivo entre sistemas, rediseñamos el flujo e implementamos automatización con gestión clara de excepciones, auditabilidad y aprobación humana donde el criterio sigue importando.",
    "transformation": "Manual y fragmentado → Controlado y automatizado",
    "signals": [
      "Los equipos re-teclean la misma información en varios sistemas.",
      "El trabajo de alto volumen depende de correo, hojas de cálculo y traspasos manuales.",
      "Las excepciones consumen más tiempo que el camino feliz.",
      "Los bots existentes se rompen cuando cambian pantallas, campos o procesos aguas arriba.",
      "La propiedad de la automatización queda difusa cuando el equipo de proyecto se va.",
      "Se propone IA antes de entender el flujo, los datos y las fronteras de aprobación."
    ],
    "consequenceFlow": [
      "Flujo fragmentado entre sistemas que no coinciden",
      "Traspasos manuales repetitivos, sostenidos por correo y hojas de cálculo",
      "Ciclos lentos y ejecución inconsistente, sin medición de ninguno de los dos",
      "Excepciones ocultas y brechas de control que solo salen en una auditoría",
      "Automatización difícil de operar o de creer, así que el trabajo manual vuelve"
    ],
    "consequenceNote": "La mayoría de las automatizaciones decepcionantes apuntaban a lo equivocado. Si las excepciones vienen de datos de cliente o proveedor inconsistentes, automatizar el flujo mueve el trabajo en lugar de eliminarlo: la ambigüedad hay que resolverla aguas arriba.",
    "transformationRows": [
      {
        "before": "Re-teclear manualmente",
        "after": "Automatización por API, flujo y eventos donde las interfaces son estables"
      },
      {
        "before": "Traspasos por correo",
        "after": "Orquestación explícita con propiedad nombrada"
      },
      {
        "before": "Bots solo para el camino feliz",
        "after": "Rutas de excepción y recuperación diseñadas"
      },
      {
        "before": "Automatización opaca",
        "after": "Rastro de auditoría, monitorización y responsabilidad"
      },
      {
        "before": "RPA elegida por tecnología primero",
        "after": "Mecanismo elegido tras el análisis del proceso"
      },
      {
        "before": "Acciones de IA sin límites",
        "after": "Permisos de agentes y herramientas gobernados, con aprobación humana"
      }
    ],
    "capabilities": [
      {
        "title": "Descubrimiento y puntuación de oportunidades",
        "body": "El recorrido real incluidas las excepciones, puntuado por volumen, fricción, viabilidad y riesgo de control, para que lo primero automatizado sea lo que consume la semana de tu gente, no lo que mejor se demuestra."
      },
      {
        "title": "Rediseño del flujo antes de automatizar",
        "body": "Automatizar un proceso que nadie ha cuestionado codifica sus peores hábitos a toda velocidad. El rediseño va primero, y a veces elimina el paso en lugar de automatizarlo."
      },
      {
        "title": "Integración por API y eventos",
        "body": "Donde existen interfaces estables, se integra por ellas. Es el mecanismo más duradero disponible y el primero que buscamos."
      },
      {
        "title": "Orquestación de workflow y BPM",
        "body": "Procesos de negocio de varios pasos con estado, reintentos e idempotencia, para que un fallo parcial reanude en lugar de duplicar trabajo."
      },
      {
        "title": "RPA cuando es genuinamente apropiada",
        "body": "La automatización de interfaz es la respuesta correcta cuando un sistema no tiene API ni una vía realista de tenerla. Es un mecanismo legítimo y un mal valor por defecto: los bots se rompen cuando cambian las pantallas, por eso los colocamos deliberadamente y no por costumbre."
      },
      {
        "title": "Minería de procesos",
        "body": "Donde existen datos de eventos, exponen los cuellos de botella y variantes reales del proceso, normalmente en desacuerdo con lo que todos creían."
      },
      {
        "title": "Clasificación y extracción asistidas por IA",
        "body": "Modelos donde hace falta criterio real sobre entrada no estructurada: leer un documento, clasificar texto libre. Donde la lógica se puede escribir, una regla es más barata, más rápida y explicable."
      },
      {
        "title": "Revisión humana y excepciones",
        "body": "Colas de aprobación, escalado y fronteras de anulación, escritas antes de construir. Un proceso sin frontera explícita escala igualmente, de forma informal."
      },
      {
        "title": "Monitorización, auditoría y procedimientos",
        "body": "Un registro de qué se ejecutó, qué decidió y qué anuló una persona, más monitorización de rendimiento y tasa de excepciones para que la deriva sea visible antes de que vuelva el trabajo manual."
      }
    ],
    "architecture": {
      "title": "Arquitectura de referencia",
      "description": "Sistemas y eventos disparan una capa de integración y después un orquestador que guarda el estado del proceso, de modo que un fallo reanuda en lugar de reiniciar o duplicar. Reglas y servicios de IA atienden los casos decidibles: reglas donde la lógica se puede escribir, modelos solo donde hace falta criterio sobre entrada no estructurada. Todo lo que queda fuera llega a revisión humana y gestión de excepciones, definidas antes de construir y no descubiertas tras un incidente, y el resultado se escribe de vuelta en los sistemas de registro. Identidad y acceso, gobernanza, rastro de auditoría, observabilidad y propiedad operativa atraviesan todo el flujo. Cuando el proceso depende de a quién o a qué se refiere un registro, las entidades maestras de la práctica de Gobernanza y MDM eliminan la ambigüedad aguas arriba en lugar de pedirle al flujo que adivine.",
      "layers": [
        {
          "name": "Sistemas y eventos",
          "items": [
            "ERP y CRM",
            "Correo y documentos",
            "Disparadores",
            "Planificaciones"
          ]
        },
        {
          "name": "Integración / API",
          "items": [
            "API",
            "Flujos de eventos",
            "Webhooks",
            "Transferencia de ficheros"
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
          "name": "Reglas / servicios de IA",
          "items": [
            "Reglas deterministas",
            "Clasificación",
            "Extracción",
            "Apoyo a la decisión"
          ]
        },
        {
          "name": "Revisión humana y excepciones",
          "items": [
            "Colas de aprobación",
            "Frontera de escalado",
            "Anulaciones"
          ]
        },
        {
          "name": "Sistemas de registro / acciones",
          "items": [
            "Escritura de vuelta",
            "Disparadores aguas abajo",
            "Notificaciones"
          ]
        }
      ],
      "crossCutting": [
        "Identidad y acceso",
        "Gobernanza y entidades maestras",
        "Rastro de auditoría",
        "Observabilidad",
        "Propiedad operativa"
      ]
    },
    "deliverables": [
      "Inventario de oportunidades de automatización y matriz de priorización, incluidos los candidatos que desaconsejamos",
      "Mapa de proceso y excepciones actuales, con el origen de cada excepción nombrado",
      "Diseño del flujo y los controles objetivo",
      "Componentes de automatización dentro del alcance acordado",
      "Modelo de aprobación humana y excepciones, escrito antes de construir",
      "Monitorización, registro de auditoría y procedimientos operativos",
      "Propiedad y RACI, más guía de gestión del cambio",
      "Backlog de las siguientes oportunidades de automatización"
    ],
    "process": [
      {
        "step": "Descubrir",
        "body": "Mapear el proceso tal como corre, excepciones incluidas, y medir dónde se va realmente el tiempo. Percepción y medición suelen discrepar sobre qué paso es el problema."
      },
      {
        "step": "Diseñar",
        "body": "Decidir qué automatizar, qué arreglar aguas arriba y qué dejar deliberadamente manual, y después elegir el mecanismo. El mecanismo al final es toda la disciplina."
      },
      {
        "step": "Entregar",
        "body": "Construir la orquestación, las reglas y las fronteras de revisión, corriendo junto al proceso manual hasta que la tasa de excepciones se entienda en lugar de suponerse."
      },
      {
        "step": "Habilitar",
        "body": "Entregar procedimientos, monitorización y el proceso de cambio de reglas, para que un tipo nuevo de excepción sea una regla que añade tu equipo."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Patrón representativo: la cola de excepciones",
        "body": "Un proceso entre sistemas cuyo camino feliz ya está automatizado y donde personas cualificadas dedican la semana a las excepciones. El trabajo mapea dónde nacen realmente las excepciones —normalmente en los datos de origen y no en el proceso— y si ese es el hallazgo, automatizar más lo empeora. La elección del mecanismo viene después de esa respuesta, no antes.",
        "outcome": "Lo que deja el proyecto: mapa de proceso y excepciones, orquestación de los casos repetibles, una frontera de revisión humana escrita y monitorización de la tasa de excepciones."
      },
      {
        "proofType": "priorExperience",
        "title": "La reconciliación manual como síntoma, no como tarea",
        "body": "Un banco norteamericano de primer nivel donde los investigadores reconciliaban registros de cliente a mano. La reconciliación parecía una tarea que automatizar; en realidad era resolución de entidades aflorando como trabajo manual. Arreglar la coincidencia eliminó la tarea en lugar de acelerarla."
      }
    ],
    "technologies": [
      {
        "group": "Workflow y BPM",
        "items": [
          "Camunda",
          "Temporal",
          "Azure Logic Apps",
          "Power Automate"
        ]
      },
      {
        "group": "Orquestación",
        "items": [
          "Airflow",
          "Orquestación por eventos"
        ]
      },
      {
        "group": "RPA",
        "items": [
          "UiPath",
          "Power Automate Desktop",
          "Automation Anywhere"
        ]
      },
      {
        "group": "Minería de procesos",
        "items": [
          "Celonis",
          "Análisis de registros de eventos"
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
    "practitionerNote": "El trabajo de automatización lo dirige nuestro socio principal. Lo más útil que aportamos aquí es la disciplina de decir cuándo un problema de proceso es en realidad un problema de datos: un criterio construido sobre resolución de entidades y MDM para instituciones de primer nivel.",
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
        "label": "Integración de datos",
        "href": "/solutions/data-integration/",
        "why": "Las interfaces de las que depende un proceso orquestado."
      },
      {
        "label": "Gobernanza de datos y MDM",
        "href": "/solutions/data-governance/",
        "why": "Identidades maestras que eliminan la ambigüedad que causa excepciones."
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
        "a": "Entonces lo diremos, y automatizar el flujo sería el proyecto equivocado. La identidad ambigua de cliente, producto o proveedor es la causa raíz más común, y se resuelve aguas arriba con entidades maestras."
      },
      {
        "q": "¿Sigue siendo relevante la RPA, o está obsoleta?",
        "a": "Es relevante donde un sistema no tiene API ni una vía realista de tenerla, algo real y común. Es un mal valor por defecto porque los bots se rompen cuando cambian las pantallas. Elegimos el mecanismo tras el análisis del proceso, así que la RPA se usa deliberadamente."
      },
      {
        "q": "¿Deberíamos usar IA para esto?",
        "a": "Solo donde haga falta criterio real sobre entrada no estructurada. Donde la lógica se puede escribir, una regla es más barata, más rápida, explicable y no deriva."
      },
      {
        "q": "¿Cómo gobernáis la automatización que ejecuta acciones?",
        "a": "Herramientas y acciones permitidas, fronteras de aprobación humana, evidencia y monitorización: los mismos controles que describe la página de Preparación para IA, aplicados a un flujo. Un agente o bot que puede actuar es un nivel de riesgo superior por defecto."
      },
      {
        "q": "¿Esto va a eliminar puestos?",
        "a": "El trabajo apunta al re-tecleo y al manejo repetido de excepciones, que suele ser la parte del puesto que la gente agradece perder. No somos la firma adecuada para un mandato de reducción de plantilla, y es más justo decirlo al principio."
      },
      {
        "q": "¿Podéis decirnos el ROI de entrada?",
        "a": "No con honestidad, y no publicaremos un porcentaje que no podamos sustentar. La evaluación establece una base medida —volumen, tiempo de ciclo, tasa de excepciones— desde la que cualquier cifra creíble tendría que calcularse después."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Evaluación de Oportunidades de Automatización",
      "cta": "Reservar una evaluación de automatización",
      "body": "Identificar y clasificar los flujos candidatos por volumen, fricción, viabilidad, riesgo de control y valor operativo esperado. Incluye los candidatos que desaconsejaríamos y la base medida desde la que habría que calcular cualquier ROI futuro.",
      "note": "El alcance y las condiciones comerciales se acuerdan por escrito antes de empezar."
    }
  },
  pt: {
    "seoTitle": "Consultoria em automação de processos",
    "seoDescription": "Automatizar o trabalho entre sistemas sem esconder risco em bots frágeis. Desenho de fluxo, exceções e controles primeiro; depois o mecanismo certo.",
    "eyebrow": "AUTOMAÇÃO DE PROCESSOS",
    "h1": "Automatize o trabalho entre sistemas, sem perder o controle.",
    "subhead": "Identificamos o trabalho repetitivo entre sistemas, redesenhamos o fluxo e implementamos automação com tratamento claro de exceções, auditabilidade e aprovação humana onde o julgamento ainda importa.",
    "transformation": "Manual e fragmentado → Controlado e automatizado",
    "signals": [
      "As equipes redigitam a mesma informação em vários sistemas.",
      "O trabalho de alto volume depende de e-mail, planilhas e repasses manuais.",
      "As exceções consomem mais tempo que o caminho feliz.",
      "Os bots existentes quebram quando telas, campos ou processos a montante mudam.",
      "A propriedade da automação fica indefinida quando a equipe de projeto sai.",
      "IA é proposta antes de o fluxo, os dados e as fronteiras de aprovação serem entendidos."
    ],
    "consequenceFlow": [
      "Fluxo fragmentado entre sistemas que não concordam",
      "Repasses manuais repetitivos, sustentados por e-mail e planilha",
      "Ciclos lentos e execução inconsistente, sem medição de nenhum dos dois",
      "Exceções ocultas e lacunas de controle que só aparecem numa auditoria",
      "Automação difícil de operar ou confiar, e então o trabalho manual volta"
    ],
    "consequenceNote": "A maioria das automações decepcionantes apontou para a coisa errada. Se as exceções vêm de dados de cliente ou fornecedor inconsistentes, automatizar o fluxo move o trabalho em vez de removê-lo: a ambiguidade precisa ser resolvida a montante.",
    "transformationRows": [
      {
        "before": "Redigitação manual",
        "after": "Automação por API, fluxo e eventos onde as interfaces são estáveis"
      },
      {
        "before": "Repasses por e-mail",
        "after": "Orquestração explícita com propriedade nomeada"
      },
      {
        "before": "Bots só para o caminho feliz",
        "after": "Caminhos de exceção e recuperação desenhados"
      },
      {
        "before": "Automação opaca",
        "after": "Trilha de auditoria, monitoramento e responsabilidade"
      },
      {
        "before": "RPA escolhida pela tecnologia primeiro",
        "after": "Mecanismo escolhido após a análise do processo"
      },
      {
        "before": "Ações de IA sem limites",
        "after": "Permissões de agentes e ferramentas governadas, com aprovação humana"
      }
    ],
    "capabilities": [
      {
        "title": "Descoberta e pontuação de oportunidades",
        "body": "O caminho real incluindo exceções, pontuado por volume, atrito, viabilidade e risco de controle, para que a primeira coisa automatizada seja a que consome a semana das suas pessoas, não a que melhor demonstra."
      },
      {
        "title": "Redesenho do fluxo antes da automação",
        "body": "Automatizar um processo que ninguém questionou codifica seus piores hábitos em alta velocidade. O redesenho vem primeiro, e às vezes remove o passo em vez de automatizá-lo."
      },
      {
        "title": "Integração por API e eventos",
        "body": "Onde existem interfaces estáveis, integra-se por elas. É o mecanismo mais durável disponível e o primeiro que procuramos."
      },
      {
        "title": "Orquestração de workflow e BPM",
        "body": "Processos de negócio de vários passos com estado, retentativas e idempotência, para que uma falha parcial retome em vez de duplicar trabalho."
      },
      {
        "title": "RPA quando é genuinamente apropriada",
        "body": "A automação de interface é a resposta certa quando um sistema não tem API nem caminho realista para uma. É um mecanismo legítimo e um mau padrão: bots quebram quando as telas mudam, por isso os colocamos deliberadamente e não por hábito."
      },
      {
        "title": "Mineração de processos",
        "body": "Onde há dados de eventos, eles expõem os gargalos e variantes reais do processo, normalmente discordando do que todos acreditavam."
      },
      {
        "title": "Classificação e extração assistidas por IA",
        "body": "Modelos onde é preciso julgamento real sobre entrada não estruturada: ler um documento, classificar texto livre. Onde a lógica pode ser escrita, uma regra é mais barata, mais rápida e explicável."
      },
      {
        "title": "Revisão humana e exceções",
        "body": "Filas de aprovação, escalonamento e fronteiras de sobrescrita, escritas antes de construir. Um processo sem fronteira explícita escala mesmo assim, informalmente."
      },
      {
        "title": "Monitoramento, auditoria e runbooks",
        "body": "Um registro do que rodou, do que decidiu e do que uma pessoa sobrescreveu, além de monitoramento de vazão e taxa de exceções para que o desvio fique visível antes do retorno do trabalho manual."
      }
    ],
    "architecture": {
      "title": "Arquitetura de referência",
      "description": "Sistemas e eventos disparam uma camada de integração e então um orquestrador que guarda o estado do processo, de modo que uma falha retoma em vez de reiniciar ou duplicar. Regras e serviços de IA tratam os casos decidíveis: regras onde a lógica pode ser escrita, modelos apenas onde é preciso julgamento sobre entrada não estruturada. Tudo que fica fora chega à revisão humana e ao tratamento de exceções, definidos antes de construir e não descobertos após um incidente, e o resultado é gravado de volta nos sistemas de registro. Identidade e acesso, governança, trilha de auditoria, observabilidade e propriedade operacional atravessam todo o fluxo. Quando o processo depende de a quem ou a que um registro se refere, as entidades mestras da prática de Governança e MDM removem a ambiguidade a montante em vez de pedir ao fluxo que adivinhe.",
      "layers": [
        {
          "name": "Sistemas e eventos",
          "items": [
            "ERP e CRM",
            "E-mail e documentos",
            "Gatilhos",
            "Agendamentos"
          ]
        },
        {
          "name": "Integração / APIs",
          "items": [
            "APIs",
            "Fluxos de eventos",
            "Webhooks",
            "Transferência de arquivos"
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
          "name": "Regras / serviços de IA",
          "items": [
            "Regras determinísticas",
            "Classificação",
            "Extração",
            "Apoio à decisão"
          ]
        },
        {
          "name": "Revisão humana e exceções",
          "items": [
            "Filas de aprovação",
            "Fronteira de escalonamento",
            "Sobrescritas"
          ]
        },
        {
          "name": "Sistemas de registro / ações",
          "items": [
            "Gravação de volta",
            "Gatilhos a jusante",
            "Notificações"
          ]
        }
      ],
      "crossCutting": [
        "Identidade e acesso",
        "Governança e entidades mestras",
        "Trilha de auditoria",
        "Observabilidade",
        "Propriedade operacional"
      ]
    },
    "deliverables": [
      "Inventário de oportunidades de automação e matriz de priorização, incluindo os candidatos que desaconselhamos",
      "Mapa de processo e exceções atuais, com a origem de cada exceção nomeada",
      "Desenho do fluxo e dos controles alvo",
      "Componentes de automação dentro do escopo acordado",
      "Modelo de aprovação humana e exceções, escrito antes de construir",
      "Monitoramento, log de auditoria e runbooks operacionais",
      "Propriedade e RACI, mais orientação de gestão de mudança",
      "Backlog das próximas oportunidades de automação"
    ],
    "process": [
      {
        "step": "Descobrir",
        "body": "Mapear o processo como ele roda, exceções incluídas, e medir para onde o tempo realmente vai. Percepção e medição costumam discordar sobre qual passo é o problema."
      },
      {
        "step": "Projetar",
        "body": "Decidir o que automatizar, o que corrigir a montante e o que deixar deliberadamente manual, e então escolher o mecanismo. Mecanismo por último é toda a disciplina."
      },
      {
        "step": "Entregar",
        "body": "Construir a orquestração, as regras e as fronteiras de revisão, rodando ao lado do processo manual até que a taxa de exceções seja compreendida em vez de suposta."
      },
      {
        "step": "Habilitar",
        "body": "Entregar runbooks, monitoramento e o processo de mudança de regras, para que um novo tipo de exceção vire uma regra que sua equipe adiciona."
      }
    ],
    "proof": [
      {
        "proofType": "representative",
        "title": "Padrão representativo: a fila de exceções",
        "body": "Um processo entre sistemas cujo caminho feliz já está automatizado e onde pessoas qualificadas passam a semana em exceções. O trabalho mapeia onde as exceções realmente nascem — normalmente nos dados de origem e não no processo — e se for esse o achado, automatizar mais piora. A escolha do mecanismo vem depois dessa resposta, não antes.",
        "outcome": "O que o projeto deixa: mapa de processo e exceções, orquestração dos casos repetíveis, uma fronteira de revisão humana escrita e monitoramento da taxa de exceções."
      },
      {
        "proofType": "priorExperience",
        "title": "Reconciliação manual como sintoma, não como tarefa",
        "body": "Um banco norte-americano de primeira linha onde investigadores reconciliavam registros de cliente à mão. A reconciliação parecia uma tarefa a automatizar; era, na verdade, resolução de entidades aflorando como trabalho manual. Corrigir a correspondência removeu a tarefa em vez de acelerá-la."
      }
    ],
    "technologies": [
      {
        "group": "Workflow e BPM",
        "items": [
          "Camunda",
          "Temporal",
          "Azure Logic Apps",
          "Power Automate"
        ]
      },
      {
        "group": "Orquestração",
        "items": [
          "Airflow",
          "Orquestração por eventos"
        ]
      },
      {
        "group": "RPA",
        "items": [
          "UiPath",
          "Power Automate Desktop",
          "Automation Anywhere"
        ]
      },
      {
        "group": "Mineração de processos",
        "items": [
          "Celonis",
          "Análise de logs de eventos"
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
    "practitionerNote": "O trabalho de automação é liderado pelo nosso sócio principal. O mais útil que trazemos aqui é a disciplina de dizer quando um problema de processo é na verdade um problema de dados: um julgamento construído sobre resolução de entidades e MDM para instituições de primeira linha.",
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
        "label": "Integração de dados",
        "href": "/solutions/data-integration/",
        "why": "As interfaces das quais um processo orquestrado depende."
      },
      {
        "label": "Governança de dados e MDM",
        "href": "/solutions/data-governance/",
        "why": "Identidades mestras que removem a ambiguidade que causa exceções."
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
        "a": "Então diremos isso, e automatizar o fluxo seria o projeto errado. Identidade ambígua de cliente, produto ou fornecedor é a causa raiz mais comum, e se resolve a montante com entidades mestras."
      },
      {
        "q": "RPA ainda é relevante ou está obsoleta?",
        "a": "É relevante onde um sistema não tem API nem caminho realista para uma, o que é real e comum. É um mau padrão porque bots quebram quando as telas mudam. Escolhemos o mecanismo após a análise do processo, então RPA é usada deliberadamente."
      },
      {
        "q": "Devemos usar IA para isso?",
        "a": "Apenas onde houver necessidade real de julgamento sobre entrada não estruturada. Onde a lógica pode ser escrita, uma regra é mais barata, mais rápida, explicável e não desvia."
      },
      {
        "q": "Como vocês governam automação que executa ações?",
        "a": "Ferramentas e ações permitidas, fronteiras de aprovação humana, evidência e monitoramento: os mesmos controles que a página de Prontidão para IA descreve, aplicados a um fluxo. Um agente ou bot que pode agir é um nível de risco superior por padrão."
      },
      {
        "q": "Isso vai eliminar postos de trabalho?",
        "a": "O trabalho mira a redigitação e o tratamento repetido de exceções, que costuma ser a parte do cargo que as pessoas ficam aliviadas de perder. Não somos a firma certa para um mandato de redução de quadro, e é mais justo dizer isso no início."
      },
      {
        "q": "Vocês conseguem dizer o ROI logo de início?",
        "a": "Não honestamente, e não publicaremos um percentual que não possamos sustentar. A avaliação estabelece uma linha de base medida — volume, tempo de ciclo, taxa de exceções — a partir da qual qualquer número crível teria de ser calculado depois."
      }
    ],
    "entryOffer": {
      "id": "automation_opportunity_assessment",
      "title": "Avaliação de Oportunidades de Automação",
      "cta": "Agendar uma avaliação de automação",
      "body": "Identificar e classificar fluxos candidatos por volume, atrito, viabilidade, risco de controle e valor operacional esperado. Inclui os candidatos que desaconselharíamos e a linha de base medida a partir da qual qualquer ROI futuro teria de ser calculado.",
      "note": "Escopo e condições comerciais são acordados por escrito antes do início."
    }
  },
};
