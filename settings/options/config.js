// CREATED BY Juvian
const fs = require('fs')
const chalk = require('chalk')

// OTHERS
global.owner = ['6282362285077', '6282362285077']
global.premium = ['6282362285077', '6282362285077']
global.number = '6282362285077'
global.ownername = 'Juvian'
global.botname = 'Viann Botz'
global.packname = 'Juvian'
global.author = 'By Juvian'
global.lolkey = 'VianBotz'
global.email = 'johanmichael929@gmail.com'
global.youtubeowner = 'https://youtube.com/channel/UCL-1ccm0on-hBuh2GWLaZRA'
global.websiteowner = 'https://github.com/Lexxy24'
global.githubname = 'Juvian'
global.region = 'Indonesia'
global.sessionName = "session"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.simbol = "➭"
global.rkyt = []

// BIARIN:v
global.creator = '© Created By Juvian Official'

// LIMIT
global.limitawal = {
premium: "infinity",
free: 20
}

global.mess = {
error: 'Error',
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
noRegis: 'Kamu Belum Terdaftar Di Database Bot Silahkan Ketik\nExample:\n#daftar nama|umur\nContoh:\n#daftar Lexxy|17',
}

// MEDIA
global.image = fs.readFileSync("./settings/media/Juvian.jpg")
global.thumbnail = fs.readFileSync("./settings/media/Juvian.jpg")
global.qris = fs.readFileSync("./settings/media/qris.jpg")
global.scimg = fs.readFileSync("./settings/media/script.jpg")
global.mnuimg = fs.readFileSync("./settings/media/Juvian.jpg")
global.sewimg = fs.readFileSync("./settings/media/Juvian.jpg")
global.rulsimg = fs.readFileSync("./settings/media/rules.jpg")
global.fitimg = fs.readFileSync("./settings/media/Juvian.jpg")
global.thumbrpg = fs.readFileSync('./settings/media/menuRPG.jpg')
global.imgjoinrpg = fs.readFileSync('./settings/media/joinRPG.jpg')
global.imgdevil = fs.readFileSync('./settings/img/devil.jpg')
global.imgslime = fs.readFileSync('./settings/img/slime.jpg')
global.imgdemon = fs.readFileSync('./settings/img/demon.jpg')
global.imggoblin = fs.readFileSync('./settings/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./settings/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./settings/img/behemoth.jpg')
global.regisimg = fs.readFileSync('./settings/img/daftar2.jpg')

// RANDOM
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//BATAS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
