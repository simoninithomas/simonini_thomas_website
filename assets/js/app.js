/************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************
 *
 *                                                         Marketplace app.js
 * @Author : SIMONINI Thomas, 2016 simonini_thomas@outlook.fr
 ************************************************************************************************************************
 ************************************************************************************************************************
 ************************************************************************************************************************/
angular.module('app', ['app.controllers', 'ngRoute','pascalprecht.translate', 'angulartics', 'angulartics',
    'npm install angulartics'])

    .config(function($routeProvider){
            $routeProvider
                .when('/',{
                    templateUrl: 'assets/templates/french.html'
                })
                .otherwise('/')
        }
    )

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
                //User Page
                HEADER_PROFESSION : "Full Stack Developer",
                HEADLINE_USER:"<b>Find your next mobile game</b>",
                INTRO_TEXT_USER: "Sir PlayABot is an AI on Messenger that <b>suggests games based on your tastes</b>",
                WHY: "Why submit my game ?",


                HEADLINE: "The <b>simpliest way</b> to <b>find success</b> with your mobile game",
                INTRO_TEXT: "Sir PlayABot is a bot on Messenger that <b>suggests games based on user tastes.</b>",
                WAITING_LIST1: "Developers you want <b>to increase dramatically the number of your players ?</b> Submit your games to our bot it's <b> free for the first 100 developers </b>",
                ONLY: "There are only <b>98</b> places left !",
                JOIN_BUTTON: "Submit my game, it's free!",

                WAITING_LIST2 : "Want to chat with Sir PlayABot ?",
                SPEAK_BUTTON: "<i class='fa fa-comments-o' aria-hidden='true'></i> Sir PlayABot find me a good game !",
                SUPPORT: "They support us:",
                KEEP_IN_TOUCH: "Keep in touch!",
                MAILING_LIST:"Subscribe to our newsletter",
                MORE_INFORMATION: "More information ?",
                HOW_IT_WORKS: "How it works ?",
                STEP_1: "<b>1st Step </b><br> Submit your game, we test it and validate it or not<br>",
                STEP_1_FREE: "<b>Free for the first 100 developers !</b>",
                STEP_2: "<b>2nd Step</b> <br> When we validate your game, we <b> save it in our database.</b>",
                STEP_3: "<b>3rd Step </b><br> Your game is <b>display to our users.</b>",

                READY: "Developers, ready to be successful ?",

                SOCIAL_MEDIAS: "",

                SOON:"Soon",
                //Press
                PRESS_TITLE: "We <i class='fa fa-heart-o' aria-hidden='true'></i> the press",
                PRESS_SUBTITLE: "We are glad to speak with you. <b>Contact us </b>",

                //Jobs
                JOBS_TITLE: "Want to join the team?",
                JOBS_PARAGRAPH_YOU: "<b>We’re always looking for passionated, innovative and smart people, so don’t be shy</b>. If you share our passion for bots, get in touch!",

                //About
                OUR_STORY:"Our Story : You Got Me Workin' Workin' Day And Night <i class='fa fa-music' aria-hidden='true'></i>",
                STORY:"Sir PlayABot is a bot on Messenger that <b>suggests games based on user tastes</b>. I found this idea when I was in exams, I wanted to find a way to find good games without spending much time in Google Play",
                OUR_TEAM:"Our team",
                TEAM_SIMONINI:"SIMONINI Thomas, Founder of Sir PlayABot",
                TEAM_SIMONINI_BIOGRAPHY:"I'm an entrepreneur, based in Lyon (Jean Moulin's Incubator). Full Stack Developer (NodeJS, Express, AngularJS, MongoDB). Applications developer Cordova and Native (Java, Swift). I'm a jurist. But I'm passionned about programming and new technologies since I learnt C language when I was 13 years old with the book 'C Programmming Language, 1988' and Visual C++ for Windows 3.1",
                BE_PART_OF_THE_HISTORY:"Want to join the team?",


                //About


                //About
                ABOUT_TITLE: "About us",
                //Footer
                F_ENTREPRISE: "Company",
                F_ABOUT: "About",
                F_CONTACT: "Contact us",
                F_JOBS: "Jobs",
                F_PRESS: "Press",
                F_COMMUNITY: "Community",
                F_BLOG: "Our blog",
                F_FOLLOWUSFACE: "Like our page ",
                F_TWITTER: "Follow us on ",
                F_LN: "Follow us on ",
                F_TERMSOFUSE: "Terms of use",
                F_LANGUAGE: "Language",
                F_FRENCH: "French",
                F_ENGLISH: "English"


            })
            .translations('fr', {
                HEADLINE_USER:"<b>Trouvez votre prochain jeu.</b>",
                INTRO_TEXT_USER: "Sir PlayABot est une intelligence artificielle sur Messenger qui vous propose <b>gratuitement des jeux adaptés à vos goûts</b>",
                WHY: "Pourquoi soumettre mon jeu ?",



                HEADLINE: "<b>Faire connaître vos jeux </b> n'aura jamais été aussi <b>simple</b>",
                INTRO_TEXT: "Sir PlayABot est un bot sur Messenger qui <b>propose à l'utilisateur des jeux adaptés à ses goûts</b>",
                WAITING_LIST1: "Développeurs, vous souhaitez <b>faire connaître votre jeu au plus grand nombre ?</b> Proposez votre jeu à notre bot, c'est <b>gratuit pour nos 100 premiers développeurs !</b>",
                ONLY: "Il ne reste plus que <b>98</b> places gratuites !",
                WAITING_LIST2 : "Envie de parler à Sir PlayABot ?",
                SPEAK_BUTTON: "<i class='fa fa-comments-o' aria-hidden='true'></i> Sir PlayABot trouve moi un jeu !",
                JOIN_BUTTON: "Faire connaître mon jeu gratuitement",
                SUPPORT: "Ils nous soutiennent :",
                KEEP_IN_TOUCH: "Suivez-nous !",
                SOCIAL_MEDIAS: "Sur les réseaux sociaux",
                MAILING_LIST:"En vous inscrivant à notre newsletter",
                MAILING_LIST_BUTTON:"M'inscrire",
                MORE_INFORMATION: "Plus d'informations ?",

                HOW_IT_WORKS: "Comment ça marche ?",
                STEP_1: "<b>Etape 1 </b><br> Vous proposez à notre robot votre jeu, soumis à notre validation<br>",
                STEP_1_FREE: "<b>Gratuit pour nos 100 premiers développeurs !</b>",
                STEP_2: "<b>Etape 2</b> <br> Une fois que nous acceptons votre jeu, nous <b>l'inscrivons dans notre base de données</b>",
                STEP_3: "<b>Etape 3 </b><br> Votre jeu est <b>proposé à nos utilisateurs</b>",

                READY: "Prêt à faire connaître votre jeu ?",

                //About
                ABOUT_TITLE: "Qui sommes-nous ?",
                OUR_STORY:"Notre histoire : You Got Me Workin' Workin' Day And Night <i class='fa fa-music' aria-hidden='true'></i>",
                STORY:"Sir PlayABot est un Bot sur messenger qui propose instantanément à l’utilisateur des jeux/apps adaptés à ses goûts afin de rompre son ennui. Il suffit à l’utilisateur de dire qu’il s’ennuie et nous lui proposons des jeux/apps adaptés à ses goûts. L'idée m'est venue quand moi même je m'ennuyais durant mes révisions pour les examens et que je cherchais des jeux sur Google Play en passant beaucoup de temps pour finalement rien trouver.",
                OUR_TEAM:"Notre équipe",
                TEAM_SIMONINI:"SIMONINI Thomas, Fondateur",
                TEAM_SIMONINI_BIOGRAPHY:"21 ans, je suis développeur et entrepreneur sur Lyon (Incubé à l'Incubateur Jean Moulin). Notamment spécialisé en NodeJS et Express pour les languages backend. En HTML, CSS, AngularJS pour le FrontEnd. Ionic (cordova) et Android (Java) pour le développement d'applications. De formation juridique, je suis passionné par la programmation et les nouvelles technologies depuis que j'ai appris le C avec le sempiternel 'Programming C Language' de 1988 sur Visual C++ pour Windows 3.1 à mes 13 ans.",
                BE_PART_OF_THE_HISTORY:"Tu veux nous rejoindre ?",


                SOON:"En cours de rédaction",
                //Jobs
                JOBS_TITLE: "Envie de rejoindre l'équipe ?",
                JOBS_PARAGRAPH_YOU: "<b>Nous recherchons constament des passionnés, des talentueux, ne soyez pas timide</b>. Vous êtes passionnés et souhaitez participer à la révolution des bots avec PlayBot ? Contactez-nous.",
                JOBS_BUTTON: "Contactez-nous",

                //Press
                PRESS_TITLE: "Nous <i class='fa fa-heart-o' aria-hidden='true'></i> la presse",
                PRESS_SUBTITLE: "Nous sommes toujours ravis de vous rencontrer. <b>N'hésitez pas à nous contacter au</b>",


                //Footer
                F_ENTREPRISE: "Entreprise",
                F_ABOUT: "A propos",
                F_CONTACT: "Contactez-nous",
                F_JOBS: "Rejoignez-nous",
                F_PRESS: "Presse",
                F_COMMUNITY: "Communauté",
                F_BLOG: "Notre blog",
                F_FOLLOWUSFACE: "Aimez notre page ",
                F_TWITTER: "Suivez-nous sur ",
                F_LN: "Suivez-nous sur ",
                F_TERMSOFUSE: "Conditions d'utilisation",
                F_LANGUAGE: "Langue",
                F_FRENCH:"Français",
                F_ENGLISH:"Anglais"

            });
        $translateProvider.preferredLanguage('en');
        // Enable escaping of HTML
        $translateProvider.useSanitizeValueStrategy('escapeParameters');

    }])