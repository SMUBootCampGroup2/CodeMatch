module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
      question_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_number: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    });
  
    Responses.associate = function(models) {
        Questions.hasMany(models.Responses, {

        });
    };
  
    return Responses;
  };
  