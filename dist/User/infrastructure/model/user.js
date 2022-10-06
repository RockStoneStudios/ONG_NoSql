"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Userchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    photo: {
        type: String,
        required: false
    },
    role: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Rol'
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: false,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('User', Userchema);
//# sourceMappingURL=user.js.map