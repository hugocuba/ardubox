Blockly.Blocks['saida_led13'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://i.imgur.com/uDpddAT.jpg", 120, 70, ""))
            .appendField("Led Integrado")
            .appendField(new Blockly.FieldDropdown([["Ligado","HIGH"], ["Desligado","LOW"]]), "estado");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Pino 13");
        this.setHelpUrl("");
    }
};