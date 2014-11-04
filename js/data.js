
var gunzalez = gunzalez || {};
gunzalez.data = {
    social: [
        {
            'title':'Facebook',
            'icon':'fb',
            'url':'https://www.facebook.com/?segun.konibire'
        },
        {
            'title':'Twitter',
            'icon':'tw',
            'url':'https://twitter.com/gunzal3z'
        },
        {
            'title':'LinkedIn',
            'icon':'ln',
            'url':'http://uk.linkedin.com/in/segunkonibire'
        },
        {
            'title':'GooglePlus',
            'icon':'G+',
            'url':'https://plus.google.com/115931222600213137297/posts'
        }
    ],
    examples: [
        {
            'name': 'Nike Women',
            'type': 'Website',
            'tiles':'4',
            'image':'images/examples/nikewomen-1.jpg',
            'description':'Innovative use of JavaScript, integration into Freemarker IDE which work on XML and XSD documents.',
            'link':'http://www.nike.com/gb/en_gb/c/women'
        },
        {
            'name': 'NetJets Europe',
            'type': 'Website',
            'tiles':'3',
            'image':'images/examples/netjets-1.jpg',
            'description':'Frontend development using the IBM WebSphere Portal, innovative JavaScript/Flash integration and collaborative team work across 4 continents.',
            'link':'http://www.netjetseurope.com/'
        },
        {
            'name': 'Bumi Music',
            'type': 'Website',
            'tiles':'2',
            'image':'images/examples/bumi-1.jpg',
            'description':'Single page website, intelligent use of JavaScript. Basic WordPress backend solution, offering client easy site maintenance.',
            'link':'http://www.bumithomas.com/'
        },
        {
            'name': 'Bally History',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/bally.jpg',
            'description':'Scroll triggered animations. A simple campaign site celebration 160 years of craftsmanship.',
            'link':'#'
        },
        {
            'name': 'Bally Everest',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/everest.jpg',
            'description':'Marking 60 years since the amazing achievement, this reverse scrolling parallax website take a look at the significance of the Bally boot and the materials involved.',
            'link':'#'
        },
        {
            'name': 'Responsive Design Templates',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/max.jpg',
            'description':'A few templates for the luxury fashion house as they look to rebuild their website. The use of media queries to provide a solution allowing clients improved access to their goods, desktop or mobile.',
            'link':'#'
        },
        {
            'name': 'Hunter Gather',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/hg-1.jpg',
            'description':'Magento eCommerce solution, bold design and clean mark-up. Fashion focused design website.',
            'link':'http://www.huntergather.com/'
        },
        {
            'name': 'Nike Football',
            'type': 'Website',
            'tiles':'3',
            'image':'images/examples/nikefootball-1.jpg',
            'description':'Built using the Adobe Web Content Management tool CQ5, extensive JavaScript running on a Java platform.',
            'link':'http://www.nike.com/gb/en_gb/c/football'
        },
        {
            'name': 'Samsung Smart TV',
            'type': 'module',
            'tiles':'3',
            'image':'images/examples/samsung.jpg',
            'description':'Explore this room in a 3D-like flythrough, showcasing the very smart Samsung Smart TV. Fun with JavaScript and clever imagery.',
            'link':'http://www.richersounds.com/information/samsung'
        },
        {
            'name': 'Pounded Yam',
            'type': 'app',
            'tiles':'3',
            'image':'images/examples/yam.jpg',
            'description':'Developed using the cross browser jQuery Mobile framework.',
            'link':'http://www.gunzalez.com/pp/poundedyam/'
        },
        {
            'name': 'VW Car Configurator',
            'type': 'app',
            'tiles':'3',
            'image':'images/examples/vw-2.jpg',
            'description':'Bespoke application for a car configurator, use of advanced JavaScript patterns and collaborative team work across 2 countries.',
            'link':'http://www.vw.com/portal/en/configurator'
        },
        {
            'name': 'Nissan Car Configurator',
            'type': 'app',
            'tiles':'3',
            'image':'images/examples/nissan-1.jpg',
            'description':'Innovative use of media queries to target multiple devices, customisation of css framework. JavaScript widget development and extensive CSS3.',
            'link':'http://www.vw.com/portal/en/configurator'
        },
        {
            'name': 'Pattern Studios',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/patternstudios-1.jpg',
            'description':'Responsive website, powered by WordPress, my best responsive work but may never go live, sniff.',
            'link':'http://patternstudios.com/what-we-do/'
        },
        {
            'name': 'Target',
            'type': 'app',
            'tiles':'1',
            'image':'images/examples/target.jpg',
            'description':'iPad only campaign web mobile application. HTML5 and CSS3 used for the targeted device.',
            'link':'#'
        },
        {
            'name': 'Fiat Ecovile',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/ecoville.jpg',
            'description':'Online fuel saving application for FIAT. Backend integration into .NET MVC2 framework, with considerable use of canvas for data visualisation.',
            'link':'https://www.fiatecodrivefleet.com/'
        },
        {
            'name': 'Day And Night Brushing',
            'type': 'Website',
            'tiles':'1',
            'image':'images/examples/dayandnight.jpg',
            'description':'Integration into N2 Open Source ASP.NET content management tool. Localisation of video content to serve seven different languages.',
            'link':'http://www.brushdayandnight.com/'
        }
    ],

    getExamples: function(){
        var examplesArr = this.examples;
        return gunzalez.utils.shuffle(examplesArr);
    }
};






