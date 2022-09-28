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
exports.NewsController = void 0;
class NewsController {
    constructor(newsCase) {
        this.newsCase = newsCase;
        this.getAllNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield this.newsCase.getAllNews();
                return res.status(200).json(news);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.getNewsById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield this.newsCase.getNewsById(req.params.id);
                return res.status(200).json(news);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.createNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield this.newsCase.createNews(req.body);
                return res.status(200).json(news);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.deleteNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield this.newsCase.deleteNews(req.params.id);
                return res.status(200).json({ message: `the News ${news === null || news === void 0 ? void 0 : news.name} has been Delete Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
        this.updateNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const news = yield this.newsCase.updateNews(req.params.id, req.body);
                return res.status(200).json({ message: `The news ${news === null || news === void 0 ? void 0 : news.name} has been updated Successful` });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.NewsController = NewsController;
//# sourceMappingURL=news.js.map