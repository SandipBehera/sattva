import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { IpServiceService } from '../user_service/service/ip-service.service';
import { User } from '../user_service/user';
import { UserService } from '../user_service/UserService';

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css']
})
export class MasterpageComponent implements OnInit {

  title = 'Raghava Iris';
  loading=false;
  public myForm:FormGroup|any;
  ipAddress:any;
  @Input() user:User={name:'',email:'',phone:'',url:this.title};
  constructor(private modalService: NgbModal,private element: ElementRef,private formbuilder:FormBuilder,private http:HttpClient,private userService: UserService,private ipAdd:IpServiceService,public router:Router) {
    this.Createform();
   }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
}

  ngOnInit(): void {
  }
  Createform(){
    this.myForm=this.formbuilder.group({
      name:['',Validators.required],
      email:['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      phone:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    })
   }
   OnSave():void{
    this.loading=true;
    this.userService.formSubmit(this.user).subscribe(()=>this.goBack());
  }
  goBack():void{
    this.loading=false;
    window.location.href='/thankyou';
  }
}
