const router= require('express').Router()
const stripe = require('stripe')

router.post("/payment", async (req, res)=>{
    stripe.charges({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeErr, stripeRes)=>{
        if (stripeErr ){
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }

    })

    
       
    
})


module.exports = router