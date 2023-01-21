const ToogleGameTab = (val) => {
    $('body').css("overflowY", "hidden");
    $('.GAME_DIALOG').hide();

    if (val === 1) $(".live-box").show()
    if (val === 2) $(".slot-box").show()
    if (val === 3) $(".sports-box").show()
    if (val === 4) $(".arcade-box").show()

}

const CloseGameDialog = () => {
    $('.GAME_DIALOG').hide();
    $('body').css("overflowY", "scroll");
}

const OpenNoticeLists = () => {
    $('.trans-title').removeClass('active')
    $('.not').addClass('active');
    $('.trans-lists').hide();
    $('.notice-lists').show();
}

const OpenEventLists = () => {
    $('.trans-title').removeClass('active')
    $('.eve').addClass('active');
    $('.trans-lists').hide();
    $('.event-lists').show();
}


const OpenLoginDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.LOGIN_WRAPPER').show();
}

const CloseLoginDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.LOGIN_WRAPPER').hide();
}




const OpenRegisterDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.REGISTER_WRAPPER').show();
}

const CloseRegisterDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.REGISTER_WRAPPER').hide();
}


const ToogleTransactionLists = (val) => {
    $('.transaction-title').removeClass('active')
    $('.transaction-list').hide();

    if (val === 1) {
        $(".deposit-lists").show()
        $(".dep").addClass('active')
    }
    if (val === 2) {
        $(".withdrawal-lists").show()
        $(".wid").addClass('active')
    }

}

let DefaultValue = 50_269_923_500.01
setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 50);
    $('#odometer').html(DefaultValue)
}, 4000)