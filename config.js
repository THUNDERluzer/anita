//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "nowtyhashan44@gmail.com";
global.location = "Matara,Srilanka";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://wa.me/qr/P6WADRJOKAFUK1";
global.gurl = process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1";
global.website = process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg";
global.devs = "https://wa.me/qr/P6WADRJOKAFUK1";
global.sudo = process.env.SUDO || "94782543893";
global.owner = process.env.OWNER_NUMBER || "94782543893";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg,https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01lTDM1L0JJRzFlR0dyTEtNVDFnR0NiQWhQSld5MG1NT1N3Q3B5Wk5WWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTNMTFQrR1JkdTFNN1orVS9xdUR2V281dENTanMzd0ZaOWRpREFlSXlXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUHY5L0k2bENSZGxlWlpyMWpNWitWN1dWMzFSZytwcmc1TnQxaUw5cTJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrblpvT2VsMkNTVE5oV0tqZzBDbGtQQWx6akpqNndTM0Fjbm14bkE0T3dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKVVVmcUM5MVZBNmJXWHloTWZMcS8wdU9mRzEwUDh3bTNrNWNpY29za009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImovRUU0c2RBbzFBRVZoTzJSNzRuTTVKUU1BalRHSHFUTDRVVVYvUVdmQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxtUmw4RkhPUkJvRWVoUTl1eU45YlRIbDJBRFJUWFhVMW5PVGRGMk1Fbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzhnYStVaXBNcmdKYUNXNkZnbzl5cldaUllvdGNJZDNEZVpkbVZJbml4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJxb01BY3IwYjFjZWtYVnBzdlQ5NFhMMGR2RE5IbFBiMHJYN0xLdU9Bd1plTVk0dUFqZVN3S2ZLd2pJTWxrU0FQajZHS29pcHZVTkwyK2RNMHBrL0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJ5bVdUMUx5NlRQNkdJbkNHOGkzUnczQllnOEJOWHZ6OXE1SkcxUXhEVHM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBclpiMnJhT1RRMlQ4NXZEZGpDVmRRIiwicGhvbmVJZCI6IjZjN2MxZWQwLWViMjAtNDIzZS1hN2ExLWIzMTMzODM2MWNiOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoekpXa0J4ZHdic2xJZEJIUm1RS05zYloyblE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEdEUmtyUzcvTzd6SHZ2SHBtT3VaN1Z1TnNJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJGWFFNMzU5IiwibWUiOnsiaWQiOiI5NDc4MjU0Mzg5Mzo2NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5Sdk1JSEVKNyt3YlVHR0M4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkYxSDlRdnVVV0RGUDNjaFdEeWNVTVlIT0FpU3ZBekcxaFpjMjJVajlBcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoielVJV3BGT1BxaDl0MHd4RCtocjVwaElMRjdXRjFQMUwxQUxzNDdPeFBVRDhReWJNMlhkODRtc2REcmo3RU1Ld0pudkdUWmxneWhYS0xSUERVV01TQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik82cnNJUWJrSG1rS0toRVZNNUNxblM4dWlOV0tZWCtsYnhtRDUvaThWVUlPUXVRSzlZT2dUVVRwUCtzdXdoOW5jTHQza2hJcmFiQmpRaXlyNzZzT0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODI1NDM4OTM6NjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlJkUi9VTDdsRmd4VDkzSVZnOG5GREdCemdJa3J3TXh0WVdYTnRsSS9RTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjg0MjkyMywibXlBcHBTdGF0ZUtleUlkIjoiQUI4QUFFeFgifQ"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Panda",
  author: process.env.PACK_AUTHER || "Panda",
  packname: process.env.PACK_NAME || "PANDA",
  botname: process.env.BOT_NAME || "PANDA",
  ownername: process.env.OWNER_NAME || "Hashan",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
