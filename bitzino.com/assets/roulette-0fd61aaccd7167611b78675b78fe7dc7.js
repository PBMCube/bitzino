$(document).ready(function(){Table.setup("roulette")}),function(e,t,n){function d(e){var n=e.hasClass("active");t("#board .info").hide(),t(".w .target").removeClass("active"),t("#table").unbind("click",v),e.parents(".w").find(".info").show(),e.addClass("active"),setTimeout(function(){t("#table").bind("click",v)},0);var r=e.parents(".w").attr("data-name"),s=e.parents(".w").find("input[type=text]"),o=E(r);s.attr("data-max",o),e.parents(".w").find(".max .value").text(o);if(n||!i[r]){var u=parseInt(t("#roulette_table_bet").val(),10);m(e,Math.min(o,(i[r]||0)+u))}s.val(i[r]),navigator.userAgent.search(/ipad|ipod|iphone|android/i)==-1&&s.select()}function v(){t("#board .info").hide(),t(".w .target").removeClass("active"),t("#table").unbind("click",v)}function m(n,r){t(".visbet.collected").removeClass("collected active").text(""),t(".spun").removeClass("spun");var s=n.parents(".w").attr("data-name");i[s]=r;var u=n.parents(".w").find(".visbet");u.stop(!1,!0),r>0?(u.show(),u.addClass("active"),u.text(r),g(u,r)):(u.removeClass("active"),u.text(""));var a=0;for(key in i)a+=i[key];e.setStake(o-a),a>0?t("#bet .info").text("Current bet: "+a):t("#bet .info").text(""),y(a>0)}function g(e,t){var n=(t+"").length;e.removeClass("small smaller smallest"),n>5?e.addClass("smallest"):n>4?e.addClass("smaller"):n>3&&e.addClass("small")}function y(e){t("#bet").find("input[type=submit]").attr("value","Spin");var n=t("#repeat").attr("data-disabled")=="true";if(e){t("#clear,#bet").find("input[type=submit]").removeAttr("disabled"),t("#clear,#bet").removeClass("disabled"),t("#repeat input[type=submit]").attr("disabled","disabled"),t("#repeat").addClass("disabled");var r=0;for(key in i)r+=i[key];r*2<=o?(t("#double").find("input[type=submit]").removeAttr("disabled"),t("#double").removeClass("disabled")):(t("#double").find("input[type=submit]").attr("disabled","disabled"),t("#double").addClass("disabled"))}else t("#clear,#double,#bet").find("input[type=submit]").attr("disabled","disabled"),t("#clear,#double,#bet").addClass("disabled"),n||(t("#repeat input[type=submit]").removeAttr("disabled"),t("#repeat").removeClass("disabled"))}function b(e){var t=[];if(e.indexOf("-")==-1){t=e.split(",");for(var n=0;n<t.length;n++)t[n]=parseInt(t[n],10)}else{var r=parseInt(e.split("-")[0],10),i=parseInt(e.split("-")[1],10);for(var n=r;n<=i;n++)t[n-r]=n}return t}function w(e){return isNaN(parseInt(e[0],10))||e=="1-18"||e=="19-36"||e=="1-12"||e=="13-24"||e=="25-36"}function E(e){var t=0;for(key in i)t+=i[key];var n=Infinity;if(!w(e)){var r=b(e),s=r.length,f=[];for(var l=0;l<s;l++)f[l]=a;for(key in i)if(key!=e&&!w(key)){var c=b(key),h=c.length;for(var l=0;l<s;l++)for(var p=0;p<h;p++)r[l]==c[p]&&(f[l]-=i[key]/(h*1))}var d=Infinity;for(var l=0,v;l<s;l++)v=f[l],v<d&&(d=v);n=Math.floor(d*s)}return Math.min(u-t+(i[e]||0),Math.min(o+(i[e]||0)-t,n))}function S(){s={};var e=t("#board").attr("data-prior_wager_list"),n=e.split(";");for(var r=0,i;i=n[r];r++){var o=i.split(":");s[o[0]]=parseInt(o[1],10)}}function x(){t("#board .info").click(function(){return!1}),t(".w .target").click(function(){d(t(this))}),t(".w input[type=text]").bind("change keydown",function(){var e=t(this);window.setTimeout(function(){Z.checkAmount(e,0),m(e,parseInt(e.val(),10))},0)}),t(".w input[type=text]").keydown(Z.numberKeydownHandler),t(".w input[type=text]").keydown(function(e){e.which==13&&v()}),t(".w .info .heading,.w .info .label,.w .info .arrow").click(v),t(".w .clear").click(function(){v(),t(this).parents(".w").find("input[type=text]").val(0),m(t(this),0)}),t(".w .double").click(function(){var e=t(this).parents(".w").find("input[type=text]");Z.multiplyAmount(e,2),m(t(this),parseInt(e.val(),10))}),t(".w .plus_1").click(function(){var e=t(this).parents(".w").find("input[type=text]");Z.addAmount(e,1),m(t(this),parseInt(e.val(),10))}),t("#bet .info").click(function(){t("#bet form").submit()}),t("#clear").click(function(){i={},t(".visbet").text(""),t(".visbet").removeClass("active"),e.setStake(o),y(!1),t("#bet .info").text("")}),t("#repeat").click(function(){if(!t("#repeat").hasClass("disabled"))for(var e in s)m(t(".w"+e.replace(/,/g,"_")+" .target"),s[e])}),t("#double").click(function(){for(var e in i)maxBet=Math.max(E(e)),m(t(".w"+e.replace(/,/g,"_")+" .target"),Math.min(maxBet,i[e]*2))})}function T(){if(l!=n){var e=50-p[l]*30;while(e>0)e-=1110}var r=(new Date).getTime();window.setTimeout(function(){var i=parseInt(t("#wheel .numbers").css("left"),10)||0,s=.6;if(c<=0){var o=i-e;while(o<0)o+=1110;s=Math.max(1,Math.min(2.5,250/o))}var u=((new Date).getTime()-r)/s*1e3/1110;c<=0&&u+10>o&&(u=o),c-=u/1110,c<0&&t("#wheel .ball").show(),i-=Math.floor(u);while(i<-1110)i+=1110;while(i>0)i-=1110;t("#wheel .numbers").css("left",i),f=i,o==n||o!=u?T():(t("#wheel .ball").show(),Z.dequeue())},0)}function N(){var e=[];for(key in i)i[key]&&e.push(key+":"+i[key]);return e.join(";")}var r,i={},s={},o,u,a,f,l,c,h=[5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10],p=[18,4,24,16,22,0,28,12,34,8,36,32,14,30,6,20,2,26,10,21,5,23,9,35,1,25,17,29,13,11,33,7,19,3,27,15,31];e.animate=function(n,s,h,p,d){o=h,r=d*5/3,u=t("#board").attr("data-max_total_bet"),a=t("#board").attr("data-max_number_bet"),l=parseInt(t("#board").attr("data-spin_number"),10),x(),S(),i={},t("#info .button").each(function(e,n){t(n).hasClass("disabled")||t(n).find("input[type=submit]").removeAttr("disabled")}),s&&(t("#wheel .numbers").css("left",f),T(),Z.enqueue(function(){c=.5})),Z.enqueue(function(){t("#prior_spins .offset").removeClass("offset",r,null,Z.dequeue)},t("#prior_spins .offset").size()),Z.enqueue(function(){t(".spun").addClass("active"),Z.dequeue()}),Z.enqueue(function(){t(".status").fadeIn(r),t(".visbet.lose").delay(150).fadeOut(r*2,Z.dequeue),t(".visbet.win").addClass("collected"),t(".visbet.win").each(function(e,n){var i=t(n),s=i.find(".value"),o=Number(s.text()),u=Number(i.find(".winnings").text());t({value:o}).animate({value:o+u},{duration:r,easing:"swing",step:function(){s.text(Math.ceil(this.value))},complete:function(){var e=Math.ceil(o+u);g(i,e),s.text(e),Z.dequeue()}})}),t(".visbet .winnings").show(),t(".visbet .winnings").addClass("final",r*2)},t(".visbet .winnings").size()+t(".visbet.lose").size()),Z.enqueue(function(){t("#spin_mask").hide(),y(!1),t(".visbet .winnings").fadeOut(r),e.animateGeneral(),Z.dequeue()}),Z.startDequeue()},e.animateOut=function(){t(".status").hide(),t("#roulette_table_wagers").val(N()),t("#roulette_table_bet_per_click").val(t("#roulette_table_bet").val()),t("#wheel .ball").hide(),c=null,l=null,t("#clear,#double,#bet").find("input[type=submit]").attr("disabled","disabled"),t("#clear,#double,#bet").addClass("disabled"),t("#spin_mask").show(),T()}}(window.Table=window.Table||{},jQuery);