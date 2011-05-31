const St = imports.gi.St;

const Main = imports.ui.main;

function main() {
    Main.panel._centerBox.remove_actor(Main.panel._dateMenu.actor);
    let children = Main.panel._leftBox.get_children();
    Main.panel._leftBox.insert_actor(Main.panel._dateMenu.actor, children.length-1);
}
