import axios from "axios";
import Papa from "papaparse";

export default {
  list: async () =>{
    return axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vThWuKpE37U6JmP7lSchIlBSBWhOP08bMJQPJzdJwNib4TDq7e-O_4prdjenPr9r2kz9U5fQYG_cXmz/pub?output=csv", {
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