(function($) {
    "use strict";
    var chatMessages = [
        {
            name: "ms1",
            msg: "Ola! Gostaria de saber mais sobre o sistema",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms2",
            msg: "Olá, Gabriela!👋 Seja bem vindo (a) SPOTCHAT   Você já é nosso cliente ou dedeja Saber Mais? Digite uma opção: [1]-Saber Mais [2]-Sou Cliente",
            delay: 3000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms3",
            msg: "1"!",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms4",
            msg: "Certo, que legal! Nosso sistema é uma ferramenta de Multiatendimento, você colocar sua equipe para atendimento, usando um único número de Whatsapp. tendo todo geranciamento",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms5",
            msg: "Eu Consigo gerenciar a conversa?.",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms6",
            msg: "Sim, você tem controle total de todas as conversas, um Dashboard mostrando como estão os atendimento de sua equipe",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms7",
            msg: "Posso dividir o atendimento da minha equipe?",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms8",
            msg: "Nosso sistema pois opção de você criar as Filas de atendimento, com isso organizando seu atendimento e ganhando agilidade",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms9",
            msg: "Que legal!❤️",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms10",
            msg: "Nosso sistema possiu o módulo de CAMPANHAS, onde você pode dispar mensagens em massa para seus cliente, ganhando tempo para informar seus clientes",
            delay: 4000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms11",
            msg: "Posso enviar mensagem de Venda ou Boas vindas?",
            delay: 1000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms12",
            msg: "Sim!! E você também pode usar o módulo de AGENDAMENTO.",
            delay: 3000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms13",
            msg: "Consigo programar uma menagem de reposta ou avisar o cliente sobre uma data de retorno?",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms14",
            msg: "Nosso sistema Disponibiliza esse opção sim!",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms15",
            msg: "Como posso conhecer esse sistema?",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms16",
            msg: "Vou enviar um link para acesso a nossa plataforma de demonstração.",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms17",
            msg: "Você possuem um plataforma de demonstração?!",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms18",
            msg: "Sim, você gostaria de conhecer?",
            delay: 2000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms19",
            msg: "Claro,❤️.",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
        {
            name: "ms20",
            msg: "É só clicar na opçãp teste gratis!",
            delay: 4000,
            align: "left",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author7.jpg"
        },
        {
            name: "ms21",
            msg: " Qualquer dúvida estamos aqui, tenha um ótimo teste! | Premium High-Quality Items Design+Dev! Great, Thank You!❤️",
            delay: 3000,
            align: "right",
            showTime: true,
            time: "19:58",
            img: "assets/img/author-image/author8.jpg"
        },
    ];
    var chatDelay = 0;
    var chatDelay2, chatDelay3, scrollDelay, chatTimeString, msgname, msginner, spinner;

    function onRowAdded() {
        $('.chat-container').animate({
            scrollTop: $('.chat-container').prop('scrollHeight')
        });
    };
    $.each(chatMessages, function(index, obj) {
        chatDelay = chatDelay + 1000;
        chatDelay2 = chatDelay + obj.delay;
        chatDelay3 = chatDelay2 + 10;
        scrollDelay = chatDelay;
        chatTimeString = " ";
        msgname = "." + obj.name;
        msginner = ".messageinner-" + obj.name;
        spinner = ".sp-" + obj.name;
        if (obj.showTime == true) {
            chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
        }
        $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hiddenn><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hiddenn><img src='" + obj.img +"'><span class='message-text'>" + obj.msg + chatTimeString + "</span></div></li>");

        $(msgname).delay(chatDelay).fadeIn();
        $(spinner).delay(chatDelay2).hide(1);
        $(msginner).delay(chatDelay3).fadeIn();
        setTimeout(onRowAdded, chatDelay);
        setTimeout(onRowAdded, chatDelay3);
        chatDelay = chatDelay3;
    });
}(jQuery))
