/*
  Warnings:

  - You are about to drop the column `amount` on the `Carton` table. All the data in the column will be lost.
  - Added the required column `cartonAmount` to the `Carton` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carton" DROP COLUMN "amount",
ADD COLUMN     "cartonAmount" TEXT NOT NULL;
