import { connect } from "https://deno.land/x/redis/mod.ts";
const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});

// SET
// { setResponse: "OK" }
const setResponse = await redis.set("foo", "bar");
console.log({ setResponse });

// GET
// { getResponse: "bar" }
const getResponse = await redis.get("foo");
console.log({ getResponse });

// SETNX
// It is not possible to register a value to an existing key.
// If there is already an existing key, the return value will be 0.
// { setnxResponse: 0 }
const setnxResponse = await redis.setnx("foo", "bar");
console.log({ setnxResponse });

// DEL
// Deletes the specified key.
// { delResponse: 1 }
const delResponse = await redis.del("foo");
console.log({ delResponse });

// GET
// GET for a non-existent key will return undefined.
// { getResponse2: undefined }
const getResponse2 = await redis.get("foo");
console.log({ getResponse2 });
