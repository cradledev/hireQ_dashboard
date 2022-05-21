interface Scripts {
    name: string;
    src: string;
}  
export const CssStore: Scripts[] = [
    {name: 'jqvmap', src: 'assets/vendor/jqvmap/css/jqvmap.min.css'},
    {name: 'chartist', src: 'assets/vendor/chartist/css/chartist.min.css'},
    {name: 'carousel', src: 'assets/vendor/owl-carousel/owl.carousel.css'},
];

export const ScriptStore: Scripts[] = [
    {name: 'chartist', src: 'assets/vendor/chart.js/Chart.bundle.min.js'},
    {name: 'carousel', src: 'assets/vendor/owl-carousel/owl.carousel.js'},
    {name: 'peity', src: 'assets/vendor/peity/jquery.peity.min.js'},
    {name : 'apexchart', src : 'assets/vendor/apexchart/apexchart.js'},
    {name : 'dashboard', src : 'assets/js/dashboard/dashboard-1.js'},
    {name : 'carousel-review', src : 'assets/js/dashboard/carousel-review.js'}
];