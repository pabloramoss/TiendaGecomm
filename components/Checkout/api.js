import axios from "axios"

const urlPurchaseDB = "https://sheet.best/api/sheets/f8479c6e-a793-48c6-a92d-03b1f2eda374"

export default {
   dolarBlue: async () => {
    return axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(
      response => {
        const dolarBluePrice = response.data[0].casa.venta
        return dolarBluePrice
      }
    ).catch(error => console.log(error))
  },
  message: async (chat_id, text) =>{
    return axios.post(`https://api.telegram.org/bot5165116240:AAFAI03uGZhb2C7Wg6TGkdhQ6Jg4DMJauSo/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`).catch(error => console.log(error))
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
    return axios.post(urlPurchaseDB, objectDB)
  }
}  