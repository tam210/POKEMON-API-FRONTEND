-- Verificar si el usuario 'ash' ya existe
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'ash') THEN
    CREATE ROLE ash WITH LOGIN PASSWORD 'password';
  END IF;
END $$;

-- Verificar si la base de datos 'pokemon_db' ya existe
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'pokemon_db') THEN
    CREATE DATABASE pokemon_db;
  END IF;
END $$;

-- Asignar todos los privilegios sobre la base de datos 'pokemon_db' al usuario 'ash'
GRANT ALL PRIVILEGES ON DATABASE pokemon_db TO ash;

-- Conectar a la base de datos 'pokemon_db' (necesario para aplicar los permisos al esquema)
\c pokemon_db;

-- Asignar permisos al esquema 'public' para el usuario 'ash'
GRANT ALL PRIVILEGES ON SCHEMA public TO ash;

-- Asignar permisos para todas las tablas existentes en el esquema 'public'
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ash;

-- Asignar permisos sobre todas las secuencias existentes en el esquema 'public' (si aplica)
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO ash;

-- Asegurarse de que el usuario 'ash' tenga acceso a nuevas tablas creadas en el futuro
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO ash;

-- Asegurarse de que el usuario 'ash' tenga acceso a nuevas secuencias creadas en el futuro
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO ash;d