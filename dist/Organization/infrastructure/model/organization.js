"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrganizationSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false,
        default: null
    },
    phone: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    welcomeText: {
        type: String,
        required: false,
        default: 'Hello Organization'
    },
    aboutUsText: {
        type: String,
        required: false
    },
    delete_at: {
        type: Date,
        default: null
    },
    slide: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Slide'
    }
}, {
    timestamps: false,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)('Organization', OrganizationSchema);
//# sourceMappingURL=organization.js.map