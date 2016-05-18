function Interface() {
    var config = {
        layout: {
            name: 'layout',
            padding: 0,
            panels: [
                {type: 'left', size: 200, resizable: true, minSize: 120},
                {type: 'main', minSize: 550, overflow: 'hidden'}
            ]
        },
        sidebar: {
            name: 'sidebar',
            nodes: [
                {
                    id: 'home', text: 'Acasă', group: true, expanded: true,
                    nodes: [
                        

                        // { id: 'level-1-2', text: 'Level 1.2', icon: 'fa-coffee' },
                        {id: 'Sarcini', text: 'Sarcini', icon: 'fa-comment-alt', selected: true}
                    ]
                }, {
                    id: 'Informatie', text: 'Informație', group: true, expanded: true,
                    nodes: [
                        {id: 'Clienti', text: 'Clienți', img: 'icon-page'},
                        {id: 'Camere', text: 'Camere', img: 'icon-page'},
                        {id: 'Facture', text: 'Facturi', img: 'icon-page'},
                    ]
                }],
            onClick: function (event) {
                switch (event.target) {
                    case 'Clienti':
                        w2ui.layout.content('main', w2ui.Clienti);
                        w2ui['Clienti'].load('http://localhost/server.php?action=show&table=clienti');
                        break;
                    case 'Camere':
                        w2ui.layout.content('main', w2ui.Camere);
                        w2ui['Camere'].load('http://localhost/server.php?action=show&table=camere');
                        break;
                    case 'Facture':
                        w2ui.layout.content('main', w2ui.Facture);
                        w2ui['Facture'].load('http://localhost/server.php?action=show&table=facturi');
                        break;
                    case 'Sarcini':
                        w2ui.layout.content('main', w2ui.Sarcini);
                        break;
                    
                
                }
            }
        },

        Clienti: {
            name: 'Clienti',
            show: {
                lineNumbers: true,
                toolbar: true,
                footer: true,
                toolbarAdd: true,
                toolbarDelete: true,
                toolbarSave: false,
                toolbarEdit: true
            },
            searches: [
                {field: 'nume', caption: 'Nume', type: 'text'},
                {field: 'prenume', caption: 'Prenume', type: 'text'},
                {field: 'telefon', caption: 'Nr. de telefon', type: 'text'},
                {field: 'masina', caption: 'Nr. mașinei', type: 'text'},
                {field: 'idnp', caption: 'Nr. de Identitate', type: 'text'},
                {field: 'camera', caption: 'Nr. Cameră', type: 'text'},
            ],
            columns: [
                {field: 'nume', caption: 'Nume', size: '50%', sortable: true},
                {field: 'prenume', caption: 'Prenume', size: '50%', sortable: true},
                {field: 'telefon', caption: 'Nr. de telefon', size: '93px'},
                {field: 'masina', caption: 'Nr. mașinei', size: '74px'},
                {field: 'idnp', caption: 'Nr. de identitate', size: '98px'},
                {field: 'camera', caption: 'Nr. Cameră', size: '80px'},
            ],
            onAdd: function (event) {
                if (w2ui.AddClient) w2ui.AddClient.destroy();
                w2popup.open({
                    title: 'Adăugarea clientului',
                    width: 370,
                    height: 320,
                    showMax: true,
                    modal: true,
                    body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
                    onOpen: function (event) {
                        event.onComplete = function () {
                            $('#w2ui-popup #main').w2form({
                                name: 'AddClient',
                                fields: [{
                                    field: 'nume',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Nume',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'prenume',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Prenume',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'telefon',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numarul de telefon',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'masina',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numărul mașinei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'idnp',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numărul de identitate',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'camera',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numărul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }],
                                actions: {
                                    'Adaugă': function (event) {
                                        if (!this.validate()[0]) {
                                            var data = [
                                                w2ui.AddClient.box.querySelector("input[name=nume]").value,
                                                w2ui.AddClient.box.querySelector("input[name=prenume]").value,
                                                w2ui.AddClient.box.querySelector("input[name=telefon]").value,
                                                w2ui.AddClient.box.querySelector("input[name=masina]").value,
                                                w2ui.AddClient.box.querySelector("input[name=idnp]").value,
                                                w2ui.AddClient.box.querySelector("input[name=camera]").value
                                            ];
                                            $.get("http://localhost/server.php", {
                                                action: "add",
                                                table: "clienti",
                                                'value[]': data
                                            });
                                            w2ui['Clienti'].load('http://localhost/server.php?action=show&table=clienti');
                                            w2popup.close();
                                        }
                                    },
                                }
                            });
                        };
                    }
                });
            },
            onEdit: function (event) {
                if (w2ui.ChangeClient) w2ui.ChangeClient.destroy();
                w2popup.open({
                    title: 'Modificarea datelor clientului',
                    width: 370,
                    height: 320,
                    showMax: true,
                    modal: true,
                    body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
                    onOpen: function (event) {
                        event.onComplete = function () {
                            $('#w2ui-popup #main').w2form({
                                name: 'ChangeClient',
                                fields: [{
                                    field: 'nume',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Nume',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'prenume',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Prenume',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'telefon',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numarul de telefon',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'masina',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numărul mașinei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'idnp',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numărul de identitate',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'camera',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numărul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }],
                                actions: {
                                    'Modifică': function (event) {
                                        if (!this.validate()[0]) {
                                            var data = [
                                                w2ui.ChangeClient.get("nume").el.value,
                                                w2ui.ChangeClient.get("prenume").el.value,
                                                w2ui.ChangeClient.get("telefon").el.value,
                                                w2ui.ChangeClient.get("masina").el.value,
                                                w2ui.ChangeClient.get("idnp").el.value,
                                                w2ui.ChangeClient.get("camera").el.value,
                                                (w2ui.Clienti.get(w2ui.Clienti.getSelection()[0]).idnp)
                                            ];
                                            $.get("http://localhost/server.php", {
                                                action: "update",
                                                table: "clienti",
                                                'value[]': data
                                            });
                                            w2ui['Clienti'].load('http://localhost/server.php?action=show&table=clienti');
                                            w2popup.close();
                                        }
                                    },
                                },
                                onRender: function (event) {
                                    var item = w2ui.Clienti.get(w2ui.Clienti.getSelection()[0]);
                                    setTimeout(function () {
                                        w2ui.ChangeClient.get("nume").el.value = item.nume;
                                        w2ui.ChangeClient.get("prenume").el.value = item.prenume;
                                        w2ui.ChangeClient.get("telefon").el.value = item.telefon;
                                        w2ui.ChangeClient.get("masina").el.value = item.masina;
                                        w2ui.ChangeClient.get("idnp").el.value = item.idnp;
                                        w2ui.ChangeClient.get("camera").el.value = item.camera;
                                    }, 500);
                                }
                            });
                        };
                    }
                });
            },
            onDelete: function (event) {
                if (event.force == true) {
                    var sel = this.getSelection();
                    for (var i = 0; i < sel.length; i++) {
                        $.get("http://localhost/server.php", {
                            action: "delete",
                            table: "clienti",
                            'value': this.get(sel[i]).idnp
                        });
                    }
                }
            },
            onSubmit: function (event) {
                w2alert('save');
            },
            records: [
                {
                    recid: 1,
                    name: "Nume",
                    fname: "Prenume",
                    phone: "+37379123456",
                    nrmobile: "123456",
                    CNP: "1234567890123",
                    room: "1201A"
                },
                // { recid: "", name: "", fname: "", phone: "", nrmobile: "", CNP: "", room: "" },
            ]
        },

        Camere: {
            name: 'Camere',
            show: {
                lineNumbers: true,
                toolbar: true,
                footer: true,
                toolbarAdd: true,
                toolbarDelete: true,
                toolbarSave: false,
                toolbarEdit: true
            },
            searches: [
                {field: 'camera', caption: 'Nr. Cameră', type: 'int'},
                {field: 'pret', caption: 'Preț pe noapte', type: 'float'},
                {field: 'tip', caption: 'Tipul camerei', type: 'text'},
                {field: 'note', caption: 'Notițe', type: 'text'},
            ],
            columns: [
                {field: 'camera', caption: 'Nr. Cameră', size: '80px', sortable: true},
                {field: 'pret', caption: 'Preț pe noapte', size: '98px', sortable: true},
                {field: 'tip', caption: 'Tipul camerei', size: '91px'},
                {field: 'note', caption: 'Notițe', size: '100%'},
            ],
            onAdd: function (event) {
                if (w2ui.AddCamera) w2ui.AddCamera.destroy();
                w2popup.open({
                    title: 'Adăugarea camerei',
                    width: 370,
                    height: 250,
                    showMax: true,
                    modal: true,
                    body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
                    onOpen: function (event) {
                        event.onComplete = function () {
                            $('#w2ui-popup #main').w2form({
                                name: 'AddCamera',
                                fields: [{
                                    field: 'camera',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numărul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'pret',
                                    type: 'float',
                                    required: true,
                                    html: {
                                        caption: 'Pretul pe noapte',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'tip',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Tipul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'note',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Notițe',
                                        attr: 'style="width: 200px"'
                                    }
                                }],
                                actions: {
                                    'Adaugă': function (event) {
                                        if (!this.validate()[0]) {
                                            var data = [
                                                w2ui.AddCamera.box.querySelector("input[name=camera]").value,
                                                w2ui.AddCamera.box.querySelector("input[name=pret]").value,
                                                w2ui.AddCamera.box.querySelector("input[name=tip]").value,
                                                w2ui.AddCamera.box.querySelector("input[name=note]").value,
                                            ];
                                            $.get("http://localhost/server.php", {
                                                action: "add",
                                                table: "camere",
                                                'value[]': data
                                            });
                                            w2ui['Camere'].load('http://localhost/server.php?action=show&table=camere');
                                            w2popup.close();
                                        }
                                    },
                                }
                            });
                        };
                    }
                });
                // w2alert('add');
            },
            onEdit: function (event) {
                if (w2ui.ChangeCamera) w2ui.ChangeCamera.destroy();
                w2popup.open({
                    title: 'Modificarea camerei',
                    width: 370,
                    height: 250,
                    showMax: true,
                    modal: true,
                    body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
                    onOpen: function (event) {
                        event.onComplete = function () {
                            $('#w2ui-popup #main').w2form({
                                name: 'ChangeCamera',
                                fields: [{
                                    field: 'camera',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numărul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'pret',
                                    type: 'float',
                                    // required: true,
                                    html: {
                                        caption: 'Pretul pe noapte',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'tip',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Tipul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'note',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Notițe',
                                        attr: 'style="width: 200px"'
                                    }
                                }],
                                actions: {
                                    'Modifică': function (event) {
                                        if (!this.validate()[0]) {
                                            var data = [
                                                w2ui.ChangeCamera.box.querySelector("input[name=camera]").value,
                                                w2ui.ChangeCamera.box.querySelector("input[name=pret]").value,
                                                w2ui.ChangeCamera.box.querySelector("input[name=tip]").value,
                                                w2ui.ChangeCamera.box.querySelector("input[name=note]").value,
                                                (w2ui.Camere.get(w2ui.Camere.getSelection()[0]).camera)
                                            ];
                                            $.get("http://localhost/server.php", {
                                                action: "update",
                                                table: "camere",
                                                'value[]': data
                                            });
                                            w2ui['Camere'].load('http://localhost/server.php?action=show&table=camere');
                                            w2popup.close();
                                        }
                                    },
                                },
                                onRender: function () {
                                    var item = w2ui.Camere.get(w2ui.Camere.getSelection()[0]);
                                    setTimeout(function () {
                                        w2ui.ChangeCamera.get("camera").el.value = item.camera;
                                        w2ui.ChangeCamera.get("pret").el.value = item.pret;
                                        w2ui.ChangeCamera.get("tip").el.value = item.tip;
                                        w2ui.ChangeCamera.get("note").el.value = item.note;
                                    }, 500);
                                }
                            });
                        };
                    }
                });
            },
            onDelete: function (event) {
                if (event.force == true) {
                    var sel = this.getSelection();
                    for (var i = 0; i < sel.length; i++) {
                        $.get("http://localhost/server.php", {
                            action: "delete",
                            table: "camere",
                            'value': this.get(sel[i]).camera
                        });
                    }
                }
            },
            onSubmit: function (event) {
                w2alert('save');
            }
        },

        Facture: {
            name: 'Facture',
            show: {
                lineNumbers: true,
                toolbar: true,
                footer: true,
                toolbarAdd: true,
                toolbarDelete: true,
                toolbarSave: false,
                toolbarEdit: true
            },
            searches: [
                {field: 'data', caption: 'Data înregistrării', type: 'date'},
                {field: 'nopti', caption: 'Numărul de nopți', type: 'int'},
                {field: 'camera', caption: 'Numărul camerei', type: 'int'},
                {field: 'idnp', caption: 'Codul de identitate', type: 'float'},
            ],
            columns: [
                {field: 'data', caption: 'Data înregistrării', size: '25%', sortable: true},
                {field: 'nopti', caption: 'Numărul de nopți', size: '25%', sortable: true},
                {field: 'camera', caption: 'Numărul camerei', size: '25%'},
                {field: 'idnp', caption: 'Numărul de identitate', size: '25%'},
            ],
            onAdd: function (event) {
                if (w2ui.AddFactura) w2ui.AddFactura.destroy();
                w2popup.open({
                    title: 'Adăugarea facturei',
                    width: 370,
                    height: 250,
                    showMax: true,
                    modal: true,
                    body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
                    onOpen: function (event) {
                        event.onComplete = function () {
                            $('#w2ui-popup #main').w2form({
                                name: 'AddFactura',
                                fields: [{
                                    field: 'data',
                                    type: 'date',
                                    required: true,
                                    html: {
                                        caption: 'Data înregistrării',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'nopti',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numarul de nopți',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'camera',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numărul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'idnp',
                                    type: 'text',
                                    required: true,
                                    html: {
                                        caption: 'Numărul de identitate',
                                        attr: 'style="width: 200px"'
                                    }
                                }],
                                actions: {
                                    'Adaugă': function (event) {
                                        if (!this.validate()[0]) {
                                            var data = [
                                                w2ui.AddFactura.box.querySelector("input[name=data]").value,
                                                w2ui.AddFactura.box.querySelector("input[name=nopti]").value,
                                                w2ui.AddFactura.box.querySelector("input[name=camera]").value,
                                                w2ui.AddFactura.box.querySelector("input[name=idnp]").value,
                                            ];
                                            $.get("http://localhost/server.php", {
                                                action: "add",
                                                table: "facturi",
                                                'value[]': data
                                            });
                                            w2ui['Facture'].load('http://localhost/server.php?action=show&table=facturi');
                                            w2popup.close();
                                        }
                                    },
                                }
                            });
                        };
                    }
                });
            },
            onEdit: function (event) {
                if (w2ui.ChangeFactura) w2ui.ChangeFactura.destroy();
                w2popup.open({
                    title: 'Modificarea facturei',
                    width: 370,
                    height: 250,
                    showMax: true,
                    modal: true,
                    body: '<div id="main" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px;"></div>',
                    onOpen: function (event) {
                        event.onComplete = function () {
                            $('#w2ui-popup #main').w2form({
                                name: 'ChangeFactura',
                                fields: [{
                                    field: 'data',
                                    type: 'date',
                                    // required: true,
                                    html: {
                                        caption: 'Data înregistrării',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'nopti',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numarul de nopți',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'camera',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numărul camerei',
                                        attr: 'style="width: 200px"'
                                    }
                                }, {
                                    field: 'idnp',
                                    type: 'text',
                                    // required: true,
                                    html: {
                                        caption: 'Numărul de identitate',
                                        attr: 'style="width: 200px"'
                                    }
                                }],
                                actions: {
                                    'Adaugă': function (event) {
                                        if (!this.validate()[0]) {
                                            var data = [
                                                w2ui.ChangeFactura.box.querySelector("input[name=data]").value,
                                                w2ui.ChangeFactura.box.querySelector("input[name=nopti]").value,
                                                w2ui.ChangeFactura.box.querySelector("input[name=camera]").value,
                                                w2ui.ChangeFactura.box.querySelector("input[name=idnp]").value,
                                                (w2ui.Facture.get(w2ui.Facture.getSelection()[0]).idnp)
                                            ];
                                            $.get("http://localhost/server.php", {
                                                action: "update",
                                                table: "facturi",
                                                'value[]': data
                                            });
                                            w2ui['Facture'].load('http://localhost/server.php?action=show&table=facturi');
                                            w2popup.close();
                                        }
                                    },
                                },
                                onRender: function () {
                                    var item = w2ui.Facture.get(w2ui.Facture.getSelection()[0]);
                                    setTimeout(function () {
                                        w2ui.ChangeFactura.get("data").el.value = item.data;
                                        w2ui.ChangeFactura.get("nopti").el.value = item.nopti;
                                        w2ui.ChangeFactura.get("camera").el.value = item.camera;
                                        w2ui.ChangeFactura.get("idnp").el.value = item.idnp;
                                    }, 500);
                                }
                            });
                        };
                    }
                });

                // w2alert('edit');
            },
            onDelete: function (event) {
                if (event.force == true) {
                    var sel = this.getSelection();
                    for (var i = 0; i < sel.length; i++) {
                        $.get("http://localhost/server.php", {
                            action: "delete",
                            table: "facturi",
                            'value': this.get(sel[i]).idnp
                        });
                    }
                }
            },
            onSubmit: function (event) {
                w2alert('save');
            }
        },

        Sarcini: {
            name: 'Sarcini',
            show: {
                /*lineNumbers: true, toolbar: true,*/
                footer: true,
                toolbarAdd: true,
                toolbarDelete: true,
                toolbarSave: false,
                toolbarEdit: true
            },
            columns: [
                {field: 'status', caption: 'Starea', size: '80px'},
                {field: 'detalii', caption: 'Detalii', size: '100%'},
                {field: 'prioritatea', caption: 'Prioritatea', size: '80px', attr: 'align="center"'}
            ]
        }
    };

    $(function () {
        $('#Interfata').w2layout(config.layout);
        w2ui.layout.content('left', $().w2sidebar(config.sidebar));
        w2ui.layout.content('main', $().w2grid(config.Sarcini));
        $().w2grid(config.Clienti)
        $().w2grid(config.Camere);
        $().w2grid(config.Facture);
    });

}

$(function () {
    // Login();
    Interface();
});


function Login() {
    $('#Autentificare').w2form({
        name: 'form',
        header: 'Autentificare',
        // url: 'server/post',
        fields: [{
            field: 'login',
            type: 'text',
            required: true,
            html: {
                caption: 'Utilizator',
                attr: 'style="width: 300px"'
            }
        }, {
            field: 'password',
            type: 'password',
            required: true,
            html: {
                caption: 'Parola',
                attr: 'style="width: 300px"'
            }
        }],
        actions: {
            'Întră': function (event) {
                if (w2ui.form.validate()[0] == undefined) {
                    var login = this.get("login").el.value;
                    var password = this.get("password").el.value;
                    if (login == "Admin" && password == "Admin") {
                        this.destroy();
                        Interface();

                    } else {
                        eventData = w2utils.event.trigger({
                            phase: 'before',
                            target: "",
                            type: 'validate',
                            errors: [{
                                field: this.get("login"),
                                error: 'Utilizatorul sau Parola<br>este Gresit'
                            }, {
                                field: this.get("password"),
                                error: 'Întroduceți din nou'
                            }]
                        });
                        for (var i = 0; i < 2; i++) {
                            var err = eventData.errors[i];
                            $(err.field.el).w2tag(err.error, {
                                "class": 'w2ui-error e'
                            });
                        }
                    }
                }
            },
            'Renunță': function (event) {
                this.clear();
                window.close();
            },
        }
    });
    $("#Autentificare button:first()").attr("class", "btn btn-green")
}
