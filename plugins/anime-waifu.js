import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://web-production-7c28.up.railway.app/api/wallpaper/waifu?apikey=APIKEY')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Load..', author, json.url, [['waifu', `${usedPrefix}waifu`]], m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.limit = true
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler