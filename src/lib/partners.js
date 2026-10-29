// Technology partners shown on /partners/.
//
// Each entry states the actual relationship type and what PaWa does with the
// platform for clients. Capability only: no claimed outcomes and no implied
// endorsement, for the same reason src/lib/proof.js exists.
//
// `logo` is null until the partner's approved files arrive. A card with no logo
// renders a typographic name tile. Third-party marks are never lifted from the
// web: partner brand guidelines (Salesforce's in particular) restrict their use.
// Dropping in an approved file is a one-field change: { webp, png, width, height }.
//
// `featured` renders the partner as a full-width banner at the top of the grid.
// With five partners in two columns, the odd card would otherwise sit alone;
// leading with one banner keeps the four below it in an even 2×2.
//
// Plain data with no JSX, so the Node build scripts can import it directly.

export const PARTNER_TYPES = {
  /** A platform we integrate, implement or build on for clients. */
  TECHNOLOGY: 'technology',
};

/** Translation key for the relationship label each type renders. */
export const PARTNER_TYPE_KEY = {
  [PARTNER_TYPES.TECHNOLOGY]: 'partnersTypeTechnology',
};

export const PARTNERS = [
  {
    id: 'informatica',
    name: 'Informatica',
    url: 'https://www.informatica.com/',
    type: PARTNER_TYPES.TECHNOLOGY,
    logo: null,
    featured: true,
    blurb: {
      en: "An AI-powered cloud data management platform, now part of Salesforce. It covers master data management, data integration, governance, quality and privacy. We use it to build the trusted data foundation that enterprise AI and analytics depend on.",
      fr: "Une plateforme cloud de gestion des données propulsée par l'IA, désormais intégrée à Salesforce. Elle couvre la gestion des données de référence (MDM), l'intégration, la gouvernance, la qualité et la confidentialité des données. Nous l'utilisons pour bâtir la base de données fiable dont dépendent l'IA et l'analytique d'entreprise.",
      es: "Una plataforma cloud de gestión de datos impulsada por IA, ahora parte de Salesforce. Cubre la gestión de datos maestros (MDM), la integración, el gobierno, la calidad y la privacidad de los datos. La usamos para construir la base de datos confiable de la que dependen la IA y la analítica empresarial.",
      pt: "Uma plataforma cloud de gestão de dados com IA, agora parte da Salesforce. Cobre gestão de dados mestres (MDM), integração, governança, qualidade e privacidade de dados. Nós a usamos para construir a base de dados confiável da qual dependem a IA e a análise corporativa.",
    },
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    url: 'https://www.salesforce.com/',
    type: PARTNER_TYPES.TECHNOLOGY,
    logo: null,
    blurb: {
      en: "The world's leading CRM platform. We help clients connect Salesforce to the rest of their data estate, so customer, sales and service data flows cleanly into governed platforms and back into the tools their teams use every day.",
      fr: "La plateforme CRM de référence dans le monde. Nous aidons nos clients à connecter Salesforce au reste de leur patrimoine de données, pour que les données clients, ventes et service circulent proprement vers des plateformes gouvernées et reviennent dans les outils que leurs équipes utilisent au quotidien.",
      es: "La plataforma CRM líder en el mundo. Ayudamos a nuestros clientes a conectar Salesforce con el resto de su patrimonio de datos, para que los datos de clientes, ventas y servicio fluyan de forma limpia hacia plataformas gobernadas y de vuelta a las herramientas que sus equipos usan cada día.",
      pt: "A plataforma de CRM líder mundial. Ajudamos os clientes a conectar o Salesforce ao restante do seu patrimônio de dados, para que dados de clientes, vendas e atendimento fluam de forma limpa para plataformas governadas e voltem às ferramentas que suas equipes usam todos os dias.",
    },
  },
  {
    id: 'wisdomai',
    name: 'WisdomAI',
    url: 'https://www.wisdomai.com/',
    type: PARTNER_TYPES.TECHNOLOGY,
    logo: null,
    blurb: {
      en: "An AI-native analytics platform that lets business teams ask questions of their data in plain language and get governed, explainable answers. We pair it with a trusted data foundation, so the answers rest on data that is actually correct.",
      fr: "Une plateforme d'analytique native en IA qui permet aux équipes métier de poser des questions sur leurs données en langage courant et d'obtenir des réponses gouvernées et explicables. Nous l'associons à une base de données fiable, pour que les réponses reposent sur des données réellement exactes.",
      es: "Una plataforma de analítica nativa de IA que permite a los equipos de negocio hacer preguntas sobre sus datos en lenguaje natural y obtener respuestas gobernadas y explicables. La combinamos con una base de datos confiable, para que las respuestas se apoyen en datos realmente correctos.",
      pt: "Uma plataforma de análise nativa em IA que permite às equipes de negócio fazer perguntas sobre seus dados em linguagem natural e obter respostas governadas e explicáveis. Nós a combinamos com uma base de dados confiável, para que as respostas se apoiem em dados realmente corretos.",
    },
  },
  {
    id: 'acceldata',
    name: 'Acceldata',
    url: 'https://www.acceldata.io/',
    type: PARTNER_TYPES.TECHNOLOGY,
    logo: null,
    blurb: {
      en: "An enterprise data observability platform that monitors the health, quality and performance of data pipelines end to end. We use it to make the reliability of a client's data measurable, so problems surface before they reach a dashboard or a model.",
      fr: "Une plateforme d'observabilité des données d'entreprise qui surveille de bout en bout la santé, la qualité et la performance des pipelines de données. Nous l'utilisons pour rendre mesurable la fiabilité des données d'un client, afin que les problèmes apparaissent avant d'atteindre un tableau de bord ou un modèle.",
      es: "Una plataforma empresarial de observabilidad de datos que supervisa de extremo a extremo la salud, la calidad y el rendimiento de los pipelines de datos. La usamos para hacer medible la confiabilidad de los datos de un cliente, de modo que los problemas salgan a la luz antes de llegar a un panel o a un modelo.",
      pt: "Uma plataforma corporativa de observabilidade de dados que monitora de ponta a ponta a saúde, a qualidade e o desempenho dos pipelines de dados. Nós a usamos para tornar mensurável a confiabilidade dos dados de um cliente, para que os problemas apareçam antes de chegar a um painel ou a um modelo.",
    },
  },
  {
    id: 'k2view',
    name: 'K2View',
    url: 'https://www.k2view.com/',
    type: PARTNER_TYPES.TECHNOLOGY,
    logo: null,
    blurb: {
      en: "A data product platform that organizes data around business entities, such as a customer or an order, and delivers it in real time to operational and analytical systems. We use it where clients need unified, governed entity data across many source systems.",
      fr: "Une plateforme de produits de données qui organise les données autour des entités métier, comme un client ou une commande, et les livre en temps réel aux systèmes opérationnels et analytiques. Nous l'utilisons lorsque les clients ont besoin de données d'entité unifiées et gouvernées à travers de nombreux systèmes sources.",
      es: "Una plataforma de productos de datos que organiza los datos en torno a entidades de negocio, como un cliente o un pedido, y los entrega en tiempo real a sistemas operativos y analíticos. La usamos cuando los clientes necesitan datos de entidad unificados y gobernados a través de muchos sistemas de origen.",
      pt: "Uma plataforma de produtos de dados que organiza os dados em torno de entidades de negócio, como um cliente ou um pedido, e os entrega em tempo real a sistemas operacionais e analíticos. Nós a usamos quando os clientes precisam de dados de entidade unificados e governados em muitos sistemas de origem.",
    },
  },
];
