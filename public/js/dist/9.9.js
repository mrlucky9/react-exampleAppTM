webpackJsonp([9,18],{

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(dust) {(function(){dust.register("locationVideo",body_0);function body_0(chk,ctx){return chk.write("<div class=\"container location-video\"><div class=\"row\"><div role=\"main\">").section(ctx.getPath(false, ["data","video"]),ctx,{"block":body_1},null).write("<h3 class=\"padding-10\">Comments</h3><ul class=\"comments-list list-unstyled\">").section(ctx.getPath(false, ["data","comments"]),ctx,{"block":body_3},null).write("</ul></div></div></div>");}function body_1(chk,ctx){return chk.write("<h1 class=\"padding-10\">").reference(ctx.get(["title"], false),ctx,"h").write("</h1><section class=\"video-container\"><video class=\"center-block embed-responsive-item\" src=\"").reference(ctx.getPath(false, ["video","url"]),ctx,"h").write("\" preload=\"auto\" controls poster=\"").reference(ctx.getPath(false, ["thumbnail","url"]),ctx,"h").write("\"></video></section><small class=\"center-block byline clearfix\"><a class=\"pull-right creator\" target=\"_blank\" href=\"").reference(ctx.getPath(false, ["creator","_webUrl"]),ctx,"h").write("\"><img src=\"").reference(ctx.getPath(false, ["creator","avatar","url"]),ctx,"h").write("\" alt=\"").reference(ctx.getPath(false, ["creator","about"]),ctx,"h").write("\" title=\"").reference(ctx.getPath(false, ["creator","about"]),ctx,"h").write("\"/></a><p class=\"pull-right created\">Shot ").reference(ctx.get(["createdAtRelative"], false),ctx,"h").write(" ").exists(ctx.get(["venue"], false),ctx,{"block":body_2},null).write(" by</p><p>").reference(ctx.getPath(false, ["stats","views"]),ctx,"h").write(" views</p></small><p class=\"video-intro\">").reference(ctx.get(["about"], false),ctx,"h").write("</p>");}function body_2(chk,ctx){return chk.write("at <a target=\"_blank\" href=\"").reference(ctx.getPath(false, ["venue","_webUrl"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["venue","name"]),ctx,"h").write("</a>");}function body_3(chk,ctx){return chk.write("<li><blockquote><p>").reference(ctx.get(["text"], false),ctx,"h").write("</p><footer><a href=\"").reference(ctx.getPath(false, ["author","_webUrl"]),ctx,"h").write("\" target=\"_blank\">@").reference(ctx.getPath(false, ["author","username"]),ctx,"h").write("</a></footer></blockquote></li>");}return body_0;})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGVtcGxhdGVzL2xvY2F0aW9uVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBWSxzQ0FBc0MseUJBQXlCLHFKQUFxSixlQUFlLHNKQUFzSixlQUFlLHlDQUF5Qyx5QkFBeUIscThCQUFxOEIsZUFBZSxxTUFBcU0seUJBQXlCLG1NQUFtTSx5QkFBeUIsdVRBQXVULGVBQWUsSSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2R1c3QucmVnaXN0ZXIoXCJsb2NhdGlvblZpZGVvXCIsYm9keV8wKTtmdW5jdGlvbiBib2R5XzAoY2hrLGN0eCl7cmV0dXJuIGNoay53cml0ZShcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBsb2NhdGlvbi12aWRlb1xcXCI+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IHJvbGU9XFxcIm1haW5cXFwiPlwiKS5zZWN0aW9uKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJkYXRhXCIsXCJ2aWRlb1wiXSksY3R4LHtcImJsb2NrXCI6Ym9keV8xfSxudWxsKS53cml0ZShcIjxoMyBjbGFzcz1cXFwicGFkZGluZy0xMFxcXCI+Q29tbWVudHM8L2gzPjx1bCBjbGFzcz1cXFwiY29tbWVudHMtbGlzdCBsaXN0LXVuc3R5bGVkXFxcIj5cIikuc2VjdGlvbihjdHguZ2V0UGF0aChmYWxzZSwgW1wiZGF0YVwiLFwiY29tbWVudHNcIl0pLGN0eCx7XCJibG9ja1wiOmJvZHlfM30sbnVsbCkud3JpdGUoXCI8L3VsPjwvZGl2PjwvZGl2PjwvZGl2PlwiKTt9ZnVuY3Rpb24gYm9keV8xKGNoayxjdHgpe3JldHVybiBjaGsud3JpdGUoXCI8aDEgY2xhc3M9XFxcInBhZGRpbmctMTBcXFwiPlwiKS5yZWZlcmVuY2UoY3R4LmdldChbXCJ0aXRsZVwiXSwgZmFsc2UpLGN0eCxcImhcIikud3JpdGUoXCI8L2gxPjxzZWN0aW9uIGNsYXNzPVxcXCJ2aWRlby1jb250YWluZXJcXFwiPjx2aWRlbyBjbGFzcz1cXFwiY2VudGVyLWJsb2NrIGVtYmVkLXJlc3BvbnNpdmUtaXRlbVxcXCIgc3JjPVxcXCJcIikucmVmZXJlbmNlKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJ2aWRlb1wiLFwidXJsXCJdKSxjdHgsXCJoXCIpLndyaXRlKFwiXFxcIiBwcmVsb2FkPVxcXCJhdXRvXFxcIiBjb250cm9scyBwb3N0ZXI9XFxcIlwiKS5yZWZlcmVuY2UoY3R4LmdldFBhdGgoZmFsc2UsIFtcInRodW1ibmFpbFwiLFwidXJsXCJdKSxjdHgsXCJoXCIpLndyaXRlKFwiXFxcIj48L3ZpZGVvPjwvc2VjdGlvbj48c21hbGwgY2xhc3M9XFxcImNlbnRlci1ibG9jayBieWxpbmUgY2xlYXJmaXhcXFwiPjxhIGNsYXNzPVxcXCJwdWxsLXJpZ2h0IGNyZWF0b3JcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJcIikucmVmZXJlbmNlKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJjcmVhdG9yXCIsXCJfd2ViVXJsXCJdKSxjdHgsXCJoXCIpLndyaXRlKFwiXFxcIj48aW1nIHNyYz1cXFwiXCIpLnJlZmVyZW5jZShjdHguZ2V0UGF0aChmYWxzZSwgW1wiY3JlYXRvclwiLFwiYXZhdGFyXCIsXCJ1cmxcIl0pLGN0eCxcImhcIikud3JpdGUoXCJcXFwiIGFsdD1cXFwiXCIpLnJlZmVyZW5jZShjdHguZ2V0UGF0aChmYWxzZSwgW1wiY3JlYXRvclwiLFwiYWJvdXRcIl0pLGN0eCxcImhcIikud3JpdGUoXCJcXFwiIHRpdGxlPVxcXCJcIikucmVmZXJlbmNlKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJjcmVhdG9yXCIsXCJhYm91dFwiXSksY3R4LFwiaFwiKS53cml0ZShcIlxcXCIvPjwvYT48cCBjbGFzcz1cXFwicHVsbC1yaWdodCBjcmVhdGVkXFxcIj5TaG90IFwiKS5yZWZlcmVuY2UoY3R4LmdldChbXCJjcmVhdGVkQXRSZWxhdGl2ZVwiXSwgZmFsc2UpLGN0eCxcImhcIikud3JpdGUoXCIgXCIpLmV4aXN0cyhjdHguZ2V0KFtcInZlbnVlXCJdLCBmYWxzZSksY3R4LHtcImJsb2NrXCI6Ym9keV8yfSxudWxsKS53cml0ZShcIiBieTwvcD48cD5cIikucmVmZXJlbmNlKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJzdGF0c1wiLFwidmlld3NcIl0pLGN0eCxcImhcIikud3JpdGUoXCIgdmlld3M8L3A+PC9zbWFsbD48cCBjbGFzcz1cXFwidmlkZW8taW50cm9cXFwiPlwiKS5yZWZlcmVuY2UoY3R4LmdldChbXCJhYm91dFwiXSwgZmFsc2UpLGN0eCxcImhcIikud3JpdGUoXCI8L3A+XCIpO31mdW5jdGlvbiBib2R5XzIoY2hrLGN0eCl7cmV0dXJuIGNoay53cml0ZShcImF0IDxhIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJcIikucmVmZXJlbmNlKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJ2ZW51ZVwiLFwiX3dlYlVybFwiXSksY3R4LFwiaFwiKS53cml0ZShcIlxcXCI+XCIpLnJlZmVyZW5jZShjdHguZ2V0UGF0aChmYWxzZSwgW1widmVudWVcIixcIm5hbWVcIl0pLGN0eCxcImhcIikud3JpdGUoXCI8L2E+XCIpO31mdW5jdGlvbiBib2R5XzMoY2hrLGN0eCl7cmV0dXJuIGNoay53cml0ZShcIjxsaT48YmxvY2txdW90ZT48cD5cIikucmVmZXJlbmNlKGN0eC5nZXQoW1widGV4dFwiXSwgZmFsc2UpLGN0eCxcImhcIikud3JpdGUoXCI8L3A+PGZvb3Rlcj48YSBocmVmPVxcXCJcIikucmVmZXJlbmNlKGN0eC5nZXRQYXRoKGZhbHNlLCBbXCJhdXRob3JcIixcIl93ZWJVcmxcIl0pLGN0eCxcImhcIikud3JpdGUoXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5AXCIpLnJlZmVyZW5jZShjdHguZ2V0UGF0aChmYWxzZSwgW1wiYXV0aG9yXCIsXCJ1c2VybmFtZVwiXSksY3R4LFwiaFwiKS53cml0ZShcIjwvYT48L2Zvb3Rlcj48L2Jsb2NrcXVvdGU+PC9saT5cIik7fXJldHVybiBib2R5XzA7fSkoKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL3RlbXBsYXRlcy9sb2NhdGlvblZpZGVvLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gOVxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6IjkuOS5qcyJ9