let faveColor = '#fff'

module.exports = {
    getFaveColor:(req, res) => {
        res.status(200).send(faveColor)
    },
    changeColor: (req,res) => {
        const { color } = req.body
        faveColor = color
        // console.log(color)
        res.status(200).send(faveColor)
    }
}