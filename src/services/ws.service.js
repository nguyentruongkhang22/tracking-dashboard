export class WsService {
  static url =
    process.env.NODE_ENV === "development"
      ? "ws://localhost:3003/ws"
      : "ws://localhost:3003/ws";
  static init() {
    const ws = new WebSocket(this.url);
    ws.onopen = function (event) {
      console.log(" -- Connection opened -- ");
      ws.send("Hello Server");
    };
  }
}

export default WsService;
