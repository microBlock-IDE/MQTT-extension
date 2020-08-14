Blockly.Python['mqtt_connect'] = function(block) {
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var value_port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var value_client_id = Blockly.Python.valueToCode(block, 'client_id', Blockly.Python.ORDER_ATOMIC);
  var value_username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC) || 'None';
  var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC) || 'None';

  Blockly.Python.uploadModule("/modules/umqttsimple.py");
  Blockly.Python.definitions_['from_umqttsimple_import_mqttclient'] = 'from umqttsimple import MQTTClient';
  
  var code = `client = MQTTClient(${value_client_id}, ${value_host}, ${value_port}, ${value_username}, ${value_password}); client.connect()\n`;
  return code;
};

Blockly.Python['mqtt_publish'] = function(block) {
  var text_topic = block.getFieldValue('topic');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `client.publish("${text_topic}", ${value_value})\n`;
  return code;
};

Blockly.Python['mqtt_on_receive'] = function(block) {
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');
  var functionName = Blockly.Python.provideFunction_(
    'mqtt_sub_cb',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, msg):',
    statements_callback]);

  var code = `client.set_callback(${functionName})\n`;
  return code;
};

Blockly.Python['mqtt_subscribe'] = function(block) {
  var text_topic = block.getFieldValue('topic');

  var code = `client.subscribe("${text_topic}")\n`;
  return code;
};

Blockly.Python['mqtt_get_number'] = function(block) {
  var code = 'float(msg)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mqtt_get_text'] = function(block) {
  var code = 'msg';
  return [code, Blockly.Python.ORDER_NONE];
};
/*
Blockly.Python['mqtt_on_connected'] = function(block) {
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['mqtt_config'] = function(block) {
  var value_host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
  var value_port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
  var value_client_id = Blockly.Python.valueToCode(block, 'client_id', Blockly.Python.ORDER_ATOMIC);
  var value_username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC);
  var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
*/