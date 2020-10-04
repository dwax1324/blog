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
exports.TagPost = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Post_1 = require("./Post");
const Tag_1 = require("./Tag");
let TagPost = class TagPost extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], TagPost.prototype, "tagId", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], TagPost.prototype, "postId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Tag_1.Tag, (tag) => tag.postConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: "tagId" }),
    __metadata("design:type", Promise)
], TagPost.prototype, "tag", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Post_1.Post, (post) => post.tagConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: "postId" }),
    __metadata("design:type", Promise)
], TagPost.prototype, "post", void 0);
TagPost = __decorate([
    typeorm_1.Entity()
], TagPost);
exports.TagPost = TagPost;
//# sourceMappingURL=TagPost.js.map