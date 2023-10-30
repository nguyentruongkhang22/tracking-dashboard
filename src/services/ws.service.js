export class WsService {
  static url = "ws://localhost:3003/ws";

  static init() {
    const ws = new WebSocket(this.url);

    ws.onopen = function (event) {
      console.log(" -- Connection opened -- ");
      ws.send("Hello Server");
    };

    ws.onmessage = function (event) {
      console.log(" -- Message received -- ");
      console.log(event.data);
    };
  }
}

export default WsService;
