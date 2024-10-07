const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_24_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2OSxcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicmdua2NwdjdLY1pUOUVzY2doaVFTQnlRQWVmQ0hnNkJKa0h2SFN4bUFEOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTnBWSUVXbVdRcnE2Nm5WWnlVVmZGZ1wiLFxuICBcInBob25lSWRcIjogXCI0MDFmODFjMC0yZTM3LTQ0N2MtOWQwMC0xOGMxY2U5Y2ZjODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMjM3LFxuICAgICAgMTQ4LFxuICAgICAgMTgsXG4gICAgICA1OCxcbiAgICAgIDEwMSxcbiAgICAgIDEzMSxcbiAgICAgIDIyMyxcbiAgICAgIDEzMixcbiAgICAgIDE5MSxcbiAgICAgIDE4NixcbiAgICAgIDE2MixcbiAgICAgIDIxOCxcbiAgICAgIDIyMixcbiAgICAgIDIzNixcbiAgICAgIDI0NSxcbiAgICAgIDIzNCxcbiAgICAgIDQyLFxuICAgICAgMTQwLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjMsXG4gICAgICAyMTQsXG4gICAgICAxMjIsXG4gICAgICAxOTQsXG4gICAgICAxNzksXG4gICAgICA1LFxuICAgICAgMTkzLFxuICAgICAgMjE4LFxuICAgICAgMjUwLFxuICAgICAgMTcyLFxuICAgICAgMTk0LFxuICAgICAgMjA4LFxuICAgICAgMTczLFxuICAgICAgNjYsXG4gICAgICAyNTQsXG4gICAgICAxODksXG4gICAgICAxNzcsXG4gICAgICAxNzgsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNlRONFBTUThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAwNzM5MzcyNDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIs6yxJnEmc6yzrFcIixcbiAgICBcImxpZFwiOiBcIjU2ODEwMDM1NzQ0OTkyOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxUTZ1TUNFS1dQaTdnR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ2Z2QnpYR0J6MTc3NVJhUER2UnorcTQ0Z0psQndWU2pJODBYVnNnRXFrMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHSVdLMlVYMk12T0pCcG95aVM0Zm9LOHRDMDVUdjJkeVVvUWd5cHQ5am1iZUV2alpBS2ZVSFhSUkYyVytXVkZwd0FwVDBUNXNIRjJqc2MxZnVSTWlCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwZWlwbSt2VlBYbkp6YytNOWNXVWorV3VNMzdGWUhzc2pCK1Nob0FBc1hpNEJjeGVqdk1ONFFoakJyT0IrbFVhcmVmY2duZkJlWFREYitSVjB2V1JEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMDczOTM3MjQ6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MjM1NDMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWRQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNZFAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwQ1dQNng1Tk5MK29qRHBLdnRpNnZHS0lMVnpENXNVOEx1cStLNjlrRmtvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NjIyNzcyMixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
