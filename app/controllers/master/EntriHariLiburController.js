dojo.provide('app.controllers.master.EntriHariLiburController');

dojo.require('app.views.master.EntriHariLiburPanel');
dojo.require('app.views.custom.Toolbar');

dojo.require('dijit.form.Button');
dojo.require('dijit.form.TextBox');
dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.BorderContainer');

dojo.declare('app.controllers.master.EntriHariLiburController', null, {
	
    entriHariLiburPanel: null,

    constructor: function() {
		this.initPanel();
    },    
    
    initPanel: function() {
		this.entriHariLiburPanel = new app.views.master.EntriHariLiburPanel('panelHariLibur', 'Hari Libur').getMainPanel();
		
		// initialize listener
		dojo.subscribe('idAddBtnLibur', this.addAction);
		
		dojo.subscribe('idEditBtnLibur', this.editAction);
		
		dojo.subscribe('idDelBtnLibur', this.deleteAction);
		
		dojo.subscribe('idSaveBtnLibur', this.saveAction);
		
		dojo.subscribe('idCancelBtnLibur', this.cancelAction);
		
		dojo.subscribe('rowclicktblLibur', this.rowclick);
	},
	
	rowclick: function(selectedRow) {
		var tbl = dijit.byId('tblHariLibur');
		var hariLiburName = tbl.store.getValue(tbl.getItem(selectedRow), 'userName');
		
		
		// trying to set value on custom widget
		dojo.byId('txtNamaLibur').value = hariLiburName;
		
	},
	
	addAction: function() {
		console.log('Add Hari libur Controller');
	},
	editAction: function() {
		console.log('Edit Hari libur Controller');
	},
	deleteAction: function() {
		console.log('Del Hari libur Controller');
	},
	saveAction: function() {
		//TODO:
		// Find howto extends dijit.form._FormWidget to get truly
		// form in Dojo. For validation purpose.
		console.log('Save Hari libur Controller');
	},
	cancelAction: function() {
		console.log('Cancel Hari libur Controller');
	},
	
	showEntriHariLiburPanel: function() {
		var mainPanel = dijit.byId('mainPanel');
		
		// if this panel is closed, initialize again
		if (dijit.byId('panelHariLibur') == undefined) {
			this.initPanel();
		}
		
        if (mainPanel.getIndexOfChild(dijit.byId('panelHariLibur')) == -1) {
            mainPanel.addChild(this.entriHariLiburPanel);
        }
        
        mainPanel.selectChild(dijit.byId('panelHariLibur'));
    }
});
