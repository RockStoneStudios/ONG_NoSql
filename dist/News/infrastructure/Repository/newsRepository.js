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
const news_1 = __importDefault(require("../model/news"));
const category_1 = __importDefault(require("../../../Category/infrastructure/model/category"));
class MongoRepository {
    getAllNews() {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield news_1.default.find();
            return news;
        });
    }
    getNewsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield news_1.default.findById(id);
            return news;
        });
    }
    createNews(news) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const newNews = new news_1.default(news);
            const category = yield category_1.default.findById(newNews.category);
            newNews.category = category === null || category === void 0 ? void 0 : category._id;
            yield newNews.save();
            (_a = category === null || category === void 0 ? void 0 : category.news) === null || _a === void 0 ? void 0 : _a.push(newNews === null || newNews === void 0 ? void 0 : newNews._id);
            category === null || category === void 0 ? void 0 : category.save();
            return newNews;
        });
    }
    deleteNews(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield news_1.default.findByIdAndDelete(id);
            return news;
        });
    }
    updateNews(id, news) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateNews = yield news_1.default.findByIdAndUpdate(id, news, { new: true });
            return updateNews;
        });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=newsRepository.js.map