/*
Webpack testing config file not necessary, but runs much faster than without.
*/
const merge = require( 'webpack-merge' );
const common = require( './../webpack.common.js' );
const nodeExternals = require( 'webpack-node-externals' );

module.exports = {
	target: 'node', // webpack should compile node compatible code
	externals: [ nodeExternals() ], // in order to ignore all modules in node_modules folder
};
