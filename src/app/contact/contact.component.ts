import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Language } from '../global/language';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,RouterLink],
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

  constructor(public languageService: Language, private router: Router) { }

  /**
   * Mark fields as touched when form invalid or checkbox not checked
   * @param {NgForm} form - template-driven form
   * @param {NgModel} name - name control
   * @param {NgModel} mail - email control
   * @param {NgModel} message - message control
   */
  onTrySubmit(form: NgForm, name: NgModel, mail: NgModel, message: NgModel): void {
    const formValid = form.form.valid;
    const allOk = formValid && this.checked;

    if (!allOk) {
      name.control.markAsTouched();
      mail.control.markAsTouched();
      message.control.markAsTouched();
      this.triedSubmit = true;
    }
  }

  /**
   * Submit handler: validates, optionally mocks, else sends HTTP request
   * @param {NgForm} form - template-driven form instance
   * @returns {void}
   */
  sendMail(form: NgForm): void {
    if (!form.submitted || !form.form.valid) return;

    if (this.mailTest) {
      this.onSuccess(form);
      return;
    }

    this.sendRequest()
      .subscribe({
        next: () => this.onSuccess(form),
        error: this.onError,
        complete: this.onComplete
      });
  }

  /**
   * Build and send the HTTP POST request
   * @returns {import('rxjs').Observable<any>} HTTP observable
   */
  private sendRequest() {
    const url = this.post.endPoint;
    const body = this.post.body(this.contactData);
    return this.http.post(url, body);
  }

  /**
   * Success handler: reset form and show success feedback
   * @param {NgForm} form - form to reset
   */
  private onSuccess(form: NgForm): void {
    form.resetForm();
    this.resetUiFlags();
    this.flashSuccess();
  }

  /**
   * Reset local UI flags after a submission
   */
  private resetUiFlags(): void {
    this.checked = false;
    this.triedSubmit = false;
  }

  /**
   * Show success flag for a limited time window
   * @param {number} [ms=2000] - display duration in milliseconds
   */
  private flashSuccess(ms: number = 2000): void {
    this.sentSuccess = true;
    setTimeout(() => (this.sentSuccess = false), ms);
  }

  /**
   * Error callback for HTTP request
   * @param {unknown} err - error payload
   */
  private onError = (err: unknown): void => {
    console.error(err);
  };

  /**
   * Completion callback for HTTP request
   */
  private onComplete = (): void => {
    console.info('send post complete');
  };

  /**
   * Focus a text input/textarea and move caret to the end
   * @param {HTMLInputElement | HTMLTextAreaElement} element - target element
   */
  focusInput(element: HTMLInputElement | HTMLTextAreaElement): void {
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
