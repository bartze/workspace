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
	async deleteUser(userId) {
		try {
			const user = await User.findByPk(userId);
			if (!user) {
				return { success: false, message: 'User not found' };
			}

			await user.destroy();
			return { success: true, message: 'User deleted successfully' };
		} catch (error) {
			if (error.name === 'SequelizeForeignKeyConstraintError') {
				return {
					success: false,
					message: 'Cannot delete user with associated teacher',
				};
			}
			console.error('Error deleting user:', error);
			return { success: false, message: 'Error deleting user' };
		}
	},
};
