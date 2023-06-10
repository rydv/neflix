const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken")

//CREATE
router.post("/", verify, async (req,res) => {
    try {
        if(req.user.isAdmin){
            const newMovie = new Movie(req.body);
            const savedMovie = await newMovie.save()
            res.status(201).json(savedMovie)
        }else{
            res.status(403).json("You are not authorized to perform this action!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", verify, async (req,res) => {
    try {
        if(req.user.isAdmin){
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },
            {new:true});
            res.status(200).json(updatedMovie)
        }else{
            res.status(403).json("You are not authorized to perform this action!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verify, async (req,res) => {
    try {
        if(req.user.isAdmin){
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie deleted successfully!")
        }else{
            res.status(403).json("You are not authorized to perform this action!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET
router.get("/find/:id", verify, async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET RANDOM 
router.get("/random", verify, async (req,res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type==="series"){
            movie = await Movie.aggregate([
                {$match : {isSeries: true}},
                {$sample :{ size: 1}},
            ]
            );
        }else{
            movie = await Movie.aggregate([
                {$match : {isSeries: false}},
                {$sample :{ size: 1}}
            ]
            );
        }
        res.status(200).json(movie)
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL
router.get("/", verify, async (req,res) => {
    try {
        if(req.user.isAdmin){
            const movies = await Movie.find();
            res.status(200).json(movies.reverse())
        }else{
            res.status(403).json("You are not authorized to perform this action!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;