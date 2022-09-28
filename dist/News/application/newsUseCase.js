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
exports.NewsUseCase = void 0;
const newsValue_1 = require("../domain/newsValue");
class NewsUseCase {
    constructor(useCase) {
        this.useCase = useCase;
        this.getAllNews = () => __awaiter(this, void 0, void 0, function* () {
            const news = yield this.useCase.getAllNews();
            return news;
        });
        this.getNewsById = (id) => __awaiter(this, void 0, void 0, function* () {
            const news = yield this.useCase.getNewsById(id);
            return news;
        });
        this.createNews = ({ name, content, image, category }) => __awaiter(this, void 0, void 0, function* () {
            const newNews = new newsValue_1.NewsValue({ name, content, image, category });
            const news = yield this.useCase.createNews(newNews);
            return news;
        });
        this.deleteNews = (id) => __awaiter(this, void 0, void 0, function* () {
            const news = yield this.useCase.deleteNews(id);
            return news;
        });
        this.updateNews = (id, { name, content, image, category }) => __awaiter(this, void 0, void 0, function* () {
            const updateNews = new newsValue_1.NewsValue({ name, content, image, category });
            const news = yield this.useCase.updateNews(id, updateNews);
            return news;
        });
    }
}
exports.NewsUseCase = NewsUseCase;
//# sourceMappingURL=newsUseCase.js.map