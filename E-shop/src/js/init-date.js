(function($){
    $(function(){
        let inputFrom = $('#datepicker-from');
        let inputTo = $('#datepicker-to');
        let dateDelta = 14;

        let dateNow = new Date();
        let dateFrom = new Date();
        let dateTo = new Date();

        dateFrom.setDate(dateFrom.getDate() - dateDelta);
        dateTo.setDate(dateTo.getDate() + dateDelta);

        inputFrom.datepicker({
            language: 'en',
            startDate: dateNow,
            minDate: dateFrom,
            maxDate: dateTo,
            dateFormat: 'dd/mm/yyyy',
            firstDay: 1,
            onSelect: function(fd, d, picker) {
                if (!d) {
                    inputTo.datepicker().data('datepicker')
                        .update({ minDate: dateFrom });
                    return;
                }
                inputTo.datepicker().data('datepicker')
                    .update({ minDate: d });
            }
        })

        inputTo.datepicker({
            language: 'en',
            startDate: dateNow,
            minDate: dateFrom,
            maxDate: dateTo,
            dateFormat: 'dd/mm/yyyy',
            firstDay: 1,
            onSelect: function(fd, d, picker) {
                if (!d) {
                    inputFrom.datepicker().data('datepicker')
                        .update({ maxDate: dateTo });
                    return;   
                }
                inputFrom.datepicker().data('datepicker')
                    .update({ maxDate: d });
            }
        });
    });
})(jQuery);
