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
const _1 = require(".");
let UserSteamLinks = class UserSteamLinks {
    constructor() {
        this.userId = null;
        this.token = null;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserSteamLinks.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserSteamLinks.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true, select: false }),
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], UserSteamLinks.prototype, "token", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserLinks, userLinks => userLinks.steam),
    __metadata("design:type", _1.UserLinks)
], UserSteamLinks.prototype, "links", void 0);
UserSteamLinks = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], UserSteamLinks);
exports.UserSteamLinks = UserSteamLinks;
