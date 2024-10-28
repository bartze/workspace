module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'/node_modules/(?!(node-fetch)/)', // Excepciones para módulos específicos
	],
	// setupFiles: ['jest-fetch-mock'],
};
