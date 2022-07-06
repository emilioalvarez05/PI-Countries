const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { Op } = require("sequelize");
const { Country } = require("../db.js")



router.get("/", async (req, res, next) =>{
    const { name } = req.query;
    const allinfoCountries = await axios.get(`https://restcountries.com/v3/all`)
    //console.log(allinfoCountries.data)
    const promises = allinfoCountries.data?.map(c => {
        new Promise(async(resolve, reject) =>{
            resolve(
                await Country.findOrCreate({
                    where: {
                        id: c.cca3,
                        name: c.name.official,
                        flags: c.flags[0],
                        continents: c.continents[0],
                        capital: c.capital? c.capital[0] : "",
                        subregion: c.subregion || "",
                        area: c.area,
                        population: c.population

                    }
                })
            );
            reject(err =>{next(err)});
        })
    }) 
    await Promise.all(promises)

    if(!name){
        const allCountries = await Country.findAll();
        res.send(allCountries)
    } else{
        try {
            const findCountry = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`, 
                    }
                }
            })
            if(findCountry.length > 0){
                res.send(findCountry)
            } else {
                res.send({msg: "El pais no fue encontrado"})
            }

        } catch (err) {
            next(err)
            console.log("entre al catch")
        }
    }


})

router.get("/:id", async(req, res, next) =>{
    const { id } = req.params;
    let country;

    try {
            country = await Country.findOne({
                where: {
                    id: id.toUpperCase()
                }, 
            })
        if(country){
            res.send(country)
        } else{
            res.send({msg: "No se encontró el pais buscado por ID"})
        }
        
    } catch (err) {
        next(err)
    }
})


module.exports = router