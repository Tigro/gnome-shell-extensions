const Panel = imports.ui.panel;
const StatusIconDispatcher = imports.ui.statusIconDispatcher;


function main() {

    // add the notification(s) you want display on the top bar
    // - one per line. Use the english text string displayed when
    // hovering your mouse over the bottom right notification area

    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['gajim.py'] = 'gajim.py';  
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['empathy'] = 'empathy';
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['pidgin'] = 'pidgin';
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['abrt-applet'] = 'abrt-applet';
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['seapplet'] = 'seapplet';
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['liferea'] = 'liferea';
}
