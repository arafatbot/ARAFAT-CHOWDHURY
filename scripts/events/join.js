module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "7.3.1",
	credits: "John Lester",
	description: "Notification of bots or people entering groups with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": "",
    "@supercharge/strings": ""
	}
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	
 
	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
	const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const { join } = global.nodemodule["path"];
	const { threadID } = event;
const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
 
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`Mr TomXxX CONNECTED«

আসসালামু আলাইকুম☘️
<<<<<------------------------------>>>>>  
BOT CONNECTED SUCCESSFUL✔ 

APPROVAL ALLOW IN THIS GROUP✘
<<<<<------------------------------>>>>>

TO VIEW ANY COMMAND
\n\nUse ${global.config.PREFIX}help to see commands List.\n\nexample :\n${global.config.PREFIX}shayri (text)\n${global.config.PREFIX} (photo)\n${global.config.PREFIX}help2 (all commands)\n${global.config.PREFIX}info (admin information)
${global.config.PREFIX}callad For Report Admin
<<<<<------------------------------>>>>>
AND FOR ANY REPORT OR CONTACT BOT DEVELOPER
༻𝐎𝐖𝐍𝐄𝐑:- ☞𝐑𝐚𝐭𝐮𝐥 𝐇𝐚𝐬𝐬𝐚𝐧☜ ༺
༒𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠𝐌𝐫𝐓𝐨𝐦𝐗𝐱𝐗〠.༒

༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞ www.facebook.com/MrTomXxX ☜ 

༻𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘭𝘪𝘯𝘬༺:- 
☞ https://youtube.com/@MrT0mX ☜

֎𝘍𝘰𝘳 𝘈𝘯𝘺 𝘒𝘪𝘯𝘥 𝘖𝘧 𝘏𝘦𝘭𝘱 𝘫𝘰𝘪𝘯 𝘞𝘱 𝘎𝘳𝘰𝘶𝘱֍:-

☞ https://chat.whatsapp.com/Hog9Xpbgz9cK7EpfUKaHnC ☜

 ֎𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘔𝘦 𝘖𝘯 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱֍ :-  ☞+8801581712206 ☜ `} , threadID));
Typese {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
 
 
			var mentions = [], nameArray = [], memLength = [], i = 0;
 
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
 
 
  let pathImg = __dirname + "/cache/joinnoti.png";
  let pathAvata = __dirname + `/cache/avt.png`;
 
  let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
 
const res = await api.getUserInfoV2(userID); 
const request = require('request');
const Canvas = global.nodemodule["canvas"];
const knights = require("knights-canvas");
const Str = require('@supercharge/strings')
let num = memLength.join(', ')
let user = nameArray.join(', ')
let gc = threadName;
const limit = Str(`${user}`).limit(20, '...').get()
const gcname = Str(`${gc}`).limit(15, '...').get()
const number = Str(`${num}`).limit(1, '').get()
// ok na yan wag mo i edit itong variable na nasa taas
  
    let getAvata = (await axios.get(`https://graph.facebook.com/${userID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
 
  fs.writeFileSync(pathAvata, Buffer.from(getAvata, 'utf-8'));
 
 
  var image = await new knights.Welcome2()
    .setAvatar(`${pathAvata}`)
    .setUsername(`${limit}`) 
    .setBg("https://i.imgur.com/afSpOv6.gif") 
    .setGroupname(`${gcname}`) 
    .setMember(`${number}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(pathImg, data);
  
 
			(typeof threadData.customJoin == "undefined") ? 
 
 
 
        msg = "Hi {name}, Tum iss group ke {soThanhVien} Member ho. Welcome\nEnjoy karo maje lo\naur Dher sari friends banao aur happy raho. Mujhse Kuch janne k liye pehle > prefix < ye likh ke m work kaise karta hu dekhlo 🥳♥" : msg = threadData.customJoin;
 
      msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);
 
 
 
		return api.sendMessage({body: msg, attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg)); 
}
		} catch (e) { return console.log(e) };
	}
	}
