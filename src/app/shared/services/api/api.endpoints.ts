export const apiEndpoints = {
    getProducts: {
        url: "/v1/product",
        method: "get"
    },
    createOrder: {
        url: "/v1/order/buy",
        method: "post"
    },
    verifyOrder: {
        url: "/v1/order/buy/verify",
        method: "post"
    },
    createSubsOrder: {
        url: "/v1/order/subscription",
        method: "post"
    },
    verifySubsOrder: {
        url: "/v1/order/subscription/verify",
        method: "post"
    },
    generateOtp: {
        url: "/v1/user/otp",
        method: "post"
    },
    signin: {
        url: "/v1/user/signin",
        method: "post"
    },
    getOrders: {
        url: "/v1/order",
        method: "get"
    },
    getOrder: {
        url: "/v1/order/:orderId",
        method: "get"
    },
    profile: {
        url: "/v1/user",
        method: "get"
    },
    updateProfile: {
        url: "/v1/user",
        method: "post"
    },
    createLead: {
        url: "/v1/lead",
        method: "post"
    }
}