-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_skillTypeId_fkey" FOREIGN KEY ("skillTypeId") REFERENCES "SkillType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
