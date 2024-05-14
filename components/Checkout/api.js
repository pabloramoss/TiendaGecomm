import axios from "axios"

export default {
  dolarBlue: async () => {
    try {
      const response = await axios.get("https://dolarapi.com/v1/dolares/blue");
      const dolarBluePrice = response.data.venta;
      return dolarBluePrice;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  message: async (text) =>{
    return axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${encodeURIComponent(text)}`).catch(error => console.error(error))
  },
  postDB: async (clientInfo, uniqueID, transactionDate)=>{
    const objectDB = {
      "id": transactionDate,
      "fecha": uniqueID,
      "cliente": clientInfo.name, 
      "empresa": clientInfo.company, 
      "cuit": clientInfo.cuit,
      "email": clientInfo.email,
      "whatsapp": clientInfo.whatsapp,
      "provincia": clientInfo.province,
      "ciudad": clientInfo.city,
      "codigo postal": clientInfo.zipCode, 
      "direccion": clientInfo.address
      }
    return axios.post(process.env.NEXT_PUBLIC_PURCHASES_DB, objectDB)
  }
}  