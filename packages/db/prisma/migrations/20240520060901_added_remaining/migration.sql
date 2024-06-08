/*
  Warnings:

  - You are about to drop the column `item` on the `Option` table. All the data in the column will be lost.
  - Added the required column `remaining` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "item",
ADD COLUMN     "remaining" INTEGER NOT NULL;
