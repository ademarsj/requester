import Database from "tauri-plugin-sql-api";

// const request = window.indexedDB.open("RequesterDatabase", 1);
const db = await Database.load("sqlite:RequesterDatabase.db");

type SELECT_SCHEMA = {
  NUM_TABELAS: number;
}

export async function databaseSchemaCreated() : Promise<Boolean> {
  const retorno: Array<SELECT_SCHEMA> = await db
    .select(`SELECT COUNT(*) AS NUM_TABELAS FROM sqlite_master WHERE type='table' AND name='config';`, [])
    .catch((error) => {
      return error;
    });

    return retorno[0].NUM_TABELAS > 0;
}


export async function createDatabaseSchema() {
  const databaseExists = await databaseSchemaCreated();
  
  if (databaseExists) return;

  await db
    .execute("CREATE TABLE config(id integer, base_url varchar(200))", [])
    .catch((error) => {
      return error;
    });
}

export async function insertBaseURL(base_url: string) {
  await db
    .execute("INSERT INTO config(id, base_url) values(1, $1)", [base_url])
    .catch((error) => {
      return error;
    });
}

export async function getBaseUrl() {
  const retorno = await db
    .select("select base_url from config", [])
    .catch((error) => {
      return error;
    });
  return retorno ? retorno[0].base_url : '';
}

createDatabaseSchema();

