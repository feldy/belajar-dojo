dojo.provide('app.views.master.grid.TableHariLibur');

dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojo.data.ItemFileWriteStore');
dojo.require('dojo.data.ItemFileReadStore');

dojo.declare('app.views.master.grid.TableHariLibur', null, {
	tableHariLibur: null,
	
	constructor: function() {
		this.initTable();
	},
	
	initTable: function() {
		// initialize table layout
		var layout = [{
			field: 'nmHari',
			name: ' Nama Hari',
			width: '100px'
		}, {
			field: 'tgl',
			name: 'Tanggal',
			width: '130px'
		}];
		
		var storeHariLibur = new dojo.data.ItemFileReadStore({
			url: 'dummy-data/harilibur.json'
		});
		
		// create the grid
		this.tableHariLibur = new dojox.grid.DataGrid({
			query : { },
			id: 'tblHariLibur',
			store: storeHariLibur,
			loadingMessage: 'Loading data ...',
			selectionMode: 'single',
			onRowClick: function(e) {
				dojo.publish('rowclicktblLibur', [e.rowIndex]);
			},
			structure: layout,
			plugins: {
				nestedSorting: true
			}
		});
	},
	
	getTableHariLibur: function() {
		//if (this.tablePegawai == null) {
			//this.initTable();
		//}
		
		return this.tableHariLibur;
	}
});
