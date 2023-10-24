export class WsService {
  static init() {
    const ws = new WebSocket("ws://localhost:3004");
    ws.onopen = function (event) {
      console.log(" -- event: ", event);
      console.log("Connected to WS Server");

      ws.send("Hello Server");
    };
  }
}

export default WsService;
