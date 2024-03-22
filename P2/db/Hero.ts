import mongoose from "npm:mongoose";
import { Hero } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Hero>({
    name: String,
    image: String,
    sound: String,
});

export default mongoose.model<Hero>("Hero", schema);