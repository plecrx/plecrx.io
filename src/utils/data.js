export const about = [
  {
    title: "Carrière sportive internationale",
    details: [
        "[2011 - aujourd'hui] 🇫🇷 Détentrice du record de France junior de lancer de javelot",
        "[2008 - 2014] 🥇- Championnats de France U18 | U20 | U23",
        "[2014] 🥉- Coupe d'Europe hivernale U23 (Leiria, Portugal)",
        "[2014] 🥈- Championnats Méditerrannéens U23 (Aubagne, France)",
        "[2013] 4eme place - Coupe d'Europe hivernale U23 (Castellón de la Plana, Espagne)",
        "[2012] 4eme place - Coupe d'Europe hivernale U23 (Bar, Montenegro)",
        "[2011] 4eme place - Championnats d'Europe U20 (Tallin, Estonie)",
    ]
  },
  {
    title: "Double projet sport-études à l'INSEP",
    details: [
        "[2011] Intégration collectif INSEP avec aménagement des horaires de cours",
        "[2012] Obtention Baccalauréat Scientifique option SVT",
        "[2012 - 2014] Commencement d'un cursus STAPS",
        "[décembre 2013 - août 2014] Service Civique monitrice des sports pour la Mairie de Paris",
        "[2014] Arrêt de carrière internationale et départ de l'INSEP",
    ]
  },
  {
    title: "Réorientation en informatique",
    details: [
        "[2014 - 2016] Obtention BTS en systèmes numériques option informatique et réseaux",
        "[mai 2016 - juillet 2016] Stage technicienne helpdesk chez Webedia",
    ]
  },
  {
    title: "Formation en école d'ingénieur",
    details: [
        "[2016 - 2018] Obtention bachelor, spécialité Mobilité et objets connectés (titre RNCP: 'Chargée de projet en systèmes informatiques appliqués')",
        "[2018 - 2020] Obtention mastère, spécialité Mobilité et objets connectés (titre: 'Experte en ingénierie informatique et des systèmes d'information')",
        ".",
        "ESGI : Ecole Supérieure de Génie Informatique.",
        "J'ai préféré poursuivre mon apprentissage de l'informatique en alternance pour apprendre par la pratique et assimiler les techniques de travail en entreprise. " +
        "C'est d'ailleurs la raison pour laquelle j'ai intégré l'ESGI, où il est demandé une forte autonomie et qui est plus axé sur la pratique que sur la théorie : " +
        "un projet thématique en équipe était requis pour chaque cours, en plus d'un projet annuel chaque année.",
        "Je me suis orientée en 'Mobilité et objets connectés', ce qui consiste à développer des applications mobiles et des infrastrutures IoT.",
        "J'ai appris à développer et consommer des API sur divers appareils connectés (Android, Iphone, WatchOS, Raspberry, Arduino...). ",
    ]
  },
  {
    title: "Apprentissage chez Nokia",
    details: [
        "[2016 - 2020] J'ai travaillé au poste d'ingénieure d'études et de développement en alternance chez le leader mondial du câble optique sous-marin, Alcatel Submarine Networks (ASN, Nokia). ",
        ".",
        "- Développement de nouvelles fonctionnalités et supervision d'une application legacy de gestion de projet construite en Java JEE.",
        "- Migration du projet legacy de Java 6 vers Java 8.\n",
        "- Modélisation et conception d'une architecture orientée services visant à développer une nouvelle application de gestion de projet en microservices avec NodeJS et Angular.",
        "- Conception d'une stack ELK avec son IHM en Python pour filtrer et catégoriser les big data provenant d'équipements sous-marins pour la maintenance des câbles de fibre optique intercontinentaux.",
    ]

  },
  {
    title: "Mission chez Scala Patrimoine",
    details: [
        "Dans le cadre d'un projet de fin d'année, en équipe avec deux autres développeurs, nous avons été sollicités par un cabinet de gestion de patrimoine pour une application mobile. " +
        "Cette application à destination des particuliers, avait pour but d'informer son audience et d'être transparent sur les frais de commissions de rétrocessions.\n" +
        "Elle permet aux utilisateurs de rechercher des produits d'investissement exonérés de frais de rétrocession en fonction des codes ISIN qu'ils ont recherchés sur l'application ou scannés par reconnaissance d'image (OCR). " +
        "Un backoffice d'administration permet de visualiser et d'actualiser le jeu de données de l'application avec insertion d'un nouveau fichier excel." ,
        ".",
        "Mise en oeuvre : ",
        "- Développement d'une API REST en NodeJS + Express avec indexation des données dans Elasticsearch et Cassandra." ,
        "- Développement et publication de l'application Flutter sur Google Play Store et App Store." ,
        "- Développement d'un backoffice en React." ,
        "- Implémentation CI/CD sur Gitlab et runners dédiés." ,
        "- SysAdmin d'un VPS sur OVHCloud pour héberger les services de l'application (backoffice + API + GitlabCE).",
        ".",
        "Je suis montée en compétences sur l'administration système, ElasticSearch, Cassandra et ReactJS pour les besoins de mon projet de fin d'études. ",
        "A la suite de ce projet, j'ai choisi de poursuivre ma carrière en développement fullstack typescript. "
        ]
  },
  {
    title: "Nouveau projet chez Energisme",
    details: [
        "[octobre 2020 - octobre 2021] Développement fullstack",
        "- Construction d'un backoffice (front et microservices), solution de collecte de données pour le datalake Energisme.",
        "- Implémentation de la première application frontend interne de Energisme pour le provisionnement automatique de capteurs auprès de nos principaux fournisseurs IOT (Sigfox, Objenious, Liveobjects...).",
        "- Création automatisation et déploiement des pipelines sur Gitlab.",
        "- Rédaction de la documentation d'exploitation.",
        "- Communication / formation des utilisateurs de nos solutions en interne.",
        ".",
        "[octobre 2021 - ... ] Développement frontend",
        "- Implémentation d'un monorepo avec un Design System en prévision du développement de toutes les applications \"front\" Energisme.",
        "- Conception, intégration et déploiement d'applications web frontend,",
    ]
  },
]


export const projects = [
    {
        title: "Ubeetch",
        subtitle: "MERN Stack",
        description: "Display taxi rides considering night & busy periods fees.",
        image: "./ubeetch.png",
        link: "https://ubeetch.plecrx.io/",
    },
    {
        title: "Trivial Sims",
        subtitle: "React",
        description: "Simulates home loans and freelance status.",
        image: "./trivial-sims.png",
        link: "https://trivial-sims.plecrx.io/",
    },
    /*{
        title: "Motion Detection Invaders",
        subtitle: "ml5 and P5.js",
        description: "Custom spaceInvaders-like game controllable with motion detection",
        image: "./motioninvaders.png",
        link: "https://ml5-invaders.plecrx.io/",
    },
    {
        title: "UPXIII website",
        subtitle: "HTML, CSS and javascript",
        description: "Showcase website for the rugby team of UPXIII",
        image: "./upxiii.png",
        link: "https://upxiii-project.plecrx.io/",
    },
    {
        title: "TripCar API",
        subtitle: "MERN Stack",
        description: "Blablacar-like project to simulate a ride between users.",
        image: "./mern-stack.png",
        link: "https://reactbootcamp.com",
    },
    {
        title: "Potter API",
        subtitle: "React Native",
        description: "Fetch Potter API and render on every mobile OS.",
        image: "./react-native.png",
        link: "https://reactbootcamp.com",
    },
    {
        title: "Buy A Pokemon",
        subtitle: "MERN Stack",
        description: "Amazon-like project to buy Pokémons.",
        image: "./mern-stack.png",
        link: "https://reactbootcamp.com",
    },
    {
        title: "SongNote",
        subtitle: "React Native",
        description: "Mobile App using dictaphone & song register.",
        image: "./react-native.png",
        link: "https://reactbootcamp.com",
    },*/
];

export const testimonials = [
  {
    quote: "Prescilla a eu une très bonne analyse des solutions à entreprendre pour résoudre un problème client. Elle développe une forte empathie avec ces interlocuteurs et agit avec conviction pour avancer des solutions techniques. Elle contrôle ses résultats pour pouvoir améliorer son résultat. ",
    transformation: "transform scale-110 -rotate-6",
    image: "1516256223361.jpg",
    name: "Jean-Pierre Delouche",
    role: "Continuous Integration Manager",
    company: "Nokia, ASN",
  },
  {
    quote: "Prescilla est partie en éclaireuse sur la stack Node/React/Kubernetes chez Energisme et a fortement contribué à structurer à la fois les développements chez PDA ainsi que la manière d’opérer les déploiements coté DevOPS. Elle a développé et déployé la première application en interne Energisme. ",
    transformation: "transform scale-110 -rotate-6",
    image: "1516256223362.jpg",
    name: "Damien Deom",
    role: "Team Lead PDA Solutions",
    company: "Energisme",
  },
];

export const skills = [
  {name: "TypeScript", logoLink: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg"},
  {name: "React", logoLink: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"},
  {name: "ReactNative", logoLink: "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png?fm=webp"},
  {name: "NodeJS", logoLink: "https://nodejs.org/static/images/logo.svg"},
  {name: "Kotlin", logoLink: "https://profilinator.rishav.dev/skills-assets/kotlinlang-icon.svg"},
  {name: "Python", logoLink: "https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"},
  {name: "C", logoLink: "https://profilinator.rishav.dev/skills-assets/c-original.svg"},
  {name: "C++", logoLink: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg"},
  {name: "C#", logoLink: "https://profilinator.rishav.dev/skills-assets/csharp-original.svg"},
  {name: "Docker", logoLink: "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg"},
  {name: "Kubernetes", logoLink: "https://octoperf.com/img/blog/kraken-kubernetes-ingress-nginx-frontend/kubernetes.png"},
  {name: "Git", logoLink: "https://git-scm.com/images/logo@2x.png"},
  {name: "ElasticSearch", logoLink: "https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt36f2da8d650732a0/5d0823c3d8ff351753cbc99f/logo-elasticsearch-32-color.svg"},
  {name: "Cassandra", logoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/2560px-Cassandra_logo.svg.png"},
  {name: "MySQL", logoLink: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"},
  {name: "MongoDB", logoLink: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"},
  {name: "SQLite", logoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1280px-SQLite370.svg.png"},
  {name: "Unity", logoLink: "https://store-speedtree-com.exactdn.com/site-assets/uploads/Unity-Logo-White.png?strip=all&lossy=1&quality=73&ssl=1"},
  {name: "Figma", logoLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Figma-1-logo.png/640px-Figma-1-logo.png"},
  {name: "Storybook", logoLink: "https://iconape.com/wp-content/png_logo_vector/storybook.png"},
  {name: "Nx", logoLink: "https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"},
  {name: "Tailwind", logoLink: "https://insy2s.com/insy2s/images/icones/Technos-Dev-Factory-logo-Tailwindcss.png"},
];

export const rgpd = [
    {
        title: "",
        content: [
            "L'entreprise individuelle Prescilla Lecurieux, soucieuse des droits des individus, notamment au regard des traitements autorisés, et dans une volonté de transparence avec ses visiteurs, a mis en place une politique reprenant l'ensemble de ces traitements, des finalités pourrsuivies par ces derniers ainsi que des moyens d'actions à la disposition des individus afin qu'ils puissent au mieux exercer leurs droits.",
            "Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site : https://www.cnil.fr/",
            "La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d'utilisation qui suivent.",
            "La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.",
        ],
    },
    {
        title: "Article 1 - Mentions légales",
        content : [
            "1.1 Site (ci-après 'le site') :",
            "https://plecrx.io/",
            ".",
            "1.2 Editeur (ci-après 'l'éditeur') :",
            "L'entreprise individuelle Prescilla Lecurieux",
            "située : 10 Allée de la Toison d'Or, 94000 CRETEIL",
            "n°de téléphone : 09.73.27.36.04",
            "adresse mail : prescilla@plecrx.io",
            ".",
            "1.3 Hébergeur (ci-après 'l'hébergeur') :",
            "plecrx.io est hébergé par Netlify, dont le siège social est situé 610 22nd Street, Suite 315, San Francisco, CA 94107",
        ]
    },
    {
        title: "Article 2 — Accès au site",
        content: [
            "L’accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l’envoi de courriers électroniques non sollicités."
        ]
    },
    {
        title: "Article 3 — Contenu du site",
        content: [
            "Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.",
            "Ils sont la propriété pleine et entière de l’éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l’accord préalable et écrit de l’éditeur, sont strictement interdites. Le fait pour l’éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.",
        ]
    },
    {
        title: "Article 4 — Gestion du site",
        content: [
            "Pour la bonne gestion du site, l’éditeur pourra à tout moment :",
            "–  suspendre, interrompre ou limiter l’accès à tout ou partie du site, réserver l’accès au site, ou à certaines parties du site, à une catégorie déterminée d’internautes",
            "–  supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales",
            "–  suspendre le site afin de procéder à des mises à jour.",
        ]
    },
    {
        title: "Article 5 — Responsabilités",
        content: [
            "La responsabilité de l’éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l’accès au site ou à une de ses fonctionnalités.",
            "Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d’attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez.",
            "L’éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre :",
            "–  du fait de l’usage du site ou de tout service accessible via Internet ;",
            "–  du fait du non-respect par vous des présentes conditions générales.",
            "L’éditeur n’est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.",
            "Si l’éditeur venait à faire l’objet d’une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l’indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure."
        ]
    },
    {
        title: "Article 6 — Liens hypertextes et cookies",
        content: [
            "La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est autorisée par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur.",
            "Toute information accessible via un lien vers d’autres sites n’est pas publiée par l’éditeur. L’éditeur ne dispose d’aucun droit sur le contenu présent dans ledit lien."
        ]
    },
    {
        title: "Article 7 — Collecte et protection des données",
        content: [
            "Vos données sont collectées par l'entreprise individuelle Prescilla Lecurieux.",
            "Une donnée à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifiée, directement ou indirectement, notamment par référence à un nom, un numéro d’identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.",
            "Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l’éditeur pour la gestion des relations avec vous, et le cas échéant pour le traitement de vos commandes.",
            "Les données personnelles collectées sont les suivantes :",
            "– Nom et prénom",
            "– Adresse mail"
        ]
    },
    {
        title: "Article 8 — Droit d’accès, de rectification et de déréférencement de vos données",
        content: [
            "En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants :",
            "- le droit d’accès : ils peuvent exercer leur droit d’accès, pour connaître les données personnelles les concernant, en écrivant à l’adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en œuvre de ce droit, la Plateforme peut demander une preuve de l’identité de l’utilisateur afin d’en vérifier l’exactitude;",
            "- le droit de rectification : si les données à caractère personnel détenues par la Plateforme sont inexactes, ils peuvent demander la mise à jour des informations;",
            "- le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données;",
            "- le droit à la limitation du traitement : les utilisateurs peuvent de demander à la Plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD;",
            "- le droit de s’opposer au traitement des données : les utilisateurs peuvent s’opposer à ce que leurs données soient traitées conformément aux hypothèses prévues par le RGPD;",
            "- le droit à la portabilité : ils peuvent réclamer que la Plateforme leur remette les données personnelles qu’ils ont fournies pour les transmettre à une nouvelle Plateforme.",
            "Vous pouvez exercer ce droit en nous contactant, à l’adresse suivante :",
            "10 Allée de la Toison d'Or, 94000 CRETEIL",
            "Ou par email à l'adresse :",
            "prescilla@plecrx.io",
            "Toute demande doit être accompagnée de la photocopie d’un titre d’identité en cours de validité, signé et faire mention de l’adresse à laquelle l’éditeur pourra contacter le demandeur. La réponse sera adressée dans le mois suivant la réception de la demande. Ce délai d’un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l’exigent.",
            "De plus, et depuis la loi n° 2016-1321 du 7 octobre 2016, les personnes qui le souhaitent, ont la possibilité d’organiser le sort de leurs données après leur décès. Pour plus d’information sur le sujet, vous pouvez consulter le site Internet de la CNIL : https://www.cnil.fr/.",
            "Les utilisateurs peuvent aussi introduire une réclamation auprès de la CNIL sur le site de la CNIL : https://www.cnil.fr.",
            "Nous vous recommandons de nous contacter dans un premier temps avant de déposer une réclamation auprès de la CNIL, car nous sommes à votre entière disposition pour régler votre problème."
        ]
    },
    {
        title: "Article 9 — Utilisation des données",
        content: [
            "Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services de la Plateforme, leur amélioration et le maintien d’un environnement sécurisé. La base légale des traitements est l’exécution du contrat entre l’utilisateur et la Plateforme. Plus précisément, les utilisations sont les suivantes :",
            "– accès et utilisation de la Plateforme par l’utilisateur ;",
            "– gestion du fonctionnement et optimisation de la Plateforme ;",
            "– mise en œuvre d’une assistance utilisateur ;",
            "– vérification, identification et authentification des données transmises par l’utilisateur ;",
            "– personnalisation des services en affichant des publicités en fonction de l’historique de navigation de l’utilisateur, selon ses préférences ;",
            "– prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité ;",
            "– gestion des éventuels litiges avec les utilisateurs ;",
            "– envoi d’informations commerciales et publicitaires, en fonction des préférences de l’utilisateur;",
            "– organisation des conditions d’utilisation des Services de paiement.",
        ]
    },
    {
        title: "Article 10 — Politique de conservation des données",
        content: [
            "La Plateforme conserve vos données pour la durée nécessaire pour vous fournir ses services ou son assistance.",
            "Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécessaire, même après la fermeture de votre compte ou que nous n’ayons plus besoin pour vous fournir nos services."
        ]
    },
    {
        title: "Article 11 — Partage des données personnelles avec des tiers",
        content: [
            "Les données personnelles peuvent être partagées avec des sociétés tierces exclusivement dans l’Union européenne, dans les cas suivants :",
            "– quand l’utilisateur utilise les services de paiement, pour la mise en œuvre de ces services, la Plateforme est en relation avec des sociétés bancaires et financières tierces avec lesquelles elle a passé des contrats ;",
            "– lorsque l’utilisateur publie, dans les zones de commentaires libres de la Plateforme, des informations accessibles au public ;",
            "– quand l’utilisateur autorise le site web d’un tiers à accéder à ses données ;",
            "– quand la Plateforme recourt aux services de prestataires pour fournir l’assistance utilisateur, la publicité et les services de paiement. Ces prestataires disposent d’un accès limité aux données de l’utilisateur, dans le cadre de l’exécution de ces prestations, et ont l’obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière protection des données à caractère personnel ;",
            "– si la loi l’exige, la Plateforme peut effectuer la transmission de données pour donner suite aux réclamations présentées contre la Plateforme et se conformer aux procédures administratives et judiciaires.",
        ]
    },
    {
        title: "Article 12 — Offres commerciales",
        content: [
            "Vous êtes susceptible de recevoir des offres commerciales de l’éditeur. Si vous ne le souhaitez pas, veuillez utiliser le formulaire de contact.",
            "Vos données sont susceptibles d’être utilisées par les partenaires de l’éditeur à des fins de prospection commerciale, si vous ne le souhaitez pas, veuillez utiliser le formulaire de contact.",
            "Si, lors de la consultation du site, vous accédez à des données à caractère personnel, vous devez vous abstenir de toute collecte, de toute utilisation non autorisée et de tout acte pouvant constituer une atteinte à la vie privée ou à la réputation des personnes. L’éditeur décline toute responsabilité à cet égard.",
            "Les données sont conservées et utilisées pour une durée conforme à la législation en vigueur.",
        ]
    },
    {
        title: "Article 13 — Cookies",
        content: [
            "Un « Cookie » ou traceur est un fichier électronique déposé sur un terminal (ordinateur, tablette, smartphone,…) et lu par exemple lors de la consultation d’un site internet, de la lecture d’un courrier électronique, de l’installation ou de l’utilisation d’un logiciel ou d’une application mobile et ce, quel que soit le type de terminal utilisé (source : https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi).",
            "Le site peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement  ne seront utilisées que pour suivre le volume, le type et la configuration du trafic, utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons.",
            "Le cas échéant, des cookies émanant de l'éditeur du site et/ou des sociétés tiers pourront être déposés sur votre terminal, avec votre accord. Dans ce cas, lors de la première navigation sur ce site , une bannière explicative sur l'utilisation des cookies apparaîtra. Avant de poursuivre la navigation, l'utilisateur devra accepter ou refuser l'utilisation desdits cookies. Le consentement donné sera valable pour une période de treize (13) mois. L'utilisateur a la possibilité de désactiver les cookies à tout moment.",
            "Les cookies suivants sont présents sur ce site : ",
            "N/A",
            "La durée de vie de ces cookies est de treize mois.",
        ]
    },
    {
        title: "Article 14 — Photographies et représentation des produits",
        content: [
            "Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n’engagent pas l’éditeur."
        ]
    },
    {
        title: "Article 15 — Loi applicable",
        content: [
            "Les présentes conditions d’utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l’éditeur, sous réserve d’une attribution de compétence spécifique découlant d’un texte de loi ou réglementaire particulier."
        ]
    },
    {
        title: "Article 16 — Contactez-Nous",
        content: [
            "Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui-même, vous pouvez utiliser le formulaire de contact."
        ]
    },
]
