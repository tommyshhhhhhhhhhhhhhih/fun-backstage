let menuItem = [
  {
    type: "group",
    icon: 'category',
    active: "true",
    label: "資產管理",
    child: [
      { label: '資產清單', icon: "format_list_bulleted", link: './2.1_assets-list.html' },
      // { label: '資產審核', icon: "grading", link: './CP2.4_assets-review.html' },
      // { label: '註冊資產', icon: "edit", link: './CP2.1_register-assets.html' },
      // { label: '批次註冊', icon: "drive_folder_upload", link: './CP2.2_batch-register.html' },
    ]
  },
  {
    type: "group",
    icon: 'shopping_cart',
    active: "true",
    label: "商品上架管理",
    child: [
      { label: '上架清單', icon: "format_list_bulleted", link: './3.1_selling-list.html' },
      // { label: '上架審核', icon: "grading", link: './selling-review.html' },
      // { label: 'C2C出售清單', icon: "format_list_bulleted", link: './3.3_c2c-selling-list.html' },
    ]
  },
  {
    type: "group",
    icon: 'list_alt',
    active: "true",
    label: "訂單管理",
    child: [
      { label: '訂單總覽', icon: "grading", link: './4.1_order-list.html' },
      // { label: '客服訂單查詢', icon: "support_agent", link: './4.2_cs-order-list.html' },
      // { label: '營收資訊', icon: "paid", link: './4.2_revenue-list.html' },
    ]
  },
  {
    type: "group",
    icon: 'widgets',
    active: "true",
    label: "區塊鏈交易管理",
    child: [
      { label: '上鏈交易清單', icon: "upgrade", link: './5.1_blockchain-out-list.html' },
      { label: '鏈上轉回交易清單', icon: "vertical_align_bottom", link: './5.2_blockchain-return-list.html' },
    ]
  },
  // {
  //   type: "group",
  //   icon: 'confirmation_number',
  //   active: "true",
  //   label: "行銷票券管理",
  //   child: [
  //     { label: '行銷票券清單', icon: "format_list_bulleted", link: './6.1_ticket-list.html' },
  //     { label: '行銷票券使用報表', icon: "feed", link: './6.2_ticket-report-list.html' },
  //   ]
  // },
  {
    type: "group",
    icon: 'storefront',
    active: "true",
    label: "商城管理",
    child: [
      { label: '行銷版位', icon: "campaign", link: './7.1_marketing-list.html' },
      { label: '官方旗艦店', icon: "storefront", link: './7.2_official-list.html' },
      // { label: 'inAPP行銷版位', icon: "phone_iphone", link: './7.3_inapp-marketing-list.html' },
    ]
  }, 
  // {
  //   type: "group",
  //   icon: 'support_agent',
  //   active: "true",
  //   label: "客服管理",
  //   child: [
  //     { label: '訂單查詢', icon: "manage_search", link: './CP6.1_refund.html' },
  //   ]
  // }, 
  {
    type: "group",
    icon: 'account_tree',
    active: "true",
    label: "C2C管理",
    child: [
      { label: '撥款提領紀錄', icon: "paid", link: './8.1_payment-list.html' },
    ]
  },
  {
    type: "group",
    icon: 'group_work',
    active: "true",
    label: "群組類別管理",
    child: [
      // { label: '群組管理', icon: "category", link: './9.1_group-list.html' },
      { label: '類別設定', icon: "auto_awesome_mosaic", link: './9.2_data-type-list.html' },
    ]
  },
  // {
  //   type: "group",
  //   icon: 'person_off',
  //   active: "true",
  //   label: "黑名單管理",
  //   child: [
  //     { label: '訂單查詢', icon: "switch_account", link: './6.1_search-order.html' },
  //   ]
  // },
  {
    type: "group",
    icon: 'groups',
    active: "true",
    label: "供應商管理",
    child: [
      { label: '供應商清單', icon: "format_list_bulleted", link: './11.1_cp-list.html' },
    ]
  }, 
  // {
  //   type: "group",
  //   icon: 'paid',
  //   active: "true",
  //   label: "財務管理",
  //   child: [
  //     { label: '履保額度', icon: "verified_user", link: './5.1_performance-bond.html' },
  //     { label: '銀行帳戶驗證', icon: "account_balance", link: './5.2_bank-account.html' },
  //   ]
  // },
  // {
  //   type: "group",
  //   icon: "settings",
  //   active: "true",
  //   label: "後台設定",
  //   child: [
  //     { label: '個人資訊', icon: "person", link: './CP5.1_account-setting.html' },
  //     { label: '收款帳戶', icon: "account_balance_wallet", link: './CP5.2_receiving-account.html' },
  //     { label: '帳號管理', icon: "manage_accounts", link: './CP5.3_account-manage.html' },
  //   ]
  // },
]



// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("expand");
  $(".overlay").toggleClass("show");
});

$(".overlay").click(function (e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("expand");
  $("#menu-close").toggleClass("show");
  $(".overlay").toggleClass("show");
});

// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover();
})


//  頁面開啟時 menu 標示出目前頁面
function currentPage(str) {
  // if(idx) {
  //   let item = $('#sidebar li').eq(group-1).find('li').eq(idx-1);
  //   $('#sidebar li').eq(group-1).addClass('active')
  //   item.children().addClass('active')
  // } else {
  //   $('#sidebar li').eq(group-1).addClass('active')
  // }
  let item = $('#sidebar a').each(function () {
    let name = this.outerText.split(' ')
    if (name.length < 2) {
      name = this.outerText.split('\n')[1]
    }else {
      name = name[1]
    }
    // console.log(name, str)
    if (name === str) {
      $(this).addClass('active')
      $(this).parents('.menu-group').addClass('active')
      $(this).parents('.menu-group').addClass('active expand')
      $(this).parents('.menu-item').addClass('active')
    }
  });

}



// 產出 sidebar 的選單
for (i = 0; i < menuItem.length; i++) {
  let item = menuItem[i];
  if (menuItem[i].type === "item") {
    $("#sidebar").append(`
      <li class="menu-item animated fadeIn" data-status="${item.active}">
        <a href="${item.link}" class="d-block">
          <span class="material-icons">${item.icon}</span>
          ${item.label}
        </a>
      </li>
    `)
  }
  if (menuItem[i].type === "group") {
    let subItemGroup = "";

    $.each(item.child, function (key, value) {
      subItemGroup += `
      <li>
        <a class="menu-item animated fadeIn" data-status="${value.active}" href="${value.link}">
          <span class="material-icons">${value.icon}</span>
          ${value.label}
        </a>
      </li>
      `
    });
    $("#sidebar").append(`
      <li class="menu-group animated fadeIn" data-status="${item.active}">
        <label>
          <span class="material-icons">${item.icon}</span>
          ${item.label}
          <span class="material-icons folder-arrow">expand_less</span>
        </label>
        <ul>
          ${subItemGroup}
        </ul>
      </li>    
    `)
  }
}




$(".menu-group").each(function (index) {
  $(this).on("click", function () {
    $(this).toggleClass("expand")

  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// 判斷裝置

function whatDevice() {
  var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  var isMobileDevice = false

  for (var i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) {
      isMobileDevice = true

      document.getElementById('main-content').classList.add('mobile')
    }
  }
  // console.log(navigator.userAgent)
  return isMobileDevice
}

whatDevice()

