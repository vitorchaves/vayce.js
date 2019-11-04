(function($){
  $.fn.vayce = function(options){
    var defaults = {
      bgColor: "#34495e",
      fgColor: "#eee",
      alignment: 'right',
      useDivider: true,
      dividerColor: "#546f8a",
      useImages: true,
      imageWidth: '15px',
      menuColor: "gray",
      menuActive: "#e67e22",
      topSpace: '40px',
      itemsPadding: '9px 25px',
      controller: '▼',
      borderRadius: '5px'
    }

    var settings = $.extend(defaults, options);

    var $menu = this;

    return $menu.each(function(settings){
      $menu.attr('style', "position: relative; width: fit-content; width: -moz-fit-content;").find("nav").attr('style', "background-color:" + defaults.bgColor + "; width: fit-content; width: -moz-fit-content; position: absolute; margin-top: "+defaults.topSpace+"; right: 0; top: 0; borderRadius: " + defaults.borderRadius}).hide().find('ul').attr('style', "list-style: none;  max-width: 250px; width: max-content; width: -moz-max-content").find('li').css({
        padding: defaults.itemsPadding,
        color: defaults.fgColor,
        cursor: 'pointer'
      }).find('a').css({
        cursor: 'pointer',
        color: 'inherit',
        textDecoration: 'none',
        backgroundColor: 'inherit',
        fontFamily: 'inherit'
      });

      if(defaults.alignment == 'left'){
        $menu.find("nav").css({
          right: 'none',
          left: 0
        });
      }

      $menu.find('nav > ul > li.sub-me').click(function(e){
        if(e.target.classList == "sub-me actived"){
          $(this).removeClass('actived').children('ul').stop().slideUp('fast');
          $(this).children('.controller-vayce').css({
            transform: 'rotate(0deg)',
            transition: 'linear transform .2s'
          });
        } else if(e.target.classList == "sub-me"){
          $(this).addClass('actived').children('ul').stop().slideDown('fast');
          $(this).children('.controller-vayce').css({
            transform: 'rotate(180deg)',
            transition: 'linear transform .2s'
          });
        }
      }).children('ul').before("<div class='controller-vayce' style='float: right'>&nbsp;" + defaults.controller +"&nbsp;</div>").css({
        backgroundColor: "rgba(0,0,0,.03)",
        marginTop: '10px',
        minWidth: '100%',
      }).hide().children('li').css({
        padding: '5px 7px'
      });

      if(defaults.useDivider){
        $menu.find('nav ul li').css({
          borderBottom: 'solid 1px ' + defaults.dividerColor
        });

        $menu.find('nav ul li:last-child, nav ul li.sub-me ul li').css({
          border: 'none'
        })
      }

      if(defaults.useImages){
        $menu.find('nav > ul > li img').css({
          marginRight: '10px',
          width: defaults.imageWidth
        });
      } else {
        $menu.find('nav > ul > li img').remove();
      }

      $menu.prepend("<div class='menu-bars'><div></div><div></div><div></div>");
      $menu.find('.menu-bars').click(function(){
        if(!$(this).hasClass('y-actived')){
          $(this).addClass('y-actived').children('div').css('backgroundColor', defaults.menuActive);
          $menu.find('nav').stop().slideDown('fast');
        } else {
          $(this).removeClass('y-actived').children('div').css('backgroundColor', defaults.menuColor);
          $menu.find('nav').stop().slideUp('fast');
        }
      }).find('div').css({
        backgroundColor: defaults.menuColor,
        width: '25px',
        marginTop: '5px',
        height: '3px'
      }).parent().css({
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transition: 'backgroundColor linear .2s'
      });
    });
  }
})(jQuery)
