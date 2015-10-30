$(document).ready(function() {

    var Ajax = {
        ajax_get: function (url, callback) {

            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    console.log('responseText:' + xmlhttp.responseText);
                    try {
                        var data = JSON.parse(xmlhttp.responseText);
                    } catch (err) {
                        console.log(err.message + " in " + xmlhttp.responseText);
                        return;
                    }
                    callback(data);
                }
            };

            xmlhttp.open("GET", url, true);
            xmlhttp.send();

        }
    };

    function City() {

        this.findCity = function (name) {
            Ajax.ajax_get('http://crossorigin.me/http://api.nestoria.co.uk/api?listing_type=rent&place_name=' + name + '&encoding=json&pretty=1&action=search_listings&country=uk', function (data) {


                Handlebars.registerHelper('niceDate', function (unixTime) {
                    return moment.unix(unixTime).fromNow();
                });

                var arr = {
                    location: data.request.location,
                    numberOfProperties: data.response.listings.length,
                    searchDate: data.response.created_unix,
                    properties: data.response.listings.map(formatProperty),
                };

                var rendered = renderTemplate('entry-template', arr);

                $('#content').html(rendered);

                $('#prew-size').bind('click', function () {
                    $(this).children('span').toggleClass('hide');
                    $('.proposition-full').toggleClass('hide');
                    $('.proposition').toggleClass('hide');
                });
            });

            function formatProperty(originalProperty) {
                return {
                    title: originalProperty.title,
                    price: originalProperty.price,
                    currency: originalProperty.price_currency,
                    imgURL: originalProperty.img_url,
                    summary: originalProperty.summary,
                    bedroom_number: originalProperty.bedroom_number,
                    lister_url: originalProperty.lister_url,
                    keywords: originalProperty.keywords
                };
            }

            function renderTemplate(templateName, arr) {
                var templateString = $('#' + templateName).html();

                var templateFunc = Handlebars.compile(templateString);
                return templateFunc(arr);
            }


        };
    }

    var city = new City();

    var input = document.forms.requestCity.elements.cityName;



    $('#search-btn').bind('click', function() {
        city.findCity(input.value);
    });

    });