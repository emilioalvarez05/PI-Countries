const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.STRING(),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      difficulty: {
        type: DataTypes.INTEGER
      },
      duration: {
        type: DataTypes.INTEGER
      },
      season: {
        type: DataTypes.ENUM("Summer", "Auttum", "Winter", "Spring"),
      }
    },
    {timestamps: false});
  };
  
  
  