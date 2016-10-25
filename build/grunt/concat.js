module.exports = {
    options: {
        separator: ';'
    },
    admin: {
        src: [
            'assets/src/scripts/charcoal/admin/charcoal.js',
            'assets/src/scripts/charcoal/admin/component_manager.js',
            'assets/src/scripts/charcoal/admin/feedback.js',
            'assets/src/scripts/charcoal/admin/widget.js',
            'assets/src/scripts/charcoal/admin/widget/*.js',
            'assets/src/scripts/charcoal/admin/property.js',
            'assets/src/scripts/charcoal/admin/property/*.js',
            'assets/src/scripts/charcoal/admin/property/input/**/*.js',
            'assets/src/scripts/charcoal/admin/template.js',
            'assets/src/scripts/charcoal/admin/template/*.js'
        ],
        dest: 'assets/dist/scripts/charcoal.admin.js'
    },
    vendors: {
        src: [
            // Bootstrap Switch
            'bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js',
            // Bootstrap Dialog
            'bower_components/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js',
            // Bootstrap 3 Datepicker
            'bower_components/moment/min/moment.min.js',
            'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
            // Hyperfpr,
            'bower_components/hyperform/dist/hyperform.js',
            // BB Map
            'bower_components/bb-gmap/assets/scripts/dist/min/gmap.min.js',
            // Bootstrap Select
            'bower_components/bootstrap-select/dist/js/bootstrap-select.js',
            // Jquery Minicolors
            'bower_components/jquery-minicolors/jquery.minicolors.min.js',
            // Multiselect Two-sides
            'bower_components/multiselect/dist/js/multiselect.min.js',
            // Selectize
            'bower_components/selectize/dist/js/standalone/selectize.min.js',
            'assets/dist/scripts/vendors/selectize/selectize-item-color/src/plugin.js'
        ],
        dest: 'assets/dist/scripts/charcoal.admin.vendors.js',
        separator: "\n"
    }
};
