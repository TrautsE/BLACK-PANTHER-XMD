const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kalulestuart28@gmail.com";
global.location = "Kampala,Uganda";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaD3dBZGzzKVBi9ULs44";
global.website = process.env.GURL || ""
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://f.uguu.se/OBFbyitz.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.owner = process.env.OWNER_NUMBER || "256789440803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ltY2tvdE1kV1lNUXY3M05jVGRCZmJMNTdFUi9leU1BTm1NWlpiRmRFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzFlOUVINEl3N0E4VXREYmhlTW8ySDAreldEZHpHK0dvVFphVy9ObGt5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQkR0aHhCTjFqQ0c3WWQzVUVsbXF2WE9Hbm9Bak11NFBoYnJKWVlFUEdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQzUva0lPTkV1ekNUMDR3MUZxODFBUVZqVTIzTXd2Um1acHVhaktOZEVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJU1FMUDNuNlV0VTdrQTBPaGwzclBBR2VRZ01PWkJGR2t0b1loemduM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJDZHJhWW50T0dBSFkwcGtHVC9PKzZBeVdFU29hTzRCdE5NcXhaNDJrR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU4zWSttOTlkcy9oQmRkZzFSUDVFZnZiYS9hZlFFWEdtbnd6Z05HNmYwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkIvbmVBNUE2RU5FUXZMVGdrL005WXdIZ0tUcWF2cEVRRy9oM0JFVGFIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM2TmNYU05wU0ZxMkVPNHFrRG9BY0NXQmtCWGF5MktsQ3lyM0xKQ0ROV0g3aVVWUUUrZTJhK292S254U29ZdEhOMnppdDZTbXV2M0p4bWZxdDl0WkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJha2FGSDNDZVNjTVZ6NHU4OFh5TDdIWWdqVTFSSDR5YTF4L1AxZkNPc3JnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4OTQ0MDgwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNUZGNzgxNEJCNUY3MzY0QTdDMzJDQTk5Rjk1RjEzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTIxMDAzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwRFJQX0VhelNES1o0MUM2WXp2X3d3IiwicGhvbmVJZCI6ImIzMGEwZTFhLWNkNzItNGExNC1iZmQxLTQ1NTgyOGFiYTZkMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTDA4VVhzSUtGQlB1Q0ZYNnZDREkxUzRrbVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1l3QmNScEdtZW9tbTZxU3dEWUNJRWRlYitzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRFMUxHUkc1IiwibWUiOnsiaWQiOiIyNTY3ODk0NDA4MDM6NDJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BPMTQrWURFSm1ycnJVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImIxMXhrV05yRXFlMkVLVXNoZlJiOEJYUnZWKzJHem9LRzRxTDNiZ1VPQUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im82Y2s3QVlxYjAxTmxtb292TlRuM3pxTkRGYS9DN1VxTVBtVDVQQjVaOTN2dXkyeXphSThrK3lVYW1XdDBLOWVTZm8xMmlFV1grdHB4Y1dvcWdnMEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVUXF4ajh3K21uVGRUSU9FZVBaSzQwY1Urd0wyY0kwMGphSmtZS1ZwWVYyZkRyZVgvMlRBRlNPUnBlN3JRZGlGS083azg2a3ZpOWYyK0QweC9PakpBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1Njc4OTQ0MDgwMzo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXOWRjWkZqYXhLbnRoQ2xMSVgwVy9BVjBiMWZ0aHM2Q2h1S2k5MjRGRGdBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTIwOTk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9lSCJ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",
  author: process.env.PACK_AUTHER || "trauts elulak",
  packname: process.env.PACK_NAME || "Trauts-Md♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
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