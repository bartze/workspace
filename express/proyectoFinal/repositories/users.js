const { User, Teacher } = require('../models');

module.exports = {
	getAll() {
		return User.findAll();
	},
	findById(id) {
		return User.findByPk(id);
	},
	findByEmail(email) {
		return User.findOne({ where: { email } });
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
			include: {
				model: Teacher,
				as: 'teacher',
			},
		});
		return !user.Teacher; // Solo puede ser borrado si no tiene un profesor asociado
	},
};
