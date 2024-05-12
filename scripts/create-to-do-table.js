const { db } = require("@vercel/postgres");

async function createToDoTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`DROP TABLE IF EXISTS todo`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todo (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        "date" timestamp not null default CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "users" table`);

    return { createTable };
  } catch (err) {
    console.error("Error creating todo table:", err);
    throw err;
  }
}

async function main() {
  const client = await db.connect();

  await createToDoTable(client);

  await client.end();
}

main().catch((error) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    error,
  );
});
