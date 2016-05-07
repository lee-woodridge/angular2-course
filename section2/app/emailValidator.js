System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidator;
    return {
        setters:[],
        execute: function() {
            // Validators return either null if they pass
            // or {<validationRule>: <value>} if they fail.
            EmailValidator = (function () {
                function EmailValidator() {
                }
                EmailValidator.emailCheck = function (control) {
                    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                    if (control.value.length > 0) {
                        var valid = re.test(control.value);
                        console.log(control.value, valid);
                        if (!valid) {
                            return {
                                emailCheck: {
                                    emailCheck: valid
                                }
                            };
                        }
                    }
                    return null;
                };
                return EmailValidator;
            }());
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
//# sourceMappingURL=emailValidator.js.map