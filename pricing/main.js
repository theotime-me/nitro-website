

/* 01 / Features in table / @table @features
================================================ */
(function(){
    $("#wrapper .table.recommended .features").html("");
})();

let limit = 7;

Object.values(features).forEach((feature, i) => {
    if (i > limit+1) return false;

    let icon = feature.iconSmall || feature.icon,
        id = Object.keys(features)[i],
        isLast = false;

    if (i == limit+1) {
        feature.name = translations.andSoMuchMore;
        icon = '<svg viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>';
        isLast = true;
    }

    if (!icon.startsWith("<svg")) {
        icon = '<svg viewBox="0 0 24 24"><path d="'+icon+'" /></svg>';
    }

    $("#wrapper .table.recommended .features").append(`<a${isLast ? ' class="last"' : ""} href="${isLast ? "/features/" : "/features/#"+id}">${icon}<h4>${feature.name[lang]}</h4></a>`);
});

$("#wrapper .table.recommended .features").addClass("visible");
$("#wrapper .table.recommended > p").html(translations.toUseNitro[lang]);
$("#wrapper .table.donation > p").html(translations.toEnsureHosting[lang]);

if (lang != "en") {
    $("#wrapper > h4").html(translations.pricingPunchline[lang]);
    $("#wrapper .table.recommended").attr("dot", translations.recommended[lang]);
    $("#wrapper .table.donation > a").html(translations.fundProject[lang]);
}