var commands = {
    submit: function() {
        return this.waitForElementVisible('@submitButton', 1000)
          .click('@submitButton');
    },

    selectOption: function(dropdown, option) {
        var optionSelector = 'option[value="'+option+'"]';

        return this.waitForElementVisible(dropdown, 1000)
                   .click(dropdown)
                   .waitForElementVisible(optionSelector, 1000)
                   .click(optionSelector);
    }
};


module.exports = {
    url: 'file:///' + __dirname + '/../../../form1/index.html',
    commands: [commands],

    elements: {
        // Inputs
        nameInput:       { selector: '#name' },
        emailInput:      { selector: '#email' },
        usernameInput:   { selector: '#username' },
        passwordInput:   { selector: '#password' },
        repasswordInput: { selector: '#repassword' },
        dayInput:        { selector: '#day' },
        monthSelect:     { selector: '#month' },
        yearInput:       { selector: '#year' },
        genderSelect:    { selector: '#gender' },
        phoneInput:      { selector: '#phone' },

        // Errors
        nameError:       { selector: '[data-error-for="name"]' },
        emailError:      { selector: '[data-error-for="email"]' },
        usernameError:   { selector: '[data-error-for="username"]' },
        passwordError:   { selector: '[data-error-for="password"]' },
        repasswordError: { selector: '[data-error-for="repassword"]' },
        dayError:        { selector: '[data-error-for="day"]' },
        monthError:      { selector: '[data-error-for="month"]' },
        yearError:       { selector: '[data-error-for="year"]' },
        genderError:     { selector: '[data-error-for="gender"]' },
        phoneError:      { selector: '[data-error-for="phone"]' },

        // Submit
        submitButton:    { selector: '#submit' }
    }
};