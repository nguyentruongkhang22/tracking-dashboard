export class WsService {
  static init() {
    const ws = new WebSocket("ws://localhost:3004");
    ws.onopen = function (event) {
      ws.send("Hello Server");
    };
  }
}

export default WsService;
