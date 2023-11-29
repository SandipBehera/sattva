import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IpServiceService } from '../user_service/service/ip-service.service';
import { User } from '../user_service/user';
import { UserService } from '../user_service/UserService';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title = 'sattva lakeridge';
  loading = false;
  public myForm: FormGroup | any;
  ipAddress: any;
  IpAddress: any = this.getIp();
  @Input() user: User = { name: '', email: '', phone: '', url: this.title };
  constructor(
    public activeModal: NgbActiveModal,
    private element: ElementRef,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private ipAdd: IpServiceService,
    public router: Router
  ) {
    this.Createform();
  }

  ngOnInit(): void {
    let input_group_focus = document.getElementsByClassName('form-control');
    let input_group = document.getElementsByClassName('input-group');
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener('focus', function () {
        input_group[i].classList.add('input-group-focus');
      });
      input_group[i].children[0].addEventListener('blur', function () {
        input_group[i].classList.remove('input-group-focus');
      });
    }
  }
  Createform() {
    this.myForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }
  getIp(): void {
    this.http
      .get('https://www.keyonprop.com/api/getIp')
      .subscribe((res: any) => {
        return (this.ipAddress = res.message);
      });
  }
  OnSave(): void {
    this.loading = true;
    this.userService.formSubmit(this.user).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.loading = false;
    window.location.href = '/thankyou';
  }
}
