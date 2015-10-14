module.exports = {
    'Nagative: test registration form' : function (client) {
        var registration = client.page.registration();

        registration.navigate()
            .setValue('@nameInput', '')
            .setValue('@emailInput', 'user@mail.com')
            .setValue('@usernameInput', 'someuser')
            .setValue('@passwordInput', 'pass')
            .setValue('@repasswordInput', 'repassword')
            .selectOption('@monthSelect', '02')
            .setValue('@dayInput', 20)
            .setValue('@yearInput', 1930)
            .selectOption('@genderSelect', 'm')
            .setValue('@phoneInput', '123123123')
            .submit();

        client.pause(1000);

        registration.expect.element('@nameError').text.to.equal('Name is required')
        registration.expect.element('@passwordError').text.to.equal('Password is too short');


        client.end();
    }
};