jQuery(document).ready(function ($)
{
    function highlightCurrentPageInNavBar() {
        var url = window.location.href;

        if (url.includes("/about")) {
            $("#menu-item-about").addClass("active");
        } else if (url.includes("/download") || url.includes("/next-release-preview")) {
            $("#menu-item-download").addClass("active")
        } else if (url.includes("/support/contact-us")) {
            $("#menu-item-contact-us").addClass("active");
        } else if (url.includes("/support")) {
            $("#menu-item-support").addClass("active");
        } else if (url.includes("/blog") || url.includes("/news") || url.includes("/releases")) {
            $("#menu-item-blog").addClass("active");
        }
    }
    highlightCurrentPageInNavBar();

    $('#clwc_overview').find('area').each(function () {
        var position_my = 'center left',
            position_at = 'center right';

        switch ($(this).data('tooltip-name')) {
            case 'about':
                position_my = 'top center';
                position_at = 'bottom center';
                break;
            case 'help':
            case 'tools':
            case 'settings':
                position_my = 'bottom center';
                position_at = 'top center';
                break;
        }

        addTooltipToPageFirstTime($(this), position_my, position_at);
    });

    function addTooltipToPageFirstTime(event_target, position_my, position_at) {
        event_target.qtip({
            "position": {
                "my": position_my,
                "at": position_at
            },
            "content": {
                "text": $("#clwc_overview_" + event_target.data('tooltip-name'))
            },
            "style": {
                "classes": "qtip-dark qtip-shadow"
            },
            "show": {
                "effect": function () {
                    $(this).fadeTo(500, 1);
                }
            },
            "hide": {
                "fixed": true,
                "delay": 300
            }
        });
    }

    $(".btn-download").on("click", function () {
        if (typeof window.newrelic !== "undefined") {
            window.newrelic.addPageAction("download", {"clicked": true});
        }
    });

    $("#get-in-touch").click(function() {
        window.top.location.href = 'ma' + 'il' + 'to' + ':' + 'supp' + 'ort' + '@' + 'cust' + 'omlivewallpapercreator.com' + '?' + 'sub' + 'ject' + '=' + 'Hello';
    });
    $("#hmm").text('supp' + 'ort' + '@' + 'cu' + 'stomlivewallpapercreator.com');
});
