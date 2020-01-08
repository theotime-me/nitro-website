let device = "nitro.local",
    lastVersion;

    device = "http://"+device+"/";

let catchPhrases = [
    {
        fr: "gérez vos fichiers",
        en: "manage your files",
        de: "ihre Dateien verwalten",
        feature: "drive"
    },

    {
        fr: "envoyez des messages",
        en: "send messages",
        de: "Nachrichten senden",
        feature: "messages"
    },

    {
        fr: "regardez des vidéos",
        en: "watch videos",
        de: "sich Videos sehen",
        feature: "drive"
    },

    {
        fr: "écoutez votre musique",
        en: "listen to your music",
        de: "deine Musik hören",
        feature: "music"
    },

    {
        fr: "gardez la ligne",
        en: "Work out few minutes",
        de: "gesund bleiben",
        feature: "fitness"
    },

    {
        fr: "tenez-vous au courant",
        en: "get updated with feeds",
        de: "sich informieren mit Feeds",
        feature: "feeds"
    },

    {
        fr: "partagez vos médias",
        en: "share your medias",
        de: "ihre Medien teilen",
        feature: "messages"
    },

    {
        fr: "téléchargez des grands fichiers",
        en: "download huge files",
        de: "große Dateien herunterladen",
        feature: "downloads"
    },
];

/* 02 / Nav / @nav
====================== */
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

/* 02 / Catch Phrases / @catch
================================== */
function upCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

(function() {
    let indexes = [],
        phrases = [],
        length = 7,
        out = "";

    let random;

    for (let i = 0; i<length; i++) {
        while (indexes.includes(random) || !random) {
            random = Math.floor(Math.random() * catchPhrases.length);
        }

        indexes.push(random);
    }

    indexes.forEach((index, i) => { 
        let phrase = "<a style='opacity: "+((10 - i*1.8) /10)+"'"+(!features[catchPhrases[index].feature].ready ? ' class="notReady"' : "")+">"+(i == 0 ? upCase(catchPhrases[index][lang]) : catchPhrases[index][lang])+",<br></a>";

        out += phrase+"";
    });

    $("#wrapper .text .catch").html(out);
})();

/* 02 / Connect / @connect
============================== */
const check = {
    send() {
        $.getJSON(device+"check", response => {
            if (response) {
                this.device = response;
                this.show();
            }
        });
    },

    show() {
        $("#connect img").attr("src", device+"medias/devices/"+this.device.device.toLowerCase()+".png");
        $("#connect p .description").html(this.device.version == lastVersion ? "last version" : "outdated");
		$("#connect p .version").html("("+this.device.version+")");
		$("#connect a").attr("href", device);

        $("#connect").css("display", "");

        setTimeout(() => {
            $("#connect").removeClass("hidden");
        }, 50);
    },

    hide() {

    }
};

$("#connect .info").on("click", () => {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: device+"device"
    }).click();
});

$(() => {
    $.getJSON("https://raw.githubusercontent.com/theotime-me/nitro/master/package.json", package => {
		lastVersion = package.version;
		check.send();
    });
});

setInterval(() => {
    if (!check.device) {
        check.send();
    }
}, 7000);

/* 02 / Features / @features
================================ */
function displayFeature(featureID, ctx) {
    if (!Object.keys(features).includes(featureID)) {
        while (!featureID || !features[featureID].ready) {
            featureID = Object.keys(features)[Math.floor(Math.random() * Object.keys(features).length)];
        }
    }

    Object.values(features).forEach((feature, i) => {
        let id = Object.keys(features)[i];
        
            if (id == featureID) {
                feature = features[id];
            let icon = feature.iconSmall || feature.icon;
                icon = feature.icon;

                if (!icon.startsWith("<svg")) {
                    icon = '<svg viewBox="0 0 24 24"><path d="'+icon+'"/></svg>';
                }

                $("#features .small svg").removeClass("highlighted");
                $("#features .small [data-id='"+id+"']").addClass("highlighted");

                $("#features .selected .icon").html(icon);
                $("#features .selected h4").html(feature.name[lang]);
                $("#features .selected p").html(feature.desc[lang]);

                $("#features .picture .img").css("background-image", "url(/graphics/screenshots/nitro-"+id+".png)");
            }
    });

    if (ctx != "starting") {
        document.location.href = "#features";
    }
}

$("#features .small").html("");

Object.values(features).forEach((feature, i) => {
    let icon = feature.iconSmall || feature.icon,
        id = Object.keys(features)[i];

    if (!icon.startsWith("<svg")) {
        icon = '<svg'+(!feature.ready ? " class='notReady'" : "")+' viewBox="0 0 24 24" data-id="'+id+'" onclick="displayFeature(\''+id+'\');"><path d="'+icon+'"/></svg>';
    } else {
        icon = icon.replace("<svg", '<svg data-id="'+id+'" onclick="displayFeature(\''+id+'\');"');
    }

    $("#features .small").append(icon);
});

displayFeature(null, "starting");

/* 02 / Translations / @translations
======================================== */
$("#wrapper .text .punchline").html(translations.punchline[lang]);

if (lang != "en") {
    $("#wrapper .text h5 span").html(translations.welcomeTo[lang]);
    $("#features > h4").html(translations.features[lang]);
}

/* 03 / h1 Animation / @anim
================================ */
$(function(){
    let words = translations.thisIs[lang].split(" ").concat(["Nitro", "Nitro."]),
        i = 0, x;

    x = setInterval(() => {
        if (!words[i]) {
            clearInterval(x);
            return false;
        }

        $("#wrapper .text > h1").html(words[i]);

        i++;
    }, 600);
});