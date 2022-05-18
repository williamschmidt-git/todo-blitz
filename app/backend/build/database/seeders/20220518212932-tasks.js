'use strict';
module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.bulkInsert('toDo', [{
                task: 'Ligar para fulano',
                task_status: 'pendente'
            }], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('toDo', null, {});
    },
};
//# sourceMappingURL=20220518212932-tasks.js.map