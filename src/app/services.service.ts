import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  
      constructor(private http:HttpClient,) { }
  
      baseUrl = "http://182.72.203.244:2001/"
  
  //================ POST API =========================//
      postApi(url, data, Header) {
          let headers;
          if (Header == 1) {
                headers = new HttpHeaders({
                  "Content-Type": "application/json",
                  "Authorization":"Bearer "+localStorage.getItem('token')
                })
          } 
          else {
                headers = new HttpHeaders({
                  "Content-Type": "application/json",
                })
          }
          return this.http.post((this.baseUrl+ url), data, headers)  
      }
    
  //================ GET API =========================//    
      getApi(url, isHeader) {

        // console.log("token -->",localStorage.getItem('token'))
          let httpOptions;
          if (isHeader == 1) {
            httpOptions = {
              headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem('token')
              }),
              observe: 'response'              
            }     
          }
          else {
            httpOptions = {
              headers: new HttpHeaders({
                "Content-Type": "application/json",
              }),
              observe: 'response'              
            }            
          }
          console.log("header-->",httpOptions)
          return this.http.get((this.baseUrl + url), httpOptions)
      }
  
  //================ PUT API =========================//
      putApi(url,data:any){
          var headers;
          headers = new HttpHeaders({
              "token": localStorage.getItem('token')
          })
          return this.http.put(this.baseUrl + url,data,headers)
      }
  
  //================ DELETE API =========================//
      deleteApi(url) {
          let headers;
          headers = new HttpHeaders({
              "Content-Type": "application/json",
              "Authorization":"Bearer "+localStorage.getItem('token')
          })     
          return this.http.delete(this.baseUrl + url, headers);
      }
  
 
  
  //================ HIDE Succes TOASTR =========================//
      getCountryStates(): Observable<any> {
          return this.http.get("./assets/json/countrystateList.json");
        }


    postMethodMultipart(url, data): Observable<any> {
        let headers;
        headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.post(this.baseUrl + url, data, { headers });
      }
}