dojo.provide('app.controllers.BaseController');

dojo.require('app.controllers.master.EntriPegawaiController');
dojo.require('app.controllers.master.EntriHariLiburController');
dojo.require('app.controllers.master.EntriSegmentController');

dojo.declare('app.controllers.BaseController', null, {

    pegawaiController: null,
    HariLiburController: null,
    SegmentController: null,  
      
    init: function() {
        this.pegawaiController = new app.controllers.master.EntriPegawaiController();
        this.HariLiburController = new app.controllers.master.EntriHariLiburController();
        this.SegmentController = new app.controllers.master.EntriSegmentController();
        
        this.startup();
    },
    
    startup: function() {
        // init datastore here
        this.initUIListener();
    },
    
    // initialize all widget event
    initUIListener: function() {
        dojo.connect(dojo.byId('mn_konfigurasi'), 'onclick', this, function(evt) {
            this.menuKonfigurasi();
        });
        
        dojo.connect(dojo.byId('mn_logout'), 'onclick', this, function(evt) {
            this.menuLogout();
        });
        
        dojo.connect(dojo.byId('mn_entri_pegawai'), 'onclick', this, function(evt) {
            this.menuEntriPegawai();
        });
        
        dojo.connect(dojo.byId('mn_entri_harilibur'), 'onclick', this, function(evt) {
            this.menuEntriHariLibur();
        });
        dojo.connect(dojo.byId('mn_master_segment'), 'onclick', this, function(evt) {
            this.menuEntriSegment();
        });
    },
    
    menuKonfigurasi: function() {
        console.log('menu konfigurasi');
    },
    menuLogout: function() {
        console.log('menu logout');
    },
    menuEntriPegawai: function() {
        this.pegawaiController.showEntriPegawaiPanel();
    },
    menuEntriHariLibur: function() {
        this.HariLiburController.showEntriHariLiburPanel();
    },
    menuEntriSegment: function() {
        this.SegmentController.showEntriSegmentPanel();
    }
});
