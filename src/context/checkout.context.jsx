import { useState,createContext } from "react";



export let CheckoutConext = createContext({
    showCheckoutPage:false
})



const CheckoutProvider = ({ children }) => {
    let [ showCheckoutPage, setshowCheckoutPage ] = useState(false)
    
    let value = { showCheckoutPage,setshowCheckoutPage }
    
    return (<CheckoutConext.Provider value={value}>{ children}</CheckoutConext.Provider>)
}

export default CheckoutProvider