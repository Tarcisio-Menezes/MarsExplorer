module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    imagePath: DataTypes.STRING,
    rover: DataTypes.STRING,
    camera: DataTypes.STRING,
    landing: DataTypes.STRING,
    launch: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  { timestamps: false, tableName: 'Users', underscored: true });

  Favorite.associate = (models) => {
    Favorite.hasMany(models.User,
      { foreignKey: 'userId', as: 'user', through: Favorite });
  };

  return Favorite;
};