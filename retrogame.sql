-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2022 a las 00:20:24
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `retrogame`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boletininfo`
--

CREATE TABLE `boletininfo` (
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `boletininfo`
--

INSERT INTO `boletininfo` (`Email`) VALUES
('manuel@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `Username` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Contraseña` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`Username`, `Email`, `Contraseña`) VALUES
('Manuel', 'manuel@gmail.com', 'manuel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `Id` int(11) NOT NULL,
  `codVideojuego` int(11) NOT NULL,
  `Comentario` varchar(100) NOT NULL,
  `Username` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `fechaComent` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`Id`, `codVideojuego`, `Comentario`, `Username`, `Email`, `fechaComent`) VALUES
(3, 1202, 'Mal servicio, no me llegó el juego', 'Manuel', 'manuel@gmail.com', '2021-10-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `Id` int(11) NOT NULL,
  `Username` varchar(40) NOT NULL,
  `codVideojuego` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `fechaCompra` date NOT NULL,
  `formaPago` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`Id`, `Username`, `codVideojuego`, `Cantidad`, `fechaCompra`, `formaPago`) VALUES
(2, 'Manuel', 1202, 2, '2022-07-18', 'PSE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuegos`
--

CREATE TABLE `videojuegos` (
  `codVideojuego` int(11) NOT NULL,
  `nombreVideojuego` varchar(30) NOT NULL,
  `imagen` varchar(600) NOT NULL,
  `Valor` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `videojuegos`
--

INSERT INTO `videojuegos` (`codVideojuego`, `nombreVideojuego`, `imagen`, `Valor`) VALUES
(1202, 'Call of Duty', 'https://i.ytimg.com/vi/Iy72-R0w9Q4/maxresdefault.jpg', 149.9);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boletininfo`
--
ALTER TABLE `boletininfo`
  ADD PRIMARY KEY (`Email`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`Username`),
  ADD KEY `Email` (`Email`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Username` (`Username`),
  ADD KEY `id_videojuego` (`codVideojuego`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD KEY `codVideojuego` (`codVideojuego`);

--
-- Indices de la tabla `videojuegos`
--
ALTER TABLE `videojuegos`
  ADD PRIMARY KEY (`codVideojuego`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `cliente` (`Username`) ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`codVideojuego`) REFERENCES `videojuegos` (`codVideojuego`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `cliente` (`Username`) ON UPDATE CASCADE,
  ADD CONSTRAINT `compra_ibfk_2` FOREIGN KEY (`codVideojuego`) REFERENCES `videojuegos` (`codVideojuego`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
