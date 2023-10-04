https://github.com/pedrormc/Sr.Torto.git

# para rodar o frontend:

cd front;
npm install;
npm run dev;

# para rodar a api:
cd api;
yarn add bcrypt body-parser cors express mysql nodemon;
yarn start;



# criação do banco de dados:

CREATE SCHEMA `dbtorta` ;


CREATE TABLE `dbtorta`.`tasks` (
  `id_task` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(400) NOT NULL,
  `id_player` INT NOT NULL,
  `complete` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_task`));



  CREATE TABLE `dbtorta`.`users` (
  `id_player` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `senha` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id_player`));


  # resolver erro banco

  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';