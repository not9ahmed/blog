/*
  Warnings:

  - Added the required column `link` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillTypeId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "icon" TEXT,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "skillTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "completeDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tools" TEXT[],
    "images" TEXT[],
    "link" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SkillType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_skillTypeId_fkey" FOREIGN KEY ("skillTypeId") REFERENCES "SkillType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
