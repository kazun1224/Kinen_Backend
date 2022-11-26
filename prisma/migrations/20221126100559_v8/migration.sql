/*
  Warnings:

  - A unique constraint covering the columns `[cigaretteId]` on the table `Carton` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Carton_cigaretteId_key" ON "Carton"("cigaretteId");
