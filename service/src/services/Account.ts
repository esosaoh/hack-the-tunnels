import { Account } from "@prisma/client";
import { prisma } from "../db";
import { Ok, Err, Result } from "ts-results";
import bcrypt from "bcrypt";

export const findByEmail = async (email: string): Promise<Account | null> => {
  const account = await prisma.account.findFirst({
    where: { email: email },
  });

  if (!account) {
    return null;
  }

  return account;
};

export const create = async (
  email: string,
  password: string,
  role = "USER",
): Promise<Result<Account, Error>> => {
  const existingAccount = await findByEmail(email);

  if (existingAccount !== null) {
    return Err(new Error("Account already exists"));
  }

  // Hash the password before saving
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Log the hashed password
  console.log("Hashed Password:", hashedPassword);

  const newAccount = await prisma.account.create({
    data: {
      email: email,
      password: hashedPassword, // Store the hashed password
      role: role,
    },
  });

  return Ok(newAccount);
};