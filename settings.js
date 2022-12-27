const fs = require('fs')

global.creator = 'RaffX Teams' 
global.apikey = ["RaffXTeams", "Raffx", "raffxteamsid"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
