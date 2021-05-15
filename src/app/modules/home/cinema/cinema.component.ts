import { CinemaService } from './../../../services/cinema.service';
import { DataService } from './../../../services/data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;

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
          this.salles.push(salle);
          this.getProjections(salle);
        })
      },
      err =>{
        console.log(err);
      }
    )
  }

  getProjections(salle){
    this.cinemaService.getProjection(salle)
    .subscribe(
      (resp: any) => {
        salle.projections = resp._embedded.projections;
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
    this.selectedTickets = [];
    this.currentProjection = projection;
  }

  selectTicket(ticket){
    if(!this.selectedTickets.includes(ticket))
      this.selectedTickets.push(ticket);
    else
      this.selectedTickets.splice(this.selectedTickets.indexOf(ticket), 1)
  }

  payerTicket(form){
    console.log(form.value);
    this.cinemaService.payerTicket({
      ...form.value,
      tickets: this.selectedTickets.map(ticket => ticket.id)
    })
    .subscribe(
      (resp: any) => {
          this.selectedTickets.forEach(ticket => ticket.reserve = true)
          this.selectedTickets = [];
          this.closeModal.nativeElement.click();
      },
      err =>{
        console.log(err);
      }
    )
  }

}
