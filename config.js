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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEl5bi9vVmFKQjB1ckpnaVBFQTZsT0FGOHBKa1NBQ3FybTZLejFGc29VTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnU0b2xTQkVUUmdXbFJ3U3dQSXlrREFFeHZRVlIwckRzSjNmY1I2Rk9WRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmpZek55eDlVT0JGTmNzanpxSzY2OFo2emhSNFpsRzdMVjgzUW0rdDFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUUVocmNyeDNTR29wa3EzTjkzZzJUQmdvVTZiZmRnQXlZTUNmWVh1VUNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPa0c2VHFxSTB2MDlESXkyYkU1TmdORWc3OVFvNG80Wis3UGpTVFBaSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpYNUNIVnoxN29KTCtHakdsRmUvclJYU3lEd0c3Q2FuSzVzUlFlaG1hM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01XM2d5Vkx1M3BLY2RZdVV2aG1aOEdkT2lJMlRpTWYwd1krYkExODducz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1A4Zkh0bTdLVW40NzQ2eTNTNllPQ1Vua1lDNktxeGIzZVo1Y05IN2RGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJaU2VMM3FlZGVsTVdHaWxBSS8xTDA1RG5lV0VxVXFiVWgzQVFWbEdHTTQzZC96RWRla0VsM25ZQS9XOUxUUXZzQ2ptTTNHSFdDWE1nVGVvVEhER0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJaVFYwZmd5T0VwMm1xS1lPVld1QkkzZCtETGdHWmlucDIrM1g2anY3aXdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2YkkxanlNU1RMaXh5UTl5M3p0Tm5BIiwicGhvbmVJZCI6IjFiYWM5YTZkLTVjZmUtNGI0ZC05N2FmLTFhYWIxMmJhZWNlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwaEZtM2xaMlk0ck9KK0g5QU16Nm05NHMrUE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXJOSk9pNk9SR3NNam5vbzNwcnhSbmxyQWc4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBaRTZRNEdYIiwibWUiOnsiaWQiOiI5NDc4MjU0Mzg5Mzo2M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5Sdk1JSEVMYjR2clVHR0N3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkYxSDlRdnVVV0RGUDNjaFdEeWNVTVlIT0FpU3ZBekcxaFpjMjJVajlBcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic2NFSUs5TVhMNUpxZHBYc0szbVpyZTBxUWk1U3UrMUJ1RUpzU3ZXcDBNOFpZV3RKb1drSitGQmg2b01RMWptKy9JNzVrQStxVEF6d3BoK2oxVmxIRHc9PSIsImRldmljZVNpZ25hdHVyZSI6InhXWktuV3F3ZVBlRC9wd0xjdThMNmRDeU9oaHlRSlJlNzdKN0FGSFl5MDViSHN1L3V1NXVKWXJvVVVhM0hDS1FXNzVvSGY4UmVKeFN6R2FEU1Q3bkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODI1NDM4OTM6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlJkUi9VTDdsRmd4VDkzSVZnOG5GREdCemdJa3J3TXh0WVdYTnRsSS9RTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc5MzAyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUI4QUFFeGIifQ=="
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
