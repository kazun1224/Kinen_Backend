/*
  Warnings:

  - Added the required column `updatedAt` to the `Total` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Total" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Carton" (
    "id" SERIAL NOT NULL,
    "boxes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "cigaretteId" INTEGER NOT NULL,

    CONSTRAINT "Carton_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Carton" ADD CONSTRAINT "Carton_cigaretteId_fkey" FOREIGN KEY ("cigaretteId") REFERENCES "Cigarette"("id") ON DELETE CASCADE ON UPDATE CASCADE;
