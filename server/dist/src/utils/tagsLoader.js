"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTagsLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const typeorm_1 = require("typeorm");
const TagPost_1 = require("../entities/TagPost");
const batchTags = async (postIds) => {
    const tagPosts = await TagPost_1.TagPost.find({
        join: {
            alias: "tagPost",
            innerJoinAndSelect: {
                tag: "tagPost.tag",
            },
        },
        where: {
            postId: typeorm_1.In(postIds),
        },
    });
    const postIdToTag = {};
    tagPosts.forEach((ab) => {
        if (ab.postId in postIdToTag) {
            postIdToTag[ab.postId].push(ab.__tag__);
        }
        else {
            postIdToTag[ab.postId] = [ab.__tag__];
        }
    });
    return postIds.map((ab) => postIdToTag[ab]);
};
exports.createTagsLoader = () => new dataloader_1.default(batchTags);
//# sourceMappingURL=tagsLoader.js.map