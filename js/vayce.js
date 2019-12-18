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
      borderRadius: '5px',
      fullMenu: false,
      menuWidth: "250px",

      // Forms Funcionaties

      mode: 'menu', // formulary - To initialize Vayce in Formulary mode
      f_width: "100%", // Formulary width
      f_in_width: "100%", // Formulary input width
      f_in_height: "35px", // Formulary input Height
      f_in_bgColor: "white", // Formulary Input (input (Type text, tel, password, email) and textareas) background color
      f_in_fgColor: '#555555', // Same as above but to change the foreground color
      f_in_textarea_width: '100%', // Define the textarea width
      f_in_textarea_resizable: true, // Resize it?
      f_in_textarea_max_resizable_height: '160px', // If true, define the max height
      f_in_textarea_max_resizable_width: '100%', // If true, define the max width
      f_in_textarea_min_resizable_height: '110px', // If true, define the min height
      f_in_textarea_min_resizable_width: '100%', // If true, define the min width
      f_in_transition: false, // Allow or not smooth transitions to colors
      f_in_transition_time: "0.3s", // Controls the transition time
      f_in_transition_mode: 'ease', // ease, linear, ease-in, ease-out, ease-in-out ...
      f_in_focus: true, // Alow or not change when in focus (Recommend to use to make forms more accessible)
      f_in_focus_mode: "inset-shadow", // shadow (outset, inset), border, backgorund
      f_in_focus_color: 'rgba(0,0,0,.05'), // Define the color (border, background or the shadow) when in focus
      f_submit_bgColor: 'green', // Define the color to use in submit button
      f_submit_fgColor: 'white', // Define the foreground color to use in submit button
      f_use_label: true, // Do you want?
      f_label_transition_mode: 'slidingUp', // fadingAway, slidingUp, boring
      f_label_fgColor: '#555555', // Define the foreground Color of the label
      f_label_bgColor: 'white' // Define the Background Color of the label 

    }

    var settings = $.extend(defaults, options);

    var $menu = this;

    return $menu.each(function(settings){


      if(defaults.fullMenu){
        $menu.attr('style', "width: fit-content; width: -moz-fit-content;").find("nav").attr('style', "background-color:" + defaults.bgColor + "; width: 100%; position: absolute; margin-top: "+defaults.topSpace+"; right: 0; top: 0; border-radius: " + defaults.borderRadius + ";").hide().find('ul').attr('style', "list-style: none;  width: 100%;");
      } else {
        $menu.attr('style', "position: relative; width: fit-content; width: -moz-fit-content;").find("nav").attr('style', "background-color:" + defaults.bgColor + "; width: fit-content; width: -moz-fit-content; position: absolute; margin-top: "+defaults.topSpace+"; right: 0; top: 0; border-radius: " + defaults.borderRadius + ";").hide();
        if(defaults.menuWidth != "250px"){
          $menu.find('nav').find('ul').attr('style', "list-style: none;  width: "+defaults.menuWidth+";");
        } else {
            $menu.find('nav').find('ul').attr('style', "list-style: none;  max-width: 250px; width: max-content; width: -moz-max-content");
        }
      }

      $menu.find('nav').find('ul').find('li').css({
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
        $menu.find('nav > ul > li > img, nav > ul > li > a img').css({
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
