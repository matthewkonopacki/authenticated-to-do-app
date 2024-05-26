const { db } = require("@vercel/postgres");

async function createToDoTable(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS todo`;

    const createTable = await client.sql`
      CREATE TABLE todo (
        id SERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        "date" timestamp not null default CURRENT_TIMESTAMP,
        fk_user__id INTEGER NOT NULL,
        FOREIGN KEY (fk_user__id) REFERENCES users(id)
      );
    `;

    console.log(`Created "todo" table`);

    return { createTable };
  } catch (err) {
    console.error("Error creating todo table:", err);
    throw err;
  }
}

async function createUsersTable(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS users`;

    const createTable = await client.sql`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(64) NOT NULL,
        lastName VARCHAR(64) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `;

    console.log("Created users table");

    return { createTable };
  } catch (err) {
    console.error("Error creating users table", err);
    throw err;
  }
}

async function main() {
  const client = await db.connect();

  await createUsersTable(client);
  await createToDoTable(client);

  await client.end();
}

main().catch((error) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    error,
  );
});
