Blockly.Blocks['sensor_movimento'] = {
    init: function() {
        this.appendStatementInput("movimento")
            .setCheck(null)
            .appendField(new Blockly.FieldImage("https://i.imgur.com/hmakMKt.png", 120, 96, "*"))
            .appendField("Sensor de movimento")
            .appendField(new Blockly.FieldDropdown([["Detectou","1"], ["Não detectou ","0"]]), "movimento");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};