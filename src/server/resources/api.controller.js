'use strict'

const models = require('../models/index');

const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400
};

const formatResponseData = (data) => ({ data });

// Controllers (CRUD)
//   C: Create
//   R: Read
//   U: UPDATE
//   D: Delete
module.exports = {
  // Read
  async getTodos(req, res) {
    console.log('DBからデータを取得します');

    try{
      //idの昇順でデータを取得する
      const todos = await models.Todos.findAll({
        order: [
          ['id', 'ASC']
        ],
        raw: true
      });
      send(res, STATUS_CODES.OK, formatResponseData({todos}));
    }
    catch(error){
      send(res, STATUS_CODES.BAD_REQUEST, formatResponseData({
        error: error.message
      }));
    }
  },
  // Create
  async postTodo(req, res){
    console.log('DBを作成します');

    let transaction;
    try {
      //トランザクション開始
      transaction = await models.sequelize.transaction();

      //データベース更新
      const todo = await models.Todos.create({
        title: req.body.title,
        body: req.body.body
      }, { transaction });

      //トランザクション確定
      await transaction.commit();

      send(res, STATUS_CODES.OK, formatResponseData({todo}), false);
    } catch (error) {
      //トランザクション取り消し
      await transaction.rollback();

      send(res, STATUS_CODES.BAD_REQUEST, formatResponseData({
        error: error.message
      }));
    }
  },
  // Update
  putTodo(req, res){
    console.log('DBを更新します');
    send(res, STATUS_CODES.OK, '`putTodo` should update a todo in DB', false);
  },
  // Delete
  deleteTodo(req, res){
    console.log('DBを削除します');
    send(res, STATUS_CODES.OK, '`deleteTodo` should delete a todo from DB', false);
  }
}

/***Helpers***/
const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};