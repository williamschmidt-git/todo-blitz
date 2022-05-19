'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('toDo', {
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
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
        });
    },
    async down(queryInterface, _Sequelize) {
        await queryInterface.dropTable('toDo');
    }
};
//# sourceMappingURL=20220518212351-toDo.js.map