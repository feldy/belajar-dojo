dojo.provide('app.views.master.form.EntriSegmentForm');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');
dojo.require('dijit.form._FormWidget');
dojo.require('dijit.layout.ContentPane');
dojo.require('dojox.form.Manager');
dojo.require("dijit.form.DateTextBox");
dojo.require("dijit.form.FilteringSelect");
dojo.require("dijit.Tooltip");
dojo.require("dijit.form.NumberTextBox");
dojo.require("dijit.form.Textarea");



dojo.require('dijit.form.TextBox');

dojo.declare('app.views.master.form.EntriSegmentForm', [dijit._Widget, dijit._Templated], {
    region: 'center',
    id: 'idForm',
    idSegmentName: '',
    segmentName: '',
    idKode:'',
    Kode:'',
    idKet:'',
    Ket:'',
    widgetsInTemplate: true,
    templateString: dojo.cache('app.views.templates', 'master/form/FormSegment.html')
});
