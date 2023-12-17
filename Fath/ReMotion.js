import Cast from '../utils/cast.js'

const Icon = "data:image/png;base64,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";

function find_distance_to(x1, y1, x2, y2) {
  return Math.hypot((x2 - x1), (y2 - y1)).toFixed(2)
}

function find_direction_to(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let theta = Math.atan2(dy, dx);
  let direction = 90 - theta * (180 / Math.PI);
  return direction.toFixed(2);
}

function rotatePoint(px, py, cx, cy, theta) {
  // Translate point back to origin
  px -= cx;
  py -= cy;
  
  // Rotate point
  var newX = px * Math.cos(theta) - py * Math.sin(theta);
  var newY = px * Math.sin(theta) + py * Math.cos(theta);
  
  // Translate point back
  newX += cx;
  newY += cy;
  
  return [newX, newY];
}

function differenceBetweenDirections({A,B}) {
  const a = Cast.toNumber(A)
  const b = Cast.toNumber(B)
  let dif = b - a
  dif -= Math.round(dif / 360) * 360
  if (dif === -180) dif = 180
  return dif
}


class ReMotion {
  constructor(runtime){
    this.runtime = runtime
  }
    getInfo() {
      return {
        id: 'remotion',
        name: 'ReMotion',
        color1: '#4c97ff',
        color2: '#2a528a',
        color3: '#4280d7',
        blockIconURI: Icon,
        blocks: [
          {
            opcode: 'rotate_around',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate around x: [X] y: [Y] by [STEPS] steps [ROTATE_DIRECTION]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              STEPS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '10'
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
            },
          },
          {
            opcode: 'rotate_around_sprite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate around [SPRITE] by [STEPS] steps [ROTATE_DIRECTION]',
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
              STEPS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '10'
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
            },
          },
          "---",
          {
            opcode: 'rotate_in_shapes',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate in [SHAPE] formation around x: [X] y: [Y] [ROTATE_DIRECTION]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
              SHAPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'SHAPES',
              },
            },
          },
          {
            opcode: 'rotate_around_sprite_in_shapes',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Rotate around [SPRITE] in [SHAPE] formation [ROTATE_DIRECTION]',
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
              ROTATE_DIRECTION: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'ROTATE_DIRECTION',
              },
              SHAPE: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'SHAPES',
              },
            },
          },
          "---",
          {
            opcode: 'point_towards_pos',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Point towards x: [X] y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'direction_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Direction to x: [X] y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'direction_from_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Direction from x: [X1] y: [Y1] to x: [X2] y: [Y2]',
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            },
          },
          {
            opcode: 'direction_to_sprite',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Direction to [SPRITE]',
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
            },
          }, 
          "---",
          {
            opcode: 'turn_degrees_to_dir',
            blockType: 'command',
            text: "Turn [DEGREE] degrees towards direction [DIR]",
            arguments: {
              DEGREE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 45,
              },
              DIR: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 10,
              },
            },
            filter: ['sprite']
          },
          {
            opcode: 'turn_degrees_away_dir',
            blockType: 'command',
            text: "Turn [DEGREE] degrees away from direction [DIR]",
            arguments: {
              DEGREE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 45,
              },
              DIR: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: 10,
              },
            },
            filter: ['sprite']
          },
          "---",
          {
            opcode: 'move_towards_or_away',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Move [STEPS] steps [DIRECTION] x: [X] y: [Y]',
            arguments: {
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              DIRECTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'towards_away',
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'move_towards_or_away_from_sprite',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Move [STEPS] steps [DIRECTION] [SPRITE]',
            arguments: {
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              DIRECTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'towards_away',
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'sprites',
              },
            },
          },
          "---",
          {
            opcode: 'distance_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Distance to x: [X] y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
          {
            opcode: 'distance_from_to',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Distance from x: [X1] y: [Y1] to x: [X2] y: [Y2]',
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            },
          },
          "---",
          {
            opcode: "betterGlide",
            blockType: Scratch.BlockType.COMMAND,
            text: "[NOT WORKING]glide [NAME] [SECS] secs to x: [X] y: [Y]",
            filter: ['sprite'],
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              SECS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "sprites",
              }
            }
          },
          {
            opcode: "whileGlide",
            blockType: Scratch.BlockType.LOOP,
            text: "[NOT WORKING]while gliding [NAME] [SECS] secs to x: [X] y: [Y] run",
            filter: ['sprite'],
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              SECS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "sprites",
              }
            }
          },
        ],
        menus: {
          sprites: {
            acceptReporters: true,
            items: '_getTargets()'
          },
          ROTATE_DIRECTION: {
            acceptReporters: true,
            items: [
              {
                text: 'Clockwise',
                value: '-1'
              },
              {
                text: 'Counter-clockwise',
                value: '1'
              }
            ]
          },
          towards_away: {
            acceptReporters: true,
            items: [
              {
                text: 'towards',
                value: '1'
              },
              {
                text: 'away',
                value: '-1'
              }
            ]
          },
          SHAPES: {
            acceptReporters: true,
            items: [
              {
                text: 'Triangle',
                value: '2.09'
              },
              {
                text: 'Square',
                value: '1.57'
              },
              {
                text: 'Pentagon',
                value: '1.26'
              },
              {
                text: 'Hexagon',
                value: '1.05'
              },
              {
                text: 'Heptagon',
                value: '0.897'
              },
              {
                text: 'Octagon',
                value: '0.785'
              },
            ]
          }
        }
      };
    }
  
    rotate_around({X, Y, STEPS, ROTATE_DIRECTION}, util) {
      //Convert the angle to radians so sprite will rotate in circle
      let radians = STEPS * (Math.PI / 180)
      //Set the rotation direction to either CLOCKWISE: -1 or COUNTER-CLOCKWISE: 1
      radians = radians * ROTATE_DIRECTION
  
      // Use the rotatePoint(x1, y1, x2, y2, theta) function
      let newPos = rotatePoint(util.target.x, util.target.y, X, Y, radians);
  
      //Set the sprite's position to the new positions
      util.target.setXY(newPos[0], newPos[1]);
    }
  
    rotate_around_sprite({SPRITE, STEPS, ROTATE_DIRECTION}, util) {
      // get target sprite's target
      SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
  
      // Get target sprite's X and Y
      let X = SPRITE.x
      let Y = SPRITE.y
  
      //Use the rotate_around block
      this.rotate_around({X, Y, STEPS, ROTATE_DIRECTION}, util)
    }
  
    rotate_in_shapes({X, Y, ROTATE_DIRECTION, SHAPE}, util) {
      // Set the rotation direction
      let radians = SHAPE * ROTATE_DIRECTION
  
      // Use the rotatePoint(x1, y1, x2, y2, theta) function
      // This one DOESN'T use rotate_around() block because rotate around have a radians for circles
      let newPos = rotatePoint(util.target.x, util.target.y, X, Y, radians);
  
      util.target.setXY(newPos[0], newPos[1]);
    }
  
    rotate_around_sprite_in_shapes({SPRITE, ROTATE_DIRECTION, SHAPE}, util) {
      SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
  
      let X = SPRITE.x
      let Y = SPRITE.y
      
      // use the rotate_in_shapes() block
      this.rotate_in_shapes({X, Y, ROTATE_DIRECTION, SHAPE}, util)
    }
  
    point_towards_pos({X, Y}, util) {
      //Set the sprite's direction using the find_direction_to() function
      util.target.setDirection(find_direction_to(X, Y, util.target.x, util.target.y));
    }
  
    direction_to({X, Y}, util) {
      return find_direction_to(X, Y, util.target.x, util.target.y)
    }
  
    direction_from_to({X1, Y1, X2, Y2}) {
      return find_direction_to(X1, Y1, X2, Y2)
    }
  
    direction_to_sprite({SPRITE}, util) {
      SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
      let X = SPRITE.x
      let Y = SPRITE.y
  
      return find_direction_to(X, Y, util.target.x, util.target.y)
    }

    turn_degrees_to_dir({DEGREE, DIR}, util) {
      const degree = Cast.toNumber(DEGREE);
      const dir = Cast.toNumber(DIR);
      const dif = differenceBetweenDirections({A: util.target.direction, B: dir});
      if(Math.abs(dif) < degree) 
        util.target.setDirection(dir);
      else if(dif < 0)
        util.target.setDirection(util.target.direction - degree);
      else
        util.target.setDirection(util.target.direction + degree);
    }

    turn_degrees_away_dir({DEGREE, DIR}, util) {
      const degree = Cast.toNumber(DEGREE);
      const dir = Cast.toNumber(DIR) + 180;
      const dif = differenceBetweenDirections({A: util.target.direction, B: dir});
      if(Math.abs(dif) < degree) 
        util.target.setDirection(dir);
      else if(dif < 0)
        util.target.setDirection(util.target.direction - degree);
      else
        util.target.setDirection(util.target.direction + degree);
    }
  
    move_towards_or_away({STEPS, DIRECTION, X, Y}, util) {
      // Calculate the difference between the target and destination points
      let dx = X - util.target.x;
      let dy = Y - util.target.y;
  
      // Calculate the distance between the two points
      let distance = Math.sqrt(dx * dx + dy * dy);
  
      // Normalize the difference
      dx /= distance;
      dy /= distance;
  
      // Move the target point towards or away from the destination point by the specified amount
      let x = util.target.x + DIRECTION * dx * STEPS;
      let y = util.target.y + DIRECTION * dy * STEPS;
      util.target.setXY(x, y)
    }
  
    move_towards_or_away_from_sprite({STEPS, DIRECTION, SPRITE}, util) {
      if (SPRITE != util.target.getName()) {
        SPRITE = this.runtime.getSpriteTargetByName(SPRITE)
        let X = SPRITE.x
        let Y = SPRITE.y
    
        // Calculate the difference between the target and destination points
        let dx = X - util.target.x;
        let dy = Y - util.target.y;
    
        // Calculate the distance between the two points
        let distance = Math.sqrt(dx * dx + dy * dy);
    
        // Normalize the difference
        dx /= distance;
        dy /= distance;
    
        // Move the target point towards or away from the destination point by the specified amount
        let x = util.target.x + DIRECTION * dx * STEPS;
        let y = util.target.y + DIRECTION * dy * STEPS;
        util.target.setXY(x, y)
      } else {
        console.error("Sprite cannot move towards/away fron itself");
      }
    }
  
    distance_to({X, Y}, util) {
      return find_distance_to(X, Y, util.target.x, util.target.y)
    }
  
    distance_from_to({X1, Y1, X2, Y2}) {
      return find_distance_to(X1, Y1, X2, Y2)
    }

    /*
    betterGlide(args, util, loop) {
      const target = args.NAME === "_myself_" ? util.target : this.runtime.getSpriteTargetByName(args.NAME);
      if (!util.stackFrame.startTime) {
        util.stackFrame.startTime = new Date().getTime();
        util.stackFrame.duration = Cast.toNumber(args.SECS);
        util.stackFrame.startX = target.x;
        util.stackFrame.startY = target.y;
        util.stackFrame.endX = Cast.toNumber(args.X);
        util.stackFrame.endY = Cast.toNumber(args.Y);
        if (util.stackFrame.duration <= 0) {
          target.setXY(util.stackFrame.endX, util.stackFrame.endY);
          return;
        }
        if (loop === "on") {
          util.startBranch(1, true);
        } else {
          util.yield();
        }
      } else {
        const currentTime = new Date().getTime();
        const timeElapsed = currentTime - util.stackFrame.startTime;
        if (timeElapsed < util.stackFrame.duration * 1000) {
          const frac = timeElapsed / (util.stackFrame.duration * 1000);
          const dx = frac * (util.stackFrame.endX - util.stackFrame.startX);
          const dy = frac * (util.stackFrame.endY - util.stackFrame.startY);
          target.setXY(
            util.stackFrame.startX + dx,
            util.stackFrame.startY + dy
          );
          if (loop === "on") {
            util.startBranch(1, true);
          } else {
            util.yield();
          }
        } else {
          target.setXY(util.stackFrame.endX, util.stackFrame.endY);
        }
      }
    }

    whileGlide(args, util) { this.betterGlide(args, util, "on") }
    */
  
    _getTargets() {
      const spriteNames = [];
      const targets = this.runtime.targets;
      for (let index = 1; index < targets.length; index++) {
          const target = targets[index];
          if (target.isOriginal) {
              const targetName = target.getName();
              spriteNames.push({
                  text: targetName,
                  value: targetName,
              });
          }
      }
      return spriteNames.length > 0 ? spriteNames : [""];
    }
}

window.tempExt = {
  Extension: ReMotion,
  info: {
      name: 'remotion.Name',
      description: 'remotion.Description',
      extensionId: 'remotion',
      iconURL: 'https://fath11.github.io/custom-extension/Fath/banners/Motion.png',
      // insetIconURL: 'cover.svg',
      collaborator: 'Fath11@Cocrea',
      collaboratorList: [
        {
          collaborator: "Fath11@Cocrea",
          collaboratorURL: "https://cocrea.world/@Fath11",
        },
        {
          collaborator: "SharkPool-SP@TW",
          collaboratorURL: "https://github.com/SharkPool-SP",
        },
        {
          collaborator: "Arkos(搬运者) @ CCW",
          collaboratorURL:"https://www.ccw.site/student/6107c5323e593a0c25f850f8",
        },
      ],
  },
  l10n: {
      'zh-cn': {
          'remotion.Name':'ReMotion',
          'remotion.Description':'用于控制和操作浏览器内置的JavaScript控制台'
      },
      en: {
          'remotion.Name':'ReMotion',
          'remotion.Description': "More blocks for controlling sprite's motion!"
      }
  },
}
