import { Component, OnInit } from '@angular/core';
import{Image} from "src/app/model/image";
import{ServiceadminService} from  "src/app/service/serviceadmin.service";
import{Hotel} from "src/app/model/hotel"
import { from } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {
  hotel: Hotel = new Hotel();
  data: Image;
  check: boolean = false;
  image:Image = new Image();
  mes;
  constructor( private imgService: ServiceadminService,
    private router: Router) { }

  ngOnInit(): void {
  }
  Addhotel(){
    this.hotel.UserId = JSON.parse(localStorage.getItem('key'));
    console.log(this.hotel);

  }
  onChange(file) {
    if (file && file) {
      var reader = new FileReader();

      reader.readAsDataURL(file); // read file as data url

      reader.onload = (file) => { // called once readAsDataURL is completed


        this.hotel.img.push(file.target.result);
       // this.hotel.img = file.target.result;
      }
    }
    this.check = true;
    this.imgService.upload(file)
      .subscribe(res => {
        console.log(this.data = res);

       // this.product.img = this.data.data.link;
       this.hotel.img= this.data.data.link;
        this.mes = "Upload ảnh thành công";
        this.check = false;
      });
  }
}
