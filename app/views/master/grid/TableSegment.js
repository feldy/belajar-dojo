dojo.provide('app.views.master.grid.TableSegment');

dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojo.data.ItemFileWriteStore');
dojo.require('dojo.data.ItemFileReadStore');

dojo.declare('app.views.master.grid.TableSegment', null, {
	tableSegment: null,
	
	constructor: function() {
		this.initTable();
	},
	
	initTable: function() {
		// initialize table layout
		var layout = [{
			field: 'userName',
			name: 'Segment Name',
			width: '150px'
		}, {
			field: 'address',
			name: 'Kode',
			width: '40px'
		}, {
			field: 'ket',
			name: 'Keterangan',
			width: '160px'
		}];
		
		var storeSegment = new dojo.data.ItemFileReadStore({
			url: 'dummy-data/segment.json'
		});
		
		// create the grid
		this.tableSegment = new dojox.grid.DataGrid({
			query : { },
			id: 'tblSegment',
			store: storeSegment,
			columnReordering: 'true',
			loadingMessage: 'Loading data ...',
			selectionMode: 'single',
			onRowClick: function(e) {
				dojo.publish('rowclicktblSegment', [e.rowIndex]);
			},
			structure: layout,
			plugins: {
				nestedSorting: true
			}
		});
	},
	
	getTableSegment: function() {
		//if (this.tableSegment == null) {
		//this.initTable();
		//}
		
		return this.tableSegment;
	}
});
