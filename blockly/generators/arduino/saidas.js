Blockly.Arduino['saida_led13'] = function(block) {
    var estado = block.getFieldValue('estado');

    Blockly.Arduino.definitions_['define_saidaLed13'] = 
        'int ledIntegrado = 13;\n';

    Blockly.Arduino.setups_['setup_saidaLed13'] = 
        'Serial.begin(9600);\n' +
        'pinMode(ledIntegrado, OUTPUT);\n';

    var code = 
        'digitalWrite(ledIntegrado, ' + estado + ');' +
        'delay(3000);';

    return code;
};