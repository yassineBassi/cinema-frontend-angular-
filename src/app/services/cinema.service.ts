import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService extends DataService {

  constructor(http: HttpClient) {
    super(http);
  }

  getVilles(){
    return this.sendGetRequest('/villes', null);
  }

  getCinemas(ville){
    return this.sendGetRequest(ville._links.cinemas.href, null, true);
  }

  getSalles(cinema){
    return this.sendGetRequest(cinema._links.salles.href, null, true);
  }

  getProjection(salle){
    let url = salle._links.projections.href.replace('{?projection}', '') + "?projection=p1";
    return this.sendGetRequest(url, null, true);
  }

  // getPlaces(projection){
  //   return this.sendGetRequest(projection.links.places.href, null);
  //   return this.http.get(projection.links.places.href);
  // }

  payerTicket(data){
    return this.sendPostRequest('/tickets/payer', data);
  }

}
