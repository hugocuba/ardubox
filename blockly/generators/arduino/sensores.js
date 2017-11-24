Blockly.Arduino['sensor_movimento'] = function(block) {
    var status = block.getFieldValue('movimento');
    
    Blockly.Arduino.definitions_['define_sensorMovimento'] = 
        'int pinoSensorMovimento = 3;\n' +
        'int iniciaSensorMovimento = 0;\n' +
        'int calibracaoSensorMovimento = 5;\n';
    Blockly.Arduino.setups_['setup_sensorMovimento'] = 
        'Serial.begin(9600);\n' +
        'pinMode(pinoSensorMovimento,INPUT);\n' +
        'Serial.print("Calibrando o sensor de presença...")\n' +
        'for(int i = 0; i < calibracaoSensorMovimento; i++){\n' +
            'Serial.print("."); delay(1000);\n} \n' +
        'Serial.println("Sensor Ativado"); delay(500);\n';

    var code = 
        'iniciaSensorMovimento = digitalRead(pinoSensorMovimento);\n' +
        'Serial.print("Valor do Sensor PIR: ");\n' +
        'Serial.println(iniciaSensorMovimento);\n' +
        'if (iniciaSensorMovimento == ' + status +') {\n' +
            'incluir aqui\n' +
        '}\n';
    return code;
};