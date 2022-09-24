"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const conection_1 = __importDefault(require("./database/conection"));
const user_1 = __importDefault(require("./User/infrastructure/Router/user"));
class Server {
    constructor() {
        this.api = {
            user: '/api/user'
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
    }
}
new Server();
//# sourceMappingURL=app.js.map