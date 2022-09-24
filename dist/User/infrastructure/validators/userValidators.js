"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = require("../helpers/validateHelper");
exports.validateCreate = [
    (0, express_validator_1.check)('firstName').exists().not().isEmpty(),
    (0, express_validator_1.check)('lastName').exists().not().isEmpty(),
    (0, express_validator_1.check)('age').isNumeric().not().isEmpty(),
    (0, express_validator_1.check)('email').exists().isEmail(),
    (0, express_validator_1.check)('password').exists().not().isEmpty().isLength({ min: 6 }),
    (0, express_validator_1.check)('photo').exists().isEmpty(),
    (req, res, next) => {
        (0, validateHelper_1.validateResult)(req, res, next);
    }
];
//# sourceMappingURL=userValidators.js.map