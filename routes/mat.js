var express = require('express')
const Pool = require("pg").Pool;
var router = express.Router()



//DB CONFIG
var config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB
};


router.post('/create', async (req, res) => {
    console.log("----insert API---\n")

    var FIRSTNAME = req.body.FIRSTNAME
    var LASTNAME = req.body.LASTNAME
    var EMAIL = req.body.EMAIL
    var ADDRESS = req.body.ADDRESS
    
    console.log(FIRSTNAME)
    var pool = new Pool(config);

    var q1 = 'INSERT INTO "demo"."users"("FIRSTNAME", "LASTNAME", "EMAIL","ADDRESS") VALUES (';
    q1 += "'" + FIRSTNAME + "','" + LASTNAME + "','" + EMAIL + "','" + ADDRESS + "')";
    console.log(q1);


    var result = await pool.query(q1)
    pool.end()
    res.json({ status: 200, status: "Success" })

});

 router.get('/dataForTable', async (req, res) => {
    console.log("----dataForTable API---\n")

    var pool = new Pool(config);
    var q1 = 'SELECT "FIRSTNAME","LASTNAME","EMAIL","ADDRESS" FROM "demo"."users";';
    console.log(q1);
    var result = await pool.query(q1)

    pool.end()
    res.json(result.rows)

});

router.post('/deleteForm', async (req, res) => {

    console.log("----DELETE ENTRY API----\n")

    var EMAIL = req.body.EMAIL

    var pool = new Pool(config)

    var q1 = 'DELETE FROM "demo"."users" WHERE "EMAIL" = '
    q1 += "'" + EMAIL + "'";
    console.log(q1)
    var result = await pool.query(q1)

    pool.end()

    res.json(result.rows)

});

router.post('/getByID', async (req, res) => {

    console.log("----UPDATE Data API----\n")

    var EMAIL = req.body.EMAIL

    var pool = new Pool(config)

    var q1 = 'SELECT "FIRSTNAME", "LASTNAME", "EMAIL", "ADDRESS" FROM "demo"."users" WHERE "EMAIL" = '
    q1 += "'" + EMAIL + "'";

    console.log(q1)
    var result = await pool.query(q1)

    pool.end()

    res.json(result.rows)

});

router.post('/updateByID', async (req, res) => {

    console.log("----UPDATE Data API----\n")

    var FIRSTNAME = req.body.FIRSTNAME
    var LASTNAME = req.body.LASTNAME
    var EMAIL = req.body.EMAIL
    var ADDRESS = req.body.ADDRESS



    var pool = new Pool(config)
    var q1 = 'UPDATE "demo"."users" SET '
    q1 += '"FIRSTNAME"='
    q1 += "'" + FIRSTNAME + "',"
    q1 += '"LASTNAME"='
    q1 += "'" + LASTNAME + "',"
    q1 += '"EMAIL"='
    q1 += "'" + EMAIL + "',"
    q1 += '"ADDRESS"='
    q1 += "'" + ADDRESS + "'"

    q1 += ' WHERE "EMAIL"='
    q1 += "'" + EMAIL + "'"

    console.log(q1);
    var result = await pool.query(q1)
    pool.end()
    res.json({ status: 200 })
});

module.exports = router
    //console.log(q1)
    //var result = await pool.query(q1)

    //pool.end()

