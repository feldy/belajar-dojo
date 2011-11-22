dojo.provide('app.views.master.EntriHariLiburPanel');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.BorderContainer');
dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.form.Manager');

dojo.require('app.views.custom.Toolbar');
dojo.require('app.views.master.form.EntriHariLiburForm');
dojo.require('app.views.master.grid.TableHariLibur');



dojo.declare('app.views.master.EntriHariLiburPanel', null, {
    toolbar: null,
    hariLiburTable: null,
    form: null,
    mainPanel: null,
    
    constructor: function(id, titlePanel) {
        this.initComponents(id, titlePanel);
    },

    initComponents: function(id, titlePanel) {
        this.toolbar = new app.views.custom.Toolbar({
			idAddBtn: 'idAddBtnLibur',
			idEditBtn: 'idEditBtnLibur',
			idDelBtn: 'idDelBtnLibur',
			idSaveBtn: 'idSaveBtnLibur',
			idCancelBtn: 'idCancelBtnLibur'
		});
		
		// i think, we need create this table using template method. 
		this.hariLiburTable = new app.views.master.grid.TableHariLibur().getTableHariLibur();
		
		// TODO : 
		// This form is a just widget not truly form. We lack in form
		// validation, how we must handle *required* textfield ? :(
		this.form = new app.views.master.form.EntriHariLiburForm({
			id: 'formHariLiburPanel',
			idHariLiburName: 'txtNamaLibur',
					});
		
        var contentPane = new dijit.layout.ContentPane({
            region: 'center',
            content: this.form
        });
        
        this.mainPanel = new dijit.layout.BorderContainer({
            id: id,
            title: titlePanel,
            closable: true,
            design:'sidebar',
            gutters:true,
            liveSplitters:true,
            style: 'height: 100%;width: 100%;'
        });
        
        this.mainPanel.addChild(this.toolbar);
        this.mainPanel.addChild(contentPane);
        this.mainPanel.addChild(new dijit.layout.ContentPane({
            align: 'right',
            region: 'leading',
            splitter: true,
            content: this.hariLiburTable.domNode,
            style: 'height: 100%;width: 20%;'
        }));
    },
    
    getMainPanel: function() {
        return this.mainPanel;
    }
});
