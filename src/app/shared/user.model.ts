export class User {

  public constructor(
    public nome: string,
    public email: string,
    public password: string,
    public passwordConfirmation: string,
    public id?: number
  ){ }
}