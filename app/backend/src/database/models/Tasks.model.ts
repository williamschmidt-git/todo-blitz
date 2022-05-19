import { DataTypes, Model } from 'sequelize';

import db from '../models/index.model';

export default class Tasks extends Model {
  public id: number;
  
  public task: string;

  public taskStatus: string;
};

Tasks.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    task: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    taskStatus: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, 
  {
    sequelize: db,
    underscored: true,
    modelName: 'Tasks',
    timestamps: true,
  }
);


