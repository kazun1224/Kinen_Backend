/*
  Warnings:

  - The `tar` column on the `Cigarette` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cigarette" DROP COLUMN "tar",
ADD COLUMN     "tar" INTEGER;
