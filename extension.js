({
    name: "Pin",
    icon: "images/icon/led.png",
    color: "#e64c3c",
    blocks: [
        {
            xml: `
                <block type="pin_digital_write">
                    <value name="pin">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                    </value>
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ],
	script: [
	],
	modules: [
	]
});
