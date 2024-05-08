/*
  Warnings:

  - You are about to drop the column `authorId` on the `Picture` table. All the data in the column will be lost.
  - Added the required column `authorPicturesId` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_authorId_fkey";

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "authorId",
ADD COLUMN     "authorPicturesId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_authorPicturesId_fkey" FOREIGN KEY ("authorPicturesId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
