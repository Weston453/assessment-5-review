const fortunes = [
    "A friend is a present you give yourself.",
    " golden egg of opportunity falls into your lap this month.",
    "A lifetime of happiness lies ahead of you.",
    "A lifetime friend shall soon be made.",
    "A fresh start will put you on your way."
  ]

  

module.exports =  {
    getFortune: (req, res) => {
        const randomIndex = Math.floor(Math.random() * fortunes.length)
        let fortune = fortunes[randomIndex]
        res.status(200).send(fortune)
      
    },
    addFortune: (req, res) => {
        console.log("is this workin?")
        console.log(req.body)
        const { value } = req.body 
        fortunes.push(value)

        res.status(200).send(fortunes)
        
    }
}