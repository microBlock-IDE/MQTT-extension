Blockly.defineBlocksWithJsonArray(
[{
  "type": "mqtt_connect",
  "message0": "MQTT Connect %1 Host %2 Port %3 Client Id %4 Username %5 Password %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "host",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "port",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "client_id",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "username",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "password",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_publish",
  "message0": "MQTT Publish  topic : %1   data: %2",
  "args0": [
    {
      "type": "field_input",
      "name": "topic",
      "text": ""
    },
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "Boolean",
        "Number",
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_subscribe",
  "message0": "MQTT Subscribe topic : %1",
  "args0": [
    {
      "type": "field_input",
      "name": "topic",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_get_number",
  "message0": "MQTT get number",
  "output": [
    "Number",
    "Boolean"
  ],
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_get_text",
  "message0": "MQTT get text",
  "output": "String",
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
/*{
  "type": "mqtt_on_connected",
  "message0": "MQTT on Connected %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mqtt_config",
  "message0": "MQTT Config %1 Host %2 Port %3 Client Id %4 Username %5 Password %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "host",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "port",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "client_id",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "username",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "password",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#F39C12",
  "tooltip": "",
  "helpUrl": ""
}*/]
);
