# deno_redis_sample
This is the sample code for trying [deno-redis](https://github.com/denodrivers/redis).
I am trying these samples by running redis in Docker running on a Mac.

## Setup(Redis)

```sh
docker pull redis
docker run -d -p 6379:6379 --name docker-redis redis
```

## Usage

```sh
deno run --allow-net {file}
```
