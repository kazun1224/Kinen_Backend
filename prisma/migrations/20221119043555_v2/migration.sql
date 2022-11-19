/*
  Warnings:

  - You are about to drop the column `num` on the `Cigarette` table. All the data in the column will be lost.
  - Added the required column `numberOfCigarette` to the `Cigarette` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cigarette" DROP COLUMN "num",
ADD COLUMN     "numberOfCigarette" INTEGER NOT NULL;
