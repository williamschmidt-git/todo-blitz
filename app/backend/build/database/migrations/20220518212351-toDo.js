'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tasks', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            task: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            task_status: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
        });
    },
    async down(queryInterface, _Sequelize) {
        await queryInterface.dropTable('tasks');
    }
};
//# sourceMappingURL=20220518212351-toDo.js.map