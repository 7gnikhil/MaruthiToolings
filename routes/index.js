var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Maruthi Toolings', 
    description: `Maruthi Toolings is a precision-driven manufacturing company specializing in advanced mould and tooling solutions. From plastic injection and battery moulds to 2K/3K, thin-wall, and customized caps & closures, we deliver high-performance products tailored to industry needs. Backed by strong design and engineering expertise in AutoCAD, SolidWorks, and Siemens, along with modern CNC, EDM, and wire-cut machinery, we ensure world-class quality and accuracy in every project.
Our digital platform showcases not only our diverse product categories but also interactive 3D models, detailed insights, and client success stories, offering a transparent view into our capabilities. With dedicated sections for careers, blogs, and customer engagement, Maruthi Toolings is committed to innovation, excellence, and long-term partnerships that help businesses grow with confidence.`
  });

});

module.exports = router;