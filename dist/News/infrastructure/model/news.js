"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NewsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Category'
    },
}, {
    timestamps: false,
    versionKey: false
});
exports.default = (0, mongoose_1.model)('News', NewsSchema);
//# sourceMappingURL=news.js.map