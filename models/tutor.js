module.exports = function(sequelize, DataTypes) {
    var Tutor = sequelize.define("Tutor", {
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
        type: DataTypes.STRING,
        alloNull: true,
        validate: {
            isEmail: true
            }
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
  
    // Tutor.associate = function(models) {
    //   // Associating Tutor with Responses
    //   // When an Tutor is deleted, also delete any associated Responses
    //   Tutor.hasMany(models.Responses, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Tutor;
  };