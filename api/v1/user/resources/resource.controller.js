var Resource = require('./resource.model');

exports.feed = function(req,res) {
  Resource.find({}, function(err,resources) {
    if (err) {
      return handleError(err, res);
    }
    res.status(200).json(resources);
  });
}

exports.index = function(req,res) {
  Resource.find({user_id : req.primaryParams.user_id}, function(err,resources) {
    if (err) {
      return handleError(err, res);
    }
    res.status(200).json(resources);
  });
};

exports.create = function(req,res) {
  req.body.user_id = req.primaryParams.user_id;
  var resource = new Resource(req.body);
  resource.save(function(err,resource) {
    if (err) {
      return handleError(err,res);
    }
    res.status(201).json(resource);
  });
};

exports.update = function(req,res) {
  Resource.findByIdAndUpdate(req.params.id, req.body, function(err, resource) {
    if (err) {
      return handleError(err,res);
    }
    res.status(201).json(resource);
  });
};

exports.read = function(req,res) {
  Resource.findById(req.params.id, function(err, resource) {
    if (err) {
      return handleError(err,res);
    }
    res.json(resource);
  });
};

exports.destroy = function(req, res) {
  Resource.findByIdAndRemove(req.params.id, function(err, resource) {
    if (err) {
      return handleError(err,res);
    }
    res.json(resource);
  });
};

function handleError(err, res) {
  res.status(500).json(err);
}

