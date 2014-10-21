/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var React          = require('react'),
    Intl           = require('intl'),
    CtxPass        = require('../ctx_pass'),
    ReactIntlMixin = require('react-intl'),

    I_Number = React.createClass({

        mixins: [CtxPass, ReactIntlMixin],

        render: function() {
            var lnum = (typeof this.props.value === 'number')? this.props.value : parseFloat(this.props.value, 10);
            return <span>{ this.formatNumber(lnum) }</span>;
        }

    });



module.exports = I_Number;
