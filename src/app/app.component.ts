import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { IpServiceService } from './user_service/service/ip-service.service';
import { User } from './user_service/user';
import { UserService } from './user_service/UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sattva lakeridge';
  public myForm: FormGroup | any;
  ipAddress: any;
  @Input() user: User = { name: '', email: '', phone: '', url: this.title };
  constructor(
    private modalService: NgbModal,
    private element: ElementRef,
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private ipAdd: IpServiceService,
    public router: Router
  ) {
    this.Createform();
  }
  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  ngOnInit(): void {
    if (performance.navigation.type == 2) {
      window.location.reload();
    }
    this.getIp();
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
      .post('https://www.keyonprop.com/old_ui/api/postIp', 'prop_name=' + this.title, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }),
      })
      .subscribe((res: any) => {
        return (this.ipAddress = res.message);
      });
  }
  OnSave(): void {
    this.userService.formSubmit(this.user).subscribe(() => this.goBack());
  }
  goBack(): void {
    window.location.href = '/thankyou';
  }
}
