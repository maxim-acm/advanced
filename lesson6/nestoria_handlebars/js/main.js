$(document).ready(function() {

    var data = {
        title: 'GOIT',
        body: 'The best'
    };

    var rendered = renderTemplate('entry-template', data);
    $('#content').html(rendered);
});


function renderTemplate(templateName, data) {
    var templateString = $('#' + templateName).html();

    var templateFunc = Handlebars.compile(templateString);
    return templateFunc(data);
}