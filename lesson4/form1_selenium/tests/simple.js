
module.exports = {
    'Nagative: test registration form' : function (client) {
        var registration = client.page.registration();

        registration.navigate()
            .enterRegistrationData({
                name:       '',
                email:      'user@mail.com',
                password:   'pass',
                repassword: 'password',
                month:      '02',
                day:         20,
                year:        1940,
                gender:      'm',
                phone:       '123123123'
            })
            .submit();

        client.pause(1000);

        registration.expect.element('@nameError').text.to.equal('Name is required')
        registration.expect.element('@passwordError').text.to.equal('Password is too short');


        client.end();
    }
};