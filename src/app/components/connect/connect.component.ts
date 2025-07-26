import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  isSubmitting = false;

  submitForm(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach((key) => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      message: this.formData.message,
    };

    emailjs
      .send(
        'service_xd827el',
        'template_e0bre9a',
        templateParams,
        'user_EelcXR1O2dtBCcKFTmS2V'
      )
      .then((res) => {
        console.log('Email sent successfully:', res.status, res.text);
        this.isSubmitting = false;
        this.formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
        };
        form.resetForm();
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        this.isSubmitting = false;
      });
  }
}
