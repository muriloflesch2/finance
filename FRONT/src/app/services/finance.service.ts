import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Chart } from '../models/chart.model';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  url = 'http://localhost:3000/api';
  selectedCompany:string;
  selectedDate:string;

  private headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  })
  
  constructor(private http: HttpClient) { }

  public getData(companyName:string,days:string): Observable<Company> {
     return this.http.get<Company>(`${this.url + '/' + companyName}?&interval=1d&range=${days}d`, { headers: this.headers }).pipe(
      catchError((err) => {
        return throwError(() => { err.error.message; });
      })
    );
  }

}
