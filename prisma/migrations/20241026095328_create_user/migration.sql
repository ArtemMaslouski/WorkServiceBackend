-- CreateTable
CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "Position" TEXT NOT NULL,
    "Salary" TEXT NOT NULL,
    "Company" TEXT NOT NULL,
    "City" TEXT NOT NULL,

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Login" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
