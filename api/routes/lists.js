const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken")

//CREATE
router.post("/", verify, async (req,res) => {
    try {
        if(req.user.isAdmin){
            const newList = new List(req.body);
            const savedList = await newList.save()
            res.status(201).json(savedList)
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
            const updatedList = await List.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },
            {new:true});
            res.status(200).json(updatedList)
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
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List deleted successfully!")
        }else{
            res.status(403).json("You are not authorized to perform this action!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET
router.get("/", verify, async (req,res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    console.log(typeQuery, genreQuery)
    let list=[]
    try {
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                        {$sample : { size: 10}},
                        {$match: { type : typeQuery, genre: genreQuery}}
                ])
            }else{
                list = await List.aggregate([
                    {$sample : { size: 10}},
                    {$match: { type : typeQuery}}
            ])
            }
        }else {
            list = await List.aggregate([{$sample : { size: 10}}])
        }
        res.status(200).json(list)
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
            console.log('type movie')
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