module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define("Anime", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    verticalImg: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    horizontalImg: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Anime;
}; 