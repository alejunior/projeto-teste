import { FormGroup } from "@angular/forms";

export class FormUtils {

  public constructor(
    private form: FormGroup
  ) { }

  // validação do template
  public fieldClassError(fieldName: string) {
    return {
      "is-invalid": this.form.get(fieldName).invalid && (this.form.get(fieldName).touched || this.form.get(fieldName).dirty),
      "is-valid": this.form.get(fieldName).valid && (this.form.get(fieldName).touched || this.form.get(fieldName).dirty)
    }
  }
}