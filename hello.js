tabris.ui.set("background","red");

var page = tabris.create("Page", {
  title: "City Jungle",
  topLevel: true
});

var drawer = tabris.create("Drawer");

tabris.create("PageSelector", {
  layoutData: {left: 0, top: 200, right: 0, bottom: 0}
}).appendTo(drawer);

tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
    this.set("center", [-33.867, 151.206]);
    this.set("zoom", 13);
}).appendTo(page);

page.open();
