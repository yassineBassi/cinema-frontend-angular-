import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public url = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  getVilles(){
    return this.http.get(this.url + '/villes');
  }

  getCinemas(ville){
    return this.http.get(ville._links.cinemas.href)
  }

  getSalles(cinema){
    return this.http.get(cinema._links.salles.href)
  }

  getProjection(salle){
    let url = salle._links.projections.href.replace('{?projection}', '') + "?projection=p1";
    return this.http.get(url);
  }

  getPlaces(projection){
    return this.http.get(projection.links.places.hre);
  }

  payerTicket(data){
    return this.http.post(this.url + '/tickets/payer', data);
  }

}
