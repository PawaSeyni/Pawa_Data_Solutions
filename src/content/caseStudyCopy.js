// Case study copy, per locale. Sprint 7 follow-up.
//
// Only language lives here. Identity — slug, disclosure, provenance, solutions,
// metrics — stays in src/lib/caseStudies.js, so a translation cannot change
// which page it is or what KIND of proof it claims. A French reader and an
// English reader must be looking at the same disclosed object.
//
// English is not repeated: caseStudyBySlug falls back to the entry itself.

export const CASE_STUDY_COPY = {
  "fr": {
    "entity-resolution-financial-crime": {
      "headline": "Résolution d'entités pour les enquêtes en criminalité financière",
      "client": "Une banque nord-américaine de premier plan",
      "sector": "Services financiers",
      "challenge": "La banque ne pouvait pas déterminer de façon fiable quand deux fiches client désignaient la même personne. La banque de détail, l'entreprise et la gestion de patrimoine détenaient chacune sa propre version d'un client, et l'équipe criminalité financière les réconciliait à la main pendant les enquêtes.",
      "whyItMattered": "Les obligations KYC et LCB ne s'adaptent pas à l'organisation interne d'une banque. Un enquêteur qui ne voit pas un client dans son ensemble ne peut pas l'évaluer, et l'écart se révèle précisément dans la situation où il coûte le plus cher : lorsqu'un régulateur demande comment une décision a été prise.",
      "approach": "Nous avons commencé par le problème de rapprochement plutôt que par la plateforme. Le profilage des données réelles a montré pourquoi les enregistrements ne se rapprochaient pas : conventions de noms selon les langues, adresses saisies selon des normes différentes, identifiants logés dans des champs jamais prévus pour cela. Les règles ont ensuite été ajustées sur des cas connus que l'équipe d'enquête maîtrisait déjà, afin que les résultats puissent être jugés par ceux qui connaissaient la bonne réponse.",
      "architecture": [
        "Passe de profilage sur les systèmes sources contributeurs pour quantifier les vrais modes d'échec du rapprochement",
        "Règles déterministes pour les identifiants, score probabiliste pour le reste",
        "Une fiche client maîtresse avec des règles de survivance convenues par attribut, et non par système",
        "File d'intendance pour la bande intermédiaire, afin qu'un rapprochement ambigu arrive devant une personne et non devant un seuil",
        "Traçabilité conservée de la fiche maîtresse jusqu'à chaque source contributrice"
      ],
      "capability": "Les enquêteurs pouvaient obtenir une vue client unique sur toutes les lignes métier, et montrer de quelle source provenait chaque attribut.",
      "outcome": "La résolution d'entités est passée d'une étape de réconciliation manuelle interne aux enquêtes à une capacité maintenue sur laquelle l'équipe criminalité financière pouvait s'appuyer. La traçabilité vers la source permettait d'expliquer un rapprochement au lieu de l'affirmer.",
      "card": {
        "problem": "Des fiches client dupliquées entre détail, entreprise et gestion de patrimoine, réconciliées à la main pendant les enquêtes.",
        "intervention": "Traiter d'abord le problème de rapprochement : profiler les vrais modes d'échec, puis ajuster les règles sur des cas dont l'équipe connaissait déjà la réponse.",
        "outcome": "Une vue client unique pour les enquêtes en criminalité financière, avec la traçabilité vers chaque source contributrice."
      }
    },
    "integration-platform-consolidation": {
      "headline": "Consolider des piles d'intégration qui se chevauchent",
      "client": "Un assureur nord-américain",
      "sector": "Plateforme de données et intégration",
      "challenge": "Des années d'acquisitions avaient laissé l'assureur exploiter plusieurs piles d'intégration côte à côte. Les mêmes données de contrats circulaient entre les deux mêmes systèmes par trois routes différentes, chacune construite par une équipe distincte, aucune documentée d'une façon à laquelle les autres se fiaient.",
      "whyItMattered": "Le coût n'était pas celui des licences. C'était que personne ne pouvait dire avec certitude quel pipeline faisait autorité : chaque question aval sur un chiffre se transformait en fouille archéologique, et chaque demande de changement était chiffrée au regard du risque de casser quelque chose d'invisible.",
      "approach": "Nous avons cartographié ce qui tournait réellement avant de proposer un remplacement, y compris les traitements que tout le monde croyait éteints. La consolidation a été séquencée par risque métier plutôt que par commodité technique : les flux alimentant le reporting réglementaire et financier sont passés en dernier, une fois le schéma éprouvé sur des données moins sensibles.",
      "architecture": [
        "Inventaire complet des traitements d'intégration en cours, avec identification des consommateurs de chaque sortie",
        "Un schéma d'ingestion unique défini une fois et appliqué par source, plutôt que par projet",
        "Exécution en parallèle pour chaque flux migré, avec comparaison des sorties face au pipeline remplacé",
        "Décommissionnement traité comme une étape de livraison avec sa propre validation, et non comme du nettoyage"
      ],
      "capability": "Une seule façon documentée d'intégrer une nouvelle source, et une réponse unique à la question de savoir quel pipeline détient un flux donné.",
      "outcome": "Les routes en double ont été retirées plutôt que laissées en marche à côté de leur remplaçante, ce qui est le mode d'échec habituel d'une consolidation. Intégrer une nouvelle source est devenu un schéma connu plutôt qu'un projet.",
      "card": {
        "problem": "Plusieurs piles d'intégration côte à côte après des années d'acquisitions, sans réponse convenue sur le pipeline faisant autorité.",
        "intervention": "Inventorier ce qui tournait réellement, puis consolider par ordre de risque métier plutôt que de commodité technique.",
        "outcome": "Un schéma documenté pour intégrer une source, et des routes en double réellement retirées plutôt que laissées en marche."
      }
    },
    "governance-regulatory-reporting": {
      "headline": "Rendre explicables des chiffres réglementaires",
      "client": "Une institution financière canadienne",
      "sector": "Gouvernance et analytique",
      "challenge": "Les chiffres du reporting réglementaire étaient produits dans les délais, mais l'institution ne pouvait pas toujours démontrer comment un chiffre donné avait été dérivé. Les définitions vivaient dans la tête des analystes et dans des formules de tableur jamais consignées.",
      "whyItMattered": "Un rapport juste mais inexplicable est une observation d'audit en devenir. L'exposition ne tenait pas au calcul, mais à l'impossibilité de répondre aux questions de suivi sur la provenance sans mobiliser des profils seniors pendant plusieurs jours.",
      "approach": "Nous avons traité les définitions comme le livrable plutôt que comme de la documentation. Chaque mesure publiée a été retracée à travers ses transformations jusqu'à la source, et la définition métier associée capturée avec un propriétaire nommé. Lorsque deux domaines divergeaient sur une définition, ce désaccord a été mis au jour et tranché plutôt que moyenné.",
      "architecture": [
        "Capture automatisée de la traçabilité, de la couche de reporting aux transformations puis au système source",
        "Un glossaire métier avec un propriétaire responsable par terme, et non un comité",
        "Des règles de qualité rattachées aux définitions elles-mêmes, afin qu'une violation désigne le propriétaire",
        "Des mesures de reporting reliées à leurs termes de glossaire, rendant le chemin de dérivation navigable"
      ],
      "capability": "L'institution pouvait montrer le chemin de dérivation d'un chiffre publié sans le reconstituer à la main.",
      "outcome": "Les questions de provenance sont devenues une consultation au lieu d'une enquête. Les désaccords de définition entre domaines métier ont émergé pendant les travaux plutôt qu'en revue, ce qui est le moins coûteux des deux moments.",
      "card": {
        "problem": "Des chiffres réglementaires produits à temps dont la dérivation ne pouvait pas toujours être démontrée.",
        "intervention": "Retracer chaque mesure publiée jusqu'à la source et capturer la définition métier avec un propriétaire nommé.",
        "outcome": "Les questions de provenance sont devenues une consultation plutôt qu'une enquête de plusieurs jours."
      }
    }
  },
  "es": {
    "entity-resolution-financial-crime": {
      "headline": "Resolución de entidades para investigaciones de delitos financieros",
      "client": "Un banco norteamericano de primer nivel",
      "sector": "Servicios financieros",
      "challenge": "El banco no podía determinar de forma fiable cuándo dos registros de cliente eran la misma persona. Banca minorista, empresarial y patrimonial guardaban cada una su propia versión de un cliente, y el equipo de delitos financieros las reconciliaba a mano durante las investigaciones.",
      "whyItMattered": "Las obligaciones de KYC y AML no se adaptan a cómo un banco organiza sus sistemas. Un investigador que no puede ver a un cliente completo no puede evaluarlo, y la brecha aparece justo en la situación donde menos se puede permitir: cuando un regulador pregunta cómo se tomó una decisión.",
      "approach": "Empezamos por el problema de coincidencia y no por la plataforma. El perfilado de los datos reales mostró por qué los registros no casaban: convenciones de nombres en varios idiomas, direcciones capturadas con estándares distintos, identificadores en campos nunca pensados para ello. Las reglas se ajustaron después contra casos conocidos que el equipo de investigación ya dominaba, para que los resultados pudieran juzgarlos quienes sabían la respuesta correcta.",
      "architecture": [
        "Pasada de perfilado sobre los sistemas origen para cuantificar los modos reales de fallo de coincidencia",
        "Reglas deterministas para los identificadores, puntuación probabilística para el resto",
        "Un registro maestro de cliente con reglas de supervivencia acordadas por atributo, no por sistema",
        "Cola de stewardship para la banda intermedia, para que una coincidencia ambigua llegue a una persona y no a un umbral",
        "Linaje conservado desde el registro maestro hasta cada origen contribuyente"
      ],
      "capability": "Los investigadores podían obtener una vista única de cliente en todas las líneas de negocio y mostrar de qué origen venía cada atributo.",
      "outcome": "La resolución de entidades pasó de ser un paso de reconciliación manual dentro de las investigaciones a una capacidad mantenida en la que el equipo de delitos financieros podía apoyarse. El linaje hasta el origen permitía explicar una coincidencia en lugar de afirmarla.",
      "card": {
        "problem": "Registros de cliente duplicados entre banca minorista, empresarial y patrimonial, reconciliados a mano durante las investigaciones.",
        "intervention": "Atacar primero el problema de coincidencia: perfilar los modos reales de fallo y luego ajustar reglas contra casos cuya respuesta el equipo ya conocía.",
        "outcome": "Una vista única de cliente para las investigaciones de delitos financieros, con linaje hasta cada origen contribuyente."
      }
    },
    "integration-platform-consolidation": {
      "headline": "Consolidar pilas de integración solapadas",
      "client": "Una aseguradora norteamericana",
      "sector": "Plataforma de datos e integración",
      "challenge": "Años de adquisiciones habían dejado a la aseguradora operando varias pilas de integración en paralelo. Los mismos datos de póliza se movían entre los mismos dos sistemas por tres rutas distintas, cada una construida por un equipo diferente y ninguna documentada de un modo en que las demás confiaran.",
      "whyItMattered": "El coste no eran las licencias. Era que nadie podía decir con seguridad qué pipeline era el autorizado, así que cada pregunta aguas abajo sobre una cifra se convertía en un ejercicio de arqueología y cada petición de cambio se presupuestaba por el riesgo de romper algo invisible.",
      "approach": "Mapeamos lo que realmente se ejecutaba antes de proponer un reemplazo, incluidos los procesos que todos daban por muertos. La consolidación se secuenció por riesgo de negocio y no por conveniencia técnica: los flujos que alimentaban el reporte regulatorio y financiero se movieron los últimos, una vez probado el patrón en datos menos críticos.",
      "architecture": [
        "Inventario completo de los procesos de integración activos, con los consumidores de cada salida identificados",
        "Un único patrón de ingesta definido una vez y aplicado por origen, en lugar de por proyecto",
        "Ejecución en paralelo por cada flujo migrado, comparando la salida con el pipeline al que sustituía",
        "La baja tratada como un paso de entrega con su propia firma, no como limpieza"
      ],
      "capability": "Una forma documentada de incorporar un origen nuevo, y una respuesta única a qué pipeline es dueño de un flujo dado.",
      "outcome": "Las rutas duplicadas se retiraron en lugar de dejarse funcionando junto a sus sustitutas, que es el modo de fallo habitual de una consolidación. Incorporar un origen nuevo pasó a ser un patrón conocido en lugar de un proyecto.",
      "card": {
        "problem": "Varias pilas de integración en paralelo tras años de adquisiciones, sin respuesta acordada sobre qué pipeline era el autorizado.",
        "intervention": "Inventariar lo que realmente se ejecutaba y después consolidar por orden de riesgo de negocio y no de conveniencia técnica.",
        "outcome": "Un patrón documentado para incorporar un origen, y rutas duplicadas realmente retiradas en lugar de dejadas en marcha."
      }
    },
    "governance-regulatory-reporting": {
      "headline": "Hacer explicables las cifras regulatorias",
      "client": "Una institución financiera canadiense",
      "sector": "Gobernanza y analítica",
      "challenge": "Las cifras del reporte regulatorio se producían a tiempo, pero la institución no siempre podía demostrar cómo se había derivado una cifra concreta. Las definiciones vivían en la cabeza de los analistas y en lógica de hoja de cálculo que nunca se había escrito.",
      "whyItMattered": "Un informe correcto pero inexplicable es un hallazgo esperando a ocurrir. La exposición no era la aritmética, sino la incapacidad de responder preguntas de seguimiento sobre procedencia sin sacar a gente sénior de otro trabajo durante días.",
      "approach": "Tratamos las definiciones como el entregable y no como documentación. Cada medida reportada se rastreó a través de sus transformaciones hasta el origen, y la definición de negocio propietaria se capturó con un responsable nombrado. Donde dos áreas discrepaban sobre una definición, ese desacuerdo se sacó a la luz y se resolvió en lugar de promediarse.",
      "architecture": [
        "Captura automatizada de linaje desde la capa de reporte, pasando por la transformación, hasta el sistema origen",
        "Un glosario de negocio con un responsable por término, no un comité",
        "Reglas de calidad ligadas a las propias definiciones, de modo que un incumplimiento nombra al responsable",
        "Medidas de reporte ligadas a sus términos de glosario, haciendo navegable la ruta de derivación"
      ],
      "capability": "La institución podía mostrar la ruta de derivación de una cifra reportada sin reconstruirla a mano.",
      "outcome": "Las preguntas de procedencia pasaron a ser una consulta en lugar de una investigación. Los desacuerdos de definición entre áreas de negocio salieron durante el trabajo y no durante una revisión, que es el más barato de los dos momentos.",
      "card": {
        "problem": "Cifras regulatorias entregadas a tiempo cuya derivación no siempre podía demostrarse.",
        "intervention": "Rastrear cada medida reportada hasta el origen y capturar la definición de negocio con un responsable nombrado.",
        "outcome": "Las preguntas de procedencia pasaron a ser una consulta en vez de una investigación de varios días."
      }
    }
  },
  "pt": {
    "entity-resolution-financial-crime": {
      "headline": "Resolução de entidades para investigações de crimes financeiros",
      "client": "Um banco norte-americano de primeira linha",
      "sector": "Serviços financeiros",
      "challenge": "O banco não conseguia determinar de forma confiável quando dois registros de cliente eram a mesma pessoa. Varejo, corporativo e wealth guardavam cada um a sua própria versão de um cliente, e a equipe de crimes financeiros os reconciliava à mão durante as investigações.",
      "whyItMattered": "As obrigações de KYC e AML não se ajustam à forma como um banco organiza seus sistemas. Um investigador que não enxerga o cliente inteiro não consegue avaliá-lo, e a lacuna aparece exatamente na situação em que ela é menos suportável: quando um regulador pergunta como uma decisão foi tomada.",
      "approach": "Começamos pelo problema de correspondência e não pela plataforma. O perfilamento dos dados reais mostrou por que os registros não cruzavam: convenções de nome em vários idiomas, endereços capturados em padrões diferentes, identificadores em campos nunca pensados para isso. As regras foram então ajustadas contra casos conhecidos que a equipe de investigação já dominava, para que os resultados pudessem ser julgados por quem sabia a resposta certa.",
      "architecture": [
        "Passagem de perfilamento nos sistemas de origem para quantificar os modos reais de falha de correspondência",
        "Regras determinísticas para identificadores, escore probabilístico para o restante",
        "Um registro mestre de cliente com regras de sobrevivência acordadas por atributo, não por sistema",
        "Fila de stewardship para a faixa intermediária, para que uma correspondência ambígua chegue a uma pessoa e não a um limiar",
        "Linhagem mantida do registro mestre até cada origem contribuinte"
      ],
      "capability": "Os investigadores conseguiam obter uma visão única do cliente em todas as linhas de negócio e mostrar de qual origem veio cada atributo.",
      "outcome": "A resolução de entidades deixou de ser um passo de reconciliação manual dentro das investigações e passou a ser uma capacidade mantida em que a equipe de crimes financeiros podia se apoiar. A linhagem até a origem permitia explicar uma correspondência em vez de afirmá-la.",
      "card": {
        "problem": "Registros de cliente duplicados entre varejo, corporativo e wealth, reconciliados à mão durante as investigações.",
        "intervention": "Atacar primeiro o problema de correspondência: perfilar os modos reais de falha e então ajustar regras contra casos cuja resposta a equipe já conhecia.",
        "outcome": "Uma visão única do cliente para investigações de crimes financeiros, com linhagem até cada origem contribuinte."
      }
    },
    "integration-platform-consolidation": {
      "headline": "Consolidar pilhas de integração sobrepostas",
      "client": "Uma seguradora norte-americana",
      "sector": "Plataforma de dados e integração",
      "challenge": "Anos de aquisições deixaram a seguradora operando várias pilhas de integração lado a lado. Os mesmos dados de apólice se moviam entre os mesmos dois sistemas por três rotas diferentes, cada uma construída por uma equipe distinta e nenhuma documentada de um jeito em que as outras confiassem.",
      "whyItMattered": "O custo não eram as licenças. Era que ninguém conseguia dizer com segurança qual pipeline era o oficial, então cada pergunta a jusante sobre um número virava um exercício de arqueologia e cada pedido de mudança era precificado pelo risco de quebrar algo invisível.",
      "approach": "Mapeamos o que de fato rodava antes de propor uma substituição, inclusive as rotinas que todos supunham mortas. A consolidação foi sequenciada por risco de negócio e não por conveniência técnica: os fluxos que alimentavam relatórios regulatórios e financeiros mudaram por último, depois que o padrão foi provado em dados menos críticos.",
      "architecture": [
        "Inventário completo das rotinas de integração em execução, com os consumidores de cada saída identificados",
        "Um único padrão de ingestão definido uma vez e aplicado por origem, em vez de por projeto",
        "Execução paralela para cada fluxo migrado, comparando a saída com o pipeline que substituía",
        "Descomissionamento tratado como passo de entrega com assinatura própria, não como limpeza"
      ],
      "capability": "Uma forma documentada de trazer uma nova origem, e uma resposta única sobre qual pipeline é dono de um determinado fluxo.",
      "outcome": "As rotas duplicadas foram aposentadas em vez de deixadas rodando ao lado das substitutas, que é o modo de falha habitual de uma consolidação. Trazer uma nova origem virou um padrão conhecido em vez de um projeto.",
      "card": {
        "problem": "Várias pilhas de integração lado a lado após anos de aquisições, sem resposta acordada sobre qual pipeline era o oficial.",
        "intervention": "Inventariar o que de fato rodava e então consolidar por ordem de risco de negócio, não de conveniência técnica.",
        "outcome": "Um padrão documentado para trazer uma origem, e rotas duplicadas realmente aposentadas em vez de deixadas rodando."
      }
    },
    "governance-regulatory-reporting": {
      "headline": "Tornar explicáveis os números regulatórios",
      "client": "Uma instituição financeira canadense",
      "sector": "Governança e analytics",
      "challenge": "Os números do relatório regulatório eram produzidos no prazo, mas a instituição nem sempre conseguia demonstrar como um determinado número havia sido derivado. As definições viviam na cabeça dos analistas e em lógica de planilha que nunca havia sido escrita.",
      "whyItMattered": "Um relatório correto mas inexplicável é um apontamento esperando para acontecer. A exposição não era a aritmética, e sim a incapacidade de responder perguntas de acompanhamento sobre procedência sem tirar gente sênior de outro trabalho por dias.",
      "approach": "Tratamos as definições como a entrega e não como documentação. Cada medida reportada foi rastreada por suas transformações até a origem, e a definição de negócio responsável capturada com um dono nomeado. Onde duas áreas discordavam de uma definição, essa divergência foi trazida à tona e resolvida em vez de mediada.",
      "architecture": [
        "Captura automatizada de linhagem da camada de relatório, passando pela transformação, até o sistema de origem",
        "Um glossário de negócio com um dono responsável por termo, não um comitê",
        "Regras de qualidade ligadas às próprias definições, de modo que uma violação nomeia o dono",
        "Medidas de relatório ligadas aos seus termos de glossário, tornando navegável o caminho de derivação"
      ],
      "capability": "A instituição conseguia mostrar o caminho de derivação de um número reportado sem reconstruí-lo à mão.",
      "outcome": "As perguntas de procedência viraram uma consulta em vez de uma investigação. As divergências de definição entre áreas de negócio apareceram durante o trabalho e não durante uma revisão, que é o mais barato dos dois momentos.",
      "card": {
        "problem": "Números regulatórios entregues no prazo cuja derivação nem sempre podia ser demonstrada.",
        "intervention": "Rastrear cada medida reportada até a origem e capturar a definição de negócio com um dono nomeado.",
        "outcome": "As perguntas de procedência viraram uma consulta em vez de uma investigação de vários dias."
      }
    }
  }
};
