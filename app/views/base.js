dojo.provide('app.views.base');

dojo.require('dbp.Router');

// Menu Bar
dojo.require('dijit.Menu');
dojo.require('dijit.MenuBar');
dojo.require('dijit.MenuItem');
dojo.require('dijit.MenuBarItem');
dojo.require('dijit.PopupMenuBarItem');

dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.TabContainer');
dojo.require('dijit.layout.BorderContainer');

// Controller 
dojo.require('app.controllers.BaseController');

dojo.ready(function() {
    // Initialize menu bar
    var menuBar = new dijit.MenuBar({
        region: 'top'
    });
    var fileSubMenu = new dijit.Menu({});
    fileSubMenu.addChild(new dijit.MenuItem({ 
        id: 'mn_konfigurasi',
        label: 'Konfigurasi' 
    }));
    fileSubMenu.addChild(new dijit.MenuItem({ 
        id: 'mn_logout',
        label: 'Logout' 
    }));
    
    var masterSubMenu = new dijit.Menu({});
    masterSubMenu.addChild(new dijit.MenuItem({ 
        id: 'mn_entri_pegawai',
        label: 'Entri Pegawai' 
    }));
    masterSubMenu.addChild(new dijit.MenuItem({ 
        id: 'mn_entri_harilibur',
        label: 'Entri Hari Libur' 
    }));
    masterSubMenu.addChild(new dijit.MenuItem({ 
        id: 'mn_master_segment',
        label: 'Master Segment' 
    }));
    
    menuBar.addChild(new dijit.PopupMenuBarItem({
        label: 'File',
        popup: fileSubMenu
    }));
    
    menuBar.addChild(new dijit.PopupMenuBarItem({
        label: 'Master',
        popup: masterSubMenu
    }));
    
    var mainPanel = new dijit.layout.TabContainer({
        id: 'mainPanel',
        region: 'center'
    });
    
    mainPanel.addChild(new dijit.layout.ContentPane({
        title: 'Sample Tab',
        content: 'Test',
        closable: true
    }));
    
    // main container
    var mainContainer = new dijit.layout.BorderContainer({
        id: 'main',
        style: 'height: 100%'
    });
    mainContainer.addChild(menuBar);
    mainContainer.addChild(mainPanel);
    mainContainer.addChild(new dijit.layout.ContentPane({
        align: 'right',
        region: 'bottom',
        style: 'float:right;height:20px',
        content: 'DojoMail v1.2 (demo only)'
    }));
    mainContainer.placeAt('appContainer');
    mainContainer.startup();
    
    var baseController = new app.controllers.BaseController();
    baseController.init();
});
