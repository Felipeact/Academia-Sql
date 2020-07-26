//connectando banco de dados
const { Pool } = require('pg')

module.exports = new Pool({
    user: "tiburcioviana",
    password: "",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})