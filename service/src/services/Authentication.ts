import bcrypt from "bcrypt";
import { Ok, Err, Result } from "ts-results";
import jwt from "jsonwebtoken";
import { AccountService } from "../services";
import { JWT_SECRET } from "../config/jwt";

export const login = async (
  email: string,
  password: string,
): Promise<Result<string, Error>> => {
  const account = await AccountService.findByEmail(email);

  if (account === null) {
    return Err(new Error("Account not found"));
  }

  if (password !== account.password) {
    return Err(new Error("Incorrect password"));
  }

  // HASH PASSWORD HERE
  const bcrypt = require('bcrypt');
  const saltRounds = 10;
  const myPlaintextPassword = password;
  

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

  const secret = JWT_SECRET;

  if (!secret) {
    return Err(new Error("JWT_SECRET not set"));
  }

  const token = jwt.sign({ data: account.email }, secret);

  return Ok(`Bearer ${token}`);
};
