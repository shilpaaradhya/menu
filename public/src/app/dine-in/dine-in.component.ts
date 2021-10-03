import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent implements OnInit {
  showTimings:boolean =false;
  length = [{n:5}];
  searchText: string;
  quickbites : any = [];
  nonvegpizza : any =[];
  vegpizza: any=[];
  HotBeverages: any=[];
  ColdBeverages: any=[];
  showSearch:boolean =true;
  enteredValue:any = {};
  showIcons:boolean= true;
  showGreeting:boolean= false;
  menu = [{ message: { QuickBites:[{dish:"Bread Butter Toast" , price:"100" ,  type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png" } , {dish:"Cheese Chilly Toast" , price:"120" ,   type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Aloo Paratha With Curd" , price:"120" ,   type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Mix Veg Pakoda " , price:"100" ,  type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}, {dish:"Kanda Poha" , price:"70"  , type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}] ,
  QuickBitesVegSandwich:[{dish:"Cheese Garlic Sandwich" , price:"130" ,  type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Cheese Chilly Sandwich " , price:"135" ,   type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Grilled Veg Sandwich" , price:"125" ,   type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Cheese Sandwich" , price:"125" ,  type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}, {dish:"Sabudana" , price:"120"  , type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}] ,
  QuickBitesNonVegSandwich:[{dish:"Chicken Cheese Garlic Sandwich" , price:"120" , type:"N" , img:"https://img.icons8.com/color/12/000000/non-vegetarian-food-symbol.png"} , {dish:"Chicken Cheese Sandwich " , price:"120" ,  type:"N" , img:"https://img.icons8.com/color/12/000000/non-vegetarian-food-symbol.png"} , {dish:"Grilled Chicken Sandwich " , price:"120" ,  type:"N" , img:"https://img.icons8.com/color/12/000000/non-vegetarian-food-symbol.png"} , {dish:"Chicken Garlic Chilli Sandwich" , price:"120" , type:"N" , img:"https://img.icons8.com/color/12/000000/non-vegetarian-food-symbol.png"}] ,
  HotBeverages:[{dish:"Tea" , price:"35" ,  type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Coffe" , price:"35" ,   type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Lemon Tea" , price:"35" ,   type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Black Tea" , price:"35" ,  type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}, {dish:"Masala Tea" , price:"35"  , type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}] ,
  ColdBeverages:[{dish:"Banana Milk Shake" , price:"100" ,  type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Cold Coffee " , price:"100" ,   type:"V" ,  img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Cold Coffee With Ice Cream " , price:"120" ,   type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"} , {dish:"Sweet Lassi" , price:"100" ,  type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}, {dish:"Butter Milk or Tak" , price:"100"  , type:"V" ,   img: "https://img.icons8.com/fluent/12/000000/vegetarian-food-symbol.png"}] }
}]

  constructor( private _as: AppService , private spinner:SpinnerService ) { }
  ngOnInit(): void {
    this.showIcons= true;
    this.getMenu()
    //this.updateMenu()
  }


 openNav() {
   console.log("nav")
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

openTimings(){
  document.getElementById("mySidenav1").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

closeTimings() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

onClickSearch(){
  this.showIcons= false;
}

toquickBites(){
  document.getElementById("quickBites").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
};

tovegSandwich(){
  document.getElementById("quickbitesVegSandwich").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tononvegSandwich(){
  document.getElementById("quickbitesNonVegSandwich").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tohotBeverages(){
  document.getElementById("hotBeverages").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tocoldBeverages(){
  document.getElementById("coldBeverages").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tostarterVeg(){
  // document.getElementById("vegStarters").scrollIntoView({behavior:"smooth"});
  // document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

toSalad(){
  // document.getElementById("saladandRaita").scrollIntoView({behavior:"smooth"});
  // document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}
toSeaFoodStarters(){
  // document.getElementById("seafoodStarters").scrollIntoView({behavior:"smooth"});
  // document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}

getMenu(){
  this._as.getData( ).
    subscribe((response : any) =>
    {
    this.vegpizza = response.message[0].menu[0].message.QuickBitesVegSandwich;
     this.nonvegpizza = response.message[0].menu[0].message.QuickBitesNonVegSandwich;
     this.quickbites = response.message[0].menu[0].message.QuickBites;
     this.HotBeverages =  response.message[0].menu[0].message.HotBeverages;
     this.ColdBeverages =  response.message[0].menu[0].message.ColdBeverages;
      console.log( 'response from API',response.message)
      this.spinner.requestEnded();
     
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
   
}
closeFilter(){
  this.showSearch = true;
  this.searchText = null
}

onSubmit(){
  console.log(this.enteredValue);
  this.enteredValue={};
  this.showGreeting = true;
}
updateMenu(){
  console.log(this.menu)
      this._as.postData(this.menu).subscribe((response) =>
      {
        console.log( 'response from API' ,response)
      }), (error) => {
        console.log( 'error is' , error)
      }
  }
}


