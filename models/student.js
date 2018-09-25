module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      // Giving the Author model a name of type STRING
    name_first: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i']
            }
        },
    name_last: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$",'i']
            }
        },
    email: {
        type: DataType.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    }
    });
  
    Student.associate = function(models) {
      // Associating Tutor with Responses
      // When an Tutor is deleted, also delete any associated Responses
      Student.hasMany(models.Responses, {
        onDelete: "cascade"
      });
    };
  
    return Student;
  };