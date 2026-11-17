export class Articles {
  protected readonly _id: string;
  protected _title: string;
  protected _content: string;

  constructor(id: string, title: string, content: string) {
    this._id = id;
    this._title = title;
    this._content = content;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }
}
