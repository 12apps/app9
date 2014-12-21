var model = require('./user.model');
var User = model;

exports.index = function(req,res) {
  User.find({}, function(err,users) {
    if (err) {
      return handleError(err, res);
    }
    res.status(200).json(users);
  });
}

exports.create = function(req,res) {
  var user = new User(req.body);
  user.save(function(err,user) {
    if (err) {
      return handleError(err,res);
    }
    res.status(201).json(user);
  });
}

exports.update = function(req,res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      return handleError(err,res);
    }
    res.status(201).json(user);
  });
};

exports.read = function(req,res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return handleError(err,res);
    }
    res.json(user);
  });
};

exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) {
      return handleError(err,res);
    }
    res.json(user);
  });
};

function handleError(err, res) {
  res.status(500).json(err);
}

