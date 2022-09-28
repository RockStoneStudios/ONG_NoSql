"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
class CategoryController {
    constructor(categoryCase) {
        this.categoryCase = categoryCase;
        this.getAllCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield this.categoryCase.getAllCategory();
                return res.status(200).json(categories);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryCase.createCategory(req.body);
                return res.status(200).json(category);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getCategoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryCase.getCategoryById(req.params.id);
                return res.status(200).json(category);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryCase.deleteCategory(req.params.id);
                return res.status(200).json(category);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryCase.updateCategory(req.params.id, req.body);
                return res.status(200).json(category);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.js.map