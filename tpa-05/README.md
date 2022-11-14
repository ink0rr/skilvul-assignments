# TPA-05

## API Endpoints

Authentication token is stored in cookies.

| Method | Endpoint             | Description          | Notes                   |
| ------ | -------------------- | -------------------- | ----------------------- |
| POST   | /api/auth/login      | Login                |                         |
| POST   | /api/auth/register   | Register             |                         |
| GET    | /api/auth/logout     | Logout               |                         |
| GET    | /api/users           | Get all users        |                         |
| GET    | /api/users/:username | Get user by username |                         |
| GET    | /api/todos           | Get all todos        | Requires Authentication |
| GET    | /api/todos/:todoId   | Get todo by id       | Requires Authentication |
| POST   | /api/todos           | Create todo          | Requires Authentication |
| PATCH  | /api/todos/:todoId   | Update todo          | Requires Authentication |
| DELETE | /api/todos/:todoId   | Delete todo          | Requires Authentication |

## Environment Variables

| Env        | Description               |
| ---------- | ------------------------- |
| PORT       | Server Port               |
| JWT_SECRET | JWT Secret                |
| MONGO_DB   | MongoDB Connection String |

## Running the Project

Install dependencies and run the dev command

```sh
pnpm i
pnpm run dev
```
