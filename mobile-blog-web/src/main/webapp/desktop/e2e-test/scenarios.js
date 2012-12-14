'use strict';

describe('Desktop - E2E-Tests', function() {

    describe('Registration test', function() {

        it('should redirect to "/login" after successful registration', function() {
            browser().navigateTo('/blog/desktop/#/login');
            element('#registerLinkBtn', 'register route btn').click();
//            browser().navigateTo('/blog/desktop/#/register');

            input('user.username').enter('jd');
            input('user.password').enter('pwd');
            input('user.firstname').enter('John');
            input('user.surname').enter('Doe');
            input('user.email').enter('john@doe.com');

            element('#registerSubmitBtn', 'register form submit button').click();

            expect(browser().location().url()).toBe('/login');
        });

    });

});
