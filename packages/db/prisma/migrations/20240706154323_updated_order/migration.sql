/*
  Warnings:

  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "price",
ADD COLUMN     "basic_price" DOUBLE PRECISION NOT NULL DEFAULT 700.00,
ADD COLUMN     "tax" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "total_price" DOUBLE PRECISION NOT NULL DEFAULT 700.00;
