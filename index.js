const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === 'hii') {
		  message.reply('yup');
	} else if (message.body === 'Good Morning') {
		message.reply('Have a nice day.');
    } else {
          message.reply('Bolo na');
    }
});
client.initialize();
