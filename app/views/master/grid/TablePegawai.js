dojo.provide('app.views.master.grid.TablePegawai');

dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojo.data.ItemFileWriteStore');
dojo.require('dojo.data.ItemFileReadStore');

dojo.declare('app.views.master.grid.TablePegawai', null, {
	tablePegawai: null,
	
	constructor: function() {
		this.initTable();
	},
	
	initTable: function() {
		// initialize table layout
		var layout = [{
			field: 'userName',
			name: 'Employee Name',
			width: '100px'
		}, {
			field: 'address',
			name: 'Address',
			width: '130px'
		}];
		
		var storePegawai = new dojo.data.ItemFileReadStore({
			url: 'dummy-data/pegawai.json'
		});
		
		// create the grid
		this.tablePegawai = new dojox.grid.DataGrid({
			query : { },
			id: 'tblPegawai',
			store: storePegawai,
			loadingMessage: 'Loading data ...',
			selectionMode: 'single',
			onRowClick: function(e) {
				dojo.publish('rowclicktblPegawai', [e.rowIndex]);
			},
			structure: layout,
			plugins: {
				nestedSorting: true
			}
		});
	},
	
	getTablePegawai: function() {
		//if (this.tablePegawai == null) {
			//this.initTable();
		//}
		
		return this.tablePegawai;
	}
});
