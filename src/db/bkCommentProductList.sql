-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 03 月 23 日 03:51
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `triplec`
--

-- --------------------------------------------------------

--
-- 資料表結構 `bkCommentProductList`
--

CREATE TABLE IF NOT EXISTS `bkCommentProductList` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pID` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `venderID` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `venderName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 資料表新增資料前，先清除舊資料 `bkCommentProductList`
--

TRUNCATE TABLE `bkCommentProductList`;
--
-- 傾印資料表的資料 `bkCommentProductList`
--

INSERT INTO `bkCommentProductList` (`id`, `pID`, `pName`, `venderID`, `venderName`, `created_at`, `updated_at`) VALUES
(1, 'pt001', 'DTA-Watch智能手錶', 'v001', 'Garmin', '2020-03-21 07:53:57', '2020-03-21 07:53:57'),
(2, 'pt002', 'Vivoactive 4 / 4s VENU GPS智慧腕錶', 'v001', 'Garmin', '2020-03-21 07:54:13', '2020-03-21 07:54:13'),
(3, 'pt003', 'Forerunner 45 FR45 /45s', 'v001', 'Garmin', '2020-03-21 07:54:34', '2020-03-21 07:54:34'),
(4, 'pt004', 'Forerunner 245 M 音樂跑錶', 'v001', 'Garmin', '2020-03-21 07:54:47', '2020-03-21 07:54:47');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
