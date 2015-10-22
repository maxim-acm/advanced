$(document).ready(function() {

    var data = {
        location: DATA.request.location,
        numberOfProperties: DATA.response.listings.length,
        searchDate: DATA.response.created_http
    };

    var rendered = renderTemplate('entry-template', data);
    $('#content').html(rendered);
});


function renderTemplate(templateName, data) {
    var templateString = $('#' + templateName).html();

    var templateFunc = Handlebars.compile(templateString);
    return templateFunc(data);
}
