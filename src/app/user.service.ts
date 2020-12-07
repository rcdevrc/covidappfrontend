import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({providedIn:'root'})

export class UserService{

    constructor(private http:HttpClient) {
    }

    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
             'Authorization': 'Basic ' + btoa('abctest@gmail.comm:passw0rd')
        })
    };
    getData(userId)
    {

        let url="/api/getRecomd/"+userId;
        return this.http.get(url,this.httpOptions);

    }

    getTrace(userId)
    {

        let serviceurl="/api/trace/"+userId;
        return this.http.get(serviceurl,this.httpOptions);

    }

    getAllTracing()
    {
        let serviceurl="/api/trace";
        return this.http.get(serviceurl,this.httpOptions);
    }

    getDashBoardData()
    {
        let serviceurl="/api/dashBoardStats";
        return this.http.get(serviceurl,this.httpOptions);
    }

    getHealthBoardData(status)
    {
        let serviceurl="/api/healthBoard/"+status;
        return this.http.get(serviceurl,this.httpOptions);
    }

    getDashBoardMonthStats()
    {
        let serviceurl="/api/dashBoardStats/month";
        return this.http.get(serviceurl,this.httpOptions);
    }
    getDashBoardCovidprogress()
    {
        let serviceurl="/api/dashBoardStats/covidProgress";
        return this.http.get(serviceurl,this.httpOptions);
    }
}
