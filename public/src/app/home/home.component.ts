import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';
import { Router } from '@angular/router';
import { AuthService} from '../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  enteredValue : any ={};
  constructor( private spinner: SpinnerService , private router: Router , private auth:AuthService) { }

  ngOnInit(): void {
    this.spinner.requestEnded();
  }
  onClick(){
      console.log(this.enteredValue);
      this.auth.createUser(this.enteredValue.name , this.enteredValue.email , this.enteredValue.phone) ;
      this.router.navigate(['/dine'])
  }

  onClickCancel(){
    this.router.navigate(['/dine'])
  }
}
