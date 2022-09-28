"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    news: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'News'
        }
    ]
}, {
    timestamps: false,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('Category', CategorySchema);
//# sourceMappingURL=category.js.map