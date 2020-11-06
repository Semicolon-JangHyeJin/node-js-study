const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // 시퀄라이즈에서는 primary key를 자동으로 생성해준다.
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false, //timestamps가 true이면 createdAt(데이터생성시간), updatedAt(데이터수정시간)을 생성한다.
      underscored: false, //true이면, 테이블명과 컬럼명을 snake_case로 바꿈 (false일때는 camelCase)
      modelName: 'User', //노드에서 사용할 모델 이름
      tableName: 'users', //데이터베이스에서의 테이블 이름
      paranoid: false, //true이면 deletedAt에 삭제 시간을 기록한다. 삭제하지 않은 데이터의 deletedAt은 null이된다. (soft delete 처리)
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db){
    db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
  }
};
