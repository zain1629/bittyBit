const { Sequelize,Op } = require('sequelize');

const config = require ('../config/config.json');


const sequelize = new Sequelize(config.dev.database.db, config.dev.database.user, config.dev.database.pass, {
    host: config.dev.database.host,
    dialect: 'mysql' 
  });



connect =  async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      //sequelize.close()
}

const bitty = sequelize.define('bitty_url', {
    original_url: Sequelize.STRING(512),
    token: Sequelize.STRING,
  }, {
    tableName: 'bitty_url',
    timestamps: true,
    createdAt: true,
    updatedAt: false
  });

  bitty.sync();

  exports.createUrl = async (mainUrl,key) =>{
    await connect();
    const url = await bitty.create({ original_url: mainUrl, token: key });
    console.log("url id: " + url.id);

    
  }


  exports.checkDuplicate = async (key) => {
    await connect();
    const result = await bitty.findAll({
        where: {
            token: {
            [Op.eq]: key
          }
        }
      });   
      return result;
    
  }


  exports.getUrl = async (key) => {
    await connect();
    const result = await bitty.findAll({
        where: {
            token: {
            [Op.eq]: key
          }
        }
      });   
      return result;
    
  }
