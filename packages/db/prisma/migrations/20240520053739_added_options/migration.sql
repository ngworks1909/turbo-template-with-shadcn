-- CreateTable
CREATE TABLE "Premium" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Premium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "premiumId" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "priority" TEXT NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_premiumId_fkey" FOREIGN KEY ("premiumId") REFERENCES "Premium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
