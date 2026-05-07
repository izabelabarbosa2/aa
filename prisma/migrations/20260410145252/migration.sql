/*
  Warnings:

  - You are about to drop the column `descriptionn` on the `todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "todos" DROP COLUMN "descriptionn",
ADD COLUMN     "description" TEXT;
