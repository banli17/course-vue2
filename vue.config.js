const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({

	// Type: boolean | Array<string | RegExp>
	transpileDependencies: true,  // babel 是否转换 node_modules 里的依赖, 默认是 false, 
})