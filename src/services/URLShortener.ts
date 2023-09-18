import { scrypt } from "crypto";
import { promisify } from "util";
import { createClient } from "redis";

var asyncClientGet = promisify(scrypt);

export class URLShortener {
  static async convertToShort(longURL: string) {
    const client = createClient({
      url: "redis://default@redis-0c0c5de1d5fe8f24.elb.us-east-1.amazonaws.com:3000/",
    });

    client.on("error", (err: any) => console.log("Redis Client Error", err));

    await client.connect();
    const value = (await client.get("nextURL")) || "0";
    await client.set("nextURL", parseInt(value) + 1);
    return value;
  }
}
