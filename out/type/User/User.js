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
const __1 = require("..");
let User = class User {
    constructor(user) {
        if (user) {
            Object.assign(this, user);
        }
        this.dateCreated = new Date().getTime().toString();
        this.dateLastMessage = new Date().getTime().toString();
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], User.prototype, "banned", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.IsNumberString(),
    __metadata("design:type", String)
], User.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.Column('varchar'),
    class_validator_1.IsNumberString(),
    __metadata("design:type", String)
], User.prototype, "dateLastMessage", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserBalance, balance => balance.user, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.UserBalance)
], User.prototype, "balance", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserLevel, level => level.user, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.UserLevel)
], User.prototype, "level", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.UserLinks, links => links.user, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", _1.UserLinks)
], User.prototype, "links", void 0);
__decorate([
    typeorm_1.OneToMany(type => __1.MusicPlaylist, musicPlaylist => musicPlaylist.user, {
        cascade: true,
        onDelete: 'CASCADE'
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Array)
], User.prototype, "playlists", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], User.prototype, "admin", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        select: false
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], User.prototype, "accessToken", void 0);
User = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [User])
], User);
exports.User = User;
