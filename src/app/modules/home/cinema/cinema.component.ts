import { CinemaService } from './../../../services/cinema.service';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  villes: any[];
  cinemas: any[];
  salles: any[];
  currentVille;
  currentCinema;
  currentSalle;
  currentProjection;
  selectedTickets: any[] = [];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.getVilles();
  }

  getVilles(){
    this.cinemaService.getVilles()
    .subscribe(
      (resp: any) => {
        this.villes = resp._embedded.villes;
        this.getCinemas(this.villes[0])
        console.log(this.villes);
      },
      err => {
        console.log(err);
      }
    )
  }

  getCinemas(ville){
    this.currentVille = ville;
    this.cinemaService.getCinemas(ville)
    .subscribe(
      (resp: any) => {
        console.log(resp);
        this.cinemas = resp._embedded.cinemas;
        this.getSalles(this.cinemas[0]);
      },
      err =>{
        console.log(err);

      }
    )
  }

  getSalles(cinema){
    this.currentCinema = cinema;
    this.cinemaService.getSalles(cinema)
    .subscribe(
      (resp: any) => {
        this.salles = [];
        const salles = resp._embedded.salles;
        salles.forEach(salle => {
          this.cinemaService.getProjection(salle)
          .subscribe(
            (resp: any) => {
              console.log("salle ", salle);
              salle.projections = resp._embedded.projections;
              this.salles.push(salle);
            },
            err =>{
              console.log(err);
            }
          )
        })
        // this.currentCinema = this.cinemas[0];
      },
      err =>{
        console.log(err);

      }
    )
  }

  getFilmImage(film){
    return this.cinemaService.url + '/films/' + film.id + '/image';
  }

  getTickets(salle, projection){
    this.currentSalle = salle;
    this.currentProjection = projection;
  }

  selectTicket(id: any){
    if(!this.selectedTickets.includes(id))
      this.selectedTickets.push(id);
    else
      this.selectedTickets.splice(this.selectedTickets.indexOf(id), 1)
  }

}
