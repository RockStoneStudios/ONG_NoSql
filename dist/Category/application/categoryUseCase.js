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
exports.CategoryUseCase = void 0;
const categoryValue_1 = require("../domain/categoryValue");
class CategoryUseCase {
    constructor(useCase) {
        this.useCase = useCase;
        this.getAllCategory = () => __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.useCase.getAllCategories();
            return categories;
        });
        this.getCategoryById = (id) => __awaiter(this, void 0, void 0, function* () {
            const category = yield this.useCase.getCategoryById(id);
            return category;
        });
        this.createCategory = ({ name, description, image, news }) => __awaiter(this, void 0, void 0, function* () {
            const newCategory = new categoryValue_1.CategoryValue({ name, description, image, news });
            const category = yield this.useCase.createCategory(newCategory);
            return category;
        });
        this.deleteCategory = (id) => __awaiter(this, void 0, void 0, function* () {
            const category = yield this.useCase.deleteCategory(id);
            return category;
        });
        this.updateCategory = (id, { name, description, image, news }) => __awaiter(this, void 0, void 0, function* () {
            const updateCategory = new categoryValue_1.CategoryValue({ name, description, image, news });
            const category = yield this.useCase.updateCategory(id, updateCategory);
            return category;
        });
    }
}
exports.CategoryUseCase = CategoryUseCase;
//# sourceMappingURL=categoryUseCase.js.map