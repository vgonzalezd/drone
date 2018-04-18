
const config = require('./../../config');
const rosnodejs = require('rosnodejs');
const Twist = rosnodejs.require('geometry_msgs').msg.Twist;


exports.postAction = function(req, res) {

  rosnodejs.initNode('/simulation', {onTheFly: true}).then((rosNode) => {
    let cmd_vel = rosNode.advertise('/turtle1/cmd_vel','geometry_msgs/Twist', {
      queueSize: 1,
      latching: true,
      throttleMs: 9
    });

    const Twist = rosnodejs.require('geometry_msgs').msg.Twist;
    const msgTwist = new Twist({
      linear: { x: 2, y: 0, z: 0 },
      angular: { x: 0, y: 0, z: 1.8 }
    });
    cmd_vel.publish(msgTwist);

    let move = req.body.move;
    let response = { result: 'This is an action: ' + move };
    return res.json(response);
  });
};


/*
* A postAction
* @input move - Movement requested by the client
* @return response
*/
