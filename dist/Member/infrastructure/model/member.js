"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MemberSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    facebookUrl: {
        type: String,
    },
    instagramUrl: {
        type: String
    },
    linkedinUrl: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: false,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Member', MemberSchema);
//# sourceMappingURL=member.js.map