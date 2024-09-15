/*
  Warnings:

  - You are about to drop the column `parentCategory` on the `Category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[parentCategoryId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "parentCategory",
ADD COLUMN     "parentCategoryId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Category_parentCategoryId_key" ON "Category"("parentCategoryId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
