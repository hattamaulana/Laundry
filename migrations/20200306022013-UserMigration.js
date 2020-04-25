"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            idUser: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            nama: {
                type: Sequelize.STRING
            },
            noHp: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            alamat: {
                type: Sequelize.STRING
            },
            peran: {
                type: Sequelize.SMALLINT
            },
            createdAt: {
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false
            },
            updatedAt: {
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false
            }
        }, {
            timestamps: process.env.TIMESTAMPS,
            freezeTableName: true
        });
    },

    down: (queryInterface, _) => {
        return queryInterface.dropTable("users");
    }
};