module.exports = function(sequelize, DataTypes) {
    var Responses = sequelize.define("Response", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    // Responses.associate = function(models) {
    //   // We're saying that a Response should belong to an Student or Tutor
    //   // A Response can't be created without an Student or Tutor due to the foreign key constraint
    //   Responses.belongsTo(models.Student, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    //   Responses.belongsTo(models.Tutor, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    //   Responses.belongsTo(models.Question, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Responses;
  };
  