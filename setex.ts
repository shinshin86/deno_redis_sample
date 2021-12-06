import { connect } from "https://deno.land/x/redis/mod.ts";
const redis = await connect({
  hostname: "127.0.0.1",
  port: 6379,
});

const sleep = (msec: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, msec));

// SETEX
// Set the expiration date on the key and register the value.
// The setex command allows you to set the expiration date of the key in seconds.
// { setexResponse: "OK" }
const setexResponse = await redis.setex("foo", 1, "bar");
console.log({ setexResponse });

// TTL
// Check the expiration date of the specified key.
// In the case of this code, 1 will be returned.
// { ttlResponse: 1 }
const ttlResponse = await redis.ttl("foo");
console.log({ ttlResponse });

// Wait 2 seconds.
await sleep(2000);

// The key expires, so when I check the remaining time in TTL again, it returns -2
// { ttlResponse2: -2 }
const ttlResponse2 = await redis.ttl("foo");
console.log({ ttlResponse2 });

// PSETEX
// Set the expiration date on the key and register the value.
// In the case of pttl, it can be set in milliseconds.
// { psetexResponse: "OK" }
const psetexResponse = await redis.psetex("foo2", 1000, "bar2");
console.log({ psetexResponse });

// PTTL
// Checks the expiration date of the specified key.
// The result will be returned in milliseconds.
// { pttlResponse: 996 }
const pttlResponse = await redis.pttl("foo2");
console.log({ pttlResponse });

// Wait 2 seconds.
await sleep(2000);

// PTTL
// { pttlResponse2: -2 }
const pttlResponse2 = await redis.pttl("foo2");
console.log({ pttlResponse2 });

// GET
// Value cannot be retrieved because it has expired
// { getResponse: undefined }
const getResponse = await redis.get("foo2");
console.log({ getResponse });
