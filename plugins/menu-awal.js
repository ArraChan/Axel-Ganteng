import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, ` ╭──────────────┈ 𒈒
 ┊ *「 𝐀𝐱𝐞𝐥 」*
 ╰┬─┈ ➩ *「 _𝙈𝙚𝙣𝙪_ 」*
 ╭┤ *⏤͟͟͞͞⃟𖥂*  𝐁𝐎𝐓 : 𝐁𝐮𝐢𝐥𝐝 𝐎𝐩𝐞𝐫𝐚𝐭𝐞 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫
 ┊│ *⏤͟͟͞͞⃟𖥂*  *Bot* Adalah Program Komputer Yg Dijalankan Di
 ┊│ *⏤͟͟͞͞⃟𖥂*  Whatsapp Yang Khusus Dibuat Untuk Melakukan
 ┊│ *⏤͟͟͞͞⃟𖥂*  Pekerjaan² Otomatis, Bot Whatsapp Dirancang 
 ┊│ *⏤͟͟͞͞⃟𖥂*  Sedemikian Rupa Sehingga Dapat Digunakan
 ┊│ *⏤͟͟͞͞⃟𖥂*  Dengan Nyaman, Dan Kemungkinan Memiliki
 ┊│ *⏤͟͟͞͞⃟𖥂*  Sedikit Bug, Adanya Fitur Dari Bot Whatsapp ini
 ┊│ *⏤͟͟͞͞⃟𖥂*  Tentu Akan Membantu Anda Untuk
 ┊│ *⏤͟͟͞͞⃟𖥂*  Bersenang - Senang, DLL
 │╰────────────┈ ⳹
 ┊  *「 𝐎𝐰𝐧𝐞𝐫 」*
 ┊ 𝐈𝐭'𝐬 𝐌𝐞 : wa.me/6281250998818
 ╰═━────────────┈ ⳹\n`,wm + '\n\n' + botdate, giflogo, [['𝘼𝙇𝙇 𝙈𝙀𝙉𝙐','.? all'],['𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: '© Created By ⏤͟͟͞͞⃟𖥂 Arra Chan >_',
                        title: bottime,
                        body: 'Total Fitur : 500+',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler