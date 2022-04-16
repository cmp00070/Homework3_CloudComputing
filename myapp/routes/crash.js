var express= require ('express');
var router = express.Router();

function crash() {

    process.exit();
}

/* Get home page. */
router.get('/', function(req, res, next){
    res.render('index',{ title: 'Crash!'})
    setTimeout( crash, 4000);
})

module.exports = router;