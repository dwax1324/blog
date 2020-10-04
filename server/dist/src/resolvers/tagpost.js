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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPostResolver = void 0;
const Post_1 = require("../entities/Post");
const type_graphql_1 = require("type-graphql");
const Tag_1 = require("../entities/Tag");
const TagPost_1 = require("../entities/TagPost");
let postInput = class postInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], postInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], postInput.prototype, "description", void 0);
postInput = __decorate([
    type_graphql_1.InputType()
], postInput);
let TagPostResolver = class TagPostResolver {
    async posts() {
        return Post_1.Post.find();
    }
    async tags() {
        return Tag_1.Tag.find();
    }
    async post(id) {
        const post = await Post_1.Post.findOne({ id: id });
        return post;
    }
    async updatePost(id, input) {
        const post = await Post_1.Post.findOne({ id: id });
        const createdAt = post === null || post === void 0 ? void 0 : post.createdAt;
        const updatedAt = new Date();
        if (!post)
            throw new Error("그런 포스트는 존재하지 않아!");
        Object.assign(post, {
            title: input.title,
            description: input.description,
            createdAt: createdAt,
            updatedAt: updatedAt,
        });
        await (post === null || post === void 0 ? void 0 : post.save());
        return post;
    }
    async createPost(input) {
        return Post_1.Post.create(Object.assign({}, input)).save();
    }
    async createTag(text) {
        return Tag_1.Tag.create({ text }).save();
    }
    async addTagPost(tagId, postId) {
        await TagPost_1.TagPost.create({ tagId, postId }).save();
        return true;
    }
    async deleteTagPost(tagId, postId) {
        await TagPost_1.TagPost.delete({ tagId: tagId, postId: postId });
        return true;
    }
    async deletePost(postId) {
        await TagPost_1.TagPost.delete({ postId });
        await Post_1.Post.delete({ id: postId });
        return true;
    }
    async deleteTag(tagId) {
        await TagPost_1.TagPost.delete({ tagId });
        await Tag_1.Tag.delete({ id: tagId });
        return true;
    }
};
__decorate([
    type_graphql_1.Query(() => [Post_1.Post]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "posts", null);
__decorate([
    type_graphql_1.Query(() => [Tag_1.Tag]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "tags", null);
__decorate([
    type_graphql_1.Query(() => Post_1.Post, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Mutation(() => Post_1.Post),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("input", () => postInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, postInput]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "updatePost", null);
__decorate([
    type_graphql_1.Mutation(() => Post_1.Post),
    __param(0, type_graphql_1.Arg("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postInput]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "createPost", null);
__decorate([
    type_graphql_1.Mutation(() => Tag_1.Tag),
    __param(0, type_graphql_1.Arg("text")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "createTag", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("tagId", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("postId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "addTagPost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("tagId", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("postId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "deleteTagPost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("postId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "deletePost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("tagId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TagPostResolver.prototype, "deleteTag", null);
TagPostResolver = __decorate([
    type_graphql_1.Resolver()
], TagPostResolver);
exports.TagPostResolver = TagPostResolver;
//# sourceMappingURL=tagpost.js.map