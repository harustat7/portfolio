const express=require("express");
const router=express.Router();
const path = require("path");

router.get("/",function(req,res){
    res.render("aboutme");
});

router.get("/resume",function(req,res){
    res.render("resume");
});

router.get("/projects",function(req,res){
   res.render("projects");
});

router.get("/certificates",function(req,res){
    res.render("certificate");
})

router.get("/contact",function(req,res){
    res.render("contact");
})

module.exports=router;