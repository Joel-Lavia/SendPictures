-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_authorId_fkey";

-- AlterTable
ALTER TABLE "Picture" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
