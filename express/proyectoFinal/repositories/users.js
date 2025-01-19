const { User } = require('../models');

module.exports = {
	getAll() {
		return User.findAll();
	},
	findById(id) {
		return User.findByPk(id);
	},
	insert(user) {
		return User.create(user);
	},
	update(id, updatedData) {
		return User.update(updatedData, { where: { id } });
	},
	delete(id) {
		return User.destroy({ where: { id } });
	},
	canDelete: async (id) => {
		const user = await User.findByPk(id, {
			include: Teacher,
		});
		return !user.teacher; // Solo puede ser borrado si no tiene un profesor asociado
	},
};
