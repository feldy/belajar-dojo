dojo.provide('app.controllers.master.EntriPegawaiController');

dojo.require('app.views.master.EntriPegawaiPanel');
dojo.require('app.views.custom.Toolbar');

dojo.require('dijit.form.Button');
dojo.require('dijit.form.TextBox');
dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.BorderContainer');

dojo.declare('app.controllers.master.EntriPegawaiController', null, {
	
    entriPegawaiPanel: null,

    constructor: function() {
		this.initPanel();
    },    
    
    initPanel: function() {
		this.entriPegawaiPanel = new app.views.master.EntriPegawaiPanel('panelPegawai', 'Pegawai').getMainPanel();
		
		// initialize listener
		dojo.subscribe('idAddBtnPegawai', this.addAction);
		
		dojo.subscribe('idEditBtnPegawai', this.editAction);
		
		dojo.subscribe('idDelBtnPegawai', this.deleteAction);
		
		dojo.subscribe('idSaveBtnPegawai', this.saveAction);
		
		dojo.subscribe('idCancelBtnPegawai', this.cancelAction);
		
		dojo.subscribe('rowclicktblPegawai', this.rowclick);
	},
	
	rowclick: function(selectedRow) {
		var tbl = dijit.byId('tblPegawai');
		var pegawaiName = tbl.store.getValue(tbl.getItem(selectedRow), 'userName');
		var alamatPegawai = tbl.store.getValue(tbl.getItem(selectedRow), 'address');
		
		// trying to set value on custom widget
		dojo.byId('txtNamaPegawai').value = pegawaiName;
		dojo.byId('txtAlamatPegawai').value = alamatPegawai;
	},
	
	addAction: function() {
		console.log('Add Pegawai Controller');
	},
	editAction: function() {
		console.log('Edit Pegawai Controller');
	},
	deleteAction: function() {
		console.log('Del Pegawai Controller');
	},
	saveAction: function() {
		//TODO:
		// Find howto extends dijit.form._FormWidget to get truly
		// form in Dojo. For validation purpose.
		console.log('Save Pegawai Controller');
	},
	cancelAction: function() {
		console.log('Cancel Pegawai Controller');
	},
	
	showEntriPegawaiPanel: function() {
		var mainPanel = dijit.byId('mainPanel');
		
		// if this panel is closed, initialize again
		if (dijit.byId('panelPegawai') == undefined) {
			this.initPanel();
		}
		
        if (mainPanel.getIndexOfChild(dijit.byId('panelPegawai')) == -1) {
            mainPanel.addChild(this.entriPegawaiPanel);
        }
        
        mainPanel.selectChild(dijit.byId('panelPegawai'));
    }
});
