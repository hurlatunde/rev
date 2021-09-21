class Team {

    create(req, res) {
        res.send('Hello World!')
    }
    update(req, res) {
        res.send('Hello World! update')
    }

}

module.exports = new Team();
