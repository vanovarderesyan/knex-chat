const knex = require('../knex/knex');

module.exports = {
    // Create a new Client
    create(req, res) {

        return Client
            .create(req.body)
            .then((client) => {
                res.status(200).json(client)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    // Find all Client
    findAll(req, res) {
        return knex.select('*').from('users')
            .then(users => res.status(200).json(users))
            .catch(error => res.status(400).json(error))
    },

    destroy(req, res) {
        // Delete Client
        let id = req.decodedToken.id;

        return Client.destroy({
                where: {
                    id: id
                }
            })
            .then(Client => res.status(200).json({ "destroy": Client }))
            .catch((error) => {

                res.status(400).json(error)
            })
    },

    update(req, res) {
        // Change everyone without a last name to "Doe"
        let id = req.decodedToken.id;


        console.log(req.body);
        console.log(id, '---------------------');


        return Client.update(req.body, {
                where: {
                    id: id
                }
            })
            .then(Client => res.status(200).json(Client))
            .catch(error => res.status(400).json(error))
    },

    uploadImage(req, res) {
        if (!req.file) {
            return res.status(400).json({
                message: "file required (Services)"
            });
        }
        let data = {};
        let id = req.decodedToken.id;
        let image = req.file.filename;

        Client.findOne({
                where: {
                    id: id
                }
            })
            .then((result) => {
                console.log(result.image, '-------------');
                Client.update({ image: image }, {
                    returning: true,
                    where: {
                        id: id
                    }
                }).then((resultUpdate) => {
                    if (resultUpdate) {
                        if (result.image) {
                            let filePath = PATH.join(__dirname, '..', 'assets', 'image', result.image);
                            fs.stat(filePath, function(err, stat) {
                                if (err == null) {
                                    fs.unlinkSync(filePath);
                                    return res.status(200).json({ "message": "Changed success" });
                                } else {
                                    return res.status(200).json({ "message": "create image" });
                                }
                            });
                        } else {
                            return res.status(200).json({ "message": "create image" });
                        }
                    } else {
                        return res.status(200).json(resultUpdate);
                    }
                }).catch((err) => {
                    console.log(err)
                    res.status(400).json(err);
                })
            }).catch(error => res.status(400).json(error))

    },

    findOne(req, res) {
        // Find one Client
        let id = req.decodedToken.id;

        console.log(req.headers.token)
        return Client.findOne({
                where: {
                    id: id
                }
            })
            .then(client => res.status(200).json(client))
            .catch(error => res.status(400).json({ error }))
    },
}