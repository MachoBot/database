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
let GuildSettings = class GuildSettings {
    constructor() {
        this.suggestionChannel = null;
        this.musicTextChannel = null;
        this.musicVoiceChannel = null;
        this.logChannel = null;
        this.levelUpMessages = true;
        this.voteSkipEnabled = true;
        this.voteClearEnabled = true;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GuildSettings.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", Object)
], GuildSettings.prototype, "suggestionChannel", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", Object)
], GuildSettings.prototype, "musicTextChannel", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", Object)
], GuildSettings.prototype, "musicVoiceChannel", void 0);
__decorate([
    typeorm_1.Column('varchar', { nullable: true }),
    __metadata("design:type", Object)
], GuildSettings.prototype, "logChannel", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], GuildSettings.prototype, "levelUpMessages", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], GuildSettings.prototype, "voteSkipEnabled", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], GuildSettings.prototype, "voteClearEnabled", void 0);
__decorate([
    typeorm_1.OneToOne(type => _1.Guild, guild => guild.settings),
    __metadata("design:type", _1.Guild)
], GuildSettings.prototype, "guild", void 0);
GuildSettings = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [])
], GuildSettings);
exports.GuildSettings = GuildSettings;
