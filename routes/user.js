const router= require('express').Router()

router.get('/usertest', (req,res)=>{
    res.send("Usertest is successful");
});

router.post('/userposttest', (req, res)=> {
    const username=req.body.username;
    console.log(username);
    res.send('You name is: ' + username)
})
module.exports = router;