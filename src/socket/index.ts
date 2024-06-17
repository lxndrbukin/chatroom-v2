export const io = (socketIO: any) => {
  socketIO.on('connection', (socket: any) => {
    console.log('connected');
    socket.on('message', (data: any) => {
      console.log(JSON.parse(data));
    });
  });
};
