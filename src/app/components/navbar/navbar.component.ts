import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(
    public authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  chamarFuncionario() {

    this.route.navigateByUrl("/funcionarios")
  }

  chamarCargos() {

    this.route.navigateByUrl("/cargos")
  }
}
