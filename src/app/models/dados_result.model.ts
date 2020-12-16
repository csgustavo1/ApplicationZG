export class dados_result {
  constructor(
    public instrument?: string,
    public preco?: number,
    public price?: number,
    public data?: Date,
    public porcentagem?: number,
    public valor_total?: number,
  ) {}
  static fromJson(jsonData: any): dados_result {
    return Object.assign(new dados_result(), jsonData);
  }
}
