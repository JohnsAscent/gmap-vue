(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{317:function(t,e,o){"use strict";o.r(e);var i={name:"eg-status-bar-information",data:()=>({center:{lat:47.376332,lng:8.547511},statusText:"",markers:[{position:[47.376332,8.547511],text:"Hauptgebäude der ETH Zürich"},{position:[47.374592,8.548867],text:"Hauptgebäude der Universität Zürich"}]})},s=o(15),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:15}},[t._l(t.markers,(function(o){return e("gmap-marker",{attrs:{position:{lat:o.position[0],lng:o.position[1]},clickable:!0,draggable:!0},on:{click:function(e){t.center=o.position},mouseover:function(e){t.statusText=o.text},mouseout:function(e){t.statusText=null}}})})),t._v(" "),e("div",{attrs:{slot:"visible"},slot:"visible"},[e("div",{staticStyle:{bottom:"0",left:"0","background-color":"#0000FF",color:"white",position:"absolute","z-index":"100"}},[t._v("\n        "+t._s(t.statusText)+"\n      ")])])],2)],1)}),[function(){var t=this._self._c;return t("p",[this._v("You should see a "),t("strong",[this._v("blue status bar in the left bottom corner")]),this._v(", with a description of the place at the position of the marker when you move your mouse over the markers.")])}],!1,null,null,null);e.default=n.exports}}]);