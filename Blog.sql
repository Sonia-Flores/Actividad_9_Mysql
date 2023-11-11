-- -----------------------------------------------------
-- Drop Schema Blog
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Blog` ;

-- -----------------------------------------------------
-- Schema Blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Blog` DEFAULT CHARACTER SET utf8 ;
USE `Blog` ;

-- -----------------------------------------------------
-- Table `Blog`.`Autores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`Autores` ;

CREATE TABLE IF NOT EXISTS `Blog`.`Autores` (
 `Id` INT NOT NULL AUTO_INCREMENT,
 `Nombre` VARCHAR(255) NOT NULL,
 `Email` VARCHAR(255) NOT NULL,
 `Imagen` VARCHAR(255) NOT NULL,
 PRIMARY KEY (`Id`));

-- -----------------------------------------------------
-- Table `Blog`.`Posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Blog`.`Posts` ;

CREATE TABLE IF NOT EXISTS `Blog`.`Posts` (
 `Id` INT NOT NULL AUTO_INCREMENT,
 `Titulo` VARCHAR(255) NOT NULL,
 `Descripcion` VARCHAR(255) NOT NULL,
 `FechaCreacion` DATE NOT NULL,
 `Categoria` VARCHAR(255) NOT NULL,
 `IdAutor` INT NOT NULL,
 PRIMARY KEY (`Id`),
 CONSTRAINT `IdAutor`
 FOREIGN KEY (`IdAutor`)
 REFERENCES `Blog`.`Autores` (`Id`)
 ON DELETE RESTRICT
 ON UPDATE RESTRICT);


 