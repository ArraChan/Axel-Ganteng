let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `╭──────────────┈ 𒈒
┊ *「 𝐒𝐞𝐧𝐝𝐲 」*
╰┬─┈ ➩ *「 _𝙎𝙘𝙧𝙞𝙥𝙩_ 」*
╭┤ *⏤͟͟͞͞⃟𖥂*  Jgn Diperjual Belikan Script ini
┊│ *⏤͟͟͞͞⃟𖥂*  Jgn Salah Gunakan Script ini
┊│ *⏤͟͟͞͞⃟𖥂*  Script ini Dibuat Oleh Madan
┊│ *⏤͟͟͞͞⃟𖥂*  Pengen Jadi Bot? 
┊│ *⏤͟͟͞͞⃟𖥂*  Silahkan Chat Nomor Berikut
│╰────────────┈ ⳹
┊  *「 𝐎𝐰𝐧𝐞𝐫 」*
┊ 𝐓𝐞𝐤𝐚𝐧 ➩ wa.me/6281250998818
╰═━────────────┈ ⳹`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://wa.me/6281250998818'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
