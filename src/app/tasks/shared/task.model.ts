export class Task {

  constructor(
    public id: number,
    public title: string,
    public descricao?: string,
    public done?: boolean,
    public deadline?: string
    ) { }

}