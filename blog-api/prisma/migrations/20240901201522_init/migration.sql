/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdDate` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "published",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "keywords" TEXT[],
ALTER COLUMN "content" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
