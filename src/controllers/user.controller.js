const create = async (req, res) => {
    const {name, lastName} = req.body

    if (name && lastName) {
        const user = await userService.createService(require.body)

        if (user) {
            res.status(200).send({
                message: "Criado com sucesso",
                user: {
                    name,
                    lastName
                }
            })
        }
    }

    console.log(`${name} ${lastName}`)

    res.send({name, lastName})



}

module.exports = {
    create
}