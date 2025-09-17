import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Language } from '../global/language';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  sentSuccess = false;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  name: any;
  checked: boolean = false;
  formchech: any = true;

  mailTest = false;
  triedSubmit = false;

  post = {
    endPoint: 'https://devcontain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(public languageService: Language) { }

  onTrySubmit(form: NgForm, name: NgModel, mail: NgModel, message: NgModel) {
    const formValid = form.form.valid;
    const allOk = formValid && this.checked;

    if (!allOk) {
      name.control.markAsTouched();
      mail.control.markAsTouched();
      message.control.markAsTouched();
      this.triedSubmit = true;
    }
  }

  sendMail(ngForm: NgForm) {
    if (ngForm.form.valid && ngForm.submitted && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            ngForm.resetForm();
            this.checked = false;
            this.triedSubmit = false;
            this.sentSuccess = true;
            setTimeout(() => this.sentSuccess = false, 2000);
          },
          error: (error: any) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.checked = false;
      this.triedSubmit = false;
      this.sentSuccess = true;
      setTimeout(() => this.sentSuccess = false, 2000);
    }
  }

  focusInput(element: HTMLInputElement | HTMLTextAreaElement) {
    element?.focus();
    if (
      element instanceof HTMLTextAreaElement ||
      (element instanceof HTMLInputElement && element.type === 'text')
    ) {
      const len = element.value.length;
      element.selectionStart = len;
      element.selectionEnd = len;
    }
  }
}
