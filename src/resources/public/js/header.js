function handleClick() {
    const account = $('.header-right-sub-menu-list');
    const accountBtn = $('.account-btn');
    const headerMenuItem = $('.header-menu-item');
    const headerSubMenu = $('.header-sub-menu-list');
    const menuBtn = $('.header-menu-btn');
    const navOverlay = $('.nav-overlay');
    const headerMenu = $(' .header-menu-list');
    const app = document.querySelector('.app')
    

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
    
    if($( window ).innerWidth() < 1200)
    {
      
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
    }
 
  

   
    
}
handleClick()