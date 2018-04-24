const config = require('./../../config');
const rosnodejs = require('rosnodejs');
const Twist = rosnodejs.require('geometry_msgs').msg.Twist;


exports.postAction = function(req, res) {

  rosnodejs.initNode('/simulation', {
      onTheFly: true
    }).then((rosNode) => {
      let cmd_vel = rosNode.advertise('/turtle1/cmd_vel', 'geometry_msgs/Twist', {
        queueSize: 1,
        latching: true,
        throttleMs: 9
      });
      const Twist = rosnodejs.require('geometry_msgs').msg.Twist;
      let rads = req.body.rads;
      let positionNipple = req.body.pos;

      var msgTwist;

      if (positionNipple == 'vertical') {
        msgTwist = new Twist({
          linear: {
            x: 2 * Math.sin(rads),
            y: 0,
            z: 0
          },
          angular: {
            x: 0,
            y: 0,
            z: 0
          }
        })
      } else {
        msgTwist = new Twist({
          linear: {
            x: 0,
            y: 0,
            z: 0
          },
          angular: {
            x: 0,
            y: 0,
            z: -2 * Math.cos(rads)
          }
        })
      };
      cmd_vel.publish(msgTwist);
    })
    .catch(function(error) {
      rodenodejs.eventNames();
    });
};


/*
 * A postAction
 * @input move - Movement requested by the client
 * @return response
 */
