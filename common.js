let path = location.pathname.replace(/\//g, ""),
    lang = $.lang().split("-")[0];

const features = {
    drive: {
        ready: true,
        name: {
            fr: "Drive",
            en: "Drive",
            de: "Drive"
        },
        desc: {
            fr: "Hébergez vos fichiers localement sur votre réseau pour qu'ils soient accessible depuis tous les appareils connectés à celui-ci",
            en: "Host your files locally on your network to make them accessible from all devices connected to this one."
        },
        iconSmall: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
        icon: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
    },

    messages: {
        ready: false,
        name: {
            fr: "Messages",
            en: "Messages",
            de: "Nachrichten"
        },
        desc: {
            fr: "Discutez avec les utlisateurs connectées à votre réseau en envoyant des messages, photos, fichiers, podcasts, musiques, etc.",
            en: "Talk with the users connected to your network with messages, pictures, files, podcasts, musics, and so on..."
        },

        iconSmall: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
        icon: "M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
    },

    music: {
        ready: false,
        name: {
            fr: "Musique",
            en: "Music",
            de: "Musik"
        },
        desc: {
            fr: "Écoutez la musique de votre drive sur n'importe quelle page de Nitro.",
            en: "Listen to the music of your drive on any page of Nitro."
        },
        icon: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
    },

    feeds: {
        ready: true,
        name: {
            fr: "Flux",
            en: "Feeds",
            de: "RSS-Feeds"
        },
        desc: {
            fr: "Soyez tenu au courant des flux que vous suivez grâce à Nitro Feeds.",
            en: "Get updated about the feeds you're following with the help of Nitro Feeds."
        },
        icon: '<svg viewBox="0 0 24 24"><circle cx="6.18" cy="17.82" r="2.18"/><path d="M5.59 10.23c-.84-.14-1.59.55-1.59 1.4 0 .71.53 1.28 1.23 1.4 2.92.51 5.22 2.82 5.74 5.74.12.7.69 1.23 1.4 1.23.85 0 1.54-.75 1.41-1.59-.68-4.2-3.99-7.51-8.19-8.18zm-.03-5.71C4.73 4.43 4 5.1 4 5.93c0 .73.55 1.33 1.27 1.4 6.01.6 10.79 5.38 11.39 11.39.07.73.67 1.28 1.4 1.28.84 0 1.5-.73 1.42-1.56-.73-7.34-6.57-13.19-13.92-13.92z"/></svg>'
    },

    downloads: {
        ready: false,
        name: {
            fr: "Téléchargements",
            en: "Downloads",
            de: "Downloads"
        },
        desc: {
            fr: "Un gros fichier à télécharger ? Désormais vous pouvez le faire automatiquement pendant la nuit avec votre appareil Nitro.",
            en: "A huge file to download ? Now you can do this automatically during the night with your Nitro device."
        },
        icon: "M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"
    },

    fitness: {
        ready: false,
        name: {
            fr: "Fitness",
            en: "Fitness",
            de: "Fitness"
        },
        desc: {
            fr: "Voici l'outil qu'il vous fallait pour (enfin) faire du sport quotidiennement pendant quelques minutes. Nitro Fitness vous donne le choix entre plusieurs ecercices courts et efficaces.",
            en: "This is the tool you need to (finally) daily work out during few minutes. Nitro Fitness allows you to choose between many short and efficiency exercises."
        },
        icon: "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.17 12l.57-2.5 2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45l-1.48-1.41.6-3c1.07 1.24 2.62 2.13 4.36 2.41.6.09 1.14-.39 1.14-1 0-.49-.36-.9-.85-.98-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L7.21 7.76c-.74.32-1.22 1.04-1.22 1.85v2.37c0 .55.45 1 1 1s1-.45 1-1v-2.4l1.8-.7-1.6 8.1-3.92-.8c-.54-.11-1.07.24-1.18.78V17c-.11.54.24 1.07.78 1.18l4.11.82c1.06.21 2.1-.46 2.34-1.52z"
    },

    calendar: {
        ready: false,
        name: {
            fr: "Agenda",
            en: "Calendar",
            de: "Kalender"
        },
        desc: {
            fr: "Vous rappelez-vous des calendriers muraux ? Nitro Agenda fait la même chose. Dans un navigateur, avec bien plus de possibilités, sans collectes de données ni publicités.",
            en: "Do you remember about home calendars ? Nitro Calendar do the same. In a browser, with so much possibilities, without data-gathering or ads."
        },
        icon: "M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V8h14v10c0 .55-.45 1-1 1zM8 10h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1z"
    },

    update: {
        ready: true,
        name: {
            fr: "Update",
            en: "Update",
            de: "Kalender"
        },
        desc: {
            fr: "Vous avez déjà fait des mises à jour sur votre ordinateur ? Les mises à jour Nitro n'y ont rien a voir. Cliquez sur un bouton et Nitro se met à jour comme un grand. Après quelques secondes il redémarrera pour que vous poursuivez votre expérience.",
            en: "Have you alreasy do updates on your computer ? Nit updates are totally differents. Click on a simple button and Nitro will install the latest updates. Wait few seconds, it restarts automatically. Then you could continue your Nitro experience."
        },
        icon: "M11 8.75v3.68c0 .35.19.68.49.86l3.12 1.85c.36.21.82.09 1.03-.26.21-.36.1-.82-.26-1.03l-2.87-1.71v-3.4c-.01-.4-.35-.74-.76-.74-.41 0-.75.34-.75.75zm10 .75V4.21c0-.45-.54-.67-.85-.35l-1.78 1.78c-1.81-1.81-4.39-2.85-7.21-2.6-4.19.38-7.64 3.75-8.1 7.94C2.46 16.4 6.69 21 12 21c4.59 0 8.38-3.44 8.93-7.88.07-.6-.4-1.12-1-1.12-.5 0-.92.37-.98.86-.43 3.49-3.44 6.19-7.05 6.14-3.71-.05-6.84-3.18-6.9-6.9C4.94 8.2 8.11 5 12 5c1.93 0 3.68.79 4.95 2.05l-2.09 2.09c-.32.32-.1.86.35.86h5.29c.28 0 .5-.22.5-.5z"
    },

    home: {
        ready: true,
        name: {
            fr: "Accueil",
            en: "Home",
            de: "Homepage"
        },
        desc: {
            fr: "Un endroit unique ou toutes les informations de Nitro sont à portée de clic. Un rapide aperçu de la météo et de vos tâches à venir permet quelquefois de jeter un coup d'oeil à la simple page d'accueil pour obtenir ce que vous cherchez !",
            en: "A unique place where all Nitro's informations are at a click's reach. A quick overview of the weather and your next tasks allows sometimes having a look on the home page to get what you are looking for."
        },
        icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
        iconSmall: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
    }
};

/* 02 / Nav / @nav
====================== */
$("#nav .logo").on("click", function() {
    if (path != "") {
        document.location.href = "/";
    }
});

$("#nav .logo").on("enter", function() {
    $("path", this).removeClass("filled");

    setTimeout(() => {
        $(".path2", this).addClass("filled");
        setTimeout(() => {
            $(".path1", this).addClass("filled");
        }, 70);
    }, 30);
});

$("#nav .links a").on("enter", function() {
    if ($(this).attr("href").replace("/", "") == path) {
        $("#nav .links .line").addClass("hidden");
        return false;
    }

    let left = $("span", this).prop("offsetLeft"),
        width = $("span", this).prop("offsetWidth");
        $("span", this).css("color", $(this).data("clr"));

    $("#nav .links .line").removeClass("hidden").css({
        left: left+"px",
        width: width+"px",
        "background-color": $(this).data("clr")
    });
});

$("#nav .links a").on("leave", function() {
    $("span", this).removeAttr("style");

    $("#nav .links .line").css({
        width: "0px",
        "background-color": "white"
    }).addClass("hidden");
});

$(window).on("scroll", () => {
    if (window.scrollY == 0) {
        $("#nav").removeClass("shadow");
    } else {
        $("#nav").addClass("shadow");
    }
});

if (lang != "en") {
    $("#nav .links [href$='start'] span").html(translations.getStarted[lang]);
    $("#nav .links [href$='features'] span").html(translations.features[lang]);
    $("#nav .links [href$='pricing'] span").html(translations.pricing[lang]);
    $("#nav .links [href$='about'] span").html(translations.about[lang]);
}