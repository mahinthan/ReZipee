export enum ServerStatus {
  'stable',
  'offline'
};

export class Server {
  constructor(private name: string,
    private size: string,
    private creationDate: Date,
    private status: ServerStatus.stable
  ) { }
};