function Nbr(id, dx, dy, degree) {
  this.id = id;
  this.x = dx;
  this.y = dy;
  this.degree = degree;
}

Nbr.prototype.octalCode = function ()
{
  //Semi axes get octal codes 0,2,4,6; East:0; North:2; West:4; South:6
  //Quadrants get octal codes 1,3,5,7; NorthEast:1; NorthWest:3; SouthWest:5; SouthEast:7
  var o = -1;
  var x = this.x;
  var y = this.y;
  if (x > 0)
  {
    if (y < 0)
      o = 7;
    else
    {
      if (y === 0)
        o = 0;
      else
        o = 1;
    }
  }
  else if (x === 0)
  {
    if (y < 0)
      o = 6;
    else
      o = 2;
  }
  else
  {
    if (y < 0)
      o = 5;
    else
    {
      if (y === 0)
        o = 4;
      else
        o = 3;
    }
  }
  return o;
};

Nbr.prototype.deflection = function ()
{
  var x = this.x;
  var y = this.y;
  var xSquare = x*x;
  var ySquare = y*y;
  var lSquare = xSquare + ySquare;
  var o = this.octalCode();
  var arr = [0, 1, 4, 5];
  var defl;
  if (arr.includes(o))
    defl = ySquare/lSquare;
  else
    defl = xSquare/lSquare;
  return defl;
};

Nbr.prototype.deflectionFromSemi = function(semi, o)
{
  var x = this.x;
  var y = this.y;
  var xSquare = x*x;
  var ySquare = y*y;
  var lSquare = xSquare + ySquare;
  var defl = 0;

  switch (semi) {
    case 0: case 2:
      defl = ySquare/lSquare;
      break;
    case 1: case 3:
      defl = xSquare/lSquare;
      break;
    default:
      break;

  }

  switch (semi) {
    case 0:
      switch (o) {
        case 3: case 5:
          defl = 2 - defl;
          break;
        case 4:
          defl = 2;
          break;
        default:
      }
      break;
    case 1:
      switch (o) {
        case 5: case 7:
          defl = 2 - defl;
          break;
        case 6:
          defl = 2;
          break;
        default:
      }
      break;
    case 2:
      switch (o) {
        case 7: case 1:
          defl = 2 - defl;
          break;
        case 0:
          defl = 2;
          break;
        default:
      }
      break;
      case 3:
        switch (o) {
          case 1: case 3:
            defl = 2 - defl;
            break;
          case 2:
            defl = 2;
            break;
          default:
        }
        break;
    default:
        break;
  }
  return defl;

}

module.exports = Nbr;
