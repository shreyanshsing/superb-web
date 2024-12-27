-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" TEXT DEFAULT '',
    "country" TEXT DEFAULT '',
    "wallpaper" TEXT DEFAULT '',
    "avatar" TEXT DEFAULT '',
    "followers" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "following" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "bio" TEXT DEFAULT '',
    "headline" TEXT DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
