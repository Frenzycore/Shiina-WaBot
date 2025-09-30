/**
     * Copyright © 2025 [ balxzzy ]
     *
     * All rights reserved. This source code is the property of [ Shiina Team ].
     * Unauthorized copying, distribution, modification, or use of this file,
     * via any medium, is strictly prohibited without prior written permission.
     *
     * This software is protected under international copyright laws.
     *
     * Contact: [ pa424013@gmail.com ]
     * GitHub: https://github.com/balxz
     * Official: https://balxzzy.web.id
     * Support: https://t.me/sh_team1
 */
require("#src/configs")

exports.is = async (m) => {
  return {
    owner: [...owner.no.map((a) => a + "@s.whatsapp.net")].includes(m.sender),
    group: m.chat.endsWith("@g.us"),
    private: m.chat.endsWith("@s.whatsapp.net"),
    admin: m.chat.endsWith("@g.us") &&
      (await clients.groupMetadata(m.chat).catch(() => null))?.participants?.some(v => v.admin && v.id === m.sender),
    botadmin: m.chat.endsWith("@g.us") &&
      (await clients.groupMetadata(m.chat).catch(() => null))?.participants?.some(v => v.admin && v.id === clients.decodeJid(clients.user.id))
  }
}

let f = require.resolve(__filename)
fs.watchFile(f, () => {
    fs.unwatchFile(f)
    console.log(`~> UPDATE [ 🪷 ] ${f}`)
    delete require.cache[f]
    require(f)
})