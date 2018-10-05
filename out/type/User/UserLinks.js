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
const _1 = require(".");
let UserLinks = class UserLinks {
    constructor() {
        this.github = new _1.UserGithubLinks();
        this.steam = new _1.UserSteamLinks();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserLinks.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserSteamLinks, userSteamLinks => userSteamLinks.links, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.UserSteamLinks)
], UserLinks.prototype, "steam", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserGithubLinks, userGithubLinks => userGithubLinks.links, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.UserGithubLinks)
], UserLinks.prototype, "github", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.User, user => user.links),
    __metadata("design:type", _1.User)
], UserLinks.prototype, "user", void 0);
UserLinks = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], UserLinks);
exports.UserLinks = UserLinks;
