(async () => {
  const mysql = require('mysql2/promise')

  const cfg = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'bu_db'
  }

  const connection = await mysql.createConnection(cfg)

  let ret = await connection.execute(`CREATE TABLE user3 (
      userName varchar(100) NOT NULL COMMENT '用户名',
      id INT auto_increment NOT NULL COMMENT '用户id',
      password varchar(100) NULL,
      CONSTRAINT user_PK PRIMARY KEY (id)
    )
    ENGINE=InnoDB
    DEFAULT CHARSET=utf8
    COLLATE=utf8_general_ci
    COMMENT='用户表';`)

  console.log('create', ret)

  ret = await connection.execute(`INSERT INTO user3 (userName,password)
    VALUES ('hao2','1234');`)
  console.log('insert', ret)

  const [rows, fields] = await connection.execute(`SELECT * FROM user3`)
  console.log('select', JSON.stringify(rows))
})()