const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'779f2a3e-7aed-462f-801d-500bab3d8765'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
