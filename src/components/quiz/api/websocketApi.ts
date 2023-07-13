// const ws_addr = "/game-ws"
// const rest_addr = "http://localhost:8080/api/games"
//
// async function connect() {
//     // Connect to ws
//     console.log("Connecting to websocket")
//     let socket = new SockJS(ws_addr);
//     let stompClient = Stomp.over(socket);
//     // stompClient.debug = null
//
//     // Get chat info
//     fetchAvailableChats().then((res) => {
//         let chatIds = res.map((chat) => chat.id)
//
//         // Fill chat messages
//         for (const id of chatIds) {
//             fetchDataForChat(id).then((ch_msg) => {
//                 ch_msg.content.forEach((msg => {
//                     showMessage(msg.content)
//                 }))
//             }).catch(() => {
//                 console.log("Cannon fetch messages")
//             })
//         }
//
//         // Set listeners
//         stompClient.connect({}, function (frame) {
//             console.log(frame);
//             chatIds.forEach((id) => {
//                 console.log(`Subscribing to /chat-queue/${id}`)
//                 stompClient.subscribe(`/chat-queue/${id}`, function (message) {
//                     showMessage(JSON.parse(message.body).content);
//                 });
//             })
//             // stompClient.subscribe(`/chat-queue/1`, function (message) {
//             //     showMessage(JSON.parse(message.body).content);
//             // });
//         });
//     }).catch(() => {
//         console.log("Cannot fetch chats")
//     })
// }