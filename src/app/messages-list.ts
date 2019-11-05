export class MessagesList {
    constructor(
      public id: number,
      public time: string,
      public msg: string,
      public type: string //sender or reciver
    ) {}
  }
  