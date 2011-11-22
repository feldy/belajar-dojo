dojo.provide('app.views.master.EntriSegmentPanel');

dojo.require('dijit.layout.ContentPane');
dojo.require('dijit.layout.BorderContainer');
dojo.require('dojox.grid.DataGrid');
dojo.require('dojox.form.Manager');

dojo.require('app.views.custom.Toolbar');
dojo.require('app.views.master.form.EntriSegmentForm');
dojo.require('app.views.master.grid.TableSegment');

//dojo.require('app.stores.SegmentStore');

dojo.declare('app.views.master.EntriSegmentPanel', null, {
    toolbar: null,
    segmentTable: null,
    form: null,
    mainPanel: null,
    
    constructor: function(id, titlePanel) {
        this.initComponents(id, titlePanel);
    },

    initComponents: function(id, titlePanel) {
        this.toolbar = new app.views.custom.Toolbar({
			idAddBtn: 'idAddBtnSegment',
			idEditBtn: 'idEditBtnSegment',
			idDelBtn: 'idDelBtnSegment',
			idSaveBtn: 'idSaveBtnSegment',
			idCancelBtn: 'idCancelBtnSegment'
		});
		
		// i think, we need create this table using template method. 
		this.segmentTable = new app.views.master.grid.TableSegment().getTableSegment();
		
		// TODO : 
		// This form is a just widget not truly form. We lack in form
		// validation, how we must handle *required* textfield ? :(
		this.form = new app.views.master.form.EntriSegmentForm({
			id: 'formSegmentPanel',
			idSegmentName: 'txtNamaSegment',
			idKode: 'txtKode',
			idKet: 'txtKet'
		});
		
        var contentPane = new dijit.layout.ContentPane({
            region: 'center',
            content: this.form
            //content: this.segmentTable.domNode
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
            content: this.segmentTable.domNode,
            style: 'height: 100%;width: 30%;'
        }));
    },
    
    getMainPanel: function() {
        return this.mainPanel;
    }
});
