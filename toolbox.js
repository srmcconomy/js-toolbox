Array.prototype.all = function(lambda) {
  for (var i = 0; i < this.length; i++) {
    if (!lambda(this[i])) return false;
  }
  return true;
}

Array.prototype.any = function(lambda) {
  if (typeof lambda === 'undefined') {
    return this.length > 0;
  }
  for (var i = 0; i < this.length; i++) {
    if (lambda(this[i])) return true;
  }
  return false;
}

Array.prototype.average = function(lambda) {
  if (typeof lambda === 'undefined') {
    lambda = (val) => val;
  }
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += lambda(this[i]);
  }
  return sum / this.length;
}

Array.prototype.contains = function(value, lambda) {
  if (typeof lambda === 'undefined') {
    return this.indexOf(value) !== -1;
  }
  for (var i = 0; i < this.length; i++) {
    if (lambda(this[i], value)) return true;
  }
  return false;
}

Array.prototype.count = function(lambda) {
  if (typeof lambda === 'undefined') {
    return this.length;
  }
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    if (lambda(this[i])) count++;
  }
  return count;
}

Array.prototype.first = function(lambda) {
  if (typeof lambda === 'undefined') {
    return this[0];
  }
  for (var i = 0; i < this.length; i++) {
    if (lambda(this[i])) return this[i];
  }
}

Array.prototype.last = function(lambda) {
  if (typeof lambda === 'undefined') {
    return this[this.length - 1];
  }
  for (var i = this.length - 1; i >= 0; i--) {
    if (lambda(this[i])) return this[i];
  }
}

Array.prototype.max = function(lambda) {
  if (typeof lambda === 'undefined') {
    lambda = (val) => val;
  }
  var max = -Infinity;
  for (var i = 0; i < this.length; i++) {
    var value = lambda(this[i]);
    if (value > max) max = value;
  }
  return max;
}

Array.prototype.min = function(lambda) {
  if (typeof lambda === 'undefined') {
    lambda = (val) => val;
  }
  var min = Infinity;
  for (var i = 0; i < this.length; i++) {
    var value = lambda(this[i]);
    if (value < min) min = value;
  }
  return min;
}

Array.prototype.sum = function(lambda) {
  if (typeof lambda === 'undefined') {
    lambda = (val) => val;
  }
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += lambda(this[i]);
  }
  return sum;
}

Array.prototype.skip = function(n) {
  return this.slice(n);
}

Array.prototype.skipWhile = function(lambda) {
  for (var i = 0; i < this.length; i++) {
    if (!lambda(this[i])) break;
  }
  return this.slice(i);
}

Array.prototype.take = function(n) {
  return this.slice(0, n);
}

Array.prototype.takeWhile = function(lambda) {
  for (var i = 0; i < this.length; i++) {
    if (!lambda(this[i])) break;
  }
  return this.slice(0, i);
}

Array.prototype.where = function(lambda) {
  return this.filter(lambda);
}
