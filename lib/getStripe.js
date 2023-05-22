import { loadStripe } from "@stripe/stripe-js";


const getStripe =  () => {
   const stripe = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_KEY
    ).catch((error) => {
      console.log('Error Initializing Stripe', error)
      throw error;
      
    })
    return stripe;
  
  }
  


export default getStripe;