//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923481708758@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "Message 𖤍𝐆𝚫𝚴𝐆𝐒𝚻𝚫𝚪𖤍420 on WhatsApp. https://wa.me/message/5EEUO34Z2JLGC1";
global.website = process.env.GURL || "Message 𖤍𝐆𝚫𝚴𝐆𝐒𝚻𝚫𝚪𖤍420 on WhatsApp. https://wa.me/message/5EEUO34Z2JLGC1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://wa.me/message/5EEUO34Z2JLGC1";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923255974047";
global.owner = process.env.OWNER_NUMBER || "923481708758";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1ncHRWUEdWUjM1NEx1OVRqNENvWGJGb3VYZGlSbk5ncitnMElXc1Ztbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFZMMDg2djB5Z1pHT05jcHhDQnJSYTNCUUpQRmkzYkRsVDU5bFRQdVZ3Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRjRSLzh4KzFQbFRiei95NnlMVk53MVQvdVR6M3ZkSENJelpDeVR3Z1drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpV1FHdnh3dG5PVGM5SHlnRmp4MUxJL0g4bE9rWit4Uk0rMC8zZU1iaG1RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQbnY1c2F2b0w1RWZuaHZUVnB6VjJhclZ6TGdPMnZ6Z1Jmdk9mTHVVRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOTVRPTy9QVFo5VUgySjBmWFZpbU5YUGZVQ0Y3RDE1a1hFckNtSURCZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk95Y2FET3hLWFFXbC92TWN2S2ZMRzVEcmIwUWxoVXVvZy92Z2ZLNVdFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxwejg5MGZGQ1dvT0FXdGVGdnRyS204K0dJVUtHbFVtMlFaSzNEaFEwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InplM0JKd3Y2TFd1YWprK21lUkg2enBLcDFrdm5ZK3pRME5UeXRSRGtnSDAyb2Nwd2Fya3FLYlpyUVBkTW1zTW1IeXpHVXZwQktOaUlWbUNvbDNaQ2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJSQTBxcGtEaDBVRmFqdEVQQnFoNEpNUnVzUk1Fb28ycmtsY3VvZDBmVFE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJublZ4RnVjWFJ0NlhfcE1FZzA5dFFRIiwicGhvbmVJZCI6Ijg0YTM3MmZkLTRjZmEtNGIyOC04ZTAyLTAzMWJlYzdjZWM2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwcHFHMzlhNFFMNFpoMHpPSGYxS3RiRm5JUjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXkrM3V0VTFkRTgyYlRMd21YMTliZkFVdjZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxDNkRaOUhQIiwibWUiOnsiaWQiOiI5MjM0ODE3MDg3NTg6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwlqSN8J2QhvCdmqvwnZq08J2QhvCdkJLwnZq78J2aq/CdmqrwlqSNNDIwIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMS0xpc2tFRUlLaG83UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJndld5cTBkaHZ4WnFiclJnOTJXV2o2MkdrV1RuMERxNmY1emlYT2YwVWo4PSIsImFjY291bnRTaWduYXR1cmUiOiJzODlPUEU1M2Mxd3UrN0szTFFPeGpTNFdyY1VFNTd4NzJhYzJjUE9pK0Z0QmliSHdzTmdUNE1wUXFXWmpkbGtlY0FYV2owaXJpMlN3NnlRd1RKVGNCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSzJxMGVVblU3Z1BkSjZIbUdsdmhyK0xWVEFCWlY0cTRzcWw1Vnd3WEVCU2RpQmFqcjVLMG1lWUovdTZteDZBSVRnU0pmWUx3b1d2MUlhUDUzdkY0Z0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0ODE3MDg3NTg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZTDFzcXRIWWI4V2FtNjBZUGRsbG8rdGhwRms1OUE2dW4rYzRsem45RkkvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjQyMzIxfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "GANGSTER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "GANGSTER",
  errorChat: process.env.ERROR_CHAT || "923481708758",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
