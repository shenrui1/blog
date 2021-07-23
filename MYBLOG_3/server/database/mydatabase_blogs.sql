-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: mydatabase
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `blogId` int NOT NULL AUTO_INCREMENT,
  `blogName` varchar(45) NOT NULL,
  `blogAuthor` varchar(45) DEFAULT NULL,
  `blogDate` timestamp(6) NULL DEFAULT NULL,
  `blogClass` varchar(70) DEFAULT NULL,
  `blogContent` longtext,
  PRIMARY KEY (`blogId`),
  UNIQUE KEY `blogName_UNIQUE` (`blogName`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (48,'one','rui','2021-07-15 06:29:59.253000','Express,React','//将下面的文字复制粘贴到你的有道云笔记Markdown编辑器/简书Markdown编辑器即可在预览中重现上文。\r\n> 作者：在路上\\\r\n贡献者：诺布\r\n\r\n# 0x00 写在前面\r\n\r\n#### 到底什么是个Markdown?\r\n- **Markdown** 是一种文本编辑时候使用的**语法**，通过在文字中加入助记符，将排版/编号/列表/文字高亮/加粗等问题交给机器处理，对文字进行自动排版，从而大大提高编辑记录效率。\r\n\r\n- 有道云Markdown编辑器 or 简书Markdown编辑器都是依照这种Markdown**语法的实现**，所以难免上渲染出来的效果有些小偏差，但是排版方式是通用的。\r\n\r\n#### 为什么要用Markdown?\r\n\r\n- 文章的排版很麻烦，如果有一种对于文章排版的解决方案就好了。\r\n\r\n- 学习实践Markdown语法后你可以自定义你的文章排版。\r\n\r\n- 这是一套定义文章排版格式的语法。\r\n\r\n- 这是一个边际成本递减的升维实践过程。\r\n\r\n#### Markdown的应用场景?\r\n\r\n可以说，所有的文本场景下都可以使用Markdown语法，只要你有一个支持Markdown语法的编辑器就可以，笔者使用的是有道云笔记的Markdown编辑器，因为其支持语法全面(包括文本高亮标记)。当前探索出的支持Markdown的环境有:有道云笔记、简书、微信公众号推送(粘贴渲染排版后的文本即可)。\r\n\r\n#### 本文逻辑安排目录：\r\n\r\n1. **Markdown可以实现的排版效果**\r\n\r\n2. **Markdown文章示例**\r\n\r\n3. **本文的Markdown语法的原文**\r\n\r\n# 0x01 标题相关示例\r\n---\r\n# 主标题\r\n## 副标题\r\n### 一级标题\r\n#### 二级标题\r\n##### 三级标题\r\n###### 六级小标题\r\n### [标题网址](http://yq.upwith.me/)\r\n> 引用文字块\r\n---\r\n\r\n\r\n# 0x02 无序列表相关示例\r\n---\r\n- # 一级列表\r\n- ## 二级列表\r\n- ### 三级列表\r\n- #### 四级列表\r\n- ##### 五级列表\r\n- ###### 六级列表\r\n---\r\n\r\n# 0x03 有序列表相关示例\r\n---\r\n1. **加粗标题1**\r\n    1. 自编号标题1.1\r\n        1. ++下划线自编号标题1.1.1++\r\n            1. *斜体自编号标题1.1.1.1*\r\n\r\n---\r\n\r\n# 0x04 综合使用示例\r\n\r\n> 使用MD时候的要点，合理使用无序列表语法与自定义序号，尽量少使用有序列表语法，因为存在兼容性问题(有道云笔记兼容性比简书好很多)会导致标题无层次分类，示例开始。\r\n\r\n![image](http://upload-images.jianshu.io/upload_images/6189910-13d61acf16fccc84.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\r\n## 一、如何更好地理解第四章？\r\n### (一) 前置两个问题：升维与复杂系统\r\n#### 1. 升维\r\n##### (1) 维度是什么？\r\n时空坐标体系下的坐标轴数量，可以理解为**增加的视野角度**。\r\n        \r\n##### (2) 高维和低维的关系\r\n- 信息密度*高*，信息量*大*\r\n- 低维是高维的切片\r\n- 高维的低维展开会导致低维量级的无限扩张\r\n- 推演：高维比低维的视角更多\r\n        \r\n### 2. 复杂系统\r\n#### (1) 定义\r\n什么叫系统？一组组内相互作用、相互依赖的复杂整体\r\n#### (2) 要素\r\n#### (3) 系统的三要素\r\n- 系统关系\r\n- **元素间关系**\r\n- 系统功能\r\n#### (4) 两大类系统\r\n##### ① 他组织系统\r\n- 系统元素\r\n- 系统结构关系\r\n- 系统功能\r\n- 特点：功能稳定，输入一定，输出一定。\r\n##### ② 自组织系统\r\n\r\n---\r\n\r\n# 0x05 Markdown原文\r\n\r\nMarkdown与Markdown编辑器与排版文字的关系梳理与实践：\r\n\r\n- Markdown格式原文->有道云Markdown编辑器 or 简书Markdown编辑器->预览效果就是发布后的效果\r\n\r\n- 简书中Markdown编辑器开启方式\r\n    - ```个人设置-基础设置-常用编辑器-Markdown```\r\n\r\n- 有道云笔记Markdown编辑器开启方式\r\n    - ```新文档-新建Markdown```\r\n\r\n'),(49,'two','rui','2021-07-15 06:30:07.881000','MySQL','//将下面的文字复制粘贴到你的有道云笔记Markdown编辑器/简书Markdown编辑器即可在预览中重现上文。\r\n> 作者：在路上\\\r\n贡献者：诺布\r\n\r\n# 0x00 写在前面\r\n\r\n#### 到底什么是个Markdown?\r\n- **Markdown** 是一种文本编辑时候使用的**语法**，通过在文字中加入助记符，将排版/编号/列表/文字高亮/加粗等问题交给机器处理，对文字进行自动排版，从而大大提高编辑记录效率。\r\n\r\n- 有道云Markdown编辑器 or 简书Markdown编辑器都是依照这种Markdown**语法的实现**，所以难免上渲染出来的效果有些小偏差，但是排版方式是通用的。\r\n\r\n#### 为什么要用Markdown?\r\n\r\n- 文章的排版很麻烦，如果有一种对于文章排版的解决方案就好了。\r\n\r\n- 学习实践Markdown语法后你可以自定义你的文章排版。\r\n\r\n- 这是一套定义文章排版格式的语法。\r\n\r\n- 这是一个边际成本递减的升维实践过程。\r\n\r\n#### Markdown的应用场景?\r\n\r\n可以说，所有的文本场景下都可以使用Markdown语法，只要你有一个支持Markdown语法的编辑器就可以，笔者使用的是有道云笔记的Markdown编辑器，因为其支持语法全面(包括文本高亮标记)。当前探索出的支持Markdown的环境有:有道云笔记、简书、微信公众号推送(粘贴渲染排版后的文本即可)。\r\n\r\n#### 本文逻辑安排目录：\r\n\r\n1. **Markdown可以实现的排版效果**\r\n\r\n2. **Markdown文章示例**\r\n\r\n3. **本文的Markdown语法的原文**\r\n\r\n# 0x01 标题相关示例\r\n---\r\n# 主标题\r\n## 副标题\r\n### 一级标题\r\n#### 二级标题\r\n##### 三级标题\r\n###### 六级小标题\r\n### [标题网址](http://yq.upwith.me/)\r\n> 引用文字块\r\n---\r\n\r\n\r\n# 0x02 无序列表相关示例\r\n---\r\n- # 一级列表\r\n- ## 二级列表\r\n- ### 三级列表\r\n- #### 四级列表\r\n- ##### 五级列表\r\n- ###### 六级列表\r\n---\r\n\r\n# 0x03 有序列表相关示例\r\n---\r\n1. **加粗标题1**\r\n    1. 自编号标题1.1\r\n        1. ++下划线自编号标题1.1.1++\r\n            1. *斜体自编号标题1.1.1.1*\r\n\r\n---\r\n\r\n# 0x04 综合使用示例\r\n\r\n> 使用MD时候的要点，合理使用无序列表语法与自定义序号，尽量少使用有序列表语法，因为存在兼容性问题(有道云笔记兼容性比简书好很多)会导致标题无层次分类，示例开始。\r\n\r\n![image](http://upload-images.jianshu.io/upload_images/6189910-13d61acf16fccc84.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\r\n## 一、如何更好地理解第四章？\r\n### (一) 前置两个问题：升维与复杂系统\r\n#### 1. 升维\r\n##### (1) 维度是什么？\r\n时空坐标体系下的坐标轴数量，可以理解为**增加的视野角度**。\r\n        \r\n##### (2) 高维和低维的关系\r\n- 信息密度*高*，信息量*大*\r\n- 低维是高维的切片\r\n- 高维的低维展开会导致低维量级的无限扩张\r\n- 推演：高维比低维的视角更多\r\n        \r\n### 2. 复杂系统\r\n#### (1) 定义\r\n什么叫系统？一组组内相互作用、相互依赖的复杂整体\r\n#### (2) 要素\r\n#### (3) 系统的三要素\r\n- 系统关系\r\n- **元素间关系**\r\n- 系统功能\r\n#### (4) 两大类系统\r\n##### ① 他组织系统\r\n- 系统元素\r\n- 系统结构关系\r\n- 系统功能\r\n- 特点：功能稳定，输入一定，输出一定。\r\n##### ② 自组织系统\r\n\r\n---\r\n\r\n# 0x05 Markdown原文\r\n\r\nMarkdown与Markdown编辑器与排版文字的关系梳理与实践：\r\n\r\n- Markdown格式原文->有道云Markdown编辑器 or 简书Markdown编辑器->预览效果就是发布后的效果\r\n\r\n- 简书中Markdown编辑器开启方式\r\n    - ```个人设置-基础设置-常用编辑器-Markdown```\r\n\r\n- 有道云笔记Markdown编辑器开启方式\r\n    - ```新文档-新建Markdown```\r\n\r\n');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-15 17:08:34
