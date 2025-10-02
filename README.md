## ⚡ How to Start

### 1. Development (default)

Runs **backend + dev DB**:

```bash
docker compose up
```

* Backend will wait for `postgres-dev` to be healthy before starting.
* Connect to dev database at: `localhost:5432` (username/password from `.env.dev`).

### 2. Testing

Runs **backend + test DB**:

```bash
docker compose --profile test up
```

* Backend will use `.env.dev` by default.
* If you want it to use test DB credentials, update `backend` service’s `env_file` to `.env.test` before starting.
* Connect to test database at: `localhost:5433` (username/password from `.env.test`).

---

### 3. Rebuild Containers

If you change code or Dockerfile:

```bash
docker compose up --build
```

---

### 4. Stop Containers

Stop all running containers:

```bash
docker compose down
```

* Use `-v` to remove associated volumes if you want a clean DB:

```bash
docker compose down -v
```