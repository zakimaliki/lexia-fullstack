const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://ncgquyzt:B6fJJ_xL9v2K1VOvggI8eckmcgpt5Ivn@floppy.db.elephantsql.com/ncgquyzt'
});

module.exports = pool;
