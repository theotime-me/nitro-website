let device = "nitro.local",
    lastVersion;

    device = "http://"+device+"/";

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