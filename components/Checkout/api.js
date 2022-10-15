import axios from "axios"

export default {
  dolarBlue: async () => {
    return axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(
      response => {
        const dolarBluePrice = parseFloat((response.data[0].casa.venta).replace(",","."))
        return dolarBluePrice
      }
    ).catch(error => console.error(error))
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