/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.alterTable('students', (table) => {
		// DEVOLVER la promesa
		table.string('email').nullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.alterTable('students', (table) => {
		// DEVOLVER la promesa
		table.dropColumn('email');
	});
};
