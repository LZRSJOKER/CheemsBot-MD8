const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['917561815867'] //ur owner number
global.ownernomer = "17052301998" //ur owner number2
global.ownername = "___𝙸𝚃𝚊𝙲𝙷𝙸__🪬" //ur owner name
global.ytname = "❄️☮️" //ur yt chanel name
global.socialm = "GitHub:ITAXHI007" //ur github or insta name
global.location = "EARTH, 🌎 " //ur location

//new
global.botname = "𝑆𝛨𝛪𝛮𝛭É𝛮 𝑇𝛥𝛫𝛯𝛧Ō"
global.ownernumber = '917561815867'
global.ownername = '___𝙸𝚃𝚊𝙲𝙷𝙸__🪬'
global.ownerNumber = ["917561815867@s.whatsapp.net"]
global.ownerweb = "http://wa.me/917561815867?text=_៚ʜᴇʟʟᴏ+sᴇʀ+ʙɪɢ+ғᴀɴ+ᴠʀᴏ+☮️🕊️_"
global.websitex = "https://itaxhi.com/007"
global.wagc = "__"
global.themeemoji = '🃏'
global.wm = "~𝘿𝞗𝙁𝙇𝞓𝞛𝞘𝞜𝙂𝞗"
global.botscript = '__' //script link
global.packname = "___𝙸𝚃𝚊𝙲𝙷𝙸__🪬"
global.author = "☮️🕊️"
global.creator = "917561815867@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/Joker.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/Takezo.jpeg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/obito.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/Joker.jpg") //ur thumb pic
global.defaultpp = 'https://pixabay.com/illustrations/goku-anime-character-fictional-6563674/' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
