import { Client } from "https://deno.land/x/postgres@v0.15.0/mod.ts";

const config = 'postgres://bwzctbwf:EmEg3YMJbUzhGhipRHACTEj05iqNaCbm@lallah.db.elephantsql.com/bwzctbwf';
// const config = 'postgres://vkmdabnu:MzTxu8fE2xTNBdGCO20R7WmQ9QIfUrca@chunee.db.elephantsql.com/vkmdabnu';
const database = new Client(config);

export default database;