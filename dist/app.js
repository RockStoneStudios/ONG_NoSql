"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const conection_1 = __importDefault(require("./database/conection"));
const user_1 = __importDefault(require("./User/infrastructure/Router/user"));
const role_1 = __importDefault(require("./Role/infrastructure/Router/role"));
const category_1 = __importDefault(require("./Category/infrastructure/Router/category"));
const news_1 = __importDefault(require("./News/infrastructure/Router/news"));
const member_1 = __importDefault(require("./Member/infrastructure/Router/member"));
const organization_1 = __importDefault(require("./Organization/infrastructure/Router/organization"));
class Server {
    constructor() {
        this.api = {
            user: '/api/user',
            role: '/api/role',
            category: '/api/category',
            news: '/api/news',
            memeber: '/api/member',
            organization: '/api/organization'
        };
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT);
        this.Middlewares();
        this.Listen();
        conection_1.default;
        this.Routes();
    }
    Middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log(`Starting Server on Port --> ${this.port}`);
        });
    }
    Routes() {
        this.app.use(this.api.user, user_1.default);
        this.app.use(this.api.role, role_1.default);
        this.app.use(this.api.category, category_1.default);
        this.app.use(this.api.news, news_1.default);
        this.app.use(this.api.memeber, member_1.default);
        this.app.use(this.api.organization, organization_1.default);
    }
}
new Server();
//# sourceMappingURL=app.js.map