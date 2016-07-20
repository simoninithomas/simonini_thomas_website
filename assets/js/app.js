/************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************
 *
 *                                                         Marketplace app.js
 * @Author : SIMONINI Thomas, 2016 simonini_thomas@outlook.fr
 ************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************/
angular.module('app', ['ngRoute', 'app.controllers', 'pascalprecht.translate', 'angulartics', 'angulartics',
        'angulartics.google.analytics'])

    .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'assets/templates/home.html',
                    controller: 'homeCtrl'
                })
                .otherwise('/')
        }
    )

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
                //Header
                HEADER_PROFESSION: "Full Stack Developer #JS",
                CONTACT_ME: "Contact me",
                ABOUT_TITLE: "About me",
                ABOUT: "<a  href='https://www.newsswipe.io' analytics-on='click' analytics-event='Visit PlayBot Website'>PlayBot</a> Founder and CEO. PlayBot is a Messenger bot that proposes games based on user tastes. (<a href='http://entreprendre.univ-lyon3.fr/incubateur-jean-moulin/'>Jean Moulin's Incubator</a>). Full Stack Developer (NodeJS, Express, AngularJS, MongoDB). Applications developer Cordova and Native (Java).",

            POSITION: "Lyon, France",
                EMAIL: "simonini_thomas@outlook.fr",
                MOBILE_PHONE: "+33 6 70 23 46 06",
                WEBSITE: "www.simoninithomas.com",

            //Compétences
            COMPETENCES: "Skills",
            COMPETENCES_1: "HTML - CSS (Bootstrap)",
            COMPETENCES_2: "PHP & MySQL",
            COMPETENCES_3: "NodeJS & Express",
            COMPETENCES_4: "MongoDB",
            COMPETENCES_5: "AngularJS",
            COMPETENCES_6: "Ionic (cordova)",
            COMPETENCES_7: "Java pour Android)",
            COMPETENCES_8: "Unity",
            COMPETENCES_9: "Blender",
            COMPETENCES_10: "Python",
            COMPETENCES_11: "Augmented Reality",

            EXPERT: "Expert",
            PRO: "Pro",
            MAITRISE: "Proficiency",
            CONNAISSANCES: "Proficiency",


            //Formations
            DROITSCIENCESPO_DIPLOMA: "Bachelor's degree of Law and Politic sciences",
            D2E_DIPLOMA: "Entrepreneurship University's degree",
            LYONIII_UNIVERSITY: "Lyon III University, France",
            LYON_UNIVERSITY: "Lyon University, France",
            ENTREPRENEURSHIP_MIT_DIPLOMA: "Certificate of Achievement (verified) MIT Entrepreneurship 101 - 102",
            MIT: "edX MIT, USA",

            //Languages
            LANGUAGES: "Languages",
            FRENCH: "French",
            ENGLISH: "English",
            SPANISH: "Spanish",
            JAPANESE: "Japanese",

            LANGUAGE_MATERNEL_RANK: "Naive speaker",
            LANGUAGE_FLUENT_RANK: "Fluent",
            LANGUAGE_SCHOLAR_RANK: "Basic Level",

            //Hobbies
            HOBBIES: "Hobbies",
            HOBBIES1: "Creating Augmented Reality products",
            HOBBIES2: "Machine Learning",
            HOBBIES3: "Bots dev",
            HOBBIES4: "Video games",

            //Conferences
            CONFERENCE: "Conferences",

            CONFERENCE1_TITLE: " Speaker about entrepreneurship at Lyon II University",
            CONFERENCE1_CITY: "Lyon",

            CONFERENCE2_TITLE: "Speaker at 'Bercy Café de l'économie Lyon' (Economy and Entrepreneurship)",
            CONFERENCE2_CITY: "Lyon",
            /****************
             *  Last projects
             */

            LAST_PROJECTS: "Latest Projects",
            //C'est décidé je m'en vais
            PROJECT1_TITLE: "'It's decided I'm going' children ebook on Amazon Kindle Publishing",
            PROJECT1_DATE: "December 2014",
            PROJECT1_DESCRIPTION: "Illustrations created with Blender3D.",
            PROJECT1_LINK: "See the illustrations",

            //30Tiles
            PROJECT2_TITLE: "30Tiles jeu vidéo sur Android",
            PROJECT2_DATE: "March 2015",
            PROJECT2_DESCRIPTION: "Reflexion game developed with C# and Unity for Android. Tap all the tiles which correspond to the posted color, the more you tap tiles, the more you win seconds and points. BUT BEWARE, the color of tiles changes every 3 seconds !",
            PROJECT2_LINK: " Download for Android",

            //DuckJump
            PROJECT3_TITLE: "DuckJump video game on Android",
            PROJECT3_DATE: "May 2015 - June 2015",
            PROJECT3_DESCRIPTION: "Action game developed with C# and Unity for Android. Jump ! Jump ! Jump ! Avoid the ennemies !",
            PROJECT3_LINK: " Download for Android",

            //NewsCrawlBot
            PROJECT4_TITLE: "NewsCrawlBot",
            PROJECT4_DATE: "January 2016 - March 2016",
            PROJECT4_DESCRIPTION: "Crawler in python which select articles from 10 French medias and classify it in themes thanks to algorithms.",
            PROJECT4_LINK: "GitHub Link",

            //NewsSwipe Website
            PROJECT5_TITLE: "NewsSwipe Official Website",
            PROJECT5_DATE: "March 2016",
            PROJECT5_DESCRIPTION: "Official website of NewsSwipe (HTML, CSS, AngularJS). ",
            PROJECT5_LINK: "NewsSwipe",

            //NewsSwipe
            PROJECT6_TITLE: "Founder of NewsSwipe",
            PROJECT6_DATE: "January 2016 - Mai 2016",
            PROJECT6_DESCRIPTION: "NewsSwipe is an app which propose news articles based on user tastes. Therefore it means that we propose only articles which fits on user tastes with a new user experience because articles are displayed in swipe cards the user can swipe on left to the next article to the right to read the article and to top to share to social medias The app use an internal crawler which select articles and classify it in themes.",
            PROJECT6_LINK: "NewsSwipe",

            //Prestashop
            PROJECT7_TITLE: "Trainee: Marketplace creation with Prestashop <i class='fa fa-copyright' aria-hidden='true'></i> for the University of Lyon III",
            PROJECT7_DATE: "June 2016 - July 2016",
            PROJECT7_DESCRIPTION: "Creation of a Marketplace for the University of Lyon III.",
            PROJECT7_LINK: "",

            //Réalitée augmentée
            PROJECT8_TITLE: "Augmented Reality",
            PROJECT8_DATE: "July 2016 - ",
            PROJECT8_DESCRIPTION: "Expérimentations and AR creations.",
            PROJECT8_LINK: "",

            /****************
             *  Professionals experiences
             */
            PROFESSIONNAL_EXPERIENCES: "Work Experience",

            PROFESSIONNAL_TITLE1: "Founder and Web Developer - ",
            PROFESSIONAL_SUBTITLE1: "Alumni (2014 - 2015)",
            PROFESSIONAL_PARAGRAPH1: "Web start-up which providing reviews of formations written by alumns to help freshmen to find their universities.",

            PROFESSIONNAL_TITLE2: "Chargé d'accueil - ",
            PROFESSIONAL_SUBTITLE2: "Societé générale Tournon [BANK] (Summer 2013; Summer 2014; Summer 2015)",
            PROFESSIONAL_PARAGRAPH2: "Work in a busy bank. Welcoming clients (give them their credit cards, checkbooks, do credit transferts…).",

            PROFESSIONNAL_TITLE3: "Founder and Android Developer  - ",
            PROFESSIONAL_SUBTITLE3: "NewsSwipe (2015 - 2016)",
            PROFESSIONAL_PARAGRAPH3: "NewsSwipe is an app which propose news articles based on user tastes. Therefore it means that we propose only articles which fits on user tastes with a new user experience because articles are displayed in swipe cards the user can swipe on left to the next article to the right to read the article and to top to share to social medias The app use an internal crawler which select articles and classify it in themes",

            PROFESSIONNAL_TITLE4: "Trainee: Marketplace creation with Prestashop <i class='fa fa-copyright' aria-hidden='true'></i> for the University of Lyon III",
            PROFESSIONAL_PARAGRAPH4: "Creation of a Marketplace for the University of Lyon III.",

            //Github
            GITHUB: "My GitHub"


        })


            .translations('fr', {
                //Header
                HEADER_PROFESSION: "Developpeur Full Stack #JS",
                CONTACT_ME: "Me Contacter",
                ABOUT_TITLE: "A propos",
                ABOUT: "Fondateur de <a href='https://www.newsswipe.io'>PlayBot</a>. Développeur et entrepreneur sur Lyon (Incubé à l'<a href='http://entreprendre.univ-lyon3.fr/incubateur-jean-moulin/'>Incubateur Jean Moulin</a>). Notamment spécialisé en NodeJS et Express pour les languages backend. En HTML, CSS, AngularJS pour le FrontEnd. Ionic (cordova) et Android (Java) pour le développement d'applications. ",
                POSITION: "Lyon, France",
                EMAIL: "simonini_thomas@outlook.fr",
                MOBILE_PHONE: "06 70 23 46 06",
                WEBSITE: "www.simoninithomas.com",

                //Compétences
                COMPETENCES: "Compétences",
                COMPETENCES_1: "HTML - CSS (Bootstrap)",
                COMPETENCES_2: "PHP & MySQL",
                COMPETENCES_3: "NodeJS & Express",
                COMPETENCES_4: "MongoDB",
                COMPETENCES_5: "AngularJS",
                COMPETENCES_6: "Ionic (cordova)",
                COMPETENCES_7: "Java pour Android)",
                COMPETENCES_8: "Unity",
                COMPETENCES_9: "Blender",
                COMPETENCES_10: "Python",
                COMPETENCES_11: "Réalité augmentée",

                EXPERT: "Expert",
                PRO: "Pro",
                MAITRISE: "Maitrise",
                CONNAISSANCES: "Connaissances",


                //Formations
                DROITSCIENCESPO_DIPLOMA: "Double Licence de Droit et Sciences politique",
                D2E_DIPLOMA: "Université de Lyon",
                LYONIII_UNIVERSITY: "Université Jean Moulin Lyon III, France",
                LYON_UNIVERSITY: "Université de Lyon, France",
                ENTREPRENEURSHIP_MIT_DIPLOMA: "Certificat de réussite vérifié MIT Entrepreneurship 101 - 102",
                MIT: "edX MIT, USA",

                //Languages
                LANGUAGES: "Langues",
                FRENCH: "Français",
                ENGLISH: "Anglais",
                SPANISH: "Espagnol",
                JAPANESE: "Japonais",

                LANGUAGE_MATERNEL_RANK: "Langue Maternelle",
                LANGUAGE_FLUENT_RANK: "Courant",
                LANGUAGE_SCHOLAR_RANK: "Scolaire",

                //Hobbies
                HOBBIES: "Mes hobbies",
                HOBBIES1: "Créations en réalité augmentée",
                HOBBIES2: "Machine Learning",
                HOBBIES3: "Créations de bots",
                HOBBIES4: "Jeux vidéos",

                //Conferences
                CONFERENCE: "Conférences",

                CONFERENCE1_TITLE: "Intervention au GEA Université Lyon II",
                CONFERENCE1_CITY: "Lyon",

                CONFERENCE2_TITLE: "Intervention au Bercy Café de l'économie Lyon",
                CONFERENCE2_CITY: "Lyon",
                /****************
                 *  Last projects
                 */

                LAST_PROJECTS: "Derniers projets",
                //C'est décidé je m'en vais
                PROJECT1_TITLE: "C'est décidé je m'en vais' ebook pour enfants sur Amazon Kindle Publishing",
                PROJECT1_DATE: "Décembre 2014",
                PROJECT1_DESCRIPTION: "Illustrations effecutées avec Blender.",
                PROJECT1_LINK: "Voir les illustrations",

                //30Tiles
                PROJECT2_TITLE: "30Tiles jeu vidéo sur Android",
                PROJECT2_DATE: "Mars 2015",
                PROJECT2_DESCRIPTION: "Jeu de réflexe développé en C# pour Android avec le moteur de jeu Unity. Le principe : Touchez tous les carreaux qui correspondent à la couleur affichée, plus vous en touchez, plus vous gagnez des secondes et des points. MAIS ATTENTION, la couleur des carreaux change toutes les 3 secondes !",
                PROJECT2_LINK: " Télécharger pour Android",

                //DuckJump
                PROJECT3_TITLE: "DuckJump jeu vidéo sur Android",
                PROJECT3_DATE: "Mai 2015 - Juin 2015",
                PROJECT3_DESCRIPTION: "Jeu d'action développé en C# pour Android avec le moteur de jeu Unity. Le principe : Faites sauter le canard pour éviter les ennemis.",
                PROJECT3_LINK: " Télécharger pour Android",

                //NewsCrawlBot
                PROJECT4_TITLE: "NewsCrawlBot",
                PROJECT4_DATE: "Janvier 2016 - Mars 2016",
                PROJECT4_DESCRIPTION: "Crawler en Python indexant les articles de 10 médias français (Figaro, le Monde, Challenges, Maddyness...) et les classant selon leurs thèmes. Afin d’être proposés uniquement aux utilisateurs aimant ledit thème. Renvoyant ses résultats sur un backend en Parse (BAAS)",
                PROJECT4_LINK: "Lien GitHub",

                //NewsSwipe Website
                PROJECT5_TITLE: "NewsSwipe Site web officiel",
                PROJECT5_DATE: "Mars 2016",
                PROJECT5_DESCRIPTION: "Site officiel du projet NewsSwipe développé en HTML, CSS, AngularJS.",
                PROJECT5_LINK: "NewsSwipe",

                //NewsSwipe
                PROJECT6_TITLE: "Fondateur de NewsSwipe",
                PROJECT6_DATE: "Janvier 2016 - Avril 2016",
                PROJECT6_DESCRIPTION: "NewsSwipe, est une application smartphone de news qui regroupe les médias d’informations. Le but est de générer avec une expérience utilisateur innovante des articles adaptés aux goûts de l’utilisateur tout en lui faisant découvrir des médias qu’il ne connaissait pas. Il peut décider de lire l’article proposé en « swipant » à gauche ou à droite pour passer à un autre. Cette application fonctionne grâce à un crawler (Robot d’indexation) intitulé NewsCrawlBot, c’est un robot scannant les articles des différents médias afin de les classer selon leurs thèmes. Afin d’être proposés uniquement aux utilisateurs aimant ledit thème",
                PROJECT6_LINK: "NewsSwipe",

                //Prestashop
                PROJECT7_TITLE: "Mise en place et intégration d'une Marketplace Prestashop <i class='fa fa-copyright' aria-hidden='true'></i> pour l'Université Lyon III",
                PROJECT7_DATE: "Juin 2016 - Juillet 2016",
                PROJECT7_DESCRIPTION: "Intégration d'une marketplace pour la vente de goodies à l'image de l'Université Jean Moulin (Lyon III) ",
                PROJECT7_LINK: "",

                //Réalitée augmentée
                PROJECT8_TITLE: "Réalitée augmentée",
                PROJECT8_DATE: "Juillet 2016 - ",
                PROJECT8_DESCRIPTION: "Expérimentations de créations en réalité augmentée",
                PROJECT8_LINK: "",

                /****************
                 *  Professionals experiences
                 */
                PROFESSIONNAL_EXPERIENCES: "Expériences professionnelles",

                PROFESSIONNAL_TITLE1: "Fondateur et Développeur Web - ",
                PROFESSIONAL_SUBTITLE1: "Alumni (2014 - 2015)",
                PROFESSIONAL_PARAGRAPH1: "Start-up web qui permettait aux anciens étudiants de pouvoir noter et commenter les formations qu'ils ont effecutées selon 3 critières (qualité de la formation, des infrastructures, réels débouchés professionnels) afin de permettre aux étudiants de pouvoir choisir leurs formations.",

                PROFESSIONNAL_TITLE2: "Chargé d'accueil - ",
                PROFESSIONAL_SUBTITLE2: "Société générale Tournon (Eté 2013; Eté 2014; Eté 2015)",
                PROFESSIONAL_PARAGRAPH2: "Accueil des clients (remise des chèques, prise de rendez vous, réalisation de virements, déblocage cartes), archivage et mise en conformité des dossiers clients, standard téléphonique.",

                PROFESSIONNAL_TITLE3: "Fondateur et Développeur Android - ",
                PROFESSIONAL_SUBTITLE3: "NewsSwipe (2015 - 2016)",
                PROFESSIONAL_PARAGRAPH3: "NewsSwipe, est une application smartphone de news qui regroupe les médias d’informations. Le but est de générer avec une expérience utilisateur innovante des <span class='bold'>articles adaptés aux goûts de l’utilisateur tout en lui faisant découvrir des médias qu’il ne connaissait pas</span>. Il peut décider de lire l’article proposé en « swipant » à gauche ou à droite pour passer à un autre. <span class='bold'>Cette application fonctionne grâce à un crawler (Robot d’indexation) intitulé NewsCrawlBot, c’est un robot scannant les articles des différents médias afin de les classer selon leurs thèmes. Afin d’être proposés uniquement aux utilisateurs aimant ledit thème.</span>",

                PROFESSIONNAL_TITLE4: "Stagiaire : intégrateur d'une marketplace Prestashop <i class='fa fa-copyright' aria-hidden='true'></i> - <span class='place'><a href='http://entreprendre.univ-lyon3.fr/incubateur-jean-moulin/'>Incubateur Jean Moulin</a></span> <span class='year'>(Juin 2016 - Septembre 2016)</span>",
                PROFESSIONAL_PARAGRAPH4: "Mise en place et intégration d'une Marketplace Prestashop <i class='fa fa-copyright' aria-hidden='true'></i> pour l'Université Lyon III",

                //Github
                GITHUB: "Mon GitHub"


            });
        $translateProvider.preferredLanguage('en');
        // Enable escaping of HTML
        $translateProvider.useSanitizeValueStrategy('escapeParameters');

    }])