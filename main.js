let device = "nitro.local",
    lastVersion;

    device = "http://"+device+"/";

let features = {
    drive: {
        name: {
            fr: "Drive",
            en: "Drive"
        },
        desc: {
            fr: "Hébergez vos fichiers localement sur votre réseau pour qu'ils soient accessible depuis tous les appareils connectés au réseau.",
            en: "Host your files locally on your network to make them accessible drom all devices connected to this network."
        },
        icon: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
    },

    message: {
        name: {
            fr: "Messages",
            en: "Messages"
        },
        desc: {
            fr: "Discutez avec les utlisateurs connectées à votre réseau en envoyant des messages, photos, fichiers, podcasts, musiques, etc.",
            en: "Talk with the users connected to your network with messages, pictures, files, podcasts, musics, and so on..."
        },

        iconSmall: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
        icon: "M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
    },

    music: {
        name: {
            fr: "Musique",
            en: "Music"
        },
        desc: {
            fr: "Écoutez de la musique .",
            en: "Talk with the users connected to your network with messages, pictures, files, podcasts, musics, and so on..."
        },
        icon: "M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
    }
};

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