$(document).ready(function() {

    var data = {
        location: DATA.request.location,
        numberOfProperties: DATA.response.listings.length,
        searchDate: DATA.response.created_http,
        properties: [
            {
                title: 'Property 1',
                price: 10,
                currency: 'USD',
                imgURL: 'http://1.l.uk.nestoria.nestimg.com/lis/3/7/b/2ddbe2e5b1f0bcf52f270f79d254cb1faad46.2.jpg'
            },
            {
                title: 'Property 1',
                price: 10,
                currency: 'USD',
                imgURL: 'http://1.l.uk.nestoria.nestimg.com/lis/3/7/b/2ddbe2e5b1f0bcf52f270f79d254cb1faad46.2.jpg'
            }
        ]
    };

    var rendered = renderTemplate('entry-template', data);
    $('#content').html(rendered);
});


function renderTemplate(templateName, data) {
    var templateString = $('#' + templateName).html();

    var templateFunc = Handlebars.compile(templateString);
    return templateFunc(data);
}
