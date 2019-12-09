
DROP TABLE IF EXISTS `vueCrudData`;

CREATE TABLE `vueCrudData` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `cpf`  char(14) NOT NULL,
  `data` TIMESTAMP NOT NULL,
  `email` varchar(50) NOT NULL,
  `fone` varchar(10) NOT NULL,
  `age` int(11) NOT NULL,
  `profession` varchar(50) NOT NULL,
  `cep` INT(10) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

/*
DROP TABLE IF EXISTS `vueCrudData`;

CREATE TABLE `vueCrudData` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `profession` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);
*/