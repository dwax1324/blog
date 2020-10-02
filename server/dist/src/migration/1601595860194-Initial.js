"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initial1601595860194 = void 0;
class Initial1601595860194 {
    constructor() {
        this.name = 'Initial1601595860194';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "description" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" DROP NOT NULL`);
    }
}
exports.Initial1601595860194 = Initial1601595860194;
//# sourceMappingURL=1601595860194-Initial.js.map