-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 13, 2023 at 11:13 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_form`
--

CREATE TABLE `contact_form` (
  `id` int(11) NOT NULL,
  `createdDate` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `total_price` varchar(255) NOT NULL,
  `img_url` varchar(800) NOT NULL,
  `vendorId` int(11) DEFAULT NULL,
  `venueId` int(11) DEFAULT NULL,
  `eventTypeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `total_price`, `img_url`, `vendorId`, `venueId`, `eventTypeId`) VALUES
(2, '2000000', 'https://www.dropbox.com/s/be8oappqecrnzk7/wedding1.jpeg?raw=1', 1, 1, 1),
(3, '1500000', 'https://www.dropbox.com/s/jd79qntbcx3q5pe/wedding2.jpeg?raw=1', 2, 2, 1),
(4, '1700000', 'https://www.dropbox.com/s/6r4h8xpd1osoili/wedding5.jpeg?raw=1', 3, 3, 1),
(5, '1600000', 'https://www.dropbox.com/s/7l1r28kvfkvgun4/wedding4.jpeg?raw=1', 4, 4, 1),
(6, '500000', 'https://www.dropbox.com/s/vd97viq1bx09tz7/birthday1.jpeg?raw=1', 5, 5, 2),
(7, '400000', 'https://www.dropbox.com/s/waoqnv877onfmuz/birthday2.jpg?raw=1', 6, 6, 2),
(8, '300000', 'https://www.dropbox.com/s/a6ry2gutgop79a3/birthday5.jpg?raw=1', 7, 7, 2),
(9, '600000', 'https://www.dropbox.com/s/indvyzy53q3vax2/birthday4.jpeg?raw=1', 8, 8, 2),
(10, '1200000', 'https://www.dropbox.com/s/f0zsndc1zalo8f7/corporate-events1.jpg?raw=1', 9, 13, 4),
(11, '1500000', 'https://www.dropbox.com/s/lfj1xm5uiux6zm9/corporate-events2.jpg?raw=1', 10, 14, 4),
(12, '1300000', 'https://www.dropbox.com/s/rjya5b99lflc77f/corporate-events3.jpg?raw=1', 11, 15, 4),
(13, '1100000', 'https://www.dropbox.com/s/y7eq2og7mh6ocju/corporate-events4.jpg?raw=1', 12, 16, 4),
(14, '1800000', 'https://www.dropbox.com/s/jnu4zj2l1jnawmz/concert1.jpg?raw=1', 13, 9, 3),
(15, '1500000', 'https://www.dropbox.com/s/z1teryf1uygkvpi/concert2.webp?raw=1', 14, 10, 3),
(16, '1400000', 'https://www.dropbox.com/s/cj2rss5mvas34u0/concert3.jpg?raw=1', 15, 11, 3),
(17, '1600000', 'https://www.dropbox.com/s/ec2ml7in144bmsa/concert4.jpg?raw=1', 16, 12, 3);

-- --------------------------------------------------------

--
-- Table structure for table `event_type`
--

CREATE TABLE `event_type` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_type`
--

INSERT INTO `event_type` (`id`, `name`) VALUES
(1, 'Weddings'),
(2, 'Birthdays'),
(3, 'Concerts'),
(4, 'Corporate Events');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1676196012870, 'initialmigration1676196012870'),
(2, 1675766022400, 'channelSeeds1675766022400'),
(3, 1676047048400, 'vendorSeeds1676047048400'),
(4, 1676047059005, 'venueSeeds1676047059005'),
(5, 1676196200857, 'serviceSeeds1676196200857'),
(6, 1676197988766, 'secondmigration1676197988766');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `name`) VALUES
(1, 'sound system'),
(2, 'lighting system'),
(3, 'catering'),
(4, 'decoration'),
(5, 'stage'),
(6, 'waiters'),
(7, 'crocery'),
(8, 'security'),
(9, 'birthday cake'),
(10, 'party supplies'),
(11, 'magic show'),
(12, 'fireworks'),
(13, 'photography'),
(14, 'multimedia projector'),
(15, 'accommodation');

-- --------------------------------------------------------

--
-- Table structure for table `service_services_vendor`
--

CREATE TABLE `service_services_vendor` (
  `serviceId` int(11) NOT NULL,
  `vendorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_services_vendor`
--

INSERT INTO `service_services_vendor` (`serviceId`, `vendorId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(2, 1),
(2, 2),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 13),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(5, 15),
(5, 16),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 9),
(6, 10),
(6, 11),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 9),
(7, 10),
(7, 11),
(7, 12),
(8, 9),
(8, 10),
(8, 11),
(8, 13),
(8, 15),
(8, 16),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(11, 8),
(12, 2),
(12, 4),
(12, 14),
(12, 16),
(13, 1),
(13, 3),
(13, 6),
(13, 8),
(13, 10),
(13, 12),
(13, 14),
(13, 15),
(13, 16),
(14, 9),
(14, 10),
(14, 11),
(14, 12),
(15, 10),
(15, 11),
(15, 13),
(15, 14),
(15, 15),
(15, 16);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'nehal', 'khan', 'nehalnaasirs619@gmail.com', '$2b$10$nJwU5QCdCMP8KHHYzGXofutMjeJvBFEYM1hMHAv3kMVGfwPkHFQxK');

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`id`, `name`, `email`, `phone`) VALUES
(1, 'StoryTellers Event Planning', 'storytellers123@gmail.com', '03452173843'),
(2, 'Bridal Bliss', 'bridal344@gmail.com', '03354773940'),
(3, 'A Flair to Remember', 'flairTo@gmail.com', '03216374890'),
(4, 'Wedding River', 'weddingriv@gmail.com', '03253784948'),
(5, 'Party Lighting', 'party999@gmail.com', '03362883645'),
(6, 'Birthday Express', 'birthdayexp@gmail.com', '03342887364'),
(7, 'InHouse Birthday', 'inhouse232@gmail.com', '03342931231'),
(8, 'Fun and Festive', 'festival343@gmail.com', '03237489548'),
(9, 'Slate & Crystal Events', 'slate.cryste_234@gmail.com', '03342384756'),
(10, 'Be Our Guest Events', 'beGuest232@gmail.com', '03425638763'),
(11, 'Picture Perfect Event Planning', 'picture230@gmail.com', '03354273549'),
(12, 'Mosaic Events', 'mosaicOrg998@gmail.com', '03452187647'),
(13, 'Poppy Events', 'poopyseed66@gmail.com', '03342564637'),
(14, 'SeaSide Events', 'seaatside33@gmail.com', '03423285009'),
(15, 'Woderful Events', 'wonderful222@gmail.com', '03353773890'),
(16, 'Dancing Leaf Events', 'dancing222@gmail.com', '03342638900');

-- --------------------------------------------------------

--
-- Table structure for table `venue`
--

CREATE TABLE `venue` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `venue`
--

INSERT INTO `venue` (`id`, `name`, `location`, `capacity`) VALUES
(1, 'Courtyard Venues', 'Block-3, 112, Main Alamgir Rd, Karachi', '400'),
(2, 'Swiss Banquet Hall', ' C 49, Block 13 Gulberg Town, Karachi', '350'),
(3, 'Casamento Banquet', 'D-9, Block L North Nazimabad Town, Karachi', '300'),
(4, 'The Royal Court', 'W4H7+H78, Gulshan-e-Iqbal, Karachi', '450'),
(5, 'Cote Rotie', 'Plot/St, 1, Block 8 Clifton, Karachi', '100'),
(6, 'Blue Star Banquet Hall', 'Shah Jahan Ave،Block 12,Federal B Area,Block 12 Gulberg Town,Karachi', '300'),
(7, 'Haram Banquet', 'W3V9+MPF, Shahjahan Ave, Block 18 Gulberg Town, Karachi', '350'),
(8, 'Ocean Banquet', 'W3V9+HGX, Federal B Area Block 12 Gulberg Town, Karachi, Karachi City', '400'),
(9, 'Entertainment Concert Area', 'Q3WJ+V28, D.H.A. Phase 8 Zone A Phase 8 Defence Housing Authority, Karachi', '500'),
(10, 'Bahria Auditorium', 'Bahria Auditorium Parking, Karsaz Service Rd E, Karsaz Faisal Cantonment, Karachi', '400'),
(11, 'Arts Council AC Auditorium II', 'Strachan Rd, Saddar Karachi, Karachi City, Sindh', '270'),
(12, 'Port Grand karachi', 'Port Grand Food St, opposite PNSC Building, West Wharf, Karachi', '1000'),
(13, 'Karachi Expo Center', 'Main Main University Rd, Block 15 Gulshan-e-Iqbal, Karachi', '800'),
(14, 'Marriott Hotel', '9 Abdullah Haroon Rd, Civil Lines Karachi', '600'),
(15, 'Pearl Continental Hotel', 'Dr Ziauddin Ahmed Rd, Karachi', '300'),
(16, 'Movenpick Hotel Karachi', 'Movenpick Hotel Karachi Club Road, Club Rd, Karachi', '400');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_form`
--
ALTER TABLE `contact_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_abedac3524e60db083888140415` (`vendorId`),
  ADD KEY `FK_0a7a72120769940b25f994863c7` (`venueId`),
  ADD KEY `FK_3b674f340d59a5fc144f2229763` (`eventTypeId`);

--
-- Indexes for table `event_type`
--
ALTER TABLE `event_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_services_vendor`
--
ALTER TABLE `service_services_vendor`
  ADD PRIMARY KEY (`serviceId`,`vendorId`),
  ADD KEY `IDX_975bdebc3a12e0c14472ba6fcd` (`serviceId`),
  ADD KEY `IDX_6712dcd687989ab511a82a01a3` (`vendorId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venue`
--
ALTER TABLE `venue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_form`
--
ALTER TABLE `contact_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `event_type`
--
ALTER TABLE `event_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `venue`
--
ALTER TABLE `venue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `FK_0a7a72120769940b25f994863c7` FOREIGN KEY (`venueId`) REFERENCES `venue` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_3b674f340d59a5fc144f2229763` FOREIGN KEY (`eventTypeId`) REFERENCES `event_type` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_abedac3524e60db083888140415` FOREIGN KEY (`vendorId`) REFERENCES `vendor` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `service_services_vendor`
--
ALTER TABLE `service_services_vendor`
  ADD CONSTRAINT `FK_6712dcd687989ab511a82a01a39` FOREIGN KEY (`vendorId`) REFERENCES `vendor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_975bdebc3a12e0c14472ba6fcdc` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
