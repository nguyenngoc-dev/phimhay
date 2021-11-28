function handleClick() {
    const account = $('.header-right-sub-menu-list');
    const accountBtn = $('.account-btn');
    const headerMenuItem = $('.header-menu-item');
    const headerSubMenu = $('.header-sub-menu-list');
    const menuBtn = $('.header-menu-btn');
    const navOverlay = $('.nav-overlay');
    const headerMenu = $(' .header-menu-list');
    const app = document.querySelector('.app')
    const searchBtn = $('.header-right-search-btn')
    const searchIcon = $('.header-right-search-btn .search-icon');
    const closeIcon = $('.header-right-search-btn .close-search');
    const searchInput = $('.header-center-link.search')
    console.log(searchInput)

    accountBtn.click(() => {
        account.toggleClass('active')
    })

    window.onresize = function () {

        if(app.clientWidth > 1200) {
            $(headerMenuItem).removeClass('enable-click')
           
            $(headerMenu).removeClass('transform')
            $(navOverlay).css({
                transition:'all linear 0.3s',
                display:'none'
            })
            $(headerMenu).css({
                transition:'unset'
            })
        }
        // else {
        //     $(headerMenuItem).addClass('enable-click');
        //     var isEnableClick = $(headerMenuItem).hasClass('enable-click')
        //      headerMenuItem.unbind('mouseenter mouseleave');
        //     if( isEnableClick)
        //     {  
        //         headerMenuItem.each(( index,item) => {
                    
        //             $(item).click(function(e){
        //                 e.preventDefault();
                       
        //                 var subMenu = headerSubMenu[index]
        //                 $(subMenu).toggleClass('show')
        //             })
        //         });
        //     }
        // }
    }
    
   
      
        // headerMenuItem.each(( index,item) => {
      
        //     $(item).click(function(e){
        //         e.preventDefault();
        //         var subMenu = headerSubMenu[index]
        //         $(subMenu).toggleClass('show')
        //     })
        // });
          // đóng mở menu ở mobile
     
        $(menuBtn).click(function () {
            $(headerMenu).css({
            transition:'all linear 0.3s'
            })
            $(headerMenu).addClass('transform')
            $(navOverlay).css({
                transition:'all linear 0.3s',
                display:'block'
            })
        })

        $(navOverlay).click(function() {
            $(headerMenu).css({
                transition:'all linear 0.3s'
            })
            $(headerMenu).removeClass('transform')
            $(navOverlay).css({
                transition:'all linear 0.3s',
                display:'none'
            })
        })
    //handle click search btn
    searchIcon.click(function() {
        searchIcon.toggleClass('hide-search-icon');
        closeIcon.toggleClass('close-search-show');
        searchInput.addClass('show');
        
    })
    closeIcon.click(function() {
        searchIcon.toggleClass('hide-search-icon');
        closeIcon.toggleClass('close-search-show');
        searchInput.removeClass('show')
    })
    //handle event enter key of search input
    searchInput.on('keypress',function(e) {
        if(e.which == 13) {
            
            searchInput.removeClass('show')
            searchIcon.removeClass('hide-search-icon');
            closeIcon.removeClass('close-search-show');
            searchInput.value = ''
        }
    });
    
 
  

   
    
}
handleClick()