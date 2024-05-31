const axios = require("axios")

const dialogWebhook = async (req, res)=>{
    console.log(req.body);



    await getShipmentDate(req.body.queryResult.parameters.orderId)
    .then(async data=>{
        await res.send({
            fulfillmentText: req.body.queryResult.fulfillmentText+" "+data
        })
    })
    .catch(async (error)=>{
        await res.send({
            fulfillmentText: "There was a problem processing your request. Please try again."
        })
    })

}

const getShipmentDate = async(orderId) => {

    return new Promise(async function(resolve, reject){
        const externalUrl = "https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus"
    
        await axios.post(externalUrl, { orderId: orderId})
        .then(response=>{

            resolve(response.data.shipmentDate)
        })
        .catch((error)=>{
            reject(error)
        })
    })

}

module.exports = {
    dialogWebhook
}