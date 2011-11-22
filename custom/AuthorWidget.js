// custom author widget
dojo.provide('custom.AuthorWidget');

// bring in what we need
dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.require('dijit.form.TextBox');

// create our widget
dojo.declare('custom.AuthorWidget', [dijit._Widget, dijit._Templated], {
    // some default values for our author
    // These typically map to whatever you're handing into constructor
    name: 'No Name',
    
    // Using dojo.moduleUrl, we can get a path to our AuthorWidget's space
    // and we want to have a default avatar, just in case.
    avatar: dojo.moduleUrl('custom.AuthorWidget', 'images/aa.jpg'),
    bio: '',
    
    // Our template - important!
    templateString: dojo.cache('custom.AuthorWidget', 'templates/AuthorWidgetForm.html'),
    
    widgetsInTemplate: true,
        
    // A class to be applied to the root node in our template
    baseClass: 'authorWidget',
    
    // A reference to our background animation
    mouseAnim: null,
    
    // color for our background animation
    baseBackgroundColor: '#fff',
    mouseBackgroundColor: '#def',
    
    // postCreate is called once our widget's DOM is ready,
    // but BEFORE it's been inserted into the page!
    // This is far and away the best point to put in any special work.
    postCreate: function() {
        // Get a DOM  node reference for the root of our widget
        var domNode = this.domNode;
        
        // Run any parent postCreate  processes - can be done at any point
        this.inherited(arguments);
        
        // Set our DOM node's background color to white
        // smoothes out the mouseenter/leave event animations
        dojo.style(domNode, 'backgroundColor', this.baseBackgroundColor);
        
        // Setup our mouseenter/leave events using dijit._Widget's connect
        // means that our callback will execute with 'this' set to our
        // widget
        this.connect(domNode, 'onmouseenter', function(e) {
            this._changeBackground(this.mouseBackgroundColor);
        });
        this.connect(domNode, 'onmouseleave', function(e) {
            this._changeBackground(this.baseBackgroundColor);
        });
    },
    
    // custom getter and setter
    _getNameNodeAttr: function(value) {
        console.log('#getter ' + value);
    },
    
    _setNameNodeAttr: function(value) {
        console.log('#setter ' + value);
    },
    
    _setAvatarAttr: function(av) {
        // we only want to set it if it's a non empty string
        if (av != '') {
            // save it on our widget instance note that we're using _set
            // to support anyone using our widget's watch functinallity,
            // to watch value change
            this._set('avatar', av);
            
            // Using our avatarNode attach point, set it src value
            this.avatarNode.src = av;
        }
    },
    
    _changeBackground: function(toCol) {
        // if we have animation, stop it
        if (this.mouseAnim) {
            this.mouseAnim.stop();
        }
        
        // setup new animation
        this.mouseAnim = dojo.animateProperty({
            node: this.domNode,
            properties: {
                backgroundColor: toCol
            },
            onEnd: dojo.hitch(this, function() {
                // clean up our mouseAnim property
                this.mouseAnim = null;
            })
        }).play();
    }
});
