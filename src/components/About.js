import React from 'react'
import {AnnotationIcon} from "@heroicons/react/solid";

const About = () => {
    return (
        <section id="about" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <AnnotationIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        A propos de moi
                    </h1>

                    <p>
                        Grande compétitrice dans l'âme, on me connaissait comme Prescilla la lanceuse de javelot.
                        J'ai pu remporter les championnats de France de toutes les catégories jeunes de mes débuts en 2008 à 2014,
                        participer à des compétitions internationales et rivaliser avec la crème de la crème des javelistes au niveau mondial.
                        Lors de l'établissement de mon record de France junior en 2011, j'étais classée au 4ème rang mondial chez les juniors.
                   </p>
                    <p>
                        J'ai intégré l'INSEP en 2011 durant 3 ans afin de me concentrer sur ma carrière sportive, et j'ai fait STAPS en bénéficiant d'horaires aménagées.
                        Les cours de STAPS étaient très théoriques et j'avais besoin d'être stimulée pour ne pas m'endormir, ou au moins être intéressée...
                        J'ai quitté les cours de STAPS pour faire un Service Civique en tant que monitrice sportive à la mairie de Paris.
                        Je n'avais absolument pas pensé à l'énergie nécessaire pour enseigner le sport à des enfants qui préféraient s'amuser à leur manière ^^'
                    </p>
                    <p>
                        Ce qui avait allumé ma flamme, c'était les cours pratiques en informatique que nous avions fait lors du premier semestre en STAPS.
                        A chaque fin de cours, j'avais envie d'en apprendre davantage, savoir comment tout fonctionne en amont et comment gagner en efficacité...
                        J'ai pris mon courage à deux mains, et j'ai décidé de mettre ma carrière sportive en suspens pour me consacrer entièrement à mes études et intégrer un BTS en informatique à plein temps.
                    </p>
                    <p>
                        Je n'ai pas repris le chemin du stade à la fin de mon BTS, car j'avais envie de maîtriser l'informatique.
                        J'étais fière de mon premier grand challenge : mon projet de développement annuel pour lequel j'avais eu 17/20. Je voulais être meilleure.
                        J'ai alors entamé un cycle ingénieur à l'Ecole Supérieure de Génie Informatique (ESGI), première école de l'alternance en France, pour avoir toutes les chances de mon côté.

                        Durant 4 ans, j'ai étudié à l'ESGI en alternance avec le leader mondial du câble optique sous-marin, Nokia.
                        J'ai pris l'option Mobilité et Objets Connectés qui consistait à développer des applications mobiles et des infrastrutures IoT.
                        On a appris à développer et consommer des API et les rendre sur divers appareils connectés (Android, Iphone, WatchOS, Raspberries, Arduino...).

                        Chaque cours avait son projet de développement de fin de semestre, et nous avions un projet annuel afin de synthétiser ce que nous avions appris durant l'année.
                        On ne pouvait avoir la totalité des points juste en réussissant le projet à la perfection, car il fallait se challenger et implémenter des choses que nous n'avions pas appris en cours.

                        Pour mon stage de fin d'études, j’ai conçu le système informatique d'une application mobile pour une jeune startup fintech primée à plusieurs reprises à la cérémonie des Coupoles.
                        Je suis montée en compétences sur l'administration système, ElasticSearch, Cassandra et ReactJS pour les besoins du projet.
                        La partie mobile Flutter était couverte par deux de mes camarades, même si c'est un langage qu'il me plairait d'exploiter prochainement.
                        En effet, nous avions interdiction d'implémenter l'application avec un langage crossplateforme que nous avions déjà expérimenté sur l'un de nos projets.
                        Nous avions 6 mois pour déployer l'application sur les stores et montrer un traffic déjà existant, tout en continuant l'alternance cours/travail dans nos entreprises respectives.

                        A la suite de ce projet de fin d'études, j'ai choisi de me spécialiser en développement fullstack typescript, et élargir mes horizons de développement.
                    </p>
                    <p>
                        En parallèle, j'ai collaboré durant quatre ans en tant qu'apprentie ingénieure logiciel avec le leader mondial du câble optique sous-marin, Nokia.

                    </p>
                </div>
            </div>

        </section>
    )
}

export default About