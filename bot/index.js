const run = async function(token) {
    console.log("TOKEN INJECTED: ",token);
    const TelegramBot = require('node-telegram-bot-api');
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, {
        webHook: true,
        webHook: {
            port:process.env.PORT,
            host:"socratus.herokuapp.com"
            
        }
    });
    await bot.setWebHook('socratus.herokuapp.com', {
        certificate: '../crt.pem', // Path to your crt.pem
    });

    // Matches "/echo [whatever]"
    bot.onText(/сдох/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message

        const chatId = msg.chat.id;
        console.log("INCOMING MESSAGE: ", msg);
        const resp = match; // the captured "whatever"

        console.log(resp, " LLLLL");
        // send back the matched "whatever" to the chat
        bot.sendMessage(chatId, "ДА");
    });

    bot.onText(/эй, сократ/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
        if(msg.from.first_name === "grenudi"){
            bot.sendMessage(msg.chat.id, "Слушаю, мастер");
        }
        console.log("INCOMING MESSAGE from master: ", msg);
        const resp = match; // the captured "whatever"
        console.log(resp, " on master");
    })
    bot.onText(/\/start/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
        if(msg.from.first_name === "Rodion"){
            bot.sendMessage(msg.chat.id, "Доебал, отебись!");
        }
    })
    bot.onText(/надоело/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
        if(msg.from.first_name === "Rodion"){
            bot.sendMessage(msg.chat.id, "Лох");
            bot.sendMessage(msg.chat.id, "Пидр");
        }
    })
    bot.onText(/да, сократ/i, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message
        if(msg.from.first_name === "grenudi"){
            bot.sendMessage(msg.chat.id, "Истина, мастер");
        }
    })

    // Listen for any kind of message. There are different kinds of
    // messages.
    // bot.on('message', (msg) => {
    //     console.log("INPUT: ", msg);
    //     const chatId = msg.chat.id;

    //     // send a message to the chat acknowledging receipt of their message
    //     bot.sendMessage(chatId, 'Received your message');
    // });
}

module.exports = {
    run
}
