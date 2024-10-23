module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'/node_modules/(?!(node-fetch)/)', // Agrega excepciones para módulos específicos
	],
};
