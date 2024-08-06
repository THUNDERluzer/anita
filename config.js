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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://wa.me/qr/P6WADRJOKAFUK1";
global.gurl = process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1";
global.website = process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg";
global.devs = "https://wa.me/qr/P6WADRJOKAFUK1";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94782543893";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg,https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg,https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBZMXFSUitFelArWGs1czgxdElqWlFFWktYUHhJZnpmQVhKR1o3MVNHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmswY0xtS3dqS2FMZjl6TUIvS0Y5Q2k5WndZZG5xU1l6SENuZGE1d1RFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTnRlaVFtZ3dTaHBadkVUV1BaMFcvT0puZzM1bnhCU2JhZEQxT3I0TlVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZaEdoSVlXbUdRb0RmUWVFTmxxdmFmUnltQnBacm1jNkxadXl4Q1NlSHpNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JL05oaEpQNzRSbG1CZnJRYUs2ZEpOWTd5QTZFQzNNc3dXbzg2VS9obG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJcHFRVHQwMjMwbWlMZ1RrVUl0YlozY3prMUJYL2xrVmQ4dVNndXRZUVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVA0dXlkbVZEZklKTEsyVDQwc0JLdVR6LzVQV1JCei9tRUR2NVVQdGwycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnFiQXpjTjVuS1hvOWVVellVbUdrYzRqZUZhditrZDRMUENrNnc1UEdCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI1WEtONjBvL1VQRnBOR0JQYkpySmFjd2VWcmppUW5YNzVhTUVBbzVtUVdlOUNlNlpwT0xFYVlNK2w2Y3lvRkgxQnBHZnJ0b1lkdzYyRWdTRmNBUEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJZUHJ0QUMwbnVUMkNwM0hLT0VIRjduZ2luWENUbkwyYTNody9Hck03NU9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgyNTQzODkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRFOUE4QkJCNjA2ODA5REIzMjc4MTA5RDExQThBNkJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5MDMyOTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgyNTQzODkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI4QjQ2RTM3MEZEQTVGOTc4QTMwRTFFQkZFRkI0RjRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5MDMyOTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNEWUVrdlVDU3NHZDJqX1hBaEp2NHciLCJwaG9uZUlkIjoiMGFiMDk5ZjgtZTc1NS00NzNlLTgyOGQtNWIzMjEzODQzMjdjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JSVpUZlRycjZLUkR3YVJORS80Y1BvSGNiST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvM1ZpUzlUZW5XSWwyY0JUNnNlSDhFb0tHbjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJSRENXRVciLCJtZSI6eyJpZCI6Ijk0NzgyNTQzODkzOjY3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJamZsTjBIRU83VnhiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHY3VJT3JxMFRBUFI1ekt3QnEwYldqamdPQXBRbTVGOU9XS3A0TFpiZjBFPSIsImFjY291bnRTaWduYXR1cmUiOiJCSFVlR0NZTFdzOHcycUF1MUFYdzhLZm1yNTdudmxWYTlSakNqR2xScWJmcldoZ0tEc3hBUVhTd0tRVkRuUVQ0Z3M2a3dSbms0ZkFOamhqdktyME1CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVTc5S1JHRWEzSG8xN2h6OGIyRVkxZFRNWFdXTVFVY1ByNjh3MXJXcHdnVDU2RkZ6L0s2QkllQXpEK2VHbnNkenpib1BmTU5VQ3pqblNVdDNxU055Q1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MjU0Mzg5Mzo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbkxpRHE2dEV3RDBlY3lzQWF0RzFvNDREZ0tVSnVSZlRsaXFlQzJXMzlCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTAzMjkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVKNyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Panda",
  author: process.env.PACK_AUTHER || "Panda",
  packname: process.env.PACK_NAME || "P A N D A",
  botname: process.env.BOT_NAME || "Panda",
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
