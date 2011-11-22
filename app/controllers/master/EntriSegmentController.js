dojo.provide('app.controllers.master.EntriSegmentController');

dojo.require('app.views.master.EntriSegmentPanel');
dojo.require('app.views.custom.Toolbar');

dojo.require('dijit.form.Button');
dojo.require('dijit.form.TextBox');
dojo.require('dijit.form.FilteringSelect');
dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.TitlePane');
dojo.require('dijit.layout.BorderContainer');

dojo.declare('app.controllers.master.EntriSegmentController', null, {
	
    entriSegmentPanel: null,

    constructor: function() {
		this.initPanel();
    },    
    
    initPanel: function() {
		this.entriSegmentPanel = new app.views.master.EntriSegmentPanel('panelSegment', 'Segment').getMainPanel();
		
		// initialize listener
		dojo.subscribe('idAddBtnSegment', this.addAction);
		
		dojo.subscribe('idEditBtnSegment', this.editAction);
		
		dojo.subscribe('idDelBtnSegment', this.deleteAction);
		
		dojo.subscribe('idSaveBtnSegment', this.saveAction);
		
		dojo.subscribe('idCancelBtnSegment', this.cancelAction);
		
		dojo.subscribe('rowclicktblSegment', this.rowclick);
	},
	
	rowclick: function(selectedRow) {
		var tbl = dijit.byId('tblSegment');
		var segmentName = tbl.store.getValue(tbl.getItem(selectedRow), 'userName');
		var Kode = tbl.store.getValue(tbl.getItem(selectedRow), 'address');
		var Ket = tbl.store.getValue(tbl.getItem(selectedRow), 'ket');
		
		
		// trying to set value on custom widget
		dojo.byId('txtNamaSegment').value = segmentName;
		dojo.byId('txtKode').value = Kode;
		dojo.byId('txtKet').value = Ket;
		
	},
	
	addAction: function() {
		console.log('Add Segment Controller');
	},
	editAction: function() {
		console.log('Edit Segment Controller');
	},
	deleteAction: function() {
		console.log('Del Segment Controller');
	},
	saveAction: function() {
		//TODO:
		// Find howto extends dijit.form._FormWidget to get truly
		// form in Dojo. For validation purpose.
		console.log('Save Segment Controller');
	},
	cancelAction: function() {
		console.log('Cancel Segment Controller');
	},
	
	showEntriSegmentPanel: function() {
		var mainPanel = dijit.byId('mainPanel');
		
		// if this panel is closed, initialize again
		if (dijit.byId('panelSegment') == undefined) {
			this.initPanel();
		}
		
        if (mainPanel.getIndexOfChild(dijit.byId('panelSegment')) == -1) {
            mainPanel.addChild(this.entriSegmentPanel);
        }
        
        mainPanel.selectChild(dijit.byId('panelSegment'));
    }
});
