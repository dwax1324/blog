"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostsLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const typeorm_1 = require("typeorm");
const TagPost_1 = require("../entities/TagPost");
const batchPosts = async (tagIds) => {
    const tagPosts = await TagPost_1.TagPost.find({
        join: {
            alias: "tagPost",
            innerJoinAndSelect: {
                post: "tagPost.post",
            },
        },
        where: {
            tagId: typeorm_1.In(tagIds),
        },
    });
    const tagIdToPost = {};
    tagPosts.forEach((ab) => {
        if (ab.tagId in tagIdToPost) {
            tagIdToPost[ab.tagId].push(ab.__post__);
        }
        else {
            tagIdToPost[ab.tagId] = [ab.__post__];
        }
    });
    return tagIds.map((ab) => tagIdToPost[ab]);
};
exports.createPostsLoader = () => new dataloader_1.default(batchPosts);
//# sourceMappingURL=postsLoader.js.map