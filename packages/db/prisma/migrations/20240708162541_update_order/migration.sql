/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `orderId` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "orderId",
ADD COLUMN     "orderId" SERIAL NOT NULL,
ALTER COLUMN "deliveredOn" DROP DEFAULT,
ALTER COLUMN "tax" DROP DEFAULT,
ALTER COLUMN "total_price" DROP DEFAULT,
ADD CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId");
