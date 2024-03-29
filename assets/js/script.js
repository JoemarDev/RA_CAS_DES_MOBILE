let isLogin = true;


const Init = () => {
    if (isLogin) {
        $('.guess-container').hide()
        $('.member-container').show()
    } else {
        $('.guess-container').show()
        $('.member-container').hide()
    }
}


const CloseAllDialog = () => {
    $('.GAME_DIALOG').hide();
    $('.LOGIN_WRAPPER').hide();
    $('.REGISTER_WRAPPER').hide();
    $('.NOTE_DIALOG').hide();
    $('.INQUIRY_DIALOG').hide();
    $('.NOTICE_DIALOG').hide();
    $('.EVENT_DIALOG').hide();
    $('.CHANGE_PASSWORD_DIALOG').hide();
    $('.HISTORY_DIALOG').hide();
    $('.COUPON_DIALOG').hide();
    $('.FRIEND_DIALOG').hide();
    $('.BONUS_DIALOG').hide();
    $('.MONEY_MOVE_DIALOG').hide();
    $('.WITHDRAWAL_DIGALOG').hide();
    $('.DEPOSIT_DIGALOG').hide();
    $('body').css("overflowY", "scroll");
}

const OpenChangePasswordDialog = () => {
    $('.CHANGE_PASSWORD_DIALOG').show();
}

const OpenHistoryDialog = () => {
    $('.HISTORY_DIALOG').show();
}

const OpenCouponDialog = () => {
    $('.COUPON_DIALOG').show();
}

const OpenFriendDialog = () => {
    $('.FRIEND_DIALOG').show();
}

const OpenBonusDialog = () => {
    $('.BONUS_DIALOG').show();
}

const OpenAccountDialog = () => {
    $('.ACCOUNT_DIALOG').show();
}

const OpenDepositDialog = () => {
    $('.DEPOSIT_DIGALOG').show();
}

const OpenWithdrawalDialog = () => {
    $('.WITHDRAWAL_DIGALOG').show();
}

const OpenMoneyMoveDialog = () => {
    $('.MONEY_MOVE_DIALOG').show();
}

const CloseAccountDialog = () => {
    CloseAllDialog();
    $('.ACCOUNT_DIALOG').hide();
}

const GoToDepositPage = () => {
    window.location.href = "deposit.html"
}

const GoToNoticePage = () => {
    window.location.href = "notice.html";
}

const GoToWithdrawalPage = () => {
    window.location.href = "withdraw.html"
}

const GoToPointHistory = () => {
    window.location.href = "point-history.html"
}

const GoToBettingHistory = () => {
    window.location.href = "betting-history.html"
}

const OpenEventContent = () => {
    $('.event_content').toggle();
}

const OpenInquiryDialog = () => {
    window.location.href = 'customer-service.html'
}

const WriteInquiry = () => {
    $('.write_inquiry').show();
    $('.inquiry_lists').hide();
}

const OpenNoteDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.NOTE_DIALOG').show()
}


const MemberLogin = () => {
    isLogin = true;
    Init();
    CloseAllDialog()
}

const MemberLogout = () => {
    isLogin = false;
    Init();
    CloseAllDialog()
    CloseAccountDialog()
    CloseAccountBar();
}


let currentActive = null;
const ToogleGameTab = (val, elem) => {
    // $('body').css("overflowY", "hidden");
    $('.par1').css('opacity', 1);
    $('.par2').css('opacity', 1);

    $('.gm-parent').hide();
    if (currentActive === val) return currentActive = null;
    currentActive = val;
    if (val === 1) {
        $('.par2').css('opacity', 0.5);
        $(".live-box").show()
    }
    if (val === 2) {
        $('.par1').css('opacity', 0.5);
        $(".slot-box").show()
    }
    // if (val === 3) $(".sports-box").show()
    // if (val === 4) $(".arcade-box").show()

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

let DefaultValue = 5_026_992_350

setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 100 + 50);
    $('#odometer').html(DefaultValue)
}, 4000)

Init()


const OpenSidebar = () => {
    $('body').css('overflow', 'hidden');
    $('.sidebar').css('left', '0');
}

const CloseSidebar = () => {
    $('body').css('overflowY', 'scroll');
    $('.sidebar').css('left', '-100%')
}


const OpenAccountBar = () => {
    $('body').css('overflow', 'hidden');
    $('.account-bar').css('right', '0');
}

const CloseAccountBar = () => {
    $('body').css('overflowY', 'scroll');
    $('.account-bar').css('right', '-100%')
}

$('.logo-container').click(() => {
    GoToHome();
});


$('.casino-lists-menu').click(function () {
    $(this).addClass("border-theme-3")
    $(this).addClass("text-theme-3")
    $(this).removeClass("border-theme-4")
    $('.slot-lists-menu').addClass("border-theme-4")
    $('.slot-lists-menu').removeClass("border-theme-3")
    $('.slot-lists-menu').removeClass("text-theme-3")
    $('.casino-sidebar-content').show();
    $('.slot-sidebar-content').hide();
})

$('.slot-lists-menu').click(function () {
    $(this).addClass("border-theme-3")
    $(this).addClass("text-theme-3")
    $(this).removeClass("border-theme-4")
    $('.casino-lists-menu').addClass("border-theme-4")
    $('.casino-lists-menu').removeClass("border-theme-3")
    $('.casino-lists-menu').removeClass("text-theme-3")
    $('.casino-sidebar-content').hide();
    $('.slot-sidebar-content').show();
})

const GoToCasino = () => window.location.href = "casino.html";

const GoToHome = () => window.location.href = "index.html";

const GotToSlot = () => window.location.href = "slot.html";

var isOpen = false;

const PagePopupHandler = () => {
    if (isOpen) {
        isOpen = false;
        $('body').css('overflowY', 'scroll');
    } else {
        isOpen = true;
        $('body').css('overflowY', 'hidden')
    }

    $('.money-transfer').toggle();
}

const PageChildHandler = (elem, type) => {
    $('.app-child-tabs').removeClass('active')
    $(elem).addClass('active');

    if (type == 1) {
        $('.popup-child-content-1').show();
        $('.popup-child-content-2').hide();
    } if (type ==
        2) {
        $('.popup-child-content-1').hide();
        $('.popup-child-content-2').show();
    }
}


const ShowChildMenu = (elem) => {
    $(elem).find('.menu-child-lists').toggle();
}

$('.memo-table td').click(function () {
    $(this).parent().next().toggle();
});

