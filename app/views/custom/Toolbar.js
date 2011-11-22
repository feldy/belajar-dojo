dojo.provide('app.views.custom.Toolbar');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.require('dijit.Toolbar');

dojo.require('dijit.form.Button');

dojo.declare('app.views.custom.Toolbar', [dijit.Toolbar], {
    addBtn: 'Add',
    idAddBtn: 'idAddBtn',
    editBtn: 'Edit',
    idEditBtn: 'idEditBtn',
    delBtn: 'Delete',
    idDelBtn: 'idDelBtn',
    saveBtn: 'Save',
    idSaveBtn: 'idSaveBtn',
    cancelBtn: 'Cancel',
    idCancelBtn: 'idCancelBtn',
    region: 'top',
    
    templateString: dojo.cache('app.views.templates', 'Toolbar.html'),
    
    widgetsInTemplate: true,
    
    addAction: function() {
		dojo.publish(this.idAddBtn, 
			console.log('[Toolbar] Add Action (do nothing in parent class)')
		);
    },
    
    editAction: function() {
        dojo.publish(this.idEditBtn, 
			console.log('[Toolbar] Edit Action (do nothing in parent class)')
		);
    },

    delAction: function() {
        dojo.publish(this.idDelBtn, 
			console.log('[Toolbar] Delete Action (do nothing in parent class)')
		);
    },

    saveAction: function() {
        dojo.publish(this.idSaveBtn, 
			console.log('[Toolbar] Save Action (do nothing in parent class)')
		);
    },

    cancelAction: function() {
        dojo.publish(this.idCancelBtn, 
			console.log('[Toolbar] Cancel Action (do nothing in parent class)')
		);
    }
});
