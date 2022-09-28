"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validator_1 = require("express-validator");
const validateHelpers_1 = require("../helpers/validateHelpers");
exports.validateCreate = [
    (0, express_validator_1.check)('name').exists().not().isEmpty(),
    (0, express_validator_1.check)('description').exists().not().isEmpty(),
    (req, res, next) => {
        (0, validateHelpers_1.validateResult)(req, res, next);
    }
];
//# sourceMappingURL=roleValidators.js.map