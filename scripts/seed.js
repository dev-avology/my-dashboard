const { db } = require('@vercel/postgres');
const {
  users,
  services
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;


  //   const alterTable = await client.sql`
  //   ALTER TABLE users ADD role VARCHAR(255) NOT NULL DEFAULT 'admin';
  // `;
    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}



async function seedServices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "services" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    amount DOUBLE PRECISION NOT NULL,
    recurring INT NOT NULL DEFAULT 0,
    repeat INT NOT NULL DEFAULT 0,
    status VARCHAR(255) NOT NULL DEFAULT 'enable',
    image_url VARCHAR(255) NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "services" table`);

    // Insert data into the "invoices" table
    const insertedServices = await Promise.all(
      services.map(
        (service) => client.sql`
        INSERT INTO services (id, title, description, amount,recurring,repeat,status,image_url,date)
        VALUES (${service.id}, ${service.title}, ${service.description}, ${service.amount}, ${service.recurring}, ${service.repeat}, ${service.status}, ${service.image_url}, ${service.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${JSON.stringify(insertedServices)} serices`);


//     const selectTable = await client.sql`
//     SELECT * FROM services;
// `;

// console.log(`select Seeded ${JSON.stringify(selectTable)} serices`);

    return {
      createTable,
      services: insertedServices,
    };
  } catch (error) {
    console.error('Error seeding services:', error);
    throw error;
  }
}




async function seedTasks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "services" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    status VARCHAR(255) NOT NULL DEFAULT 'queue',
    priority VARCHAR(255) NOT NULL DEFAULT 'low',
    service_type VARCHAR(255) NOT NULL DEFAULT ' ',
    service_category VARCHAR(255) NOT NULL DEFAULT ' ',
    task_type VARCHAR(255) NOT NULL DEFAULT ' ',
    task_service VARCHAR(255) NOT NULL DEFAULT ' ',
    task_plateform VARCHAR(255) NOT NULL DEFAULT ' ',
    task_speclization VARCHAR(255) NOT NULL DEFAULT ' ',
    submitted DATE NULL,
    duedate DATE NULL,
    date DATE NOT NULL,
    created_by UUID NOT NULL
  );
`;

    console.log(`Created "Tasks" table`);



      // Create the "services" table if it doesn't exist
      const createTable1 = await client.sql`
      CREATE TABLE IF NOT EXISTS assignedTo (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      taskId UUID references tasks (id) on delete cascade,
      userId UUID references users (id) on delete cascade
    );
  `;

  console.log(`Created "Tasks Assigned Table" table`);

    // Insert data into the "invoices" table
    // const insertedServices = await Promise.all(
    //   services.map(
    //     (service) => client.sql`
    //     INSERT INTO services (id, title, description, amount,recurring,repeat,status,image_url,date)
    //     VALUES (${service.id}, ${service.title}, ${service.description}, ${service.amount}, ${service.recurring}, ${service.repeat}, ${service.status}, ${service.image_url}, ${service.date})
    //     ON CONFLICT (id) DO NOTHING;
    //   `,
    //   ),
    // );

    // console.log(`Seeded ${JSON.stringify(insertedServices)} serices`);




//     const selectTable = await client.sql`
//     SELECT * FROM services;
// `;

// console.log(`select Seeded ${JSON.stringify(selectTable)} serices`);

    return {
      createTable,
      createTable1,
    };
  } catch (error) {
    console.error('Error seeding services:', error);
    throw error;
  }
}



// async function seedInvoices(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;

//     console.log(`Created "invoices" table`);

//     // Insert data into the "invoices" table
//     const insertedInvoices = await Promise.all(
//       invoices.map(
//         (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedInvoices.length} invoices`);

//     return {
//       createTable,
//       invoices: insertedInvoices,
//     };
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }

// async function seedCustomers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;

//     console.log(`Created "customers" table`);

//     // Insert data into the "customers" table
//     const insertedCustomers = await Promise.all(
//       customers.map(
//         (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedCustomers.length} customers`);

//     return {
//       createTable,
//       customers: insertedCustomers,
//     };
//   } catch (error) {
//     console.error('Error seeding customers:', error);
//     throw error;
//   }
// }

// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//     console.log(`Created "revenue" table`);

//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedRevenue.length} revenue`);

//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
   await seedTasks(client);
 // await seedServices(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
