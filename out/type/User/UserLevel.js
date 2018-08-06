"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
let UserLevel = class UserLevel {
    constructor() {
        this.xp = 0;
        this.level = 0;
        this.timestamp = new Date().getTime();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserLevel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('number'),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UserLevel.prototype, "xp", void 0);
__decorate([
    typeorm_1.Column('number'),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UserLevel.prototype, "level", void 0);
__decorate([
    typeorm_1.Column('number'),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], UserLevel.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.OneToOne(type => User_1.User, user => user.level),
    __metadata("design:type", User_1.User)
], UserLevel.prototype, "user", void 0);
UserLevel = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], UserLevel);
exports.UserLevel = UserLevel;
