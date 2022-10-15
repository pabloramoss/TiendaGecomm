import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () =>{
    return axios.get(process.env.PRODUCT_DB, {
      responseType: "blob"
    }).then(
      response =>{
        return new Promise((resolve, reject)=>{
          Papa.parse(response.data, {
            header: true,
            complete: results => {
              return resolve(results.data);
            },
            error: (error)=> {
              return reject(error.message);
            }
          });
        })
      }
    );
  },
};