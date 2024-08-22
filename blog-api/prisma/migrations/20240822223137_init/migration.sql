-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentCategory" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
