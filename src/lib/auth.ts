import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not set");
}

const client = new MongoClient(uri);
const db = client.db("bazarDor");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL as string,
  secret: process.env.BETTER_AUTH_SECRET as string,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
