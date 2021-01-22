const {Op} = require('sequelize');
const bitty =  require("../models/Model");

// DB Ops 

exports.createUrl = async (mainUrl,key) =>{

    const url = await bitty.create({ original_url: mainUrl, token: key });
    console.log("url id: " + url.id);
  }


  exports.checkDuplicate = async (key) => {
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
    const result = await bitty.findAll({
        where: {
            token: {
            [Op.eq]: key
          }
        }
      });   
      return result;
    
  }
