const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_07_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrOGc1Y3pqYWIvN1dFZEV1UG1sR0s2K00zU3p2dlpGUW9zNllKTkFDRzNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4Mjk0Nzk3NDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGODk1RDc4NzI5QTgyQzIyM0VDMzdEOEIwRkU5RTNEMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI0OTMyNDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODI5NDc5NzQ5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzk5NEExRkNFMUE5OTY4OUQ2RThBQjc4MkYwMUE0OThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNDkzMjQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRXUkFRWFpjVGVDaVduYldLRUdlLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTA4MWVlZTQtYzdlYS00M2I4LWFjYjQtZTg5NTYyZGI2Njg4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTE0LFxuICAgICAgMTgwLFxuICAgICAgMTgxLFxuICAgICAgMTksXG4gICAgICAxMTEsXG4gICAgICA5MSxcbiAgICAgIDIzNSxcbiAgICAgIDIxNixcbiAgICAgIDI0MSxcbiAgICAgIDIxNixcbiAgICAgIDIyLFxuICAgICAgMjEwLFxuICAgICAgMjUyLFxuICAgICAgMjU0LFxuICAgICAgMTA1LFxuICAgICAgNTMsXG4gICAgICA0NyxcbiAgICAgIDE4MyxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDQ4LFxuICAgICAgMjI1LFxuICAgICAgMjUwLFxuICAgICAgMjAwLFxuICAgICAgOTQsXG4gICAgICAxNzIsXG4gICAgICA1MyxcbiAgICAgIDEyMSxcbiAgICAgIDIwOCxcbiAgICAgIDYxLFxuICAgICAgMTE4LFxuICAgICAgNjgsXG4gICAgICA4MSxcbiAgICAgIDE3LFxuICAgICAgMTUxLFxuICAgICAgODQsXG4gICAgICA0LFxuICAgICAgMjA2LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM4NVNBRFdZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODI5NDc5NzQ5ODozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA4NTU4NjM1MjMzOjM2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCTg7VcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZmJwNlVERUxIL2pyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVVNDVxaXlOVDhQNXRtNjdJMW9UQ2FUZ0ZmRUtzeUNUWFRzeTFVYXBDakE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid1V5UENacDdRbVUzdVhpUFZNM2ZyT3ZBWlZnSk5kYy9TbTNWVCs3Ym9RcmorWnNkaE4zaHlhNkxtcXl2V29xVWVkdHFsVnpuQmdvZ1c4L3dOVm5oQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidi9NVXVRbHR5eWg3MXZXL2RFTVR5UWgrK29KMVhLdWtxYTU2ZWU1ZDltUENSWU1Xc1VpbE14eFowVHp2c293Y1VxRmlQUHExcC9weGM5TmFXZ0Z1aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTgyOTQ3OTc0OTg6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0OTMyMzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFINldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg2Vy5qc29uIjogIntcImtleURhdGFcIjpcInRGWElnQ0NKcmZudWIwbEV3WHpZbnNScE9uL3NZM2FSanpBWllETk5KVmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODgzNTUxNjIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI0OTMyNDA2OTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
