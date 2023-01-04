const Generator = require("yeoman-generator");

module.exports = class extends Generator {
	welcome() {
		this.log("Welcome to the Tomy nest.js Generator!");
	}

	writing() {
		this.fs.copy(this.templatePath(".husky"), this.destinationPath(".husky"));
		this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
		this.fs.copy(this.templatePath("test"), this.destinationPath("test"));
		this.fs.copy(this.templatePath(".env.template"), this.destinationPath(".env.template"));
		this.fs.copy(this.templatePath(".eslintrc.js"), this.destinationPath(".eslintrc.js"));
		this.fs.copy(this.templatePath("_gitignore"), this.destinationPath(".gitignore"));
		this.fs.copy(this.templatePath(".lintstagedrc"), this.destinationPath(".lintstagedrc"));
		this.fs.copy(this.templatePath(".prettierrc"), this.destinationPath(".prettierrc"));
		this.fs.copy(this.templatePath("README.md"), this.destinationPath("README.md"));
		this.fs.copy(this.templatePath("commitlint.config.js"), this.destinationPath("commitlint.config.js"));
		this.fs.copy(this.templatePath("docker-compose-test.yaml"), this.destinationPath("docker-compose-test.yaml"));
		this.fs.copy(this.templatePath("docker-compose.yaml"), this.destinationPath("docker-compose.yaml"));
		this.fs.copy(this.templatePath("nest-cli.json"), this.destinationPath("nest-cli.json"));
		this.fs.copy(this.templatePath("package-lock.json"), this.destinationPath("package-lock.json"));
		this.fs.copy(this.templatePath("package.json"), this.destinationPath("package.json"));
		this.fs.copy(this.templatePath("tsconfig.build.json"), this.destinationPath("tsconfig.build.json"));
		this.fs.copy(this.templatePath("tsconfig.json"), this.destinationPath("tsconfig.json"));
		this.fs.copy(this.templatePath("yarn.lock"), this.destinationPath("yarn.lock"));
	}

	install() {
		this.spawnCommand('yarn')
	}
	
	end() {
		this.log("🎉🎉🎉🎉");
		this.log("If you're not sure how to do this, read this for more info:");
		this.log("https://coder-coder.com/install-gulp-globally-on-windows/");
		this.log("🎉🎉🎉🎉");
	}
};
