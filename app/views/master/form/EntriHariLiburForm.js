dojo.provide('app.views.master.form.EntriHariLiburForm');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');
dojo.require('dijit.form._FormWidget');
dojo.require('dijit.layout.ContentPane');
dojo.require('dojox.form.Manager');
dojo.require("dijit.form.DateTextBox");


dojo.require('dijit.form.TextBox');

dojo.declare('app.views.master.form.EntriHariLiburForm', [dijit._Widget, dijit._Templated], {
    region: 'center',
    id: 'idFormLibur',
    idHariLiburName: '',
    hariLiburName: '',
    widgetsInTemplate: true,
    templateString: dojo.cache('app.views.templates', 'master/form/FormHariLibur.html')
});
