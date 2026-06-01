import "dotenv/config";
import { PrismaClient, RolUsuario } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
const envAdminName = process.env.ADMIN_NAME;
const envAdminEmail = process.env.ADMIN_EMAIL;
const envAdminPassword = process.env.ADMIN_PASSWORD;

if (!connectionString) {
  throw new Error("Falta DATABASE_URL");
}

if (!envAdminName) {
  throw new Error("Falta ADMIN_NAME");
}

if (!envAdminEmail) {
  throw new Error("Falta ADMIN_EMAIL");
}

if (!envAdminPassword) {
  throw new Error("Falta ADMIN_PASSWORD");
}

const adminName: string = envAdminName;
const adminEmail: string = envAdminEmail;
const adminPassword: string = envAdminPassword;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function syncUsuarioIdSequence() {
  const result = await prisma.usuario.aggregate({
    _max: {
      id: true,
    },
  });

  const maxId = result._max.id ?? 0;
  const nextId = maxId + 1;

  await prisma.$executeRawUnsafe(`
    SELECT setval(
      pg_get_serial_sequence('"Usuario"', 'id'),
      ${nextId},
      false
    );
  `);

  console.log(`Secuencia de Usuario.id ajustada a ${nextId}`);
}

async function main() {
  console.log("Inicializando sistema...");

  const hashedPassword: string = await bcrypt.hash(adminPassword, 12);

  const existingAdmin = await prisma.usuario.findUnique({
    where: { correo: adminEmail },
  });

  if (existingAdmin) {
    await prisma.usuario.update({
      where: { correo: adminEmail },
      data: {
        nombre: adminName,
        password_hash: hashedPassword,
        rol: RolUsuario.administrador,
      },
    });

    console.log("Usuario administrador ya existía, se actualizó correctamente");
  } else {
    await syncUsuarioIdSequence();

    await prisma.usuario.create({
      data: {
        nombre: adminName,
        correo: adminEmail,
        password_hash: hashedPassword,
        rol: RolUsuario.administrador,
      },
    });

    console.log("Usuario administrador creado correctamente");
  }

  console.log("Sistema inicializado correctamente");
}

main()
  .catch((error) => {
    console.error("Error en setup:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
