function Player(id, name) {
    var self = this;
    self.id = id;
    self.name = name;
}

const players = [new Player(1, 'Drew'),
    new Player(2, 'Miley'),
    new Player(3, 'James'),
    new Player(4, 'William'),
    new Player(5, 'Bob')];

export default players;