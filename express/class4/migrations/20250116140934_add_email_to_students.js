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
exports.down = async function (knex) {
	const exists = await knex.schema.hasColumn('students', 'email');
	if (exists) {
		await knex.schema.alterTable('students', (table) => {
			table.dropColumn('email');
		});
	}
};
