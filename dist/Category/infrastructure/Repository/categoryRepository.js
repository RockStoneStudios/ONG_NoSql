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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const category_1 = __importDefault(require("../model/category"));
class MongoRepository {
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield category_1.default.find().populate({ path: 'news', select: '-_id -category' });
            return categories;
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = new category_1.default(category);
            yield newCategory.save();
            return newCategory;
        });
    }
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield category_1.default.findById(id);
            return category;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield category_1.default.findByIdAndDelete(id);
            return category;
        });
    }
    updateCategory(id, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateCategory = yield category_1.default.findByIdAndUpdate(id, category, { new: true });
            return updateCategory;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=categoryRepository.js.map