-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Queued', 'Started', 'Stitched', 'Collected', 'Failed');

-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "service" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Order" (
    "orderId" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "itemname" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Queued',
    "deliveredOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("orderId")
);
