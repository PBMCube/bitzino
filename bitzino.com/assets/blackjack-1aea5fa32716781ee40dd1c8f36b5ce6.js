$(document).ready(function(){Table.setup("blackjack")}),function(e,t,n){function i(e){for(var n,i=0;n=e[i];i++)n.each(function(e,n){n=t(n),Z.enqueue(function(){n.removeClass("undealt",r,null,function(){o(n),n.parents(".card-holder").find(".card").not(".undealt").size()>5&&n.parents(".card-holder").addClass("many",r),Z.dequeue()})}),n.attr("class").indexOf("unflipped")!=-1&&s()})}function s(){t(".unflipped").each(function(e,n){Z.enqueue(function(){n=t(n),n.animate({width:0,marginLeft:30},r/2,function(){t(this).find(".back").hide()}).animate({width:60,marginLeft:0},r/2,function(){n.parents(".hand").find(".value").removeClass("hidden"),Z.dequeue()})}),t(this).removeClass("unflipped")})}function o(e){var t=e.parents(".hand"),n=t.attr("data-undealt_values").split(";");t.find(".value").html(n.shift()),t.attr("data-undealt_values",n.join(";"))}var r;e.animate=function(n,o,u,a,f){r=f,o?(i([t("#player .undealt").first(),t("#dealer .undealt").first(),t("#player .undealt").slice(1),t("#dealer .undealt").slice(1)]),s()):(i([t("#player .undealt")]),s(),i([t("#dealer .undealt")])),Z.enqueue(function(){t(".status").add(".value").show(0),t(".active .active-indicator").fadeIn(900),e.animateGeneral(),Z.dequeue()}),Z.startDequeue()}}(window.Table=window.Table||{},jQuery);