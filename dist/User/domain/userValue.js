"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValue = void 0;
class UserValue {
    constructor({ id, firstName, lastName, age, email, password, photo, roleId, is_deleted }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.password = password;
        this.photo;
        this.roleId = roleId;
        this.is_deleted = is_deleted;
    }
}
exports.UserValue = UserValue;
//# sourceMappingURL=userValue.js.map