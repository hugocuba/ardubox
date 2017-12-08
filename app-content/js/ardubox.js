$( document ).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true
    }
                                 );
    $('.collapsible').collapsible();
    $('.modal').modal();

    $('#enviar').click(function(){

        for(i = 8990; i < 9001; i++){

            var url = 'http://127.00.0.1:' + i;

            /*axios.get(url + '/info')
                .then(function(response){
                var endpoint = url;
                console.log("Achou o agente: " + endpoint)
            });*/

            $.ajax({
                url: url,
                dataType: 'json',
                sucess: function(){
                    console.log('teste');
                }
            });
        }

        console.log("Abrindo socket...");
        var socket = io(endpoint);

        socket.on('connect', function () {
            console.log("Enviando instrução para o Arduino...")
            socket.emit('message', list);

            socket.on('message', function (data) {
                console.log("retorno");
            });
        });
    })
});