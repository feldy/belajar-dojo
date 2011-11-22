dojo.provide('app.views.master.form.EntriPegawaiForm');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');
dojo.require('dijit.form._FormWidget');
dojo.require('dijit.layout.ContentPane');
dojo.require('dojox.form.Manager');
dojo.require("dijit.form.DateTextBox");


dojo.require('dijit.form.TextBox');

dojo.declare('app.views.master.form.EntriPegawaiForm', [dijit._Widget, dijit._Templated], {
    region: 'center',
    id: 'idForm',
    idPegawaiName: '',
    idAlamat: '',
    pegawaiName: '',
    tanggal:'',
    idTgl: '',
    alamat: null,
    widgetsInTemplate: true,
    templateString: dojo.cache('app.views.templates', 'master/form/FormPegawai.html')
});
