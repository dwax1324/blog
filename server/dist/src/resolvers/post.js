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
exports.PostResolver = void 0;
const Post_1 = require("../entities/Post");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
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
let PostResolver = class PostResolver {
    async createPost(input) {
        return Post_1.Post.create(Object.assign({}, input)).save();
    }
    async post(id) {
        return await Post_1.Post.findOne(id);
    }
    async posts() {
        const post = await typeorm_1.getConnection().query(`
            select p.*
            from post p
            order by p."createdAt" DESC
        `);
        return await post;
    }
    async updatePost(id, input) {
        const post = await Post_1.Post.findOne({ id });
        const createdAt = post === null || post === void 0 ? void 0 : post.createdAt;
        const updatedAt = new Date();
        if (!post)
            throw new Error('그런 포스트는 존재하지 않아!');
        Object.assign(post, Object.assign(Object.assign({}, input), { createdAt: createdAt, updatedAt: updatedAt }));
        await (post === null || post === void 0 ? void 0 : post.save());
        return post;
    }
    async deletePost(id) {
        const post = await Post_1.Post.findOne({ where: { id } });
        if (!post)
            throw new Error('그런 포스트는 존재하지 않아!');
        await post.remove();
        return true;
    }
    async login(id, password, { req }) {
        if (id === "dwax1324" && password === "qeszc24$") {
            req.session.userId = 'dwax1324';
            return true;
        }
        else
            return false;
    }
    async me({ req }) {
        if (req.session.userId === "dwax1324")
            return true;
        else
            return false;
    }
    async logout({ req, res }) {
        return new Promise((resolve) => req.session.destroy((err) => {
            res.clearCookie("sid");
            if (err) {
                resolve(false);
                return;
            }
            resolve(true);
        }));
    }
};
__decorate([
    type_graphql_1.Mutation(() => Post_1.Post),
    __param(0, type_graphql_1.Arg('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [postInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    type_graphql_1.Query(() => Post_1.Post, { nullable: true }),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Query(() => [Post_1.Post]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
__decorate([
    type_graphql_1.Mutation(() => Post_1.Post),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('input', () => postInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, postInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => String)),
    __param(1, type_graphql_1.Arg("password", () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Query(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "logout", null);
PostResolver = __decorate([
    type_graphql_1.Resolver(Post_1.Post)
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.js.map