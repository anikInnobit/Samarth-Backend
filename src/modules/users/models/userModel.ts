import database from '../../../config/db'
import { UUID, UUIDV4, STRING, DATE } from 'sequelize';

// Database connection instance
const databaseInstance = database;

// Sequelize Model
const User = databaseInstance.define('user', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,

    allowNull: false,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  token: {
    type: STRING,
    allowNull: false,
  },
  title: {
    type: STRING,
    allowNull: true,
  },
  firstName: {
    type: STRING,
    allowNull: false,
  },
  middleName: {
    type: STRING,
    allowNull: true,
  },
  lastName: {
    type: STRING,
    allowNull: false,
  },
  contactNumber: {
    type: STRING,
    allowNull: true,
  },
  mobileNumber: {
    type: STRING,
    allowNull: true,
  },
  email: {
    type: STRING,
    allowNull: true,
  },
  // createdAt, lastUpdatedAt and deletedAt managed by Sequelize
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: true,
  },
  deletedAt: {
    type: DATE,
    allowNull: true,
  },
}, {
  // Auto-create timestamps
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  // Enable soft deletes
  paranoid: true,
});

export default User;