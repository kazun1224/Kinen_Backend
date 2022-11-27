/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Total` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Total_userId_key" ON "Total"("userId");
