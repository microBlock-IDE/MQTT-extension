({
    name: "MQTT", // Category Name
    icon: "/static/icon.png", // Category icon
    color: "#F39C12", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="mqtt_connect">
                    <value name="host">
                        <shadow type="text">
                            <field name="TEXT">test.mosquitto.org</field>
                        </shadow>
                    </value>
                    <value name="port">
                        <shadow type="math_number">
                            <field name="NUM">1883</field>
                        </shadow>
                    </value>
                    <value name="client_id">
                        <shadow type="text">
                            <field name="TEXT">MyMQTTDevice</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="mqtt_publish">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "mqtt_on_receive",
        "mqtt_subscribe",
        "mqtt_get_topic",
        "mqtt_get_number",
        "mqtt_get_text",
        "mqtt_check_msg",
        "math_number",
        "text",
        "logic_boolean"
    ]
});
