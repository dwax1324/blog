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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Tag_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Post_1 = require("./Post");
const TagPost_1 = require("./TagPost");
let Tag = Tag_1 = class Tag extends typeorm_1.BaseEntity {
    async posts({ postsLoader }) {
        const load = await postsLoader.load(this.id);
        return load;
    }
    async postsLength({ postsLoader }) {
        const load = await postsLoader.load(this.id);
        if ((load === null || load === void 0 ? void 0 : load.length) === undefined)
            return 0;
        return load.length;
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tag.prototype, "text", void 0);
__decorate([
    typeorm_1.OneToMany(() => TagPost_1.TagPost, (tp) => tp.tag),
    __metadata("design:type", Promise)
], Tag.prototype, "postConnection", void 0);
__decorate([
    type_graphql_1.Field(() => [Post_1.Post], { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Tag.prototype, "posts", null);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Tag.prototype, "postsLength", null);
__decorate([
    typeorm_1.ManyToOne(() => Tag_1, (tag) => tag.childCategories),
    __metadata("design:type", Tag)
], Tag.prototype, "parentCategory", void 0);
__decorate([
    typeorm_1.OneToMany(() => Tag_1, (tag) => tag.parentCategory),
    __metadata("design:type", Array)
], Tag.prototype, "childCategories", void 0);
Tag = Tag_1 = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Tag);
exports.Tag = Tag;
//# sourceMappingURL=Tag.js.map