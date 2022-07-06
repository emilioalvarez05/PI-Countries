const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { Activity, Country } = require("../db");
const router = Router()

router.post("/", async (req, res, next) =>{
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        let activityExistent = await Activity.findOne({
            where: {
                name: name
            }
        })
        if(activityExistent){
            res.send({msg: "La actividad ya existe"})
        } else {
            let newActivity = await Activity.create({
                id: uuidv4(),
                name,
                difficulty,
                duration, 
                season
            })
            const promises = countries?.map(c =>{
                return new Promise (async( resolve, reject) =>{
                    let findCountry = await Country.findOne({
                        where: {
                            name: c
                        }
                    })
                    resolve (newActivity.addCountry(findCountry))
                    reject (err => next(err))
                })
            })
            await Promise.all(promises)
            let response = await Activity.findOne({
                where: {
                    id: newActivity.id
                },
                include: [{
                    model: Country
                }]
            })
            res.send(response);
        }
    } catch (error) {
        next(error)
        
    }

})


module.exports = router