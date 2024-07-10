const orderModel = require("../../models/orderProductModel")

const orderController = async(request,response)=>{
    try {
        const currentUserId = request.userId
        console.log("current user id",currentUserId);

        const orderList = await orderModel.find({ userId : currentUserId }).sort({ createdAt : -1 })
           console.log("Order list",orderList);

        response.json({
            data : orderList,
            message : "Order list",
            success : true
        })

    } catch (error) {
        response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = orderController