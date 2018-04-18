const rosnodejs = require('rosnodejs');

rosnodejs.initNode('/simulation', {onTheFly: true}).then((rosNode) => {
  let cmd_vel = rosNode.advertise('/turtle1/cmd_vel','geometry_msgs/Twist', {
    queueSize: 1,
    latching: true,
    throttleMs: 9
  });

  const Twist = rosnodejs.require('geometry_msgs').msg.Twist;
  const msgTwist = new Twist({
    linear: { x: 1, y: 0, z: 0 },
    angular: { x: 0, y: 0, z: 1 }
  });
  cmd_vel.publish(msgTwist);
});
